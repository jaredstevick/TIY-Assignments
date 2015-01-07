#HTML  Examples

###1. `<address>` -- Address and contact information
* type: block-level
* content: flow  content
* support: all browsers
* example:
```
<address>
  The Iron Yard - Orlando
  101 S. Garland Ave, Suite 102 
  Orlando, FL 32801 </address>
```
#### Attributes: Global Attributes



###2. `<div>` -- generic container for content
* type: block-level
* content: flow content, palpable content
* support: all browsers
* example: 
```<div><p>Any type of content can go here</p></div>```

#### Attributes: height and width
* example:
```
<div style="height: 80%; width: 15%">div content here</div> 
```


###3. `<hr>` -- horizontal rule
* type: block-level
* content: flow content
* support: all browsers
* example: 
`<hr>`

#### Attributes: align, color, noshade, size, width
* example:
```
<hr style="color: darkgray">
```


###4. `<ul>` -- unordered list
* type: block level
* content: flow content
* support: all browsers NO STYLE IN HTML 5, USE CSS
* example:
```
<ul>
    <li>list item </li>
    <li>list item </li>
    <li>list item </li)
</ul>
```
#### Attributes: Global
* values: disc, circle, square
* example:
```
<ul type="circle">
  <li>list item</li>
</ul>
```


###5. `<ol>` -- ordered list
* type: block level
* content: flow content / palpable content if contains at least one `<li>` element
* support: all browsers unless attribute reversed
* example: 
```
<ol>
  <li>list item 1</li>
  <li>list item 2</li>
  <li>list item 3</li>
</ol>
```
#### Attributes: compact, reversed, start, type, global, and event
* values: 1, a, A, i, I
* example:
```
<ol type="a">
  <li>list item a</li>
  <li>list item b</li>
</ol>
```


###6. `<footer>` -- footer with author info, copyright data, and related links
* type: block level
* content: flow or palpable content
* support: all browsers
* example:
```
<footer>copyright and author information</footer>
```
#### Attributes: global and event attributes
* example:
```
<footer style="background-color: black">footer content</footer>
```


###7. `<header>` -- introductory or navigational info
* type: block level
* content: flow or palpable content
* support: all browsers
* example:
```
<header>company logo</header>
```
#### Attributes: global and event attributes
* example:
```
<header style="background-color: blue">header content</header>
```


###8. `<table>` -- table for storing data
* type: block level
* content: flow content
* support: all browsers
* example:
```
<table>
  <tr>
    <td>First Name</td>
    <td>Last Name</td>
  </tr>
</table>
```
#### Attributes: sortable, global, and event
* example:
```
<table style="width: 100%">
  <tr>
    <td>data</td>
    <td>data</td>
  </tr>
</table>
```


###9. `<section>` -- a generic section of the document
* type: block level
* content: flow, sectioning, and palpable content
* support: all browsers
* example:
```
<section>
  <h1>A heading</h1>
  <p>And a paragraph</p>
</section>
```
#### Attributes: global
* example:
```
<section style="background-color: orange">section content</section>
```


###10. `<article>` -- a self contained work of composition intended for redistribution
* type: block level
* content: flow, sectioning, and palpable content
* support: all browsers
* example:
```
<article>
  <h3>Article Heading</h3>
    <p>Article text...</p>
</article>
```
#### Attributes:  global and event attributes
* example:
```
<article style="background-color: red">article content</article>
```


###11. `<small>` -- makes text font size smaller
* type: inline
* content: phrasing and flow content
* support: all browsers
* example:
```
<small>This text will be smaller</small>
```
#### Attributes: global and event
* example:
```
<p>The sentence will end with <small style="color: blue">smaller text</small></p>
```


###12. `<strong>`  -- makes text bold
* type: inline
* content: phrasing content
* support: all browsers
* example:
```
<strong>This text will be bold.</strong>
```
#### Attributes:  global and event attributes
* example:
```
<p><strong style="font-size: 2em">here is some text</strong></p>
```


###13. `<button>`  -- a clickable button
* type: inline
* content: phrasing, flow, interactive content
* support: all browsers
* example:
```
<button name="button">Click Here</button>
```
#### Attributes: name, type, value, form, formaction, autofocus, disabled, formenctype, formmethod, formnovalidate, formtarget
* values: type: button | reset | submit, value: text, formtarget: _blank | _self | _parent | _top, framename, formmethod: get | post, formnovalidate: formnovalidate, form: form id, formaction: url, disabled: boolean, autofocus: boolean, formenctype: application | multipart | text
* example:
```
<button type="button">Show hint</button>
```


###14. `<img>`  -- an image
* type: inline
* content: flow, phrasing
* support: all browsers
* example:
```
<img src="image.jpg"/>
```

###15. `<textarea>` -- a text field
* type: inline
* content: flow, phrasing, interactive 
* support: all browsers
* example:
```
<textarea name="textarea" rows="10" cols="50">Write your text here</textarea>
```

###16. `<em>` -- emphasis / italics
* type: inline
* content: flow, phrasing, palpable
* support: all browsers
* example:
```
<p>Here is some text <em>and this part will be italicized</em>. But not this stuff</p>
```

###17. `<br>` -- inserts a line break (good for poems)
* type: inline
* content: flow, phrasing
* support: all browsers
* example:
```
<br>
```

###18. `<a>` -- anchor (link)
* type: inline
* content: flow, phrasing, interactive, palpable content
* support: all browsers
* example:
```
<a href="http://www.reddit.com/">Reddit</a>
```

###19. `<abbr>` -- abbreviations (title contains info)
* type: inline
* content: phrasing, flow, palpable
* support: all browsers
* example:
```
<p>B-Rock is the president of the <abbr title="United States of America">USA</abbr></p>
```

###20. `<label>`
* type: inline
* content: flow, phrasing, interactive, form content
* support: all browsers
* example: 
```
<label>Click Here <input type="text" id="User" name="Name" /></label>
```

