"use strict";(self.webpackChunkvcube=self.webpackChunkvcube||[]).push([[4716,2335,1175],{24716:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var s=r(65043),n=r(83462),o=r(17392),a=r(26600),l=r(35316),i=r(77739),c=r(12110),d=r(94516),x=r(94496),h=r(88446),u=r(29347),p=r(11906),A=r(90573),m=r(67610),y=r(6512),f=r(79055),j=r(27473),g=r(3632),v=r(67847),w=r(30466),b=r(23054),C=r(26500),N=r(11175),k=r(70579);const S=e=>{let{isOpen:t,setIsOpen:r,selectedCourse:S,selectBatchname:D,setIsLoading:L,handleShowSnackbar:M}=e;const{fetchPostsData:z,deletePostsData:_}=(0,s.useContext)(C.o),[F,T]=(0,s.useState)([]),[P,R]=(0,s.useState)(!1),[V,H]=(0,s.useState)(null),[$,O]=(0,s.useState)(!1),W=async()=>{L(!0);const e=await z(S);if(e&&e.message)M("error",e.message);else if(e){if(Array.isArray(e)&&0===e.length)return void M("error","No data found.");const t=Array.isArray(e)&&e.filter((e=>e.BatchName===D));Array.isArray(t)&&t.length>0&&T([...t].reverse())}L(!1)};(0,s.useEffect)((()=>{W()}),[t]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(n.A,{open:t,sx:{zIndex:"700"},maxWidth:"lg",children:[(0,k.jsx)("img",{src:"/images/V-Cube-Logo.png",alt:"",width:"8%",className:"ml-[46%]"}),(0,k.jsx)(o.A,{sx:{position:"absolute"},className:"top-3 right-3",onClick:()=>{r(!1),T([])},children:(0,k.jsx)(A.A,{sx:{fontSize:"35px"}})}),(0,k.jsx)(o.A,{disabled:$,sx:{position:"absolute"},className:"top-3 right-16",onClick:async()=>{await W(),O(!0),setTimeout((()=>{O(!1)}),1e4)},children:(0,k.jsx)(m.A,{sx:{fontSize:"35px"}})}),(0,k.jsxs)(a.A,{className:"flex items-center",variant:"h5",children:["Posted Job Annoucements ",(0,k.jsx)(y.A,{sx:{marginLeft:"10px"}})]}),(0,k.jsx)(l.A,{className:"w-[75rem] max-h-[40rem] h-[40rem] grid grid-cols-2 gap-x-5 gap-y-5 overflow-y-auto place-content-start",children:Array.isArray(F)&&F.length>0?(0,k.jsx)(k.Fragment,{children:Array.isArray(F)&&F.map(((e,t)=>(0,k.jsx)(i.A,{title:e.Description,arrow:!0,children:(0,k.jsxs)(c.A,{className:"relative w-full h-36 flex items-center justify-between mt-1",sx:{boxShadow:"0 0 5px rgba(0,0,0,0.5)"},children:[(0,k.jsx)(y.A,{sx:{color:`${b.vG[t<20?t:Math.floor(20*Math.random())]}`,width:"10%",fontSize:"35px"}}),(0,k.jsxs)(d.A,{className:"w-[80%] h-[80%] flex flex-col items-start justify-between",children:[(0,k.jsx)(x.A,{sx:{fontWeight:"bold"},children:e.Company_Name.split("~")[0]}),(0,k.jsxs)(x.A,{className:"flex items-center",children:[(0,k.jsxs)(h.A,{href:e.Post_Link,target:"_blank",sx:{textDecoration:"none",cursor:"pointer",":hover":{textDecoration:"underline"}},children:[(0,k.jsx)(f.A,{})," Application Link"]}),(0,k.jsx)(j.A,{sx:{fontSize:"20px",color:"grey",margin:"0 5px 0 15px"}}),e.Company_Name.split("~")[1]]}),(0,k.jsxs)(x.A,{color:"GrayText",children:["Opening : ",e.From_Date]}),(0,k.jsxs)(x.A,{color:"GrayText",children:["Deadline : ",e.To_Date]})]}),"N/A"!==e.File&&(0,k.jsx)(i.A,{title:"Uploaded File",arrow:!0,children:(0,k.jsx)(h.A,{href:e.File,target:"_blank",children:(0,k.jsx)(o.A,{children:(0,k.jsx)(g.A,{color:"primary"})})})}),(0,k.jsx)(i.A,{title:"Withdraw Application",arrow:!0,children:(0,k.jsx)(o.A,{color:"error",onClick:()=>{R(!0),H(e)},children:(0,k.jsx)(v.A,{color:"error"})})}),(0,N.isTodayBetween)(e.From_Date.split(" ")[1],e.To_Date.split(" ")[1])&&(0,k.jsx)(d.A,{sx:{position:"absolute"},className:"top-0 right-0 h-2 w-2 bg-red-600 rounded-full"})]})})))}):(0,k.jsxs)(d.A,{className:"w-full h-full ml-[50%] mt-[20%] flex flex-col items-center justify-center",children:[(0,k.jsx)(w.A,{sx:{fontSize:"180px",color:"lightgrey"}}),(0,k.jsx)(x.A,{variant:"h4",color:"lightgrey",children:"No Posted Annoucements"})]})})]}),(0,k.jsxs)(n.A,{open:P,sx:{zIndex:"701"},children:[(0,k.jsx)(a.A,{children:"Are you sure you want to withdraw Posted Announcement ?"}),(0,k.jsx)(l.A,{children:"This will delete the post from everyone permanently."}),(0,k.jsxs)(u.A,{children:[(0,k.jsx)(p.A,{variant:"outlined",onClick:()=>{R(!1),H(null)},children:"Cancel"}),(0,k.jsx)(p.A,{variant:"contained",onClick:()=>{setTimeout((()=>{(async()=>{if(!V)return;L(!0);const e=await _(V);e&&e.message?M("error",e.message):e&&M("success","Post deleted successfully."),W()})()}),2e3),R(!1),H(null)},children:"Withdraw Post"})]})]})]})}},11175:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C,isTodayBetween:()=>b});var s=r(65043),n=r(83462),o=r(17392),a=r(26600),l=r(35316),i=r(77739),c=r(12110),d=r(94516),x=r(94496),h=r(88446),u=r(90573),p=r(67610),A=r(6512),m=r(79055),y=r(27473),f=r(3632),j=r(30466),g=r(23054),v=r(26500),w=r(70579);const b=(e,t)=>{const r=e=>{const[t,r,s]=e.split("-");return new Date(s,{Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11}[t],parseInt(r,10))},s=new Date;s.setHours(0,0,0,0);const n=r(e),o=r(t);return s>=n&&s<=o},C=e=>{let{isOpen:t,setIsOpen:r,course:C,batchName:N,setIsLoading:k,handleShowSnackbar:S,setMailNotif:D,isLoading:L}=e;const{fetchPostsData:M}=(0,s.useContext)(v.o),[z,_]=(0,s.useState)([]),[F,T]=(0,s.useState)(!1),P=async()=>{const e=await M(C);if(e&&e.message)S("error",e.message);else if(e){if(Array.isArray(e)&&0===e.length)return void S("error","No data found.");const t=Array.isArray(e)&&e.filter((e=>e.BatchName===N)),r=Array.isArray(e)&&e.filter((e=>b(e.From_Date.split(" ")[1],e.To_Date.split(" ")[1])));D(r.length),_(t)}};(0,s.useEffect)((()=>{P()}),[L,t]);return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(n.A,{open:t,sx:{zIndex:"700"},maxWidth:"lg",children:[(0,w.jsx)("img",{src:"/images/V-Cube-Logo.png",alt:"",width:"8%",className:"ml-[46%]"}),(0,w.jsx)(o.A,{sx:{position:"absolute"},className:"top-3 right-3",onClick:()=>{r(!1)},children:(0,w.jsx)(u.A,{sx:{fontSize:"35px"}})}),(0,w.jsx)(o.A,{disabled:F,sx:{position:"absolute"},className:"top-3 right-16",onClick:async()=>{await P(),T(!0),setTimeout((()=>{T(!1)}),1e4)},children:(0,w.jsx)(p.A,{sx:{fontSize:"35px"}})}),(0,w.jsxs)(a.A,{className:"flex items-center",variant:"h5",children:["Posted Job Annoucements ",(0,w.jsx)(A.A,{sx:{marginLeft:"10px"}})]}),(0,w.jsx)(l.A,{className:"w-[75rem] max-h-[40rem] h-[40rem] grid grid-cols-2 gap-x-5 gap-y-5 overflow-y-auto place-content-start",children:Array.isArray(z)&&z.length>0?(0,w.jsx)(w.Fragment,{children:Array.isArray(z)&&z.map((e=>(0,w.jsx)(i.A,{title:e.Description,arrow:!0,children:(0,w.jsxs)(c.A,{className:"relative w-full h-36 flex items-center justify-start mt-1",sx:{boxShadow:"0 0 5px rgba(0,0,0,0.5)"},children:[(0,w.jsx)(A.A,{sx:{color:`${g.vG[Math.floor(20*Math.random())]}`,width:"10%",fontSize:"35px"}}),(0,w.jsxs)(d.A,{className:"w-[80%] h-[80%] flex flex-col items-start justify-between ml-3",children:[(0,w.jsx)(x.A,{sx:{fontWeight:"bold"},children:e.Company_Name.split("~")[0]}),(0,w.jsxs)(x.A,{className:"flex items-center",children:[(0,w.jsxs)(h.A,{href:e.Post_Link,target:"_blank",sx:{textDecoration:"none",cursor:"pointer",":hover":{textDecoration:"underline"}},children:[(0,w.jsx)(m.A,{})," Application Link"]}),(0,w.jsx)(y.A,{sx:{fontSize:"20px",color:"grey",margin:"0 5px 0 15px"}}),e.Company_Name.split("~")[1]]}),(0,w.jsxs)(x.A,{color:"GrayText",children:["Opening : ",e.From_Date]}),(0,w.jsxs)(x.A,{color:"GrayText",children:["Deadline : ",e.To_Date]})]}),"N/A"!==e.File&&(0,w.jsx)(i.A,{title:"Uploaded File",arrow:!0,children:(0,w.jsx)(h.A,{href:e.File,target:"_blank",children:(0,w.jsx)(o.A,{children:(0,w.jsx)(f.A,{color:"primary"})})})}),b(e.From_Date.split(" ")[1],e.To_Date.split(" ")[1])&&(0,w.jsx)(d.A,{sx:{position:"absolute"},className:"top-0 right-0 h-2 w-2 bg-red-600 rounded-full"})]})})))}):(0,w.jsxs)(d.A,{className:"w-full h-full ml-[50%] mt-[20%] flex flex-col items-center justify-center",children:[(0,w.jsx)(j.A,{sx:{fontSize:"180px",color:"lightgrey"}}),(0,w.jsx)(x.A,{variant:"h4",color:"lightgrey",children:"No Posted Annoucements"})]})})]})})}},67847:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(66734),n=r(70579);const o=(0,s.A)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm3.17-6.41a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 12.59l1.41-1.41c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 14l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 15.41l-1.41 1.41c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41L10.59 14zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"}),"DeleteForeverRounded")},30466:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(66734),n=r(70579);const o=(0,s.A)((0,n.jsx)("path",{d:"M14 9h2.87c1.46 0 2.8.98 3.08 2.42.31 1.64-.74 3.11-2.22 3.48l1.53 1.53c1.77-.91 2.95-2.82 2.7-5.01C21.68 8.86 19.37 7 16.79 7H14c-.55 0-1 .45-1 1s.45 1 1 1M3.51 3.51a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.64 2.64c-1.77.91-2.95 2.82-2.7 5.01C2.32 15.14 4.63 17 7.21 17H10c.55 0 1-.45 1-1s-.45-1-1-1H7.13c-1.46 0-2.8-.98-3.08-2.42-.31-1.64.75-3.11 2.22-3.48l2.12 2.12c-.23.19-.39.46-.39.78 0 .55.45 1 1 1h1.17l8.9 8.9c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zM14 11l1.71 1.71c.18-.18.29-.43.29-.71 0-.55-.45-1-1-1z"}),"LinkOffRounded")},79055:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(66734),n=r(70579);const o=(0,s.A)((0,n.jsx)("path",{d:"M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5m-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1m2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1"}),"LinkRounded")},27473:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(66734),n=r(70579);const o=(0,s.A)((0,n.jsx)("path",{d:"M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2m0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"}),"LocationOnRounded")},67610:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(66734),n=r(70579);const o=(0,s.A)((0,n.jsx)("path",{d:"M12 5V2.21c0-.45-.54-.67-.85-.35l-3.8 3.79c-.2.2-.2.51 0 .71l3.79 3.79c.32.31.86.09.86-.36V7c3.73 0 6.68 3.42 5.86 7.29-.47 2.27-2.31 4.1-4.57 4.57-3.57.75-6.75-1.7-7.23-5.01-.07-.48-.49-.85-.98-.85-.6 0-1.08.53-1 1.13.62 4.39 4.8 7.64 9.53 6.72 3.12-.61 5.63-3.12 6.24-6.24C20.84 9.48 16.94 5 12 5"}),"ReplayRounded")},3632:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(66734),n=r(70579);const o=(0,s.A)((0,n.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")},6512:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(66734),n=r(70579);const o=(0,s.A)((0,n.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"}),"WorkRounded")},12110:(e,t,r)=>{r.d(t,{A:()=>p});var s=r(65043),n=r(58387),o=r(98610),a=r(34535),l=r(28249),i=r(61596),c=r(92532),d=r(72372);function x(e){return(0,d.Ay)("MuiCard",e)}(0,c.A)("MuiCard",["root"]);var h=r(70579);const u=(0,a.Ay)(i.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})({overflow:"hidden"}),p=s.forwardRef((function(e,t){const r=(0,l.b)({props:e,name:"MuiCard"}),{className:s,raised:a=!1,...i}=r,c={...r,raised:a},d=(e=>{const{classes:t}=e;return(0,o.A)({root:["root"]},x,t)})(c);return(0,h.jsx)(u,{className:(0,n.A)(d.root,s),elevation:a?8:void 0,ref:t,ownerState:c,...i})}))},88446:(e,t,r)=>{r.d(t,{A:()=>C});var s=r(65043),n=r(58387),o=r(55500),a=r(98610),l=r(18218),i=r(6803),c=r(34535),d=r(26240),x=r(66870),h=r(52445),u=r(28249),p=r(94496),A=r(92532),m=r(72372);function y(e){return(0,m.Ay)("MuiLink",e)}const f=(0,A.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var j=r(56224);const g=e=>{let{theme:t,ownerState:r}=e;const s=r.color,n=(0,j.Yn)(t,`palette.${s}`,!1)||r.color,a=(0,j.Yn)(t,`palette.${s}Channel`);return"vars"in t&&a?`rgba(${a} / 0.4)`:(0,o.X4)(n,.4)};var v=r(70579);const w={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},b=(0,c.Ay)(p.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`underline${(0,i.A)(r.underline)}`],"button"===r.component&&t.button]}})((0,x.A)((e=>{let{theme:t}=e;return{variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:e=>{let{underline:t,ownerState:r}=e;return"always"===t&&"inherit"!==r.color},style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(t.palette).filter((0,h.A)()).map((e=>{let[r]=e;return{props:{underline:"always",color:r},style:{"--Link-underlineColor":t.vars?`rgba(${t.vars.palette[r].mainChannel} / 0.4)`:(0,o.X4)(t.palette[r].main,.4)}}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / 0.4)`:(0,o.X4)(t.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":t.vars?`rgba(${t.vars.palette.text.secondaryChannel} / 0.4)`:(0,o.X4)(t.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(t.vars||t).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${f.focusVisible}`]:{outline:"auto"}}}]}}))),C=s.forwardRef((function(e,t){const r=(0,u.b)({props:e,name:"MuiLink"}),o=(0,d.A)(),{className:c,color:x="primary",component:h="a",onBlur:p,onFocus:A,TypographyClasses:m,underline:f="always",variant:j="inherit",sx:C,...N}=r,[k,S]=s.useState(!1),D={...r,color:x,component:h,focusVisible:k,underline:f,variant:j},L=(e=>{const{classes:t,component:r,focusVisible:s,underline:n}=e,o={root:["root",`underline${(0,i.A)(n)}`,"button"===r&&"button",s&&"focusVisible"]};return(0,a.A)(o,y,t)})(D);return(0,v.jsx)(b,{color:x,className:(0,n.A)(L.root,c),classes:m,component:h,onBlur:e=>{(0,l.A)(e.target)||S(!1),p&&p(e)},onFocus:e=>{(0,l.A)(e.target)&&S(!0),A&&A(e)},ref:t,ownerState:D,variant:j,...N,sx:[...void 0===w[x]?[{color:x}]:[],...Array.isArray(C)?C:[C]],style:{...N.style,..."always"===f&&"inherit"!==x&&!w[x]&&{"--Link-underlineColor":g({theme:o,ownerState:D})}}})}))}}]);
//# sourceMappingURL=4716.0506bfa4.chunk.js.map