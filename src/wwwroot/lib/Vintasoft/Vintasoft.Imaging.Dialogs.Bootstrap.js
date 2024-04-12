﻿// Copyright 2014-2024 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(d){function a(a,d,x){a=s[a];for(var c="",p=d;p<d+x;p++)c+=String.fromCharCode(a[p]^4095);return c}if(void 0==d||void 0==d.Shared)throw Error("Vintasoft.Shared is not found.");if("4.1.3.1"!==d.version)throw Error("Wrong version of Vintasoft.Shared script.");if(void 0==d.Imaging)throw Error("Vintasoft.Imaging is not found.");if("12.4.0.1"!==d.Imaging.version)throw Error("Wrong version of Vintasoft.Imaging script.");var s=[];s.push([3986,3984,3995,3998,3987,4050,3995,3990,3998,3987,3984,3992,
3997,3987,3984,3996,3988,3977,3980,3995,3977,4050,3995,3990,3998,3987,3984,3992,4050,3996,3998,3985,3996,3994,3987,4029,3978,3979,3979,3984,3985,3985,3984,3985,3994,4011,3991,3994,4063,4056,3980,3994,3987,3994,3996,3979,3984,3981,4012,3994,3979,3979,3990,3985,3992,3980,4049,3980,3994,3987,3994,3996,3979,3984,3981,3980,4056,4063,3983,3998,3981,3998,3986,3994,3979,3994,3981,4063,3996,3998,3985,3985,3984,3979,4063,3997,3994,4063,3985,3978,3987,3987,4049,4011,3991,3994,4063,4056,3980,3994,3987,3994,3996,
3979,3984,3981,4012,3994,3979,3979,3990,3985,3992,3980,4056,4063,3983,3998,3981,3998,3986,3994,3979,3994,3981,4063,3996,3998,3985,3985,3984,3979,4063,3997,3994,4063,3985,3978,3987,3987,4049,3006,3998,3985,3996,3994,3987,4029,3978,3979,3979,3984,3985,3998,3978,3979,3991,3994,3985,3979,3990,3996,3998,3979,3990,3984,3985,4012,3978,3996,3996,3994,3994,3995,3994,3995,4046,3983,3975,4063,3980,3984,3987,3990,3995,4063,3992,3981,3998,3974,4040,4047,3977,3991,3986,3984,3995,3998,3987,4050,3979,3990,3979,3987,
3994,3983,3981,3984,3983,3994,3981,3979,3974,4024,3981,3990,3995,4012,3994,3987,3994,3996,3979,3986,3984,3995,3998,3987,4050,3991,3994,3998,3995,3994,3981,3980,3994,3987,3994,3996,3979,3994,3995,4022,3985,3995,3994,3975,4028,3991,3998,3985,3992,3994,3995,3984,3988,4029,3978,3979,3979,3984,3985,3986,3984,3995,3998,3987,4050,3993,3984,3984,3979,3994,3981,4011,3991,3994,4063,4056,3980,3994,3987,3994,3996,3979,3984,3981,4012,3994,3979,3979,3990,3985,3992,3980,4049,3979,3990,3979,3987,3994,4056,4063,3983,
3998,3981,3998,3986,3994,3979,3994,3981,4063,3986,3978,3980,3979,4063,3997,3994,4063,3998,4063,3980,3979,3981,3990,3985,3992,4049,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4028,3984,3985,3979,3994,3985,3979,3977,3980,3995,3977,4050,3995,3984,3996,3978,3986,3994,3985,3979,4015,3998,3980,3980,3976,3984,3981,3995,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3998,3978,3979,3984,3986,3984,3995,3998,3987,4063,3993,3998,3995,3994,4063,3980,3991,3984,3976,3995,3990,3998,3987,3984,
3992,4012,3991,3984,3976,3985,4028,3998,3985,3996,3994,3987,4011,3991,3994,4063,4056,3980,3994,3987,3994,3996,3979,3984,3981,4012,3994,3979,3979,3990,3985,3992,3980,4049,3980,3994,3987,3994,3996,3979,3994,3995,4022,3985,3995,3994,3975,4056,4063,3983,3998,3981,3998,3986,3994,3979,3994,3981,4063,3986,3978,3980,3979,4063,3997,3994,4063,3998,4063,3985,3978,3986,3997,3994,3981,4049,4042,3983,3975,4047,3983,3975,3986,3984,3995,3998,3987,4050,3997,3984,3995,3974,4027,3984,3996,3978,3986,3994,3985,3979,4063,
3983,3998,3980,3980,3976,3984,3981,3995,3986,3984,3995,3998,3987,4050,3996,3984,3985,3979,3994,3985,3979,4016,4020,3986,3984,3995,3998,3987,3997,3979,3985,4063,3997,3979,3985,4050,3995,3994,3993,3998,3978,3987,3979,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,3995,3984,3996,3978,3986,3994,3985,3979,4015,3998,3980,3980,3976,3984,3981,3995,4027,3990,3998,3987,3984,3992,3980,3991,3984,3976,3998,3996,3979,3990,3977,3998,3979,3994,3995,3977,3980,3995,3977,4050,3995,3990,3998,3987,3984,3992,4050,
3984,3988,4029,3978,3979,3979,3984,3985,3997,3979,3985,4063,3997,3979,3985,4050,3983,3981,3990,3986,3998,3981,3974,4015,3987,3994,3998,3980,3994,4063,3978,3980,3994,4063,3979,3991,3994,4063,4008,3994,3997,4010,3990,4015,3981,3984,3983,3994,3981,3979,3974,4024,3981,3990,3995,4027,3990,3998,3987,3984,3992,4021,4012,4063,3996,3987,3998,3980,3980,4063,3990,3985,3980,3979,3994,3998,3995,4063,3984,3993,4063,4008,3994,3997,4010,3990,4018,3978,3987,3979,3990,4015,3981,3984,3983,3994,3981,3979,3974,4024,3981,
3990,3995,4027,3990,3998,3987,3984,3992,4021,4012,4063,3996,3987,3998,3980,3980,4063,3997,3994,3996,3998,3978,3980,3994,4063,3974,3984,3978,4063,3976,3998,3985,3979,4063,3979,3984,4063,3977,3990,3994,3976,4063,3984,3985,3987,3974,4063,4046,4063,3983,3981,3984,3983,3994,3981,3979,3974,4063,3992,3981,3990,3995,4049,3990,3985,3987,3990,3985,3994,4050,3993,3987,3994,3975,3986,3984,3995,3998,3987,4063,3993,3998,3995,3994]);d.Imaging=d.Imaging;(function(g){g.UI=g.UI;(function(g){g.Dialogs={};(function(g){var c=
d.Shared,p=d.Imaging,h=p.UI.UIElements,u=p.UI.Panels,m=function(v,b,e,d){var f=m.prototype,k=m.superclass,l=a(0,560,11);d.className=null==d.className?l:l+d.className;v=new h.WebUiElementContainerJS(v,{cssClass:a(0,233,12)});b=new h.WebUiElementContainerJS(b,{cssClass:a(0,498,10),css:{"max-height":a(0,200,4),"overflow-y":a(0,392,4)}});e=new h.WebUiElementContainerJS(e,{cssClass:a(0,273,12)});e=new h.WebUiElementContainerJS([v,b,e],{cssClass:a(0,525,13)});e=new h.WebUiElementContainerJS([e],{cssClass:a(0,
0,12)});e=new h.WebUiElementContainerJS([e],{cssClass:a(0,540,5)});k.constructor.call(this,[e],d);this._2826=!1;f.dialogShown=function(a,b){};f.set_IsEnabled=function(a){var b=this._8756;k.set_IsEnabled.call(this,a);b===this._8756||a||this.hide()};f.isVisible=function(){return this._2826?c.suf47(this._10036.childNodes[0],a(0,593,4)):k.isVisible.call(this)};f.render=function(a){var b=k.render.call(this,a);a.appendChild(b);this.hide();return b};f.show=function(){this._2826||this.init();var b=this._10036;
b.className="";b.style.display=a(0,12,5);b=b.childNodes[0];b.className=a(0,396,15);b.style.display=a(0,12,5);this._19843(a(0,411,11),{dialog:this})};f.hide=function(){if(this._2826){var b=this._10036.childNodes[0];b.className=a(0,793,10);b.style.display=a(0,41,4)}else k.hide.call(this)};f.init=function(){this._2826=!0};delete f.dialogShown};c.extend(m,h.WebUiElementContainerJS);var q=function(d){var b=q.superclass;c.VintasoftLocalizationJS.setStringConstant(a(0,359,33),a(0,508,17));c.VintasoftLocalizationJS.setStringConstant(a(0,
606,20),a(0,538,2));c.VintasoftLocalizationJS.setStringConstant(a(0,17,24),a(0,422,6));var e=this,g=new h.WebUiLabelElementJS({text:c.VintasoftLocalizationJS.getStringConstant(a(0,359,33)),cssClass:a(0,204,11)});g.set_HeaderIndex(5);this._15905=d=new u.WebUiDocumentPasswordPanelJS({cssClass:a(0,341,18)},d);c.subscribeToEvent(d,a(0,163,23),function(b,c){e._19552(a(0,163,23),c);b.target.hide()});var f=new h.WebUiButtonInputJS({cssClass:a(0,626,15),value:c.VintasoftLocalizationJS.getStringConstant(a(0,
606,20)),localizationId:a(0,265,8),onClick:{callback:function(){e._15905.authenticateFile()}}}),k=new h.WebUiButtonInputJS({cssClass:a(0,545,15),value:c.VintasoftLocalizationJS.getStringConstant(a(0,17,24)),localizationId:a(0,151,12),onClick:{callback:function(){e.hide()}}}),l={cssClass:a(0,560,11),localizationId:a(0,571,22)};b.constructor.call(this,[g],[d],[f,k],l)};c.extend(q,m);var r=function(d,b){var e=r.superclass;c.VintasoftLocalizationJS.setStringConstant(a(0,606,20),a(0,538,2));var g=this,
f="";null!=b&&null!=b.title&&(f=b.title);f=new h.WebUiLabelElementJS({text:f,cssClass:a(0,204,11)});f.set_HeaderIndex(5);var k={cssClass:a(0,341,18),css:{padding:a(0,495,3),border:a(0,186,14),"overflow-x":a(0,392,4)}};null!=b&&(null!=b.hideNestedElements&&(k.hideNestedElements=b.hideNestedElements),null!=b.editable&&(k.editable=b.editable),null!=b.css&&(null!=b.css.width&&(k.css.width=b.css.width),null!=b.css.height&&(k.css.height=b.css.height)));var k=new u.WebUiPropertyGridPanelJS(d,k),l=new h.WebUiButtonInputJS({cssClass:a(0,
626,15),value:c.VintasoftLocalizationJS.getStringConstant(a(0,606,20)),localizationId:a(0,265,8),onClick:{callback:function(){g.hide()}}});e.constructor.call(this,[f],[k],[l],b)};c.extend(r,m);var t=function(d,b){var e=t.prototype,g=t.superclass;e.get_SelectedPropertyGridIndex=function(){return this._11622.get_SelectedIndex()};e.set_SelectedPropertyGridIndex=function(a){this._11622.set_SelectedIndex(a)};if(null==d)throw Error(a(0,103,48));if(null==d.selectors)throw Error(a(0,45,58));if(1==d.selectors.length)throw Error(a(0,
641,141));var f=d.title;null==f&&(f="");if(!c.pv.iss(f))throw Error(a(0,285,56));e=d.selectedIndex;null==e&&(e=0);if(!c.pv.isn(e))throw Error(a(0,428,64));this._8403=e;c.suf27(this,a(0,597,9),{a:this},function(a,b){var c=a.data.a;c._11622.set_SelectedIndex(c._8403)});c.VintasoftLocalizationJS.setStringConstant(a(0,606,20),a(0,538,2));var k=this,e="";null!=b&&null!=b.title&&(e=b.title);e=new h.WebUiLabelElementJS({text:e,cssClass:a(0,204,11)});e.set_HeaderIndex(5);var l={cssClass:a(0,341,18),css:{padding:a(0,
495,3),border:a(0,186,14),"overflow-x":a(0,392,4)}};null!=b&&(null!=b.hideNestedElements&&(l.hideNestedElements=b.hideNestedElements),null!=b.editable&&(l.editable=b.editable),null!=b.css&&(null!=b.css.width&&(l.css.width=b.css.width),null!=b.css.height&&(l.css.height=b.css.height)));var m=[],p=[];this._4106=[];for(var q=0;q<d.selectors.length;q++){var n=d.selectors[q],r=n.text;c.pv.iss(r)||c.pv.tae();var s=n.value;c.pv.iss(s)||c.pv.tae();var w=n.localizationId;c.pv.iss(w)||c.pv.tae();p.push({text:r,
value:s,localizationId:w});n=n.propertyGrid;c.pv.ic(n,c.WebPropertyGridJS)||c.pv.tae();n=new u.WebUiPropertyGridPanelJS(n,l);this._4106.push(n);m.push(n)}f=new h.WebUiLabelElementJS({text:f,css:{"margin-right":a(0,492,3)}});this._11622=new h.WebUiSelectElementJS({localizationId:a(0,215,18),options:p});c.suf23(this._11622,a(0,245,20),{a:this},function(a,b){for(var c=b.selectedIndex,d=a.data.a._4106,e=0;e<d.length;e++)e==c?d[e].show():d[e].hide()});f=new h.WebUiElementContainerJS([f,this._11622],{css:{display:a(0,
782,11),"margin-bottom":a(0,492,3)}});m.splice(0,0,f);f=new h.WebUiButtonInputJS({cssClass:a(0,626,15),value:c.VintasoftLocalizationJS.getStringConstant(a(0,606,20)),localizationId:a(0,265,8),onClick:{callback:function(){k.hide()}}});g.constructor.call(this,[e],m,[f],b)};c.extend(t,m);g.WebUiDialogJS=m;g.WebUiDocumentPasswordDialogJS=q;g.WebUiPropertyGridDialogJS=r;g.WebUiMultiPropertyGridDialogJS=t})(g.Dialogs)})(g.UI)})(d.Imaging)})(Vintasoft);
