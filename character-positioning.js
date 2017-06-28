/*
- function that returns the position of an character in the string
*/

function characterPositioning(sentence) {
  var object = {};
  var character = "";

  for(var i = 0; i < sentence.length; i++) {
    character = sentence[i];
    if(!object[character]) {
      object[character] = [i];
    } else {
      object[character].push(i);
    }
  }

  return object;
}

console.log(characterPositioning("lighthouse in the house"));