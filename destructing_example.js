Comments usually help you, but they can lie. Sometimes that lie will lead you down a wild goose chase to find something that doesn't exist. The JavaScript engine cannot validate comments so they have to always be taken at face value, so use them only when you need to.
<br />
<br />
Let's look at a small example. Not all of data in our ParentComponent gets passed into UserProfile, its child component. But at the same time, we want to make our code as readable and expressive as possible. There are multiple ways to approach this.
<pre data-codetype="auto"><code>import React, { Component } from 'react'
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
}
</code></pre>
<br/>

<span style="font-size: large;"></span>
<b><span style="font-size: large;">Option 1: Pass in each prop individually</span></b>
<pre data-codetype="auto"><code>&ltUserProfile
  birthday={this.props.birthday}
  name={this.props.name}
  description={this.props.description}
  martialStatus={this.props.martialStatus}
/&gt
</code></pre>

Your knee-jerk, non-ES6 choice. It's expressive, but quite lengthy. We can make it more concise with ES6.
<br />
<br/>

<span style="font-size: large;"><br /></span>
<b><span style="font-size: large;">Option 2: Use spread operator on this.props in component</span></b>
<pre data-codetype="auto"><code>//using birthday, name, description, and martialStatus
&ltUserProfile {...this.props} /&gt
</code></pre>
Very concise, but almost no expressiveness. It relies on a comment that may be outdated. Not only that, but you're passing in a lot of extra data in. Don't go out of your way to confuse you from the future.
<br />
<br/>
<span style="font-size: large;"><br /></span>
<b><span style="font-size: large;">Option 3: Object destructure assign this.props, use object literal shorthand to make new object, and spread new object into component</span></b>
<pre data-codetype="auto"><code>const { birthday, name, description, martialStatus } = this.props
const userProfileProps = { birthday, name, description, martialStatus }
&ltUserProfile {...userProfileProps} /&gt
</code></pre>

Sounds like a lot of work, but it's worth it. This style is just as expressive as option 1 and as concise as it gets. Good code speaks for itself.<br />
