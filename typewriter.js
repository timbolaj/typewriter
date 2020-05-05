const sentence = 'hello there from lighthouse labs';

const animatedString = phrase => {
  for (index in phrase) {
    let letter = phrase[index];
    setTimeout(() => {
      process.stdout.write(letter);
    }, index * 50)
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, phrase.length * 50)
}

animatedString(sentence);