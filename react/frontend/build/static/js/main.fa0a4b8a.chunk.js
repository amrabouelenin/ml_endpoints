(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(28),r=n.n(i),o=(n(130),n(33)),l=(n(131),n(225)),s=n(226),d=n(86),j=n.n(d),b=n(98),x=n(99),h=n(13),m=n(222),u=n(224),p=n(106),O=n.n(p),g=n(231),f=n(232),v=n(45),A=n(107),y=n.n(A),S=n(108),k=n.n(S),J=n(5),C=n(2),T=function(e){var t=e.imagetodetect;return Object(C.jsx)("div",{children:Object(C.jsx)("img",{alt:"screenshot to detect ui for",width:300,src:t})})},U=function(e){var t=e.detectedimage;return Object(C.jsx)("div",{children:Object(C.jsx)("img",{alt:"Detected UI",width:300,src:t})})},K=n(71),E=n(72),w=n(112),F=n(111),R=n(102),I=n.n(R),N=n(105),z=n.n(N);n(135);var B=function(e){Object(w.a)(n,e);var t=Object(F.a)(n);function n(e){var a;return Object(K.a)(this,n),(a=t.call(this,e)).highlight=function(){a.ref&&a.ref.current&&I.a.highlightElement(a.ref.current)},a.ref=c.a.createRef(),a}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,t=e.code,n=e.plugins,a=e.language;return Object(C.jsxs)("pre",{className:n?n.join(" "):"",children:[Object(C.jsx)(u.a,{className:"copy_icon",color:"primary","aria-label":"upload picture",component:"span",onClick:function(){navigator.clipboard.writeText(t)},children:Object(C.jsx)(z.a,{})}),Object(C.jsx)("code",{ref:this.ref,className:"language-".concat(a),children:t})]})}}]),n}(c.a.Component),D=function(e){var t=e.detectedimage,n=e.imagetodetect,a=e.code_generated;return console.log(n),Object(C.jsxs)("div",{children:[Object(C.jsx)(l.a,{sx:{display:"inline-flex",alignItems:"center",marginTop:5},children:void 0!==n?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(T,{imagetodetect:n}),Object(C.jsx)("img",{alt:"Arrow Process",width:100,src:"data:image/png;base64,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"}),Object(C.jsx)(U,{detectedimage:t})]}):Object(C.jsx)(s.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:"Output of the Ui Detection process."})}),Object(C.jsx)(B,{code:a,language:"python",plugins:["line-numbers"]})]})},P=n(220),X=n(218),W=n(230),M=n(214),Z=function(){var e=Object(a.useState)("0.25"),t=Object(h.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(),r=Object(h.a)(i,2),o=r[0],s=r[1],d=Object(a.useState)(),p=Object(h.a)(d,2),A=p[0],S=p[1],T=Object(a.useState)(),U=Object(h.a)(T,2),K=U[0],E=U[1],w=Object(a.useState)("Code to be generated"),F=Object(h.a)(w,2),R=F[0],I=F[1],N=a.useState("html"),z=Object(h.a)(N,2),B=z[0],Z=z[1],G=a.useState("yolov5"),H=Object(h.a)(G,2),Q=H[0],Y=H[1],V=Object(a.useState)(!1),L=Object(h.a)(V,2),q=L[0],_=L[1],$=Object(a.useState)(!1),ee=Object(h.a)($,2),te=ee[0],ne=ee[1],ae=Object(x.a)({},te&&{bgcolor:v.a[500],"&:hover":{bgcolor:v.a[700]}}),ce=Object(J.a)("input")({display:"none"}),ie=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a,c,i,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return alert("Please specify confidence"),e.abrupt("return");case 3:return E(""),S(""),(t=new FormData).append("author","1"),t.append("description","Detection of user interface screen shot"),t.append("ml_models",Q),t.append("status","successfull"),t.append("image_to_detect",o),t.append("confidence",n),t.append("type",B),console.log(t),c=(a="http://167.71.9.235:8000/")+"api/v1/yolov5/detectuielements/","yolovx"==Q&&(c=(a="http://srv09.mikr.us:30373/")+""),q||(ne(!1),_(!0)),e.next=20,fetch(c,{method:"POST",body:t}).then((function(e){return e.json()}));case 20:i=e.sent,ne(!0),_(!1),E(a+i.image_to_detect),S(a+i.detected_image_path),r=a+i.code_generated,"yolovx"==Q&&(r=i.code_generated),fetch(r).then((function(e){return e.text()})).then((function(e){I(e)})),console.log(a+i.detected_image_path),console.log(i),console.log(R);case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("form",{className:"upload-form",children:Object(C.jsxs)(l.a,{sx:{display:"inline-flex",alignItems:"center"},children:[Object(C.jsxs)(W.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(C.jsx)(P.a,{id:"demo-simple-select-standard-label",children:"Model Type"}),Object(C.jsxs)(M.a,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:Q,onChange:function(e){Y(e.target.value)},label:"modelType",children:[Object(C.jsx)(X.a,{value:"yolov5",children:"Yolov5"}),Object(C.jsx)(X.a,{value:"yolovx",children:"YolovX"})]})]}),Object(C.jsxs)(W.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(C.jsx)(P.a,{id:"demo-simple-select-standard-label",children:"Type"}),Object(C.jsxs)(M.a,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:B,onChange:function(e){Z(e.target.value)},label:"Type",children:[Object(C.jsx)(X.a,{value:"html",children:"HTML"}),Object(C.jsx)(X.a,{value:"pyqt",children:"PyQt"})]})]}),Object(C.jsxs)(W.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(C.jsx)(P.a,{id:"demo-simple-select-standard-label",children:"Confidence"}),Object(C.jsxs)(M.a,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:n,onChange:function(e){c(e.target.value)},label:"ModelConfidence",children:[Object(C.jsx)(X.a,{value:"0.25",children:"0.25"}),Object(C.jsx)(X.a,{value:"0.3",children:"0.3"}),Object(C.jsx)(X.a,{value:"0.4",children:"0.4"}),Object(C.jsx)(X.a,{value:"0.45",children:"0.45"}),Object(C.jsx)(X.a,{value:"0.5",children:"0.5"}),Object(C.jsx)(X.a,{value:"0.65",children:"0.65"}),Object(C.jsx)(X.a,{value:"0.7",children:"0.7"}),Object(C.jsx)(X.a,{value:"0.75",children:"0.75"}),Object(C.jsx)(X.a,{value:"0.8",children:"0.8"}),Object(C.jsx)(X.a,{value:"0.85",children:"0.85"}),Object(C.jsx)(X.a,{value:"0.9",children:"0.9"}),Object(C.jsx)(X.a,{value:"0.95",children:"0.95"})]})]}),Object(C.jsx)("div",{className:"form-control",children:Object(C.jsxs)("label",{htmlFor:"contained-button-file",children:[Object(C.jsx)(ce,{accept:"image/*",id:"contained-button-file",type:"file",onChange:function(e){return s(e.target.files[0])}}),Object(C.jsx)(m.a,{variant:"contained",component:"span",onClick:function(e){ne(!1),I("Code to be generated.....")},children:"Upload"})]})}),Object(C.jsx)("div",{className:"form-control",children:Object(C.jsxs)("label",{htmlFor:"icon-button-file",children:[Object(C.jsx)(ce,{accept:"image/*",id:"icon-button-file",type:"file",onChange:function(e){return s(e.target.files[0])}}),Object(C.jsx)(u.a,{color:"primary","aria-label":"upload picture",component:"span",children:Object(C.jsx)(O.a,{})})]})})]})}),Object(C.jsxs)(l.a,{sx:{display:"inline-flex",alignItems:"center"},children:[Object(C.jsxs)(l.a,{sx:{m:1,position:"relative"},children:[Object(C.jsx)(g.a,{"aria-label":"save",color:"primary",sx:ae,onClick:ie,children:te?Object(C.jsx)(y.a,{}):Object(C.jsx)(k.a,{})}),q&&Object(C.jsx)(f.a,{size:68,sx:{color:v.a[500],position:"absolute",top:-6,left:-6,zIndex:1}})]}),Object(C.jsxs)(l.a,{sx:{m:1,position:"relative"},children:[Object(C.jsx)(m.a,{variant:"contained",sx:ae,disabled:q,onClick:ie,children:"Process"}),q&&Object(C.jsx)(f.a,{size:24,sx:{color:v.a[500],position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}})]})]}),Object(C.jsx)(D,{detectedimage:A,imagetodetect:K,code_generated:R})]})},G=n(14),H=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h4",{children:"Version 1.0.0"}),Object(C.jsx)(o.b,{to:"/",children:"Go Back"})]})},Q=n(233),Y=n(235),V=n(234),L=n(237),q=n.p+"static/media/amro.47bdb0d9.jpeg",_=function(){var e="teamcard";return Object(C.jsxs)(l.a,{sx:{display:"inline-flex",alignItems:"center",marginTop:5},children:[Object(C.jsx)(Q.a,{sx:{maxWidth:345,margin:5},className:e,children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)(V.a,{component:"img",height:"200",image:q,alt:"Amro Abouelenein"}),Object(C.jsxs)(Y.a,{children:[Object(C.jsx)(s.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Amro Abouelenein"}),Object(C.jsx)(s.a,{variant:"body2",color:"text.secondary",children:"Software Engineer."})]})]})}),Object(C.jsx)(Q.a,{sx:{maxWidth:345,margin:5},className:e,children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)(V.a,{component:"img",height:"200",image:q,alt:"green iguana"}),Object(C.jsxs)(Y.a,{children:[Object(C.jsx)(s.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Amro Abouelenein"}),Object(C.jsx)(s.a,{variant:"body2",color:"text.secondary",children:"Software Engineer"})]})]})}),Object(C.jsx)(Q.a,{sx:{maxWidth:345,margin:3},className:e,children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)(V.a,{component:"img",height:"200",image:q,alt:"green iguana"}),Object(C.jsxs)(Y.a,{children:[Object(C.jsx)(s.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Amro Abouelenein"}),Object(C.jsx)(s.a,{variant:"body2",color:"text.secondary",children:"Software Engineer"})]})]})})]})};n(141);var $=function(){return Object(C.jsxs)(l.a,{sx:{width:"100%",textAlign:"center"},children:[Object(C.jsx)(s.a,{variant:"h3",component:"div",gutterBottom:!0}),Object(C.jsx)(s.a,{variant:"h3",component:"div",gutterBottom:!0,children:"Ui Element Detector"}),Object(C.jsxs)(G.c,{children:[Object(C.jsx)(G.a,{path:"/",element:Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(s.a,{variant:"h6",display:"block",gutterBottom:!0,children:"Please upload your image/screenshot and we will process it for you..."}),Object(C.jsx)(Z,{})]})}),Object(C.jsx)(G.a,{path:"/about",element:Object(C.jsx)(H,{})}),Object(C.jsx)(G.a,{path:"/team",element:Object(C.jsx)(_,{})})]})]})},ee=n(227),te=n(229),ne=n(109),ae=n(223),ce=n(228),ie=["Home","About","Team"],re=function(){var e=a.useState(null),t=Object(h.a)(e,2),n=t[0],c=t[1],i=function(){c(null)};return Object(C.jsx)(ee.a,{position:"static",children:Object(C.jsx)(ce.a,{maxWidth:"xl",children:Object(C.jsxs)(te.a,{disableGutters:!0,children:[Object(C.jsx)(s.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"Ui Element Detector"}),Object(C.jsxs)(l.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},style:{position:"absolute",right:0},children:[Object(C.jsx)(u.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(C.jsx)(ae.a,{})}),Object(C.jsx)(ne.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:i,sx:{display:{xs:"block",md:"none"}},children:ie.map((function(e){return Object(C.jsx)(X.a,{onClick:i,children:Object(C.jsx)(o.b,{to:"Home"===e?"/":e,children:Object(C.jsx)(s.a,{textAlign:"center",children:e})})},e)}))})]}),Object(C.jsx)(s.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:Object(C.jsx)(o.b,{className:"homemenu",to:"/",children:"UI Element Detector"})}),Object(C.jsx)(l.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:ie.map((function(e){return Object(C.jsx)(m.a,{onClick:i,sx:{my:2,color:"white",display:"block"},children:Object(C.jsx)(o.b,{className:"menulink",to:"Home"===e?"/":e,children:e})},e)}))})]})})})},oe=n(4),le=n(213),se=n(211),de=n(212),je=n(219),be=n(215),xe=Object(se.a)((function(e){return{footer:Object(oe.a)({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}}));function he(){return Object(C.jsxs)(de.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(C.jsx)(je.a,{color:"inherit",href:"https://material-ui.com/",children:"Ui Element Detector - Machine Learning"})," ",(new Date).getFullYear(),"."]})}var me=function(){var e=xe();return Object(C.jsx)(c.a.Fragment,{children:Object(C.jsx)(le.a,{maxWidth:"md",component:"footer",className:e.footer,children:Object(C.jsx)(be.a,{mt:5,children:Object(C.jsx)(he,{})})})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,239)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(C.jsx)(o.a,{children:Object(C.jsxs)(c.a.StrictMode,{children:[Object(C.jsx)(re,{}),Object(C.jsx)($,{}),Object(C.jsx)(me,{})]})}),document.getElementById("root")),ue()}},[[142,1,2]]]);
//# sourceMappingURL=main.fa0a4b8a.chunk.js.map