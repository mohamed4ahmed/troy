(this.webpackJsonptroy=this.webpackJsonptroy||[]).push([[5],{251:function(e,t,a){"use strict";t.a=a.p+"static/media/feedback.246150cd.svg"},252:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(259),o=(a(269),n.a.initializeApp({apiKey:"AIzaSyCdpyxsYjcSah8SA_bB53P-Y8qcg0iGiFo",authDomain:"troy-177f5.firebaseapp.com",projectId:"troy-177f5",storageBucket:"troy-177f5.appspot.com",messagingSenderId:"90144414408",appId:"1:90144414408:web:9b97cbe238caf80a2e23fd",measurementId:"G-WKR4JR1KPT"}))},274:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(l){o=!0,r=l}finally{try{!n&&c.return&&c.return()}finally{if(o)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=a(2),r=s(o),i=s(a(8)),c=s(a(275)),l=s(a(276));function s(e){return e&&e.__esModule?e:{default:e}}var d={overflow:"hidden",position:"relative"};function u(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function f(e){var t=(0,o.useState)(""),a=n(t,2),i=a[0],s=a[1],f=(0,o.useState)(0),p=n(f,2),m=p[0],b=p[1],h=(0,o.useState)([]),x=n(h,2),v=x[0],j=x[1],g=(0,o.useState)(!1),y=n(g,2),O=y[0],w=y[1],S=(0,c.default)(e),I=n(S,2),k=I[0],C=I[1],N=(0,o.useState)(0),M=n(N,2),H=M[0],W=M[1],T=(0,o.useState)(!1),z=n(T,2),E=z[0],A=z[1],R=(0,o.useState)(""),D=n(R,2),_=D[0],F=D[1];function L(e){"undefined"===typeof e&&(e=k.isHalf?Math.floor(m):Math.round(m));for(var t=[],a=0;a<k.count;a++)t.push({active:a<=e-1});return t}function B(e){if(k.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(k.isHalf){var a=P(e);A(a),a&&(t+=1),W(t)}else t+=1;!function(e){var t=v.filter((function(e){return e.active}));e!==t.length&&j(L(e))}(t)}}function P(e){var t=e.target.getBoundingClientRect(),a=e.clientX-t.left;return(a=Math.round(Math.abs(a)))>t.width/2}function G(){k.edit&&(Y(m),j(L()))}function Y(e){k.isHalf&&(A(function(e){return e%1===0}(e)),W(Math.floor(e)))}function K(e){if(k.edit){var t=Number(e.currentTarget.getAttribute("data-index")),a=void 0;if(k.isHalf){var n=P(e);A(n),n&&(t+=1),a=n?t:t+.5,W(t)}else a=t+=1;q(a)}}function q(t){t!==m&&(j(L(t)),b(t),e.onChange(t))}return(0,o.useEffect)((function(){var t,a;!function(){var t="react-stars";F(e.classNames+" "+t)}(),t=e.value,a=e.count,b(t<0||t>a?0:t),j(L(e.value)),C(e),s((Math.random()+"").replace(".","")),w(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),W(Math.floor(e.value)),A(e.isHalf&&e.value%1<.5)}),[]),r.default.createElement("div",{className:"react-stars-wrapper-"+i,style:{display:"flex"}},r.default.createElement("div",{tabIndex:k.a11y&&k.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(k.a11y||k.edit){var t=e.key,a=m,n=Number(t);n?Number.isInteger(n)&&n>0&&n<=k.count&&(a=n):("ArrowUp"===t||"ArrowRight"===t)&&a<k.count?(e.preventDefault(),a+=k.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&a>.5&&(e.preventDefault(),a-=k.isHalf?.5:1),Y(a),q(a)}},className:_,style:d},k.isHalf&&function(){return r.default.createElement("style",{dangerouslySetInnerHTML:{__html:O?(e=k.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):u(k.activeColor,i)}});var e}(),v.map((function(e,t){return r.default.createElement(l.default,{key:t,index:t,active:e.active,config:k,onMouseOver:B,onMouseLeave:G,onClick:K,halfStarHidden:E,halfStarAt:H,isUsingIcons:O,uniqueness:i})})),r.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},m)))}f.propTypes={classNames:i.default.string,edit:i.default.bool,half:i.default.bool,value:i.default.number,count:i.default.number,char:i.default.string,size:i.default.number,color:i.default.string,activeColor:i.default.string,emptyIcon:i.default.element,halfIcon:i.default.element,filledIcon:i.default.element,a11y:i.default.bool},f.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.default=f},275:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(l){o=!0,r=l}finally{try{!n&&c.return&&c.return()}finally{if(o)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,o.useState)(e.count),a=n(t,2),r=a[0],i=a[1],c=(0,o.useState)(e.size),l=n(c,2),s=l[0],d=l[1],u=(0,o.useState)(e.char),f=n(u,2),p=f[0],m=f[1],b=(0,o.useState)(e.color),h=n(b,2),x=h[0],v=h[1],j=(0,o.useState)(e.activeColor),g=n(j,2),y=g[0],O=g[1],w=(0,o.useState)(e.isHalf),S=n(w,2),I=S[0],k=S[1],C=(0,o.useState)(e.edit),N=n(C,2),M=N[0],H=N[1],W=(0,o.useState)(e.emptyIcon),T=n(W,2),z=T[0],E=T[1],A=(0,o.useState)(e.halfIcon),R=n(A,2),D=R[0],_=R[1],F=(0,o.useState)(e.filledIcon),L=n(F,2),B=L[0],P=L[1],G=(0,o.useState)(e.a11y),Y=n(G,2),K=Y[0],q=Y[1];return[{count:r,size:s,char:p,color:x,activeColor:y,isHalf:I,edit:M,emptyIcon:z,halfIcon:D,filledIcon:B,a11y:K},function(e){i(e.count),d(e.size),m(e.char),v(e.color),O(e.activeColor),k(e.isHalf),H(e.edit),E(e.emptyIcon),_(e.halfIcon),P(e.filledIcon),q(e.a11y)}]};var o=a(2)},276:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.default=function(e){var t=e.index,a=e.active,o=e.config,r=e.onMouseOver,l=e.onMouseLeave,s=e.onClick,d=e.halfStarHidden,u=e.halfStarAt,f=e.isUsingIcons,p=e.uniqueness,m=o.color,b=o.activeColor,h=o.size,x=o.char,v=o.isHalf,j=o.edit,g=o.halfIcon,y=o.emptyIcon,O=o.filledIcon,w="",S=!1;v&&!d&&u===t&&(w=f?"react-stars-half":"react-stars-"+p,S=!0);var I=n({},c,{color:a?b:m,cursor:j?"pointer":"default",fontSize:h+"px"});return i.default.createElement("span",{className:w,style:I,key:t,"data-index":t,"data-forhalf":O?t:x,onMouseOver:r,onMouseMove:r,onMouseLeave:l,onClick:s},f?a?O:!a&&S?g:y:x)};var o,r=a(2),i=(o=r)&&o.__esModule?o:{default:o};var c={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}},307:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a(27),r=a(303),i=a(231),c=a(233),l=a(235),s=a(302),d=a(313),u=a(304),f=a(3),p=a(228),m=a(14),b=Object(p.a)((function(e){return{feedback:Object(f.a)({color:"black",background:"url(".concat(m.a,") no-repeat right top, #f5f5f5")},e.breakpoints.down("md"),{}),spinner:{display:"flex",justifyContent:"center",alignItems:"center"},container:Object(f.a)({padding:"80px 0"},e.breakpoints.down("md"),{padding:"30px 0"}),row:Object(f.a)({alignItems:"center",display:"flex",flexDirection:"row",flexWrap:"wrap"},e.breakpoints.down("md"),{flexDirection:"column-reverse"}),column:Object(f.a)({maxWidth:"50%",marginBottom:"15px",padding:"0 15px",flex:"1",flexBasis:"50%"},e.breakpoints.down("md"),{maxWidth:"100%",display:"flex",justifyContent:"center",flexBasis:"100%"}),textWrapper:{display:"flex",flexDirection:"column"},headerText:{color:"black",fontWeight:600,position:"relative",marginBottom:"20px","&::before":{content:'""',position:"absolute",bottom:"-5px",width:"10%",border:"2px solid rgba(246,194,73, 1)"}},headerTextModal:{"&::before":{width:"100%"}},description:{maxWidth:"90%",fontSize:"18px",lineHeight:"24px"},rating:{margin:"10px"},reviewRating:{maxWidth:"100%",fontSize:"18px",lineHeight:"24px"},selectCategory:{},label:{maxWidth:"100%",fontSize:"18px",lineHeight:"24px",margin:"10px 0"},textarea:{fontSize:"18px"},button:Object(f.a)({marginTop:"20px",borderRadius:"20px",fontSize:"20px",background:"rgba(246,194,73, 1)",color:"black",fontWeight:"bold",transition:"all 0.3s ease-in-out","&:hover":{background:"rgba(246,194,73, 0.9)",color:"white"}},e.breakpoints.down("md"),{width:"100%"}),imgWrapper:{maxWidth:"555px",display:"flex",justifyContent:"flex-start",position:"relative"},img:{borderRadius:"20px",paddingRight:0,maxWidth:"100%",maxHeight:"400px",objectFit:"cover",display:"block"},modal:Object(f.a)({display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},e.breakpoints.down("md"),{}),modalComponent:Object(f.a)({width:"40%",background:"#f5f5f5",position:"relative",padding:"50px 30px",borderRadius:"20px",outline:"none",border:"none"},e.breakpoints.down("md"),{width:"calc(100% - 40px)",padding:"50px 20px"}),icon:{top:"10px",right:"10px",position:"absolute",fontSize:"30px","&:hover":{color:"rgba(246,194,73, 1)"}},buttonGroup:Object(f.a)({display:"flex",flexDirection:"row",justifyContent:"center"},e.breakpoints.down("md"),{flexDirection:"column"}),secondButtonModal:Object(f.a)({marginLeft:"20px"},e.breakpoints.down("md"),{marginLeft:"0px"}),error:{marginTop:"20px",color:"red"}}})),h=a(9),x=a(265),v=a(274),j=a.n(v),g=a(15),y=(a(33),a(251)),O=a(252),w=a(31),S=a(5),I=a(45),k=a(1),C={1:"What do you feel needs to change?",2:"What do you feel needs to change?",3:"What do you feel needs to change?",4:"What do you feel is not good?",5:"Great"},N=[{id:"",name:"Select a category"},{id:"no space",name:"No Space"},{id:"sound",name:"Sound"},{id:"staff",name:"Staff"},{id:"drinks",name:"Drinks"},{id:"food",name:"Food"},{id:"timeserver",name:"Timeserver"},{id:"wifi",name:"Wifi"}],M=function(){var e=b(),t=Object(n.useState)(3),a=Object(o.a)(t,2),f=a[0],p=a[1],m=Object(n.useState)(""),v=Object(o.a)(m,2),M=v[0],H=v[1],W=Object(n.useState)(""),T=Object(o.a)(W,2),z=T[0],E=T[1],A=Object(n.useState)(!1),R=Object(o.a)(A,2),D=R[0],_=R[1],F=Object(n.useState)(!0),L=Object(o.a)(F,2),B=L[0],P=L[1],G=Object(n.useState)(""),Y=Object(o.a)(G,2),K=Y[0],q=Y[1];return Object(n.useEffect)((function(){setTimeout((function(){P(!1)}),2300)}),[]),Object(k.jsx)("div",{className:e.feedback,children:B?Object(k.jsx)(I.s,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(r.a,{open:D,onClose:function(){return _(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",className:e.modal,children:Object(k.jsxs)(i.a,{maxWidth:"lg",className:e.modalComponent,children:[Object(k.jsx)("span",{className:e.icon,onClick:function(){return _(!1)},children:Object(k.jsx)(x.a,{})}),Object(k.jsx)(c.a,{variant:"h4",className:"".concat(e.headerText," ").concat(e.headerTextModal),children:"TROY COFFE & Resturant"}),Object(k.jsx)("p",{className:e.description,children:"Thank you for comment!"}),Object(k.jsxs)("div",{className:e.buttonGroup,children:[Object(k.jsx)(S.b,{to:"/",children:Object(k.jsx)(l.a,{variant:"contained",className:e.button,children:"Go to homepage"})}),Object(k.jsx)(l.a,{variant:"contained",className:"".concat(e.button," ").concat(e.secondButtonModal),onClick:function(){_(!1),p(3),H(""),E("")},children:"Continue to comment"})]})]})}),Object(k.jsx)(i.a,{maxWidth:"lg",className:e.container,children:Object(k.jsxs)("div",{className:e.row,children:[Object(k.jsx)("div",{className:e.column,children:Object(k.jsxs)("div",{className:e.textWrapper,children:[Object(k.jsx)(c.a,{variant:"h4",className:e.headerText,children:"Evaluate"}),Object(k.jsx)("p",{className:e.description,children:"Each of your comments will help TROY COFFE's service improve more every day!"}),Object(k.jsx)(j.a,{count:5,onChange:function(e){p(e)},size:50,isHalf:!1,emptyIcon:Object(k.jsx)(h.g,{}),fullIcon:Object(k.jsx)(h.g,{}),activeColor:"#ffd700",a11y:!1,value:f,classNames:e.rating}),null!==f&&Object(k.jsx)("p",{className:e.label,children:C[f]}),Object(k.jsx)("p",{id:"category",className:e.label,children:"List of comments: (*)"}),Object(k.jsx)(s.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:M,onChange:function(e){H(e.target.value)},className:e.selectCategory,variant:"outlined",children:N.map((function(e,t){return Object(k.jsx)(d.a,{value:e.id,children:e.name},t)}))}),Object(k.jsx)("p",{id:"comment",className:e.label,children:"Share your opinion:"}),Object(k.jsx)(u.a,{"aria-label":"minimum height",rows:4,multiline:!0,value:z,onChange:function(e){E(e.target.value)},className:e.textarea,variant:"outlined",placeholder:"Typing...."}),Object(k.jsx)(l.a,{variant:"contained",className:e.button,onClick:function(e){e.preventDefault(),""===f&&q("rating"),""===M&&q("category"),f&&""!==M&&(_(!0),O.a.firestore().collection("feedback").add({id:Object(w.c)(),dateCreate:new Date,star:f,category:M,review:z,emailAddress:""}).then((function(){})).catch((function(e){console.error("Error writing document: ",e)})))},disabled:!M,children:"Send comments"}),K&&Object(k.jsxs)("p",{className:"".concat(e.label," ").concat(e.error),children:["Error: Please enter text in: ",K]})]})}),Object(k.jsx)("div",{className:e.column,children:Object(k.jsx)("div",{className:e.imgWrapper,children:Object(k.jsx)(g.LazyLoadImage,{src:y.a,alt:"img",className:e.img,effect:"blur"})})})]})})]})})};t.default=function(){return Object(n.useEffect)((function(){document.title="Comment - TROY COFFE & Resturant"}),[]),Object(k.jsx)(M,{})}}}]);
//# sourceMappingURL=5.faf1332a.chunk.js.map