"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8455],{58455:function(e,s,a){a.r(s);var n=a(29439),t=a(1413),o=a(72791),c=a(56028),l=a(61889),i=a(36151),r=a(11135),d=a(25787),u=a(23814),m=a(60364),p=a(81207),f=a(42649),Z=a(90673),h=a(62410),x=a(80184),g=(0,m.$j)((function(e){return{session:e.console.session}}),{setErrorSnackMessage:f.Ih});s.default=(0,d.Z)((function(e){return(0,r.Z)((0,t.Z)((0,t.Z)({},u.ID),u.bK))}))(g((function(e){var s=e.modalOpen,a=e.onClose,t=e.classes,r=e.bucket,d=e.toEdit,u=e.initial,m=(0,o.useState)(u),g=(0,n.Z)(m,2),k=g[0],j=g[1];return(0,x.jsx)(o.Fragment,{children:(0,x.jsx)(c.Z,{modalOpen:s,title:"Edit Access Rule for ".concat("".concat(r,"/").concat(d||"")),onClose:a,titleIcon:(0,x.jsx)(h.sR0,{}),children:(0,x.jsxs)(l.ZP,{container:!0,children:[(0,x.jsx)(l.ZP,{item:!0,xs:12,className:t.spacerTop,children:(0,x.jsx)(Z.Z,{id:"access",name:"Access",onChange:function(e){j(e.target.value)},label:"Access",value:k,options:[{label:"readonly",value:"readonly"},{label:"writeonly",value:"writeonly"},{label:"readwrite",value:"readwrite"}],disabled:!1})}),(0,x.jsxs)(l.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,x.jsx)(i.Z,{type:"button",color:"primary",variant:"outlined",onClick:function(){j(u)},children:"Clear"}),(0,x.jsx)(i.Z,{type:"submit",variant:"contained",color:"primary",onClick:function(){p.Z.invoke("PUT","/api/v1/bucket/".concat(r,"/access-rules"),{prefix:d,access:k}).then((function(e){a()})).catch((function(e){(0,f.Ih)(e),a()}))},children:"Save"})]})]})})})})))},56028:function(e,s,a){var n=a(29439),t=a(1413),o=a(72791),c=a(60364),l=a(13400),i=a(55646),r=a(5574),d=a(65661),u=a(39157),m=a(11135),p=a(25787),f=a(23814),Z=a(42649),h=a(29823),x=a(28057),g=a(80184),k=(0,c.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:Z.MK});s.Z=(0,p.Z)((function(e){return(0,m.Z)((0,t.Z)((0,t.Z)({},f.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},f.sN))}))(k((function(e){var s=e.onClose,a=e.modalOpen,c=e.title,m=e.children,p=e.classes,f=e.wideLimit,Z=void 0===f||f,k=e.modalSnackMessage,j=e.noContentPadding,v=e.setModalSnackMessage,C=e.titleIcon,b=void 0===C?null:C,M=(0,o.useState)(!1),y=(0,n.Z)(M,2),S=y[0],N=y[1];(0,o.useEffect)((function(){v("")}),[v]),(0,o.useEffect)((function(){if(k){if(""===k.message)return void N(!1);"error"!==k.type&&N(!0)}}),[k]);var w=Z?{classes:{paper:p.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},B="";return k&&(B=k.detailedErrorMsg,(""===k.detailedErrorMsg||k.detailedErrorMsg.length<5)&&(B=k.message)),(0,g.jsxs)(r.Z,(0,t.Z)((0,t.Z)({open:a,classes:p},w),{},{scroll:"paper",onClose:function(e,a){"backdropClick"!==a&&s()},className:p.root,children:[(0,g.jsxs)(d.Z,{className:p.title,children:[(0,g.jsxs)("div",{className:p.titleText,children:[b," ",c]}),(0,g.jsx)("div",{className:p.closeContainer,children:(0,g.jsx)(l.Z,{"aria-label":"close",id:"close",className:p.closeButton,onClick:s,disableRipple:!0,size:"small",children:(0,g.jsx)(h.Z,{})})})]}),(0,g.jsx)(x.Z,{isModal:!0}),(0,g.jsx)(i.Z,{open:S,className:p.snackBarModal,onClose:function(){N(!1),v("")},message:B,ContentProps:{className:"".concat(p.snackBar," ").concat(k&&"error"===k.type?p.errorSnackBar:"")},autoHideDuration:k&&"error"===k.type?1e4:5e3}),(0,g.jsx)(u.Z,{className:j?"":p.content,children:m})]}))})))}}]);
//# sourceMappingURL=8455.8585e074.chunk.js.map