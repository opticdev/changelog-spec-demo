(this["webpackJsonpspec-poc"]=this["webpackJsonpspec-poc"]||[]).push([[0],{196:function(e,t){},202:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),o=a.n(i),l=(a(92),a(93),a(94),a(13));function c(e,t,a,n){return{AddField:{parentId:e,fieldId:t,name:a,type:n}}}function s(e){return{MakeFieldOptional:{fieldId:e}}}var d,u,f=[(d="root",u="object",{AddShape:{shapeId:d,type:u}}),c("root","field1","name","string"),c("root","field2","founded_year","string"),c("root","field3","mascot_name","string"),c("root","field4","city","string"),c("root","field5","website","string"),s("field2"),s("field5"),function(e,t){return{ChangeFieldType:{fieldId:e,type:t}}}("field2","number")];function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.length,a={},n={},r=[].concat(f,Object(l.a)(e)).slice(0,t);return r.map((function(e){if(e.AddShape){var t=e.AddShape;a[t.shapeId]=p(t.shapeId,[])}else if(e.AddField){var r=e.AddField,i=a[r.parentId];i&&(n[r.fieldId]=m(r.fieldId,r.name,r.type),i.fields[r.fieldId]={required:!0})}else if(e.MakeFieldOptional){var o=e.MakeFieldOptional,l=Object.values(a).find((function(e){return Object.keys(e.fields).includes(o.fieldId)}));l&&(l.fields[o.fieldId]={required:!1})}else if(e.MakeFieldRequired){var c=e.MakeFieldRequired,s=Object.values(a).find((function(e){return Object.keys(e.fields).includes(c.fieldId)}));s&&(s.fields[c.fieldId]={required:!0})}else if(e.ChangeFieldType){var d=e.ChangeFieldType,u=n[d.fieldId];u&&(u.type=d.type)}})),{fields:n,shapes:a}}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{id:e,fields:t}}function m(e,t,a){return{id:e,name:t,type:a}}var g=a(11),v=function(e){function t(t){var a=e.shapes[t];return a?Object.keys(a.fields).filter((function(e){return a.fields[e].required})).map((function(t){return e.fields[t].name})).sort():void 0}function a(t){var a=e.shapes[t];return a?Object.keys(a.fields).filter((function(e){return!a.fields[e].required})).map((function(t){return e.fields[t].name})).sort():void 0}return{whatFieldsDoesAnObjectHave:function(t){var a=e.shapes[t];return a?Object.keys(a.fields).map((function(t){return e.fields[t].name})).sort():void 0},whatAreTheRequiredFieldsOfAnObject:t,whatAreTheOptionalFieldsOfAnObject:a,whatTypeIsExpectedForAField:function(t){return e.fields[t]&&e.fields[t].type},isAFieldRequired:function(a){if(!e.fields[a])return!1;var n=t("root"),r=e.fields[a].name;return n.includes(r)},doesThisShapeMatch:function(n,r){var i=[];function o(t){var a=Object.entries(e.fields).find((function(e){return e[1].name===t})),n=Object(g.a)(a,2),r=(n[0],n[1]);if(r)return r.type}var l=t(n),c=l.map((function(e){var t=r.hasOwnProperty(e),a=typeof r[e]===o(e);return t||i.push("Required field ".concat(e," is missing")),t&&!a&&i.push("Required field ".concat(e," was a ").concat(typeof r[e],", expected ").concat(o(e))),t&&a})),s=a(n),d=s.map((function(e){var t=r.hasOwnProperty(e);if(!t)return!0;var a=typeof r[e]===o(e);return t&&!a&&i.push("Optional field ".concat(e," was a ").concat(typeof r[e],", expected ").concat(o(e))),a})),u=Object.keys(r).filter((function(e){return!l.includes(e)&&!s.includes(e)}));return u.forEach((function(e){return i.push("Undocumented field ".concat(e," observed"))})),{matches:0===u.length&&d.every((function(e){return Boolean(e)}))&&c.every((function(e){return Boolean(e)})),diffs:i}}}},b=a(237),y=a(83),w=a(82),E=a.n(w),O=a(238),F=a(235),j=a(234),A=a(236),S=a(84),T=a(230),k=a(232),q=a(239),C=a(233),I=Object(T.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}}));function x(e){var t=e.children,a=e.style;return r.a.createElement("span",{style:Object(S.a)({backgroundColor:"#d4d4d4",color:"#268aff",fontWeight:600,padding:4},a)},t)}function R(e){var t=e.facts,a=e.mainOffset,n=e.n1Offset,i=I();return r.a.createElement("div",{className:i.root},r.a.createElement(k.a,null,t.map((function(e,t){return r.a.createElement(q.a,{style:{padding:5},disabled:!(t<a),divider:!0},r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},function(e){if(e.AddShape){var t=e.AddShape;return r.a.createElement("span",null,"Add Shape ",r.a.createElement(x,null,t.shapeId)," as"," ",r.a.createElement(x,null,t.type))}if(e.AddField){var a=e.AddField;return r.a.createElement("span",null,"Add Field ",r.a.createElement(x,null,a.name)," as"," ",r.a.createElement(x,null,a.type)," with id ",a.fieldId)}if(e.MakeFieldOptional){var n=e.MakeFieldOptional;return r.a.createElement("span",null,"Make Field ",r.a.createElement(x,null,n.fieldId)," optional")}if(e.MakeFieldRequired){var i=e.MakeFieldRequired;return r.a.createElement("span",null,"Make Field ",r.a.createElement(x,null,i.fieldId)," required")}if(e.ChangeFieldType){var o=e.ChangeFieldType;return r.a.createElement("span",null,"Change Field ",r.a.createElement(x,null,o.fieldId)," to"," ",r.a.createElement(x,null,o.type))}}(e),r.a.createElement(C.a,null,r.a.createElement(x,{style:{marginRight:10,opacity:t<a?1:0}},"N"),r.a.createElement(x,{style:{opacity:t<n?1:0}},"N+1"))))}))))}var M=a(240),N=a(80),W=a.n(N);function D(e){var t=e.source,a=e.style,n=e.noHeadings;return r.a.createElement("div",{style:a},r.a.createElement(W.a,{source:t,renderers:{heading:function(e){var t=e.level,a=e.children;return n?null:r.a.createElement(j.a,{color:"primary",variant:"h".concat(t),style:{fontWeight:300,marginBottom:3}},a)},paragraph:function(e){var t=e.children;return r.a.createElement(j.a,{variant:"body2",style:{fontWeight:200,marginTop:11,whiteSpace:"pre-wrap"}},t)},list:function(e){var t=e.children;return r.a.createElement("ul",{style:{paddingLeft:20}},t)},listItem:function(e){var t=e.children;return r.a.createElement("li",{style:{paddingLeft:0}},r.a.createElement(j.a,{variant:"body2",style:{paddingLeft:5,paddingRight:5,marginTop:11,fontWeight:200}},t))}}}))}var P="\nIn a Changelog Spec, a sequence of immutable Facts represent the domain being described. This has many advantages over a mutable data structure humans maintain:\n\n- Native support for temporal use cases. Easy to understand how the domain changes over time.\n- Simple data structure that's easy for tools to read and append to.\n- Pure model of the domain being described. Removing the requirement for a spec to be human readable/modifiable allows cleaner modeling that remains forwards/backwards compatible. Facts are immutable. You can add more, or change how they are reduced, but changelog specs don't have to worry about breaking changes in the spec affecting users or tooling.\n- Simplicity, and the lack of multiple concurrent versions of spec to support, make accurate reference implementations feasible to produce.\n".trim(),B="\nTooling can dispatch new Facts by appending directly to the Changelog Spec or through the reference implementation's `handleCommand` function, which maintains the integrity of the Changelog by preventing invalid events or duplicate IDs from being applied.\n\n".trim(),H='\nChangelog Specs are the union of Facts + Questions. As you add more Facts, the answers to Questions you ask about the domain will also change.\n\n- Many important questions can be answered with nothing but the facts ie "Which fields are required?"\n- Some questions may compare the state of the spec to some external data ie "Does this JSON match the shape with ID \'root\'?"\n- And another class of questions are about how the domain has changed over time, ie "What\'s changed since offset X?"\n\nSome core Questions will be part of the Changelog Spec reference implementation and will be treated as immutable (safe to depend on). Other more vendor-specific use cases can be built on-top of those stable Questions, or on the immutable Facts themselves.\n\n'.trim(),Q="\nAdjust both (N) and (N+1) sliders to compare the spec across different points in its history\n".trim(),J=Object(T.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}}));function _(e){J();var t=e.title,a=(e.code,e.inputs);return r.a.createElement("div",{style:{marginTop:18}},r.a.createElement(j.a,{variant:"subtitle1"},t),a.map((function(e,t){return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignContent:"center"}},r.a.createElement(j.a,{variant:"subtitle2",style:{marginTop:5,paddingTop:7,color:"#6e6e6e",fontSize:10,paddingRight:5,borderRight:"1px solid #e2e2e2"}},"Example ",t+1),r.a.createElement("div",{style:{flex:1,paddingLeft:10}},r.a.createElement(D,{style:{backgroundColor:"#e2e2e2"},source:"```\n"+e.preview+"\n```"}),r.a.createElement(j.a,{variant:"caption"},"Result:"),r.a.createElement(D,{style:{backgroundColor:"#e2e2e2"},source:"```\n"+JSON.stringify(e.result(),null,2)+"\n```"})))})))}var L=a(81),V=a.n(L);function z(){var e=Object(n.useState)(f.length-3),t=Object(g.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(f.length-1),c=Object(g.a)(o,2),s=c[0],d=c[1],u=v(h([],a)),p=h([],s),m=function(e,t){var a=v(e),n=v(t);return{areTheseSpecsEqual:function(){return V()(e,t)},whatHasChanged:function(){var r=[],i=new Set(Object(l.a)(a.whatAreTheRequiredFieldsOfAnObject("root"))),o=new Set(Object(l.a)(n.whatAreTheRequiredFieldsOfAnObject("root")));new Set(Object(l.a)(o).filter((function(e){return!i.has(e)}))).forEach((function(e){return r.push("Field ".concat(e," was added"))})),new Set(Object(l.a)(a.whatAreTheOptionalFieldsOfAnObject("root"))),new Set(Object(l.a)(n.whatAreTheOptionalFieldsOfAnObject("root"))),new Set(Object(l.a)(i).filter((function(e){return!o.has(e)}))).forEach((function(e){return r.push("Field ".concat(e," is now optional"))}));var c={},s={};return Object.entries(e.fields).map((function(e){var t=Object(g.a)(e,2),a=t[0],n=t[1];return c[a]=n.type})),Object.entries(t.fields).map((function(e){var t=Object(g.a)(e,2),a=t[0],n=t[1];return s[a]=n.type})),Object.entries(s).map((function(e){var a=Object(g.a)(e,2),n=a[0],i=a[1];c[n]!==i&&r.push("Field ".concat(t.fields[n].name," was changed from ").concat(c[n]," to a ").concat(i))})),r}}}(h([],a),p);return r.a.createElement(F.a,{container:!0,style:{height:"100vh"}},r.a.createElement(F.a,{xs:12,md:5,item:!0,style:{borderRight:"1px solid #e2e2e2",padding:15,backgroundColor:"white",overflow:"scroll",height:"100vh"}},r.a.createElement(j.a,{variant:"h5"},"Facts"),r.a.createElement(D,{source:P}),r.a.createElement(j.a,{variant:"subtitle1",style:{marginTop:10,marginBottom:5,fontSize:15}},"Here's a very basic example of a changelog spec for describing the shape of JSON:"),r.a.createElement(R,{facts:f,mainOffset:a,n1Offset:s}),r.a.createElement(j.a,{variant:"subtitle1",style:{marginTop:20,marginBottom:15,fontSize:15}},"These sliders control the offset of facts included in two specs (Version N) and (Version N+1):"),r.a.createElement(j.a,{id:"discrete-slider",gutterBottom:!0,variant:"caption"},"Version N"),r.a.createElement(M.a,{value:a,onChangeCommitted:function(e,t){i(t),t>s&&d(t)},valueLabelDisplay:"auto",step:1,marks:!0,min:0,max:f.length}),r.a.createElement(j.a,{id:"discrete-slider",gutterBottom:!0,variant:"caption"},"Version N+1"),r.a.createElement(M.a,{value:s,onChangeCommitted:function(e,t){d(t<a?a:t)},valueLabelDisplay:"auto",step:1,marks:!0,min:0,max:f.length}),r.a.createElement(D,{source:B})),r.a.createElement(F.a,{xs:12,md:7,item:!0,style:{backgroundColor:"#f5f5f5",padding:15,overflow:"scroll",height:"100vh"}},r.a.createElement(j.a,{variant:"h5"},"Questions"),r.a.createElement(D,{source:H}),r.a.createElement(j.a,{variant:"h6",style:{marginTop:15}},"Core Questions"),r.a.createElement(_,{title:"What fields does an object have?",inputs:[{preview:"spec.whatFieldsDoesAnObjectHave('root')",result:function(){return u.whatFieldsDoesAnObjectHave("root")}}]}),r.a.createElement(_,{title:"What are the required fields of an object?",inputs:[{preview:"spec.whatAreTheRequiredFieldsOfAnObject('root')",result:function(){return u.whatAreTheRequiredFieldsOfAnObject("root")}}]}),r.a.createElement(_,{title:"What are the optional fields of an object?",inputs:[{preview:"spec.whatAreTheOptionalFieldsOfAnObject('root')",result:function(){return u.whatAreTheOptionalFieldsOfAnObject("root")}}]}),r.a.createElement(_,{title:"Is a field required?",inputs:[{preview:"spec.isAFieldRequired('field2')",result:function(){return u.isAFieldRequired("field2")}}]}),r.a.createElement(_,{title:"What type is expected for field?",inputs:[{preview:"spec.whatTypeIsExpectedForAField('root')",result:function(){return u.whatTypeIsExpectedForAField("field2")}}]}),r.a.createElement(A.a,{style:{marginTop:20,marginBottom:20}}),r.a.createElement(j.a,{variant:"h6",style:{marginTop:15}},"Validation Questions"," ",r.a.createElement("i",{style:{fontWeight:100}},"Changelog Spec + Outside Data")),r.a.createElement(_,{title:"Does this input JSON match the expected shape?",inputs:[{name:"Philadelphia Phillies",founded_year:"1883",mascot_name:"Phillie Phanatic",city:"Philadelphia",website:"https://www.mlb.com/phillies"},{founded_year:"1883",website:"https://www.mlb.com/phillies"},{name:"Philadelphia Phillies",founded_year:1883,mascot_name:"Phillie Phanatic",city:"Philadelphia"}].map((function(e){return{preview:"spec.doesThisShapeMatch('root', ".concat(JSON.stringify(e,null,2),")"),result:function(){return u.doesThisShapeMatch("root",e)}}}))}),r.a.createElement(j.a,{variant:"h6",style:{marginTop:15}},"Change Management Questions"," ",r.a.createElement("i",{style:{fontWeight:100}},"Changelog Spec + Outside Data")),r.a.createElement(D,{source:Q}),r.a.createElement(_,{title:"Are the specs equal?",inputs:[{preview:"changelog.areTheseSpecsEqual(n, n1)",result:function(){return m.areTheseSpecsEqual()}}]}),r.a.createElement(_,{title:"What changed?",inputs:[{preview:"changelog.whatHasChanged(n, n1)",result:function(){return m.whatHasChanged()}}]})))}var U=Object(y.a)({palette:{primary:{main:"#31366f"},secondary:{main:E.a[500]}}});var X=function(){var e=v(h());return console.log(e.whatFieldsDoesAnObjectHave("root")),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null),r.a.createElement(O.a,{theme:U},r.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){e.exports=a(202)},92:function(e,t,a){},93:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},94:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.9207dc86.chunk.js.map