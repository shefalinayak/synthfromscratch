!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.transpilerLite=e()}(this,function(){return function(t){return t.replace(/(^\s*|\n\s*)(static\s+)?((?:async\s+)?)((?:[sg]et\s+)?)((?:\*\s*)?)([a-zA-Z0-9$_]+)\(([^()]*?)\)\s*\{/g,function(t,e,n,c,r,s,o,i){var f=n?"this":"this.prototype";return(e+=r?"(function(x,c){Object.defineProperty(x,'"+o+"',{"+r+":c})})("+f+",":f+"."+o+"=(")+"/*__def*/"+c+"function"+s+"("+i+"/**/){"}).replace(/(^\s*|\/\*__def\*\/function\(.+)}(\s*\)|\s*$)/gm,"$1})$2").replace(/class\s+([a-zA-Z0-9$_]+)?\s*\{/g,function(t,e){return"(function(c,i){return i.call(c),c})(function "+(e||"c")+"(){var x="+(e||"c")+".prototype.constructor;if(x&&x!="+(e||"c")+")return x.apply(this,arguments)},function(){"}).replace(/(^|\s|;)(let|const)\s/gm,"$1var ")}});