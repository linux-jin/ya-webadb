(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{5621:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/packet-log",function(){return t(601)}])},601:function(e,n,t){"use strict";t.r(n);var r,o=t(7472),a=t(3368),l=t(4036),c=t(9405),i=t(4145),s=t(1422),d=t(3470),m=t(8833),g=t(7294),u=t(3198),w=t(4590),h=t(6420),f=t(5384),x=t(7076),p=t(3115),v=t(4204),N=t.n(v),Z=t(1361),C=t(4937),k=t(8298),j=(r={},(0,l.Z)(r,f.wj.Auth,"AUTH"),(0,l.Z)(r,f.wj.Close,"CLSE"),(0,l.Z)(r,f.wj.Connect,"CNXN"),(0,l.Z)(r,f.wj.OK,"OKAY"),(0,l.Z)(r,f.wj.Open,"OPEN"),(0,l.Z)(r,f.wj.Write,"WRTE"),r),y=new(function(){function e(){var n=this;(0,o.Z)(this,e),this.selectedPacket=void 0,(0,x.ky)(this,{selectedPacket:x.LO.ref}),(0,x.EH)((function(){0===C.q.logs.length&&(n.selectedPacket=void 0)}))}return(0,a.Z)(e,[{key:"empty",get:function(){return!C.q.logs.length}},{key:"commandBarItems",get:function(){return[{key:"clear",disabled:this.empty,iconProps:{iconName:k.PJ.Delete},text:"Clear",onClick:function(){return C.q.clearLog()}}]}}]),e}()),P=(0,u.Z)({grow:{height:0},grid:{height:"100%"},header:{textAlign:"center",lineHeight:"".concat(32,"px")},row:{"&:hover":{backgroundColor:"#f3f2f1"}},selected:{backgroundColor:"#edebe9"},code:(0,c.Z)({fontFamily:"monospace",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"32px",cursor:"default"},w.q5.overflow("hidden")),hexViewer:(0,c.Z)({},w.q5.padding("12px"),w.q5.borderTop("1px","solid","rgb(243, 242, 241)"))}),S=[{title:"Direction",width:100,CellComponent:(0,k.$g)("Direction")((function(e){var n=e.className,t=e.rowIndex,r=(0,s.Z)(e,["className","rowIndex"]),o=C.q.logs[t],a=P();return(0,d.jsx)("div",(0,i.Z)((0,c.Z)({className:(0,h.z)(n,a.code)},r),{children:o.direction}))}))},{title:"Command",width:100,CellComponent:(0,k.$g)("Command")((function(e){var n,t=e.className,r=e.rowIndex,o=(0,s.Z)(e,["className","rowIndex"]),a=C.q.logs[r];a.commandString||(a.commandString=null!==(n=j[a.command])&&void 0!==n?n:(0,f.FO)(new Uint32Array([a.command])));var l=P();return(0,d.jsx)("div",(0,i.Z)((0,c.Z)({className:(0,h.z)(t,l.code)},o),{children:a.commandString}))}))},{title:"Arg0",width:100,CellComponent:(0,k.$g)("Command")((function(e){var n=e.className,t=e.rowIndex,r=(0,s.Z)(e,["className","rowIndex"]),o=C.q.logs[t];o.arg0String||(o.arg0String=o.arg0.toString(16).padStart(8,"0"));var a=P();return(0,d.jsx)("div",(0,i.Z)((0,c.Z)({className:(0,h.z)(n,a.code)},r),{children:o.arg0String}))}))},{title:"Arg1",width:100,CellComponent:(0,k.$g)("Command")((function(e){var n=e.className,t=e.rowIndex,r=(0,s.Z)(e,["className","rowIndex"]),o=C.q.logs[t];o.arg1String||(o.arg1String=o.arg1.toString(16).padStart(8,"0"));var a=P();return(0,d.jsx)("div",(0,i.Z)((0,c.Z)({className:(0,h.z)(n,a.code)},r),{children:o.arg1String}))}))},{title:"Payload",width:200,flexGrow:1,CellComponent:(0,k.$g)("Command")((function(e){var n=e.className,t=e.rowIndex,r=(0,s.Z)(e,["className","rowIndex"]),o=C.q.logs[t];o.payloadString||(o.payloadString=(0,Z.lr)(o.payload.subarray(0,100)));var a=P();return(0,d.jsx)("div",(0,i.Z)((0,c.Z)({className:(0,h.z)(n,a.code)},r),{children:o.payloadString}))}))}],b=(0,k.$g)("Header")((function(e){var n=e.className,t=e.columnIndex,r=(0,s.Z)(e,["className","columnIndex"]),o=P();return(0,d.jsx)("div",(0,i.Z)((0,c.Z)({className:(0,h.z)(n,o.header)},r),{children:S[t].title}))})),I=(0,p.Pi)((function(e){var n=e.className,t=e.rowIndex,r=(0,s.Z)(e,["className","rowIndex"]),o=P(),a=(0,k.R9)((function(){(0,x.z)((function(){y.selectedPacket=C.q.logs[t]}))}));return(0,d.jsx)("div",(0,c.Z)({className:(0,h.z)(n,o.row,y.selectedPacket===C.q.logs[t]&&o.selected),onClick:a},r))}));n.default=(0,p.Pi)((function(){var e=P();return(0,d.jsxs)(m.K,(0,i.Z)((0,c.Z)({},k.LE),{tokens:{},children:[(0,d.jsx)(N(),{children:(0,d.jsx)("title",{children:"Packet Log - Android Web Toolbox"})}),(0,d.jsx)(Z.X3,{items:y.commandBarItems}),(0,d.jsx)(g.v,{className:e.grow,grow:!0,children:(0,d.jsx)(Z.rj,{className:e.grid,rowCount:C.q.logs.length,rowHeight:32,columns:S,HeaderComponent:b,RowComponent:I})}),y.selectedPacket&&y.selectedPacket.payload.length>0&&(0,d.jsx)(g.v,{className:e.grow,grow:!0,children:(0,d.jsx)(Z.Kb,{className:e.hexViewer,data:y.selectedPacket.payload})})]}))}))},3368:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}t.d(n,{Z:function(){return o}})}},function(e){e.O(0,[774,888,179],(function(){return n=5621,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=packet-log-771d538141598ca5.js.map