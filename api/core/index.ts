import { APIGatewayEvent, Context } from 'aws-lambda';
import { Configuration, OpenAIApi } from 'openai';
import createAPI from 'lambda-api';

const api = createAPI();
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

api.get('/', async (req, res) => {
	const completion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: req.query.prompt,
		max_tokens: 256
	});
	return { result: completion.data.choices[0].text };
})

export async function handler(event: APIGatewayEvent, context: Context) {
	return await api.run(event, context);
}