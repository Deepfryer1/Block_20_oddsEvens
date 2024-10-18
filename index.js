// TODO: this file! :)

/*    Pseudo Code
// Declare an array named numbers to store user input
// When the user clicks "Add Number" button
 - Prevent form submission 
 - Get the value from the input field
  - IF the value is a number
    - Add the number to the numbers array
  - Update the Number Bank
  - Clear the input field
// When the user clicks the Sort 1 button
  - IF there are numbers in the numbers array
   - Remove the first number from the numbers array
   - IF the number is even
      - Add the number to the Evens display
   - ELSE 
      - Add the number to the Odds display
   - Update the Number Bank to reflect the new numbers array
// When the user clicks the Sort All button
  - WHILE the numbers array is not empty
   - Remove the first number from the numbers array
  - IF the number is even
     - add all numbers to the Evens display
  - ELSE 
     - Add all numbers to the Odds display
  - Update the number Bank
  */
 
 const numberBank = [];
 const odds = [];
 const evens = [];
 
 document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.querySelector('input[name="number"]');
    const addNumForm = document.querySelector('form');
   const numberBankOutput = document.querySelector('#numberBank > output');
   const oddsOutput = document.querySelector('#odds > output');
   const evensOutput = document.querySelector('#evens > output');
   const sortAll = document.querySelector('#sortAll');
   const sortOne = document.querySelector('#sortOne');
   
   
   addNumForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const numberInputValue = numberInput.value;
      numberBank.push(numberInputValue);
      numberBankOutput.textContent = numberBank;
   });

   sortAll.addEventListener('click', () => {
      
      odds.push(numberBank.filter((number) => number % 2 !==0));
      oddsOutput.textContent = odds;
      evens.push(numberBank.filter((number) => number % 2 ===0));
      evensOutput.textContent = evens;
      numberBank.length = 0;
      numberBankOutput.textContent = '';
                               

   });

   sortOne.addEventListener('click', () => {
      if (numberBank[0]%2 !==0){
         odds.push(numberBank[0]);
         oddsOutput.textContent = odds;
         numberBank.shift();
      } else {
         evens.push(numberBank[0]);
         evensOutput.textContent = evens;
         numberBank.shift();
      }
      numberBankOutput.textContent = numberBank;
   });
   
   
   
});