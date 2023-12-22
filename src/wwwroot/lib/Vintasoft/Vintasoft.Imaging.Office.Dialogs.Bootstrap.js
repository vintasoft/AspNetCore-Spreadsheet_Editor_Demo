﻿// Copyright 2014-2023 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(c){function a(a,b,e){a=A[a];for(var l="",x=b;x<b+e;x++)l+=String.fromCharCode(a[x]^255);return l}if(void 0==c.Shared)throw Error("Vintasoft.Shared is not found.");if("4.1.0.3"!==c.version)throw Error("Wrong script version.");if(void 0==c.Imaging)throw Error("Vintasoft.Imaging is not found.");var b=c.Shared,B=c.Imaging.UI,m=B.Dialogs,e=B.UIElements,A=[];A.push([188,147,144,140,154,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,210,
139,150,139,147,154,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,154,155,150,139,171,150,139,147,154,186,155,150,139,223,188,151,158,141,139,156,151,158,141,139,186,155,150,139,154,155,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,153,150,145,155,177,154,135,139,189,138,
139,139,144,145,137,140,140,155,154,210,156,144,146,146,154,145,139,175,158,145,154,147,157,139,145,223,157,139,145,210,143,141,150,146,158,141,134,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,175,158,145,154,147,146,144,155,158,147,210,139,150,139,147,154,156,144,146,146,154,145,139,188,151,158,145,152,154,155,154,141,141,144,141,176,156,156,138,141,154,155,156,144,146,146,154,145,
139,186,155,150,139,187,150,158,147,144,152,136,144,141,148,140,151,154,154,139,173,154,145,158,146,154,155,137,140,140,155,154,210,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,185,150,145,155,223,177,154,135,139,136,144,141,148,140,151,154,154,139,178,144,137,154,155,137,140,138,150,210,155,150,158,147,144,152,188,144,145,139,154,145,139,178,144,137,154,223,168,144,141,148,140,151,154,154,139,139,154,135,139,172,154,158,141,156,151,185,
150,145,150,140,151,154,155,156,147,144,140,154,189,138,139,139,144,145,190,155,155,223,183,134,143,154,141,147,150,145,148,156,158,145,156,154,147,189,138,139,139,144,145,137,140,140,155,154,210,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,153,150,145,155,171,154,135,139,175,158,145,154,147,137,140,140,155,154,210,155,150,158,147,144,152,210,156,147,144,140,154,189,138,139,139,144,145,157,139,145,223,157,139,145,210,155,
154,153,158,138,147,139,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,158,155,155,171,150,139,147,154,137,140,140,155,154,210,150,145,140,154,141,139,188,
151,158,141,139,175,158,145,154,147,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,186,155,150,139,223,156,144,146,146,154,145,139,182,145,140,154,141,139,223,156,144,146,146,154,145,139,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,153,150,145,155,177,154,135,139,189,138,139,139,144,145,153,150,145,155,171,154,135,139,187,150,158,147,144,152,153,150,145,155,171,154,135,139,179,158,157,154,147,188,154,147,147,223,185,144,141,146,158,139,137,140,155,137,210,
155,150,158,147,144,152,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,175,158,145,154,147,215,214,185,150,145,155,223,171,154,135,139,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,137,140,140,155,154,210,155,150,158,147,144,152,210,144,148,189,138,139,139,144,145,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,175,158,145,154,147,156,151,158,141,139,172,154,147,154,156,139,154,155,176,180,137,140,140,155,154,210,150,
145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,182,145,140,154,141,139,223,188,151,158,141,139,186,155,150,139,223,183,134,143,154,141,147,150,145,148,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,139,150,139,147,154,144,148,189,138,139,139,144,145,188,158,145,156,154,147,173,154,145,158,146,154,223,168,144,141,148,140,151,154,154,139,140,154,139,188,154,147,147,177,138,146,157,154,141,185,144,141,146,
158,139,187,150,158,147,144,152,137,140,140,155,154,210,154,155,150,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,155,150,158,147,144,152,210,156,158,145,156,154,147,189,138,139,139,144,145,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,182,145,140,154,141,139,223,185,138,145,156,139,150,144,145,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,
147,144,152,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,205,202,207,143,135]);c.Imaging=c.Imaging||(c.Imaging={});(function(c){c.Office=c.Office||(c.Office={});(function(c){c.UI=c.UI||(c.UI={});(function(c){var l=c.Panels;c.Dialogs=c.Dialogs||(c.Dialogs={});(function(c){var n=function(d){var c=n.superclass;n.prototype.show=function(){this._7016.update();c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,311,33),a(0,1007,16));b.VintasoftLocalizationJS.setStringConstant(a(0,
847,21),a(0,905,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1077,25),a(0,1001,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,311,33)),cssClass:a(0,241,11)});f.set_HeaderIndex(5);this._7016=d=new l.WebUiRenameWorksheetPanelJS({cssClass:a(0,367,18)},d);b.suf23(d,a(0,295,16),{a:this},function(a,b){var d=a.data.a;d._15704(a.type,b);d.hide()});b.suf23(d,a(0,266,12),{a:this},function(a,b){a.data.a._15704(a.type,b)});var h=new e.WebUiButtonInputJS({cssClass:a(0,
180,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,847,21)),localizationId:a(0,993,8),onClick:{callback:function(a,b){a.data.a._7016.renameWorksheet()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,527,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1077,25)),localizationId:a(0,441,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1148,21)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(n,m.WebUiDialogJS);var p=function(d){var c=
p.superclass;p.prototype.show=function(){this._11880.update();c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,1102,31),a(0,385,14));b.VintasoftLocalizationJS.setStringConstant(a(0,847,21),a(0,905,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1077,25),a(0,1001,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1102,31)),cssClass:a(0,241,11)});f.set_HeaderIndex(5);this._11880=d=new l.WebUiMoveWorksheetPanelJS({cssClass:a(0,868,24)},d);
b.suf23(d,a(0,353,14),{a:this},function(a,b){var d=a.data.a;d._15704(a.type,b);d.hide()});b.suf23(d,a(0,266,12),{a:this},function(a,b){a.data.a._15704(a.type,b)});var h=new e.WebUiButtonInputJS({cssClass:a(0,180,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,847,21)),localizationId:a(0,993,8),onClick:{callback:function(a,b){a.data.a._11880.moveWorksheet()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,527,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1077,25)),localizationId:a(0,
441,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,671,19)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(p,m.WebUiDialogJS);var q=function(d){var c=q.prototype,f=q.superclass;c.textSearchFinished=function(a,b){};b.VintasoftLocalizationJS.setStringConstant(a(0,562,26),a(0,821,9));b.VintasoftLocalizationJS.setStringConstant(a(0,127,35),a(0,344,9));b.VintasoftLocalizationJS.setStringConstant(a(0,503,24),a(0,0,5));var h=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
562,26)),cssClass:a(0,241,11),localizationId:a(0,759,13)});h.set_HeaderIndex(5);d=new l.WebUiFindTextPanelJS({cssClass:a(0,484,19)},d);b.suf23(d,a(0,399,18),{a:this},function(b,d){b.data.a._15704(a(0,399,18),d)});this._1996=d;var g=new e.WebUiButtonInputJS({cssClass:a(0,180,15),value:a(0,344,9),localizationId:a(0,731,14),onClick:{callback:function(a,b){a.data.a._1996.findNext()},data:{a:this}}}),k=new e.WebUiButtonInputJS({cssClass:a(0,527,15),value:a(0,0,5),localizationId:a(0,417,11),onClick:{callback:function(a,
b){a.data.a.hide()},data:{a:this}}}),y={localizationId:a(0,745,14)};f.constructor.call(this,[h],[d],[g,k],y);delete c.textSearchFinished};b.extend(q,m.WebUiDialogJS);var z=function(d){var c=z.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,5,32),a(0,1133,15));b.VintasoftLocalizationJS.setStringConstant(a(0,847,21),a(0,905,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1077,25),a(0,1001,6));this._17740=d;var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
5,32)),cssClass:a(0,241,11)});f.set_HeaderIndex(5);this._22189=d=new l.WebUiSelectFunctionPanelJS({cssClass:a(0,794,25)},d);var h=new e.WebUiButtonInputJS({cssClass:a(0,180,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,847,21)),localizationId:a(0,993,8),onClick:{callback:function(b,d){var c=b.data.a,k=c._22189.getSelectedFormula();c._17740._2068._18678(k+a(0,819,2));c.hide()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,527,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
1077,25)),localizationId:a(0,441,12),onClick:{callback:function(a,b){var d=a.data.a;d._17740._2068._5613(!0);d.hide()},data:{a:this}}}),k={localizationId:a(0,542,20)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(z,m.WebUiDialogJS);var r=function(d){var c=r.superclass;r.prototype.clear=function(){this._189.clear()};b.VintasoftLocalizationJS.setStringConstant(a(0,453,31),a(0,702,14));b.VintasoftLocalizationJS.setStringConstant(a(0,847,21),a(0,905,2));b.VintasoftLocalizationJS.setStringConstant(a(0,
1077,25),a(0,1001,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,453,31)),cssClass:a(0,241,11)});f.set_HeaderIndex(5);this._189=new l.WebUiCommentPanelJS({cssClass:a(0,162,18)},d);b.suf23(this._189,a(0,252,14),{a:this},function(a,b){var d=a.data.a;d._15704(a.type,b);d.hide()});b.suf23(this._189,a(0,266,12),{a:this},function(a,b){a.data.a._15704(a.type,b)});d=new e.WebUiButtonInputJS({cssClass:a(0,180,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
847,21)),localizationId:a(0,993,8),onClick:{callback:function(a,b){a.data.a._189.insertComment()},data:{a:this}}});var h=new e.WebUiButtonInputJS({cssClass:a(0,527,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1077,25)),localizationId:a(0,441,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),g={cssClass:a(0,783,11),localizationId:a(0,1169,19)};c.constructor.call(this,[f],[this._189],[d,h],g)};b.extend(r,m.WebUiDialogJS);var s=function(d){var c=s.superclass;s.prototype.fill=
function(){this._189.fill()};b.VintasoftLocalizationJS.setStringConstant(a(0,1048,29),a(0,690,12));b.VintasoftLocalizationJS.setStringConstant(a(0,847,21),a(0,905,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1077,25),a(0,1001,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1048,29)),cssClass:a(0,241,11)});f.set_HeaderIndex(5);this._189=new l.WebUiCommentPanelJS({cssClass:a(0,162,18)},d);b.suf23(this._189,a(0,252,14),{a:this},function(a,b){var d=a.data.a;
d._15704(a.type,b);d.hide()});b.suf23(this._189,a(0,266,12),{a:this},function(a,b){a.data.a._15704(a.type,b)});d=new e.WebUiButtonInputJS({cssClass:a(0,180,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,847,21)),localizationId:a(0,993,8),onClick:{callback:function(a,b){a.data.a._189.editComment()},data:{a:this}}});var h=new e.WebUiButtonInputJS({cssClass:a(0,527,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1077,25)),localizationId:a(0,441,12),onClick:{callback:function(a,b){a.data.a.hide()},
data:{a:this}}}),g={cssClass:a(0,783,11),localizationId:a(0,278,17)};c.constructor.call(this,[f],[this._189],[d,h],g)};b.extend(s,m.WebUiDialogJS);var t=function(d){var c=t.superclass;t.prototype.show=function(){this._4917.update();c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,93,34),a(0,772,11));b.VintasoftLocalizationJS.setStringConstant(a(0,847,21),a(0,905,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1077,25),a(0,1001,6));this._17740=d;var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
93,34)),cssClass:a(0,241,11)});f.set_HeaderIndex(5);this._4917=d=new l.WebUiCellNumberFormatPanelJS({cssClass:a(0,214,27)},d);var h=new e.WebUiButtonInputJS({cssClass:a(0,180,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,847,21)),localizationId:a(0,993,8),onClick:{callback:function(a,b){var d=a.data.a,c=d._4917.getSelectedFormat();null!=c&&d._17740._2068._9567(c);d.hide()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,527,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
1077,25)),localizationId:a(0,441,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1023,25)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(t,m.WebUiDialogJS);var u=function(d,c){var f=u.prototype,h=u.superclass;f.show=function(){h.show.call(this);this._2794._20080();var a=this._2794._8996.get_SpreadsheetEditorControl()._2068;null!=a._12055()&&a._17174(null);this._7249.set_IsEnabled(!1)};f.addSelectedChart=function(){this._2794.addSelectedChart()};b.VintasoftLocalizationJS.setStringConstant(a(0,
907,29),a(0,936,12));b.VintasoftLocalizationJS.setStringConstant(a(0,847,21),a(0,905,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1077,25),a(0,1001,6));f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,907,29)),cssClass:a(0,241,11)});f.set_HeaderIndex(5);var g=new l.WebUiInsertChartPanelJS({cssClass:a(0,649,22)},d,c);this._2794=g;b.suf23(g,a(0,266,12),{a:this},function(a,b){var d=a.data.a,c=a.type;d.hide();d._15704(c,b)});var k=new e.WebUiButtonInputJS({cssClass:a(0,
180,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,847,21)),localizationId:a(0,993,8),onClick:{callback:function(a,b){a.data.a.addSelectedChart()},data:{a:this}}});this._7249=k;var y=new e.WebUiButtonInputJS({cssClass:a(0,527,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1077,25)),localizationId:a(0,441,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}});b.suf23(g,a(0,892,13),{a:this},function(a,b){a.data.a._7249.set_IsEnabled(!0)});var m={localizationId:a(0,
830,17)};h.constructor.call(this,[f],[g],[k,y],m)};b.extend(u,m.WebUiDialogJS);var v=function(d){var c=v.superclass;v.prototype.show=function(){this._21809.update();c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,588,27),a(0,72,10));b.VintasoftLocalizationJS.setStringConstant(a(0,847,21),a(0,905,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1077,25),a(0,1001,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,588,27)),cssClass:a(0,241,
11)});f.set_HeaderIndex(5);this._21809=d=new l.WebUiEditChartPropertiesPanelJS({cssClass:a(0,367,18)},d);b.suf23(d,a(0,82,11),{a:this},function(a,b){var d=a.data.a,c=a.type;d.hide();d._15704(c,b)});b.suf23(d,a(0,266,12),{a:this},function(a,b){var d=a.data.a,c=a.type;d.hide();d._15704(c,b)});var h=new e.WebUiButtonInputJS({cssClass:a(0,180,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,847,21)),localizationId:a(0,993,8),onClick:{callback:function(a,b){a.data.a._21809.editChart()},data:{a:this}}}),
g=new e.WebUiButtonInputJS({cssClass:a(0,527,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1077,25)),localizationId:a(0,441,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,716,15)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(v,m.WebUiDialogJS);var w=function(d){var c=w.superclass;w.prototype.show=function(){this._2892.update(this);c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,615,34),a(0,428,13));b.VintasoftLocalizationJS.setStringConstant(a(0,
37,35),a(0,948,14));b.VintasoftLocalizationJS.setStringConstant(a(0,847,21),a(0,905,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1077,25),a(0,1001,6));this._17740=d;var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,962,31)),cssClass:a(0,241,11)});f.set_HeaderIndex(5);this._26603=f;this._2892=d=new l.WebUiEditHyperlinkPanelJS({css:{height:a(0,1188,5)}},d);var h=new e.WebUiButtonInputJS({cssClass:a(0,180,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
847,21)),localizationId:a(0,993,8),onClick:{callback:function(a,b){var c=a.data.a;c._2892.addHyperlink();c.hide()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,527,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1077,25)),localizationId:a(0,441,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,195,19)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(w,m.WebUiDialogJS);c.WebUiMoveWorksheetDialogJS=p;c.WebUiRenameWorksheetDialogJS=
n;c.WebUiFindTextDialogJS=q;c.WebUiSelectFunctionDialogJS=z;c.WebUiInsertCommentDialogJS=r;c.WebUiEditCommentDialogJS=s;c.WebUiCellNumberFormatDialogJS=t;c.WebUiInsertChartDialogJS=u;c.WebUiEditChartPropertiesDialogJS=v;c.WebUiEditHyperlinkDialogJS=w})(c.Dialogs||(c.Dialogs={}))})(c.UI||(c.UI={}))})(c.Office||(c.Office={}))})(c.Imaging||(c.Imaging={}))})(Vintasoft||(Vintasoft={}));
