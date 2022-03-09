(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05c329ae"],{1079:function(a,n,e){"use strict";var t=e("541c");n["a"]=t["a"]},"8c1b":function(a,n,e){"use strict";e.r(n);var t=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",[e("pill-badge-contextual"),e("pill-badge-glow"),e("pill-badge-light"),e("pill-badge-notification"),e("pill-badge-link-block")],1)},l=[],i=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("b-card-code",{attrs:{title:"Contextual"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codePillContextual)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[a._v("Use the ")]),e("code",[a._v("pill")]),e("span",[a._v(" prop to make badges more rounded")]),e("span",[a._v(" and use ")]),e("code",[a._v("variant")]),e("span",[a._v(" prop for badge color variantion.")])]),e("div",{staticClass:"demo-inline-spacing"},[e("b-badge",{attrs:{pill:"",variant:"primary"}},[a._v(" Primary ")]),e("b-badge",{attrs:{pill:""}},[a._v(" Secondary ")]),e("b-badge",{attrs:{pill:"",variant:"success"}},[a._v(" Success ")]),e("b-badge",{attrs:{pill:"",variant:"danger"}},[a._v(" Danger ")]),e("b-badge",{attrs:{pill:"",variant:"warning"}},[a._v(" Warning ")]),e("b-badge",{attrs:{pill:"",variant:"info"}},[a._v(" Info ")]),e("b-badge",{attrs:{pill:"",variant:"dark"}},[a._v(" Dark ")])],1)],1)},r=[],s=e("1079"),d=e("e98b"),o=e("d6e4"),c='\n<template>\n  <div class="demo-inline-spacing">\n    <b-badge pill variant="primary">Primary</b-badge>\n    <b-badge pill>Secondary</b-badge>\n    <b-badge pill variant="success">Success</b-badge>\n    <b-badge pill variant="danger">Danger</b-badge>\n    <b-badge pill variant="warning">Warning</b-badge>\n    <b-badge pill variant="info">Info</b-badge>\n    <b-badge pill variant="dark">Dark</b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',b='\n<template>\n  <div class="demo-inline-spacing">\n    <b-badge pill variant="primary" class="badge-glow">Primary</b-badge>\n    <b-badge pill variant="secondary" class="badge-glow">Secondary</b-badge>\n    <b-badge pill variant="success" class="badge-glow">Success</b-badge>\n    <b-badge pill variant="danger" class="badge-glow">Danger</b-badge>\n    <b-badge pill variant="warning" class="badge-glow">Warning</b-badge>\n    <b-badge pill variant="info" class="badge-glow">Info</b-badge>\n    <b-badge pill variant="dark" class="badge-glow">Dark</b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',g='\n<template>\n  <div class="demo-inline-spacing">\n    <feather-icon\n      icon="BellIcon"\n      size="21"\n      class="text-primary"\n      badge="4"\n    />\n\n    <feather-icon\n      icon="BellIcon"\n      size="21"\n      class="text-info"\n      badge="4"\n      badge-classes="badge-info"\n    />\n    <feather-icon\n      icon="BellIcon"\n      size="21"\n      class="text-danger"\n      badge="4"\n      badge-classes="badge-danger badge-glow"\n    />\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',p='\n<template>\n  <div class="demo-inline-spacing">\n    <b-badge pill variant="light-primary">Primary</b-badge>\n    <b-badge pill variant="light-secondary">Secondary</b-badge>\n    <b-badge pill variant="light-success">Success</b-badge>\n    <b-badge pill variant="light-danger">Danger</b-badge>\n    <b-badge pill variant="light-warning">Warning</b-badge>\n    <b-badge pill variant="light-info">Info</b-badge>\n    <b-badge pill variant="light-dark">Dark</b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',v='\n<template>\n <b-badge\n    href="#"\n    pill\n    variant="primary"\n  >\n    Primary\n  </b-badge>\n</template>\n\n<script>\nimport { BBadge} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',u='\n<template>\n  <b-badge\n    href="#"\n    class="d-block"\n    pill\n    variant="danger"\n  >\n    Block Badge Pill\n  </b-badge>\n</template>\n\n<script>\nimport {BBadge} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',f={components:{BCardCode:s["a"],BBadge:d["a"],BCardText:o["a"]},data:function(){return{codePillContextual:c}}},_=f,m=e("2877"),B=Object(m["a"])(_,i,r,!1,null,null,null),h=B.exports,k=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("b-card-code",{attrs:{title:"Glow Badges"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeGlow)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[a._v("Use class")]),e("code",[a._v(".badge-glow")]),e("span",[a._v("to add glow effect with badges.")])]),e("div",{staticClass:"demo-inline-spacing"},[e("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"primary"}},[a._v(" Primary ")]),e("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"secondary"}},[a._v(" Secondary ")]),e("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"success"}},[a._v(" Success ")]),e("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"danger"}},[a._v(" Danger ")]),e("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"warning"}},[a._v(" Warning ")]),e("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"info"}},[a._v(" Info ")]),e("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"dark"}},[a._v(" Dark ")])],1)],1)},y=[],w={components:{BCardCode:s["a"],BBadge:d["a"],BCardText:o["a"]},data:function(){return{codeGlow:b}}},x=w,C=Object(m["a"])(x,k,y,!1,null,null,null),P=C.exports,S=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("b-card-code",{attrs:{title:"Light Badges"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeLightBadge)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[a._v("Use ")]),e("code",[a._v("variant")]),e("span",[a._v(" prop for badge color variantion.")])]),e("div",{staticClass:"demo-inline-spacing"},[e("b-badge",{attrs:{pill:"",variant:"light-primary"}},[a._v(" Primary ")]),e("b-badge",{attrs:{pill:"",variant:"light-secondary"}},[a._v(" Secondary ")]),e("b-badge",{attrs:{pill:"",variant:"light-success"}},[a._v(" Success ")]),e("b-badge",{attrs:{pill:"",variant:"light-danger"}},[a._v(" Danger ")]),e("b-badge",{attrs:{pill:"",variant:"light-warning"}},[a._v(" Warning ")]),e("b-badge",{attrs:{pill:"",variant:"light-info"}},[a._v(" Info ")]),e("b-badge",{attrs:{pill:"",variant:"light-dark"}},[a._v(" Dark ")])],1)],1)},D=[],I={components:{BCardCode:s["a"],BBadge:d["a"],BCardText:o["a"]},data:function(){return{codeLightBadge:p}}},L=I,U=Object(m["a"])(L,S,D,!1,null,null,null),j=U.exports,z=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("b-card-code",{attrs:{title:"Pill Badges As Notification"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeNotification)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-"},[e("span",[a._v("Use class ")]),e("code",[a._v("badge")]),e("span",[a._v(" prop with ")]),e("code",[a._v("<feather-icon>")]),e("span",[a._v(" components to add badges as notification. Use ")]),e("code",[a._v('badge-classes="badge-{color}"')]),e("span",[a._v(" prop for change the badge color.")])]),e("div",{staticClass:"demo-inline-spacing"},[e("feather-icon",{staticClass:"text-primary",attrs:{icon:"BellIcon",size:"21",badge:"4"}}),e("feather-icon",{staticClass:"text-info",attrs:{icon:"BellIcon",size:"21",badge:"4","badge-classes":"badge-info"}}),e("feather-icon",{staticClass:"text-danger",attrs:{icon:"BellIcon",size:"21",badge:"4","badge-classes":"badge-danger badge-glow"}})],1)],1)},E=[],O={components:{BCardCode:s["a"],BCardText:o["a"]},data:function(){return{codeNotification:g}}},W=O,$=Object(m["a"])(W,z,E,!1,null,null,null),T=$.exports,G=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("b-row",[e("b-col",{attrs:{md:"6"}},[e("b-card-code",{attrs:{title:"Link Badge"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeLinkBadge)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[a._v("Use ")]),e("code",[a._v("href")]),e("span",[a._v(" prop (links) or ")]),e("code",[a._v("to")]),e("span",[a._v(" prop (router-links) for link badges.")])]),e("b-badge",{attrs:{href:"#",pill:"",variant:"primary"}},[a._v(" Primary ")])],1)],1),e("b-col",{attrs:{md:"6"}},[e("b-card-code",{attrs:{title:"Block Badge Pill"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeLinkBlock)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[a._v("Use ")]),e("code",[a._v(".d-block")]),e("span",[a._v(" class with ")]),e("code",[a._v("<b-badge>")]),e("span",[a._v(", to display pill badge as a block element.")])]),e("b-badge",{staticClass:"d-block",attrs:{href:"#",pill:"",variant:"danger"}},[a._v(" Block Badge Pill ")])],1)],1)],1)},N=[],J=e("a15b"),A=e("b28b"),R={components:{BCardCode:s["a"],BCardText:o["a"],BBadge:d["a"],BRow:J["a"],BCol:A["a"]},data:function(){return{codeLinkBadge:v,codeLinkBlock:u}}},q=R,F=Object(m["a"])(q,G,N,!1,null,null,null),H=F.exports,K={components:{PillBadgeContextual:h,PillBadgeGlow:P,PillBadgeLight:j,PillBadgeNotification:T,PillBadgeLinkBlock:H}},M=K,Q=Object(m["a"])(M,t,l,!1,null,null,null);n["default"]=Q.exports}}]);
//# sourceMappingURL=chunk-05c329ae.876ff482.js.map