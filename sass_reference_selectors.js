<p>
  Turns out nested reference selectors, or nesting in general, is a
  <a target="_blank"
    href="https://www.sitepoint.com/beware-selector-nesting-sass/">
    debatable paradigm to use.
  </a>
  But for styles that are closely intertwined and/or act on the same html elements, it
  can be a clever way to DRY up your code and keep things tidy. Hover effects are a
  great example. But I think the best one I've used so far is with visible and hidden
  transitions in my web apps.
</p>

<b><h2 style="margin-bottom:-17px">
  Sass reference selector syntax
</h2></b>
<pre data-codetype="auto">
<code>
.hidden {
  animation-timing-function: cubic-bezier(0.1, 0.8, 0.1, 1.000);
  transition: opacity 500ms ease-in-out;
  &-true {
    @extend .hidden;
    opacity: 0;
  }
  &-false {
    @extend .hidden;
    opacity: 1;
  }
}</code>
</pre>

<b><h2 style="margin-bottom:-17px">
  Compiles down to CSS
</h2></b>
<pre data-codetype="auto">
<code>.hidden, .hidden-true, .hidden-false {
  animation-timing-function: cubic-bezier(0.1, 0.8, 0.1, 1);
  transition: opacity 500ms ease-in-out;
}
.hidden-true {
  opacity: 0;
}
.hidden-false {
  opacity: 1;
}</code>
</pre>
