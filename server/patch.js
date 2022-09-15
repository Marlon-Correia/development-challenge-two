const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { patientId, name, dateBirth, city, address, email } = JSON.parse(
    event.body
  );
  const params = {
    TableName: "medcloud_db",
    Key: {
      ID: patientId,
    },
    UpdateExpression: "set #a = :x, #b = :e, #c = :y, #d = :z, #e = :t",
    ExpressionAttributeNames: {
      "#a": "name",
      "#b": "email",
      "#c": "dateBirth",
      "#d": "address",
      "#e": "city",
    },
    ExpressionAttributeValues: {
      ":x": name,
      ":e": email,
      ":y": dateBirth,
      ":z": address,
      ":t": city,
    },
    ReturnValues: "UPDATED_NEW",
  };

  return await dynamo
    .update(params)
    .promise()
    .then((response) => {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "PATCH",
        },
        body: "successfully updated",
      };
    })
    .catch((error) => {
      console.error(error);
    });
};
