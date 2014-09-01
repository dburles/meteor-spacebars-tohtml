Meteor Spacebars.toHTML
=======================

A simple helper function to assist with rendering spacebars to HTML. Works on both the server and the client.

# API

Super basic example

```js
Spacebars.toHTML({ name: 'foo' }, '<p>Hello {{name}}</p>');
```

Any helpers defined with `UI.registerHelper` will be rendered just like usual. If you're on the server you'll need to make sure they're not just defined on the client so it can see them.

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

## Iron Router

We can also serve templates using [Iron Router's](https://atmospherejs.com/package/iron-router) server side routes.

Here's a simple example:

```js
Router.map(function() {
  this.route('test', {
    where: 'server',
    path: '/test',
    action: function() {
      // This could also come from a Collection
      var data = { name: 'foo' };
      
      this.response.writeHead(200, { 'Content-Type': 'text/html' });
      this.response.end(Spacebars.toHTML(data, Assets.getText('example.html')));
    }
  }
});
```

# License

MIT
