const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { patientId } = JSON.parse(event.body);
  const params = {
    TableName: "medcloud_db",
    Key: {
      ID: patientId,
    },
    ReturnValues: "ALL_OLD",
  };

  return await dynamo
    .delete(params)
    .promise()
    .then((response) => {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "DELETE",
        },
        body: "Paciente deletado com sucesso",
      };
    })
    .catch((error) => {
      console.log(error);
    });
};
