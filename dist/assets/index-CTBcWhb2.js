var I=s=>{throw TypeError(s)};var w=(s,e,i)=>e.has(s)||I("Cannot "+i);var a=(s,e,i)=>(w(s,e,"read from private field"),i?i.call(s):e.get(s)),u=(s,e,i)=>e.has(s)?I("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,i),m=(s,e,i,t)=>(w(s,e,"write to private field"),t?t.call(s,i):e.set(s,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const r of c)if(r.type==="childList")for(const x of r.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&t(x)}).observe(document,{childList:!0,subtree:!0});function i(c){const r={};return c.integrity&&(r.integrity=c.integrity),c.referrerPolicy&&(r.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?r.credentials="include":c.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(c){if(c.ep)return;c.ep=!0;const r=i(c);fetch(c.href,r)}})();var d,f,C,l;class E{constructor(e,i,t){u(this,d);u(this,f);u(this,C);u(this,l);m(this,d,e),m(this,f,i),m(this,C,t),m(this,l,!1)}drawFood(e){a(this,l)||image(e,a(this,d),a(this,f),30,30)}checkCollisionFood(e,i,t){return!a(this,l)&&dist(a(this,d),a(this,f),e,i)<t?(m(this,l,!0),a(this,C)):0}setPunts(e){m(this,C,e)}}d=new WeakMap,f=new WeakMap,C=new WeakMap,l=new WeakMap;var g,p,y,n;class v{constructor(e,i,t){u(this,g);u(this,p);u(this,y);u(this,n);m(this,g,e),m(this,p,i),m(this,y,t),m(this,n,!1)}drawFoodCirera(e){a(this,n)||image(e,a(this,g),a(this,p),30,30)}checkCollisionCirera(e,i,t){return!a(this,n)&&dist(a(this,g),a(this,p),e,i)<t?(m(this,n,!0),a(this,y)):0}setPunts(e){m(this,y,e)}}g=new WeakMap,p=new WeakMap,y=new WeakMap,n=new WeakMap;class b{constructor(){this.mapa=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,2,2,3,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,1],[1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2,1],[1,2,1,2,2,2,2,3,1,2,1,2,2,2,2,3,1,1,2,1],[1,2,1,2,1,1,1,2,1,2,1,2,1,1,1,3,1,1,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2,1],[1,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,1,2,1],[1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2,1],[0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0],[0,0,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,0,0],[1,3,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,1,2,1],[1,2,1,2,1,1,1,2,1,2,1,2,1,1,1,2,1,1,2,1],[1,2,2,2,2,2,3,2,2,2,2,2,2,2,2,3,3,2,2,1],[1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2,1],[1,2,1,1,1,3,1,1,1,2,1,1,1,2,1,1,1,1,2,1],[1,3,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]}}class L{constructor(e,i,t,c){this.x=e,this.y=i,this.radi=t,this.color=c,this.angleInici=40,this.angleFi=330}drawComecocos(){fill(this.color),arc(this.x,this.y,this.radi,this.radi,this.angleInici,this.angleFi)}updateAngle(e){e==="UP"?(this.angleInici=300,this.angleFi=240):e==="DOWN"?(this.angleInici=125,this.angleFi=55):e==="LEFT"?(this.angleInici=210,this.angleFi=135):e==="RIGHT"&&(this.angleInici=40,this.angleFi=330)}updatePosition(e,i){this.x=e,this.y=i}}class N{constructor(){this.vides=3,this.meuComecocos=new L(30,300,30,"Yellow"),this.meuTauler=new b,this.foodItems=[],this.cireres=[]}}let o,O,R,F=0,A,h=600,P=700,T=15;function W(){O=loadImage("../img/roca.png"),R=loadImage("../img/food.png"),A=loadImage("../img/cerezas.png")}function j(){createCanvas(h,P),angleMode(DEGREES),o=new N;for(let s=0;s<o.meuTauler.mapa.length;s++)for(let e=0;e<o.meuTauler.mapa[s].length;e++)o.meuTauler.mapa[s][e]===2&&o.foodItems.push(new E(e*30,s*30,10)),o.meuTauler.mapa[s][e]===3&&o.cireres.push(new v(e*30,s*30,50))}function k(){background(190);for(let s=0;s<o.meuTauler.mapa.length;s++)for(let e=0;e<o.meuTauler.mapa[s].length;e++)o.meuTauler.mapa[s][e]===1&&image(O,e*30,s*30,30,30);o.meuComecocos.drawComecocos(),o.foodItems.forEach(s=>{s.drawFood(R),F+=s.checkCollisionFood(o.meuComecocos.x,o.meuComecocos.y,o.meuComecocos.radi)}),o.cireres.forEach(s=>{s.drawFoodCirera(A),F+=s.checkCollisionCirera(o.meuComecocos.x,o.meuComecocos.y,o.meuComecocos.radi)}),fill(0),textSize(20),textAlign(CENTER),text("Puntuació: "+F,h/2-30,P-50)}function M(){let s=o.meuComecocos.x,e=o.meuComecocos.y;keyCode===UP_ARROW?(e-=T,o.meuComecocos.updateAngle("UP")):keyCode===DOWN_ARROW?(e+=T,o.meuComecocos.updateAngle("DOWN")):keyCode===LEFT_ARROW?(s-=T,o.meuComecocos.updateAngle("LEFT")):keyCode===RIGHT_ARROW&&(s+=T,o.meuComecocos.updateAngle("RIGHT"));let i=Math.floor(e/30),t=Math.floor(s/30);o.meuTauler.mapa[i]&&o.meuTauler.mapa[i][t]!==1&&o.meuComecocos.updatePosition(s,e),o.meuComecocos.y<30+o.meuComecocos.radi/2&&o.meuComecocos.updatePosition(o.meuComecocos.x,30+o.meuComecocos.radi/2),o.meuComecocos.y>P-30-o.meuComecocos.radi/2&&o.meuComecocos.updatePosition(o.meuComecocos.x,P-30-o.meuComecocos.radi/2),o.meuComecocos.x<30+o.meuComecocos.radi/2&&(o.meuComecocos.y<=270||o.meuComecocos.y>=330)&&o.meuComecocos.updatePosition(30+this.meuComecocos.radi/2,this.meuComecocos.y),o.meuComecocos.x>h-30-o.meuComecocos.radi/2&&(o.meuComecocos.y<=270||o.meuComecocos.y>=330)&&o.meuComecocos.updatePosition(h-30-o.meuComecocos.radi/2,o.meuComecocos.y),o.meuComecocos.x>h&&o.meuComecocos.updatePosition(0,o.meuComecocos.y),o.meuComecocos.x<0&&o.meuComecocos.updatePosition(h,o.meuComecocos.y)}globalThis.setup=j;globalThis.draw=k;globalThis.keyPressed=M;globalThis.preload=W;
