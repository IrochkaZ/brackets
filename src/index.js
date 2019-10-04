
module.exports = function check(str, bracketsConfig) {
  var begin = str.length;
  for (i = 0; i < bracketsConfig.length; i++) {
    var find = bracketsConfig[i].join('');
    str = str.replace(find, '');
    if (begin > str.length && str.length !== 0) {
      check(str, bracketsConfig);
    } else if (begin === str.length && str.length !== 0) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}









