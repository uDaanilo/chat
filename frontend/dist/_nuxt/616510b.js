(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5,6],{387:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d}));var n=r(388),o=r(4),c=Object(o.e)("v-card__actions"),l=Object(o.e)("v-card__subtitle"),d=Object(o.e)("v-card__text"),h=Object(o.e)("v-card__title");n.a},388:function(t,e,r){"use strict";r(16),r(9),r(18),r(23),r(12),r(24);var n=r(2),o=(r(66),r(401),r(394),r(83)),c=r(406),l=r(131),d=r(42);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},390:function(t,e,r){var content=r(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("2cb28f6a",content,!0,{sourceMap:!1})},394:function(t,e,r){var content=r(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("e23b7040",content,!0,{sourceMap:!1})},395:function(t,e,r){var n=r(31)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},396:function(t,e,r){var content=r(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("1cdf85c7",content,!0,{sourceMap:!1})},397:function(t,e,r){var n=r(31)(!1);n.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=n},398:function(t,e,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("2fba213c",content,!0,{sourceMap:!1})},399:function(t,e,r){var n=r(31)(!1);n.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=n},400:function(t,e,r){var content=r(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("541cdaf8",content,!0,{sourceMap:!1})},402:function(t,e,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("39289280",content,!0,{sourceMap:!1})},403:function(t,e,r){"use strict";r(390)},404:function(t,e,r){var n=r(31)(!1);n.push([t.i,".loading{height:100%}",""]),t.exports=n},405:function(t,e,r){var content=r(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("7c936ea0",content,!0,{sourceMap:!1})},408:function(t,e,r){"use strict";r.r(e);var n={name:"Loading"},o=(r(403),r(57)),c=r(67),l=r.n(c),d=r(161),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading d-flex justify-center align-center"},[e("v-progress-circular",{staticClass:"d-flex justify-center align-center",attrs:{indeterminate:"",color:"accent",size:"50"}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VProgressCircular:d.a})},411:function(t,e,r){"use strict";r(400)},412:function(t,e,r){var n=r(31)(!1);n.push([t.i,".profile{z-index:100;position:absolute}.profile h3{color:#fff;font-weight:400}",""]),t.exports=n},414:function(t,e,r){"use strict";r(402)},415:function(t,e,r){var n=r(31)(!1);n.push([t.i,".messages{grid-area:messages;overflow-y:auto;height:calc(100% - 70px);max-height:100vh}.messages .message{display:flex;width:100%;padding:.3% 1%}.messages .message:hover{background-color:#1e1e1e}.messages .message .message-content{margin:0 .3%;display:flex;flex-direction:column;justify-content:center}.messages .message .message-content small{color:grey;font-weight:400}.messages .message .message-content p{color:#d3d3d3;word-break:break-all}.message #message-image{max-width:50%;width:auto;height:100%}@media screen and (max-width:960px){.message #message-image{max-width:75%}}",""]),t.exports=n},416:function(t,e,r){"use strict";r(405)},417:function(t,e,r){var n=r(31)(!1);n.push([t.i,".message-field{grid-area:messages;display:flex;position:fixed;width:calc(100% - 90px);height:50px;bottom:0}@media screen and (max-width:960px){.message-field{width:100%}}",""]),t.exports=n},419:function(t,e,r){"use strict";var n=r(19),o=(r(66),r(81),r(255),r(74),r(56),r(396),r(172)),c=(r(398),r(170)),l=r(42),d=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),h=r(58),v=r(389),m=r(11),f="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(l.a)(d,h.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!f||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(m.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/n):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var content=d.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t),data=Object(v.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:f?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},422:function(t,e,r){var content=r(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("5d61e4c4",content,!0,{sourceMap:!1})},427:function(t,e,r){"use strict";r.r(e);var n={name:"Profile",mounted:function(){var t=this;document.body.addEventListener("click",(function(e){e.stopPropagation(),t.$store.commit("profile/hide")}))}},o=(r(411),r(57)),c=r(67),l=r.n(c),d=r(413),h=r(162),v=r(388),m=r(387),f=r(419),_=r(418),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.profile.show,expression:"$store.state.profile.show"}],staticClass:"profile",style:"left: "+t.$store.state.profile.x+"px; top: "+t.$store.state.profile.y+"px",on:{click:function(t){t.stopPropagation()},client:function(t){t.preventDefault(),t.stopPropagation()}}},[r("v-slide-y-transition",[r("v-card",{staticClass:"mx-auto",attrs:{elevation:"3"}},[r("v-card-text",{staticClass:"d-flex justify-end align-center"},[r("h3",{staticClass:"pl-5 pr-2"},[t._v(t._s(t.$store.state.profile.user.name))]),t._v(" "),r("v-avatar",[r("v-img",{attrs:{src:t.$store.state.profile.user.img}})],1)],1),t._v(" "),r("v-card-actions",{staticClass:"d-flex justify-center"},[r("router-link",{attrs:{to:"/chat/"+t.$store.state.profile.user.id}},[r("v-btn",{attrs:{outlined:"",rounded:"",text:"",color:"accent"}},[t._v("\n          enviar mensagem\n        ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:d.a,VBtn:h.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VImg:f.a,VSlideYTransition:_.c})},428:function(t,e,r){"use strict";r.r(e);r(56);var n={name:"Messages",props:["messages","loading"],middleware:"auth",data:function(){return{}},methods:{scrollOnMessage:function(){var t=document.querySelector(".messages"),e=new MutationObserver((function(){t.scrollTo(0,t.scrollHeight)}));t.addEventListener("scroll",(function(){t.clientHeight+t.scrollTop>=t.scrollHeight-300?e.observe(t,{childList:!0,subtree:!0}):e.disconnect()}))}},mounted:function(){this.scrollOnMessage()},watch:{loading:function(){setTimeout((function(){return document.querySelector(".messages").scrollTo(0,document.querySelector(".messages").scrollHeight)}),500)}}},o=(r(414),r(57)),c=r(67),l=r.n(c),d=r(413),h=r(419),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"messages"},[t.loading?r("Loading"):t._e(),t._v(" "),t._l(t.messages,(function(e){return r("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],key:e.id,staticClass:"message"},[r("div",{staticClass:"author-img"},[r("v-avatar",[r("v-img",{attrs:{src:e.author.img}})],1)],1),t._v(" "),r("div",{staticClass:"message-content ml-3"},[r("h4",[t._v(t._s(e.author.name)+" "),r("small",[t._v(t._s(t.$dayjs(e.createdAt).fromNow()))])]),t._v(" "),e.img?t._e():r("p",[t._v(t._s(e.content))]),t._v(" "),e.img?r("img",{staticClass:"mt-1 mb-3",attrs:{id:"message-image",src:e.img}}):t._e()])])}))],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Loading:r(408).default}),l()(component,{VAvatar:d.a,VImg:h.a})},429:function(t,e,r){"use strict";r.r(e);r(80),r(25),r(129);var n={name:"Message_field",data:function(){return{message:"",imageUploadLoading:!1}},methods:{sendMessage:function(){this.message=this.message.trim(),this.message&&(this.$socket.client.emit("message",this.message),this.message="")},sendImage:function(t){var e=this;if(t.target.files[0]&&-1!=t.target.files[0].type.search("image")){var form=new FormData;form.append("img",t.target.files[0]),this.imageUploadLoading=!0,this.$axios.$post("/message/image",form,{timeout:1e4}).then((function(t){e.imageUploadLoading=!1,e.$socket.client.emit("message",t.src)})).catch((function(){return e.imageUploadLoading=!1}))}}}},o=(r(416),r(57)),c=r(67),l=r.n(c),d=r(413),h=r(460),v=r(162),m=r(157),f=r(461),_=r(462),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"message-field mb-3 px-4",on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage.apply(null,arguments)}}},[r("input",{ref:"inputMessageField",staticStyle:{display:"none"},attrs:{accept:".png, .jpg, .jpeg, .gif, .webp",type:"file",id:"inputMessageField"},on:{change:t.sendImage}}),t._v(" "),r("v-badge",{attrs:{"offset-x":"15",avatar:"","offset-y":"10",dot:"",bottom:"",color:t.$socket.connected?"green":"red"}},[r("v-avatar",{staticClass:"pointer mr-3",attrs:{size:"48"}},[r("img",{attrs:{src:t.$store.state.user.img,alt:t.$store.state.user.name+" pfp",title:t.$store.state.user.name}})])],1),t._v(" "),r("v-text-field",{staticClass:"message-field__input",attrs:{autocomplete:"off",color:"accent",disabled:!t.$socket.connected,label:"Digite...",solo:""},scopedSlots:t._u([{key:"append",fn:function(){return[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"accent",loading:t.imageUploadLoading,icon:"",large:""},on:{click:function(e){return t.$refs.inputMessageField.click()}}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-file-image")])],1)]}}])},[t._v(" "),r("span",[t._v("Enviar imagem")])]),t._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"accent",icon:"",large:""},on:{click:function(e){return t.$store.dispatch("user/logout")}}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-logout")])],1)]}}])},[t._v(" "),r("span",[t._v("Deslogar")])])]},proxy:!0}]),model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:d.a,VBadge:h.a,VBtn:v.a,VIcon:m.a,VTextField:f.a,VTooltip:_.a})},431:function(t,e,r){"use strict";r(422)},432:function(t,e,r){var n=r(31)(!1);n.push([t.i,'.chat{display:grid;grid-template-columns:calc(100% - 75px) 75px;grid-template-areas:"messages online-users";position:relative}@media screen and (max-width:960px){.chat{grid-template-columns:100% 0}}',""]),t.exports=n},463:function(t,e,r){"use strict";r.r(e);r(49),r(12);var n={middleware:"auth",data:function(){return{messages:[],loadingMessages:!0}},sockets:{already_connected:function(){this.$store.dispatch("alert/set",{message:"Sua conta está conectada em outro lugar",color:"accent",time:1/0,dismissable:!1})},message:function(t){this.verifyContentIsAImage(t),this.messages.push(t)},connect_error:function(t){console.error(t)}},methods:{verifyContentIsAImage:function(t){var e=this;/^(http|https):\/\/[^ "]+$/.test(t.content)&&/\.(png|jpg|jpeg|gif|webp)/g.test(t.content)&&(t.img=t.content,this.$nextTick((function(){e.messages=e.messages.map((function(e){return e.id==t.id?t:e}))})))},getMessages:function(){var t=this;this.$axios("/message").then((function(e){var r=e.data;t.messages=r,t.messages.forEach((function(e){return t.verifyContentIsAImage(e)})),t.loadingMessages=!1}))}},created:function(){this.getMessages()}},o=(r(431),r(57)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"chat"},[r("Profile"),t._v(" "),r("Messages",{attrs:{loading:t.loadingMessages,messages:t.messages}}),t._v(" "),r("Online-users"),t._v(" "),r("MessageField")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Profile:r(427).default,Messages:r(428).default,MessageField:r(429).default})}}]);