<h2>
  Make an array have only unique values
</h2>

<pre data-codetype="auto">
<code>
  const sampleArray = [1, 1, 1, 1, 1, 32, 2, 1, 4]
  console.log([...new Set(sampleArray)])
</code>
</pre>

<h2>
  Concat two arrays
</h2>
<pre data-codetype="auto">
<code>
array1 = [1, 3, 4]
array2 = [4, 52]
console.log([...array1, ...array2])
</code>
</pre>

<h2>
  Merge two objects or merge one into an
  object you're already assigning
</h2>

<pre data-codetype="auto">
<code>
  const obj1 = {a: 1, b: 2, c: 3}
  const obj2 = {d: 4, e: 5}
  console.log({...obj1, ...obj2})
  console.log({f: 6, g: 7, ...obj1})
  //chrome://flags/#enable-javascript-harmony
  //needed if you want to test this out in chrome console
</code>
</pre>

<h2>
  Split a string
</h2>
<pre data-codetype="auto">
<code>
Array.from("a string to  be split")
</code>
</pre>

<h2>
  Array or object deconstruct as arguments
</h2>
<pre data-codetype="auto">
<code>
[{a: 2, b: 10}, {a: 3, b: 11}, {a:5, b: 12}]
.forEach(({a, b}) => console.log(a))
//argument variables must be same as key name
[[1,2], [3,4]].forEach(([a, b]) => console.log(a))
</code>
</pre>

<h2>
  Maps: Hold values, objects, or functions as a key
  in a key/value pair data structure
</h2>
<p>
  Normal objects can only hold strings as keys
</p>
<pre data-codetype="auto">
<code>
const key = [1, 2, 3]
const val = 'key is an array'
const map = new Map()
map.set(key, val)
for (let [key, val] of map) {
  console.log(key)
  console.log(val)
}
</code>
</pre>
