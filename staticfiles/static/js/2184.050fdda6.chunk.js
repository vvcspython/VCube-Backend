"use strict";(self.webpackChunkvcube=self.webpackChunkvcube||[]).push([[2184],{58393:(e,s,t)=>{t.r(s),t.d(s,{default:()=>H});var a=t(65043),n=t(17392),c=t(83462),l=t(61596),r=t(26600),o=t(94516),d=t(90573),i=t(33438),h=t(33155),x=t(94496),m=t(11906),u=t(81637),p=t(35316),A=t(98533),j=t(29347),f=t(6208),g=t(35741),v=t(38349),S=t(78994),y=t(66734),w=t(70579);const N=(0,y.A)((0,w.jsx)("path",{d:"M10.3 7.7c-.39.39-.39 1.01 0 1.4l1.9 1.9H3c-.55 0-1 .45-1 1s.45 1 1 1h9.2l-1.9 1.9c-.39.39-.39 1.01 0 1.4s1.01.39 1.4 0l3.59-3.59c.39-.39.39-1.02 0-1.41L11.7 7.7a.984.984 0 0 0-1.4 0M20 19h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-7c-.55 0-1 .45-1 1s.45 1 1 1h7z"}),"LoginRounded");var b=t(33464),M=t(88076),C=t(37786);const D=e=>{let{onDrop:s,fileData:t,fileName:l,fileError:i,setUploadManually:y,handleShowSnackbar:D,setIsLoading:z,loading:V,selectedCourse:L,selectedBatch:I,isUser:k,handleClose:H,refreshData:P}=e;const{fetchStudentsData:E,postBulkStudentData:B,deleteBulkStudentData:W}=(0,a.useContext)(M.e),{fetchBatchData:R}=(0,a.useContext)(C.w),[O,U]=(0,a.useState)(!1),[F,T]=(0,a.useState)(!1),[_,J]=(0,a.useState)(null),[$,G]=(0,a.useState)(!1),[q,K]=(0,a.useState)([]),[Q,X]=(0,a.useState)(!1),[Y,Z]=(0,a.useState)([]);(0,a.useEffect)((()=>{U(i)}),[i]),(0,a.useEffect)((()=>{s&&O&&U(!1)}),[l,s,O]);const{getRootProps:ee,getInputProps:se,isDragActive:te}=(0,h.VB)({onDrop:s,multiple:!1}),ae=async()=>{const e=await R(L);e&&e.message?(D("error",e.message),z(!1)):e&&e.length>0?ne(e):(D("error","Something went wrong. Please try again later."),z(!1))},ne=async e=>{const s=await t&&t.every((s=>e&&e.some((e=>s.BatchName===e.BatchName))));s?s&&(z(!0),ce(t)):(D("error","Batch not found. Please add a batch before adding the student."),z(!1))},ce=async e=>{const s=await E(L);if(s&&s.message)D("error",s.message);else if(s){const t=[],a=[];await e&&(async()=>{for(const n of e){const e=s&&s.some((e=>parseInt(JSON.parse(e.Personal_Info).Phone)===n.Phone||JSON.parse(e.Personal_Info).Email===n.Email));if(e&&a.push(n),!e){const e={Name:n.Name,Email:n.Email,Phone:n.Phone,Course:L,BatchName:I,Joining_Date:n.JoiningDate,Personal_Info:JSON.stringify({Joining_Date:n.JoiningDate,Image:"Male"===n.Gender?"/images/Empty-Men-Icon.png":"/images/Empty-Women-Icon.png",Course:L,Name:n.Name,BatchName:I,Email:n.Email,Phone:n.Phone,Gender:n.Gender})};t.push(e)}z(!0)}t&&t.length>0?(t.length!==e.length&&D("warning","Some student data already exists."),a&&a.length>0?(K(a),X(!0),Z(t)):le(t)):(D("error","Student data not found or already exists."),z(!1))})()}},le=async e=>{const s=[];for(const t of e){s.some((e=>JSON.parse(e.Personal_Info).Phone===JSON.parse(t.Personal_Info).Phone||JSON.parse(e.Personal_Info).Email===JSON.parse(t.Personal_Info).Email))||s.push(t),z(!0)}e.length!==s.length&&D("warning","Duplicate Student Data Found in Uploaded File."),re(s),K([]),Z([])},re=async e=>{const s=await B(e);z(!1),s&&s.message?D("error",s.message):!0===s&&(D("success","Student Data Imported Successfully."),H(),P())};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(o.A,{className:"w-full h-full flex flex-col items-center justify-center",children:[(0,w.jsx)(x.A,{variant:"h5",sx:{marginBottom:"50px"},children:"Import data from an Excel file."}),(0,w.jsxs)(o.A,{...ee(),className:"w-1/3 h-60",sx:{border:O?"2px dashed red":"2px dashed #ccc",borderRadius:"8px",padding:"20px",textAlign:"center",cursor:"pointer",backgroundColor:te?"#f0f0f0":O?"rgb(254, 242, 242)":"rgb(247 248 249)"},children:[(0,w.jsx)("input",{...se()}),(0,w.jsx)(f.A,{sx:{fontSize:"100px",color:"lightgrey"}}),te?(0,w.jsx)(x.A,{variant:"body1",children:"Drop the file here ..."}):(0,w.jsxs)(x.A,{variant:"body1",children:["Drag and drop, or click to select a ",(0,w.jsx)("strong",{children:"xls / xlsx"})," file."]}),(0,w.jsxs)(o.A,{sx:{m:1,position:"relative"},children:[(0,w.jsx)(m.A,{variant:"contained",component:"span",disabled:V,startIcon:l&&!O?(0,w.jsx)(g.A,{}):(0,w.jsx)(v.A,{}),color:O?"error":l&&!O?"success":"primary",children:l&&!O?"File Selected":"Select File"}),V&&(0,w.jsx)(u.A,{size:24,sx:{color:"primary",position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}})]}),l&&!i?(0,w.jsxs)(x.A,{sx:{marginTop:"10px"},children:[(0,w.jsx)("strong",{children:"Selected file: "})," ",l]}):O?(0,w.jsx)(x.A,{sx:{color:"red",marginTop:"10px"},children:"Upload a Valid File."}):null]}),(0,w.jsxs)(o.A,{className:"flex w-1/3 h-10 items-center justify-around mt-10 mb-10",children:["Super Admin"!==k&&(0,w.jsx)(m.A,{variant:"outlined",endIcon:(0,w.jsx)(S.A,{}),onClick:()=>y(!0),children:"Upload Manually"}),(0,w.jsx)(m.A,{variant:"contained",startIcon:(0,w.jsx)(N,{sx:{transform:"rotate(90deg)"}}),onClick:()=>{s&&!l?D("error","Upload a Valid File"):(z(!0),ae())},sx:{width:"Super Admin"===k||"Admin"===k?"100%":"50%",height:"Super Admin"===k||"Admin"===k?"100%":"90%"},children:"Import Data"})]}),("Super Admin"===k||"Admin"===k)&&(0,w.jsxs)(o.A,{className:"w-1/2 h-12 mt-10 flex items-center justify-evenly",children:[(0,w.jsx)(m.A,{variant:"contained",color:"error",sx:{width:"40%"},onClick:()=>G(!0),children:"Delete Student's Data"}),(0,w.jsx)(m.A,{variant:"outlined",endIcon:(0,w.jsx)(S.A,{}),sx:{width:"40%"},onClick:()=>y(!0),children:"Upload Manually"})]})]}),(0,w.jsxs)(c.A,{open:("Super Admin"===k||"Admin"===k)&&$,onClose:()=>{G(!1),T(!1),J(null)},maxWidth:"lg",sx:{zIndex:"910"},children:[(0,w.jsx)("img",{src:"/images/V-Cube-Logo.png",width:"14%",className:"ml-[43%]",alt:""}),(0,w.jsx)(n.A,{sx:{position:"absolute"},className:"top-1 right-1",onClick:()=>{G(!1),T(!1),J(null)},children:(0,w.jsx)(d.A,{fontSize:"large"})}),(0,w.jsxs)(r.A,{children:["Are you sure you want to delete ",I," Student's Data ?"]}),(0,w.jsx)(p.A,{children:(0,w.jsxs)(A.A,{children:[(0,w.jsx)(x.A,{color:"error",children:"Once this action is taken, it cannot be undone, and all Student records will be permanently deleted."}),(0,w.jsx)("br",{}),"The following Student's data will be deleted :",(0,w.jsx)("br",{}),"\u2022 Student Attendance Data",(0,w.jsx)("br",{}),"\u2022 Student Messages Data",(0,w.jsx)("br",{}),"\u2022 Student Performance Data",(0,w.jsx)("br",{}),"\u2022 Student Class Recording WatchTime Data",(0,w.jsx)("br",{})]})}),(0,w.jsx)(j.A,{children:F?(0,w.jsxs)(o.A,{className:"w-full h-36 flex flex-col items-center justify-evenly",children:[(0,w.jsxs)(x.A,{children:["To confirm delete, type ",(0,w.jsxs)("strong",{children:['"Delete ',I," Student's Data\""]})," in the box below"]}),(0,w.jsx)("input",{type:"text",value:_,onChange:e=>J(e.target.value),style:{fontSize:"20px",padding:"0 10px",margin:"15px 0"},className:"border-[1px] border-red-600 rounded-md w-[95%] h-10 outline-red-600"}),(0,w.jsx)(m.A,{variant:"contained",color:"error",sx:{width:"95%"},startIcon:_&&_===`Delete ${I} Student's Data`&&(0,w.jsx)(b.A,{}),onClick:()=>{G(!1),T(!1),("Super Admin"===k||"Admin"===k)&&(async()=>{if("Super Admin"!==k)return;const e={Course:L,BatchName:I};z(!0);const s=await W(e);z(!1),s&&s.message?D("error",s.message):!0===s&&(D("success",`${I} Student Data Deleted Successfully.`),H())})()},disabled:!_||_&&_!==`Delete ${I} Student's Data`,children:(0,w.jsxs)(x.A,{sx:{color:!_||_&&_!==`Delete ${I} Student's Data`?"#e4959c":""},children:["Delete ",I," Student's Data"]})})]}):(0,w.jsx)(o.A,{className:"w-full h-14 flex items-center justify-center",children:(0,w.jsx)(m.A,{variant:"outlined",color:"warning",onClick:()=>T(!0),children:"I confirm that I have read and understand the effects."})})})]}),(0,w.jsxs)(c.A,{open:Q,sx:{zIndex:"910"},maxWidth:"lg",children:[(0,w.jsx)("img",{src:"/images/V-Cube-Logo.png",width:"12%",className:"ml-[44%]"}),(0,w.jsx)(r.A,{children:"The following Student Data already exists."}),(0,w.jsxs)(p.A,{className:"w-[50rem] h-[40rem]",children:[(0,w.jsx)(x.A,{color:"error",variant:"h6",className:"w-full text-center",children:"Note: This data will not be Imported."}),(0,w.jsxs)(o.A,{className:"w-full h-[10%] flex items-center justify-around",children:[(0,w.jsx)(x.A,{sx:{fontWeight:"bold"},className:"w-[5%] text-center",children:"S.No"}),(0,w.jsx)(x.A,{sx:{fontWeight:"bold"},className:"w-[29%] text-center",children:"Name"}),(0,w.jsx)(x.A,{sx:{fontWeight:"bold"},className:"w-[37%] text-center",children:"Email"}),(0,w.jsx)(x.A,{sx:{fontWeight:"bold"},className:"w-[29%] text-center",children:"BatchName"})]}),(0,w.jsx)(o.A,{className:"flex flex-col items-center justify-start overflow-auto",sx:{scrollbarWidth:"thin"},children:Array.isArray(q)&&q.length>0&&q.map(((e,s)=>(0,w.jsxs)(o.A,{className:"w-full h-[10%] flex items-center justify-around mt-1 mb-1",children:[(0,w.jsx)(x.A,{className:"w-[5%] text-center",children:s+1}),(0,w.jsx)(x.A,{className:"w-[29%] text-center",children:e.Name}),(0,w.jsx)(x.A,{className:"w-[37%] text-center",children:e.Email}),(0,w.jsx)(x.A,{className:"w-[29%] text-center",children:e.BatchName})]},s)))})]}),(0,w.jsxs)(j.A,{children:[(0,w.jsx)(m.A,{variant:"outlined",onClick:()=>{X(!1),K([]),Z([])},children:"Cancel Import"}),(0,w.jsx)(m.A,{variant:"contained",onClick:()=>{le(Y),X(!1)},children:"Continue to Import Data"})]})]})]})};var z=t(48541),V=t(46987),L=t(5270),I=t(42100),k=t(11238);const H=e=>{let{open:s,setOpen:t,selectedCourse:h,selectedBatch:x,isUser:m,refreshData:u}=e;const{enqueueSnackbar:p}=(0,V.dh)(),[A,j]=(0,a.useState)(null),[f,g]=(0,a.useState)(null),[v,S]=(0,a.useState)(!1),[y,N]=(0,a.useState)(!1),[b,M]=(0,a.useState)(!1),[C,H]=(0,a.useState)(!1),[P,E]=(0,a.useState)(!1),[B,W]=(0,a.useState)(null),R=(0,a.useCallback)(((e,s)=>{p(s,{variant:e,anchorOrigin:{vertical:"top",horizontal:"right"},action:e=>(0,w.jsx)(n.A,{onClick:()=>(0,V.mk)(e),children:(0,w.jsx)(d.A,{color:"inherit"})})})}),[p,V.mk]);(0,a.useEffect)((()=>{C&&setTimeout((()=>{H(!1)}),3e3)}),[C]);const O=()=>{t(!1),M(!1),W(null),g(null),j(null),S(!1)};return(0,w.jsxs)(c.A,{fullScreen:!0,open:s,sx:{zIndex:"900"},children:[(0,w.jsxs)(l.A,{className:"relative w-full h-24 flex items-center justify-center",children:[(0,w.jsx)("img",{className:"absolute left-3",src:"/images/V-Cube-Logo.png",width:"120px",alt:""}),(0,w.jsx)(r.A,{sx:{fontSize:"150%"},children:"Learner Intake and Registration Form"}),(0,w.jsx)(n.A,{sx:{position:"absolute",right:"1%",top:"20%"},onClick:()=>{b?(E(!0),W("Close")):O()},children:(0,w.jsx)(i.A,{sx:{fontSize:"35px",color:"black"}})})]}),(0,w.jsx)(o.A,{className:"h-full flex flex-col items-center justify-center",children:b?(0,w.jsx)(z.A,{setUploadManually:M,handleShowSnackbar:R,setIsLoading:H,setOpenDialog:E,setIsOpen:t,setDialogMsg:W,selectedCourse:h,refreshData:u}):(0,w.jsx)(D,{setUploadManually:M,onDrop:e=>{N(!0),setTimeout((()=>{const s=e[0],t=s.name.split(".").pop().toLowerCase();if("xls"===t||"xlsx"===t){g(s);const e=new FileReader;e.onload=e=>{try{const s=new Uint8Array(e.target.result),t=k.LF(s,{type:"array"}),a=t.SheetNames[0],n=t.Sheets[a],c=k.Wp.sheet_to_json(n);j(c)}catch(s){S(!0)}finally{N(!1),S(!1)}},e.readAsArrayBuffer(s)}else N(!1),S(!0)}),2e3)},fileData:A,fileName:f&&f.name,fileError:v,handleShowSnackbar:R,setIsLoading:H,loading:y,selectedCourse:h,selectedBatch:x,isUser:m,handleClose:O,refreshData:u})}),(0,w.jsx)(I.default,{open:P,title:"Do you really want to close or return ?",content:"The changes you made not be saved.",btnValue:"Confirm",dialogMsg:B,setDialog:E,setIsLoading:H,handle_Close:O,setUploadManually:M}),C&&(0,w.jsx)(L.default,{})]})}},69131:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)([(0,n.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,n.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime")},23963:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M10 16V8c0-1.1.89-2 2-2h9V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-1h-9c-1.11 0-2-.9-2-2m3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"}),"AccountBalanceWalletRounded")},78994:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},73188:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12m3 6H6v-.43c0-.6.36-1.15.92-1.39.64-.28 1.34-.43 2.08-.43s1.44.15 2.08.43c.55.24.92.78.92 1.39zm1-9h-2V4h2zm4.25 7.5h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75m0-3h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75"}),"BadgeRounded")},33438:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},43374:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload")},33464:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever")},62405:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72"}),"EmailRounded")},58293:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},43032:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8zM7 7h5v2H7zm10 10H7v-2h10zm0-4H7v-2h10zm-2-4V5l4 4z"}),"Feed")},59300:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"m19.23 15.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"}),"LocalPhoneRounded")},79331:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M15 11V5.83c0-.53-.21-1.04-.59-1.41L12.7 2.71a.996.996 0 0 0-1.41 0l-1.7 1.7C9.21 4.79 9 5.3 9 5.83V7H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zm-8 8H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm6 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2zm6 12h-2v-2h2zm0-4h-2v-2h2z"}),"LocationCityRounded")},21850:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M19.71 9.71 22 12V6h-6l2.29 2.29-4.17 4.17c-.39.39-1.02.39-1.41 0l-1.17-1.17c-1.17-1.17-3.07-1.17-4.24 0L2 16.59 3.41 18l5.29-5.29c.39-.39 1.02-.39 1.41 0l1.17 1.17c1.17 1.17 3.07 1.17 4.24 0z"}),"Moving")},88206:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)([(0,n.jsx)("path",{d:"M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41"},"0"),(0,n.jsx)("path",{d:"M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2"},"1")],"NightsStay")},76038:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5"}),"PeopleRounded")},55678:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2m0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15"}),"PersonPinCircle")},5824:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)([(0,n.jsx)("path",{d:"M13 8.57c-.79 0-1.43.64-1.43 1.43s.64 1.43 1.43 1.43 1.43-.64 1.43-1.43-.64-1.43-1.43-1.43"},"0"),(0,n.jsx)("path",{d:"M13.21 3c-3.84-.11-7 2.87-7.19 6.64L4.1 12.2c-.25.33-.01.8.4.8H6v3c0 1.1.9 2 2 2h1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3.68c2.44-1.16 4.1-3.68 4-6.58-.14-3.62-3.18-6.63-6.79-6.74M16 10c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39c-.05-.08-.03-.19.05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38c.05.09.03.2-.05.26l-.85.66c.03.12.04.25.04.39"},"1")],"PsychologyRounded")},15136:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"}),"School")},16481:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M5.5 21v-6.5H5c-.55 0-1-.45-1-1V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v4.5c0 .55-.45 1-1 1h-.5V21c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1M18 21v-5h1.61c.68 0 1.16-.67.95-1.32l-2.1-6.31C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37l-2.1 6.31c-.22.65.26 1.32.95 1.32H15v5c0 .55.45 1 1 1h1c.55 0 1-.45 1-1M7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2m9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2"}),"WcRounded")},39509:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"}),"Work")},62829:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)([(0,n.jsx)("path",{d:"M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7m-8-7h4v2h-4z"},"0"),(0,n.jsx)("path",{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85z"},"1")],"WorkHistory")},63288:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)([(0,n.jsx)("path",{d:"M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7m-8-7h4v2h-4z"},"0"),(0,n.jsx)("path",{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85z"},"1")],"WorkHistoryRounded")},6365:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(66734),n=t(70579);const c=(0,a.A)((0,n.jsx)("path",{d:"M14 6V4h-4v2zM4 8v11h16V8zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z"}),"WorkOutlineOutlined")}}]);
//# sourceMappingURL=2184.050fdda6.chunk.js.map