"use strict";(self.webpackChunkvcube=self.webpackChunkvcube||[]).push([[1175],{11175:(e,s,t)=>{t.r(s),t.d(s,{default:()=>v,isTodayBetween:()=>N});var r=t(65043),a=t(83462),c=t(17392),n=t(26600),o=t(35316),i=t(77739),l=t(12110),x=t(94516),h=t(94496),d=t(88446),A=t(90573),m=t(67610),p=t(6512),u=t(79055),f=t(27473),j=t(3632),g=t(30466),y=t(23054),b=t(26500),w=t(70579);const N=(e,s)=>{const t=e=>{const[s,t,r]=e.split("-");return new Date(r,{Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11}[s],parseInt(t,10))},r=new Date;r.setHours(0,0,0,0);const a=t(e),c=t(s);return r>=a&&r<=c},v=e=>{let{isOpen:s,setIsOpen:t,course:v,batchName:k,setIsLoading:D,handleShowSnackbar:M,setMailNotif:C,isLoading:S}=e;const{fetchPostsData:_}=(0,r.useContext)(b.o),[L,z]=(0,r.useState)([]),[F,H]=(0,r.useState)(!1),T=async()=>{const e=await _(v);if(e&&e.message)M("error",e.message);else if(e){if(Array.isArray(e)&&0===e.length)return void M("error","No data found.");const s=Array.isArray(e)&&e.filter((e=>e.BatchName===k)),t=Array.isArray(e)&&e.filter((e=>N(e.From_Date.split(" ")[1],e.To_Date.split(" ")[1])));C(t.length),z(s)}};(0,r.useEffect)((()=>{T()}),[S,s]);return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(a.A,{open:s,sx:{zIndex:"700"},maxWidth:"lg",children:[(0,w.jsx)("img",{src:"/images/V-Cube-Logo.png",alt:"",width:"8%",className:"ml-[46%]"}),(0,w.jsx)(c.A,{sx:{position:"absolute"},className:"top-3 right-3",onClick:()=>{t(!1)},children:(0,w.jsx)(A.A,{sx:{fontSize:"35px"}})}),(0,w.jsx)(c.A,{disabled:F,sx:{position:"absolute"},className:"top-3 right-16",onClick:async()=>{await T(),H(!0),setTimeout((()=>{H(!1)}),1e4)},children:(0,w.jsx)(m.A,{sx:{fontSize:"35px"}})}),(0,w.jsxs)(n.A,{className:"flex items-center",variant:"h5",children:["Posted Job Annoucements ",(0,w.jsx)(p.A,{sx:{marginLeft:"10px"}})]}),(0,w.jsx)(o.A,{className:"w-[75rem] max-h-[40rem] h-[40rem] grid grid-cols-2 gap-x-5 gap-y-5 overflow-y-auto place-content-start",children:Array.isArray(L)&&L.length>0?(0,w.jsx)(w.Fragment,{children:Array.isArray(L)&&L.map((e=>(0,w.jsx)(i.A,{title:e.Description,arrow:!0,children:(0,w.jsxs)(l.A,{className:"relative w-full h-36 flex items-center justify-start mt-1",sx:{boxShadow:"0 0 5px rgba(0,0,0,0.5)"},children:[(0,w.jsx)(p.A,{sx:{color:`${y.vG[Math.floor(20*Math.random())]}`,width:"10%",fontSize:"35px"}}),(0,w.jsxs)(x.A,{className:"w-[80%] h-[80%] flex flex-col items-start justify-between ml-3",children:[(0,w.jsx)(h.A,{sx:{fontWeight:"bold"},children:e.Company_Name.split("~")[0]}),(0,w.jsxs)(h.A,{className:"flex items-center",children:[(0,w.jsxs)(d.A,{href:e.Post_Link,target:"_blank",sx:{textDecoration:"none",cursor:"pointer",":hover":{textDecoration:"underline"}},children:[(0,w.jsx)(u.A,{})," Application Link"]}),(0,w.jsx)(f.A,{sx:{fontSize:"20px",color:"grey",margin:"0 5px 0 15px"}}),e.Company_Name.split("~")[1]]}),(0,w.jsxs)(h.A,{color:"GrayText",children:["Opening : ",e.From_Date]}),(0,w.jsxs)(h.A,{color:"GrayText",children:["Deadline : ",e.To_Date]})]}),"N/A"!==e.File&&(0,w.jsx)(i.A,{title:"Uploaded File",arrow:!0,children:(0,w.jsx)(d.A,{href:e.File,target:"_blank",children:(0,w.jsx)(c.A,{children:(0,w.jsx)(j.A,{color:"primary"})})})}),N(e.From_Date.split(" ")[1],e.To_Date.split(" ")[1])&&(0,w.jsx)(x.A,{sx:{position:"absolute"},className:"top-0 right-0 h-2 w-2 bg-red-600 rounded-full"})]})})))}):(0,w.jsxs)(x.A,{className:"w-full h-full ml-[50%] mt-[20%] flex flex-col items-center justify-center",children:[(0,w.jsx)(g.A,{sx:{fontSize:"180px",color:"lightgrey"}}),(0,w.jsx)(h.A,{variant:"h4",color:"lightgrey",children:"No Posted Annoucements"})]})})]})})}},30466:(e,s,t)=>{t.d(s,{A:()=>c});var r=t(66734),a=t(70579);const c=(0,r.A)((0,a.jsx)("path",{d:"M14 9h2.87c1.46 0 2.8.98 3.08 2.42.31 1.64-.74 3.11-2.22 3.48l1.53 1.53c1.77-.91 2.95-2.82 2.7-5.01C21.68 8.86 19.37 7 16.79 7H14c-.55 0-1 .45-1 1s.45 1 1 1M3.51 3.51a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.64 2.64c-1.77.91-2.95 2.82-2.7 5.01C2.32 15.14 4.63 17 7.21 17H10c.55 0 1-.45 1-1s-.45-1-1-1H7.13c-1.46 0-2.8-.98-3.08-2.42-.31-1.64.75-3.11 2.22-3.48l2.12 2.12c-.23.19-.39.46-.39.78 0 .55.45 1 1 1h1.17l8.9 8.9c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zM14 11l1.71 1.71c.18-.18.29-.43.29-.71 0-.55-.45-1-1-1z"}),"LinkOffRounded")},79055:(e,s,t)=>{t.d(s,{A:()=>c});var r=t(66734),a=t(70579);const c=(0,r.A)((0,a.jsx)("path",{d:"M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5m-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1m2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1"}),"LinkRounded")},27473:(e,s,t)=>{t.d(s,{A:()=>c});var r=t(66734),a=t(70579);const c=(0,r.A)((0,a.jsx)("path",{d:"M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2m0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"}),"LocationOnRounded")},67610:(e,s,t)=>{t.d(s,{A:()=>c});var r=t(66734),a=t(70579);const c=(0,r.A)((0,a.jsx)("path",{d:"M12 5V2.21c0-.45-.54-.67-.85-.35l-3.8 3.79c-.2.2-.2.51 0 .71l3.79 3.79c.32.31.86.09.86-.36V7c3.73 0 6.68 3.42 5.86 7.29-.47 2.27-2.31 4.1-4.57 4.57-3.57.75-6.75-1.7-7.23-5.01-.07-.48-.49-.85-.98-.85-.6 0-1.08.53-1 1.13.62 4.39 4.8 7.64 9.53 6.72 3.12-.61 5.63-3.12 6.24-6.24C20.84 9.48 16.94 5 12 5"}),"ReplayRounded")},3632:(e,s,t)=>{t.d(s,{A:()=>c});var r=t(66734),a=t(70579);const c=(0,r.A)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")},6512:(e,s,t)=>{t.d(s,{A:()=>c});var r=t(66734),a=t(70579);const c=(0,r.A)((0,a.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"}),"WorkRounded")}}]);
//# sourceMappingURL=1175.44aae9f1.chunk.js.map