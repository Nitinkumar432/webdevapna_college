async function greet(){
    return "hello";

}
console.log(greet());
 // Function to generate a random value between min (inclusive) and max (inclusive)
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Async function to print a random value after a delay
  async function printRandomAfterDelay() {
    // Delay between 1 to 3 seconds
    const delay = getRandomValue(1000, 3000);
    await new Promise(resolve => setTimeout(resolve, delay));
    const randomValue = getRandomValue(1, 100); // Generating a random value between 1 to 100
    console.log(randomValue);
  }
  
  // Function to call printRandomAfterDelay three times
  async function callPrintRandomThreeTimes() {
    for (let i = 0; i < 3; i++) {
      await printRandomAfterDelay();
    }
  }
  
  // Calling the function
 console.log( callPrintRandomThreeTimes());
  