﻿// Copyright 2014-2023 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(c){function a(a,b,e){a=A[a];for(var m="",x=b;x<b+e;x++)m+=String.fromCharCode(a[x]^255);return m}if(void 0==c.Shared)throw Error("Vintasoft.Shared is not found.");if("4.0.0.3"!==c.version)throw Error("Wrong script version.");if(void 0==c.Imaging)throw Error("Vintasoft.Imaging is not found.");var b=c.Shared,B=c.Imaging.UI,l=B.Dialogs,e=B.UIElements,A=[];A.push([137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,156,144,146,
146,154,145,139,188,151,158,145,152,154,155,182,145,140,154,141,139,223,156,144,146,146,154,145,139,137,140,140,155,154,210,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,154,155,150,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,156,144,146,146,154,145,139,186,155,150,139,187,150,158,147,144,152,215,214,173,154,145,158,146,154,223,168,144,141,148,140,151,154,154,139,137,140,140,155,
154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,153,150,145,155,177,154,135,139,189,138,139,139,144,145,137,140,155,137,210,155,150,158,147,144,152,137,140,140,155,154,210,153,150,145,155,171,154,135,139,175,158,145,154,147,136,144,141,148,140,151,154,154,139,173,154,145,158,146,154,155,137,140,140,155,154,210,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,136,144,141,148,140,151,154,154,139,178,144,137,154,155,146,144,137,154,168,144,141,148,
140,151,154,154,139,187,150,158,147,144,152,140,154,139,188,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,188,147,144,140,154,139,154,135,139,172,154,158,141,156,151,185,150,145,150,140,151,154,155,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,210,139,150,139,147,154,182,145,140,154,141,139,223,185,138,145,156,139,150,144,145,137,
140,140,155,154,210,155,150,158,147,144,152,210,156,158,145,156,154,147,189,138,139,139,144,145,188,154,147,147,223,185,144,141,146,158,139,137,140,140,155,154,210,155,150,158,147,144,152,210,144,148,189,138,139,139,144,145,153,150,145,155,171,154,135,139,187,150,158,147,144,152,178,144,137,154,223,168,144,141,148,140,151,154,154,139,137,140,140,155,154,210,156,144,146,146,154,145,139,175,158,145,154,147,153,150,145,155,171,154,135,139,179,158,157,154,147,137,140,140,155,154,210,155,150,158,147,144,
152,210,156,147,144,140,154,189,138,139,139,144,145,157,139,145,223,157,139,145,210,155,154,153,158,138,147,139,144,148,189,138,139,139,144,145,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,175,158,145,154,147,156,158,145,156,154,147,189,138,139,139,144,145,137,140,138,150,210,155,150,158,147,144,152,188,144,145,139,154,145,139,154,155,
150,139,188,151,158,141,139,187,150,158,147,144,152,186,155,150,139,223,188,151,158,141,139,146,144,155,158,147,210,139,150,139,147,154,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,210,139,150,139,147,154,185,150,145,155,223,171,154,135,139,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,188,158,145,156,154,147,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,156,147,144,140,154,
189,138,139,139,144,145,186,155,150,139,223,156,144,146,146,154,145,139,185,150,145,155,223,177,154,135,139,156,151,158,141,139,172,154,147,154,156,139,154,155,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,175,158,145,154,147,137,140,140,155,154,210,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,182,145,140,154,141,139,223,188,151,158,141,139,176,180,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,
139,175,158,145,154,147,157,139,145,223,157,139,145,210,143,141,150,146,158,141,134,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,175,158,145,154,147,154,141,141,144,141,176,156,156,138,141,154,155,153,150,145,155,177,154,135,139,189,138,139,139,144,145,156,151,158,141,139,186,155,150,139,
154,155]);c.Imaging=c.Imaging||(c.Imaging={});(function(c){c.Office=c.Office||(c.Office={});(function(c){c.UI=c.UI||(c.UI={});(function(c){var m=c.Panels;c.Dialogs=c.Dialogs||(c.Dialogs={});(function(c){var p=function(d){var c=p.superclass;p.prototype.show=function(){this._19791.update();c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,57,33),a(0,138,16));b.VintasoftLocalizationJS.setStringConstant(a(0,445,21),a(0,896,2));b.VintasoftLocalizationJS.setStringConstant(a(0,409,25),a(0,
760,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,57,33)),cssClass:a(0,685,11)});f.set_HeaderIndex(5);this._19791=d=new m.WebUiRenameWorksheetPanelJS({cssClass:a(0,642,18)},d);b.suf23(d,a(0,219,16),{a:this},function(a,b){var d=a.data.a;d._12178(a.type,b);d.hide()});b.suf23(d,a(0,1005,12),{a:this},function(a,b){a.data.a._12178(a.type,b)});var h=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,445,21)),localizationId:a(0,
564,8),onClick:{callback:function(a,b){a.data.a._19791.renameWorksheet()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,549,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,409,25)),localizationId:a(0,630,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,739,21)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(p,l.WebUiDialogJS);var q=function(d){var c=q.superclass;q.prototype.show=function(){this._24721.update();c.show.call(this)};
b.VintasoftLocalizationJS.setStringConstant(a(0,572,31),a(0,480,14));b.VintasoftLocalizationJS.setStringConstant(a(0,445,21),a(0,896,2));b.VintasoftLocalizationJS.setStringConstant(a(0,409,25),a(0,760,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,572,31)),cssClass:a(0,685,11)});f.set_HeaderIndex(5);this._24721=d=new m.WebUiMoveWorksheetPanelJS({cssClass:a(0,981,24)},d);b.suf23(d,a(0,262,14),{a:this},function(a,b){var d=a.data.a;d._12178(a.type,b);d.hide()});
b.suf23(d,a(0,1005,12),{a:this},function(a,b){a.data.a._12178(a.type,b)});var h=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,445,21)),localizationId:a(0,564,8),onClick:{callback:function(a,b){a.data.a._24721.moveWorksheet()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,549,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,409,25)),localizationId:a(0,630,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),
k={localizationId:a(0,276,19)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(q,l.WebUiDialogJS);var r=function(d){var c=r.prototype,f=r.superclass;c.textSearchFinished=function(a,b){};b.VintasoftLocalizationJS.setStringConstant(a(0,955,26),a(0,730,9));b.VintasoftLocalizationJS.setStringConstant(a(0,154,35),a(0,806,9));b.VintasoftLocalizationJS.setStringConstant(a(0,525,24),a(0,320,5));var h=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,955,26)),cssClass:a(0,
685,11),localizationId:a(0,512,13)});h.set_HeaderIndex(5);d=new m.WebUiFindTextPanelJS({cssClass:a(0,200,19)},d);b.suf23(d,a(0,325,18),{a:this},function(b,d){b.data.a._12178(a(0,325,18),d)});this._25138=d;var g=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:a(0,806,9),localizationId:a(0,1017,14),onClick:{callback:function(a,b){a.data.a._25138.findNext()},data:{a:this}}}),k=new e.WebUiButtonInputJS({cssClass:a(0,549,15),value:a(0,320,5),localizationId:a(0,783,11),onClick:{callback:function(a,
b){a.data.a.hide()},data:{a:this}}}),y={localizationId:a(0,466,14)};f.constructor.call(this,[h],[d],[g,k],y);delete c.textSearchFinished};b.extend(r,l.WebUiDialogJS);var z=function(d){var c=z.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,362,32),a(0,394,15));b.VintasoftLocalizationJS.setStringConstant(a(0,445,21),a(0,896,2));b.VintasoftLocalizationJS.setStringConstant(a(0,409,25),a(0,760,6));this._16117=d;var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
362,32)),cssClass:a(0,685,11)});f.set_HeaderIndex(5);this._24511=d=new m.WebUiSelectFunctionPanelJS({cssClass:a(0,828,25)},d);var h=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,445,21)),localizationId:a(0,564,8),onClick:{callback:function(b,d){var c=b.data.a,k=c._24511.getSelectedFormula();c._16117._19741._15364(k+a(0,136,2));c.hide()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,549,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
409,25)),localizationId:a(0,630,12),onClick:{callback:function(a,b){var c=a.data.a;c._16117._19741._4085(!0);c.hide()},data:{a:this}}}),k={localizationId:a(0,935,20)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(z,l.WebUiDialogJS);var s=function(c){var n=s.superclass;s.prototype.clear=function(){this._6197.clear()};b.VintasoftLocalizationJS.setStringConstant(a(0,853,31),a(0,43,14));b.VintasoftLocalizationJS.setStringConstant(a(0,445,21),a(0,896,2));b.VintasoftLocalizationJS.setStringConstant(a(0,
409,25),a(0,760,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,853,31)),cssClass:a(0,685,11)});f.set_HeaderIndex(5);this._6197=new m.WebUiCommentPanelJS({cssClass:a(0,494,18)},c);b.suf23(this._6197,a(0,29,14),{a:this},function(a,b){var c=a.data.a;c._12178(a.type,b);c.hide()});b.suf23(this._6197,a(0,1005,12),{a:this},function(a,b){a.data.a._12178(a.type,b)});c=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
445,21)),localizationId:a(0,564,8),onClick:{callback:function(a,b){a.data.a._6197.insertComment()},data:{a:this}}});var h=new e.WebUiButtonInputJS({cssClass:a(0,549,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,409,25)),localizationId:a(0,630,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),g={cssClass:a(0,189,11),localizationId:a(0,343,19)};n.constructor.call(this,[f],[this._6197],[c,h],g)};b.extend(s,l.WebUiDialogJS);var t=function(c){var n=t.superclass;t.prototype.fill=
function(){this._6197.fill()};b.VintasoftLocalizationJS.setStringConstant(a(0,90,29),a(0,794,12));b.VintasoftLocalizationJS.setStringConstant(a(0,445,21),a(0,896,2));b.VintasoftLocalizationJS.setStringConstant(a(0,409,25),a(0,760,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,90,29)),cssClass:a(0,685,11)});f.set_HeaderIndex(5);this._6197=new m.WebUiCommentPanelJS({cssClass:a(0,494,18)},c);b.suf23(this._6197,a(0,29,14),{a:this},function(a,b){var c=a.data.a;
c._12178(a.type,b);c.hide()});b.suf23(this._6197,a(0,1005,12),{a:this},function(a,b){a.data.a._12178(a.type,b)});c=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,445,21)),localizationId:a(0,564,8),onClick:{callback:function(a,b){a.data.a._6197.editComment()},data:{a:this}}});var h=new e.WebUiButtonInputJS({cssClass:a(0,549,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,409,25)),localizationId:a(0,630,12),onClick:{callback:function(a,
b){a.data.a.hide()},data:{a:this}}}),g={cssClass:a(0,189,11),localizationId:a(0,119,17)};n.constructor.call(this,[f],[this._6197],[c,h],g)};b.extend(t,l.WebUiDialogJS);var u=function(c){var n=u.superclass;u.prototype.show=function(){this._3460.update();n.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,696,34),a(0,434,11));b.VintasoftLocalizationJS.setStringConstant(a(0,445,21),a(0,896,2));b.VintasoftLocalizationJS.setStringConstant(a(0,409,25),a(0,760,6));this._16117=c;var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
696,34)),cssClass:a(0,685,11)});f.set_HeaderIndex(5);this._3460=c=new m.WebUiCellNumberFormatPanelJS({cssClass:a(0,603,27)},c);var h=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,445,21)),localizationId:a(0,564,8),onClick:{callback:function(a,b){var c=a.data.a,d=c._3460.getSelectedFormat();null!=d&&c._16117._19741._22833(d);c.hide()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,549,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
409,25)),localizationId:a(0,630,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,295,25)};n.constructor.call(this,[f],[c],[h,g],k)};b.extend(u,l.WebUiDialogJS);var v=function(c,n){var f=v.prototype,h=v.superclass;f.show=function(){h.show.call(this);this._9213._17591();var a=this._9213._14207.get_SpreadsheetEditorControl()._19741;null!=a._8076()&&a._12608(null);this._7965.set_IsEnabled(!1)};f.addSelectedChart=function(){this._9213.addSelectedChart()};b.VintasoftLocalizationJS.setStringConstant(a(0,
0,29),a(0,884,12));b.VintasoftLocalizationJS.setStringConstant(a(0,445,21),a(0,896,2));b.VintasoftLocalizationJS.setStringConstant(a(0,409,25),a(0,760,6));f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,0,29)),cssClass:a(0,685,11)});f.set_HeaderIndex(5);var g=new m.WebUiInsertChartPanelJS({cssClass:a(0,898,22)},c,n);this._9213=g;b.suf23(g,a(0,1005,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._12178(d,b)});var k=new e.WebUiButtonInputJS({cssClass:a(0,
920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,445,21)),localizationId:a(0,564,8),onClick:{callback:function(a,b){a.data.a.addSelectedChart()},data:{a:this}}});this._7965=k;var y=new e.WebUiButtonInputJS({cssClass:a(0,549,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,409,25)),localizationId:a(0,630,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}});b.suf23(g,a(0,815,13),{a:this},function(a,b){a.data.a._7965.set_IsEnabled(!0)});var l={localizationId:a(0,
766,17)};h.constructor.call(this,[f],[g],[k,y],l)};b.extend(v,l.WebUiDialogJS);var w=function(c){var l=w.superclass;w.prototype.show=function(){this._6517.update();l.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,235,27),a(0,675,10));b.VintasoftLocalizationJS.setStringConstant(a(0,445,21),a(0,896,2));b.VintasoftLocalizationJS.setStringConstant(a(0,409,25),a(0,760,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,235,27)),cssClass:a(0,685,11)});
f.set_HeaderIndex(5);this._6517=c=new m.WebUiEditChartPropertiesPanelJS({cssClass:a(0,642,18)},c);b.suf23(c,a(0,1031,11),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._12178(d,b)});b.suf23(c,a(0,1005,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._12178(d,b)});var h=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,445,21)),localizationId:a(0,564,8),onClick:{callback:function(a,b){a.data.a._6517.editChart()},data:{a:this}}}),
g=new e.WebUiButtonInputJS({cssClass:a(0,549,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,409,25)),localizationId:a(0,630,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,660,15)};l.constructor.call(this,[f],[c],[h,g],k)};b.extend(w,l.WebUiDialogJS);c.WebUiMoveWorksheetDialogJS=q;c.WebUiRenameWorksheetDialogJS=p;c.WebUiFindTextDialogJS=r;c.WebUiSelectFunctionDialogJS=z;c.WebUiInsertCommentDialogJS=s;c.WebUiEditCommentDialogJS=t;c.WebUiCellNumberFormatDialogJS=
u;c.WebUiInsertChartDialogJS=v;c.WebUiEditChartPropertiesDialogJS=w})(c.Dialogs||(c.Dialogs={}))})(c.UI||(c.UI={}))})(c.Office||(c.Office={}))})(c.Imaging||(c.Imaging={}))})(Vintasoft||(Vintasoft={}));
