export const onRequest = async (context, next) => {
	const response = await next();
	const html = await response.text();

	console.log('Request Recieved!');

	return new Response(html, {
		status: 200,
		headers: response.headers,
	});
};
