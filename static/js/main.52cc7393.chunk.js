(this.webpackJsonpvisualiser=this.webpackJsonpvisualiser||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),u=(n(12),n(1)),l=n(2);n(13),n(14);function i(e,t,n){var a=e[t];e[t]=e[n],e[n]=a}function s(e){var t=Object(u.a)(e),n=t.length,a=[];return function e(t,n,a,r,o){if(r<=a)return;var c=a+Math.floor((r-a)/2);e(t,n,a,c,o),e(t,n,c+1,r,o),function(e,t,n,a,r,o){for(var c=n;c<=r;c++)t[c]=e[c];var u=n,l=a+1,i=n;for(;u<=a&&l<=r;)t[u]<=t[l]?(o.push([[u,l],!1]),o.push([[i,t[u]],!0]),e[i++]=t[u++]):(o.push([[u,l],!1]),o.push([[i,t[l]],!0]),e[i++]=t[l++]);for(;u<=a;)o.push([[u],!1]),o.push([[i,t[u]],!0]),e[i++]=t[u++];for(;l<=r;)o.push([[l],!1]),o.push([[i,t[l]],!0]),e[i++]=t[l++]}(t,n,a,c,r,o)}(t,Array(n),0,n-1,a),a}function f(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),o=n[0],c=n[1],f=Object(a.useState)(!1),m=Object(l.a)(f,2),p=m[0],b=m[1],v=Object(a.useState)(!1),g=Object(l.a)(v,2),E=g[0],d=g[1],j=Object(a.useRef)(null);function O(){if(!p){E&&y(),d(!1);for(var e=[],t=0;t<200;t++)e.push(t/200*695+5);h(e),c(e)}}function k(e){p||(b(!0),e.forEach((function(e,t){var n=Object(l.a)(e,2),a=n[0],r=n[1];setTimeout((function(){if(r)c((function(e){var t=Object(l.a)(a,2),n=t[0],r=t[1],o=Object(u.a)(e);return o[n]=r,o}));else if(2===a.length){var e=Object(l.a)(a,2),t=e[0],n=e[1];w(t),w(n)}else{w(Object(l.a)(a,1)[0])}}),2*t)})),setTimeout((function(){!function(){for(var e=j.current.children,t=function(t){var n=e[t].style;setTimeout((function(){return n.backgroundColor="orange"}),2*t)},n=0;n<e.length;n++)t(n);setTimeout((function(){d(!0),b(!1)}),2*e.length)}()}),2*e.length))}function w(e){var t=j.current.children[e].style;setTimeout((function(){t.backgroundColor="crimson"}),2),setTimeout((function(){t.backgroundColor=""}),4)}function y(){for(var e=j.current.children,t=0;t<o.length;t++){e[t].style.backgroundColor=""}}return Object(a.useEffect)(O,[]),r.a.createElement("div",{className:"visualiser-container"},r.a.createElement("div",{className:"array-container",ref:j},o.map((function(e,t){return r.a.createElement("div",{className:"array-bar",style:{height:"".concat(e,"px"),width:"".concat(.5,"vw")},key:t})}))),r.a.createElement("footer",{className:"app-footer"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{className:"app-button",onClick:O},"Generate new array")),r.a.createElement("li",null,r.a.createElement("button",{className:"app-button",onClick:function(){k(function(e){for(var t=Object(u.a)(e),n=[],a=0;a<t.length-1;a++)for(var r=0;r<t.length-a-1;r++)n.push([[r,r+1],!1]),t[r+1]<t[r]&&(n.push([[r,t[r+1]],!0]),n.push([[r+1,t[r]],!0]),i(t,r,r+1));return n}(o))}},"Bubble sort")),r.a.createElement("li",null,r.a.createElement("button",{className:"app-button",onClick:function(){k(function(e){for(var t=Object(u.a)(e),n=[],a=1;a<t.length;a++)for(var r=a-1;r>=0&&(n.push([[r,r+1],!1]),t[r+1]<t[r]);r--)n.push([[r,t[r+1]],!0]),n.push([[r+1,t[r]],!0]),i(t,r,r+1);return n}(o))}},"Insertion sort")),r.a.createElement("li",null,r.a.createElement("button",{className:"app-button",onClick:function(){k(s(o))}},"Merge sort")),r.a.createElement("li",null,r.a.createElement("button",{className:"app-button"},"Quick sort")))))}var h=function(e){for(var t=e.length-1;t>=0;t--){var n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}};var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.52cc7393.chunk.js.map