(()=>{var t={897:(t,e)=>{e.isValid=t=>t.length>=8&&function(t,e){return["&","$","!","è","§","à","_"].some((e=>t.includes(e)))}(t)&&function(t){for(let e=0;e<t.length;e++)if(!isNaN(parseInt(t[e])))return!0;return!1}(t)}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var g=e[r]={exports:{}};return t[r](g,g.exports,n),g.exports}(()=>{try{const{isValid:t}=n(897),e=document.getElementById("body"),r=document.getElementById("gamerTagInput"),a=document.getElementById("gamerTagCheckButton"),g=document.getElementById("resetButton"),i=document.getElementById("gamerTagFeedback"),d="background:linear-gradient(\n                90deg,\n                rgba(2, 0, 36, 1) 0%,\n                rgba(9, 9, 121, 1) 35%,\n                rgba(0, 212, 255, 1) 100%\n            ) !important",o="background:linear-gradient(\n                90deg,\n                rgba(2, 0, 36, 1) 0%,\n                rgba(11, 255, 168, 1) 35%,\n                rgba(0, 212, 0, 1) 100%\n            ) !important",c="background:linear-gradient(\n                90deg,\n                rgba(2, 0, 36, 1) 0%,\n                rgba(200, 9, 70, 1) 35%,\n                rgba(255, 0, 0, 1) 100%\n            ) !important";let s;r.addEventListener("change",(t=>{s=t.target.value})),a.addEventListener("click",(()=>{const n=t(s);i.textContent=n?"Gamer tag is not valid":"Gamer tag is valid",e.setAttribute("style",n?o:c)})),g.addEventListener("click",(()=>{i.textContent="",e.setAttribute("style",d)}))}catch(t){console.error(JSON.stringify(t))}})()})();