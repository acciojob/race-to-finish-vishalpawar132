window.promises = [];

function createRandomDelayPromise() {
  const min = 1000; // 1 second
  const max = 5000; // 5 seconds
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
}

for (let i = 0; i < 5; i++) {
  promises.push(createRandomDelayPromise());
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.any(promises)
    .then((result) => {
      const outputElement = document.getElementById("output");
      outputElement.textContent = `Resolved after ${result} milliseconds.`;
    })
    .catch((error) => {
      console.error(error);
    });
});

