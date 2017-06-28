/*
- return all the unique characters that exist in a string that is passed into the fucntion
- should report back how many instances fo each letter were found in the string
- function countLetters should retunr an object

1. slice the sentence given
2. loop that sentence to fill with property the answer object
3. count the letters updating the value
*/


function countLetters(sentence) {
  var sentence = sentence.toLowerCase().split(' ').join('');
  var answer = {};
  var character = "";

  for(var i = 0; i < sentence.length; i++) {
    character = sentence[i];
    if(!answer[character]) {
      answer[character] = 1;
    } else {
      answer[character] += 1;
    }
  }

  return answer;
}

console.log(countLetters("lighthouse in the house"));
