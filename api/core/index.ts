import { APIGatewayEvent, Context } from 'aws-lambda';
import createAPI from 'lambda-api';

const api = createAPI();

api.get('/', async (req, res) => {
    return { status: 'Hello from Function!' };
});

export async function handler(event: APIGatewayEvent, context: Context) {
    return await api.run(event, context);
};
