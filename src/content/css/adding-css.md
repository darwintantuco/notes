---
category: 'CSS'
title: 'Adding CSS'
path: '/css/adding-css'
date: '2020-04-27'
---

### Inline style

```html
<p style="color: red; font-weight: bold">
  hello
</p>
```

### Style tag in _head_ section

```html
<head>
  <style>
    p {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
```

### External style sheet

```css
/* main.css */
p {
  color: red;
  font-weight: bold;
}
```

```html
<head>
  <link rel="stylesheet" href="main.css" />
</head>
```
