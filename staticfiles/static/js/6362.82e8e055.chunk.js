"use strict";(self.webpackChunkvcube=self.webpackChunkvcube||[]).push([[6362,743],{743:(e,s,t)=>{t.r(s),t.d(s,{default:()=>k});t(65043);var r=t(94516),o=t(35721),n=t(30681),a=t(38968),d=t(2050),i=t(48734),l=t(39336),A=t(94109),u=t(38050),c=t(68633),p=t(4646),h=t(80774),S=t(3322),x=t(42248),g=t(6821),m=t(55312),C=t(17003),j=t(10827),P=t(71339),f=t(22028),w=t(34053),B=t(2798),b=t(67892),D=t(65367),M=t(19637),y=t(5696),O=t(14169),U=t(70579);const k=e=>{let{user:s,userCourse:t,openDrawer:k,setOpenDrawer:R,selectedCourse:$,selectedBatch:v,setDialog:L,setDialogMsg:F,setStdFormOpen:I,setSettingsOpen:V,setOpenAssessment:E,setOpenBatchOption:T,setBatchOption:J,setOpenCourseOption:z,setCourseOption:K,handleShowSnackbar:W,setPostJob:_,setPostedJob:q,setSendMsgToStd:G,setShowSendMsg:H,setStudentsFeedback:N,setMsgToBatch:Q,setConfirmLogout:X,setUploadRecording:Y,setShowRecording:Z,User:ee,setDelete_Assessment:se,view:te}=e;const re={"Add Student":()=>{$&&v&&"All"!==v?I(!0):W("error",`Please Choose a ${"Super Admin"===s?"Preferred Course & ":""}Batch Before Registering the Student.`)},"Upload Assignment":()=>{$&&v&&"All"!==v?E(!0):W("error",`Please Choose a ${"Super Admin"===s?"Preferred Course & ":""}Batch before Posting an Assignment.`)},"Update / Delete Assignment":()=>{$&&v&&"All"!==v?se(!0):W("error",`Please Choose a ${"Super Admin"===s?"Preferred Course & ":""}Batch before Posting an Assignment.`)},"Add Batch":()=>{J("Add Batch"),T(!0)},"Delete Batch":()=>{J("Delete Batch"),T(!0)},"Add Course":()=>{z(!0),K("Add Course")},"Delete Course":()=>{z(!0),K("Delete Course")},"Change Course Tutors":()=>{z(!0),K("Change Tutors")},"Export Student Data":()=>{$&&v?(L(!0),F("Are you sure you want to Export Students Data?~Selected Batch Students Data will be Exported.~Export")):W("error",`Please Choose a ${"Super Admin"===s?"Preferred Course & ":""}Batch before Exporting the Data.`)},Settings:()=>V(!0),Logout:()=>X(!0),"Job Opportunity Announcement":()=>{$&&v&&"All"!==v?_(!0):W("error",`Please Choose a ${"Super Admin"===s||"Placements"===s.split(" ")[0]?"Preferred Course & ":""}Batch to View or Posting an Announcement.`)},"View Posted Opportunities":()=>{$&&v&&"All"!==v?q(!0):W("error",`Please Choose ${"Super Admin"===s||"Placements"===s.split(" ")[0]?"Preferred Course & ":""}Batch to View or Posting an Announcement.`)},"Send Message to Students":()=>{$&&v&&"All"!==v?G(!0):W("error",`Please Choose ${"Super Admin"===s||"Placements"===s.split(" ")[0]?"Preferred Course & ":""}Batch to Send Message to Students.`)},"Show Sent Messages":()=>{$&&v&&"All"!==v?H(!0):W("error",`Please Choose ${"Super Admin"===s||"Placements"===s.split(" ")[0]?"Preferred Course & ":""}Batch to Show Messages.`)},"Students Feedback":()=>{$&&v&&"All"!==v?N(!0):W("error",`Please Choose ${"Super Admin"===s||"Placements"===s.split(" ")[0]?"Preferred Course & ":""}Batch to Show Students Feedback.`)},"Send Message to Batch":()=>{$&&v?Q(!0):W("error","Please Choose a Preferred Course & Batch to Send Message to Batch.")},"Upload Class Recordings":()=>{$&&v?Y(!0):W("error",`Please Choose a ${"Super Admin"===s?"Preferred Course & ":""}Batch to Upload Class Recordings.`)},"Show Uploaded Recordings":()=>{$&&v?Z(!0):W("error",`Please Choose a ${"Super Admin"===s?"Preferred Course & ":""}Batch to Show Uploaded Recordings.`)}},oe=e=>{R(!1),"function"===typeof e&&e()},ne="Placements"===t||"Super Admin"===s&&"Placements Dashboard"===te?[(0,U.jsx)(u.A,{sx:{fontSize:"25px"}}),(0,U.jsx)(c.A,{}),(0,U.jsx)(p.A,{}),(0,U.jsx)(h.A,{}),(0,U.jsx)(S.A,{})]:"Super Admin"===s?[(0,U.jsx)(x.A,{}),(0,U.jsx)(g.A,{}),(0,U.jsx)(m.A,{}),(0,U.jsx)(C.A,{color:"primary"}),(0,U.jsx)(j.A,{color:"primary"}),(0,U.jsx)(P.A,{color:"primary"}),(0,U.jsx)(f.A,{}),(0,U.jsx)(w.A,{}),(0,U.jsx)(B.A,{}),(0,U.jsx)(b.A,{}),(0,U.jsx)(u.A,{sx:{fontSize:"25px"}}),(0,U.jsx)(c.A,{}),(0,U.jsx)(D.A,{color:"primary"}),(0,U.jsx)(h.A,{}),(0,U.jsx)(S.A,{}),(0,U.jsx)(p.A,{}),(0,U.jsx)(M.A,{})]:[(0,U.jsx)(x.A,{}),(0,U.jsx)(g.A,{}),(0,U.jsx)(m.A,{}),(0,U.jsx)(f.A,{}),(0,U.jsx)(w.A,{}),(0,U.jsx)(B.A,{}),(0,U.jsx)(b.A,{}),(0,U.jsx)(u.A,{sx:{fontSize:"25px"}}),(0,U.jsx)(c.A,{}),(0,U.jsx)(h.A,{}),(0,U.jsx)(S.A,{}),(0,U.jsx)(p.A,{}),(0,U.jsx)(M.A,{})],ae="Placements"===t||"Super Admin"===s&&"Placements Dashboard"===te?["Job Opportunity Announcement","View Posted Opportunities","Send Message to Students","Show Sent Messages","Students Feedback"]:"Super Admin"===s?["Add Student","Add Batch","Delete Batch","Add Course","Delete Course","Change Course Tutors","Upload Class Recordings","Show Uploaded Recordings","Upload Assignment","Update / Delete Assignment","Job Opportunity Announcement","View Posted Opportunities","Send Message to Batch","Send Message to Students","Show Sent Messages","Students Feedback","Export Student Data"]:["Add Student","Add Batch","Delete Batch","Upload Class Recordings","Show Uploaded Recordings","Upload Assignment","Update / Delete Assignment","Job Opportunity Announcement","View Posted Opportunities","Send Message to Students","Show Sent Messages","Students Feedback","Export Student Data"],de=(0,U.jsxs)(r.A,{sx:{width:320},role:"presentation",children:[(0,U.jsx)(o.A,{children:ae.map(((e,s)=>e&&(0,U.jsx)(n.Ay,{disablePadding:!0,children:(0,U.jsxs)(a.A,{onClick:()=>oe(re[e]),children:[(0,U.jsx)(d.A,{children:ne[s]}),(0,U.jsx)(i.A,{primary:e})]})},e)))}),(0,U.jsx)(l.A,{}),(0,U.jsx)(o.A,{children:["Settings","Logout"].map(((e,s)=>(0,U.jsx)(n.Ay,{disablePadding:!0,onClick:()=>oe(re[0===s?"Settings":"Logout"]),children:(0,U.jsxs)(a.A,{children:[(0,U.jsx)(d.A,{children:0===s?(0,U.jsx)(y.A,{}):(0,U.jsx)(O.A,{})}),(0,U.jsx)(i.A,{primary:e})]})},e)))})]});return(0,U.jsx)(A.Ay,{open:k,onClose:()=>{R(!1)},anchor:"right",children:de})}},5658:(e,s,t)=>{t.d(s,{A:()=>a,K:()=>n});var r=t(92532),o=t(72372);function n(e){return(0,o.Ay)("MuiDivider",e)}const a=(0,r.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},71424:(e,s,t)=>{t.d(s,{A:()=>a,f:()=>n});var r=t(92532),o=t(72372);function n(e){return(0,o.Ay)("MuiListItemIcon",e)}const a=(0,r.A)("MuiListItemIcon",["root","alignItemsFlexStart"])},28052:(e,s,t)=>{t.d(s,{A:()=>a,b:()=>n});var r=t(92532),o=t(72372);function n(e){return(0,o.Ay)("MuiListItemText",e)}const a=(0,r.A)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])}}]);
//# sourceMappingURL=6362.82e8e055.chunk.js.map