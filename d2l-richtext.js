/**
	@demo demo/d2l-richtext.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 's-html/s-html.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-richtext">
	<template strip-whitespace="">
		<s-html html="[[_processedRichtext]]"></s-html>
	</template>

	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-richtext',
	properties: {
		richtext: {
			observer: '_onRichTextChanged',
			type: String
		},
		_processedRichtext: String,
		quicklinkConsumer: {
			type: String,
			default: null
		}
	},
	ready: function() {
		this._onRichTextChanged(this.richtext);
	},
	_onRichTextChanged: function(richtext) {
		if (!richtext) {
			return;
		}
		var curVal = richtext;
		curVal = this._replaceIfProviderGiven(/(<\/? ?)d2l-richtext-quicklink/g, this.quicklinkConsumer, richtext);
		this._processedRichtext = curVal;
	},
	_replaceIfProviderGiven: function(tagName, provider, richtext) {
		if (!provider) {
			return richtext;
		}
		function replace(str, tagStart) {
			return tagStart + provider;
		}
		return richtext.replace(tagName, replace);
	}
});
