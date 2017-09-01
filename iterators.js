<p>
  <a
    target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol">
    Symbols
  </a>
   were quietly added to ES6. As a web developer, they have low use cases. But
  <a
    target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator">
    Symbol.iterator
  </a>
   embedded into certain object types,
  give developers access to ES6s new iterator.
</p>

<b><h2 style="margin-bottom:-5px">
  The
  <a
    target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">
    for...of
  </a>
  loop
</h2></b>

<p>
  This new loop is similar to
  <a target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">
    .forEach
  </a>
   for arrays, but the main difference is that
   <a target="_blank"
     href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" >
     for...of
   </a>
    loops can be used on anything with a
    <a target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator">
      Symbol.iterator
    </a>
    attribute.
</p>

<pre data-codetype="auto">
  <code>for (let char of "console.logged character by character") {
    console.log(char);
  }</code>
</pre>

<pre data-codetype="auto">
  <code>new String()[Symbol.iterator] ? true : false // true
    new Array()[Symbol.iterator] ? true : false // true
    new Set()[Symbol.iterator] ? true : false // true
    new Map()[Symbol.iterator] ? true : false // true
  </code>
</pre>

<p>
  This means strings,
  <a target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">
    maps
  </a>,
  <a target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set">
    sets
  </a>,
  and arrays are all iteratable using
  <a target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">
    for...of
  </a>
  loops.
</p>

<span style="font-size: large;"><b><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target="_blank">Array.from</a> for objects that have a <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator" target="_blank">Symbol.iterator</a></b></span><br />
<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target="_blank">Array.from</a> is essentially a "mapped" version of what a <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" target="_blank">for...of loop</a> does.<br />
<pre data-codetype="auto"><code>Array.from("string") //['s',&nbsp;'t',&nbsp;'r',&nbsp;'i',&nbsp;'n',&nbsp;'g'&nbsp;]
Array.from(new Set([1, 1, 3, 4, 5])) //[1,&nbsp;3,&nbsp;4,&nbsp;5&nbsp;] from a set to an array

const sampleMap = new Map()
sampleMap.set(1, '1s value').set(2, '2s value').set(3, '3s value')
//Map&nbsp;{&nbsp;1&nbsp;=&gt;&nbsp;'1s&nbsp;value',&nbsp;2&nbsp;=&gt;&nbsp;'2s&nbsp;value',&nbsp;3&nbsp;=&gt;&nbsp;'3s&nbsp;value'&nbsp;}
Array.from(sampleMap)
//[&nbsp;[1,&nbsp;'1s&nbsp;value'],&nbsp;[2,&nbsp;'2s&nbsp;value'],&nbsp;[3,&nbsp;'3s&nbsp;value']&nbsp;] key value pairs
</code></pre>
<br />
<span style="font-size: large;"><b>Objects don't have a <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator" target="_blank">Symbol.iterator</a></b></span>
<br />
<pre data-codetype="auto"><code>new Object()[Symbol.iterator] ? true : false // false!?
</code></pre>
I found this surprising, but it's easy to circumvent and still use <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" target="_blank">for...of</a> loops using <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank">Object.keys</a>, <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values" target="_blank">Object.values</a>, and <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries" target="_blank">Object.entries</a>.
<br />
<pre data-codetype="auto"><code>const sampleObject = {a: 1, b: 2, c: 3}
Object.values(sampleObject) //[1, 2, 3]
Object.keys(sampleObject) //['a', 'b', 'c']
Object.entries(sampleObject) // [ ['a', 1], ['b', 2], ['c', 3] ]
</code></pre>
<br />
<span style="font-size: large;"><b><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">Destructure assignment</a> for iterators</b></span><br />
This is not exclusive to <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" target="_blank">for...of</a> loops, but it's nice to point out that the ES6 <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">destructure assignment</a> works on iterators for variable declaration.
<br />
<pre data-codetype="auto"><code>const sampleMap = new Map()
sampleMap.set(1, '1s value').set(2, '2s value').set(3, '3s value')
for (let [key, val] of sampleMap) {
  console.log(key)
  console.log(val)
}
</code></pre>
<br />
<span style="font-size: large;"><b>Performance</b></span><br />
In its current state with transpilers, ES6 gets outperformed by raw ES5. In some cases <a target="_blank" href="http://incaseofstairs.com/2015/06/es6-feature-performance/" target="_blank">it's by a lot</a>. But in my opinion, it's usually worth it for cleanliness and maintainability. It also makes me think of this quote:<br />
<blockquote>
<a target="_blank" href="https://twitter.com/mraleph/status/411549064787152896?lang=en" target="_blank">often devs still approach performance of JS code as if they are riding a horse cart but the horse had long been replaced with fusion reactor [<i>sic</i>]</a>
</blockquote>
Before I conclude, let me show you how to create an array of only unique values with the power of ES6:
<br />
<pre data-codetype="auto"><code>const sampleArray = [1 , 2, 1, 1, 1, 11]
Array.from(new Set(sampleArray))
//or even better, using spread
[...new Set(sampleArray)]
//[1,&nbsp;2,&nbsp;11]
</code></pre>
<br />
Happy coding!
