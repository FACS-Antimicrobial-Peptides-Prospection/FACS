(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6e95976"],{2525:function(A,T,C){},"5e0f":function(A,T,C){"use strict";var t=C("2525"),e=C.n(t);e.a},"96cf":function(A,T,C){var t=function(A){"use strict";var T,C=Object.prototype,t=C.hasOwnProperty,e="function"===typeof Symbol?Symbol:{},G=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",r=e.toStringTag||"@@toStringTag";function o(A,T,C,t){var e=T&&T.prototype instanceof p?T:p,G=Object.create(e.prototype),n=new L(t||[]);return G._invoke=w(A,C,n),G}function i(A,T,C){try{return{type:"normal",arg:A.call(T,C)}}catch(t){return{type:"throw",arg:t}}}A.wrap=o;var a="suspendedStart",s="suspendedYield",c="executing",l="completed",u={};function p(){}function f(){}function h(){}var d={};d[G]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(_([])));y&&y!==C&&t.call(y,G)&&(d=y);var v=h.prototype=p.prototype=Object.create(d);function g(A){["next","throw","return"].forEach((function(T){A[T]=function(A){return this._invoke(T,A)}}))}function b(A){function T(C,e,G,n){var r=i(A[C],A,e);if("throw"!==r.type){var o=r.arg,a=o.value;return a&&"object"===typeof a&&t.call(a,"__await")?Promise.resolve(a.__await).then((function(A){T("next",A,G,n)}),(function(A){T("throw",A,G,n)})):Promise.resolve(a).then((function(A){o.value=A,G(o)}),(function(A){return T("throw",A,G,n)}))}n(r.arg)}var C;function e(A,t){function e(){return new Promise((function(C,e){T(A,t,C,e)}))}return C=C?C.then(e,e):e()}this._invoke=e}function w(A,T,C){var t=a;return function(e,G){if(t===c)throw new Error("Generator is already running");if(t===l){if("throw"===e)throw G;return E()}C.method=e,C.arg=G;while(1){var n=C.delegate;if(n){var r=x(n,C);if(r){if(r===u)continue;return r}}if("next"===C.method)C.sent=C._sent=C.arg;else if("throw"===C.method){if(t===a)throw t=l,C.arg;C.dispatchException(C.arg)}else"return"===C.method&&C.abrupt("return",C.arg);t=c;var o=i(A,T,C);if("normal"===o.type){if(t=C.done?l:s,o.arg===u)continue;return{value:o.arg,done:C.done}}"throw"===o.type&&(t=l,C.method="throw",C.arg=o.arg)}}}function x(A,C){var t=A.iterator[C.method];if(t===T){if(C.delegate=null,"throw"===C.method){if(A.iterator["return"]&&(C.method="return",C.arg=T,x(A,C),"throw"===C.method))return u;C.method="throw",C.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var e=i(t,A.iterator,C.arg);if("throw"===e.type)return C.method="throw",C.arg=e.arg,C.delegate=null,u;var G=e.arg;return G?G.done?(C[A.resultName]=G.value,C.next=A.nextLoc,"return"!==C.method&&(C.method="next",C.arg=T),C.delegate=null,u):G:(C.method="throw",C.arg=new TypeError("iterator result is not an object"),C.delegate=null,u)}function F(A){var T={tryLoc:A[0]};1 in A&&(T.catchLoc=A[1]),2 in A&&(T.finallyLoc=A[2],T.afterLoc=A[3]),this.tryEntries.push(T)}function P(A){var T=A.completion||{};T.type="normal",delete T.arg,A.completion=T}function L(A){this.tryEntries=[{tryLoc:"root"}],A.forEach(F,this),this.reset(!0)}function _(A){if(A){var C=A[G];if(C)return C.call(A);if("function"===typeof A.next)return A;if(!isNaN(A.length)){var e=-1,n=function C(){while(++e<A.length)if(t.call(A,e))return C.value=A[e],C.done=!1,C;return C.value=T,C.done=!0,C};return n.next=n}}return{next:E}}function E(){return{value:T,done:!0}}return f.prototype=v.constructor=h,h.constructor=f,h[r]=f.displayName="GeneratorFunction",A.isGeneratorFunction=function(A){var T="function"===typeof A&&A.constructor;return!!T&&(T===f||"GeneratorFunction"===(T.displayName||T.name))},A.mark=function(A){return Object.setPrototypeOf?Object.setPrototypeOf(A,h):(A.__proto__=h,r in A||(A[r]="GeneratorFunction")),A.prototype=Object.create(v),A},A.awrap=function(A){return{__await:A}},g(b.prototype),b.prototype[n]=function(){return this},A.AsyncIterator=b,A.async=function(T,C,t,e){var G=new b(o(T,C,t,e));return A.isGeneratorFunction(C)?G:G.next().then((function(A){return A.done?A.value:G.next()}))},g(v),v[r]="Generator",v[G]=function(){return this},v.toString=function(){return"[object Generator]"},A.keys=function(A){var T=[];for(var C in A)T.push(C);return T.reverse(),function C(){while(T.length){var t=T.pop();if(t in A)return C.value=t,C.done=!1,C}return C.done=!0,C}},A.values=_,L.prototype={constructor:L,reset:function(A){if(this.prev=0,this.next=0,this.sent=this._sent=T,this.done=!1,this.delegate=null,this.method="next",this.arg=T,this.tryEntries.forEach(P),!A)for(var C in this)"t"===C.charAt(0)&&t.call(this,C)&&!isNaN(+C.slice(1))&&(this[C]=T)},stop:function(){this.done=!0;var A=this.tryEntries[0],T=A.completion;if("throw"===T.type)throw T.arg;return this.rval},dispatchException:function(A){if(this.done)throw A;var C=this;function e(t,e){return r.type="throw",r.arg=A,C.next=t,e&&(C.method="next",C.arg=T),!!e}for(var G=this.tryEntries.length-1;G>=0;--G){var n=this.tryEntries[G],r=n.completion;if("root"===n.tryLoc)return e("end");if(n.tryLoc<=this.prev){var o=t.call(n,"catchLoc"),i=t.call(n,"finallyLoc");if(o&&i){if(this.prev<n.catchLoc)return e(n.catchLoc,!0);if(this.prev<n.finallyLoc)return e(n.finallyLoc)}else if(o){if(this.prev<n.catchLoc)return e(n.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return e(n.finallyLoc)}}}},abrupt:function(A,T){for(var C=this.tryEntries.length-1;C>=0;--C){var e=this.tryEntries[C];if(e.tryLoc<=this.prev&&t.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var G=e;break}}G&&("break"===A||"continue"===A)&&G.tryLoc<=T&&T<=G.finallyLoc&&(G=null);var n=G?G.completion:{};return n.type=A,n.arg=T,G?(this.method="next",this.next=G.finallyLoc,u):this.complete(n)},complete:function(A,T){if("throw"===A.type)throw A.arg;return"break"===A.type||"continue"===A.type?this.next=A.arg:"return"===A.type?(this.rval=this.arg=A.arg,this.method="return",this.next="end"):"normal"===A.type&&T&&(this.next=T),u},finish:function(A){for(var T=this.tryEntries.length-1;T>=0;--T){var C=this.tryEntries[T];if(C.finallyLoc===A)return this.complete(C.completion,C.afterLoc),P(C),u}},catch:function(A){for(var T=this.tryEntries.length-1;T>=0;--T){var C=this.tryEntries[T];if(C.tryLoc===A){var t=C.completion;if("throw"===t.type){var e=t.arg;P(C)}return e}}throw new Error("illegal catch attempt")},delegateYield:function(A,C,t){return this.delegate={iterator:_(A),resultName:C,nextLoc:t},"next"===this.method&&(this.arg=T),u}},A}(A.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}},b0c0:function(A,T,C){var t=C("83ab"),e=C("9bf2").f,G=Function.prototype,n=G.toString,r=/^\s*function ([^ (]*)/,o="name";!t||o in G||e(G,o,{configurable:!0,get:function(){try{return n.call(this).match(r)[1]}catch(A){return""}}})},b301:function(A,T,C){"use strict";var t=C("d039");A.exports=function(A,T){var C=[][A];return!C||!t((function(){C.call(null,T||function(){throw 1},1)}))}},baa5:function(A,T,C){var t=C("23e7"),e=C("e58c");t({target:"Array",proto:!0,forced:e!==[].lastIndexOf},{lastIndexOf:e})},e58c:function(A,T,C){"use strict";var t=C("fc6a"),e=C("a691"),G=C("50c4"),n=C("b301"),r=Math.min,o=[].lastIndexOf,i=!!o&&1/[1].lastIndexOf(1,-0)<0,a=n("lastIndexOf");A.exports=i||a?function(A){if(i)return o.apply(this,arguments)||0;var T=t(this),C=G(T.length),n=C-1;for(arguments.length>1&&(n=r(n,e(arguments[1]))),n<0&&(n=C+n);n>=0;n--)if(n in T&&T[n]===A)return n||0;return-1}:o},eb3d:function(A,T,C){"use strict";C.r(T);var t=function(){var A=this,T=A.$createElement,C=A._self._c||T;return C("div",{staticClass:"prediction_container"},[C("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[C("el-col",{attrs:{span:2}},[C("div",{staticClass:"grid-content"})]),C("el-col",{attrs:{span:14}},[C("div",{staticClass:"grid-content formArea"},[C("div",{staticClass:"form-head"},[A._v("This is Antimicrobial peptides prediction.")]),C("div",{staticClass:"form-body"},[C("el-form",{ref:"pFormRef",staticClass:"prediction_form",attrs:{model:A.pFormModel,rules:A.pFormRules,size:"medium"}},[C("h4",{staticStyle:{"margin-top":"0.4em","margin-bottom":"0.2em"}},[A._v("You can paste peptides or contigs sequence(less than 500 rows) with "),C("span",{staticStyle:{color:"red"}},[A._v("FASTA/FA")]),A._v(" format into the field below:")]),C("el-form-item",{staticStyle:{"margin-bottom":"0.1em"},attrs:{prop:"textData"}},[C("el-input",{attrs:{type:"textarea",rows:8,placeholder:"input your sequence here"},model:{value:A.pFormModel.textData,callback:function(T){A.$set(A.pFormModel,"textData",T)},expression:"pFormModel.textData"}})],1),C("br"),C("h4",{staticStyle:{"margin-top":"0.5em","margin-bottom":"0.2em"}},[A._v("Or submit a file(less than 500KB) in FASTA/FA format directly from your disk:")]),C("el-form-item",[C("el-upload",{ref:"upload",staticClass:"file-upload",attrs:{"auto-upload":!1,"show-file-list":"",drag:"",action:"",accept:".fasta,.fa","on-success":A.onsuccess,"before-upload":A.beforeFASTAUpload,"on-exceed":A.handleExceed,multiple:!1,limit:1}},[C("i",{staticClass:"el-icon-upload"}),C("div",{staticClass:"el-upload__text"},[A._v("Drag files here，or "),C("em",[A._v("Click upload")])]),C("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[A._v("only FASTA/FA file ，and no more than 500KB")])])],1),C("el-divider",[C("i",{staticClass:"el-icon-more-outline"})]),C("el-form-item",{staticStyle:{"margin-bottom":"0.3em"},attrs:{label:"Data Type",required:"",prop:"dataType"}},[C("br"),C("el-radio-group",{model:{value:A.pFormModel.dataType,callback:function(T){A.$set(A.pFormModel,"dataType",T)},expression:"pFormModel.dataType"}},[C("el-radio",{attrs:{label:"peptides"}}),C("el-radio",{attrs:{label:"contigs"}})],1)],1),C("br"),C("el-form-item",{staticClass:"btns"},[C("el-button",{attrs:{type:"primary"},on:{click:function(T){return A.onSubmit("pFormRef")}}},[A._v("Submit")]),C("el-button",{attrs:{type:"danger"},on:{click:function(T){return A.resetForm("pFormRef")}}},[A._v("Clear Form")]),C("el-button",{attrs:{type:"info"},on:{click:function(T){return A.onExample("pFormRef")}}},[A._v("Example")])],1)],1)],1)]),C("div",{staticClass:"introducion"},[C("p",[A._v("Antimicrobial peptides (AMPs) are small proteins (10–100 amino acids) that can either cause lysis or generally interferre with cell growth.The rapid growth of antibiotic-resistant microorganisms in the last years became a world health problem. Thus, AMPs could represent a source of new antibiotic treatments. Recently, more and more genomic and metagenomic sequences have become publicly available. The Fast AMPs Classification System (FACS) is a pipeline that overcomes most of the problems associated to the prospection of AMPs in high throughput data sets analyzing diverse types of inputs (reads, contigs, protein sequences). The protein sequences predicted as AMPs by FACS are, usually, specific and accurate, what can reduce the cost of experiments.")]),C("p",[A._v("FACS uses machine learning to select peptides with high probability of being an AMP. Furthermore, FACS is also capable to perform the classification of AMPs into hemolytic and non-hemolytic peptides. This allows researchers to select the most interesting peptides for further testing "),C("i",[A._v("in vitro")]),A._v(".")]),C("p",[A._v("Peptides submitted to the FACS prediction should consist of 20 canonical amino acids and their length should range from 10 to 100 amino acids. Please avoid contigs containing non-canonical bases, such as N, R or Y.")]),C("p",[A._v("This prediction system will output a table containing the predicted AMP sequence, its probability to be an AMP and the family it belongs, as well as the predictions relative to the hemolytic activity.")])]),C("div",{staticClass:"glossary"},[C("h3",[A._v("Glossary:")]),C("ul",[C("li",[A._v("ALP - Anionic linear peptides")]),C("li",[A._v("ADP - Anionic dissulphide-bond forming peptides")]),C("li",[A._v("CLP - Cationic linear peptides")]),C("li",[A._v("CDP - Cationic dissulphide-bond forming peptides")]),C("li",[A._v("HEMO – Hemolytic peptide")]),C("li",[A._v("NonHEMO – Non-Hemolytic peptide")])])])]),C("el-col",{attrs:{span:2}},[C("div",{staticClass:"grid-content"})])],1)],1)},e=[],G=(C("baa5"),C("b0c0"),C("d3b7"),C("96cf"),{name:"Prediction",data:function(){return{pFormModel:{textData:"",dataType:""},fileList:[],pFormRules:{dataType:[{required:!0,message:"please select data type",trigger:"change"}]}}},methods:{onsuccess:function(A,T){},onSubmit:function(A){var T=this;this.$refs[A].validate((function(C){var t,e,G,n,r,o;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:if(C){i.next=2;break}return i.abrupt("return");case 2:return t=T.$refs[A].$el,e=new FormData(t),e.append("textData",T.pFormModel.textData),e.append("dataType",T.pFormModel.dataType),G={headers:{"Content-Type":"multipart/form-data"}},n=T.$loading({lock:!0,text:"Analyzing,please wait",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.5)"}),i.next=10,regeneratorRuntime.awrap(T.$http.post("/facs/prediction",e,G).then((function(A){200===A.status&&(r=A.data,console.log("submit success"))})).catch((function(){n.close(),T.$message.error({message:"The server is under maintenance,please try again later",duration:5e3})})));case 10:if(1===r.code){i.next=14;break}return n.close(),T.$message.error(r.msg),i.abrupt("return");case 14:o=JSON.stringify(r),window.sessionStorage.setItem("resultObjectStr",o),n.close(),T.$router.push({path:"/prediction/amps"});case 18:case"end":return i.stop()}}))}))},handleExceed:function(){this.$message.warning({message:"Only one file can be uploaded at a time",duration:5e3})},beforeFASTAUpload:function(A){var T=A.name.substring(A.name.lastIndexOf(".")+1),C="fasta"===T,t="fa"===T;return t||this.$message.error({message:"not FASTA/FA file!",duration:5e3}),C||t},resetForm:function(A){this.$refs["upload"].clearFiles(),this.$refs[A].resetFields()},onExample:function(A){var T=this;this.$refs[A].validate((function(A){if(A){var C=T.pFormModel.dataType;"peptides"===C&&(T.pFormModel.textData=">AP00002|AMP\nYVPLPNVPQPGRRPFPTFPGQGPFNPKIKWPQGY\n>AP00007|AMP\nGNNRPVYIPQPRPPHPRL\n>P20491|NAMP\nMISAVILFLLLLVEQAAALGEPQLCYILDAVLFLYGIVLTLLYCRLKIQVRKAAIASREKADAVYTGLNTRSQETYETLKHEKPPQ\n>P35109|NAMP\nMVDDPNKVWPTGLTIAESEELHKHVIDGSRIFVAIAIVAHFLAYVYSPWLH\n>P19962|NAMP\nDSDSAQNLIG"),"contigs"===C&&(T.pFormModel.textData=">scaffold2530_2_MH0058\nCTTCTGATCTTTACGCAGCATTGTGTGTTTCCACCTTTCAAAAAATTCTCCGTGAACTGC\nGCCCTGGGAGTGGTGAAATCCTCCGCGGAACGAAGTCCCGGAATTGCGCACAAATTCACG\nTGCTGAACAATTTTACCATAGGAATGTGCGGTTGTAAAGAGAAAAATGCAAAAAATTCCT\nTATTTTTATAAAAGGAGCGGGGAAAAGAGGCGGAAAATATTTTTTTGAAAGGGGATTGAC\nAGAGAGAAACGGCCGTGTTATCCTAACTGTACTAACACACATAGTACAGTTGGTACAGTT\nCGGAGGAACGTTATGAAGGTCATCAAGAAGGTAGTAGCCGCCCTGATGGTGCTGGGAGCA\nCTGGCGGCGCTGACGGTAGGCGTGGTTTTGAAGCCGGGCCGGAAAGGAGACGAAACATGA\nTGCTGTTTGGTTTTGCGGGGATCGCCGCCATCGTGGGTCTGATTTTTGCCGCTGTTGTTC\nTGGTGTCCGTGGCCTTGCAGCCCTGAGAACGGGGCAGATGCAATGAGTACGCTGTTTTTG\nCTTGGTATCGCAGGCGCGGTACTGCTGGTTATTTTGCTGACAGCGGTGATCCTGCACCGC\nTGATCGAACATTCCTCAGAAAGGAGAGGCACACGTTCTGACATTGAATTACCGGGATTCC\nCGTCCCATTTATGAACAGATCAAGGACGGCCTGCGGCGGATGATCGTCACCGGGGCC\n>scaffold75334_1_MH0058\nACAGCTTCCTCACCATCAACAGCCACTGCTACGATACCGGCAGGAACAGAGATTGTAGCG\nTTATCGGAAGTAAGAACGGTCTCAGCGATTACCTTACCCAAGATATTCGTGATAACTACA\nGACTTACCAGCTGCGCCTTGAACGGTTACGGTACCGTTACCGGCTACTACAGAGATACCT\nTCTACAGCATCGATTGTTTCGTTATCTGTTGCGATATCATCACCTTGCTCCACATTAAAG\nATCAAAGCATCGTCACCACCTGTATTCATCTCATCGAAATTAGAAGAACGATCATCAGAC\nAGAACTAAACAACCATTCTGCATTCTCAACCAAGCCGCATATGTAGGAGCGATGTCACCC\nATAGCAGAATTATTGTAACCAGGAACATGTTTACTCTTCATAGACTCGAACAAGAATGCT\nCTATCAGCTTCTACCTCATTAGCGGCAACTTCCTTGTTTACGAAACGCATAGACCAAGTC\nACATACTTATGGTTATCACCAGATAAGATATATTTGTGTGAAACAAATTCATCTTCAGAT\nACTCCAGCCTTCTTAGCCGCAGTCCAAGCATCCTCCTCAGCCTTGTTCAAATCAGCGAAG\nTTGATCTTCTCGTTCGGTAAGTTCTTGAACTCATCTCTCAAGATATACAAAGTATCAGCT\nACACGGATAGCTTCCACGAAACCTGCACGATCATATTTCTTCCACATGTAGTCAGCATCT\nTGCTCCCCATTTGATAATGTTGACCAACCACATTTATTAGCGAAATCATGGAAATTGATC\nAAATATTTACCTCTTTCAAAGCCCGGAACAGCCGGTTTTGCGTGAACGCAATGCCATTTA\nTCTGTCGGTTTACCTTCTGCGGTAAAGTGATGGTCATCTTCCGTACAAGGTACGCCTTCA\nACTCCTTCGAAATCGTTACGATCAATAGAGATCAAATATTGAGGCTTGATATTACCAGAA\nCCACGGTTTACCCATGCGGTATCAACGATGAATGACAAACCATCCTCAGTCTTATCCGGA\nGTATAAATACCTAAGAAGTCAATACCTTCTTTCATGAAGTTCTTATTATTCTCAACCTGC\nAAGTATTCTTTACGGTATTTCTCGATAAAACGTAAAGTATCGGCCTTGTCACCTTCATTA\nCCTTCAAGTTCAAGAGAACTGAAACGACGGTAAAGCGGAGTGTTGTCCGGTTCGATAGCG\nAAAGCAGAAGTACGAGTCTCGCCTAATACTTGATTCTTCAATGTAGCGGCACCGTCATAA\nTCGGATACTCCAGCTTTCTGATAACCTAATACATATTTTGTAGCATTAGAATAATTATCA\nTATGCAGCATTAACAATCGCATAATAGTGCTTTCCACTGATATAGTTGTTTTCTTTGAAG\nAATGCATAATAAGTCGTATAAGATTGCTGATGACCAGTAGCACTAGAACCTACATTAAAC\nTTATCTTCCTTATTAACTTTCCATTCATTAAGTTCACCTTTACCATCTTTATAAGAAACC\nTCATAAGCAGTTCTCACTAGAGTCTTCAAGCCTTTAATACGATTCTTAGCCACATCATCG\nCTAACCTTATAACCGTAAGGGATATCTACAGTCGCAAATATCTTTGAGTTATTATTCCAA\nCGCTCAGTCAATGTATCAATTACGAAAGCATCTTTTCCATCCAACACAGTCAACGTAGAG\nTCTGTAGATTTAGCGATGTATTTATCCGTAGCATAAGGATGCCAATAGTTAAACGTATAT\nTTGTTAACCAACAAAGAATCTTTCTCCAACTTTCTGTAACCTAAATACGGATCAGAAATA\nGAAGCTGCCGGAACTTTCTCGAAGAACAAAGAATCTATACCGACAGAGCCATACTCCGCT\nGTAAGTTTATCTCCATATACAAACATATAAGAACCACCCTCTGCCTTTCTTAACTGAACA\nGTAGAATAAACAGCAGTCTTATATGACTCCATCTGGCCATCACCATCAAAATCCGCATTT\nATAACTTTATCTGCGAATTCACGGTTAGAGATAGTAACCGGAGACACAGCCTTCACTTTA\nTCATTACTTGTATTTTTCTTCAATACAACCCATTGATAAGCTGGCATATGAGCAACACTC\nTGCTCATCCTCATTCACGGTTGTCCAACGGATAGTACCATTCTCATAGATAGGAGAAGCT\nAAATACTGTCCTTGTTTATTCTTGATGAAATAAACACCATCATCAACGGAAGTCTTGGAA\nGAACCCTTTTCCTCACATCCGCTAAGACCCAAAGAAATATGAGTGTTCTGGTCCTCCGGA\nTCAACTGTCAAAATACAAGTTTCATCTTTAATCAAGTCTTGCAAAGAGACACGCCAGAAC\nTCATGCTCGTTAACTGGAGTAGCCGTAACGTGCGTATTCCAATACTTGCCATCATTATTC\nCAAGTAACTTTTTTTACATAGATGTATAAGCTATCGCCACTCGGAGAATAGATGAATTTG\nAACTGATGTTGAGCACGTAATTCAGAGCTAATAGAACTGTAAGCATCAGCTTTATCCTTT\nGCTTTCTCTGTCCAACCGTAAGCTAAGAACTTTGTACCTGTCTCATTCGTATAAGCCGTA\nTCAACTTTCAAATAAGCGTCTTTATCCTTTTGCTTGATGAAAAGCCATTTGTTATTATCT\nTTATCCTCTGCGATAAACTTCTGCTCATTGAACGGATTCTTTAAGCTAGTACCTTTCACG\nTCCGGAGTGAAAGTCAATTGTACTCCAGCCTTGTTATCTTGAAGAAGACCCAACTTCGTA\nTTTACTTGATCTTCGCTCAATGCGATTTGTGCTGCGCCAACCAAAGCAAAGTTAGTCACA\nTCAGCGGCGTTTGAAGTGGCATCTATTTGATTAGCACCCCACTTGGCAACCTTAACAGCT\nCCGGTAGTAGGATCCGCTTTCAAACCAACAATTGAGTCCGTTGAGAAATAAGAATACAAA\nGGTCTCTTTTCTTCCAAATCCTTGTATGAGCGAGAGAATGCCCAACCTGCGATCTCACCA\nCCTAAAACAGGTTTCCAAGCACCATTCGTACCATTCTCAGTCTTCTCATGGCCAGCCATT\nGTCAAATCCAACATAGTTCCAGACAATTTATTCTGGAAGTCATAAATAGGAGCTTGACCT\nTGATTATAATTAGAGACAGAAACACACCACAATGTAGCCTCTAAGTTATTTTTAGCTTCG\nCTTGCACTATAAACACGTAGTTCATAATCACCTGTTCCACGATTTAGCTCCATCGCAAGA\nTAAGCAGGAGTAGTGCCATCCATGACCTTCAACTGATAAAGACCAGAATTAGCTCCCTCC\nTTCAAACCGCCTAAACGCCATTCTTGACCCAATACAGTTTCTGGGTCTACTCGACTTGGT\nGTAGTCTGTGCATTAACAGACATAACACTTAACAGTGCCATACCTGCCAAAAGAGTAGAA\nAACT")}}))}}}),n=G,r=(C("5e0f"),C("2877")),o=Object(r["a"])(n,t,e,!1,null,"ea7eaf42",null);T["default"]=o.exports}}]);
//# sourceMappingURL=chunk-b6e95976.43ba0393.js.map