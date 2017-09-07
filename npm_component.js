<h2>
  I solved my most difficult problem and I shared it with npm
</h2>

<p>
  I was having trouble making image rendering tidy and clean in
  a project I'm currently brushing up on. I solved it using
  a component as a wrapper that controls CSS based on whether or
  not all images were loaded inside the wrapper's children.
</p>

<p>
  You can get my package react-on-images-loaded here. It's a more versatile
  version of my original solution. It's okay if you hate it and
  uninstall and it's only natural to run into problems. If either of those
  happen, kindly take the time to tell me what's
  happening or send me the hateful message
  <a href={"https://github.com/andrew1007/react-on-images-loaded/issues"}>
    here
  </a>! :)
</p>

<h2>
  It was shocking easy to make my own package
</h2>

<p>
  In the same way create-react-app makes setting up a React.js app
  a breeze,
  react-component exists for anyone looking to publish their own
  npm package. Note that you have to make your own repo when using
  react-component. That's the only thing it won't do automatically.
</p>

<h2>
  Key commands for react-component
</h2>

<p>
  react-component gives you 2 all-encompassing terminal commands
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


<h2>
  npm gives you 24 hours to unpublish any awful releases
</h2>

<p>
  When you have precisely zero downloads and are messing up left and right,
  it's pretty much ok to unpublish releases. But unpublishing in general
  is done in poor taste, because it betrays the trust of your userbase and
  is considered rude.
</p>
