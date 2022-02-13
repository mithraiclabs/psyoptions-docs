"use strict";(self.webpackChunkpsyoptions_docs=self.webpackChunkpsyoptions_docs||[]).push([[778],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return N}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=m(a),N=r,u=s["".concat(d,".").concat(N)]||s[N]||k[N]||i;return a?n.createElement(u,l(l({ref:t},o),{},{components:a})):n.createElement(u,l({ref:t},o))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7386:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var n=a(8782),r=a(1251),i=(a(7294),a(3905)),l={id:"serumInstructions",title:"Namespace: serumInstructions",sidebar_label:"serumInstructions",sidebar_position:0,custom_edit_url:null},p=void 0,d={unversionedId:"javascript-api/namespaces/serumInstructions",id:"javascript-api/namespaces/serumInstructions",isDocsHomePage:!1,title:"Namespace: serumInstructions",description:"Classes",source:"@site/docs/javascript-api/namespaces/serumInstructions.md",sourceDirName:"javascript-api/namespaces",slug:"/javascript-api/namespaces/serumInstructions",permalink:"/javascript-api/namespaces/serumInstructions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"serumInstructions",title:"Namespace: serumInstructions",sidebar_label:"serumInstructions",sidebar_position:0,custom_edit_url:null},sidebar:"someSidebar",previous:{title:"instructions",permalink:"/javascript-api/namespaces/instructions"},next:{title:"serumUtils",permalink:"/javascript-api/namespaces/serumUtils"}},m=[{value:"Classes",id:"classes",children:[]},{value:"Functions",id:"functions",children:[{value:"cancelAllOpenOrders",id:"cancelallopenorders",children:[]},{value:"cancelOrderByClientId",id:"cancelorderbyclientid",children:[]},{value:"cancelOrderInstructionV2",id:"cancelorderinstructionv2",children:[]},{value:"closeOpenOrdersInstruction",id:"closeopenordersinstruction",children:[]},{value:"initOpenOrdersInstruction",id:"initopenordersinstruction",children:[]},{value:"marketLoader",id:"marketloader",children:[]},{value:"newOrderInstruction",id:"neworderinstruction",children:[]},{value:"settleFundsInstruction",id:"settlefundsinstruction",children:[]},{value:"settleMarketFundsInstruction",id:"settlemarketfundsinstruction",children:[]}]}],o={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../classes/serumInstructions.Validation"},"Validation"))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"cancelallopenorders"},"cancelAllOpenOrders"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"cancelAllOpenOrders"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketKey"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),"[]",">"),(0,i.kt)("p",null,"Create an array of TransactionInstructions to cancel all of the wallet's orders for a given\nOptionMarket and SerumMarket."),(0,i.kt)("p",null,"NOTE: Current implementation does not account for Transaction packet size limitations. It\nis on the client to slice the instructions to be within the limits."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Program for Psy American")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address of the OptionMarket for the option in the Seurm Market")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The PublicKey of the DEX program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The PublicKey of the Serum market")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),"[]",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumInstructions/cancelOrder.ts#L109"},"serumInstructions/cancelOrder.ts:109")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cancelorderbyclientid"},"cancelOrderByClientId"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"cancelOrderByClientId"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"order"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketAuthorityBump?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("p",null,"Generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction")," for canceling an open order by the set clientId"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Program for Psy American")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address of the OptionMarket for the option in the Seurm Market")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The PublicKey of the DEX program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The PublicKey of the Serum market")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"order")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Order")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum Order to cancel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketAuthorityBump")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional: bump seed for the Serum market")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumInstructions/cancelOrder.ts#L63"},"serumInstructions/cancelOrder.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cancelorderinstructionv2"},"cancelOrderInstructionV2"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"cancelOrderInstructionV2"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"order"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketAuthorityBump?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("p",null,"Create a TransactionInstruction for canceling a specific ",(0,i.kt)("em",{parentName:"p"},"order")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Program for Psy American")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address of the OptionMarket for the option in the Seurm Market")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The PublicKey of the DEX program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The PublicKey of the Serum market")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"order")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Order")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum Order to cancel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketAuthorityBump")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional: bump seed for the Serum market")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumInstructions/cancelOrder.ts#L22"},"serumInstructions/cancelOrder.ts:22")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"closeopenordersinstruction"},"closeOpenOrdersInstruction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"closeOpenOrdersInstruction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"openOrdersKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketAuthorityBump"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"solWallet?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("p",null,"Create instruction to close OpenOrders account."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Psy American Program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The OptionMarket address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum DEX program ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum market address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"openOrdersKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The open orders key for the account we're closing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketAuthorityBump")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"OPTIONAL: pass in the market authority bump seed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"solWallet?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"OPTIONAL: pass in a different address to send the unlocked Sol to")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumInstructions/closeOpenOrders.ts#L19"},"serumInstructions/closeOpenOrders.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initopenordersinstruction"},"initOpenOrdersInstruction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"initOpenOrdersInstruction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"owner"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketAuthorityBump?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,i.kt)("p",null,"Create a proxied InitOpenOrdersInstruction"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Psy American program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"owner")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The user's wallet address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The OptionMarket address key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Serum DEX id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum market address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketAuthorityBump")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"OPTIONAL: pass in the market authority bump seed")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumInstructions/initOpenOrders.ts#L18"},"serumInstructions/initOpenOrders.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"marketloader"},"marketLoader"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"marketLoader"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketAuthorityBump"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"MarketProxy"),">"),(0,i.kt)("p",null,"Create a MarketProxy for the Psy American V 1.1 program"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Psy American program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The OptionMarket address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketAuthorityBump")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The marketAuthority bump seed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum DEX program id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum market address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.enableLogger")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"MarketProxy"),">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumInstructions/marketLoader.ts#L16"},"serumInstructions/marketLoader.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"neworderinstruction"},"newOrderInstruction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"newOrderInstruction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"orderArguments"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketAuthorityBump?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,i.kt)("p",null,"Create a new order proxied through the Psy American Protocol"),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Psy American program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The OptionMarket address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum DEX program ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum market address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"orderArguments")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules#orderparamswithfeerate"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderParamsWithFeeRate")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum OrderParams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketAuthorityBump")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"OPTIONAL: pass in the market authority bump seed")))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumInstructions/newOrder.ts#L22"},"serumInstructions/newOrder.ts:22")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"settlefundsinstruction"},"settleFundsInstruction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"settleFundsInstruction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"baseWallet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"quoteWallet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumReferralKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"openOrdersKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"marketAuthorityBump?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("p",null,"Create a TransactionInstruction for the settleFunds instruction"),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Psy American Program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The OptionMarket address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum DEX program ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum market address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"baseWallet")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The wallet address that contains the user's base asset tokens")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"quoteWallet")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The wallet address that contains the user's quote asset tokens")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumReferralKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Psy American referral address for the quote asset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"openOrdersKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The open orders keys")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"marketAuthorityBump")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"OPTIONAL: pass in the market authority bump seed")))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumInstructions/settleFunds.ts#L24"},"serumInstructions/settleFunds.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"settlemarketfundsinstruction"},"settleMarketFundsInstruction"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"settleMarketFundsInstruction"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarket"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"baseWallet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"quoteWallet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"openOrdersKey"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("p",null,"Create a TransactionInstruction for the settleFunds instruction"),(0,i.kt)("p",null,"Note: this API abstracts the complexity of the serumReferralKey away."),(0,i.kt)("h4",{id:"parameters-8"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Psy American Program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The OptionMarket address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum DEX program ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarket")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Market")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Serum market")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"baseWallet")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The wallet address that contains the user's base asset tokens")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"quoteWallet")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The wallet address that contains the user's quote asset tokens")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"openOrdersKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The open orders keys")))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionInstruction"),">"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumInstructions/settleFunds.ts#L74"},"serumInstructions/settleFunds.ts:74")))}k.isMDXComponent=!0}}]);