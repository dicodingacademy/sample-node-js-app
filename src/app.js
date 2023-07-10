const Hapi = require('@hapi/hapi');

(async () => {
  const server = Hapi.server({
    port: 3000,
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return '<h1>Hello World</h1>';
    },
  });

  await server.start();
  console.log('Server running on http://localhost:3000');
})();