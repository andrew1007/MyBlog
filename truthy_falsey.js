<p>
  truthy and falsey are non-boolean arguments that can
  be used in a conditional in leui of an explicit true or false statement.
  They exist for convenience.
</p>

const aString = 'test string'
if (aString.length > 0) {
  console.log('this string is not empty')
}
if (aString) {
  console.log('this string is not empty')
}

<p>
  Sometimes I'm not positive whether or not a value is truthy or falsey.
  It's easy to find out with a quick ternary statement in the dev console.
</p>

0 ? true : false // false, number zero is falsey
'1' ? true : false //true,non-empty strings are truthy
[] ? true : false //true, objects are truthy
'' ? true : false //false, empty strings are falsey
22 ? true : false // true, nonzero numbesr are truthy
-1 ? true : false // true
