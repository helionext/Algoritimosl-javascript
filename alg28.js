function separateCamelCase(string) {
  let arrUpperCase = [0];

  for (let i = 0; i < string.length; i++) {
    const codeUnicode = string[i].charCodeAt();
    if (codeUnicode >= 65 && codeUnicode <= 90) {
      arrUpperCase.push(i);
    }
  }

  let arrWords = [];
  let lastSlice = 0;
  for (let i = 0; i < arrUpperCase.length; i++) {
      
      arrWords.push(string.substring(arrUpperCase[i], arrUpperCase[i + 1]))
      lastSlice = arrUpperCase[i + 1];
  }

  return arrWords.join(" ");
}

console.log(separateCamelCase("camelCasing"));
console.log(separateCamelCase("identifier"));
console.log(separateCamelCase(""));
console.log(separateCamelCase("camelCasingTest"));
