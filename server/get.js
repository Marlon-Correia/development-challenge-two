const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

exports.handler = async (event) => {
  const params = {
    TableName: "medcloud_db",
  };

  return await dynamo
    .scan(params)
    .promise()
    .then((response) => {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
        },
        body: JSON.stringify(response.Items),
      };
    })
    .catch((err) => {
      return { error: err };
    });
};
