(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e619fb4"],{1079:function(a,t,n){"use strict";var r=n("541c");t["a"]=r["a"]},"223c":function(a,t,n){"use strict";var r=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:a.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:a.icon,size:"15"}})],1),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[a.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+a.variant,domProps:{textContent:a._s(a.title)}}):a._e(),a.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:a._s(a.text)}}):a._e()]),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(t){return a.$emit("close-toast")}}},[a.hideClose?a._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},e=[],s=n("e8a3"),o={components:{BAvatar:s["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=o,c=(n("b549"),n("2877")),l=Object(c["a"])(i,r,e,!1,null,"55dd3057",null);t["a"]=l.exports},"3be5":function(a,t,n){"use strict";n.r(t);var r=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{lg:"6"}},[n("avatar-size")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-initials")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-color")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-light-color")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-icon")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-custom-content")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-badge")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-badge-content")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-badge-position")],1),n("b-col",{attrs:{ld:"6"}},[n("avatar-offset")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-square")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-rounded")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-group")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-group-tooltip")],1),n("b-col",{attrs:{cols:"12"}},[n("avatar-action")],1)],1)},e=[],s=n("a15b"),o=n("b28b"),i=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("b-card-code",{attrs:{title:"Sizes"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeSizes)+" ")]},proxy:!0}])},[r("b-card-text",{staticClass:"mb-0"},[r("span",[a._v("Use the prop")]),r("code",[a._v("size")]),r("span",[a._v(" to specify sizes ")]),r("code",[a._v("sm, md")]),r("span",[a._v("and ")]),r("code",[a._v("lg")]),r("span",[a._v(" default to ")]),r("code",[a._v("1.5em, 2.5em")]),r("span",[a._v(" and ")]),r("code",[a._v("3.5em")])]),r("div",{staticClass:"demo-inline-spacing"},[r("b-avatar",{attrs:{size:"sm",src:n("0160")}}),r("b-avatar",{attrs:{src:n("0160")}}),r("b-avatar",{attrs:{size:"lg",src:n("0160")}}),r("b-avatar",{attrs:{size:"70px",src:n("0160")}})],1)],1)},c=[],l=n("1079"),v=n("e8a3"),p=n("d6e4"),d='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      size="sm"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n    <b-avatar\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n    <b-avatar\n      size="lg"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n    <b-avatar\n      size="70px"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar,\n  },\n}\n<\/script>\n',u='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      size="sm"\n      variant="light-primary"\n      text="PI"\n    />\n    <b-avatar\n      variant="light-secondary"\n      text="PI"\n    />\n    <b-avatar\n      size="lg"\n      variant="light-success"\n      text="PI"\n    />\n    <b-avatar\n      size="70px"\n      variant="light-danger"\n      text="PI"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',b='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      variant="primary"\n      text="PI"\n    />\n    <b-avatar\n      variant="secondary"\n      text="PI"\n    />\n    <b-avatar\n      variant="success"\n      text="PI"\n    />\n    <b-avatar\n      variant="danger"\n      text="PI"\n    />\n    <b-avatar\n      variant="warning"\n      text="PI"\n    />\n    <b-avatar\n      variant="info"\n      text="PI"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar,\n  },\n}\n<\/script>\n',g='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      text="PI"\n      variant="light-primary"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-secondary"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-success"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-danger"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-warning"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-info"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar,\n  },\n}\n<\/script>\n',m='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar variant="primary">\n      <feather-icon icon="HomeIcon" />\n    </b-avatar>\n    <b-avatar variant="success">\n      <feather-icon icon="BellIcon" />\n    </b-avatar>\n    <b-avatar variant="info">\n      <feather-icon icon="UserIcon" />\n    </b-avatar>\n    <b-avatar variant="danger">\n      <feather-icon icon="MessageSquareIcon" />\n    </b-avatar>\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',f='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar variant="primary">\n      <span>Hi</span>\n    </b-avatar>\n\n    <b-avatar variant="secondary">\n      <span>New</span>\n    </b-avatar>\n\n    <b-avatar variant="success">\n      <span>Hey</span>\n    </b-avatar>\n\n    <b-avatar variant="light-danger">\n      <span>Hi</span>\n    </b-avatar>\n\n    <b-avatar variant="light-warning">\n      <span>New</span>\n    </b-avatar>\n\n    <b-avatar variant="light-info">\n      <span>Hey</span>\n    </b-avatar>\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',h='\n<template>\n  <div class="demo-inline-spacing">\n    \x3c!-- using default slot  --\x3e\n    <b-avatar\n      badge="5"\n      badge-variant="primary"\n    >\n      <span class="d-flex align-items-center">\n        <feather-icon\n          icon="DownloadIcon"\n          size="16"\n        />\n      </span>\n    </b-avatar>\n\n    \x3c!-- with badge prop --\x3e\n    <b-avatar\n      badge="3"\n      badge-variant="primary"\n    />\n\n    <b-avatar\n      badge="2"\n      badge-variant="primary"\n    />\n\n    <b-avatar\n      badge="1"\n      badge-variant="primary"\n    />\n\n    <b-avatar\n      badge="10"\n      badge-variant="primary"\n      text="BV"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar,\n  },\n}\n<\/script>\n',_='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      class="mr-1"\n      badge="B"\n    />\n    <b-avatar\n      badge="7"\n      class="mr-1"\n      variant="primary"\n      badge-variant="danger"\n    />\n    <b-avatar\n      badge-variant="success"\n      badge="1"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-16.jpg\')"\n    />\n</div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',x='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      class="mr-1"\n      badge\n      badge-variant="success"\n    />\n    <b-avatar\n      class="mr-1"\n      badge-variant="success"\n      badge\n      badge-left\n    />\n    <b-avatar\n      badge\n      class="mr-1"\n      badge-variant="success"\n      badge-top\n    />\n    <b-avatar\n      badge\n      class="mr-1"\n      badge-variant="success"\n      badge-left\n      badge-top\n    />\n</div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',C='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      badge\n      badge-variant="success"\n      badge-offset="-0.5em"\n      class="mr-1"\n    />\n    <b-avatar\n      badge\n      badge-variant="success"\n      badge-offset="-2px"\n      class="mr-1"\n    />\n    <b-avatar\n      badge\n      badge-variant="success"\n      badge-offset="2px"\n      class="mr-1"\n    />\n    <b-avatar\n      badge\n      badge-top\n      badge-variant="success"\n      badge-offset="-0.5em"\n      class="mr-1"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',B='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      variant="light-primary"\n      square\n    />\n    <b-avatar\n      square\n      variant="light-success"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',y='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      rounded="sm"\n      variant="light-primary"\n    />\n    <b-avatar\n      rounded\n      variant="light-success"\n    />\n    <b-avatar\n      rounded="top"\n      variant="light-danger"\n    />\n    <b-avatar\n      rounded="lg"\n      variant="light-warning"\n    />\n    <b-avatar\n      rounded="left"\n      variant="light-info"\n    />\n    <b-avatar\n      rounded="right"\n      variant="light-primary"\n    />\n    <b-avatar\n      rounded="bottom"\n      variant="light-dark"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',A='\n<template>\n  <b-avatar-group size="32px">\n    <b-avatar\n      class="pull-up"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-5.jpg\')"\n    />\n    <b-avatar\n      class="pull-up"\n      variant="primary"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-7.jpg\')"\n    />\n    <b-avatar\n      class="pull-up"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-10.jpg\')"\n    />\n    <b-avatar\n      class="pull-up"\n      variant="danger"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-8.jpg\')"\n    />\n    <b-avatar\n      class="pull-up"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n  </b-avatar-group>\n</template>\n\n<script>\nimport { BAvatarGroup, BAvatar, } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatarGroup,\n    BAvatar,\n  },\n}\n<\/script>\n',I='\n<template>\n  <b-avatar-group size="32px">\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Jenny Looper"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-5.jpg\')"\n    />\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Darcey Nooner"\n      variant="primary"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-7.jpg\')"\n    />\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Julee Rossignol"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-10.jpg\')"\n    />\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Elicia Rieske"\n      variant="danger"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-8.jpg\')"\n    />\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Vinnie Mostowy"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n  </b-avatar-group>\n</template>\n\n<script>\nimport {  BAvatarGroup, BAvatar, VBTooltip} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatarGroup,\n    BAvatar\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n  },\n}\n<\/script>\n',w='\n<template>\n  <div class="demo-inline-spacing">\n    \x3c!-- button avatar --\x3e\n    <b-avatar\n      button\n      variant="primary"\n      text="BA"\n      class="align-baseline"\n      @click="showToast"\n    />\n    <span> Button Avatar</span>\n\n    \x3c!-- link avatar --\x3e\n    <b-avatar\n      href="#foobar"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-8.jpg\')"\n    />\n    <span>Link Avatar</span>\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\nimport ToastificationContent from \'@core/components/toastification/ToastificationContent.vue\'\n\nexport default {\n  components: {\n    BAvatar,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  methods: {\n    showToast() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Notification\',\n          icon: \'BellIcon\',\n        },\n      })\n    },\n  },\n}\n<\/script>\n',P={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:p["a"]},data:function(){return{codeSizes:d}}},j=P,T=n("2877"),k=Object(T["a"])(j,i,c,!1,null,null,null),S=k.exports,q=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Initials"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeInitials)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("You can specify a short string as the content of an avatar via the ")]),n("code",[a._v("text")]),n("span",[a._v(" prop.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{size:"sm",variant:"light-primary",text:"PI"}}),n("b-avatar",{attrs:{variant:"light-secondary",text:"PI"}}),n("b-avatar",{attrs:{size:"lg",variant:"light-success",text:"PI"}}),n("b-avatar",{attrs:{size:"70px",variant:"light-danger",text:"PI"}})],1)],1)},z=[],E={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:p["a"]},data:function(){return{codeInitials:u}}},O=E,$=Object(T["a"])(O,q,z,!1,null,null,null),G=$.exports,N=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Colors"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeColor)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Use the ")]),n("code",[a._v("variant")]),n("span",[a._v(" prop to specify one of Bootstrap theme variant colors.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{variant:"primary",text:"PI"}}),n("b-avatar",{attrs:{variant:"secondary",text:"PI"}}),n("b-avatar",{attrs:{variant:"success",text:"PI"}}),n("b-avatar",{attrs:{variant:"danger",text:"PI"}}),n("b-avatar",{attrs:{variant:"warning",text:"PI"}}),n("b-avatar",{attrs:{variant:"info",text:"PI"}})],1)],1)},H=[],R={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:p["a"]},data:function(){return{codeColor:b}}},V=R,L=Object(T["a"])(V,N,H,!1,null,null,null),U=L.exports,J=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Light Colors"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeColorLight)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("use class ")]),n("code",[a._v('variant="light-{color-name}"')]),n("span",[a._v(" to change background color of your avatar.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{text:"PI",variant:"light-primary"}}),n("b-avatar",{attrs:{text:"PI",variant:"light-secondary"}}),n("b-avatar",{attrs:{text:"PI",variant:"light-success"}}),n("b-avatar",{attrs:{text:"PI",variant:"light-danger"}}),n("b-avatar",{attrs:{text:"PI",variant:"light-warning"}}),n("b-avatar",{attrs:{text:"PI",variant:"light-info"}})],1)],1)},D=[],M=n("541c"),Y={components:{BAvatar:v["a"],BCardCode:M["a"],BCardText:p["a"]},data:function(){return{codeColorLight:g}}},W=Y,X=Object(T["a"])(W,J,D,!1,null,null,null),F=X.exports,K=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("b-card-code",{attrs:{title:"Actionable avatars"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeAction)+" ")]},proxy:!0}])},[r("b-card-text",{staticClass:"mb-0"},[r("span",[a._v("Want to trigger the opening of a modal or trigger an action? Set the button prop to instruct")]),r("code",[a._v("<b-avatar>")]),r("span",[a._v(" to render as a ")]),r("code",[a._v("<button>")]),r("span",[a._v(" element.")])]),r("div",{staticClass:"demo-inline-spacing"},[r("b-avatar",{staticClass:"align-baseline",attrs:{button:"",variant:"primary",text:"BA"},on:{click:a.showToast}}),r("span",[a._v(" Button Avatar")]),r("b-avatar",{attrs:{href:"#foobar",src:n("ed5f")}}),r("span",[a._v("Link Avatar")])],1)],1)},Q=[],Z=n("223c"),aa={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:p["a"],ToastificationContent:Z["a"]},data:function(){return{codeAction:w}},methods:{showToast:function(){this.$toast({component:Z["a"],props:{title:"Notification",icon:"BellIcon"}})}}},ta=aa,na=Object(T["a"])(ta,K,Q,!1,null,null,null),ra=na.exports,ea=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Badge avatars"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeBadge)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Easily add a badge to your avatar via the ")]),n("code",[a._v("badge")]),n("span",[a._v(" prop or ")]),n("code",[a._v("'badge'")]),n("span",[a._v(" slot, and the badge variant can be set via the ")]),n("code",[a._v("badge-variant")]),n("span",[a._v(" prop. The badge will scale with the size of the avatar.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{badge:"5","badge-variant":"primary"}},[n("span",{staticClass:"d-flex align-items-center"},[n("feather-icon",{attrs:{icon:"DownloadIcon",size:"16"}})],1)]),n("b-avatar",{attrs:{badge:"3","badge-variant":"primary"}}),n("b-avatar",{attrs:{badge:"2","badge-variant":"primary"}}),n("b-avatar",{attrs:{badge:"1","badge-variant":"primary"}}),n("b-avatar",{attrs:{badge:"10","badge-variant":"primary",text:"BV"}})],1)],1)},sa=[],oa={components:{BCardCode:l["a"],BCardText:p["a"],BAvatar:v["a"]},data:function(){return{codeBadge:h}}},ia=oa,ca=Object(T["a"])(ia,ea,sa,!1,null,null,null),la=ca.exports,va=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Badge positioning"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeBadgePosition)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("By default the badge appears on the bottom right of the avatar. ")]),n("span",[a._v("You can use the ")]),n("code",[a._v("badge-top")]),n("span",[a._v(" and ")]),n("code",[a._v("badge-right")]),n("span",[a._v(" boolean props to switch the sides.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success"}}),n("b-avatar",{staticClass:"mr-1",attrs:{"badge-variant":"success",badge:"","badge-left":""}}),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-top":""}}),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-left":"","badge-top":""}})],1)],1)},pa=[],da={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:p["a"]},data:function(){return{codeBadgePosition:x}}},ua=da,ba=Object(T["a"])(ua,va,pa,!1,null,null,null),ga=ba.exports,ma=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Badge Offset"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeBadgeOffset)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Use the ")]),n("code",[a._v("badge-offset")]),n("span",[a._v(" prop to control the offset of the badge. ")]),n("span",[a._v("Positive values will move the badge inward, while negative values will move the badge outward.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-offset":"-0.5em"}}),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-offset":"-2px"}}),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-offset":"2px"}}),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-top":"","badge-variant":"success","badge-offset":"-0.5em"}})],1)],1)},fa=[],ha={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:p["a"]},data:function(){return{codeBadgeOffset:C}}},_a=ha,xa=Object(T["a"])(_a,ma,fa,!1,null,null,null),Ca=xa.exports,Ba=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Icons"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeIcon)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Easily use one of ")]),n("code",[a._v("BootstrapVue's")]),n("span",[a._v(" icons as the avatar content via the ")]),n("code",[a._v("icon")]),n("span",[a._v(" prop. The prop should be set to a valid icon name.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{variant:"primary"}},[n("feather-icon",{attrs:{icon:"HomeIcon"}})],1),n("b-avatar",{attrs:{variant:"success"}},[n("feather-icon",{attrs:{icon:"BellIcon"}})],1),n("b-avatar",{attrs:{variant:"info"}},[n("feather-icon",{attrs:{icon:"UserIcon"}})],1),n("b-avatar",{attrs:{variant:"danger"}},[n("feather-icon",{attrs:{icon:"MessageSquareIcon"}})],1)],1)],1)},ya=[],Aa={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:p["a"]},data:function(){return{codeIcon:m}}},Ia=Aa,wa=Object(T["a"])(Ia,Ba,ya,!1,null,null,null),Pa=wa.exports,ja=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Custom content"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeCustomContent)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Use the ")]),n("code",[a._v("default")]),n("span",[a._v("slot to render custom content in the avatar, for finer grained control of its appearance.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{variant:"primary"}},[n("span",[a._v("Hi")])]),n("b-avatar",{attrs:{variant:"secondary"}},[n("span",[a._v("New")])]),n("b-avatar",{attrs:{variant:"success"}},[n("span",[a._v("Hey")])]),n("b-avatar",{attrs:{variant:"light-danger"}},[n("span",[a._v("Hi")])]),n("b-avatar",{attrs:{variant:"light-warning"}},[n("span",[a._v("New")])]),n("b-avatar",{attrs:{variant:"light-info"}},[n("span",[a._v("Hey")])])],1)],1)},Ta=[],ka={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:p["a"]},data:function(){return{codeCustomContent:f}}},Sa=ka,qa=Object(T["a"])(Sa,ja,Ta,!1,null,null,null),za=qa.exports,Ea=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("b-card-code",{attrs:{title:"Badge content"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeBadgeContent)+" ")]},proxy:!0}])},[r("b-card-text",{staticClass:"mb-0"},[r("span",[a._v("Add textual content to the badge by supplying a string to the ")]),r("code",[a._v("badge")]),r("span",[a._v(" prop, or use the named slot ")]),r("code",[a._v("'badge'")]),a._v(". ")]),r("div",{staticClass:"demo-inline-spacing"},[r("b-avatar",{staticClass:"mr-1",attrs:{badge:"B"}}),r("b-avatar",{staticClass:"mr-1",attrs:{badge:"7",variant:"primary","badge-variant":"danger"}}),r("b-avatar",{attrs:{"badge-variant":"success",badge:"1",src:n("6683")}})],1)],1)},Oa=[],$a={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:p["a"]},data:function(){return{codeBadgeContent:_}}},Ga=$a,Na=Object(T["a"])(Ga,Ea,Oa,!1,null,null,null),Ha=Na.exports,Ra=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Square"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeSquare)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v(" Prefer a square avatar? simply set the ")]),n("code",[a._v("square")]),n("span",[a._v(" prop to ")]),n("code",[a._v("true")]),a._v(". ")]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{variant:"light-primary",square:""}}),n("b-avatar",{attrs:{square:"",variant:"light-success"}})],1)],1)},Va=[],La={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:p["a"]},data:function(){return{codeSquare:B}}},Ua=La,Ja=Object(T["a"])(Ua,Ra,Va,!1,null,null,null),Da=Ja.exports,Ma=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Rounded"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeRounded)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v(" You can change the rounding by setting the prop")]),n("code",[a._v("rounded")]),n("span",[a._v(".")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{rounded:"sm",variant:"light-primary"}}),n("b-avatar",{attrs:{rounded:"",variant:"light-success"}}),n("b-avatar",{attrs:{rounded:"top",variant:"light-danger"}}),n("b-avatar",{attrs:{rounded:"lg",variant:"light-warning"}}),n("b-avatar",{attrs:{rounded:"left",variant:"light-info"}}),n("b-avatar",{attrs:{rounded:"right",variant:"light-primary"}}),n("b-avatar",{attrs:{rounded:"bottom",variant:"light-dark"}})],1)],1)},Ya=[],Wa={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:p["a"]},data:function(){return{codeRounded:y}}},Xa=Wa,Fa=Object(T["a"])(Xa,Ma,Ya,!1,null,null,null),Ka=Fa.exports,Qa=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("b-card-code",{attrs:{title:"Avatar Group"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeGroup)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[a._v("Group multiple avatars together by wrapping them in a ")]),r("code",[a._v("<b-avatar-group>")]),r("span",[a._v(" component. Add class ")]),r("code",[a._v("pull-up")]),r("span",[a._v(" for pull up the avatar on hover.")])]),r("b-avatar-group",{attrs:{size:"32px"}},[r("b-avatar",{staticClass:"pull-up",attrs:{src:n("9a5e")}}),r("b-avatar",{staticClass:"pull-up",attrs:{variant:"primary",src:n("b690")}}),r("b-avatar",{staticClass:"pull-up",attrs:{src:n("351c")}}),r("b-avatar",{staticClass:"pull-up",attrs:{variant:"danger",src:n("ed5f")}}),r("b-avatar",{staticClass:"pull-up",attrs:{src:n("0160")}})],1)],1)},Za=[],at=n("3985"),tt={components:{BCardCode:M["a"],BAvatarGroup:at["a"],BAvatar:v["a"],BCardText:p["a"]},data:function(){return{codeGroup:A}}},nt=tt,rt=Object(T["a"])(nt,Qa,Za,!1,null,null,null),et=rt.exports,st=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("b-card-code",{attrs:{title:"Avatar Group with Tooltip"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeGroupTooltip)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[a._v("Use bootstrapVue's ")]),r("code",[a._v("VBTooltip")]),r("span",[a._v(" directive with avatar to use tooltip. ")]),r("span",[a._v("Add class ")]),r("code",[a._v("pull-up")]),r("span",[a._v(" for pull up the avatar on hover.")])]),r("b-avatar-group",{attrs:{size:"32px"}},[r("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Jenny Looper",src:n("9a5e")}}),r("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Darcey Nooner",variant:"primary",src:n("b690")}}),r("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Julee Rossignol",src:n("351c")}}),r("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Elicia Rieske",variant:"danger",src:n("ed5f")}}),r("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Vinnie Mostowy",src:n("0160")}})],1)],1)},ot=[],it=n("2616"),ct={components:{BCardCode:M["a"],BAvatarGroup:at["a"],BAvatar:v["a"],BCardText:p["a"]},directives:{"b-tooltip":it["a"]},data:function(){return{codeGroupTooltip:I}}},lt=ct,vt=Object(T["a"])(lt,st,ot,!1,null,null,null),pt=vt.exports,dt={components:{BRow:s["a"],BCol:o["a"],AvatarInitials:G,AvatarColor:U,AvatarLightColor:F,AvatarSize:S,AvatarAction:ra,AvatarBadge:la,AvatarBadgePosition:ga,AvatarOffset:Ca,AvatarIcon:Pa,AvatarCustomContent:za,AvatarBadgeContent:Ha,AvatarSquare:Da,AvatarRounded:Ka,AvatarGroup:et,AvatarGroupTooltip:pt}},ut=dt,bt=Object(T["a"])(ut,r,e,!1,null,null,null);t["default"]=bt.exports},6683:function(a,t,n){a.exports=n.p+"img/avatar-s-16.037d5bcb.jpg"},"8d81":function(a,t,n){},b549:function(a,t,n){"use strict";n("8d81")}}]);
//# sourceMappingURL=chunk-7e619fb4.38460804.js.map