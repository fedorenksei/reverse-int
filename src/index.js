module.exports = function reverse (n) {
  const string = n.toString().replace('-', '')
  res = ''
  for (let i = string.length - 1; i >= 0; i--) {
    res += string[i]
  }

  return res
}
