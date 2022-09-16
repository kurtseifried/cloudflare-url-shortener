/**
 * For this to work add a route like:
 * https://yourname/*	cloudflare-url-shortener
 */

var urls = {
  "0001": "https://seifried.org",
  "0002": "https://cnn.com/",
  "0003": "https://youtube.com/"
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  const path = new URL(request.url).pathname.substring(1);
  console.log(request.headers['user-agent'], new Date(), path);
  if (path in urls) return new Response(null, {status: 302, headers: {location: urls[path]}});
  else return new Response('404 not found?', {status: 404});
}
