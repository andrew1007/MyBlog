<p>
  ES7 brings
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">
    async/await
  </a>
 which, for the most part, replaces promise chains for asynchronous
 function calls. But promises still have some fancy tricks up their
 sleeves that can't be abstracted out.
</p>

<b><h2 style="margin-bottom:-5px">
  If promises dont rely on each other,
  run them in parallel
</h2></b>

<p>
  Use
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all">
    Promise.all
  </a>
  like a synchronous "checkpoint".
  <pre class="language-javascript"><code> await Promise.all</code></pre>
  It accepts an array of promises and only returns a value after all promises are
  resolved. This means you can pass in promises that are currently running that
  will always resolve before the subsequent lines of code are run.
</p>

<b><h2 style="margin-bottom:-17px">
  Sample Promises
</h2></b>

<pre class="language-javascript">
<code>const sendText = text =&gt; {
  return new Promise(function(resolve, reject) {
    setTimeout( _ =&gt; resolve(text), 2000)
  })
}

const chainText = (prevText, newText) =&gt; { //relies on value from sendText
  return new Promise(function(resolve, reject) {
    setTimeout( _ =&gt; resolve(prevText + newText), 2000)
  })
}</code>
</pre>

<b><h2 style="margin-bottom:-17px">
  Must be synchronous
</h2></b>

<pre class="language-javascript">
<code>const chainedPromises = async () => {
  const text = await sendText('Sally')
  const chainedText = await chainText(text, ' loves dogs')
  console.log(chainedText)
  //4 seconds to finish
}</code>
</pre>

<b><h2 style="margin-bottom:-17px">
  Needlessly synchronous
</h2></b>

<pre class="language-javascript">
<code>const allSyncedPromises = async () => {
  const text = await sendText('Sally')
  const otherText = await sendText(' loves dogs') //doesn't rely on the above function
  console.log(text + otherText)
  //4 seconds to finish
}</code>
</pre>

<b><h2 style="margin-bottom:-17px">
  Parallel, synchronous only when needed
</h2></b>

<pre class="language-javascript">
<code>const parallelPromises = async () => {
  const text = sendText('Sally')
  const otherText = sendText(' loves dogs')
  const [first, second] = await Promise.all([text, otherText])
  //Promise.all + await, to ensure all promises are resolved before continuing
  console.log(first + second)
  //2 seconds to finish
}
</code>
</pre>
