(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11e88388"],{1079:function(t,n,e){"use strict";var i=e("541c");n["a"]=i["a"]},"491b":function(t,n,e){"use strict";e("7cad")},"7cad":function(t,n,e){},"9e41d":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("form-repeater-basic")],1)],1)],1)},r=[],o=e("a15b"),s=e("b28b"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Repeating Forms"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBasic)+" ")]},proxy:!0}])},[e("div",[e("b-form",{ref:"form",staticClass:"repeater-form",style:{height:t.trHeight},on:{submit:function(n){return n.preventDefault(),t.repeateAgain.apply(null,arguments)}}},t._l(t.items,(function(n,i){return e("b-row",{key:n.id,ref:"row",refInFor:!0,attrs:{id:n.id}},[e("b-col",{attrs:{md:"4"}},[e("b-form-group",{attrs:{label:"Item Name","label-for":"item-name"}},[e("b-form-input",{attrs:{id:"item-name",type:"text",placeholder:"Vuexy Admin Template"}})],1)],1),e("b-col",{attrs:{md:"2"}},[e("b-form-group",{attrs:{label:"Cost","label-for":"cost"}},[e("b-form-input",{attrs:{id:"cost",type:"number",placeholder:"32"}})],1)],1),e("b-col",{attrs:{md:"2"}},[e("b-form-group",{attrs:{label:"Quantity","label-for":"quantity"}},[e("b-form-input",{attrs:{id:"quantity",type:"number",placeholder:"1"}})],1)],1),e("b-col",{attrs:{lg:"2",md:"1"}},[e("b-form-group",{attrs:{label:"Price","label-for":"price"}},[e("b-form-input",{attrs:{id:"pzrice",value:"32$",plaintext:""}})],1)],1),e("b-col",{staticClass:"mb-50",attrs:{lg:"2",md:"3"}},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(234, 84, 85, 0.15)",expression:"'rgba(234, 84, 85, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-0 mt-md-2",attrs:{variant:"outline-danger"},on:{click:function(n){return t.removeItem(i)}}},[e("feather-icon",{staticClass:"mr-25",attrs:{icon:"XIcon"}}),e("span",[t._v("Delete")])],1)],1),e("b-col",{attrs:{cols:"12"}},[e("hr")])],1)})),1)],1),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"},on:{click:t.repeateAgain}},[e("feather-icon",{staticClass:"mr-25",attrs:{icon:"PlusIcon"}}),e("span",[t._v("Add New")])],1)],1)},l=[],c=(e("a434"),e("1079")),m=e("11de"),u=e("1947"),d=e("8226"),p=e("4797"),b=e("bf9a"),h=e("e009"),f='\n<template>\n  <div>\n     <div>\n      <b-form\n        ref="form"\n        :style="{height: trHeight}"\n        class="repeater-form"\n        @submit.prevent="repeateAgain"\n      >\n\n        \x3c!-- Row Loop --\x3e\n        <b-row\n          v-for="(item, index) in items"\n          :id="item.id"\n          :key="item.id"\n          ref="row"\n        >\n\n          \x3c!-- Item Name --\x3e\n          <b-col md="4">\n            <b-form-group\n              label="Item Name"\n              label-for="item-name"\n            >\n              <b-form-input\n                id="item-name"\n                type="text"\n                placeholder="Vuexy Admin Template"\n              />\n            </b-form-group>\n          </b-col>\n\n          \x3c!-- Cost --\x3e\n          <b-col md="2">\n            <b-form-group\n              label="Cost"\n              label-for="cost"\n            >\n              <b-form-input\n                id="cost"\n                type="number"\n                placeholder="32"\n              />\n            </b-form-group>\n          </b-col>\n\n          \x3c!-- Quantity --\x3e\n          <b-col md="2">\n            <b-form-group\n              label="Quantity"\n              label-for="quantity"\n            >\n              <b-form-input\n                id="quantity"\n                type="number"\n                placeholder="1"\n              />\n            </b-form-group>\n          </b-col>\n\n          \x3c!-- Profession --\x3e\n          <b-col\n            lg="2"\n            md="1"\n          >\n            <b-form-group\n              label="Price"\n              label-for="price"\n            >\n              <b-form-input\n                id="pzrice"\n                value="32$"\n                plaintext\n              />\n            </b-form-group>\n          </b-col>\n\n          \x3c!-- Remove Button --\x3e\n          <b-col\n            lg="2"\n            md="3"\n            class="mb-50"\n          >\n            <b-button\n              v-ripple.400="\'rgba(234, 84, 85, 0.15)\'"\n              variant="outline-danger"\n              class="mt-0 mt-md-2"\n              @click="removeItem(index)"\n            >\n              <feather-icon\n                icon="XIcon"\n                class="mr-25"\n              />\n              <span>Delete</span>\n            </b-button>\n          </b-col>\n          <b-col cols="12">\n            <hr>\n          </b-col>\n        </b-row>\n\n      </b-form>\n    </div>\n    <b-button\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      variant="primary"\n      @click="repeateAgain"\n    >\n      <feather-icon\n        icon="PlusIcon"\n        class="mr-25"\n      />\n      <span>Add New</span>\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {\n  BForm, BFormGroup, BFormInput, BRow, BCol, BButton,\n} from \'bootstrap-vue\'\nimport { heightTransition } from \'@core/mixins/ui/transition\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BForm,\n    BRow,\n    BCol,\n    BButton,\n    BFormGroup,\n    BFormInput,\n  },\n  directives: {\n    Ripple,\n  },\n  mixins: [heightTransition],\n  data() {\n    return {\n      items: [{\n        id: 1,\n        selected: \'male\',\n        selected1: \'designer\',\n        prevHeight: 0,\n      }],\n      nextTodoId: 2,\n    }\n  },\n  mounted() {\n    this.initTrHeight()\n  },\n  created() {\n    window.addEventListener(\'resize\', this.initTrHeight)\n  },\n  destroyed() {\n    window.removeEventListener(\'resize\', this.initTrHeight)\n  },\n  methods: {\n    repeateAgain() {\n      this.items.push({\n        id: this.nextTodoId += this.nextTodoId,\n      })\n\n      this.$nextTick(() => {\n        this.trAddHeight(this.$refs.row[0].offsetHeight)\n      })\n    },\n    removeItem(index) {\n      this.items.splice(index, 1)\n      this.trTrimHeight(this.$refs.row[0].offsetHeight)\n    },\n    initTrHeight() {\n      this.trSetHeight(null)\n      this.$nextTick(() => {\n        this.trSetHeight(this.$refs.form.scrollHeight)\n      })\n    },\n  },\n}\n<\/script>\n\n<style lang="scss" scoped>\n.repeater-form {\n  overflow: hidden;\n  transition: .35s height;\n}\n</style>\n',g={components:{BCardCode:c["a"],BForm:m["a"],BRow:o["a"],BCol:s["a"],BButton:u["a"],BFormGroup:d["a"],BFormInput:p["a"]},directives:{Ripple:h["a"]},mixins:[b["a"]],data:function(){return{items:[{id:1,selected:"male",selected1:"designer",prevHeight:0}],nextTodoId:2,codeBasic:f}},mounted:function(){this.initTrHeight()},created:function(){window.addEventListener("resize",this.initTrHeight)},destroyed:function(){window.removeEventListener("resize",this.initTrHeight)},methods:{repeateAgain:function(){var t=this;this.items.push({id:this.nextTodoId+=this.nextTodoId}),this.$nextTick((function(){t.trAddHeight(t.$refs.row[0].offsetHeight)}))},removeItem:function(t){this.items.splice(t,1),this.trTrimHeight(this.$refs.row[0].offsetHeight)},initTrHeight:function(){var t=this;this.trSetHeight(null),this.$nextTick((function(){t.trSetHeight(t.$refs.form.scrollHeight)}))}}},v=g,x=(e("491b"),e("2877")),H=Object(x["a"])(v,a,l,!1,null,"75419b40",null),w=H.exports,y={components:{BRow:o["a"],BCol:s["a"],FormRepeaterBasic:w}},B=y,T=Object(x["a"])(B,i,r,!1,null,null,null);n["default"]=T.exports},bf9a:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e("a9e3");var i={data:function(){return{trHeight:null}},methods:{trAddHeight:function(t){var n=Number(this.trHeight.substring(0,this.trHeight.length-2));this.trHeight="".concat(n+Number(t),"px")},trTrimHeight:function(t){var n=Number(this.trHeight.substring(0,this.trHeight.length-2));this.trHeight="".concat(n-Number(t),"px")},trSetHeight:function(t){this.trHeight=null===t?"auto":"".concat(Number(t),"px")}}}}}]);
//# sourceMappingURL=chunk-11e88388.b52ab33e.js.map