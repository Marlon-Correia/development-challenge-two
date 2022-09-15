const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "medcloud_db",
    Item: {
      ID: AWS.util.uuid.v4(),
      name: data.name,
      dateBirth: data.dateBirth,
      email: data.email,
      city: data.city,
      address: data.address,
    },
  };

  return await dynamo
    .put(params)
    .promise()
    .then(() => {
      return {
        statusCode: 201,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
        },
        body: "Paciente criado com sucesso.",
      };
    })
    .catch((err) => {
      console.log(err);
    });
};
