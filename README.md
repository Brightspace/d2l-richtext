# d2l-richtext

The `d2l-richtext` component takes in Annotated Html from a D2L Siren "richtext" entity and renders it to the page, allowing the client to define custom behaviour for annotated tags by providing consumers.

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

## Demo

Run:

```
polymer serve
```

Then visit `http://127.0.0.1:8081/components/d2l-richtext/demo/d2l-richtext.html`
