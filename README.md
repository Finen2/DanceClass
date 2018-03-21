# DanceClass

links:
  Trello:
    https://trello.com/b/UuUxyoDz/miniprojekt-1

Krav:
1. Javascript
  A. All contet need to be renderd via Javascript.
  B.
2. Bootstrap
3. Sass
4.

Functoinalety:
1. Login to
  A. Student
    ◊
  B. Trainer
2. Landing page
  A.


(How to set html in Javascript)
Select tje right path to post to:

dokument.querySelectorAll("class"):

(el = variable)
let el = dokument.querySelectorAll("class");

el
OBS !!! do not write(output: (Nodelist(3) [div.card, div.card, div.card]))


Links:
exampel of query selectors:
https://codepen.io/pen/?editors=1010




(
  let el = document.querySelectorAll(".card");
undefined
el
NodeList(3) [div.card, div.card, div.card]
el[0]
<div class=​"card">​<img class=​"card-img-top" src=​"content/​img/​testImg.png" alt=​"Card image cap">​<div class=​"card-body">​<h5 class=​"card-title">​Kids​</h5>​"HEJ SVEJS"<p class=​"card-text">​BlBLABLABLBA​</p>​""<p class=​"card-text">​<small class=​"text-muted">​Last updated 3 mins ago​</small>​</p>​""</div>​</div>​
el[0].childNodes
NodeList(5) [text, img.card-img-top, text, div.card-body, text]0: textassignedSlot: nullbaseURI: "http://127.0.0.1:3000/index.html"childNodes: NodeList []data: "↵          "firstChild: nullisConnected: truelastChild: nulllength: 11nextElementSibling: img.card-img-topnextSibling: img.card-img-topnodeName: "#text"nodeType: 3nodeValue: "↵          "ownerDocument: documentparentElement: div.cardparentNode: div.cardpreviousElementSibling: nullpreviousSibling: nulltextContent: "↵          "wholeText: "↵          "__proto__: Text1: img.card-img-top2: text3: div.card-bodyaccessKey: ""align: ""assignedSlot: nullattributes: NamedNodeMap {0: class, class: class, length: 1}baseURI: "http://127.0.0.1:3000/index.html"childElementCount: 3childNodes: NodeList(7)0: text1: h5.card-title2: text3: p.card-text4: text5: p.card-text6: textlength: 7__proto__: NodeListchildren: HTMLCollection(3) [h5.card-title, p.card-text, p.card-text]classList: DOMTokenList ["card-body", value: "card-body"]className: "card-body"clientHeight: 392clientLeft: 0clientTop: 0clientWidth: 461contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falsefirstChild: textfirstElementChild: h5.card-titlehidden: falseid: ""innerHTML: "↵            <h5 class="card-title">Kids</h5>↵            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>↵            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>↵          "innerText: "Kids↵This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.↵↵Last updated 3 mins ago↵↵"isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: p.card-textlocalName: "div"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: nullnextSibling: textnodeName: "DIV"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 392offsetLeft: 0offsetParent: div.cardoffsetTop: 276offsetWidth: 461onabort: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectstart: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullonvolumechange: nullonwaiting: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwheel: nullouterHTML: "<div class="card-body">↵            <h5 class="card-title">Kids</h5>↵            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>↵            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>↵          </div>"outerText: "Kids↵This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.↵↵Last updated 3 mins ago↵↵"ownerDocument: documentparentElement: div.cardparentNode: div.cardprefix: nullpreviousElementSibling: img.card-img-toppreviousSibling: textscrollHeight: 392scrollLeft: 0scrollTop: 0scrollWidth: 460shadowRoot: (...)slot: ""spellcheck: truestyle: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}tabIndex: -1tagName: "DIV"textContent: "↵            Kids↵            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.↵            Last updated 3 mins ago↵          "title: ""translate: true__proto__: HTMLDivElement4: textlength: 5__proto__: NodeList
el[0].childNodes[3]
<div class=​"card-body">​<h5 class=​"card-title">​Kids​</h5>​<p class=​"card-text">​…​</p>​<p class=​"card-text">​…​</p>​</div>​
el[0].childNodes[3].childNodes
NodeList(7) [text, h5.card-title, text, p.card-text, text, p.card-text, text]0: text1: h5.card-title2: text3: p.card-text4: text5: p.card-text6: textlength: 7__proto__: NodeList
el[0].childNodes[3].childNodes[5]
<p class=​"card-text">​…​</p>​
el[0].childNodes[3].childNodes[6]
#text
el[0].childNodes[3].childNodes[6].data="TEST"
"TEST"
el[0].childNodes[3].childNodes[6].data=""
""
el[0].childNodes[3].childNodes[4].data=""
""
el[0].childNodes[3].childNodes[4]
#text
el[0].childNodes[3].childNodes[4].data="YO!"
"YO!"
el[0].childNodes[3].childNodes[4].data=""
""
el[0].childNodes[3].childNodes[2]
#text
el[0].childNodes[3].childNodes[2].data="HEJ SVEJS"
"HEJ SVEJS"
el[0].childNodes[3].childNodes[2].data
"HEJ SVEJS"
el[0].childNodes[3].childNodes[3]
<p class=​"card-text">​"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."</p>​
el[0].childNodes[3].childNodes[3].innerHTML=""
""
el[0].childNodes[3].childNodes[3].innerHTML="BlBLABLABLBA"
"BlBLABLABLBA"
el[1].childNodes[3].childNodes[3].innerHTML="BlBLABLABLBA 2"
"BlBLABLABLBA 2"
el[2].childNodes[3].childNodes[3].innerHTML="BlBLABLABLBA 3"
"BlBLABLABLBA 3"
document
#document<!DOCTYPE html><html lang=​"en">​#shadow-root (open)<head>​…​</head>​<meta charset=​"UTF-8">​<meta name=​"viewport" content=​"width=device-width, initial-scale=1, shrink-to-fit=no">​<link rel=​"stylesheet" href=​"https:​/​/​maxcdn.bootstrapcdn.com/​bootstrap/​4.0.0/​css/​bootstrap.min.css" integrity=​"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/​dAiS6JXm" crossorigin=​"anonymous">​<link rel=​"stylesheet" type=​"text/​css" href=​"style/​css/​main.css">​<title>​Dancing Lion​</title>​</head>​<body>​<!--Navbar--><nav class=​"navbar navbar-expand-sm bg-dark navbar-dark fixed-top d-xl-flex" id=​"navbar" style=​"top:​ 0px;​">​…​</nav>​<!--Login modal--><div class=​"modal hide" id=​"myModal" tabindex=​"-1" role=​"dialog">​<div class=​"modal-header">​…​</div>​<div class=​"modal-body">​…​</div>​</div>​<!--Content--><main class=​"container-fluid">​…​</main>​<!--Bootstrap--><script src=​"https:​/​/​code.jquery.com/​jquery-3.2.1.slim.min.js" integrity=​"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/​rE9/​Qpg6aAZGJwFDMVNA/​GpGFF93hXpG5KkN" crossorigin=​"anonymous">​</script>​<script src=​"https:​/​/​cdnjs.cloudflare.com/​ajax/​libs/​popper.js/​1.12.9/​umd/​popper.min.js" integrity=​"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/​ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin=​"anonymous">​</script>​<script src=​"https:​/​/​maxcdn.bootstrapcdn.com/​bootstrap/​4.0.0/​js/​bootstrap.min.js" integrity=​"sha384-JZR6Spejh4U02d8jOt6vLEHfe/​JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin=​"anonymous">​</script>​<!--Javascript--><script type=​"text/​javascript" src=​"js/​login.js">​</script>​<script type=​"text/​javascript" src=​"js/​loginData.js">​</script>​<script type=​"text/​javascript" src=​"js/​indexBehavior.js">​</script>​<script type=​"text/​javascript" src=​"js/​navbarHide.js">​</script>​<!-- Code injected by live-server --><script type=​"text/​javascript">​…​</script>​</body>​</html>​

  )
