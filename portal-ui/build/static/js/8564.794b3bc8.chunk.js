"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8564],{98564:function(n,t,o){o.r(t);var i=o(23430),a=o(50390),e=o(34424),r=o(23473),s=o(44149),c=o(21639),l=o(60656),d=o(86362),u=o(25594),g=o(66964),f=o(62559),v={setErrorSnackMessage:s.Ih},Z=(0,e.$j)(null,v);t.default=Z((function(n){var t=n.closeDeleteModalAndRefresh,o=n.deleteOpen,e=n.selectedBucket,s=n.ruleToDelete,v=n.remainingRules,Z=n.setErrorSnackMessage,p=n.deleteAllRules,m=void 0!==p&&p,h=(0,a.useState)(""),x=(0,i.Z)(h,2),b=x[0],I=x[1],j=(0,c.Z)((function(){return t(!0)}),(function(n){return Z(n)})),S=(0,i.Z)(j,2),P=S[0],L=S[1];if(!e)return null;return(0,f.jsx)(l.Z,{title:m?"Delete all Replication Rules":"Delete Replication Rule",confirmText:"Delete",isOpen:o,titleIcon:(0,f.jsx)(d.Nv,{}),isLoading:P,onConfirm:function(){var n="/api/v1/buckets/".concat(e,"/replication/").concat(s);(m||1===v)&&(n="/api/v1/buckets/".concat(e,"/delete-all-replication-rules")),L("DELETE",n)},onClose:function(){return t(!1)},confirmButtonProps:{disabled:m&&"Yes, I am sure"!==b},confirmationContent:(0,f.jsx)(r.Z,{children:m?(0,f.jsxs)(a.Fragment,{children:["Are you sure you want to remove all replication rules for bucket"," ",(0,f.jsx)("b",{children:e}),"?",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"To continue please type ",(0,f.jsx)("b",{children:"Yes, I am sure"})," in the box.",(0,f.jsx)(u.ZP,{item:!0,xs:12,children:(0,f.jsx)(g.Z,{id:"retype-tenant",name:"retype-tenant",onChange:function(n){I(n.target.value)},label:"",value:b})})]}):(0,f.jsxs)(a.Fragment,{children:["Are you sure you want to delete replication rule"," ",(0,f.jsx)("b",{children:s}),"?"]})})})}))},21639:function(n,t,o){var i=o(23430),a=o(50390),e=o(30324);t.Z=function(n,t){var o=(0,a.useState)(!1),r=(0,i.Z)(o,2),s=r[0],c=r[1];return[s,function(o,i,a){c(!0),e.Z.invoke(o,i,a).then((function(t){c(!1),n(t)})).catch((function(n){c(!1),t(n)}))}]}},60656:function(n,t,o){var i=o(18489),a=o(50390),e=o(84402),r=o(78426),s=o(93085),c=o(7887),l=o(66946),d=o(14476),u=o(95467),g=o(21278),f=o(86509),v=o(4285),Z=o(72462),p=o(62559);t.Z=(0,v.Z)((function(n){return(0,f.Z)((0,i.Z)({},Z.Qw))}))((function(n){var t=n.isOpen,o=void 0!==t&&t,f=n.onClose,v=n.onCancel,Z=n.onConfirm,m=n.classes,h=void 0===m?{}:m,x=n.title,b=void 0===x?"":x,I=n.isLoading,j=n.confirmationContent,S=n.cancelText,P=void 0===S?"Cancel":S,L=n.confirmText,y=void 0===L?"Confirm":L,C=n.confirmButtonProps,w=void 0===C?{}:C,R=n.cancelButtonProps,k=void 0===R?{}:R,M=n.titleIcon,N=void 0===M?null:M;return(0,p.jsxs)(e.Z,{open:o,onClose:function(n,t){"backdropClick"!==t&&f()},className:h.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[(0,p.jsxs)(r.Z,{className:h.title,children:[(0,p.jsxs)("div",{className:h.titleText,children:[N," ",b]}),(0,p.jsx)("div",{className:h.closeContainer,children:(0,p.jsx)(u.Z,{"aria-label":"close",className:h.closeButton,onClick:f,disableRipple:!0,size:"small",children:(0,p.jsx)(g.Z,{})})})]}),(0,p.jsx)(s.Z,{className:h.content,children:j}),(0,p.jsxs)(c.Z,{className:h.actions,children:[(0,p.jsx)(l.Z,(0,i.Z)((0,i.Z)({className:h.cancelButton,onClick:v||f,disabled:I,type:"button"},k),{},{variant:"outlined",color:"primary",id:"confirm-cancel",children:P})),(0,p.jsx)(d.Z,(0,i.Z)((0,i.Z)({className:h.confirmButton,type:"button",onClick:Z,loading:I,disabled:I,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:(0,p.jsx)(a.Fragment,{}),autoFocus:!0,id:"confirm-ok"},w),{},{children:y}))]})]})}))},14476:function(n,t,o){o.d(t,{Z:function(){return I}});var i=o(36222),a=o(46633),e=o(18207),r=o(50390),s=o(91442),c=o(4733),l=o(50076),d=o(8208),u=o(15573),g=o(66946),f=o(18201),v=o(10594);function Z(n){return(0,v.Z)("MuiLoadingButton",n)}var p=(0,o(43349).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),m=o(62559),h=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],x=(0,d.ZP)(g.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,t){return[t.root,t.startIconLoadingStart&&(0,i.Z)({},"& .".concat(p.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&(0,i.Z)({},"& .".concat(p.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(n){var t=n.ownerState,o=n.theme;return(0,e.Z)((0,i.Z)({},"& .".concat(p.startIconLoadingStart,", & .").concat(p.endIconLoadingEnd),{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&(0,i.Z)({transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short})},"&.".concat(p.loading),{color:"transparent"}),"start"===t.loadingPosition&&t.fullWidth&&(0,i.Z)({},"& .".concat(p.startIconLoadingStart,", & .").concat(p.endIconLoadingEnd),{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===t.loadingPosition&&t.fullWidth&&(0,i.Z)({},"& .".concat(p.startIconLoadingStart,", & .").concat(p.endIconLoadingEnd),{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}))})),b=(0,d.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,t){var o=n.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat((0,s.Z)(o.loadingPosition))]]}})((function(n){var t=n.theme,o=n.ownerState;return(0,e.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===o.loadingPosition&&("outlined"===o.variant||"contained"===o.variant)&&{left:14},"start"===o.loadingPosition&&"text"===o.variant&&{left:6},"center"===o.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===o.loadingPosition&&("outlined"===o.variant||"contained"===o.variant)&&{right:14},"end"===o.loadingPosition&&"text"===o.variant&&{right:6},"start"===o.loadingPosition&&o.fullWidth&&{position:"relative",left:-10},"end"===o.loadingPosition&&o.fullWidth&&{position:"relative",right:-10})})),I=r.forwardRef((function(n,t){var o=(0,u.Z)({props:n,name:"MuiLoadingButton"}),i=o.children,d=o.disabled,g=void 0!==d&&d,v=o.id,p=o.loading,I=void 0!==p&&p,j=o.loadingIndicator,S=o.loadingPosition,P=void 0===S?"center":S,L=o.variant,y=void 0===L?"text":L,C=(0,a.Z)(o,h),w=(0,c.Z)(v),R=null!=j?j:(0,m.jsx)(f.Z,{"aria-labelledby":w,color:"inherit",size:16}),k=(0,e.Z)({},o,{disabled:g,loading:I,loadingIndicator:R,loadingPosition:P,variant:y}),M=function(n){var t=n.loading,o=n.loadingPosition,i=n.classes,a={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,s.Z)(o))],endIcon:[t&&"endIconLoading".concat((0,s.Z)(o))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,s.Z)(o))]},r=(0,l.Z)(a,Z,i);return(0,e.Z)({},i,r)}(k);return(0,m.jsx)(x,(0,e.Z)({disabled:g||I,id:w,ref:t},C,{variant:y,classes:M,ownerState:k,children:"end"===k.loadingPosition?(0,m.jsxs)(r.Fragment,{children:[i,I&&(0,m.jsx)(b,{className:M.loadingIndicator,ownerState:k,children:R})]}):(0,m.jsxs)(r.Fragment,{children:[I&&(0,m.jsx)(b,{className:M.loadingIndicator,ownerState:k,children:R}),i]})}))}))},7887:function(n,t,o){o.d(t,{Z:function(){return Z}});var i=o(1048),a=o(32793),e=o(50390),r=o(44977),s=o(50076),c=o(8208),l=o(15573),d=o(10594);function u(n){return(0,d.Z)("MuiDialogActions",n)}(0,o(43349).Z)("MuiDialogActions",["root","spacing"]);var g=o(62559),f=["className","disableSpacing"],v=(0,c.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(n,t){var o=n.ownerState;return[t.root,!o.disableSpacing&&t.spacing]}})((function(n){var t=n.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),Z=e.forwardRef((function(n,t){var o=(0,l.Z)({props:n,name:"MuiDialogActions"}),e=o.className,c=o.disableSpacing,d=void 0!==c&&c,Z=(0,i.Z)(o,f),p=(0,a.Z)({},o,{disableSpacing:d}),m=function(n){var t=n.classes,o={root:["root",!n.disableSpacing&&"spacing"]};return(0,s.Z)(o,u,t)}(p);return(0,g.jsx)(v,(0,a.Z)({className:(0,r.Z)(m.root,e),ownerState:p,ref:t},Z))}))},23473:function(n,t,o){o.d(t,{Z:function(){return Z}});var i=o(1048),a=o(32793),e=o(50390),r=o(50076),s=o(8208),c=o(15573),l=o(35477),d=o(10594);function u(n){return(0,d.Z)("MuiDialogContentText",n)}(0,o(43349).Z)("MuiDialogContentText",["root"]);var g=o(62559),f=["children"],v=(0,s.ZP)(l.Z,{shouldForwardProp:function(n){return(0,s.FO)(n)||"classes"===n},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(n,t){return t.root}})({}),Z=e.forwardRef((function(n,t){var o=(0,c.Z)({props:n,name:"MuiDialogContentText"}),e=(0,i.Z)(o,f),s=function(n){var t=n.classes,o=(0,r.Z)({root:["root"]},u,t);return(0,a.Z)({},t,o)}(e);return(0,g.jsx)(v,(0,a.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:e},o,{classes:s}))}))}}]);
//# sourceMappingURL=8564.794b3bc8.chunk.js.map