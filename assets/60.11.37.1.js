(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1107:function(t,e,o){"use strict";o.r(e);var n=o(0),i=o(3),a=o(1092),s=n.default.extend({i18n:Object(i.a)("desktop/views/components/post-form-window.vue"),components:{XPostForm:a.default},props:{reply:{type:Object,required:!1},mention:{type:Object,required:!1},animation:{type:Boolean,required:!1,default:!0},initialText:{type:String,required:!1},initialNote:{type:Object,required:!1},instant:{type:Boolean,required:!1,default:!1}},data:()=>({uploadings:[],files:[],geo:null}),computed:{maxHeight:()=>window.innerHeight-50},mounted(){this.$nextTick(()=>{this.$refs.form.focus()})},methods:{onChangeUploadings(t){this.uploadings=t},onChangeFiles(t){this.files=t},onGeoAttached(t){this.geo=t},onGeoDettached(){this.geo=null},onPosted(){this.$refs.window.close()},onWindowClosed(){this.$emit("closed"),this.destroyDom()}}}),d=(o(818),o(1)),r=Object(d.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("mk-window",{ref:"window",staticClass:"mk-post-form-window",attrs:{"is-modal":"",animation:t.animation},on:{closed:t.onWindowClosed},scopedSlots:t._u([{key:"header",fn:function(){return[o("span",{staticClass:"mk-post-form-window--header"},[t.geo?o("span",{staticClass:"icon"},[o("fa",{attrs:{icon:"map-marker-alt"}})],1):t._e(),t.reply?t._e():o("span",[t._v(t._s(t.$t("note")))]),t.reply?o("span",[t._v(t._s(t.$t("reply")))]):t._e(),0!=t.files.length?o("span",{staticClass:"count"},[t._v(t._s(t.$t("attaches").replace("{}",t.files.length)))]):t._e(),0!=t.uploadings.length?o("span",{staticClass:"count"},[t._v(t._s(t.$t("uploading-media").replace("{}",t.uploadings.length))),o("mk-ellipsis")],1):t._e()])]},proxy:!0}])},[o("div",{staticClass:"mk-post-form-window--body",style:{maxHeight:t.maxHeight+"px"}},[t.reply?o("mk-note-preview",{staticClass:"notePreview",attrs:{note:t.reply}}):t._e(),o("x-post-form",{ref:"form",attrs:{reply:t.reply,mention:t.mention,"initial-text":t.initialText,"initial-note":t.initialNote,instant:t.instant},on:{posted:t.onPosted,"change-uploadings":t.onChangeUploadings,"change-attached-files":t.onChangeFiles,"geo-attached":t.onGeoAttached,"geo-dettached":t.onGeoDettached}})],1)])}),[],!1,null,"d5b88546",null);e.default=r.exports},705:function(t,e,o){var n=o(819);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(5).default)("c39f7d94",n,!0,{})},818:function(t,e,o){"use strict";var n=o(705);o.n(n).a},819:function(t,e,o){(e=o(4)(!1)).push([t.i,'.mk-post-form-window .mk-post-form-window--header .icon[data-v-d5b88546]{margin-right:8px}.mk-post-form-window .mk-post-form-window--header .count[data-v-d5b88546]{margin-left:8px;opacity:.8}.mk-post-form-window .mk-post-form-window--header .count[data-v-d5b88546]:before{content:"("}.mk-post-form-window .mk-post-form-window--header .count[data-v-d5b88546]:after{content:")"}.mk-post-form-window .mk-post-form-window--body .notePreview[data-v-d5b88546]{margin:16px 22px}',""]),t.exports=e}}]);
//# sourceMappingURL=60.11.37.1.js.map