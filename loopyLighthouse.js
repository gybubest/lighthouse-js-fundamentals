let result = 100;
while (result <= 200) {
  if (result % 3 === 0 && result % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (result % 3 === 0) {
    console.log('Loopy');
  } else if (result % 4 === 0) {
    console.log('Lighthouse');
  } else {
    console.log(result);
  }
  result += 1;
}