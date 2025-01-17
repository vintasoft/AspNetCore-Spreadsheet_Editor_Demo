﻿// Copyright 2014-2025 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(c){function a(a,b,f){a=E[a];for(var l="",C=b;C<b+f;C++)l+=String.fromCharCode(a[C]^255);return l}if(void 0==c.Shared)throw Error("Vintasoft.Shared is not found.");if("4.4.0.1"!==c.version)throw Error("Wrong script version.");if(void 0==c.Imaging)throw Error("Vintasoft.Imaging is not found.");if("14.0.3.1"!==c.Imaging.version)throw Error("Wrong version of Vintasoft.Imaging script.");if(void 0==c.Imaging.Office)throw Error("Vintasoft.Imaging.Office is not found.");if("5.0.3.1"!==c.Imaging.Office.version)throw Error("Wrong version of Vintasoft.Imaging.Office script.");
var b=c.Shared,F=c.Imaging.UI,m=F.Dialogs,f=F.UIElements,E=[];E.push([153,150,145,155,171,154,135,139,179,158,157,154,147,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,175,158,145,154,147,137,140,140,155,154,210,155,154,153,150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,175,158,145,154,147,137,140,140,155,154,210,155,150,158,147,144,152,210,156,158,145,156,154,147,189,138,139,139,144,145,157,139,145,223,157,139,145,210,143,141,150,146,158,141,134,137,
140,140,155,154,210,155,150,158,147,144,152,210,156,147,144,140,154,189,138,139,139,144,145,156,158,145,156,154,147,189,138,139,139,144,145,157,139,145,223,157,139,145,210,155,154,153,158,138,147,139,144,148,189,138,139,139,144,145,136,144,141,148,140,151,154,154,139,173,154,145,158,146,154,155,137,140,140,155,154,210,155,150,158,147,144,152,210,144,148,189,138,139,139,144,145,167,179,172,167,223,155,144,156,138,146,154,145,139,223,150,140,223,145,144,139,223,153,144,138,145,155,209,137,140,140,155,
154,210,154,155,150,139,187,154,153,150,145,154,155,177,158,146,154,175,158,145,154,147,140,154,147,154,156,139,187,154,153,150,145,154,155,177,158,146,154,187,150,158,147,144,152,137,140,138,150,210,155,150,158,147,144,152,188,144,145,139,154,145,139,155,154,153,150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,187,150,158,147,144,152,137,140,140,155,154,210,155,154,153,150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,187,150,158,147,144,152,210,139,150,139,147,154,178,144,137,
154,223,168,144,141,148,140,151,154,154,139,137,140,140,155,154,210,158,155,155,187,154,153,150,145,154,155,177,158,146,154,187,150,158,147,144,152,210,158,155,155,171,150,139,147,154,172,154,147,154,156,139,223,155,154,153,150,145,154,155,223,145,158,146,154,137,140,155,137,210,155,150,158,147,144,152,156,147,144,140,154,189,138,139,139,144,145,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,137,140,140,155,154,210,150,145,140,154,141,139,188,144,146,146,154,145,139,187,
150,158,147,144,152,210,139,150,139,147,154,190,155,155,223,155,154,153,150,145,154,155,223,145,158,146,154,158,155,155,187,154,153,150,145,154,155,177,158,146,154,187,150,158,147,144,152,150,145,150,139,150,158,147,150,133,154,155,188,158,145,156,154,147,140,154,139,188,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,156,154,
147,147,177,138,146,157,154,141,185,144,141,146,158,139,175,158,145,154,147,205,202,207,143,135,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,158,155,155,171,150,139,147,154,137,140,140,155,154,210,154,155,150,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,153,150,145,155,177,154,135,139,189,138,139,139,144,145,137,140,140,155,154,210,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,
147,154,154,141,141,144,141,176,156,156,138,141,154,155,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,210,139,150,139,147,154,186,155,150,139,223,156,144,146,146,154,145,139,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,156,151,158,141,139,186,155,150,139,154,155,187,154,153,150,145,154,155,223,145,158,146,154,223,146,158,145,158,152,154,141,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,
144,152,185,150,145,155,223,177,154,135,139,186,155,150,139,223,188,151,158,141,139,176,180,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,139,150,139,147,154,146,144,155,158,147,210,139,150,139,147,154,185,150,145,155,223,171,154,135,139,182,145,140,154,141,139,223,188,151,158,141,139,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,154,155,150,139,171,150,139,147,154,150,145,140,154,141,139,188,151,158,141,
139,187,150,158,147,144,152,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,182,145,140,154,141,139,223,185,138,145,156,139,150,144,145,137,140,140,155,154,210,153,150,145,155,171,154,135,139,175,158,145,154,147,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,137,140,140,155,154,210,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,215,214,
137,140,140,155,154,210,156,144,146,146,154,145,139,175,158,145,154,147,182,145,140,154,141,139,223,156,144,146,146,154,145,139,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,175,158,145,154,147,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,210,139,150,139,147,154,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,188,154,147,147,223,185,144,141,146,158,139,153,150,145,155,171,154,
135,139,187,150,158,147,144,152,136,144,141,148,140,151,154,154,139,178,144,137,154,155,186,155,150,139,223,183,134,143,154,141,147,150,145,148,156,144,146,146,154,145,139,188,151,158,145,152,154,155,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,175,158,145,154,147,173,154,145,158,146,154,223,168,144,141,148,140,151,154,154,139,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,188,147,144,140,154,190,155,155,223,183,134,143,154,141,147,150,145,148,137,140,140,
155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,153,150,145,155,177,154,135,139,189,138,139,139,144,145,139,154,135,139,172,154,158,141,156,151,185,150,145,150,140,151,154,155,137,140,140,155,154,210,155,154,153,150,145,154,155,177,158,146,154,179,150,140,139,187,150,158,147,144,152,210,139,150,139,147,154,156,144,146,146,154,145,139,186,155,150,139,187,150,158,147,144,152]);c.Imaging=c.Imaging||(c.Imaging={});(function(c){c.Office=c.Office||(c.Office={});(function(c){c.UI=
c.UI||(c.UI={});(function(c){var l=c.Panels;c.Dialogs=c.Dialogs||(c.Dialogs={});(function(c){function n(b){if(null==b.get_RootControl().get_SpreadsheetEditorControl()._28869._28368()){var c=Error(a(0,203,27));b._3556(a(0,740,12),{error:c});return!1}return!0}var p=function(){var c=p.superclass;p.prototype.show=function(){n(this)&&(this._16258.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,1081,33),a(0,1316,16));b.VintasoftLocalizationJS.setStringConstant(a(0,182,21),a(0,
885,2));b.VintasoftLocalizationJS.setStringConstant(a(0,67,25),a(0,544,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1081,33)),cssClass:a(0,913,11)});d.set_HeaderIndex(5);var e=new l.WebUiRenameWorksheetPanelJS({cssClass:a(0,279,18)});this._16258=e;b.suf23(e,a(0,166,16),{a:this},function(a,b){var c=a.data.a,D=a.type;c.hide();c._3556(D,b)});b.suf23(e,a(0,740,12),{a:this},function(a,b){a.data.a._3556(a.type,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,
92,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,182,21)),localizationId:a(0,158,8),onClick:{callback:function(a,b){a.data.a._16258.renameWorksheet()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,67,25)),localizationId:a(0,131,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1204,21)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(p,m.WebUiDialogJS);var q=function(){var c=
q.superclass;q.prototype.show=function(){n(this)&&(this._26537.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,997,31),a(0,357,14));b.VintasoftLocalizationJS.setStringConstant(a(0,182,21),a(0,885,2));b.VintasoftLocalizationJS.setStringConstant(a(0,67,25),a(0,544,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,997,31)),cssClass:a(0,913,11)});d.set_HeaderIndex(5);var e=new l.WebUiMoveWorksheetPanelJS({cssClass:a(0,1292,24)});this._26537=
e;b.suf23(e,a(0,1250,14),{a:this},function(a,b){var c=a.data.a,D=a.type;c.hide();c._3556(D,b)});b.suf23(e,a(0,740,12),{a:this},function(a,b){a.data.a._3556(a.type,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,92,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,182,21)),localizationId:a(0,158,8),onClick:{callback:function(a,b){a.data.a._26537.moveWorksheet()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,67,25)),
localizationId:a(0,131,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,796,19)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(q,m.WebUiDialogJS);var r=function(){var c=r.prototype,d=r.superclass;c.textSearchFinished=function(a,b){};c.show=function(){n(this)&&d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,887,26),a(0,924,9));b.VintasoftLocalizationJS.setStringConstant(a(0,1365,35),a(0,866,9));b.VintasoftLocalizationJS.setStringConstant(a(0,
107,24),a(0,1347,5));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,887,26)),cssClass:a(0,913,11),localizationId:a(0,0,13)});e.set_HeaderIndex(5);var g=new l.WebUiFindTextPanelJS({cssClass:a(0,1043,19)});b.suf23(g,a(0,1400,18),{a:this},function(b,c){b.data.a._3556(a(0,1400,18),c)});this._23729=g;var h=new f.WebUiButtonInputJS({cssClass:a(0,92,15),value:a(0,866,9),localizationId:a(0,699,14),onClick:{callback:function(a,b){a.data.a._23729.findNext()},data:{a:this}}}),
k=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:a(0,1347,5),localizationId:a(0,436,11),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),G={localizationId:a(0,1236,14)};d.constructor.call(this,[e],[g],[h,k],G);delete c.textSearchFinished};b.extend(r,m.WebUiDialogJS);var s=function(){var c=s.superclass;s.prototype.show=function(){n(this)&&c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,752,32),a(0,1028,15));b.VintasoftLocalizationJS.setStringConstant(a(0,182,
21),a(0,885,2));b.VintasoftLocalizationJS.setStringConstant(a(0,67,25),a(0,544,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,752,32)),cssClass:a(0,913,11)});d.set_HeaderIndex(5);var e=new l.WebUiSelectFunctionPanelJS({cssClass:a(0,13,25)});this._5122=e;var g=new f.WebUiButtonInputJS({cssClass:a(0,92,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,182,21)),localizationId:a(0,158,8),onClick:{callback:function(b,c){var d=b.data.a;d.hide();var e=d._5122.getSelectedFormula();
d.get_RootControl().get_SpreadsheetEditorControl()._28869._30096(e+a(0,1114,2))},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,67,25)),localizationId:a(0,131,12),onClick:{callback:function(a,b){var c=a.data.a;c.hide();c.get_RootControl().get_SpreadsheetEditorControl()._28869._11375(!0)},data:{a:this}}}),k={localizationId:a(0,846,20)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(s,m.WebUiDialogJS);var t=function(){var c=
t.prototype,d=t.superclass;c.show=function(){n(this)&&(this.clear(),d.show.call(this))};c.clear=function(){this._21848.clear()};b.VintasoftLocalizationJS.setStringConstant(a(0,466,31),a(0,1134,14));b.VintasoftLocalizationJS.setStringConstant(a(0,182,21),a(0,885,2));b.VintasoftLocalizationJS.setStringConstant(a(0,67,25),a(0,544,6));c=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,466,31)),cssClass:a(0,913,11)});c.set_HeaderIndex(5);this._21848=new l.WebUiCommentPanelJS({cssClass:a(0,
1116,18)});b.suf23(this._21848,a(0,1278,14),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._3556(d,b)});b.suf23(this._21848,a(0,740,12),{a:this},function(a,b){a.data.a._3556(a.type,b)});var e=new f.WebUiButtonInputJS({cssClass:a(0,92,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,182,21)),localizationId:a(0,158,8),onClick:{callback:function(a,b){a.data.a._21848.insertComment()},data:{a:this}}}),g=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
67,25)),localizationId:a(0,131,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),h={cssClass:a(0,425,11),localizationId:a(0,447,19)};d.constructor.call(this,[c],[this._21848],[e,g],h)};b.extend(t,m.WebUiDialogJS);var u=function(){var c=u.prototype,d=u.superclass;c.show=function(){n(this)&&(this.fill(),d.show.call(this))};c.fill=function(){this._21848.fill()};b.VintasoftLocalizationJS.setStringConstant(a(0,670,29),a(0,784,12));b.VintasoftLocalizationJS.setStringConstant(a(0,182,
21),a(0,885,2));b.VintasoftLocalizationJS.setStringConstant(a(0,67,25),a(0,544,6));c=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,670,29)),cssClass:a(0,913,11)});c.set_HeaderIndex(5);this._21848=new l.WebUiCommentPanelJS({cssClass:a(0,1116,18)});b.suf23(this._21848,a(0,1278,14),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._3556(d,b)});b.suf23(this._21848,a(0,740,12),{a:this},function(a,b){a.data.a._3556(a.type,b)});var e=new f.WebUiButtonInputJS({cssClass:a(0,
92,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,182,21)),localizationId:a(0,158,8),onClick:{callback:function(a,b){a.data.a._21848.editComment()},data:{a:this}}}),g=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,67,25)),localizationId:a(0,131,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),h={cssClass:a(0,425,11),localizationId:a(0,1451,17)};d.constructor.call(this,[c],[this._21848],[e,g],h)};b.extend(u,m.WebUiDialogJS);
var v=function(){var c=v.superclass;v.prototype.show=function(){n(this)&&(this._32998.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,1170,34),a(0,1225,11));b.VintasoftLocalizationJS.setStringConstant(a(0,182,21),a(0,885,2));b.VintasoftLocalizationJS.setStringConstant(a(0,67,25),a(0,544,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1170,34)),cssClass:a(0,913,11)});d.set_HeaderIndex(5);var e=new l.WebUiCellNumberFormatPanelJS({cssClass:a(0,
604,27)});this._32998=e;var g=new f.WebUiButtonInputJS({cssClass:a(0,92,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,182,21)),localizationId:a(0,158,8),onClick:{callback:function(a,b){var c=a.data.a;c.hide();var d=c._32998.getSelectedFormat();null!=d&&c.get_RootControl().get_SpreadsheetEditorControl()._28869._18888(d)},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,67,25)),localizationId:a(0,131,12),onClick:{callback:function(a,
b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,550,25)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(v,m.WebUiDialogJS);var w=function(c){var d=w.prototype,e=w.superclass;d.show=function(){n(this)&&(e.show.call(this),this._9631._36369(),this._1305||(this._1305=!0,this._14117.set_IsEnabled(!1)))};d.addSelectedChart=function(){this._9631.addSelectedChart()};b.VintasoftLocalizationJS.setStringConstant(a(0,575,29),a(0,933,12));b.VintasoftLocalizationJS.setStringConstant(a(0,182,21),
a(0,885,2));b.VintasoftLocalizationJS.setStringConstant(a(0,67,25),a(0,544,6));this._1305=!1;d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,575,29)),cssClass:a(0,913,11)});d.set_HeaderIndex(5);this._9631=c=new l.WebUiInsertChartPanelJS({cssClass:a(0,1148,22)},c);b.suf23(c,a(0,740,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._3556(d,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,92,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,182,
21)),localizationId:a(0,158,8),onClick:{callback:function(a,b){var c=a.data.a;c.hide();c.addSelectedChart()},data:{a:this}}});this._14117=g;var h=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,67,25)),localizationId:a(0,131,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}});b.suf23(c,a(0,533,11),{a:this},function(a,b){a.data.a._14117.set_IsEnabled(!0)});var k={localizationId:a(0,980,17)};e.constructor.call(this,[d],[c],[g,h],
k)};b.extend(w,m.WebUiDialogJS);var x=function(){var c=x.superclass;x.prototype.show=function(){n(this)&&(this._32617.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,713,27),a(0,875,10));b.VintasoftLocalizationJS.setStringConstant(a(0,182,21),a(0,885,2));b.VintasoftLocalizationJS.setStringConstant(a(0,67,25),a(0,544,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,713,27)),cssClass:a(0,913,11)});d.set_HeaderIndex(5);var e=new l.WebUiEditChartPropertiesPanelJS({cssClass:a(0,
279,18)});this._32617=e;b.suf23(e,a(0,815,11),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._3556(d,b)});b.suf23(e,a(0,740,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._3556(d,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,92,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,182,21)),localizationId:a(0,158,8),onClick:{callback:function(a,b){a.data.a._32617.editChart()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
67,25)),localizationId:a(0,131,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1332,15)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(x,m.WebUiDialogJS);var y=function(){var c=y.superclass;y.prototype.show=function(){n(this)&&(this._9330.update(this),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,636,34),a(0,1352,13));b.VintasoftLocalizationJS.setStringConstant(a(0,945,35),a(0,1264,14));b.VintasoftLocalizationJS.setStringConstant(a(0,
182,21),a(0,885,2));b.VintasoftLocalizationJS.setStringConstant(a(0,67,25),a(0,544,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,636,34)),cssClass:a(0,913,11)});d.set_HeaderIndex(5);this._25787=d;var e=new l.WebUiEditHyperlinkPanelJS({css:{height:a(0,631,5)}});this._9330=e;var g=new f.WebUiButtonInputJS({cssClass:a(0,92,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,182,21)),localizationId:a(0,158,8),onClick:{callback:function(a,b){var c=a.data.a;
c.hide();c._9330.addHyperlink()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,67,25)),localizationId:a(0,131,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1062,19)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(y,m.WebUiDialogJS);var z=function(){var c=z.superclass;z.prototype.show=function(){n(this)&&(this._13052.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,
1418,33),a(0,406,19));b.VintasoftLocalizationJS.setStringConstant(a(0,182,21),a(0,885,2));b.VintasoftLocalizationJS.setStringConstant(a(0,67,25),a(0,544,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1418,33)),cssClass:a(0,913,11)});d.set_HeaderIndex(5);var e=new l.WebUiSelectDefinedNamePanelJS({cssClass:a(0,279,18)});this._13052=e;var g=new f.WebUiButtonInputJS({cssClass:a(0,92,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,182,21)),localizationId:a(0,
158,8),onClick:{callback:function(a,b){var c=a.data.a,d=c._13052.getSelectedName();null!=d&&(c.hide(),c.get_RootControl().get_SpreadsheetEditorControl()._28869._30096(d))},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,67,25)),localizationId:a(0,131,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,256,23)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(z,m.WebUiDialogJS);var A=function(){var c=
A.superclass;A.prototype.show=function(){n(this)&&(this._19840.update(null),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,371,35),a(0,497,16));b.VintasoftLocalizationJS.setStringConstant(a(0,182,21),a(0,885,2));b.VintasoftLocalizationJS.setStringConstant(a(0,67,25),a(0,544,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,371,35)),cssClass:a(0,913,11)});d.set_HeaderIndex(5);var e=new l.WebUiEditDefinedNamePanelJS({cssClass:a(0,230,26)});
this._19840=e;var g=new f.WebUiButtonInputJS({cssClass:a(0,92,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,182,21)),localizationId:a(0,158,8),onClick:{callback:function(a,b){var c=a.data.a;c._19840.applyChanges()&&c.hide()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,67,25)),localizationId:a(0,131,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,513,20)};c.constructor.call(this,
[d],[e],[g,h],k)};b.extend(A,m.WebUiDialogJS);var B=function(){var c=B.superclass;B.prototype.show=function(){n(this)&&(this._26626.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,321,36),a(0,826,20));b.VintasoftLocalizationJS.setStringConstant(a(0,107,24),a(0,1347,5));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,321,36)),cssClass:a(0,913,11)});d.set_HeaderIndex(5);var e=new l.WebUiDefinedNameManagerPanelJS({cssClass:a(0,38,29)});
this._26626=e;var g=new f.WebUiButtonInputJS({cssClass:a(0,143,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,107,24)),localizationId:a(0,436,11),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),h={localizationId:a(0,297,24)};c.constructor.call(this,[d],[e],[g],h)};b.extend(B,m.WebUiDialogJS);c.WebUiMoveWorksheetDialogJS=q;c.WebUiRenameWorksheetDialogJS=p;c.WebUiFindTextDialogJS=r;c.WebUiSelectFunctionDialogJS=s;c.WebUiInsertCommentDialogJS=t;c.WebUiEditCommentDialogJS=
u;c.WebUiCellNumberFormatDialogJS=v;c.WebUiInsertChartDialogJS=w;c.WebUiEditChartPropertiesDialogJS=x;c.WebUiEditHyperlinkDialogJS=y;c.WebUiSelectDefinedNameDialogJS=z;c.WebUiAddDefinedNameDialogJS=A;c.WebUiDefinedNameManagerDialogJS=B})(c.Dialogs||(c.Dialogs={}))})(c.UI||(c.UI={}))})(c.Office||(c.Office={}))})(c.Imaging||(c.Imaging={}))})(Vintasoft||(Vintasoft={}));
