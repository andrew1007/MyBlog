<h2>
  I solved my most difficult problem and shared my solution with npm
</h2>

<p>
  I was having trouble making image rendering tidy and clean in
  a project I'm currently brushing up on. I solved it using
  a component as a wrapper that controls render based on whether or
  not all images were loaded inside the wrapper's children. I
  couldn't find any solutions online so I published it to npm.
</p>

<p>
  Its name is
  <a target="_blank" href="https://www.npmjs.com/package/react-on-images-loaded">
    <code>
      react-on-images-loaded.
    </code>
  </a>
  Check out my
  <a target="_blank" href="https://andrew1007.github.io/react-on-images-loaded/">
    demo
  </a>
  and see how you like it.
  It's a more versatile
  version of my original solution. It's okay if you hate it and
  uninstall. You might run into problems as well. If either of those
  happen, kindly take the time to tell me what's
  happening or send me the hateful message
  <a target="_blank" href="https://github.com/andrew1007/react-on-images-loaded/issues">
    here
  </a>! :)
</p>

<b><h2 style="margin-bottom:-5px">
  It was shocking easy to make my own package
</h2></b>

<p>
  In the same way
  <a target="_blank" href="https://github.com/facebookincubator/create-react-app">
  <code>
    create-react-app
  </code>
  </a>
  makes setting up a React.js app a breeze,
  <a target="_blank" href="https://github.com/JedWatson/generator-react-component">
  <code>
    generator-react-component
  </code>
  </a>
  exists for anyone looking to publish their own
  npm package. Note that you have to make your own repo when using
  react-component. That's the only thing it won't do automatically.
</p>

<h2>
  Key commands for generator-react-component
</h2>

<p style="margin-bottom:-17px">
  <code>generator-react-component</code> gives you 2 all-encompassing terminal commands
  to transpile, publish, and upload changes to your sample website.
  But I'm not a fan, because any error in one of those operations
  halts them all. Here are the ones I use.
</p>

<pre data-codetype="auto">
  <code>npm run build //transpiles example website and component to ES5
npm run publish:site //uploads example.js website to your github repo
npm version <`newversionnum`> //sets new version of package before you
//upload to npm
npm publish //publishes package to npm
  </code>
</pre>

<b><h2 style="margin-bottom:-5px">
  npm gives you 24 hours to unpublish any awful releases
</h2></b>

<p>
  When you have precisely zero downloads and are messing up left and right,
  it's pretty much ok to unpublish releases. But unpublishing in general
  is done in poor taste, because it betrays the trust of your userbase and
  is considered rude.
</p>
