// Code your solutions in this file
function writeCards(Names, Occasion){
  let messages = [];

  for (let i = 0; i < Names.length; i++) {
    let message = `Thank you, ${Names[i]}, for the wonderful ${Occasion} gift!`
    messages.push(message);
  }

  return messages;
}

const results = writeCards(["Charlie", "Samip", "Ali"], "Birthday");
console.log(results);

  function countDown(number) {
    if (number < 0) {
      console.log("Number should be non-negative.");
      return;
    }

    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }