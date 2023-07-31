(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],Array(39).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(32),s=c.n(a),r=c(6),i=c(5),o=c.n(i),l=c(11),u=c(10),j=c(9),d=c(3),b=c(4),m=Object(n.createContext)({favorites:[],cart:[],toggleToFavorites:function(){},toggleToCart:function(){},isProductSelected:function(){return!1},updateCountInCart:function(){}}),O=m.Provider;function h(e){return fetch("https://mate-academy.github.io/react_phone-catalog/_new/"+e).then((function(e){if(!e.ok)throw new Error("Can not load data from server");return e.json()}))}var p=function(){return h("/products.json")},f=function(e){return h("/products/".concat(e,".json"))},x=function(e){return p().then((function(t){return t.filter((function(t){return t.category===e}))}))},_=function(e,t){var c=Object(n.useState)((function(){try{var c=localStorage.getItem(e);return c?JSON.parse(c):t}catch(n){return t}})),a=Object(d.a)(c,2),s=a[0],r=a[1];return[s,function(t){r(t),localStorage.setItem(e,JSON.stringify(t))}]};function v(){var e=Object(b.l)().pathname;return Object(n.useEffect)((function(){!function(e){var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}("header")}),[e]),null}var g=c(7),N=c.n(g),y=c(0),C=function(e){var t=e.to,c=e.text;return Object(y.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return N()("nav__item",{selected:t})},children:c})};function S(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()}c(39);var w,k,P=function(){var e=Object(b.l)().pathname,t=Object(r.d)(),c=Object(d.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),o=Object(d.a)(i,2),l=o[0],u=o[1],j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,c=Object(n.useState)(e),a=Object(d.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){var c=setTimeout((function(){r(e)}),t);return function(){clearTimeout(c)}}),[e,t]),s}(l,500)||null,m=e.substring(1),O=0===l.length,h=Object(n.useState)(!1),p=Object(d.a)(h,2),f=p[0],x=p[1];Object(n.useEffect)((function(){s(S(a,{query:j}))}),[j]);var _=function(){u(""),s(S(a,{query:null})),x(!1)};Object(n.useEffect)((function(){_()}),[e]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:N()("search-bar",{"search-bar_opened":f}),children:[Object(y.jsx)("input",{type:"text",placeholder:"Search in ".concat(m),value:l,onChange:function(e){u(e.target.value)},className:"search-bar__input"}),Object(y.jsx)("button",{"data-cy":"searchDelete",type:"button",className:N()("search-bar__button",O?"search-bar__button_search":"search-bar__button_close"),onClick:_})]}),Object(y.jsx)("button",{type:"button",className:"search-bar__icon",onClick:function(){x(!f)}})]})};!function(e){e.Home="/",e.Phones="/phones",e.Tablets="/tablets",e.Accessories="/accessories"}(w||(w={})),function(e){e.Home="/",e.Phones="/phones",e.Tablets="/tablets",e.Accessories="/accessories",e.Favorites="/favorites",e.Cart="/cart"}(k||(k={}));c(40);var I,T,A=function(e){var t=e.count,c=e.link,n=e.iconName;return Object(y.jsxs)(r.c,{to:c,className:function(e){var t=e.isActive;return N()("icon",{selected:t})},children:[Object(y.jsx)("div",{className:"icon__img icon__img_".concat(n)}),t>0&&Object(y.jsx)("div",{className:"icon__count",children:Object(y.jsx)("span",{className:"icon__text",children:t})})]})},E=(c(41),function(e){return"Home"===e?"/":e.toLowerCase()}),F=function(){var e=Object(n.useContext)(m),t=e.favorites,c=e.cart,a=Object(b.l)().pathname,s=Object(n.useState)(!1),i=Object(d.a)(s,2),o=i[0],l=i[1],u=a.substring(1),j=Object.keys(w).some((function(e){return e.toLowerCase()===u}));Object(n.useEffect)((function(){l(!1)}),[a]);var O=function(){l(!o)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{id:"header",className:"header",children:[Object(y.jsxs)("div",{className:"header__content",children:[Object(y.jsx)(r.b,{to:k.Home,className:"header__logo"}),Object(y.jsx)("div",{className:"nav",children:Object.keys(w).map((function(e){return Object(y.jsx)(C,{text:e,to:E(e)},e)}))})]}),Object(y.jsxs)("div",{className:"header__container",children:[j&&Object(y.jsx)(P,{}),Object(y.jsx)(A,{link:k.Favorites,count:t.length,iconName:"favorites"}),Object(y.jsx)(A,{link:k.Cart,count:c.length,iconName:"cart"}),Object(y.jsx)("button",{type:"button",className:"header__menu-open-button",onClick:O})]})]}),Object(y.jsxs)("nav",{className:N()("header__menu",{header__menu_opened:o}),children:[Object(y.jsxs)("div",{className:"header__box",children:[Object(y.jsx)(r.b,{to:k.Home,className:"header__logo"}),Object(y.jsx)("button",{type:"button",className:"header__menu-open-button",onClick:O})]}),Object(y.jsx)("div",{className:"nav",children:Object.keys(w).map((function(e){return Object(y.jsx)(C,{text:e,to:E(e)},e)}))}),Object(y.jsxs)("div",{className:"header__container",children:[Object(y.jsx)(A,{link:k.Favorites,count:t.length,iconName:"favorites"}),Object(y.jsx)(A,{link:k.Cart,count:c.length,iconName:"cart"})]})]})]})},L=(c(42),function(e){var t=e.number,c=void 0===t?0:t;return Object(y.jsx)("p",{className:"models",children:"".concat(c," models")})}),M=(c(43),function(e){var t=e.category,c=t.id,n=t.title,a=t.name,s=t.itemCount;return Object(y.jsxs)(r.b,{to:"/".concat(a),className:"category-card",children:[Object(y.jsx)("div",{className:"category-card__image-container",children:Object(y.jsx)("img",{alt:a,className:"category-card__img",src:"./img/categories/".concat(a,".png")})}),Object(y.jsx)("h1",{className:"category-card__title",children:n}),Object(y.jsx)(L,{number:s})]},c)}),D=(c(44),function(e){var t=e.productsCounter,c=[{id:1,title:"Mobile phones"},{id:2,title:"Tablets"},{id:3,title:"Accessories"}].map((function(e){var c,n="Mobile phones"===(c=e.title)?"phones":c.toLowerCase();return Object(l.a)(Object(l.a)({},e),{},{name:n,itemCount:t[n]})}));return Object(y.jsx)("ul",{className:"product-category",children:c.map((function(e){return Object(y.jsx)(M,{"data-cy":"categoryLinksContainer",category:e},e.name)}))})});!function(e){e.Newest="newest",e.Alphabetically="alphabetically",e.Cheapest="cheapest",e.Expensive="expensive",e.Year="year",e.MaxDiscount="maxDiscount",e.HotPrice="hotprice",e.Random="random"}(I||(I={})),function(e){e.Newest="newest",e.Alphabetically="alphabetically",e.Cheapest="cheapest",e.Expensive="expensive"}(T||(T={}));var H=c(26),B=c.n(H),R=(c(60),function(e){var t=e.discountPrice,c=e.regularPrice;return Object(y.jsx)("div",{className:"price",children:Object(y.jsxs)("div",{className:"price__container",children:[Object(y.jsx)("p",{className:"price__text price__text_bold",children:"$".concat(t)}),Object(y.jsx)("p",{className:"price__text price__text_discount",children:"$".concat(c)})]})})}),V=(c(61),function(e){var t=e.properties;return Object(y.jsx)("div",{className:"properties",children:Object.keys(t).map((function(e){return Object(y.jsxs)("div",{className:"properties__item",children:[Object(y.jsx)("p",{className:"properties__text card__text_light-gray",children:e}),Object(y.jsx)("p",{className:"properties__text",children:t[e]})]},e)}))})}),q=(c(62),function(e){var t=e.isProductInFav,c=e.isProductInCart,a=e.product,s=Object(n.useContext)(m),r=s.toggleToFavorites,i=s.toggleToCart;return Object(y.jsxs)("div",{className:"buttons-container",children:[Object(y.jsx)("button",{type:"button",className:N()("button button_add-to-cart",{selected:c}),onClick:function(){i(a)},children:c?"Added":"Add to cart"}),Object(y.jsx)("button",{"data-cy":"addToFavorite",type:"button",className:N()("button button_like",{selected:t}),onClick:function(){r(a)}})]})}),J=(c(63),function(e){var t=e.product,c=Object(n.useContext)(m),a=c.favorites,s=c.isProductSelected,i=c.cart,o=s(t.itemId,a),l=s(t.itemId,i),u={screen:t.screen,capacity:t.capacity,ram:t.ram};return Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)(r.b,{className:"card__link",to:"/".concat(t.category,"/").concat(t.itemId),children:Object(y.jsx)("img",{className:"card__image",alt:t.name,src:t.image})}),Object(y.jsx)("h1",{className:"card__title",children:t.name}),Object(y.jsx)("div",{className:"card__price",children:Object(y.jsx)(R,{regularPrice:t.fullPrice,discountPrice:t.price})}),Object(y.jsx)(V,{properties:u}),Object(y.jsx)(q,{product:t,isProductInFav:o,isProductInCart:l})]})}),Y=function(e,t){return Object(u.a)(e).sort((function(e,c){var n=c.fullPrice-c.price,a=e.fullPrice-e.price;switch(t){case I.Cheapest:return e.fullPrice-c.fullPrice;case I.Expensive:return c.fullPrice-e.fullPrice;case I.Alphabetically:return e.name.localeCompare(c.name);case I.Newest:return c.year-e.year;case I.MaxDiscount:return n-a;case I.Random:return Math.random()-.5;default:return 0}}))},$=(c(30),c(31),c(64),function(e){var t=e.products,c=e.sortBy,a=Object(n.useState)([]),s=Object(d.a)(a,2),r=s[0],i=s[1];Object(n.useEffect)((function(){var e=Y(t,c);i(e)}),[t]);return Object(y.jsx)("div",{className:"product-slider",children:Object(y.jsx)(B.a,Object(l.a)(Object(l.a)({},{infinite:!0,speed:500,slidesToShow:4,slidesToScroll:2,adaptiveHeight:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:2}},{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:1,variableWidth:!0,arrows:!1}},{breakpoint:620,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!0,arrows:!1}}]}),{},{children:r.map((function(e){return Object(y.jsx)(J,{product:e},e.id)}))}))})}),G=(c(65),function(){return Object(y.jsx)("div",{className:"loader"})}),K=(c(66),function(){var e=Object.keys(w).slice(1).map((function(e){return e.toLowerCase()}));return Object(y.jsx)("div",{className:"slick-carousel",children:Object(y.jsx)(B.a,Object(l.a)(Object(l.a)({},{infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:5e3}),{},{children:e.map((function(e){return Object(y.jsx)("img",{alt:"banner_".concat(e),src:"./img/carousel/".concat(e,".png")},e)}))}))})}),W=(c(67),function(e){var t=e.products,c=e.productsCounter,n=e.isLoading;return Object(y.jsx)(y.Fragment,{children:n?Object(y.jsx)(G,{}):Object(y.jsxs)("div",{className:"page__home",children:[Object(y.jsxs)("section",{className:"section",children:[Object(y.jsx)("h1",{className:"section__title",children:"Welcome to my store!"}),Object(y.jsx)(K,{})]}),Object(y.jsxs)("section",{className:"section",children:[Object(y.jsx)("h1",{className:"section__title",children:"Hot prices"}),Object(y.jsx)($,{products:t,sortBy:I.MaxDiscount})]}),Object(y.jsxs)("section",{className:"section",children:[Object(y.jsx)("h1",{className:"section__title",children:"Shop by category"}),Object(y.jsx)(D,{productsCounter:c})]}),Object(y.jsxs)("section",{className:"section",children:[Object(y.jsx)("h1",{className:"section__title",children:"Brand new models"}),Object(y.jsx)($,{products:t,sortBy:I.Newest})]})]})})}),U=(c(68),function(){var e=Object(b.l)().pathname.split("/").filter((function(e){return""!==e})),t=function(t){return t===e.length-1};return Object(y.jsxs)("div",{"data-cy":"breadCrumbs",className:"breadcrumbs",children:[Object(y.jsx)(r.b,{to:"/",className:"breadcrumbs__home"}),e.map((function(e,c){var n=e.split("-").join(" "),a="/".concat(e.toLowerCase());return Object(y.jsx)(r.b,{to:a,className:N()("breadcrumbs__link",{disabled:t(c)}),children:n},e)}))]})}),z=(c(69),function(e){var t=e.title,c=Object(b.n)();return Object(y.jsxs)("div",{className:"not-found",children:[Object(y.jsx)("div",{className:"not-found__container",children:Object(y.jsx)("h2",{className:"not-found__title",children:t})}),Object(y.jsx)("button",{className:"not-found__button",type:"button",onClick:function(){return c("/")},children:"Go Home"})]})}),Q=c(8),Z=(c(70),function(e){var t=e.label,c=e.classModificator,a=e.options,s=e.startValue,i=e.searchParamsKey,o=Object(n.useState)(!1),l=Object(d.a)(o,2),u=l[0],j=l[1],b=Object(r.d)(),m=Object(d.a)(b,1)[0],O=Object(n.useState)(s),h=Object(d.a)(O,2),p=h[0],f=h[1],x=function(){j(!u)};return Object(y.jsxs)("div",{className:"dropdown dropdown_".concat(c),children:[Object(y.jsx)("label",{htmlFor:"dropdownSelect",className:"dropdown__label",children:t}),Object(y.jsxs)("button",{id:"dropdownSelect",type:"button",className:"dropdown__select",onClick:x,children:[Object(y.jsx)("span",{children:p}),Object(y.jsx)("div",{className:N()("dropdown__arrow",{dropdown__arrow_opened:u})})]}),u&&Object(y.jsx)("ul",{className:"dropdown__list",children:a.map((function(e){return Object(y.jsx)("li",{className:"dropdown__item",onClick:function(){return function(e){f(e),j(!1)}(e)},children:Object(y.jsx)(r.b,{to:{search:(t=e,S(m,"itemsOnPage"===i?Object(Q.a)({page:"1"},i,t):Object(Q.a)({},i,t)))},onClick:x,className:N()("dropdown__link",{active:e===p}),children:e})},e);var t}))})]})}),X=(c(71),function(e){var t=e.total,c=e.itemsOnPage,a=e.currentPage,s=Object(r.d)(""),i=Object(d.a)(s,2),o=i[0],l=i[1],j=Math.ceil(t/c),b=Object(n.useState)([]),m=Object(d.a)(b,2),O=m[0],h=m[1];return Object(n.useEffect)((function(){for(var e=Math.round(2),t=Math.max(1,a-e),c=Math.min(j,a+e);c-t<4;)if(t>1)t-=1;else{if(!(c<j))break;c+=1}var n=Object(u.a)(Array(c-t+1)).map((function(e,c){return t+c}));h(n)}),[a,j]),Object(n.useEffect)((function(){a>j&&l((function(e){return e.set("page","1"),e}))}),[a,j,l]),Object(y.jsxs)("div",{"data-cy":"pagination",className:"pagination",children:[Object(y.jsx)(r.b,{"data-cy":"paginationLeft",to:{search:S(o,{page:(a-1).toString()})},className:N()("pagination__arrow pagination__arrow_prev",{disabled:1===a})}),Object(y.jsx)("ul",{className:"pagination__list",children:O.map((function(e){return Object(y.jsx)("li",{className:"pagination__item",children:Object(y.jsx)(r.b,{to:{search:S(o,{page:e.toString()})},className:N()("pagination__link",{active:e===a}),children:e})},e)}))}),Object(y.jsx)(r.b,{"data-cy":"paginationRight",to:{search:S(o,{page:(a+1).toString()})},className:N()("pagination__arrow pagination__arrow_next",{disabled:a===j})})]})}),ee=(c(72),function(){return Object(y.jsx)("div",{className:"no-results",children:Object(y.jsx)("h2",{className:"no-results__title",children:"There are no products matching your request"})})}),te=(c(73),["4","8","16","All"]),ce=function(e){var t=e.products,c=e.isSortDropdownShown,a=e.isPaginationShown,s=e.handleVisibleProductsNumber,i=Object(r.d)(),o=Object(d.a)(i,1)[0],l=Object(n.useState)(!1),u=Object(d.a)(l,2),j=u[0],b=u[1],m=Number(o.get("itemsOnPage"))||t.length,O=o.get("sort")||"",h=Number(o.get("page"))||1,p=o.get("query")||"",f=(h-1)*m,x=f+m,_=a&&m!==t.length,v=Object(n.useState)(t),g=Object(d.a)(v,2),C=g[0],S=g[1],w=function(e){var c=e.trim().toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(c)}))},k=Object(n.useMemo)((function(){return Y(w(p),O)}),[O,t,p]),P=Object(n.useRef)(!1);Object(n.useEffect)((function(){P.current?b(!0):P.current=!0,s&&s(k.length),S(k.slice(f,x));var e=setTimeout((function(){b(!1)}),500);return function(){return clearTimeout(e)}}),[t,O,m,h,p]);var I=0===O.length?"Choose an option":O,A=m===t.length?"All":m.toString();return Object(y.jsxs)(y.Fragment,{children:[j&&Object(y.jsx)(G,{}),C.length>0&&!j&&Object(y.jsxs)("div",{className:"product-list",children:[(a||c)&&Object(y.jsxs)("div",{className:"product-list__container",children:[c&&Object(y.jsxs)("div",{className:"product-list__dropdowns",children:[Object(y.jsx)(Z,{label:"Sort by",classModificator:"sort",options:Object.values(T),startValue:I,searchParamsKey:"sort"}),Object(y.jsx)(Z,{label:"Items on page",classModificator:"items",options:te,startValue:A,searchParamsKey:"itemsOnPage"})]}),_&&Object(y.jsx)("div",{className:N()("product-list__pagination","product-list__pagination_top"),children:Object(y.jsx)(X,{total:k.length,itemsOnPage:m,currentPage:h})})]}),C&&Object(y.jsx)("ul",{"data-cy":"cardsContainer",className:"product-list__content",children:C.map((function(e){return Object(y.jsx)("li",{"data-cy":"cardsContainer",className:"product-list__item",children:Object(y.jsx)(J,{product:e})},e.id)}))}),_&&Object(y.jsx)("div",{className:"product-list__pagination",children:Object(y.jsx)(X,{total:k.length,itemsOnPage:m,currentPage:h})})]}),0===w(p).length&&!j&&Object(y.jsx)(ee,{})]})};ce.defaultProps={isSortDropdownShown:!1,isPaginationShown:!1};c(74);var ne,ae=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(d.a)(s,2),i=r[0],l=r[1],u=Object(n.useState)(null===c||void 0===c?void 0:c.length),m=Object(d.a)(u,2),O=m[0],h=m[1],p=Object(b.l)().pathname.slice(1);function f(){return(f=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,x(p);case 4:t=e.sent,a(t);case 6:return e.prev=6,l(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]);return Object(y.jsxs)(y.Fragment,{children:[i&&Object(y.jsx)(G,{}),!i&&Object(y.jsxs)("div",{className:"page__".concat(p),children:[Object(y.jsx)(U,{}),Object(y.jsx)("h1",{className:"main-title",children:p}),Object(y.jsx)(L,{number:O}),c.length?Object(y.jsx)(ce,{products:c,handleVisibleProductsNumber:function(e){h(e)},isSortDropdownShown:!0,isPaginationShown:!0}):Object(y.jsx)(z,{title:"Sorry, we are temporarily not selling ".concat(p,". \n                Please come back in a month.")})]})]})},se={black:"#000",white:"#000",red:"#ff0000",silver:"#b5b5bd",gold:"#d4af37",yellow:"#ffff00",rosegold:"#b76e79",spacegray:"#717378",coral:"#ff7f50",midnightgreen:"#004953",green:"#4CD887",purple:"#EF7FFC"};!function(e){e.Screen="screen",e.Resolution="resolution",e.Processor="processor",e.RAM="ram",e.Capacity="capacity",e.Camera="camera",e.Zoom="zoom",e.Cell="cell"}(ne||(ne={}));c(75);var re=function(e,t){var c=e[t.toLowerCase()];return Array.isArray(c)?c.join(", "):c},ie=function(e,t,c){var n=e.replace(t.toLowerCase(),c.toLowerCase());return"".concat(n)},oe=function(e){return{screen:e.screen,resolution:e.resolution,processor:e.processor,ram:e.ram}},le=function(e){var t=e.products,c=Object(n.useState)(null),a=Object(d.a)(c,2),s=a[0],i=a[1],l=Object(n.useState)(!1),u=Object(d.a)(l,2),O=u[0],h=u[1],p=Object(n.useState)(null===s||void 0===s?void 0:s.images[0]),x=Object(d.a)(p,2),_=x[0],v=x[1],g=Object(b.l)().pathname,C=Object(b.p)().itemId,S=void 0===C?"":C,w=Object(n.useContext)(m),k=w.favorites,P=w.cart,T=w.isProductSelected,A=T((null===s||void 0===s?void 0:s.id)||"",k),E=T((null===s||void 0===s?void 0:s.id)||"",P),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(arguments.length>1?arguments[1]:void 0).find((function(t){return t.itemId===e}))}(null===s||void 0===s?void 0:s.id,t),L=s&&F,M=Object(n.useState)(""),D=Object(d.a)(M,2),H=D[0],B=D[1];function J(){return(J=Object(j.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,f(t);case 4:c=e.sent,i(c),v(c.images[0]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),B("Product not found");case 12:return e.prev=12,h(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(e){J.apply(this,arguments)}(S)}),[S]);return Object(y.jsxs)("div",{className:"page__item",children:[O&&Object(y.jsx)("div",{className:"product-details__loader",children:Object(y.jsx)(G,{})}),!O&&L&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(U,{}),Object(y.jsx)("div",{className:"product-details__back",children:Object(y.jsx)("button",{type:"button",className:"product-details__button-back",onClick:function(){window.history.go(-1)},children:"Back"})}),Object(y.jsxs)("div",{className:"product-details",children:[Object(y.jsx)("h1",{className:"product-details__title",children:s.name}),Object(y.jsxs)("div",{className:"product-details__row",children:[Object(y.jsx)("div",{className:"product-details__content",children:s.images&&Object(y.jsxs)("div",{className:"product-details__images-container",children:[Object(y.jsx)("div",{className:"image-list",children:s.images.map((function(e){return Object(y.jsx)("button",{type:"button",className:"image-list__box",onClick:function(){return function(e){v(e)}(e)},children:Object(y.jsx)("img",{alt:"product",src:e,className:N()("image image_small",{active:e===_})})},e)}))}),Object(y.jsx)("div",{className:"image__box",children:Object(y.jsx)("img",{alt:"product main",src:"".concat(_),className:"image image_main"})})]})}),Object(y.jsxs)("div",{className:"product-details__action",children:[Object(y.jsx)("div",{className:"product-details__select",children:Object(y.jsxs)("div",{className:"colors",children:[Object(y.jsx)("h3",{className:"colors__title",children:"Available colors"}),Object(y.jsx)("div",{className:"colors__list",children:s.colorsAvailable.map((function(e){return Object(y.jsx)(r.b,{to:{pathname:"".concat(ie(g,s.color,e))},style:{background:"".concat((t=e,se[t]))},className:N()("button button_circle",{active:s.color===e})},e);var t}))})]})}),Object(y.jsx)("div",{className:"product-details__select",children:Object(y.jsxs)("div",{className:"capacity",children:[Object(y.jsx)("h3",{className:"capacity__title capacity__title",children:"Select capacity"}),Object(y.jsx)("div",{className:"capacity__list",children:s.capacityAvailable.map((function(e){return Object(y.jsx)(r.b,{to:{pathname:"".concat(ie(g,s.capacity,e))},className:N()("button button_square",{active:s.capacity===e}),children:e},e)}))})]})}),Object(y.jsx)(R,{regularPrice:s.priceRegular,discountPrice:s.priceDiscount}),Object(y.jsx)(q,{product:F,isProductInFav:A,isProductInCart:E}),Object(y.jsx)(V,{properties:oe(s)})]})]}),Object(y.jsxs)("div",{className:"product-details__row",children:[Object(y.jsxs)("div",{className:"product-details__section",children:[Object(y.jsx)("h2",{className:"product-details__subtitle",children:"About"}),Object(y.jsx)("div",{"data-cy":"productDescription",className:"description",children:s.description&&s.description.map((function(e){return Object(y.jsxs)("div",{className:"description__item",children:[Object(y.jsx)("h3",{className:"description__title",children:e.title}),Object(y.jsx)("p",{className:"description__text",children:e.text})]},e.title)}))})]}),Object(y.jsxs)("div",{className:"product-details__section",children:[Object(y.jsx)("h2",{className:"product-details__subtitle",children:"Tech specs"}),Object(y.jsx)("div",{className:"tech-specifications",children:Object.keys(ne).map((function(e){return Object(y.jsxs)("div",{className:"tech-specifications__item",children:[Object(y.jsx)("p",{className:"tech-specifications__text",children:e}),Object(y.jsx)("p",{className:N()("tech-specifications__text","tech-specifications__text--bold"),children:re(s,e)})]},e)}))})]})]})]})]}),H&&!L&&Object(y.jsx)("p",{className:"page__title",children:"Product not found"}),!O&&Object(y.jsxs)("section",{className:"section",children:[Object(y.jsx)("h1",{className:"section__title",children:"You may also like"}),Object(y.jsx)($,{products:t,sortBy:I.Random})]})]})},ue=function(){var e=Object(n.useContext)(m).favorites,t=Object(n.useState)(e.length),c=Object(d.a)(t,2),a=c[0],s=c[1];return Object(y.jsxs)("div",{className:"page__favorites",children:[Object(y.jsx)(U,{}),Object(y.jsx)("h1",{className:"main-title",children:"Favorites"}),Object(y.jsx)(L,{number:a}),e.length?Object(y.jsx)(ce,{products:e,handleVisibleProductsNumber:function(e){s(e)}}):Object(y.jsx)(z,{title:"Your favorites list is empty"})]})},je=function(){var e=Object(b.n)();return Object(n.useEffect)((function(){var t=setTimeout((function(){e("/")}),1e3);return function(){return clearTimeout(t)}}),[e]),Object(y.jsx)(z,{title:"Page not found"})},de=(c(76),function(){return Object(y.jsx)("div",{className:"footer",children:Object(y.jsxs)("div",{className:"footer__container",children:[Object(y.jsx)("div",{className:"footer__logo"}),Object(y.jsxs)("div",{className:"nav",children:[Object(y.jsx)(C,{text:"GITHUB",to:"https://github.com/Anastasiya145/"}),Object(y.jsx)(C,{text:"CONTACTS",to:"tel:+330784070315"}),Object(y.jsx)(C,{text:"RIGHTS",to:"https://github.com/Anastasiya145/"})]}),Object(y.jsx)("button",{className:"button button_scroll",type:"button",onClick:function(){return function(e){var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}("header")}})]})})}),be=(c(77),function(e){var t=e.item,c=Object(n.useContext)(m),a=c.toggleToCart,s=c.updateCountInCart,i=Object(n.useState)(t.count),o=Object(d.a)(i,2),l=o[0],u=o[1];Object(n.useEffect)((function(){s(t.itemId,l)}),[t.itemId,l]);return Object(y.jsxs)("div",{className:"checkout-card",children:[Object(y.jsx)("button",{type:"button","data-cy":"cartDeleteButton",className:"checkout-card__button-remove",onClick:function(){return a(t)}}),Object(y.jsxs)("div",{className:"checkout-card__content",children:[Object(y.jsx)("img",{alt:t.name,src:t.image,className:"checkout-card__img"}),Object(y.jsx)(r.b,{className:"checkout-card__title",to:"/".concat(t.category,"/").concat(t.itemId),children:t.name})]}),Object(y.jsxs)("div",{className:"checkout-card__container",children:[Object(y.jsxs)("div",{className:"checkout-card__actions",children:[Object(y.jsx)("button",{type:"button",className:N()("checkout-card__button checkout-card__button_prev",{disabled:1===l}),onClick:function(){u((function(e){return e-1}))}}),Object(y.jsx)("div",{className:"checkout-card__count",children:l}),Object(y.jsx)("button",{type:"button",className:"checkout-card__button checkout-card__button_next",onClick:function(){u((function(e){return e+1}))}})]}),Object(y.jsx)("p",{className:"checkout-card__price",children:"$".concat(t.price*l)})]})]})}),me=(c(78),function(){var e=Object(n.useContext)(m).cart,t=Object(n.useState)(!1),c=Object(d.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(0),i=Object(d.a)(r,2),o=i[0],l=i[1],u=Object(n.useState)(0),j=Object(d.a)(u,2),b=j[0],O=j[1];return Object(n.useEffect)((function(){if(e.length>0){var t=e.reduce((function(e,t){return e+t.price*t.count}),0),c=e.reduce((function(e,t){return e+t.count}),0);l(t),O(c)}}),[e]),Object(n.useEffect)((function(){setTimeout((function(){s(!1)}),3e3)}),[a]),Object(y.jsxs)("div",{className:"page__cart",children:[Object(y.jsx)(U,{}),Object(y.jsx)("h1",{className:"main-title",children:"Cart"}),Object(y.jsx)(L,{number:e.length}),e.length?Object(y.jsxs)("div",{className:"cart",children:[Object(y.jsx)("div",{className:"cart__products",children:e.map((function(e){return Object(y.jsx)(be,{item:e},e.id)}))}),Object(y.jsxs)("div",{className:"cart__container",children:[Object(y.jsx)("h1",{"data-cy":"productQauntity",className:"cart__budget",children:"$".concat(o)}),Object(y.jsx)("p",{className:"cart__text",children:"Total for ".concat(b," items")}),Object(y.jsx)("button",{type:"button",className:"cart__checkout",onClick:function(){return s(!0)},children:"Checkout"})]}),Object(y.jsx)("div",{className:N()("cart__popup",{cart__popup_shown:a}),children:"Sorry, this funtion is not implemented yet."})]}):Object(y.jsx)(z,{title:"Your cart is empty"})]})}),Oe=(c(79),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(d.a)(s,2),i=r[0],m=r[1],h=Object(n.useState)([]),f=Object(d.a)(h,2),x=f[0],g=f[1],N=Object(n.useState)([]),C=Object(d.a)(N,2),S=C[0],w=C[1],P=Object(n.useState)(!1),I=Object(d.a)(P,2),T=I[0],A=I[1],E=Object(n.useState)({phones:0,tablets:0,accessories:0}),L=Object(d.a)(E,2),M=L[0],D=L[1],H=_("favorites",[]),B=Object(d.a)(H,2),R=B[0],V=B[1],q=_("cart",[]),J=Object(d.a)(q,2),Y=J[0],$=J[1],G=Object(b.l)().pathname,K="/"===G?"home":G.substring(1);function U(){return(U=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.prev=1,e.next=4,p();case 4:t=e.sent,a(t);case 6:return e.prev=6,A(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){U.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){m(c.filter((function(e){return"phones"===e.category}))),g(c.filter((function(e){return"tablets"===e.category}))),w(c.filter((function(e){return"accessories"===e.category})))}),[c]),Object(n.useEffect)((function(){D({phones:i.length,tablets:x.length,accessories:S.length})}),[i,x,S]);var z=function(e,t){return Array.isArray(t)&&t.some((function(t){return t.itemId===e}))};return Object(y.jsx)(O,{value:{favorites:R,cart:Y,toggleToFavorites:function(e){if(e&&z(e.itemId,R)){var t=R.filter((function(t){return t.itemId!==e.itemId}));V(t)}else V([].concat(Object(u.a)(R),[e]))},toggleToCart:function(e){var t=Object(l.a)(Object(l.a)({},e),{},{count:1});if(e&&z(t.itemId,Y)){var c=Y.filter((function(t){return t.itemId!==e.itemId}));$(c)}else $([].concat(Object(u.a)(Y),[t]))},isProductSelected:z,updateCountInCart:function(e,t){var c=Y.map((function(c){return c.itemId===e?Object(l.a)(Object(l.a)({},c),{},{count:t}):c}));$(c)}},children:Object(y.jsxs)("div",{className:"page",children:[Object(y.jsx)(v,{}),Object(y.jsx)(F,{}),Object(y.jsx)("main",{className:"page__main",children:Object(y.jsx)("div",{className:"page__container page__container_".concat(K),children:Object(y.jsxs)(b.c,{children:[Object(y.jsxs)(b.a,{path:k.Home,children:[Object(y.jsx)(b.a,{index:!0,element:Object(y.jsx)(W,{products:i,productsCounter:M,isLoading:T})}),Object(y.jsxs)(b.a,{path:k.Phones,children:[Object(y.jsx)(b.a,{index:!0,element:Object(y.jsx)(ae,{})}),Object(y.jsx)(b.a,{path:":itemId",element:Object(y.jsx)(le,{products:c})})]}),Object(y.jsx)(b.a,{path:k.Tablets,element:Object(y.jsx)(ae,{})}),Object(y.jsx)(b.a,{path:k.Accessories,element:Object(y.jsx)(ae,{})}),Object(y.jsx)(b.a,{path:k.Favorites,element:Object(y.jsx)(ue,{})}),Object(y.jsx)(b.a,{path:k.Cart,element:Object(y.jsx)(me,{})})]}),Object(y.jsx)(b.a,{path:"*",element:Object(y.jsx)(je,{})})]})})}),Object(y.jsx)(de,{})]})})}),he=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(Oe,{})})};s.a.render(Object(y.jsx)(r.a,{children:Object(y.jsx)(he,{})}),document.getElementById("root"))}]),[[80,1,2]]]);
//# sourceMappingURL=main.f176e4df.chunk.js.map