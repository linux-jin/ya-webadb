(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{5657:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tcpip",function(){return n(8044)}])},8044:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return C}});var s=n(9957),r=n(7472),t=n(3368),a=n(9405),o=n(4145),c=n(3766),l=n.n(c),d=n(3470),u=n(6720),p=n(7449),f=n(1751),m=n(9652),g=(0,u.L)((function(e){if(null==e.children)return null;e.block,e.className;var i=e.as,n=void 0===i?"span":i,s=(e.variant,e.nowrap,(0,p._T)(e,["block","className","as","variant","nowrap"])),r=(0,f.FJ)(e,{root:n});return(0,f.Yb)(r.root,(0,p.pi)({},(0,m.pq)(s,m.iY)))}),{displayName:"Text",styles:function(e,i){var n=e.as,s=e.className,r=e.block,t=e.nowrap,a=e.variant,o=i.fonts,c=i.semanticColors,l=o[a||"medium"];return{root:[l,{color:l.color||c.bodyText,display:r?"td"===n?"table-cell":"block":"inline",mozOsxFontSmoothing:l.MozOsxFontSmoothing,webkitFontSmoothing:l.WebkitFontSmoothing},t&&{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},s]}}}),v=n(8833),b=n(7294),x=n(1835),h=n(1906),w=n(8610),k=n(7076),B=n(3115),P=n(4204),L=n.n(P),S=n(1348),y=n(1361),E=n(4937),N=n(8298),M=function(){function e(){var i=this;(0,r.Z)(this,e),this.initial=!0,this.visible=!1,this.serviceListenAddresses=void 0,this.servicePortEnabled=!1,this.servicePort="",this.persistPortEnabled=!1,this.persistPort=void 0;var n=this;this.queryInfo=(0,N.FW)(function(){var e=(0,s.Z)(l().mark((function e(i){var s,r,t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.q.device){e.next=3;break}return(0,k.z)((function(){n.serviceListenAddresses=void 0,n.servicePortEnabled=!1,n.servicePort="",n.persistPortEnabled=!1,n.persistPort=void 0})),e.abrupt("return");case 3:return e.next=5,E.q.device.getProp("service.adb.listen_addrs");case 5:return s=e.sent,e.next=8,E.q.device.getProp("service.adb.tcp.port");case 8:return r=e.sent,e.next=11,E.q.device.getProp("persist.adb.tcp.port");case 11:if(t=e.sent,!i.aborted){e.next=14;break}return e.abrupt("return");case 14:(0,k.z)((function(){n.serviceListenAddresses=""!==s?s.split(","):void 0,r?(n.servicePortEnabled=!s&&"0"!==r,n.servicePort=r):(n.servicePortEnabled=!1,n.servicePort="5555"),t?(n.persistPortEnabled=!s&&!r,n.persistPort=t):(n.persistPortEnabled=!1,n.persistPort=void 0)}));case 15:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}()),this.applyServicePort=(0,s.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.q.device){e.next=2;break}return e.abrupt("return");case 2:if(!W.servicePortEnabled){e.next=7;break}return e.next=5,E.q.device.tcpip.setPort(Number.parseInt(W.servicePort,10));case 5:e.next=9;break;case 7:return e.next=9,E.q.device.tcpip.disable();case 9:case"end":return e.stop()}}),e)}))),(0,k.ky)(this,{initial:!1,queryInfo:!1,applyServicePort:!1}),(0,k.EH)((function(){E.q.device?i.initial&&i.visible&&(i.initial=!1,i.queryInfo()):i.initial=!0}))}return(0,t.Z)(e,[{key:"commandBarItems",get:function(){return[{key:"refresh",disabled:!E.q.device,iconProps:{iconName:N.PJ.ArrowClockwise},text:"Refresh",onClick:this.queryInfo},{key:"apply",disabled:!E.q.device,iconProps:{iconName:N.PJ.Save},text:"Apply",onClick:this.applyServicePort}]}}]),e}(),W=new M,C=(0,B.Pi)((function(){var e;(0,S.useEffect)((function(){return(0,k.z)((function(){W.visible=!0})),function(){(0,k.z)((function(){W.visible=!1}))}}));var i=(0,S.useCallback)((function(e,i){(0,k.z)((function(){W.servicePortEnabled=!!i}))}),[]),n=(0,S.useCallback)((function(e,i){void 0!==i&&(0,k.z)((function(){return W.servicePort=i}))}),[]);return(0,d.jsxs)(v.K,(0,o.Z)((0,a.Z)({},N.LE),{children:[(0,d.jsx)(L(),{children:(0,d.jsx)("title",{children:"ADB over WiFi - Android Web Toolbox"})}),(0,d.jsx)(y.X3,{items:W.commandBarItems}),(0,d.jsx)(b.v,{children:(0,d.jsx)(x.c,{children:(0,d.jsxs)(g,{children:["For WebADB to wirelessly connect to your device,",(0,d.jsx)(y.dL,{href:"https://github.com/yume-chan/ya-webadb/discussions/245#discussioncomment-384030",spaceBefore:!0,spaceAfter:!0,children:"extra software"}),"is required."]})})}),(0,d.jsx)(b.v,{children:(0,d.jsx)(x.c,{children:(0,d.jsx)(g,{children:"Your device will disconnect after changing ADB over WiFi config."})})}),(0,d.jsxs)(b.v,{children:[(0,d.jsx)(h.Z,{inlineLabel:!0,label:"service.adb.listen_addrs",disabled:!0,checked:!!W.serviceListenAddresses,onText:"Enabled",offText:"Disabled"}),null===(e=W.serviceListenAddresses)||void 0===e?void 0:e.map((function(e){return(0,d.jsx)(w.n,{disabled:!0,value:e,styles:{root:{width:300}}},e)}))]}),(0,d.jsxs)(b.v,{children:[(0,d.jsx)(h.Z,{inlineLabel:!0,label:"service.adb.tcp.port",checked:W.servicePortEnabled,disabled:!E.q.device||!!W.serviceListenAddresses,onText:"Enabled",offText:"Disabled",onChange:i}),(0,d.jsx)(w.n,{disabled:!E.q.device||!!W.serviceListenAddresses,value:W.servicePort,styles:{root:{width:300}},onChange:n})]}),(0,d.jsxs)(b.v,{children:[(0,d.jsx)(h.Z,{inlineLabel:!0,label:"persist.adb.tcp.port",disabled:!0,checked:W.persistPortEnabled,onText:"Enabled",offText:"Disabled"}),W.persistPort&&(0,d.jsx)(w.n,{disabled:!0,value:W.persistPort,styles:{root:{width:300}}})]})]}))}))},1835:function(e,i,n){"use strict";n.d(i,{c:function(){return M}});var s,r=n(4985),t=n(7449),a=n(1348),o=n(5699),c=n(9652),l=n(1852),d=n(5900),u=n(5943),p=n(7199),f=n(5959),m=n(8811),g=n(3604),v=((s={})[f.f.info]="Info",s[f.f.warning]="Info",s[f.f.error]="ErrorBadge",s[f.f.blocked]="Blocked2",s[f.f.severeWarning]="Warning",s[f.f.success]="Completed",s),b=(0,o.y)(),x=function(e){switch(e){case f.f.blocked:case f.f.error:case f.f.severeWarning:return"assertive"}return"polite"},h=function(e){switch(e){case f.f.blocked:case f.f.error:case f.f.severeWarning:return"alert"}return"status"},w=a.forwardRef((function(e,i){var n=(0,m.k)(!1),s=n[0],r=n[1].toggle,o=(0,g.M)("MessageBar"),w=e.actions,k=e.className,B=e.children,P=e.overflowButtonAriaLabel,L=e.dismissIconProps,S=e.styles,y=e.theme,E=e.messageBarType,N=void 0===E?f.f.info:E,M=e.onDismiss,W=void 0===M?void 0:M,C=e.isMultiline,T=void 0===C||C,q=e.truncated,j=e.dismissButtonAriaLabel,I=e.messageBarIconProps,A=e.role,_=e.delayedRender,D=void 0===_||_,z=e.expandButtonProps,F=(0,c.pq)(e,c.iY,["className","role"]),J=b(S,{theme:y,messageBarType:N||f.f.info,onDismiss:void 0!==W,actions:void 0!==w,truncated:q,isMultiline:T,expandSingleLine:s,className:k}),Z={iconName:s?"DoubleChevronUp":"DoubleChevronDown"},H=w||W?{"aria-describedby":o,role:"region"}:{},O=w?a.createElement("div",{className:J.actions},w):null,R=W?a.createElement(u.h,{disabled:!1,className:J.dismissal,onClick:W,iconProps:L||{iconName:"Clear"},title:j,ariaLabel:j}):null;return a.createElement("div",(0,t.pi)({ref:i,className:J.root},H),a.createElement("div",{className:J.content},a.createElement("div",{className:J.iconContainer,"aria-hidden":!0},I?a.createElement(p.J,(0,t.pi)({},I,{className:(0,l.i)(J.icon,I.className)})):a.createElement(p.J,{iconName:v[N],className:J.icon})),a.createElement("div",{className:J.text,id:o,role:A||h(N),"aria-live":x(N)},a.createElement("span",(0,t.pi)({className:J.innerText},F),D?a.createElement(d.U,null,a.createElement("span",null,B)):a.createElement("span",null,B))),!T&&!O&&q&&a.createElement("div",{className:J.expandSingleLine},a.createElement(u.h,(0,t.pi)({disabled:!1,className:J.expand,onClick:r,iconProps:Z,ariaLabel:P,"aria-expanded":s},z))),!T&&O,!T&&R&&a.createElement("div",{className:J.dismissSingleLine},R),T&&R),T&&O)}));w.displayName="MessageBar";var k,B,P,L=n(8491),S={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},y=((k={})[f.f.error]="errorBackground",k[f.f.blocked]="errorBackground",k[f.f.success]="successBackground",k[f.f.warning]="warningBackground",k[f.f.severeWarning]="severeWarningBackground",k[f.f.info]="infoBackground",k),E=((B={})[f.f.error]="rgba(255, 0, 0, 0.3)",B[f.f.blocked]="rgba(255, 0, 0, 0.3)",B[f.f.success]="rgba(48, 241, 73, 0.3)",B[f.f.warning]="rgba(255, 254, 57, 0.3)",B[f.f.severeWarning]="rgba(255, 0, 0, 0.3)",B[f.f.info]="Window",B),N=((P={})[f.f.error]="errorIcon",P[f.f.blocked]="errorIcon",P[f.f.success]="successIcon",P[f.f.warning]="warningIcon",P[f.f.severeWarning]="severeWarningIcon",P[f.f.info]="infoIcon",P),M=(0,r.z)(w,(function(e){var i,n,s,r,a,o=e.theme,c=e.className,l=e.onDismiss,d=e.truncated,u=e.isMultiline,p=e.expandSingleLine,m=e.messageBarType,g=void 0===m?f.f.info:m,v=o.semanticColors,b=o.fonts,x=(0,L.sK)(0,L.mV),h=(0,L.Cn)(S,o),w={fontSize:L.ld.xSmall,height:10,lineHeight:"10px",color:v.messageText,selectors:(i={},i[L.qJ]=(0,t.pi)((0,t.pi)({},(0,L.xM)()),{color:"WindowText"}),i)},k=[(0,L.GL)(o,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":w,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[h.root,b.medium,g===f.f.error&&h.error,g===f.f.blocked&&h.blocked,g===f.f.severeWarning&&h.severeWarning,g===f.f.success&&h.success,g===f.f.warning&&h.warning,u?h.multiline:h.singleline,!u&&l&&h.dismissalSingleLine,!u&&d&&h.expandingSingleLine,{background:v[y[g]],color:v.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:(n={".ms-Link":{color:v.messageLink,selectors:{":hover":{color:v.messageLinkHovered}}}},n[L.qJ]=(0,t.pi)((0,t.pi)({},(0,L.xM)()),{background:E[g],border:"1px solid WindowText",color:"WindowText"}),n)},u&&{flexDirection:"column"},c],content:[h.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[h.iconContainer,{fontSize:L.ld.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:v[N[g]],selectors:(s={},s[L.qJ]=(0,t.pi)((0,t.pi)({},(0,L.xM)()),{color:"WindowText"}),s)},text:[h.text,(0,t.pi)((0,t.pi)({minWidth:0,display:"flex",flexGrow:1,margin:8},b.small),{selectors:(r={},r[L.qJ]=(0,t.pi)({},(0,L.xM)()),r)}),!l&&{marginRight:12}],innerText:[h.innerText,{lineHeight:16,selectors:{"& span a:last-child":{paddingLeft:4}}},d&&{overflow:"visible",whiteSpace:"pre-wrap"},!u&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!u&&!d&&{selectors:(a={},a[x]={overflow:"visible",whiteSpace:"pre-wrap"},a)},p&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:h.dismissSingleLine,expandSingleLine:h.expandSingleLine,dismissal:[h.dismissal,k],expand:[h.expand,k],actions:[u?h.actions:h.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},u&&{marginBottom:8},l&&!u&&{marginRight:0}]}}),void 0,{scope:"MessageBar"})},5959:function(e,i,n){"use strict";var s;n.d(i,{f:function(){return s}}),function(e){e[e.info=0]="info",e[e.error=1]="error",e[e.blocked=2]="blocked",e[e.severeWarning=3]="severeWarning",e[e.success=4]="success",e[e.warning=5]="warning"}(s||(s={}))}},function(e){e.O(0,[455,774,888,179],(function(){return i=5657,e(e.s=i);var i}));var i=e.O();_N_E=i}]);
//# sourceMappingURL=tcpip-8aa3ba44d83b9218.js.map