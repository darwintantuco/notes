(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7Lfq":function(e,t,r){},HQEm:function(e,t,r){"use strict";var n;r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(n=r("Sj0X"))&&n.__esModule?n:{default:n};t.default=o,e.exports=o},HbLn:function(e,t,r){},QCBq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ye})),r.d(t,"pageQuery",(function(){return me}));r("SchZ"),r("wONA"),r("2WkQ"),r("7Lfq"),r("HbLn"),r("bWfx"),r("8+KV"),r("Oyvg"),r("pIFo"),r("yt8O"),r("RW0V"),r("V+eJ"),r("I5cv"),r("/SS/"),r("hHhE"),r("LK8F"),r("rGqo"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("h7Nl"),r("Btvt"),r("HAE/"),r("91GP"),r("rE2o"),r("ioFf");var n=r("q1tI"),o=r.n(n),a=r("TSYQ"),c=r.n(a),i=r("Zm9Q"),u=r("BGR+"),l=r("HQEm"),f=r.n(l),p=r("uciX"),s={adjustX:1,adjustY:1},y=[0,0],m={topLeft:{points:["bl","tl"],overflow:s,offset:[0,-4],targetOffset:y},topCenter:{points:["bc","tc"],overflow:s,offset:[0,-4],targetOffset:y},topRight:{points:["br","tr"],overflow:s,offset:[0,-4],targetOffset:y},bottomLeft:{points:["tl","bl"],overflow:s,offset:[0,4],targetOffset:y},bottomCenter:{points:["tc","bc"],overflow:s,offset:[0,4],targetOffset:y},bottomRight:{points:["tr","br"],overflow:s,offset:[0,4],targetOffset:y}};function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var v=n.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"rc-dropdown":r,a=e.transitionName,i=e.animation,u=e.align,l=e.placement,f=void 0===l?"bottomLeft":l,s=e.placements,y=void 0===s?m:s,v=e.getPopupContainer,h=e.showAction,O=e.hideAction,g=e.overlayClassName,w=e.overlayStyle,j=e.visible,P=e.trigger,E=void 0===P?["hover"]:P,S=d(e,["prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),_=b(n.useState(),2),C=_[0],R=_[1],N="visible"in e?j:C,x=n.useRef(null);n.useImperativeHandle(t,(function(){return x.current}));var A,k,B,T,D,I,M=function(){var t=e.overlay;return"function"==typeof t?t():t},L=function(t){var r=e.onOverlayClick,n=M().props;R(!1),r&&r(t),n.onClick&&n.onClick(t)},H=function(){var e=M(),t={prefixCls:"".concat(o,"-menu"),onClick:L};return"string"==typeof e.type&&delete t.prefixCls,n.cloneElement(e,t)},X=O;return X||-1===E.indexOf("contextMenu")||(X=["click"]),n.createElement(p.a,Object.assign({},S,{prefixCls:o,ref:x,popupClassName:g,popupStyle:w,builtinPlacements:y,action:E,showAction:h,hideAction:X||[],popupPlacement:f,popupAlign:u,popupTransitionName:a,popupAnimation:i,popupVisible:N,stretch:(D=e.minOverlayWidthMatchTrigger,I=e.alignPoint,("minOverlayWidthMatchTrigger"in e?D:!I)?"minWidth":""),popup:"function"==typeof e.overlay?H:H(),onPopupVisibleChange:function(t){var r=e.onVisibleChange;R(t),"function"==typeof r&&r(t)},getPopupContainer:v}),(k=e.children,B=k.props?k.props:{},T=c()(B.className,void 0!==(A=e.openClassName)?A:"".concat(o,"-open")),C&&k?n.cloneElement(k,{className:T}):k))})),h=r("fEPi"),O=r.n(h),g=r("H84U"),w=r("6CfX");function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]}("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight");var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,r,o,a,i=(t=u,function(){var e,r=x(t);if(N()){var n=x(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return R(this,e)});function u(){var e;return S(this,u),(e=i.apply(this,arguments)).renderOverlay=function(t){var r,o=e.props.overlay;r="function"==typeof o?o():o;var a=(r=n.Children.only(r)).props;Object(w.a)(!a.mode||"vertical"===a.mode,"Dropdown",'mode="'.concat(a.mode,"\" is not supported for Dropdown's Menu."));var c=a.selectable,i=void 0!==c&&c,u=a.focusable,l=void 0===u||u,f=n.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},n.createElement(O.a,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"==typeof r.type?o:n.cloneElement(r,{mode:"vertical",selectable:i,focusable:l,expandIcon:f})},e.renderDropDown=function(t){var r,o=t.getPopupContainer,a=t.getPrefixCls,i=t.direction,u=e.props,l=u.prefixCls,f=u.children,p=u.trigger,s=u.disabled,y=u.getPopupContainer,m=u.overlayClassName,b=a("dropdown",l),d=n.Children.only(f),h=n.cloneElement(d,{className:c()(d.props.className,"".concat(b,"-trigger"),E({},"".concat(b,"-rtl"),"rtl"===i)),disabled:s}),O=c()(m,E({},"".concat(b,"-rtl"),"rtl"===i)),g=s?[]:p;return g&&-1!==g.indexOf("contextMenu")&&(r=!0),n.createElement(v,P({alignPoint:r},e.props,{overlayClassName:O,prefixCls:b,getPopupContainer:y||o,transitionName:e.getTransitionName(),trigger:g,overlay:function(){return e.renderOverlay(b)},placement:e.getPlacement(i)}),h)},e}return r=u,(o=[{key:"getTransitionName",value:function(){var e=this.props,t=e.placement,r=void 0===t?"":t,n=e.transitionName;return void 0!==n?n:r.indexOf("top")>=0?"slide-down":"slide-up"}},{key:"getPlacement",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ltr",t=this.props.placement;return void 0!==t?t:"rtl"===e?"bottomRight":"bottomLeft"}},{key:"render",value:function(){return n.createElement(g.a,null,this.renderDropDown)}}])&&_(r.prototype,o),a&&_(r,a),u}(n.Component);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}A.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var X=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(i,e);var t,r,o,a,c=(t=i,function(){var e,r=H(t);if(L()){var n=H(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return M(this,e)});function i(){var e;return T(this,i),(e=c.apply(this,arguments)).renderBreadcrumbItem=function(t){var r,o=t.getPrefixCls,a=e.props,c=a.prefixCls,i=a.separator,l=a.children,f=X(a,["prefixCls","separator","children"]),p=o("breadcrumb",c);return r="href"in e.props?n.createElement("a",B({className:"".concat(p,"-link")},Object(u.a)(f,["overlay"])),l):n.createElement("span",B({className:"".concat(p,"-link")},Object(u.a)(f,["overlay"])),l),r=e.renderBreadcrumbNode(r,p),l?n.createElement("span",null,r,i&&""!==i&&n.createElement("span",{className:"".concat(p,"-separator")},i)):null},e.renderBreadcrumbNode=function(t,r){var o=e.props,a=o.overlay,c=o.dropdownProps;return a?n.createElement(A,B({overlay:a,placement:"bottomCenter"},c),n.createElement("span",{className:"".concat(r,"-overlay-link")},t,n.createElement(f.a,null))):t},e}return r=i,(o=[{key:"render",value:function(){return n.createElement(g.a,null,this.renderBreadcrumbItem)}}])&&D(r.prototype,o),a&&D(r,a),i}(n.Component);Q.__ANT_BREADCRUMB_ITEM=!0,Q.defaultProps={separator:"/"};var W=r("BvKs");function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function V(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ee=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function te(e,t,r,o){var a=r.indexOf(e)===r.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var r=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),(function(e,r){return t[r]||e}))}(e,t);return a?n.createElement("span",null,c):n.createElement("a",{href:"#/".concat(o.join("/"))},c)}var re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(f,e);var t,r,o,a,l=(t=f,function(){var e,r=$(t);if(Z()){var n=$(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return Y(this,e)});function f(){var e;return K(this,f),(e=l.apply(this,arguments)).getPath=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(r){e=e.replace(":".concat(r),t[r])})),e},e.addChildPath=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,o=V(t),a=e.getPath(r,n);return a&&o.push(a),o},e.genForRoutes=function(t){var r=t.routes,o=void 0===r?[]:r,a=t.params,c=void 0===a?{}:a,i=t.separator,u=t.itemRender,l=void 0===u?te:u,f=[];return o.map((function(t){var r,a=e.getPath(t.path,c);return a&&f.push(a),t.children&&t.children.length&&(r=n.createElement(W.a,null,t.children.map((function(t){return n.createElement(W.a.Item,{key:t.path||t.breadcrumbName},l(t,c,o,e.addChildPath(f,t.path,c)))})))),n.createElement(Q,{overlay:r,separator:i,key:a||t.breadcrumbName},l(t,c,o,f))}))},e.renderBreadcrumb=function(t){var r,o=t.getPrefixCls,a=t.direction,l=e.props,f=l.prefixCls,p=l.separator,s=l.style,y=l.className,m=l.routes,b=l.children,d=ee(l,["prefixCls","separator","style","className","routes","children"]),v=o("breadcrumb",f);m&&m.length>0?r=e.genForRoutes(e.props):b&&(r=Object(i.a)(b).map((function(e,t){return e?(Object(w.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),n.cloneElement(e,{separator:p,key:t})):e})));var h=c()(y,v,U({},"".concat(v,"-rtl"),"rtl"===a));return n.createElement("div",F({className:h,style:s},Object(u.a)(d,["itemRender","linkRender","nameRender","params"])),r)},e}return r=f,(o=[{key:"render",value:function(){return n.createElement(g.a,null,this.renderBreadcrumb)}}])&&J(r.prototype,o),a&&J(r,a),f}(n.Component);function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ae(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t){return!t||"object"!==ne(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ue(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}re.defaultProps={separator:"/"};var fe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(i,e);var t,r,o,a,c=(t=i,function(){var e,r=le(t);if(ue()){var n=le(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return ie(this,e)});function i(){var e;return oe(this,i),(e=c.apply(this,arguments)).renderSeparator=function(t){var r=t.getPrefixCls,o=e.props.children,a=r("breadcrumb");return n.createElement("span",{className:"".concat(a,"-separator")},o||"/")},e}return r=i,(o=[{key:"render",value:function(){return n.createElement(g.a,null,this.renderSeparator)}}])&&ae(r.prototype,o),a&&ae(r,a),i}(n.Component);fe.__ANT_BREADCRUMB_SEPARATOR=!0,re.Item=Q,re.Separator=fe;var pe=re,se=(r("M7k7"),r("Ol7k"));function ye(e){var t=e.data.markdownRemark,r=t.frontmatter,n=t.html,a=se.a.Content;return o.a.createElement(o.a.Fragment,null,o.a.createElement(a,{className:"mt-4 mb-4 ml-6 mr-6 site-layout-background"},o.a.createElement("h2",{className:"font-normal"},o.a.createElement(pe,{style:{fontSize:"1.5rem",marginBottom:"24px"}},o.a.createElement(pe.Item,null,r.category),o.a.createElement(pe.Item,null,r.title))),o.a.createElement("div",{style:{width:"fit-content"},className:"markdown-body",dangerouslySetInnerHTML:{__html:n}})))}var me="3664976503"},Sj0X:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("HAE/"),r("rE2o"),r("ioFf"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=o?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=i(r("XuBP")),c=i(r("KQxl"));function i(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var l=function(e,t){return o.createElement(c.default,Object.assign({},e,{ref:t,icon:a.default}))};l.displayName="DownOutlined";var f=o.forwardRef(l);t.default=f},XuBP:function(e,t,r){"use strict";r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},wONA:function(e,t,r){}}]);
//# sourceMappingURL=component---src-templates-note-template-tsx-db95dba15b26d0f9975f.js.map