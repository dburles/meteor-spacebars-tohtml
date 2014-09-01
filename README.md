Meteor Spacebars.toHTML
=======================

A simple helper function to assist with rendering spacebars to HTML.

# API

Super basic example

```js
Spacebars.toHTML({ name: 'foo' }, '<p>Hello {{name}}</p>');
```

## Server side rendering

We can render templates on the server by creating files within the `private` directory.

For example, we could create `private/example.html` and its contents might look like:

```html
<html>
<head>
  <title>Example</title>
</head>
<body>
  <h1>Example</h1>
  
  <p>Hello {{name}} this is just an example!</p>
</body>
</html>
```

We can then render it using Meteor's [Assets API](http://docs.meteor.com/#assets)

```js
var html = Spacebars.toHTML({ name: 'foo' }, Assets.getText('example.html'));
```

# License

MIT
