export async function onRequest(context) {
  const ip = context.request.headers.get('cf-connecting-ip');
  return new Response(JSON.stringify({ ip: ip }), {
    headers: { 'content-type': 'application/json' },
  });
}
