# d2l-richtext

The D2L-Richtext component takes in Annotated Html from a d2l siren richtext entity and renders it to the page, allowing the client to define custom behaviour for annotated tags by providing consumers.

```
<link rel="import" href="../../../polymer/polymer.html">
<link rel="import" href="d2l-richtext.html">
<!-- Make sure to import all the custom providers here -->
<link rel="import" href="d2l-richtext-quicklink-parent.html">

...

<d2l-richtext
	richtext="[[richtext]]"
	quicklink-consumer="d2l-richtext-quicklink-parent"
></d2l-richtext>
```
