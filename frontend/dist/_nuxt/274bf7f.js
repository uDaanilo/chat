(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{405:function(e,t,o){var content=o(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(32).default)("7c936ea0",content,!0,{sourceMap:!1})},416:function(e,t,o){"use strict";o(405)},417:function(e,t,o){var n=o(31)(!1);n.push([e.i,".message-field{grid-area:messages;display:flex;position:fixed;width:calc(100% - 90px);height:50px;bottom:0}@media screen and (max-width:960px){.message-field{width:100%}}",""]),e.exports=n},429:function(e,t,o){"use strict";o.r(t);o(80),o(26),o(174);var n={name:"Message_field",data:function(){return{message:"",imageUploadLoading:!1}},methods:{sendMessage:function(){this.message=this.message.trim(),this.message&&(this.$socket.client.emit("message",this.message),this.message="")},logout:function(){localStorage.removeItem("token"),this.$store.commit("user/clear"),this.$socket.client.auth={},this.$socket.client.disconnect(),this.$router.push("/login")},sendImage:function(e){var t=this;if(e.target.files[0]&&-1!=e.target.files[0].type.search("image")){var form=new FormData;form.append("img",e.target.files[0]),this.imageUploadLoading=!0,this.$axios.$post("/message/image",form,{timeout:1e4}).then((function(e){t.imageUploadLoading=!1,t.$socket.client.emit("message",e.src)})).catch((function(){return t.imageUploadLoading=!1}))}}}},c=(o(416),o(57)),r=o(67),l=o.n(r),d=o(413),m=o(460),f=o(161),v=o(156),h=o(461),_=o(462),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"message-field mb-3 px-4",on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage.apply(null,arguments)}}},[o("input",{ref:"inputMessageField",staticStyle:{display:"none"},attrs:{accept:".png, .jpg, .jpeg, .gif, .webp",type:"file",id:"inputMessageField"},on:{change:e.sendImage}}),e._v(" "),o("v-badge",{attrs:{"offset-x":"15",avatar:"","offset-y":"10",dot:"",bottom:"",color:e.$socket.connected?"green":"red"}},[o("v-avatar",{staticClass:"pointer mr-3",attrs:{size:"48"}},[o("img",{attrs:{src:e.$store.state.user.img,alt:e.$store.state.user.name+" pfp",title:e.$store.state.user.name}})])],1),e._v(" "),o("v-text-field",{staticClass:"message-field__input",attrs:{autocomplete:"off",color:"accent",disabled:!e.$socket.connected,label:"Digite...",solo:""},scopedSlots:e._u([{key:"append",fn:function(){return[o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,c=t.attrs;return[o("v-btn",e._g(e._b({attrs:{color:"accent",loading:e.imageUploadLoading,icon:"",large:""},on:{click:function(t){return e.$refs.inputMessageField.click()}}},"v-btn",c,!1),n),[o("v-icon",[e._v("mdi-file-image")])],1)]}}])},[e._v(" "),o("span",[e._v("Enviar imagem")])]),e._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,c=t.attrs;return[o("v-btn",e._g(e._b({attrs:{color:"accent",icon:"",large:""},on:{click:e.logout}},"v-btn",c,!1),n),[o("v-icon",[e._v("mdi-logout")])],1)]}}])},[e._v(" "),o("span",[e._v("Deslogar")])])]},proxy:!0}]),model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VAvatar:d.a,VBadge:m.a,VBtn:f.a,VIcon:v.a,VTextField:h.a,VTooltip:_.a})}}]);