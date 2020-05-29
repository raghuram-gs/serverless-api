import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamo-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.TableName,
        Key: {
            userid: event.requestContext.identity.cognitoIdentityId,
            designid:event.pathParameters.id
        },
        UpdateExpression: "SET content= :content, attachment= :attachment",
        ExpressionAttributeValues: {
            ":attachment": data.attachment || null,
            ":content": data.content || null
        },
        ReturnValues: "ALL_NEW"
    };

    await dynamoDb.update(params);
    return {status: true};
});