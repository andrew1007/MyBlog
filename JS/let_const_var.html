<p>
  <b><code>let</code></b> and <b><code>const</code></b> are two new declaration types in JavaScript, which
  have the ability to completely replace <b><code>var</code></b> declaration. To use them
  effectively, and understand why they can be a direct replacement,
  it's important to understand how they work.
</p>

<b><h2 style="margin-bottom:-5px">
  <b><code>var</code></b> is function scoped. It is hoisted and initialized at the top
</h2></b>

<p>
  <b><code>var</code></b>, regardless of where it is assigned, will become declared
  and initialized at the beginning of the function. This means that any variable you
  declare will be available everywhere inside the function. This process is referred to as hoisting.
</p>

<b><h2 style="margin-bottom:-5px">
  Hoisted variables with <b><code>var</code></b> are declared and initialized at
  the top of the function, but have no value
</h2></b>

<p>
  All variables that are declared and initialized with <b><code>var</code></b>
  are initialized as <b><code>undefined</code></b>. They have no value until you
  reach the line of code that assigns it a value.
</p>

<pre class="language-javascript">
<code>const undefinedConsoleLog = _ => {
  console.log(sadlyUndefined) //undefined
  var sadlyUndefined = 'declared by var, undefined where I console log'
  var isDefined = 'value assigned before console log'
  console.log(isDefined) //'value assigned before console log'
}</code>
</pre>

<b><h2 style="margin-bottom:-5px">
  <b><code>let</code></b> and <b><code>const</code></b> is block scoped
</h2></b>
<p>
  This means that variable declaration [appears] to not be hoisted. A big win.
  But this big win requires you to know exactly what a "block" is, or you will
  get into trouble in places that seem counterintuitive.
</p>

<pre class="language-javascript">
<code>const failedResponse = _ => {
  if ('this is a block'){
    let response = 'yes, this is a block'
    console.log(response) //'yes, this is a block'
  }
  console.log(response) //throws an error
}</code>
</pre>

<p>
  Why? Because my <b><code>if</code></b> statement is considered a block.
  <b><code>response</code></b> is only available inside my <b><code>if</code></b>
  statement. Anything with nested curly braces is considered a block.
</p>

<b><h2 style="margin-bottom:-5px">
  How do I fix my failedResponse function scoping issue?
</h2></b>

<p>
  Easy. Change where the variable is declared. A scope is itself and
  every nested block it contains.
</p>

<pre class="language-javascript">
<code>const fixedResponse = _ => {
  let response //declared, and then initialized as undefined
  console.log(response) //undefined
  if ('this is a block') {
    response = 'yes, this is a block'
    console.log(response) //'yes, this is a block'
  }
  console.log(response) //'yes, this is a block'
}</code>
</pre>

<b><h2 style="margin-bottom:-5px">
  Declaration and initialization are distinct concepts in <b><code>let</code></b> and const
</h2></b>

<p>
  I keep using a word you probably have not seen when people talk
  about hoisting: initialization. Declaration and initialization are not
  the same. Variables are always declared at the top. But <b><code>let</code></b> and
  <b><code>const</code></b>, they are not initialized (unless they are already at the top).
</p>

<p>
  This is how <b><code>let</code></b> and <b><code>const</code></b> become block scoped. Allocation of memory (hoisting)
  always occurs. It is fundamental to the JavaScript engine and will never go away.
  But the initialization process is different. You cannot
  use variables that are not initialized. <b><code>var</code></b> is initialized as <b><code>undefined</code></b>,
  <b><code>let</code></b> and <b><code>const</code></b> throw an error because they are not initialized.
</p>

<pre class="language-javascript">
<code>const hoistedAndInitialized = _ => {
  console.log(initializedVar) //undefined
  var initializedVar = 'declared and initialized as undefined on top'
}

const hoistedButNotInitialized = _ => {
  console.log(uninitializedLet) //ReferenceError: uninitializedLet is not defined
  let uninitializedLet = 'declared at the top, but not initialized. will throw error'
}</code>
</pre>

<b><h2 style="margin-bottom:-5px">
  Replacing <b><code>var</code></b> in any situation
</h2></b>

<p>
  Function and block scoping are fundamentally different, but there's nothing
  stopping you from making the declared block as the entire function.
</p>

<pre class="language-javascript">
<code>const alwaysFunctionScoped = _ => {
  if ('I use var') {
    var text = 'I am available anywhere in the function'
  }
  console.log(text) //'I am available anywhere in the function'
}

const alsoFunctionScoped = _ => {
  let text
  if ('I use let') {
    text = 'I have already been hoisted and initialized.
    function scope === block scope'
  }
  console.log(text) //'I have already been hoisted and initialized.
  // function scope === block scope'
}</code>
</pre>

<b><h2 style="margin-bottom:-5px">
  But be careful with <b><code>let</code></b> and <b><code>const</code></b>...
</h2></b>

<p>
  If I declare <code>text</code> inside my <b><code>if</code></b> statement, they are now different variables.
  They might as well be completely different variable names.
</p>

<pre class="language-javascript">
<code>const innerTextIsNowBlockScopedAgain = _ => {
  let text
  if ('I declare with let inside this block') {
    let text = 'exists inside this inner scope only.'
  }
  console.log(text) //undefined
}</code>
</pre>
