window.promises = [];
 
// Create an array of five promises with random delays between 1 and 5 seconds
for (let i = 0; i < 5; i++) {
  const delay = Math.floor(Math.random() * 5) + 1;
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${delay} seconds`);
    }, delay * 1000);
  });
  promises.push(promise);
}
 
// Wait for the first promise to resolve using Promise.any()
Promise.any(promises)
  .then((result) => {
    // Print the result to the output div
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch((error) => {
    // Handle errors if no promise resolves
    console.log('All promises rejected:', error);
  });

