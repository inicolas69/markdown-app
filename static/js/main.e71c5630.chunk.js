(this["webpackJsonpmarkdown-app"]=this["webpackJsonpmarkdown-app"]||[]).push([[0],{48:function(e,t,a){e.exports=a(83)},54:function(e,t,a){},55:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);a(49);var n,i=a(1),l=a.n(i),s=a(9),c=a.n(s),r=(a(54),a(34)),o=a(35),m=a(46),u=a(45),d=(a(55),a(20)),h=a(40),p=a.n(h),f=a(41),w=a.n(f),E=a(42),g=a.n(E),v=a(43),k=a.n(v),N=function(){return l.a.createElement(d.d,{color:"blue",className:"footer font-small pt-4 mt-4"},l.a.createElement(d.c,{fluid:!0,className:"text-center text-md-left"},l.a.createElement("div",{className:"links"},l.a.createElement("ul",{className:"social-list"},l.a.createElement("li",{className:"social-list__item"},l.a.createElement("a",{className:"social-list__link",href:"https://www.linkedin.com/in/nicolas-iniesta-417653b0/"},l.a.createElement(p.a,{style:{fontSize:40}}))),l.a.createElement("li",{className:"social-list__item"},l.a.createElement("a",{className:"social-list__link",href:"https://www.instagram.com/piixn/"},l.a.createElement(w.a,{style:{fontSize:40}}))),l.a.createElement("li",{className:"social-list__item"},l.a.createElement("a",{className:"social-list__link",href:"https://github.com/inicolas69"},l.a.createElement(g.a,{style:{fontSize:40}}))),l.a.createElement("li",{className:"social-list__item"},l.a.createElement("a",{className:"social-list__link",href:"https://www.facebook.com/PiiXN"},l.a.createElement(k.a,{style:{fontSize:40}})))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement(d.c,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Cr\xe9\xe9 par:"," ",l.a.createElement("a",{href:"https://www.nicolasiniesta.com/",target:"blank"}," ","Nicolas Iniesta"," "))))},b=a(44),y=a.n(b),x='# Titre 1\n## Titre 2 \n### Titre 3\n \nLes paragraphes sont s\xe9par\xe9s\npar une ligne vide.\n\nLaiss\xe9 deux espaces \xe0 la fin d\'une ligne pour  \naller \xe0 la ligne.\n\nAttributs *italique*, **gras**, `monospace`, ~~ray\xe9~~.\n\nPossibilit\xe9 aussi de combiner les attributs :  \n**`monospace gras`**  \n*~~italique ray\xe9~~*  \n...\n\nListe:\n\n  * Dr\xf4le\n  * Consciencieux\n  * Travailleur\n\nListe num\xe9rot\xe9e:\n\n  1. Ruby on Rails\n  2. NodeJS\n  3. ReactJS  \n\n*[Nicolas Iniesta](https://www.nicolasiniesta.com/)* \n\nLien automatique : https://www.linkedin.com/in/nicolas-iniesta-417653b0/ \n\n```\n console.log("hello"); \n``` ',S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={text:x},e.handleChange=function(t){var a=t.target.value;e.setState({text:a})},e.handleClickClear=function(t){e.setState({text:""})},e.handleClickReset=function(t){e.setState({text:'# Titre 1\n## Titre 2 \n### Titre 3\n \nLes paragraphes sont s\xe9par\xe9s\npar une ligne vide.\n\nLaiss\xe9 deux espaces \xe0 la fin d\'une ligne pour  \naller \xe0 la ligne.\n\nAttributs *italique*, **gras**, `monospace`, ~~ray\xe9~~.\n\nPossibilit\xe9 aussi de combiner les attributs :  \n**`monospace gras`**  \n*~~italique ray\xe9~~*  \n...\n\nListe:\n\n  * Dr\xf4le\n  * Consciencieux\n  * Travailleur\n\nListe num\xe9rot\xe9e:\n\n  1. Ruby on Rails\n  2. NodeJS\n  3. ReactJS  \n\n*[Nicolas Iniesta](https://www.nicolasiniesta.com/)* \n\nLien automatique : https://www.linkedin.com/in/nicolas-iniesta-417653b0/ \n\n```\n console.log("hello"); \n``` '})},e.renderText=function(e){return{__html:y()(e,{sanitize:!0})}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("text");e&&this.setState({text:e})}},{key:"componentDidUpdate",value:function(){var e=this.state.text;localStorage.setItem("text",e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title",id:"title"},"Editeur de Markdown"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h2",{className:"title"},"Markdown"),l.a.createElement("textarea",{id:"my-textarea",spellCheck:"false",onChange:this.handleChange,value:this.state.text,className:"form-control",rows:"35"}),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:this.handleClickClear},"Tout effacer"),l.a.createElement("button",{onClick:this.handleClickReset},"R\xe9initialiser"))),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h2",{className:"title"},"R\xe9sultat"),l.a.createElement("div",{dangerouslySetInnerHTML:this.renderText(this.state.text),className:"resultat"})))),l.a.createElement(N,null))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),n="my-textarea",document.getElementById(n).onkeydown=function(e){if(9===e.keyCode){var t=this.value,a=this.selectionStart,n=this.selectionEnd;return this.value=t.substring(0,a)+"\t"+t.substring(n),this.selectionStart=this.selectionEnd=a+1,!1}},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.e71c5630.chunk.js.map