(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a7e33d9"],{"0e20":function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return l}));n("b680"),n("d3b7"),n("25f0"),n("ac1f"),n("1276"),n("159b"),n("fb6a"),n("a15b9"),n("d81d"),n("5319");var a=n("ca6e"),r=function(t){return t>999?"".concat((t/1e3).toFixed(1),"k"):t},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!t)return"";var n=t.toString(),a=n.split(e),r=[];return a.forEach((function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);r.push(e)})),r.join(" ")},o=function(t){if(!t)return"";var e=t.split(" ");return e.map((function(t){return t.charAt(0).toUpperCase()})).join("")},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric"};return t?new Intl.DateTimeFormat("en-US",e).format(new Date(t)):t},s=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new Date(t),r={month:"short",day:"numeric"};return e&&Object(a["c"])(n)&&(r={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",r).format(new Date(t))},l=function(t){return t.replace(/<\/?[^>]+(>|$)/g,"")}},1148:function(t,e,n){"use strict";var a=n("a691"),r=n("1d80");t.exports="".repeat||function(t){var e=String(r(this)),n="",i=a(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},"223c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[t.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},r=[],i=n("e8a3"),o={components:{BAvatar:i["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},c=o,s=(n("b549"),n("2877")),l=Object(s["a"])(c,a,r,!1,null,"55dd3057",null);e["a"]=l.exports},"25f0":function(t,e,n){"use strict";var a=n("6eeb"),r=n("825a"),i=n("d039"),o=n("ad6d"),c="toString",s=RegExp.prototype,l=s[c],u=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=c;(u||f)&&a(RegExp.prototype,c,(function(){var t=r(this),e=String(t.source),n=t.flags,a=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?o.call(t):n);return"/"+e+"/"+a}),{unsafe:!0})},"408a":function(t,e,n){var a=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},5319:function(t,e,n){"use strict";var a=n("d784"),r=n("825a"),i=n("7b0b"),o=n("50c4"),c=n("a691"),s=n("1d80"),l=n("8aa5"),u=n("14c3"),f=Math.max,d=Math.min,v=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,b=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,n,a){var h=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=a.REPLACE_KEEPS_$0,y=h?"$":"$0";return[function(n,a){var r=s(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,a):e.call(String(r),n,a)},function(t,a){if(!h&&g||"string"===typeof a&&-1===a.indexOf(y)){var i=n(e,t,this,a);if(i.done)return i.value}var s=r(t),v=String(this),p="function"===typeof a;p||(a=String(a));var m=s.global;if(m){var C=s.unicode;s.lastIndex=0}var x=[];while(1){var S=u(s,v);if(null===S)break;if(x.push(S),!m)break;var I=String(S[0]);""===I&&(s.lastIndex=l(v,o(s.lastIndex),C))}for(var _="",D=0,P=0;P<x.length;P++){S=x[P];for(var k=String(S[0]),j=f(d(c(S.index),v.length),0),O=[],B=1;B<S.length;B++)O.push(b(S[B]));var E=S.groups;if(p){var A=[k].concat(O,j,v);void 0!==E&&A.push(E);var T=String(a.apply(void 0,A))}else T=w(k,v,j,O,E,a);j>=D&&(_+=v.slice(D,j)+T,D=j+k.length)}return _+v.slice(D)}];function w(t,n,a,r,o,c){var s=a+t.length,l=r.length,u=m;return void 0!==o&&(o=i(o),u=p),e.call(c,u,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,a);case"'":return n.slice(s);case"<":c=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var f=v(u/10);return 0===f?e:f<=l?void 0===r[f-1]?i.charAt(1):r[f-1]+i.charAt(1):e}c=r[u-1]}return void 0===c?"":c}))}}))},"54e1":function(t,e,n){"use strict";n("a73e")},"8d81":function(t,e,n){},a15b9:function(t,e,n){"use strict";var a=n("23e7"),r=n("44ad"),i=n("fc6a"),o=n("a640"),c=[].join,s=r!=Object,l=o("join",",");a({target:"Array",proto:!0,forced:s||!l},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},a29f:function(t,e,n){"use strict";n("d3b7");var a=n("7f80");e["a"]={namespaced:!0,state:{},getters:{},mutations:{},actions:{fetchInvoices:function(t,e){return new Promise((function(t,n){a["a"].get("/apps/invoice/invoices",{params:e}).then((function(e){return t(e)})).catch((function(t){return n(t)}))}))},fetchInvoice:function(t,e){var n=e.id;return new Promise((function(t,e){a["a"].get("/apps/invoice/invoices/".concat(n)).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},fetchClients:function(){return new Promise((function(t,e){a["a"].get("/apps/invoice/clients").then((function(e){return t(e)})).catch((function(t){return e(t)}))}))}}}},a35f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{"no-body":""}},[n("div",{staticClass:"m-2"},[n("b-row",[n("b-col",{staticClass:"d-flex align-items-center justify-content-start mb-1 mb-md-0",attrs:{cols:"12",md:"6"}},[n("label",[t._v("Entries")]),n("v-select",{staticClass:"per-page-selector d-inline-block ml-50 mr-1",attrs:{dir:t.$store.state.appConfig.isRTL?"rtl":"ltr",options:t.perPageOptions,clearable:!1},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),n("b-button",{attrs:{variant:"primary",to:{name:"apps-invoice-add"}}},[t._v(" Add Record ")])],1),n("b-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"d-flex align-items-center justify-content-end"},[n("b-form-input",{staticClass:"d-inline-block mr-1",attrs:{placeholder:"Search..."},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),n("v-select",{staticClass:"invoice-filter-select",attrs:{dir:t.$store.state.appConfig.isRTL?"rtl":"ltr",options:t.statusOptions,placeholder:"Select Status"},scopedSlots:t._u([{key:"selected-option",fn:function(e){var a=e.label;return[n("span",{staticClass:"text-truncate overflow-hidden"},[t._v(" "+t._s(a)+" ")])]}}]),model:{value:t.statusFilter,callback:function(e){t.statusFilter=e},expression:"statusFilter"}})],1)])],1)],1),n("b-table",{ref:"refInvoiceListTable",staticClass:"position-relative",attrs:{items:t.fetchInvoices,responsive:"",fields:t.tableColumns,"primary-key":"id","sort-by":t.sortBy,"show-empty":"","empty-text":"No matching records found","sort-desc":t.isSortDirDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.isSortDirDesc=e},"update:sort-desc":function(e){t.isSortDirDesc=e}},scopedSlots:t._u([{key:"head(invoiceStatus)",fn:function(){return[n("feather-icon",{staticClass:"mx-auto",attrs:{icon:"TrendingUpIcon"}})]},proxy:!0},{key:"cell(id)",fn:function(e){return[n("b-link",{staticClass:"font-weight-bold",attrs:{to:{name:"apps-invoice-preview",params:{id:e.item.id}}}},[t._v(" #"+t._s(e.value)+" ")])]}},{key:"cell(invoiceStatus)",fn:function(e){return[n("b-avatar",{attrs:{id:"invoice-row-"+e.item.id,size:"32",variant:"light-"+t.resolveInvoiceStatusVariantAndIcon(e.item.invoiceStatus).variant}},[n("feather-icon",{attrs:{icon:t.resolveInvoiceStatusVariantAndIcon(e.item.invoiceStatus).icon}})],1),n("b-tooltip",{attrs:{target:"invoice-row-"+e.item.id,placement:"top"}},[n("p",{staticClass:"mb-0"},[t._v(" "+t._s(e.item.invoiceStatus)+" ")]),n("p",{staticClass:"mb-0"},[t._v(" Balance: "+t._s(e.item.balance)+" ")]),n("p",{staticClass:"mb-0"},[t._v(" Due Date: "+t._s(e.item.dueDate)+" ")])])]}},{key:"cell(client)",fn:function(e){return[n("b-media",{attrs:{"vertical-align":"center"},scopedSlots:t._u([{key:"aside",fn:function(){return[n("b-avatar",{attrs:{size:"32",src:e.item.avatar,text:t.avatarText(e.item.client.name),variant:"light-"+t.resolveClientAvatarVariant(e.item.invoiceStatus)}})]},proxy:!0}],null,!0)},[n("span",{staticClass:"font-weight-bold d-block text-nowrap"},[t._v(" "+t._s(e.item.client.name)+" ")]),n("small",{staticClass:"text-muted"},[t._v(t._s(e.item.client.companyEmail))])])]}},{key:"cell(issuedDate)",fn:function(e){return[n("span",{staticClass:"text-nowrap"},[t._v(" "+t._s(e.value)+" ")])]}},{key:"cell(balance)",fn:function(e){return[0===e.value?[n("b-badge",{attrs:{pill:"",variant:"light-success"}},[t._v(" Paid ")])]:[t._v(" "+t._s(e.value)+" ")]]}},{key:"cell(actions)",fn:function(e){return[n("div",{staticClass:"text-nowrap"},[n("feather-icon",{staticClass:"cursor-pointer",attrs:{id:"invoice-row-"+e.item.id+"-send-icon",icon:"SendIcon",size:"16"}}),n("b-tooltip",{staticClass:"cursor-pointer",attrs:{title:"Send Invoice",target:"invoice-row-"+e.item.id+"-send-icon"}}),n("feather-icon",{staticClass:"mx-1",attrs:{id:"invoice-row-"+e.item.id+"-preview-icon",icon:"EyeIcon",size:"16"},on:{click:function(n){return t.$router.push({name:"apps-invoice-preview",params:{id:e.item.id}})}}}),n("b-tooltip",{attrs:{title:"Preview Invoice",target:"invoice-row-"+e.item.id+"-preview-icon"}}),n("b-dropdown",{attrs:{variant:"link","toggle-class":"p-0","no-caret":"",right:t.$store.state.appConfig.isRTL},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("feather-icon",{staticClass:"align-middle text-body",attrs:{icon:"MoreVerticalIcon",size:"16"}})]},proxy:!0}],null,!0)},[n("b-dropdown-item",[n("feather-icon",{attrs:{icon:"DownloadIcon"}}),n("span",{staticClass:"align-middle ml-50"},[t._v("Download")])],1),n("b-dropdown-item",{attrs:{to:{name:"apps-invoice-edit",params:{id:e.item.id}}}},[n("feather-icon",{attrs:{icon:"EditIcon"}}),n("span",{staticClass:"align-middle ml-50"},[t._v("Edit")])],1),n("b-dropdown-item",[n("feather-icon",{attrs:{icon:"TrashIcon"}}),n("span",{staticClass:"align-middle ml-50"},[t._v("Delete")])],1),n("b-dropdown-item",[n("feather-icon",{attrs:{icon:"CopyIcon"}}),n("span",{staticClass:"align-middle ml-50"},[t._v("Duplicate")])],1)],1)],1)]}}])}),n("div",{staticClass:"mx-2 mb-2"},[n("b-row",[n("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-start",attrs:{cols:"12",sm:"6"}},[n("span",{staticClass:"text-muted"},[t._v("Showing "+t._s(t.dataMeta.from)+" to "+t._s(t.dataMeta.to)+" of "+t._s(t.dataMeta.of)+" entries")])]),n("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-end",attrs:{cols:"12",sm:"6"}},[n("b-pagination",{staticClass:"mb-0 mt-1 mt-sm-0",attrs:{"total-rows":t.totalInvoices,"per-page":t.perPage,"first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},scopedSlots:t._u([{key:"prev-text",fn:function(){return[n("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[n("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)},r=[],i=n("205f"),o=n("a15b"),c=n("b28b"),s=n("4797"),l=n("1947"),u=n("29a1"),f=n("34b6"),d=n("e8a3"),v=n("aa59"),p=n("e98b"),m=n("dd9a"),b=n("9eaa"),h=n("26d2"),g=n("b4ae"),y=n("0e20"),w=n("4a7a"),C=n.n(w),x=n("a6f4"),S=n("4360"),I=n("04b0"),_=n("223c");function D(){var t=Object(I["useToast"])(),e=Object(x["ref"])(null),n=[{key:"id",label:"#",sortable:!0},{key:"invoiceStatus",sortable:!0},{key:"client",sortable:!0},{key:"total",sortable:!0,formatter:function(t){return"$".concat(t)}},{key:"issuedDate",sortable:!0},{key:"balance",sortable:!0},{key:"actions"}],a=Object(x["ref"])(10),r=Object(x["ref"])(0),i=Object(x["ref"])(1),o=[10,25,50,100],c=Object(x["ref"])(""),s=Object(x["ref"])("id"),l=Object(x["ref"])(!0),u=Object(x["ref"])(null),f=Object(x["computed"])((function(){var t=e.value?e.value.localItems.length:0;return{from:a.value*(i.value-1)+(t?1:0),to:a.value*(i.value-1)+t,of:r.value}})),d=function(){e.value.refresh()};Object(x["watch"])([i,a,c,u],(function(){d()}));var v=function(e,n){S["a"].dispatch("app-invoice/fetchInvoices",{q:c.value,perPage:a.value,page:i.value,sortBy:s.value,sortDesc:l.value,status:u.value}).then((function(t){var e=t.data,a=e.invoices,i=e.total;n(a),r.value=i})).catch((function(){t({component:_["a"],props:{title:"Error fetching invoices' list",icon:"AlertTriangleIcon",variant:"danger"}})}))},p=function(t){return"Partial Payment"===t?{variant:"warning",icon:"PieChartIcon"}:"Paid"===t?{variant:"success",icon:"CheckCircleIcon"}:"Downloaded"===t?{variant:"info",icon:"ArrowDownCircleIcon"}:"Draft"===t?{variant:"primary",icon:"SaveIcon"}:"Sent"===t?{variant:"secondary",icon:"SendIcon"}:"Past Due"===t?{variant:"danger",icon:"InfoIcon"}:{variant:"secondary",icon:"XIcon"}},m=function(t){return"Partial Payment"===t?"primary":"Paid"===t?"danger":"Downloaded"===t?"secondary":"Draft"===t?"warning":"Sent"===t?"info":"Past Due"===t?"success":"primary"};return{fetchInvoices:v,tableColumns:n,perPage:a,currentPage:i,totalInvoices:r,dataMeta:f,perPageOptions:o,searchQuery:c,sortBy:s,isSortDirDesc:l,refInvoiceListTable:e,statusFilter:u,resolveInvoiceStatusVariantAndIcon:p,resolveClientAvatarVariant:m,refetchData:d}}var P=n("a29f"),k={components:{BCard:i["a"],BRow:o["a"],BCol:c["a"],BFormInput:s["a"],BButton:l["a"],BTable:u["a"],BMedia:f["a"],BAvatar:d["a"],BLink:v["a"],BBadge:p["a"],BDropdown:m["a"],BDropdownItem:b["a"],BPagination:h["a"],BTooltip:g["a"],vSelect:C.a},setup:function(){var t="app-invoice";S["a"].hasModule(t)||S["a"].registerModule(t,P["a"]),Object(x["onUnmounted"])((function(){S["a"].hasModule(t)&&S["a"].unregisterModule(t)}));var e=["Downloaded","Draft","Paid","Partial Payment","Past Due"],n=D(),a=n.fetchInvoices,r=n.tableColumns,i=n.perPage,o=n.currentPage,c=n.totalInvoices,s=n.dataMeta,l=n.perPageOptions,u=n.searchQuery,f=n.sortBy,d=n.isSortDirDesc,v=n.refInvoiceListTable,p=n.statusFilter,m=n.refetchData,b=n.resolveInvoiceStatusVariantAndIcon,h=n.resolveClientAvatarVariant;return{fetchInvoices:a,tableColumns:r,perPage:i,currentPage:o,totalInvoices:c,dataMeta:s,perPageOptions:l,searchQuery:u,sortBy:f,isSortDirDesc:d,refInvoiceListTable:v,statusFilter:p,refetchData:m,statusOptions:e,avatarText:y["a"],resolveInvoiceStatusVariantAndIcon:b,resolveClientAvatarVariant:h}}},j=k,O=(n("d1a3"),n("54e1"),n("2877")),B=Object(O["a"])(j,a,r,!1,null,"9a6e255c",null);e["default"]=B.exports},a73e:function(t,e,n){},b549:function(t,e,n){"use strict";n("8d81")},b680:function(t,e,n){"use strict";var a=n("23e7"),r=n("a691"),i=n("408a"),o=n("1148"),c=n("d039"),s=1..toFixed,l=Math.floor,u=function(t,e,n){return 0===e?n:e%2===1?u(t,e-1,n*t):u(t*t,e/2,n)},f=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},d=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){s.call({})}));a({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,n,a,c,s=i(this),d=r(t),v=[0,0,0,0,0,0],p="",m="0",b=function(t,e){var n=-1,a=e;while(++n<6)a+=t*v[n],v[n]=a%1e7,a=l(a/1e7)},h=function(t){var e=6,n=0;while(--e>=0)n+=v[e],v[e]=l(n/t),n=n%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==v[t]){var n=String(v[t]);e=""===e?n:e+o.call("0",7-n.length)+n}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(p="-",s=-s),s>1e-21)if(e=f(s*u(2,69,1))-69,n=e<0?s*u(2,-e,1):s/u(2,e,1),n*=4503599627370496,e=52-e,e>0){b(0,n),a=d;while(a>=7)b(1e7,0),a-=7;b(u(10,a,1),0),a=e-1;while(a>=23)h(1<<23),a-=23;h(1<<a),b(1,1),h(2),m=g()}else b(0,n),b(1<<-e,0),m=g()+o.call("0",d);return d>0?(c=m.length,m=p+(c<=d?"0."+o.call("0",d-c)+m:m.slice(0,c-d)+"."+m.slice(c-d))):m=p+m,m}})},c4fe:function(t,e,n){},ca6e:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return u}));var a=n("5530");n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var i=n("a6f4"),o=n("a18c"),c=function(t){return"object"===r(t)&&null!==t},s=function(t){var e=new Date;return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()},l=function(t){var e=o["a"].resolve(t),n=e.route;return n.path===o["a"].currentRoute.path},u=function(){var t=Object(i["getCurrentInstance"])().proxy,e=Object(i["reactive"])({route:t.$route});return Object(i["watch"])((function(){return t.$route}),(function(t){e.route=t})),Object(a["a"])(Object(a["a"])({},Object(i["toRefs"])(e)),{},{router:t.$router})}},d1a3:function(t,e,n){"use strict";n("c4fe")}}]);
//# sourceMappingURL=chunk-0a7e33d9.ac74a11e.js.map