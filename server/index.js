const http = require('http');
const fs = require('fs');

/**
 * @type {import('http').RequestListener}
 */
async function requestListener(request, response) {
  const buffers = [];
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  const url = new URL(request.url, `http://${request.headers.host}`);

  const filename = url.searchParams.get('filename');

  const data = Buffer.from(buffers);

  fs.writeFileSync(filename, data);

  response.end();
}

http.createServer(requestListener).listen(3001, () => {
  console.log('Server started');
});
