## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/alexalemany/image-hydrate-loading/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

(setq markdown-xhtml-header-content
      "<style type='text/css'>
ul{
	padding: 0 20px;
}
li{
	width: 100%;
	height: 330px;
	position: relative;
	list-style-type: none;
	margin-bottom: 15px;
}
img{
	width: 100%;
	height: 100%;
	object-fit: cover;
	background-color: #f7f7f7;
	border: 0;
}
.to-hydrate{-webkit-filter:blur(10px);-moz-filter:blur(10px);-o-filter:blur(10px);-ms-filter:blur(10px);filter:url(#blur);filter:blur(10px);filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius="3");-webkit-transition:-webkit-filter .5s linear;-o-transition:.5s -o-filter linear}.to-hydrate .stop{color:red}.to-hydrate[rendered=true]{-webkit-filter:blur(0);filter:blur(0)}
</style>
	
<ul>
<li>
	<img class="to-hydrate" src="https://picsum.photos/id/237/40/22" data-src="https://picsum.photos/id/237/640/360">
</li>
</ul>
(setq markdown-xhtml-header-content
	'<script>
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(1),i=n.n(u),c=function(){function e(t){o()(this,e),this.img=null,this.selector="string"!=typeof t?t:document.querySelector(t),console.log(this.selector),this.addBufferedImage()}return i()(e,[{key:"getAttribute",value:function(e){return this.selector.getAttribute(e)}},{key:"addBufferedImage",value:function(){var e=this;fetch(this.getAttribute("data-src")).then((function(e){return e.arrayBuffer()})).then((function(t){e.selector.src=window.URL.createObjectURL(new Blob([new Uint8Array(t)])),e.selector.setAttribute("rendered",!0)}))}}]),e}();n(2);new c(".to-hydrate")}]);
</script>

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/alexalemany/image-hidrate-loadding/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
