function History(t,i,e,o,r){this.container=t,this.maxDepth=i,this.commitDelay=e,this.editor=o,this.parent=o.parent,this.onChange=r;var n={text:"",from:null,to:null};this.first=n,this.last=n,this.firstTouched=!1,this.history=[],this.redoHistory=[],this.touched=[]}History.prototype={scheduleCommit:function(){var t=this;this.parent.clearTimeout(this.commitTimeout),this.commitTimeout=this.parent.setTimeout(function(){t.tryCommit()},this.commitDelay)},touch:function(t){this.setTouched(t),this.scheduleCommit()},undo:function(){if(this.commit(),this.history.length){var t=this.history.pop();return this.redoHistory.push(this.updateTo(t,"applyChain")),this.onChange&&this.onChange(),this.chainNode(t)}},redo:function(){if(this.commit(),this.redoHistory.length){var t=this.redoHistory.pop();return this.addUndoLevel(this.updateTo(t,"applyChain")),this.onChange&&this.onChange(),this.chainNode(t)}},clear:function(){this.history=[],this.redoHistory=[]},historySize:function(){return{undo:this.history.length,redo:this.redoHistory.length}},push:function(t,i,e){for(var o=[],r=0;r<e.length;r++){var n=r==e.length-1?i:this.container.ownerDocument.createElement("BR");o.push({from:t,to:n,text:cleanText(e[r])}),t=n}this.pushChains([o],null==t&&null==i)},pushChains:function(t,i){this.commit(i),this.addUndoLevel(this.updateTo(t,"applyChain")),this.redoHistory=[]},chainNode:function(t){for(var i=0;i<t.length;i++){var e=t[i][0],o=e&&(e.from||e.to);if(o)return o}},reset:function(){this.history=[],this.redoHistory=[]},textAfter:function(t){return this.after(t).text},nodeAfter:function(t){return this.after(t).to},nodeBefore:function(t){return this.before(t).from},tryCommit:function(){window.History&&(this.editor.highlightDirty()?this.commit():this.scheduleCommit())},commit:function(t){this.parent.clearTimeout(this.commitTimeout),t||this.editor.highlightDirty(!0);var i=this.touchedChains();i.length&&(this.addUndoLevel(this.updateTo(i,"linkChain")),this.redoHistory=[],this.onChange&&this.onChange())},updateTo:function(t,i){for(var e=[],o=[],r=0;r<t.length;r++)e.push(this.shadowChain(t[r])),o.push(this[i](t[r]));return"applyChain"==i&&this.notifyDirty(o),e},notifyDirty:function(t){forEach(t,method(this.editor,"addDirtyNode")),this.editor.scheduleHighlight()},linkChain:function(t){for(var i=0;i<t.length;i++){var e=t[i];e.from?e.from.historyAfter=e:this.first=e,e.to?e.to.historyBefore=e:this.last=e}},after:function(t){return t?t.historyAfter:this.first},before:function(t){return t?t.historyBefore:this.last},setTouched:function(t){t?t.historyTouched||(this.touched.push(t),t.historyTouched=!0):this.firstTouched=!0},addUndoLevel:function(t){this.history.push(t),this.history.length>this.maxDepth&&this.history.shift()},touchedChains:function(){var t=this,i=null;function e(t){return t?t.historyTemp:i}function o(t,e){t?t.historyTemp=e:i=e}function r(i){for(var e=[],o=i?i.nextSibling:t.container.firstChild;o&&"BR"!=o.nodeName;o=o.nextSibling)o.currentText&&e.push(o.currentText);return{from:i,to:o,text:cleanText(e.join(""))}}var n=[];function h(t,i){for(var e=i+"Sibling",o=t[e];o&&"BR"!=o.nodeName;)o=o[e];return o}t.firstTouched&&t.touched.push(null),forEach(t.touched,function(i){if(!i||i.parentNode==t.container){i?i.historyTouched=!1:t.firstTouched=!1;var e=r(i),h=t.after(i);h&&h.text==e.text&&h.to==e.to||(n.push(e),o(i,e))}});var s=[];return t.touched=[],forEach(n,function(i){if(e(i.from)){for(var n=[],a=i.from,f=!0;;){if(!(u=e(a))){if(f)break;u=r(a)}if(n.unshift(u),o(a,null),!a)break;f=t.after(a),a=h(a,"previous")}for(a=i.to,f=t.before(i.from);a;){var u;if(!(u=e(a))){if(f)break;u=r(a)}n.push(u),o(a,null),f=t.before(a),a=h(a,"next")}s.push(n)}}),s},shadowChain:function(t){for(var i=[],e=this.after(t[0].from),o=t[t.length-1].to;;){i.push(e);var r=e.to;if(!r||r==o)break;e=r.historyAfter||this.before(o)}return i},applyChain:function(t){var i=select.cursorPos(this.container,!1),e=this;var o=t[0].from,r=t[t.length-1].to;!function(t,i){for(var o=t?t.nextSibling:e.container.firstChild;o!=i;){var r=o.nextSibling;removeElement(o),o=r}}(o,r);for(var n=0;n<t.length;n++){var h=t[n];n>0&&e.container.insertBefore(h.from,r);var s=makePartSpan(fixSpaces(h.text),this.container.ownerDocument);if(e.container.insertBefore(s,r),i&&i.node==h.from){var a=0,f=this.after(h.from);if(f&&n==t.length-1){for(var u=0;u<i.offset&&h.text.charAt(u)==f.text.charAt(u);u++);i.offset>u&&(a=h.text.length-f.text.length)}select.setCursorPos(this.container,{node:h.from,offset:Math.max(0,i.offset+a)})}else i&&n==t.length-1&&i.node&&i.node.parentNode!=this.container&&select.setCursorPos(this.container,{node:h.from,offset:h.text.length})}return this.linkChain(t),o}};