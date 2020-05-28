import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamo-lib";


export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        KeyConditionalExpression: "userid = :userid",
        ExpressionAttributeValues:{
            ":userid":event.requestContext.identity.cognitoIdentity
        }
    };

    const result = await dynamoDb.query(params);

    return result;
});