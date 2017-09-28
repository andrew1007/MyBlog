<p><p>
  You should always be as expressive as possible with your code.
  That usually means you will sometimes sacrifice wordiness with
  brevity. But sometimes you can get have the best of both worlds.
  Luckily, ES6 gives you a lot of tools to do just that.
</p>

<b><h2 style="margin-bottom:-5px">
  Arrow functions can be one-liners
</h2></b>

<p style='margin-bottom:-5px;'>
  The beauty of compact and verbose code. Note that one-liners
  are denoted using parenthesis, not curly braces. The parenthesis
  allow implicit return, as opposed to JavaScripts normal explicit
  return
</p>

<pre class="language-javascript">
<code>const arrowFunc = (text) => (setTimeout(() => console.log(text), 100))
//or, same thing, but less on a single line:
const arrowFunc = (text) => (
  setTimeout(() => console.log(text), 100)
)

const normalFunction = function(text) {
  setTimeout(() => {
    console.log(text)
  }, 1000)
}</code>
</pre>

<p style='margin-top:-20px'>
  1 or 3 lines vs 5? Yes please. Youll find this helping you even
  more in the future with more complex functions when it comes
  to readable and concise code.
</p>

<b><h2 style="margin-bottom:-5px">
  <a
    target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">
    Object destructure
  </a>
  shorthand assignment
</h2></b>

<p style='margin-bottom:-23px;'>
  A basic example. I love and use this all the time.
</p>

<pre class="language-javascript">
  <code>const sampleObject = {
  dog: 'Sam',
  cat: 'Snow',
  guineaPig: 'Chub-Chub' //RIP 1998-2002
}

//ES6 object literal shorthand assignment
const { dog, cat, guineaPig } = sampleObject

//Closest ES5 equivalent
var dog = sampleObject.dog, cat = sampleObject.cat, guineaPig = sampleObject.guineaPig</code>
</pre>

<p style='margin-top:-20px'>
  I prefer the ES6 one-liner a lot more than the
  ES5 equivalent. But this is an unfair comparison, because nobody writes
  code like that in ES5. This leads me to my point previous point. Clean
  code in ES6 requires you to approach code from a different prespective.
</p>

  You should always be as expressive as possible with your code.
  That usually means you will sometimes sacrifice wordiness with
  brevity. But sometimes you can get have the best of both worlds.
  Luckily, ES6 gives you a lot of tools to do just that.
</p>

<b><h2 style="margin-bottom:-5px">
  <a
    target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">
    Arrow functions
  </a>
  can be one-liners
</h2></b>

<p style='margin-bottom:-5px;'>
  The beauty of compact and verbose code. Note that one-liners
  are denoted using parenthesis, not curly braces. The parenthesis
  allow implicit return, as opposed to JavaScripts normal explicit
  return
</p>

<pre class="language-javascript">
<code>const arrowFunc = (text) => (setTimeout(() => console.log(text), 100))
//or, same thing, but less on a single line:
const arrowFunc = (text) => (
  setTimeout(() => console.log(text), 100)
)

const normalFunction = function(text) {
  setTimeout(() => {
    console.log(text)
  }, 1000)
}</code>
</pre>

<p style='margin-top:-20px'>
  1 or 3 lines vs 5? Yes please. Youll find this helping you even
  more in the future with more complex functions when it comes
  to readable and concise code.
</p>

<b><h2 style="margin-bottom:-5px">
  <a
    target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">
    Object destructure
  </a>
  shorthand assignment
</h2></b>

<p style='margin-bottom:-23px;'>
  A basic example. I love and use this all the time.
</p>

<pre class="language-javascript">
  <code>const sampleObject = {
  dog: 'Sam',
  cat: 'Snow',
  guineaPig: 'Chub-Chub' //RIP 1998-2002
}

//ES6 object literal shorthand assignment
const { dog, cat, guineaPig } = sampleObject

//Closest ES5 equivalent
var dog = sampleObject.dog, cat = sampleObject.cat, guineaPig = sampleObject.guineaPig</code>
</pre>

<p style='margin-top:-20px'>
  I prefer the ES6 one-liner a lot more than the
  ES5 equivalent. But this is an unfair comparison, because nobody writes
  code like that in ES5. This leads me to my point previous point. Clean
  code in ES6 requires you to approach code from a different prespective.
</p>
