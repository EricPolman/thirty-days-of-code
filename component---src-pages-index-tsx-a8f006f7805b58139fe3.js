(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{EDuE:function(e,a,t){},QeBL:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return w}));t("E5k/");var o=t("q1tI"),n=t.n(o),r=t("ofer"),i=t("9Dj+"),c=t("wx14"),l=t("RD7I"),d=t("cNwE");var s=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(l.a)(e,Object(c.a)({defaultTheme:d.a},a))},p=t("Ff2n"),b=(t("17x9"),t("iuhU")),m=t("kKAo"),u=t("H2TA"),h=o.forwardRef((function(e,a){var t=e.classes,n=e.className,r=e.raised,i=void 0!==r&&r,l=Object(p.a)(e,["classes","className","raised"]);return o.createElement(m.a,Object(c.a)({className:Object(b.a)(t.root,n),elevation:i?8:1,ref:a},l))})),g=Object(u.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(h),f=o.forwardRef((function(e,a){var t=e.disableSpacing,n=void 0!==t&&t,r=e.classes,i=e.className,l=Object(p.a)(e,["disableSpacing","classes","className"]);return o.createElement("div",Object(c.a)({className:Object(b.a)(r.root,i,!n&&r.spacing),ref:a},l))})),y=Object(u.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(f),x=o.forwardRef((function(e,a){var t=e.classes,n=e.className,r=e.component,i=void 0===r?"div":r,l=Object(p.a)(e,["classes","className","component"]);return o.createElement(i,Object(c.a)({className:Object(b.a)(t.root,n),ref:a},l))})),v=Object(u.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(x),S=t("Z3vd"),O=t("Wbzz"),j=s({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),k=function(e){var a=j(),t=e.frontmatter,o=t.title,i=t.date,c=t.path;return n.a.createElement(g,{className:a.root},n.a.createElement(v,null,n.a.createElement(r.a,{className:a.title,color:"textSecondary",gutterBottom:!0},i),n.a.createElement(r.a,{variant:"h5",component:"h2"},o),n.a.createElement(r.a,{variant:"body1",component:"p"},e.excerpt)),n.a.createElement(y,null,n.a.createElement(S.a,{size:"small",onClick:function(){return Object(O.navigate)(c)}},"Read more")))},w=(t("EDuE"),"691589425");a.default=function(e){var a=e.data.allMarkdownRemark.edges.map((function(e){return e.node}));return n.a.createElement(i.a,null,n.a.createElement("div",{className:"blog-page"},n.a.createElement(r.a,{variant:"h3",component:"h1"},"Blog articles"),n.a.createElement("ul",null,a.map((function(e){return n.a.createElement(k,Object.assign({key:e.id},e))})))))}},Z3vd:function(e,a,t){"use strict";var o=t("Ff2n"),n=t("wx14"),r=t("q1tI"),i=(t("17x9"),t("iuhU")),c=t("H2TA"),l=t("ye/S"),d=t("VD++"),s=t("NqtD"),p=r.forwardRef((function(e,a){var t=e.children,c=e.classes,l=e.className,p=e.color,b=void 0===p?"default":p,m=e.component,u=void 0===m?"button":m,h=e.disabled,g=void 0!==h&&h,f=e.disableElevation,y=void 0!==f&&f,x=e.disableFocusRipple,v=void 0!==x&&x,S=e.endIcon,O=e.focusVisibleClassName,j=e.fullWidth,k=void 0!==j&&j,w=e.size,C=void 0===w?"medium":w,z=e.startIcon,E=e.type,N=void 0===E?"button":E,R=e.variant,I=void 0===R?"text":R,T=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),$=z&&r.createElement("span",{className:Object(i.a)(c.startIcon,c["iconSize".concat(Object(s.a)(C))])},z),L=S&&r.createElement("span",{className:Object(i.a)(c.endIcon,c["iconSize".concat(Object(s.a)(C))])},S);return r.createElement(d.a,Object(n.a)({className:Object(i.a)(c.root,c[I],l,"inherit"===b?c.colorInherit:"default"!==b&&c["".concat(I).concat(Object(s.a)(b))],"medium"!==C&&[c["".concat(I,"Size").concat(Object(s.a)(C))],c["size".concat(Object(s.a)(C))]],y&&c.disableElevation,g&&c.disabled,k&&c.fullWidth),component:u,disabled:g,focusRipple:!v,focusVisibleClassName:Object(i.a)(c.focusVisible,O),ref:a,type:N},T),r.createElement("span",{className:c.label},$,t,L))}));a.a=Object(c.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a8f006f7805b58139fe3.js.map