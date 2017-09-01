Stateless is good. It's a fundamental strength of functional programming. React components are class based, but basic components, that don't a state, can be written as an arrow function.<br />
<br />
<span style="font-size: large;"><b>Why stateless&nbsp;</b></span><br />
Stateless components are predictable because they do not have their own <b><code>this</code></b>&nbsp;variable that can be sneakily manipulated in a function. An arrow function's <b><code>this</code></b>&nbsp;is inherited from the scope above it. If you are making a component that doesn't use any React.js features (aside from jsx), you can probably turn it into an arrow function component. Less overhead, less lines and more predictable behavior.<br />
<br />
<b><span style="font-size: large;">Class-based component</span></b>
<br />
<pre data-codetype="auto"><code>import React, { Component } from 'react'
class ProfilePicture extends Component {
  render() {
    return (
      &ltdiv&gt
        &ltimg src={this.props.imageUrl}/&gt
        {this.props.name}
        {this props.userDescription}
      &lt/div&gt
    )
  }
}

</code></pre>
<b><span style="font-size: large;">Arrow function component</span></b>
<br />
<pre data-codetype="auto"><code>import React from 'react'
const ProfilePicture = props =&gt; (
  &ltdiv&gt;
    &ltimg src={props.imageUrl}/&gt
    {props.name}
    {props.userDescription}
  &lt/div&gt
) //parentheses for implicit return
</code></pre>
