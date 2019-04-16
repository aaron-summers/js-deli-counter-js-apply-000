//takeANumber function indexes customer names
/* declares a function and takes 2 parameters 
- what's passed to name is added to the initally empty array passed to line. 
Then the function returns a greeting. */

function takeANumber(line, name) {

    line.push(name);
  
  return "Welcome, " + name + ". You are number " + (line.length) + " in line.";
}

// var count = 0;

// function takeANumber(line) {
  
//   count += 1;
  
//   line.push(count);
  
//   return "Welcome, you are number: " + count;
// }

//nowServing function returns the person being currently served and then removed them from the line

/* This function takes in the current line of people as its input.
It checks if the current line of people if empty. 
If it is it returns a string that says no one is currently waiting.

Otherwise, it stores the first person (stores the element at the 0th index in array passed to line) in the local variable name.
Then it removes one element at the 0th position using splice method.
Then it returns the name of the person being served (the element at the index 0) .shift*/

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = line[0];
    line.splice(0, 1); 
    return "Currently serving " + name + ".";
  }
}

//currentLine function 

/*Takes one parameter which is the current line of people. 
Checks if there isn't anyone in the array. 
If there is no one, it returns a string saying there is no one. 

Otherwise, creates a variable that stores an empty array. 
Loops until the people in the current line stored in the previously declared empty array are returned as a string.*/

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  var newLine = [];
  for (let i = 0; i < line.length; i++) {
    newLine.push(i+1 + ". " + line[i]);
    
  }
  return "The line is currently: " + newLine.join(", ");
}
