(this["webpackJsonpreconnect-react-test"]=this["webpackJsonpreconnect-react-test"]||[]).push([[0],{25:function(e,t,n){e.exports=n(53)},30:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(30),n(10)),i=n.n(l),u=n(22),s=n(8),m=n(23),p=n.n(m),f=n(55),h=n(56),b=n(9),d=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),l=Object(s.a)(c,2),m=l[0],d=l[1],g=Object(a.useState)(!1),E=Object(s.a)(g,2),y=E[0],v=E[1],S=Object(a.useState)({}),O=Object(s.a)(S,2),j=O[0],w=O[1];function T(){return(T=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://c2t-cabq-open-data.s3.amazonaws.com/film-locations-json-all-records_03-19-2020.json");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){(function(){return T.apply(this,arguments)})().then((function(e){e.features&&(o(e.features.filter((function(e){return"Movie"===e.attributes.Type}))),d(e.features.filter((function(e){return"Movie"===e.attributes.Type}))))})).catch((function(e){}))}),[]);return r.a.createElement(f.a,null,r.a.createElement(h.a,{style:{marginLeft:"67%",marginTop:"3%"}},r.a.createElement(h.a.Group,{controlId:"exampleForm.SelectCustomSizeLg"},r.a.createElement(h.a.Label,null,"Select A Movie"),r.a.createElement(h.a.Control,{as:"select",size:"lg",custom:!0,onChange:function(e){var t=e.target.value;t&&o(m.filter((function(e){return e.attributes.Title===t})))},name:"title"},r.a.createElement("option",null,"Choose"),m?m.map((function(e){return r.a.createElement("option",{key:e.attributes.OBJECTID,value:e.attributes.Title,id:"titleId"},e.attributes.Title)})):null))),r.a.createElement(b.c,{id:"script-loader",googleMapsApiKey:"AIzaSyBu0SE7j9ZIX8Pxl_htyuM21IAUQhzSBBQ"},r.a.createElement(b.a,{id:"ground-example",mapContainerStyle:{height:"700px",width:"100%"},zoom:9,center:{lat:35.106766,lng:-106.629181}},n.length?n.map((function(e){return r.a.createElement(b.d,{position:{lat:Number(e.geometry.y),lng:Number(e.geometry.x)},key:e.attributes.OBJECTID,onClick:function(){w(e.attributes),v(!0)}},y&&e.attributes.OBJECTID===j.OBJECTID?r.a.createElement(b.b,{position:{lat:Number(e.geometry.y),lng:Number(e.geometry.x)}},r.a.createElement("div",null,r.a.createElement("h3",{style:{textAlign:"center"}},j.Title),r.a.createElement("h4",null,"Shoot Date: ",j.ShootDate),r.a.createElement("h4",null,"Movie Site: ",j.Site),r.a.createElement("h4",null,"Movie Address: ",j.Address))):null)})):null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.710f0e67.chunk.js.map