(this["webpackJsonpsampling-form"]=this["webpackJsonpsampling-form"]||[]).push([[0],{114:function(e,a,t){e.exports=t(133)},119:function(e,a,t){},133:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),i=t.n(l),c=(t(119),t(7)),o=t(26),m=function(){return r.a.createElement("div",{style:{margin:"3rem 1rem",borderRadius:4,background:"#f6f8fa",boxShadow:"0 0 1px  #eee inset"}},r.a.createElement("div",{style:{textTransform:"uppercase",fontSize:11,borderTopLeftRadius:4,borderTopRightRadius:4,fontWeight:500,padding:".5rem",background:"#555",color:"#fff",letterSpacing:"1px"}},"Formik State"),r.a.createElement(o.c,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(e.validationSchema,e.validate,e.onSubmit,Object(c.a)(e,["validationSchema","validate","onSubmit"]));return r.a.createElement("pre",{style:{fontSize:".85rem",padding:".25rem .5rem",overflowX:"scroll"}},JSON.stringify(a,null,2))})))},u=t(134),s=function(e){var a=e.children,t=Object(c.a)(e,["children"]);return r.a.createElement(u.a,t,a)},d=t(51),b=t(167),h=Object(b.a)((function(){return{root:{marginTop:16,marginRight:0,marginLeft:0}}})),p=t(168),f=t(181),g=function(e){e.children;var a=e.name,t=e.color,n=void 0===t?"primary":t,l=e.label,i=e.labelPlacement,m=void 0===i?"end":i,u=Object(c.a)(e,["children","name","color","label","labelPlacement"]),s=h(),b=Object(o.d)(a),g=Object(d.a)(b,1)[0];return r.a.createElement(p.a,Object.assign({className:s.root,control:r.a.createElement(f.a,{checked:g.value,color:n}),label:l,labelPlacement:m},g,u))},v=t(169),E=function(e){var a=e.children,t=Object(c.a)(e,["children"]);return r.a.createElement(v.a,t,a)},O=t(170),S=function(e){var a=e.children,t=Object(c.a)(e,["children"]);return r.a.createElement(O.a,t,a)},j=t(171),y=function(e){var a=e.children,t=Object(c.a)(e,["children"]);return r.a.createElement(j.a,t,a)},w=t(172),N=function(e){var a=e.children,t=Object(c.a)(e,["children"]);return r.a.createElement(w.a,t,a)},x=t(173),z=function(e){var a=e.children,t=Object(c.a)(e,["children"]);return r.a.createElement(x.a,t,a)},k=t(174),M=function(e){var a=e.children,t=Object(c.a)(e,["children"]);return r.a.createElement(k.a,t,a)},T=t(175),R=function(e){var a=e.children,t=Object(c.a)(e,["children"]);return r.a.createElement(T.a,t,a)},C=t(176),H=function(e){var a=e.children,t=Object(c.a)(e,["children"]);return r.a.createElement(C.a,t,a)},D=function(e){var a=e.children,t=void 0===a?function(){}:a,n=e.initialValues,l=void 0===n?{}:n,i=e.validationSchema,m=void 0===i?{}:i,u=e.onSubmit,s=void 0===u?function(){}:u,d=e.className,b=Object(c.a)(e,["children","initialValues","validationSchema","onSubmit","className"]);return r.a.createElement(o.b,Object.assign({className:b.className,initialValues:l,validationSchema:m,onSubmit:s},b),(function(e){return r.a.createElement(o.a,{className:d},t(e))}))},F=Object(b.a)((function(e){return{root:{display:"flex",flexDirection:"row",justifyContent:"flex-end",marginTop:e.spacing(2)},button:{minWidth:120,"&:not(last-child)":{marginLeft:e.spacing(2)}}}})),P=function(){var e=F(),a=Object(o.e)().resetForm;return r.a.createElement(H,{className:e.root},r.a.createElement(R,{className:e.button,type:"submit",variant:"contained",color:"primary"},"Ok"),r.a.createElement(R,{className:e.button,onClick:function(){return a({})},variant:"outlined"},"Reset"))},W=t(177),q=function(e){var a=e.children,t=Object(c.a)(e,["children"]);return r.a.createElement(W.a,t,a)},L=Object(b.a)((function(e){return{root:{"&.MuiFormControl-root":{marginTop:e.spacing(2)}}}}));var V=t(180),J=function(e){e.children;var a=e.name,t=Object(c.a)(e,["children","name"]),n=L(),l=Object(o.d)(a),i=Object(d.a)(l,2),m=i[0],u=function(e){var a=e.touched,t=e.error,n=a&&!!t;return[n,n&&t]}(i[1]),s=Object(d.a)(u,2),b=s[0],h=s[1];return r.a.createElement(V.a,Object.assign({},m,t,{size:"small",variant:"outlined",error:b,helperText:h,className:n.root}))},A=t(107),B=t(108),I=Object(b.a)((function(){return{root:{display:"flex",flexDirection:"column"}}})),U=t(104),X=t.n(U),$=t(45),G="Sample Size",K="Sample Mean",Q="Standard Deviation",Y="Hypothesized Mean",Z="Perform Hypothesis Test",_={sampleSize:"",sampleMean:"",standardDeviation:"",enableHypothesisTest:!1,hypothesizedMean:""},ee=$.c().shape({sampleSize:$.b().integer("".concat(G," must be a whole number")).min(2).required().label(G),sampleMean:$.b().required().label(K),standardDeviation:$.b().required().min(1,"".concat(Q," must be greater than 0")).label(Q),enableHypothesisTest:$.a(),hypothesizedMean:$.b().when("enableHypothesisTest",{is:function(e){return e},then:$.b().required().label(Y)})}),ae=function(e){return"".concat(e," *")},te=function(){var e=I(),a=ie().appendSampling,t="enabled"===function(e){var a=window.location.search;return new URLSearchParams(a).get(e)}("debugger");return r.a.createElement(D,{className:e.root,initialValues:_,validationSchema:ee,onSubmit:function(e,t){a(Object(B.a)({id:X.a.generate()},e)),t.resetForm()}},(function(e){var a=e.values;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{name:"sampleSize",label:ae(G),type:"number"}),r.a.createElement(J,{name:"sampleMean",label:ae(K),type:"number"}),r.a.createElement(J,{name:"standardDeviation",label:ae(Q),type:"number"}),r.a.createElement(g,{name:"enableHypothesisTest",label:Z}),r.a.createElement(J,{name:"hypothesizedMean",label:a.enableHypothesisTest?ae(Y):Y,type:"number",disabled:!a.enableHypothesisTest}),r.a.createElement(P,null),t&&r.a.createElement(m,null))}))},ne=Object(b.a)((function(e){return{noResults:{width:"100%",textAlign:"center",padding:e.spacing(2)}}})),re=function(){var e=ne(),a=ie(),t=a.samplings,n=a.clearSamplings;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{disabled:!t.length,onClick:function(){return n()}},"Clear"),r.a.createElement(S,{component:E},r.a.createElement(q,{className:e.table,"aria-label":"simple table"},r.a.createElement(z,null,r.a.createElement(N,null,r.a.createElement(M,null,"Sample Size"),r.a.createElement(M,{align:"right"},"Sample Mean"),r.a.createElement(M,{align:"right"},"Standard Deviation"),r.a.createElement(M,{align:"right"},"Hypothesized Mean"))),r.a.createElement(y,null,t.map((function(e){return r.a.createElement(N,{key:e.id},r.a.createElement(M,{component:"th",scope:"row"},e.sampleSize),r.a.createElement(M,{align:"right"},e.sampleMean),r.a.createElement(M,{align:"right"},e.standardDeviation),r.a.createElement(M,{align:"right"},e.hypothesizedMean||"N/A"))})))),!t.length&&r.a.createElement(s,{className:e.noResults},"No Sampling Results")))},le=Object(n.createContext)({samplings:[],appendSampling:function(){},clearSamplings:function(){}}),ie=function(){return Object(n.useContext)(le)},ce=function(e){e.children;var a=Object(c.a)(e,["children"]),t=Object(n.useState)([]),l=Object(d.a)(t,2),i=l[0],o=l[1],m=Object(n.useCallback)((function(){return o([])}),[]),u=Object(n.useCallback)((function(e){return o([].concat(Object(A.a)(i),[e]))}),[i]),s={samplings:i,appendSampling:u,clearSamplings:m};return r.a.createElement(H,a,r.a.createElement(le.Provider,{value:s},r.a.createElement(te,null),r.a.createElement(re,null)))},oe=t(178),me=t(106),ue=function(){return r.a.createElement(oe.a,{theme:Object(me.a)({})},r.a.createElement(H,{maxWidth:"md"},r.a.createElement(ce,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=t(179);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se.a,null),r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[114,1,2]]]);
//# sourceMappingURL=main.51d3cc7c.chunk.js.map