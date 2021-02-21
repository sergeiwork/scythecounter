(this.webpackJsonpscythecounter=this.webpackJsonpscythecounter||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a=n(1),o=(n(51),n(52),n(0)),r=n.n(o),c=n(22),i=n.n(c),s=n(4),l=n(15),u=n(6),b=n(8),h=n(10),d=n(9),j=n(46),p=n(21),m=n(5),g=(n(66),n(14)),O=n(17),y=n(29),x=Object(y.b)({name:"players",initialState:{players:[]},reducers:{addPlayer:function(e,t){e.players.push(t.payload)},updatePlayer:function(e,t){e.players[e.players.indexOf(t.payload)]=t.payload},reset:function(e){e.players=[]}}}),f=x.actions,v=(f.addPlayer,f.updatePlayer,f.reset,x.reducer),w=function(){function e(){Object(u.a)(this,e),this.name="",this.color="",this.emblemUrl="",this.shortName=""}return Object(b.a)(e,null,[{key:"getByName",value:function(t){switch(null===t||void 0===t?void 0:t.toLowerCase()){case"polania":return e.Polania;case"saxony":return e.Saxony;case"crimea":return e.Crimea;case"nord":return e.Nord;case"rusvet":return e.Rusvet;case"albion":return e.Albion;case"togawa":return e.Togawa;default:return e.Polania}}}]),e}();w.Polania={name:"Republic of Polania",color:"white",emblemUrl:"/icons/factions/polania.png",shortName:"polania"},w.Saxony={name:"Saxony Empire",color:"black",emblemUrl:"/icons/factions/saxony.png",shortName:"saxony"},w.Crimea={name:"Crimean Khanate",color:"yellow",emblemUrl:"/icons/factions/crimea.png",shortName:"crimea"},w.Nord={name:"Nordic Kingdoms",color:"blue",emblemUrl:"/icons/factions/nord.png",shortName:"nord"},w.Rusvet={name:"Rusviet Union",color:"red",emblemUrl:"/icons/factions/rusvet.png",shortName:"rusvet"},w.Albion={name:"Clan Albion",color:"green",emblemUrl:"/icons/factions/albion.png",shortName:"albion"},w.Togawa={name:"Togawa Shogunate",color:"purple",emblemUrl:"/icons/factions/togawa.png",shortName:"togawa"};var N=function e(t){var n,a,o,r,c,i,s,l,b=this;(Object(u.a)(this,e),this.popularity=0,this.money=0,this.stars=0,this.hex=0,this.resources=0,this.bonus=0,this.total=0,this.name="",this.faction=w.Polania,this.calculateTotal=function(){var e=Math.min(5,Math.floor(b.popularity/6.5)+3),t=Math.min(4,Math.floor(b.popularity/6.5)+2),n=Math.min(3,Math.floor(b.popularity/6.5+1)),a=Math.floor(b.money+b.stars*e+b.hex*t+Math.floor(b.resources/2)*n+b.bonus);return b.total=a,a},t)&&(this.popularity=null!==(n=t.popularity)&&void 0!==n?n:0,this.money=null!==(a=t.money)&&void 0!==a?a:0,this.stars=null!==(o=t.stars)&&void 0!==o?o:0,this.hex=null!==(r=t.hex)&&void 0!==r?r:0,this.resources=null!==(c=t.resources)&&void 0!==c?c:0,this.bonus=null!==(i=t.bonus)&&void 0!==i?i:0,this.name=null!==(s=t.name)&&void 0!==s?s:"",this.faction=null!==(l=t.faction)&&void 0!==l?l:w.Polania)},L=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(u.a)(this,n),(a=t.call(this,e)).faction=void 0,a.faction=w.getByName(e.faction);var o=a.props.players.filter((function(e){return e.faction.shortName===a.faction.shortName}));return a.state={player:o.length>0?o[0]:null},a}return Object(b.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this;if(e.players!==this.props.players){var n=this.props.players.filter((function(e){return e.faction.shortName===t.faction.shortName}));this.setState({player:n.length>0?n[0]:null})}}},{key:"render",value:function(){var e,t;return Object(a.jsx)("div",{className:"col s6 m4 l2"+(this.props.mra?" mra":""),children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-image",children:Object(a.jsx)("img",{src:null!==(e=window.location.origin+(null===(t=this.faction)||void 0===t?void 0:t.emblemUrl))&&void 0!==e?e:"",alt:"faction badge"})}),Object(a.jsx)("div",{className:"card-action",children:this.state.player?Object(a.jsx)("div",{children:this.state.player.name}):Object(a.jsx)(p.b,{to:"player/"+this.props.faction,children:Object(a.jsx)(s.b,{id:"selectButton"})})})]})})}}]),n}(o.Component),k=Object(l.b)((function(e,t){return{players:e.players.players}}),x.actions)(L),B=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e,t=this;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{htmlFor:"languageSelector",children:Object(a.jsx)(s.b,{id:"selectLanguageLabel"})}),Object(a.jsx)(O.Select,{onChange:function(e){t.props.setActiveLanguage(e.target.value),localStorage.setItem("language",e.target.value)},value:this.props.activeLanguage&&this.props.activeLanguage.code,id:"languageSelector",children:null===(e=this.props.languages)||void 0===e?void 0:e.map((function(e){return Object(a.jsx)("option",{value:e.code,children:e.name},e.code)}))})]})}}]),n}(o.Component),C=Object(s.d)(B),S=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(C,{})}),Object(a.jsxs)("div",{className:"contentContainer",children:[Object(a.jsxs)("div",{className:"row factionRow",children:[Object(a.jsx)(k,{faction:"polania"}),Object(a.jsx)(k,{faction:"saxony"}),Object(a.jsx)(k,{faction:"crimea"}),Object(a.jsx)(k,{faction:"rusvet"}),Object(a.jsx)(k,{faction:"nord",mra:!0})]}),Object(a.jsxs)("div",{className:"row factionRow",children:[Object(a.jsx)(k,{faction:"albion",mra:!0}),Object(a.jsx)(k,{faction:"togawa",mra:!0})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(O.Button,{onClick:function(){e.props.reset()},children:Object(a.jsx)(s.b,{id:"resetButton"})}),Object(a.jsx)(p.b,{to:"/summary",className:"btn",style:{marginLeft:"10px"},children:Object(a.jsx)(s.b,{id:"summaryButton"})})]})]})]})}}]),n}(o.Component),F=Object(l.b)(null,Object(g.a)({},x.actions))(S),P=n(28),U=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onKeyUp=function(e){if("Enter"===e.key){var t,n=e.currentTarget.form,a=Array.prototype.indexOf.call(n,e.currentTarget);null===(t=n.elements[a+1])||void 0===t||t.focus(),e.preventDefault()}},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"valueRow",children:[Object(a.jsx)("img",{src:this.props.icon,alt:this.props.name}),Object(a.jsxs)("div",{className:"input-field col s12 pointsInput",style:{flexGrow:1},children:[Object(a.jsx)("input",Object(g.a)(Object(g.a)({type:"text",name:this.props.name,id:this.props.name},"number"===typeof this.props.value&&{pattern:"[0-9]*",inputMode:"numeric"}),{},{value:this.props.value,onChange:this.props.changeHandler,onKeyUp:this.onKeyUp,style:{textAlign:"center"}})),Object(a.jsx)("span",{className:"helper-text",children:Object(a.jsx)(s.b,{id:this.props.label})})]})]})}}]),n}(r.a.Component),A=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a,o;return Object(u.a)(this,n),(o=t.call(this,e)).changeHandler=function(e){o.setState((function(t,n){var a="name"===e.target.name?e.target.value:+e.target.value,o=new N(Object(g.a)(Object(g.a)({},t.player),{},Object(P.a)({},e.target.name,a)));return o.calculateTotal(),{player:o}}))},o.addPlayer=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];o.props.addPlayer(o.state.player),o.props.history.push(e?"/summary":"/")},o.state={player:null!==(a=e.player)&&void 0!==a?a:new N({faction:w.getByName(e.match.params[0])})},o}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"PlayerScoreCounter contentContainer",children:Object(a.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(a.jsx)("h1",{style:{textAlign:"center"},children:Object(a.jsx)(s.b,{id:this.state.player.faction.shortName+"Faction"})}),Object(a.jsx)(U,{name:"name",label:"nameLabel",icon:"/icons/name.png",value:this.state.player.name,changeHandler:this.changeHandler}),Object(a.jsx)(U,{name:"popularity",label:"popularityLabel",icon:"/icons/heart.png",value:this.state.player.popularity,changeHandler:this.changeHandler}),Object(a.jsx)(U,{name:"money",label:"moneyLabel",icon:"/icons/coin.png",value:this.state.player.money,changeHandler:this.changeHandler}),Object(a.jsx)(U,{name:"stars",label:"starsLabel",icon:"/icons/star.png",value:this.state.player.stars,changeHandler:this.changeHandler}),Object(a.jsx)(U,{name:"hex",label:"hexLabel",icon:"/icons/hex.png",value:this.state.player.hex,changeHandler:this.changeHandler}),Object(a.jsx)(U,{name:"resources",label:"resourcesLabel",icon:"/icons/resource.png",value:this.state.player.resources,changeHandler:this.changeHandler}),Object(a.jsx)(U,{name:"bonus",label:"bonusLabel",icon:"/icons/coin.png",value:this.state.player.bonus,changeHandler:this.changeHandler}),Object(a.jsxs)("div",{className:"resultRow",children:[Object(a.jsx)("label",{htmlFor:"total",children:Object(a.jsx)(s.b,{id:"totalLabel"})}),Object(a.jsx)("input",{type:"text",name:"total",id:"total",readOnly:!0,value:this.state.player.total,style:{textAlign:"center"}})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(O.Button,{className:"brown lighten-3",large:!0,waves:"teal",onClick:function(){e.addPlayer(!0)},style:{marginRight:"2rem"},children:Object(a.jsx)(s.b,{id:"finishButton"})}),Object(a.jsx)(O.Button,{className:"brown lighten-3",large:!0,waves:"teal",onClick:function(){e.addPlayer()},children:Object(a.jsx)(s.b,{id:"nextPlayerButton"})})]})]})})}}]),n}(r.a.Component),H=Object(l.b)(null,x.actions)(A),T=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"contentContainer",children:[Object(a.jsxs)("table",{className:"summaryTable",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(s.b,{id:"faction"})}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:window.location.origin+"/icons/name.png",alt:"name"})}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:window.location.origin+"/icons/heart.png",alt:"heart"})}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:window.location.origin+"/icons/coin.png",alt:"coin"})}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:window.location.origin+"/icons/star.png",alt:"star"})}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:window.location.origin+"/icons/hex.png",alt:"hex"})}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:window.location.origin+"/icons/resource.png",alt:"resource"})}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:window.location.origin+"/icons/coin.png",alt:"bonus"})}),Object(a.jsx)("td",{children:Object(a.jsx)(s.b,{id:"totalLabel"})})]})}),Object(a.jsx)("tbody",{children:this.props.players.map((function(e){return e})).sort((function(e,t){return t.total-e.total})).map((function(e,t){return Object(a.jsxs)("tr",Object(g.a)(Object(g.a)({},0===t&&{className:"winner"}),{},{children:[Object(a.jsx)("td",{children:Object(a.jsxs)("div",{className:"summaryFactionCell",children:[Object(a.jsx)("img",{src:window.location.origin+e.faction.emblemUrl,alt:"faction badge"}),Object(a.jsx)(s.b,{id:e.faction.shortName+"Faction"})]})}),Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.popularity}),Object(a.jsx)("td",{children:e.money}),Object(a.jsx)("td",{children:e.stars}),Object(a.jsx)("td",{children:e.hex}),Object(a.jsx)("td",{children:e.resources}),Object(a.jsx)("td",{children:e.bonus}),Object(a.jsx)("td",{children:e.total})]}),e.name+e.faction.name)}))})]}),Object(a.jsx)(O.Button,{onClick:function(){e.props.history.push("/")},children:Object(a.jsx)(s.b,{id:"goBackButton"})})]})}}]),n}(o.Component),R=Object(l.b)((function(e){return{players:e.players.players}}))(T),E=n(47),M=n(48),W=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a,o;Object(u.a)(this,n),o=t.call(this,e);var r=null!==(a=localStorage.getItem("language"))&&void 0!==a?a:"en";return e.initialize({languages:[{name:"English",code:"en"},{name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",code:"ru"}],options:{renderToStaticMarkup:j.renderToStaticMarkup,defaultLanguage:r}}),e.addTranslationForLanguage(E,"en"),e.addTranslationForLanguage(M,"ru"),r&&e.setActiveLanguage(r),o}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsx)(p.a,{children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{path:"/",exact:!0,component:F}),Object(a.jsx)(m.a,{path:"/summary",exact:!0,component:R}),Object(a.jsx)(m.a,{path:"/player/*",component:H})]})})}}]),n}(r.a.Component),K=Object(s.d)(W),I=Object(y.a)({reducer:{players:v,localize:s.c}}),J=(n(109),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l.a,{store:I,children:Object(a.jsx)(s.a,{store:I,children:Object(a.jsx)(K,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/scythecounter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/scythecounter","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()},47:function(e){e.exports=JSON.parse('{"resetButton":"Reset","summaryButton":"Summary","polaniaFaction":"Republic of Polania","saxonyFaction":"Saxony Empire","crimeaFaction":"Crimean Khanate","rusvetFaction":"Rusviet Union","nordFaction":"Nordic Kingdoms","albionFaction":"Clan Albion","togawaFaction":"Togawa Shogunate","nameLabel":"Enter your name","popularityLabel":"Enter your popularity","moneyLabel":"Enter your money","starsLabel":"Enter your stars","hexLabel":"Enter your hex","resourcesLabel":"Enter your resources","bonusLabel":"Enter your bonus","totalLabel":"Total","nextPlayerButton":"Next Player","finishButton":"Finish","faction":"Faction","selectButton":"Select","goBackButton":"Go Back","selectLanguageLabel":"Select Language"}')},48:function(e){e.exports=JSON.parse('{"resetButton":"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c","summaryButton":"\u0418\u0442\u043e\u0433\u0438","polaniaFaction":"\u041f\u043e\u043b\u0430\u043d\u0438\u044f","saxonyFaction":"\u0421\u0430\u043a\u0441\u043e\u043d\u0438\u044f","crimeaFaction":"\u041a\u0440\u044b\u043c","rusvetFaction":"\u0420\u0443\u0441\u0432\u0435\u0442","nordFaction":"\u0421\u0435\u0432\u0435\u0440","albionFaction":"\u0410\u043b\u044c\u0431\u0438\u043e\u043d","togawaFaction":"\u0422\u043e\u0433\u0430\u0432\u0430","nameLabel":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u0433\u0440\u043e\u043a\u0430","popularityLabel":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c","moneyLabel":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u043e\u043d\u0435\u0442","starsLabel":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0432\u0435\u0437\u0434","hexLabel":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439","resourcesLabel":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432","bonusLabel":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u043e\u043d\u0443\u0441","totalLabel":"\u0412\u0441\u0435\u0433\u043e","nextPlayerButton":"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0438\u0433\u0440\u043e\u043a","finishButton":"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c","faction":"\u041d\u0430\u0446\u0438\u044f","selectButton":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c","goBackButton":"\u041d\u0430\u0437\u0430\u0434","selectLanguageLabel":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a"}')},66:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.f93bf86f.chunk.js.map