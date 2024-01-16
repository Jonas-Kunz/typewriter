
const sentence = "Jonas is okay at JavaScript";

const logDelay = function(string, delay) {
  let counter = 0;

  for (let char of string) {

    setTimeout(() => {
      process.stdout.write(char);
    }, delay + counter);

    counter += delay;

  };

  setTimeout(() => {
    process.stdout.write("\n");
  }, counter + 1)

};

logDelay(sentence, 500)