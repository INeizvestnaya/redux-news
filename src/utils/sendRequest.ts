async function sendRequest(url: string) {
  const request = await fetch(url);
  const data = await request.json();
  return data;
}

export default sendRequest;
