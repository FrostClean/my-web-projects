const r=Object.prototype.hasOwnProperty;function l(...o){const n=[];for(let s=0,i=o.length;s<i;s++){const t=o[s];if(!!t){if(typeof t=="string"||typeof t=="number")n.push(t);else if(Array.isArray(t)){if(t.length){const e=l.apply(null,t);e&&n.push(e)}}else if(typeof t=="object")if(t.toString===Object.prototype.toString)for(let e in t)r.call(t,e)&&t[e]&&n.push(e);else n.push(String(t))}}return n.join(" ")}export{l as c};