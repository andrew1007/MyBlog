<p>
  JavaScript's use of equality is, objectively, counterintuitive. But there is
  some method to the madness. In its own way, it makes sense, but can not
  be inferred. You have to read learn it.
</p>

<h2>
  Type coercion with ==
</h2>

<p>
  The thing that everyone hates. So what is type coercion? Type coercion is
  what happens when you ask JavaScript to compare something that is sort-of-kind-of
  might be true. The list of rules are massive. Numbers can turn into strings; null
  turns into 0; booleans convert to numbers; This monstrosity of "logic" with null and 0.
  http://javascript.info/comparison#strange-result-null-vs-0
  You can sit down and learn all of the
  rules if you hate yourself. But the more convenient option is to just never use ==
</p>

<h2>
  Strict equality with ===
</h2>

<p>
  This is equality with zero type coercion. Much better. But there are some still
  shortcomings.
</p>

<h2>
  JavaScript equalities can only properly compare primitives and object instances
</h2>
https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[] === [] //false
[] instanceof Object // true
new String("") === new String("")
new String("") instanceof Object //true

'' === ''
'' instanceof Object // false

<p>
  For primitives, comparisons are very straightforward. They are compared by value.
  A list of primitives that
</p>

<p>
  For objects, anything that's not a primitive, Javascript's equality operator
  can only compare whether or not objects are the exact same. JavaScript checks
  if the two objects exist in the same memory address.
</p>
a = [] // empty array in one memory address
b = [] // another empty array in another memory address
a === a //true, same array in memory
a === b //false, not same array
a === [] //false, new array instantiated that is obviously not the same as a
