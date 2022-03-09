(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f020480"],{1079:function(n,t,e){"use strict";var r=e("541c");t["a"]=r["a"]},f055:function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{md:"6"}},[e("spinner-border")],1),e("b-col",{attrs:{md:"6"}},[e("spinner-color")],1),e("b-col",{attrs:{md:"6"}},[e("spinner-grow")],1),e("b-col",{attrs:{md:"6"}},[e("spinner-grow-color")],1),e("b-col",{attrs:{md:"6"}},[e("spinner-flex")],1),e("b-col",{attrs:{md:"6"}},[e("spinner-float")],1),e("b-col",{attrs:{md:"6"}},[e("spinner-text-align")],1),e("b-col",{attrs:{md:"6"}},[e("spinner-size")],1),e("b-col",[e("spinner-button")],1)],1)},a=[],s=e("a15b"),i=e("b28b"),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Border Spinners"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeBorder)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("Use the default ")]),e("code",[n._v("border")]),e("span",[n._v(" type spinners for a lightweight loading indicator.")])]),e("b-spinner",{attrs:{label:"Loading..."}})],1)},l=[],p=e("1079"),c=e("01e3"),d=e("d6e4"),u="\n<template>\n  <b-spinner label=\"Loading...\" />\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n",b="\n<template>\n  <div class=\"demo-inline-spacing\">\n    <b-spinner\n      v-for=\"variant in variants\"\n      :key=\"variant\"\n      class=\"mr-1\"\n      :variant=\"variant\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n  data: () => ({\n    variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],\n  }),\n}\n<\/script>\n",m='\n<template>\n  <div>\n    <b-button\n      variant="primary"\n      disabled\n      class="mr-1"\n    >\n      <b-spinner small />\n      <span class="sr-only">Loading...</span>\n    </b-button>\n\n    <b-button\n      variant="primary"\n      disabled\n      class="mr-1"\n    >\n      <b-spinner small />\n      Loading...\n    </b-button>\n\n    <b-button\n      variant="primary"\n      disabled\n      class="mr-1"\n    >\n      <b-spinner\n        small\n        type="grow"\n      />\n      <span class="sr-only">Loading...</span>\n    </b-button>\n\n    <b-button\n      variant="primary"\n      disabled\n      class="mr-1"\n    >\n      <b-spinner\n        small\n        type="grow"\n      />\n      Loading...\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BSpinner, BButton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BButton,\n    BSpinner,\n  },\n}\n<\/script>\n',v='\n<template>\n  <div>\n    <div class="d-flex justify-content-center mb-1">\n      <b-spinner label="Loading..." />\n    </div>\n    <div class="d-flex align-items-center">\n      <strong>Loading...</strong>\n      <b-spinner class="ml-auto" />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n',f='\n<template>\n  <div class="clearfix">\n    <b-spinner class="float-right" label="Floated Right" />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n',g='\n<template>\n  <b-spinner type="grow" label="Loading..." />\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n',_="\n<template>\n  <div class=\"d-flex flex-wrap\">\n    <b-spinner\n      v-for=\"variant in variants\"\n      :key=\"variant\"\n      :variant=\"variant\"\n      class=\"mr-1\"\n      type=\"grow\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BSpinner,\n  },\n  data: () => ({\n    variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],\n  }),\n}\n<\/script>\n",y='\n<template>\n  <div class="text-center d-flex justify-content-between">\n    <div>\n      <b-spinner\n        small\n        class="mr-1"\n        label="Small Spinner"\n      />\n      <b-spinner\n        small\n        label="Small Spinner"\n        type="grow"\n      />\n    </div>\n    <div>\n      <b-spinner\n        class="mr-1"\n        label="Small Spinner"\n      />\n      <b-spinner\n        label="Small Spinner"\n        type="grow"\n      />\n    </div>\n    <div>\n      <b-spinner\n        style="width: 3rem; height: 3rem;"\n        class="mr-1"\n        label="Large Spinner"\n      />\n      <b-spinner\n        style="width: 3rem; height: 3rem;"\n        label="Large Spinner"\n        type="grow"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n',x='\n<template>\n  <div class="text-center">\n    <b-spinner variant="primary" label="Text Centered" />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  }\n}\n<\/script>\n',S={components:{BCardCode:p["a"],BSpinner:c["a"],BCardText:d["a"]},data:function(){return{codeBorder:u}}},B=S,C=e("2877"),h=Object(C["a"])(B,o,l,!1,null,null,null),w=h.exports,k=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Colored Spinners"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeBorderColor)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[n._v("You can customize the color using the standard text color variants using the ")]),e("code",[n._v("variant")]),e("span",[n._v(" prop.")])]),e("div",{staticClass:"demo-inline-spacing"},n._l(n.variants,(function(n){return e("b-spinner",{key:n,staticClass:"mr-1",attrs:{variant:n}})})),1)],1)},L=[],T={components:{BCardCode:p["a"],BSpinner:c["a"],BCardText:d["a"]},data:function(){return{variants:["primary","secondary","danger","warning","success","info","light","dark"],codeBorderColor:b}}},j=T,E=Object(C["a"])(j,k,L,!1,null,null,null),F=E.exports,O=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Growing Spinner"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeGrow)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("If you don't fancy a ")]),e("code",[n._v("border")]),e("span",[n._v(" spinner, switch to the ")]),e("code",[n._v("grow")]),e("span",[n._v(" spinner by setting the prop ")]),e("code",[n._v("type")]),e("span",[n._v(" to ")]),e("code",[n._v("'grow'")]),n._v(". "),e("span",[n._v("While it doesn't technically spin, it does repeatedly grow!")])]),e("b-spinner",{attrs:{type:"grow",label:"Loading..."}})],1)},$=[],G={components:{BCardCode:p["a"],BSpinner:c["a"],BCardText:d["a"]},data:function(){return{codeGrow:g}}},z=G,U=Object(C["a"])(z,O,$,!1,null,null,null),A=U.exports,R=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Colored Growing Spinners"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeGrowColor)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[n._v("The variant prop translates the variant name to the Bootstrap v4 class ")]),e("code",[n._v(".text-{variant}")]),e("span",[n._v(", so if you have custom defined text color ")]),e("code",[n._v("variants")]),e("span",[n._v(", feel free to use them via the variant prop.")])]),e("div",{staticClass:"demo-inline-spacing"},n._l(n.variants,(function(n){return e("b-spinner",{key:n,staticClass:"mr-1",attrs:{variant:n,type:"grow"}})})),1)],1)},J=[],Y={components:{BCardCode:p["a"],BSpinner:c["a"],BCardText:d["a"]},data:function(){return{variants:["primary","secondary","danger","warning","success","info","light","dark"],codeGrowColor:_}}},q=Y,I=Object(C["a"])(q,R,J,!1,null,null,null),W=I.exports,D=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Sizes"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeSize)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[n._v("Set the prop ")]),e("code",[n._v("small")]),e("span",[n._v(" to ")]),e("code",[n._v("true")]),e("span",[n._v(" to make a smaller spinner that can quickly be used within other components.")])]),e("div",{staticClass:"demo-inline-spacing"},[e("div",[e("b-spinner",{staticClass:"mr-1",attrs:{small:"",label:"Small Spinner"}}),e("b-spinner",{attrs:{small:"",label:"Small Spinner",type:"grow"}})],1),e("div",[e("b-spinner",{staticClass:"mr-1",attrs:{label:"Small Spinner"}}),e("b-spinner",{attrs:{label:"Small Spinner",type:"grow"}})],1),e("div",[e("b-spinner",{staticClass:"mr-1",staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner"}}),e("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner",type:"grow"}})],1)])],1)},H=[],K={components:{BCardCode:p["a"],BSpinner:c["a"],BCardText:d["a"]},data:function(){return{codeSize:y}}},M=K,N=Object(C["a"])(M,D,H,!1,null,null,null),P=N.exports,Q=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Flex"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeFlex)+" ")]},proxy:!0}])},[e("b-card-text",[n._v(" Using flex utility classes: ")]),e("div",{staticClass:"d-flex justify-content-center mb-1"},[e("b-spinner",{attrs:{label:"Loading..."}})],1),e("div",{staticClass:"d-flex align-items-center"},[e("strong",[n._v("Loading...")]),e("b-spinner",{staticClass:"ml-auto"})],1)],1)},V=[],X={components:{BCardCode:p["a"],BSpinner:c["a"],BCardText:d["a"]},data:function(){return{codeFlex:v}}},Z=X,nn=Object(C["a"])(Z,Q,V,!1,null,null,null),tn=nn.exports,en=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Float"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeFloat)+" ")]},proxy:!0}])},[e("b-card-text",[n._v("Using float utility classes:")]),e("div",{staticClass:"clearfix"},[e("b-spinner",{staticClass:"float-right",attrs:{label:"Floated Right"}})],1)],1)},rn=[],an={components:{BCardCode:p["a"],BSpinner:c["a"],BCardText:d["a"]},data:function(){return{codeFloat:f}}},sn=an,on=Object(C["a"])(sn,en,rn,!1,null,null,null),ln=on.exports,pn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Text Alignment"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeTextAlign)+" ")]},proxy:!0}])},[e("b-card-text",[n._v("Using text alignment utility classes:")]),e("div",{staticClass:"text-center"},[e("b-spinner",{attrs:{variant:"primary",label:"Text Centered"}})],1)],1)},cn=[],dn={components:{BCardCode:p["a"],BSpinner:c["a"],BCardText:d["a"]},data:function(){return{codeTextAlign:x}}},un=dn,bn=Object(C["a"])(un,pn,cn,!1,null,null,null),mn=bn.exports,vn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Buttons"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeButton)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[n._v(" Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the label text out of the spinner element and utilize button text as needed. ")]),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e("b-spinner",{attrs:{small:""}}),e("span",{staticClass:"sr-only"},[n._v("Loading...")])],1),e("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e("b-spinner",{attrs:{small:""}}),n._v(" Loading... ")],1),e("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),e("span",{staticClass:"sr-only"},[n._v("Loading...")])],1),e("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),n._v(" Loading... ")],1)],1)],1)},fn=[],gn=e("1947"),_n={components:{BCardCode:p["a"],BButton:gn["a"],BSpinner:c["a"],BCardText:d["a"]},data:function(){return{codeButton:m}}},yn=_n,xn=Object(C["a"])(yn,vn,fn,!1,null,null,null),Sn=xn.exports,Bn={components:{BRow:s["a"],BCol:i["a"],SpinnerBorder:w,SpinnerColor:F,SpinnerGrow:A,SpinnerGrowColor:W,SpinnerSize:P,SpinnerFlex:tn,SpinnerFloat:ln,SpinnerTextAlign:mn,SpinnerButton:Sn}},Cn=Bn,hn=Object(C["a"])(Cn,r,a,!1,null,null,null);t["default"]=hn.exports}}]);
//# sourceMappingURL=chunk-7f020480.e583af82.js.map