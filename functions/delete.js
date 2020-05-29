import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamo-lib";

export const main = handler(async (event, context) => {

const params = {
    TableName: process.env.tableName,
    Key:{
        userid: event.requestContext.identity.cognitoIdentityId,
        designid: event.pathParameters.id
    }
};

await dynamoDb.delete(params);
return {status:true};
});