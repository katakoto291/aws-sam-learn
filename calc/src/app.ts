import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    if (event.body) {
        const request = JSON.parse(event.body);

        const a = parseInt(request.a, 10);
        const b = parseInt(request.b, 10);

        return {
            statusCode: 200,
            body: JSON.stringify({
                result: a + b,
            }),
        };
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'missing body',
            }),
        };
    }
};
