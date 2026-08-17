/* tema.js — grafica stagionale per tutte le app AppCenterStudio Premium */
(function(){
 var THEMES={
  classico:{sf1:'#f4efe7',sf2:'#e7dccb',carta:'#fbf9f5',bordo:'#e2d7c3',testo:'#4a4237',acc:'#a3937d',scuro:'#6f6353',chiaro:'#e9dfcd',deco:'🌿'},
  wedding:{sf1:'#faf8f3',sf2:'#ece7db',carta:'#fffdf9',bordo:'#e3ddcf',testo:'#5a5647',acc:'#9caf88',scuro:'#6d7f5c',chiaro:'#f0ead8',deco:'🕊️'},
  natale:{sf1:'#f7f2ec',sf2:'#eadfd2',carta:'#fffaf4',bordo:'#e0d2c0',testo:'#4a3226',acc:'#8c2f2f',scuro:'#5e1f1f',chiaro:'#e8d8c4',deco:'🎄'},
  carnevale:{sf1:'#faf4ff',sf2:'#efe0f2',carta:'#fffbff',bordo:'#e5d2ea',testo:'#4a3550',acc:'#8e4fa8',scuro:'#5c2f75',chiaro:'#f0dcf5',deco:'🎭'},
  pasqua:{sf1:'#fdf8f4',sf2:'#f3e6e0',carta:'#fffdfb',bordo:'#ecd9d2',testo:'#5a4a44',acc:'#c98ba0',scuro:'#96607a',chiaro:'#f6e3e9',deco:'🌸'},
  estate:{sf1:'#f2f8fa',sf2:'#dfeef2',carta:'#fbfeff',bordo:'#cfe3e9',testo:'#2f4a55',acc:'#2a7f9e',scuro:'#1d5c74',chiaro:'#dceef4',deco:'🌊'},
  inverno:{sf1:'#f2f5f8',sf2:'#e2e9ef',carta:'#fbfcfe',bordo:'#d4dee6',testo:'#3a4653',acc:'#5b7f99',scuro:'#3c5a70',chiaro:'#e2ebf2',deco:'❄️'}
 };
 function apply(t){
  var th=THEMES[t]||THEMES.classico;
  var css=
   'body{background:linear-gradient(180deg,'+th.sf1+' 0%,'+th.sf2+' 100%) !important}'+
   '.card,.g-row,.day-panel,.day-item,.cal-day,.ph,.app,.lock-card,.modal-content,.blocchetto,.c-head,.g-head,.count-bar,.topbar,nav{background-color:'+th.carta+' !important;border-color:'+th.bordo+' !important}'+
   '.cal-day.today{background-color:'+th.chiaro+' !important}'+
   '.cal-day.selected{background-color:'+th.acc+' !important}'+
   '.cal-day.selected .cal-n{color:#fff !important}'+
   'h1,h2,h3,.cal-n,.day-item .info .titolo,.app-header h1{color:'+th.scuro+' !important}'+
   'body,.hint,.status,.subtitle{color:'+th.testo+' !important}'+
   '.btn,.btn-primary,.tab.active,.badge,.topbar button:hover,.topbar .pill:hover,.bb-btn.main{background-color:'+th.acc+' !important;border-color:'+th.acc+' !important;color:#fff !important}'+
   '.btn-secondary,.mini,.btn-link,.topbar button,.topbar .pill{border-color:'+th.acc+' !important;color:'+th.scuro+' !important}'+
   '.btn-secondary:hover,.mini:hover,.btn-link:hover{background-color:'+th.acc+' !important;color:#fff !important}'+
   'input:focus,textarea:focus,select:focus{outline-color:'+th.acc+' !important}'+
   'header{background:linear-gradient(90deg,'+th.scuro+','+th.acc+') !important}'+
   '#appTemaDeco{position:fixed;right:12px;bottom:10px;font-size:26px;opacity:.35;z-index:99999;pointer-events:none;letter-spacing:4px}';
  var old=document.getElementById('styleTema');if(old)old.remove();
  var st=document.createElement('style');st.id='styleTema';st.textContent=css;
  document.head.appendChild(st);
  var od=document.getElementById('appTemaDeco');if(od)od.remove();
  var d=document.createElement('div');d.id='appTemaDeco';d.textContent=th.deco+th.deco+th.deco;
  document.body.appendChild(d);
 }
 function avvia(){
  var sc=document.currentScript;
  var base=sc?sc.src.replace(/tema\.js.*$/,''):'';
  fetch(base+'tema.json?t='+Date.now(),{cache:'no-store'})
   .then(function(r){return r.json();})
   .then(function(j){apply(j&&j.tema?j.tema:'classico');})
   .catch(function(){apply('classico');});
 }
 if(document.body)avvia();else window.addEventListener('DOMContentLoaded',avvia);
})();
