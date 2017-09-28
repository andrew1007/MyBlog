<p>
  JavaScript's use of equality is, objectively, counterintuitive. But there is
  some method to the madness. In its own way, it makes sense (mostly). But it can not
  be inferred. You have to learn it.
</p>

<b><h2 style="margin-bottom:-5px">
  Type coercion with ==
</h2></b>

<p>
  The thing that everyone hates. So what is type coercion? Type coercion is
  what happens when you ask JavaScript to compare something that is sort-of-kind-of
  might be true. The
  <a
    target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">
    list of rules
  </a>
  are massive. Numbers can turn into strings; null
  turns into 0; booleans convert to numbers; This
  <a
    target="_blank"
    href="http://javascript.info/comparison#strange-result-null-vs-0">
    monstrosity of "logic"
  </a>
  with null and 0.
  You can sit down and learn all of the
  rules if you hate yourself. But the more convenient option is to just never use ==
</p>

<b><h2 style="margin-bottom:-5px">
  Strict equality with ===
</h2></b>

<p>
  This is equality with zero type coercion. Much better.
</p>

<b><h2 style="margin-bottom:-5px">
  JavaScript's strict equality properly compares primitives
</h2></b>

<p>
  For
  <a
    target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive">
    primitives,
  </a>
  comparisons are very straightforward. They are compared by its
  value, because that's all a primitive has.
</p>

<b><h2 style="margin-bottom:-5px">
  Equality by value comparison breaks down for any type of object
</h2></b>

<p style='margin-bottom:-23px;'>
  Sounds weird, but it makes sense (I promise).
</p>

<pre class="language-javascript">
  <code>[] === [] //false
[] instanceof Object // true
new String("") === new String("") //false
new String("") instanceof Object //true
'' === '' // true
'' instanceof Object // false</code>
</pre>

<p style='margin-bottom:-23px;margin-top:-20px'>
  For objects, anything that's not a primitive, JavaScript's equality operator
  can only compare whether or not objects have the same identity. Not if they
  have the same value. JavaScript checks
  if the two objects exist in the same memory address (aka they are the exact same).
  This is formally known as identity comparison. JavaScript is not the only
  language that does equality by reference, so it's unfair to hold it against the language.
</p>

<pre class="language-javascript">
  <code>a = [] // empty array in one memory address
b = [] // another empty array in another memory address
a === a //true, same array in memory
a === b //false, not same array in memory
a === [] //false, new array instantiated that is obviously not the same as a</code>
</pre>

<b><h2 style="margin-bottom:-5px;margin-top:-20px;">
  Testing equality of NaN: an entire paragraph dedicated to it
</h2></b>

<p style='margin-bottom:-23px;'>
  <code>NaN</code> is tricky. Strangely enough, <code>NaN</code> is not equal to itself when using
    the equality operators. Which is why <code>isNaN</code> exists, but isNaN has an unintuitive exception:
    the fact that <code>isNaN(undefined) === true</code>.
    ES6 to the rescue: <code>Number.isNaN</code> (yes they are different). No exceptions.
    There are some wild algorithms that existed to test true <code>NaN</code> equality with
    no exceptions, but now it's much simpler:
</p>

<pre class="language-javascript">
  <code>const equalityTestNaN = (num1, num2) => {
  return Number.isNaN(num1) && Number.isNaN(num2)
}</code>
</pre>

<p style='margin-bottom:-23px;margin-top:-20px'>
  If both arguments are <code>NaN</code>, then they're equal to each other by proxy, right?
  Another nice way to check equality
  would be to use <code>Object.is</code>. No algorithm required.
  Just remember that this comparator tests for any type.
</p>

<pre class="language-javascript">
  <code>Object.is(NaN, NaN) //true</code>
</pre>
