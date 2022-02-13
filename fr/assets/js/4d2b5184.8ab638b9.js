"use strict";(self.webpackChunkpsyoptions_docs=self.webpackChunkpsyoptions_docs||[]).push([[929],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return N}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=m(n),N=r,u=s["".concat(d,".").concat(N)]||s[N]||k[N]||i;return n?a.createElement(u,p(p({ref:t},o),{},{components:n})):a.createElement(u,p({ref:t},o))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4295:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var a=n(8782),r=n(1251),i=(n(7294),n(3905)),p={id:"serumUtils",title:"Namespace: serumUtils",sidebar_label:"serumUtils",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"javascript-api/namespaces/serumUtils",id:"javascript-api/namespaces/serumUtils",isDocsHomePage:!1,title:"Namespace: serumUtils",description:"Functions",source:"@site/docs/javascript-api/namespaces/serumUtils.md",sourceDirName:"javascript-api/namespaces",slug:"/javascript-api/namespaces/serumUtils",permalink:"/fr/javascript-api/namespaces/serumUtils",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"serumUtils",title:"Namespace: serumUtils",sidebar_label:"serumUtils",sidebar_position:0,custom_edit_url:null},sidebar:"someSidebar",previous:{title:"serumInstructions",permalink:"/fr/javascript-api/namespaces/serumInstructions"},next:{title:"ClusterName",permalink:"/fr/javascript-api/enums/ClusterName"}},m=[{value:"Functions",id:"functions",children:[{value:"deriveCoinVault",id:"derivecoinvault",children:[]},{value:"deriveMarketAuthority",id:"derivemarketauthority",children:[]},{value:"derivePCVault",id:"derivepcvault",children:[]},{value:"deriveRequestQueue",id:"deriverequestqueue",children:[]},{value:"deriveSerumMarketAddress",id:"deriveserummarketaddress",children:[]},{value:"findOpenOrdersAccountsForOwner",id:"findopenordersaccountsforowner",children:[]},{value:"findOpenOrdersForOptionMarkets",id:"findopenordersforoptionmarkets",children:[]},{value:"getMarketAndAuthorityInfo",id:"getmarketandauthorityinfo",children:[]}]}],o={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"derivecoinvault"},"deriveCoinVault"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"deriveCoinVault"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"priceCurrencyKey"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"priceCurrencyKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumUtils.ts#L201"},"serumUtils.ts:201")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"derivemarketauthority"},"deriveMarketAuthority"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"deriveMarketAuthority"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketKey"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]",">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumUtils.ts#L177"},"serumUtils.ts:177")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"derivepcvault"},"derivePCVault"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"derivePCVault"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"priceCurrencyKey"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"priceCurrencyKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumUtils.ts#L215"},"serumUtils.ts:215")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deriverequestqueue"},"deriveRequestQueue"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"deriveRequestQueue"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"priceCurrencyKey"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]",">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"priceCurrencyKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]",">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumUtils.ts#L187"},"serumUtils.ts:187")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deriveserummarketaddress"},"deriveSerumMarketAddress"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"deriveSerumMarketAddress"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"priceCurrencyKey"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]",">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"priceCurrencyKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]",">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumUtils.ts#L162"},"serumUtils.ts:162")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"findopenordersaccountsforowner"},"findOpenOrdersAccountsForOwner"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"findOpenOrdersAccountsForOwner"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumMarketAddress"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"OpenOrders"),"[]",">"),(0,i.kt)("p",null,"Load the open orders for a user based on the Serum DEX and Serum Market\naddress."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Psy American program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Serum DEX program id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Serum market address")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"OpenOrders"),"[]",">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumUtils.ts#L19"},"serumUtils.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"findopenordersforoptionmarkets"},"findOpenOrdersForOptionMarkets"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"findOpenOrdersForOptionMarkets"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serumProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKeys"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"priceCurrencyKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMetaList?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenOrders"),">",">"),(0,i.kt)("p",null,"Load all the open orders for a user based on the Serum DEX and the option market keys."),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anchor Psy American program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serumProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Serum DEX program id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKeys")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Keys for the Psy American OptionMarket's to load the open orders from")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"priceCurrencyKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Key of the pc (aka quote currency) from the serum markets")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMetaList?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"expiration"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"optionContractMintAddress"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketAddress"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"optionWriterTokenMintAddress"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"psyOptionsProgramId"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"quoteAssetMint"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"quoteAssetPerContract"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"quoteAssetPoolAddress"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"serumMarketAddress"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"serumProgramId"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"underlyingAssetMint"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"underlyingAssetPerContract"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"underlyingAssetPoolAddress"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"  }[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional list of option meta data to pull serum market data from instead of deriving the address. This is for backwards compatibility")))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenOrders"),">",">"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumUtils.ts#L74"},"serumUtils.ts:74")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getmarketandauthorityinfo"},"getMarketAndAuthorityInfo"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"getMarketAndAuthorityInfo"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"program"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionMarketKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dexProgramId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"priceCurrencyKey"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,i.kt)("p",null,"Given an OptionMarket address and DEX program, generate the Serum market key,\nmarket authority, and authority bump seed."),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"program")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Program"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#psyamerican"},(0,i.kt)("inlineCode",{parentName:"a"},"PsyAmerican")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"PsyOptions American V1 Anchor program")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optionMarketKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The key for the OptionMarket")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dexProgramId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Serum DEX public key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"priceCurrencyKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mithraiclabs/psyoptions-ts/blob/78e7276/packages/psy-american/src/serumUtils.ts#L237"},"serumUtils.ts:237")))}k.isMDXComponent=!0}}]);