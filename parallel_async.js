ES7 brings async/await to, for the most part, replace promises for asynchronous function calls. But promises still have some fancy tricks up their sleeves that aren't going away just yet.<br />
<br />
<br />
<b>
<span style="font-size: large;">If promises dont rely on each other, run them in parallel</span></b><br />
Use Promise.all like a synchronous "checkpoint" and make sure all of the promises you ran asynchronously (without await) end up being resolved by the time your code actually needs them.<br />
<br />
<br />
<span style="font-size: large;"><b>Sample Promises</b></span>
<br />
<pre data-codetype="auto"><code>
const sendText = text =&gt; {
  return new Promise(function(resolve, reject) {
    setTimeout( _ =&gt; resolve(text), 2000)
  });
}

const chainText = (prevText, newText) =&gt; {
  return new Promise(function(resolve, reject) {
    setTimeout( _ =&gt; resolve(prevText + newText), 2000)
  });
}
</code></pre>
<br />
<br />
<span style="font-size: large;"><b>Must be synchronous</b></span>
<br />
<pre data-codetype="auto"><code>
const text = await sendText('Sally')
const chainedText = await chainText(text, ' loves dogs')
console.log(chainedText);
//takes 4 seconds to finish
</code></pre>
<br />
<b><br /></b>
<span style="font-size: large;"><b>Needlessly chained</b></span>
<br />
<pre data-codetype="auto"><code>
const text = await sendText('Sally')
const otherText = await sendText(' loves dogs')
console.log(text + otherText);
//4 seconds to finish
</code></pre>
<br />
<b><br /></b>
<span style="font-size: large;"><b>Parallel, non-chained</b></span>
<br />
<pre data-codetype="auto"><code>
const text = sendText('Sally')
const otherText = sendText(' loves dogs')
const [first, second] = await Promise.all([text, otherText])
console.log(first + second);
//takes 2 seconds to finish
</code></pre>
