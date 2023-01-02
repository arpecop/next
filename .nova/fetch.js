const fetch = require("node-fetch");

const queue = [];
let running = 0;
const concurrency = 5;

async function enqueue(url) {
  queue.push(url);
  return run();
}

async function run() {
  if (running >= concurrency || !queue.length) {
    return;
  }
  running++;
  const url = queue.shift();
  try {
    const response = await fetch(url);
    const data = await response.json();
    // Process the response and cache it to the database
  } catch (error) {
    console.error(error);
  } finally {
    running--;
    run();
  }
}

(async () => {
  const urls = [
    "https://www.example.com/1",
    "https://www.example.com/2",
    "https://www.example.com/3",
    "https://www.example.com/4",
    "https://www.example.com/5",
    "https://www.example.com/6",
  ];
  for (const url of urls) {
    await enqueue(url);
  }
})();
