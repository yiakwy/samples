function startsWithLetterA(element, index, array) {
  if (element.startsWith('a')) return element;
}
var cuteNames = ['jeff', 'marc', 'addy', 'francois'];

cuteNames.findIndex(startsWithLetterA); // 2
