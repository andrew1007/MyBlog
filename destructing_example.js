<p>
  Comments usually help you, but they can lie. Sometimes that lie will
  lead you down a wild goose chase to find something that doesn't exist.
  The JavaScript engine cannot validate comments so they have to always be
  taken at face value. Use them only when you need to. Luckily, ES6 brings
  some nice features to cleanly avoid comments when passing props into components.
</p>
<p>
  Let's look at a small example. Not all of data in our ParentComponent
  gets passed into UserProfile, its child component. But at the same time,
  we want to make our code as readable and expressive as possible. There
  are multiple ways to approach this.
</p>

<pre data-codetype="auto">
<code>import React, { Component } from 'react'
// ParentComponent props
// this.props = {
//   name: 'Andrew',
//   description: 'A person',
//   imageUrl: 'http://www.somewebsite.com/profile_picture.jpg',
//   age: 26,
//   height: '180cm',
//   birthday: '10.18.1990',
//   favoriteColor: 'blue',
//   martialStatus: 'single'
// }
export default class ParentComponent extends Component {
  render() {
    return (
      &ltdiv&gt
        &ltUserProfile/&gt {/*how should we pass the props we need in?*/}
      &lt/div&gt
    )
  }
}

class UserProfile extends Component {
  render() {
    return (
      &ltdiv&gt
        { this.props.name }
        { this.props.description}
        birthday: { this.props.birthday }
        martial status: {this.props.martialStatus}
      &lt/div&gt
    )
  }
}</code>
</pre>

<b><h2 style="margin-bottom:-17px">
    Option 1: Pass in each prop individually
</h2></b>

<pre data-codetype="auto">
<code>&ltUserProfile
  birthday={this.props.birthday}
  name={this.props.name}
  description={this.props.description}
  martialStatus={this.props.martialStatus}
/&gt</code>
</pre>

<p style="margin-top:-20px;margin-bottom:40px;">
  Your knee-jerk, non-ES6 choice. It's expressive,
  but quite lengthy. We can make it more concise with ES6.
</p>

<b><h2 style="margin-bottom:-17px">
  Option 2: Use the
  <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">
    spread
  </a>
  operator on this.props in component
</h2></b>

<pre data-codetype="auto">
<code>//using birthday, name, description, and martialStatus
&ltUserProfile {...this.props} /&gt</code>
</pre>

<p style="margin-top:-20px;margin-bottom:40px;">
  Very concise, but almost no expressiveness.
  It relies on a comment that may be outdated.
  Not only that, but you're passing in a lot of extra data in.
  Don't go out of your way to confuse you from the future.
</p>

<b><h2 style="margin-bottom:-17px">
  Option 3:
  <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">
    Object destructure
  </a>
  assign this.props, use
  <a target="_blank" href="https://ariya.io/2013/02/es6-and-object-literal-property-value-shorthand">
    object literal shorthand
  </a>
  to make new object, and
  <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">
    spread
  </a>
  the object into the component
</h2></b>

<pre data-codetype="auto">
<code>const { birthday, name, description, martialStatus } = this.props
const userProfileProps = { birthday, name, description, martialStatus }
&ltUserProfile {...userProfileProps} /&gt</code>
</pre>

<p style="margin-top:-20px;margin-bottom:40px;">
  Sounds like a lot of work, but it's worth it.
  This style is just as expressive as option 1 and as concise as it gets.
  Good code speaks for itself.
</p>
