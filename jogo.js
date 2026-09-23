(function(){
'use strict';
var TINTA='#26306B';

/* ======================================================================
   Desenho dos ícones (icones.js) com as cores de cada figura
   ====================================================================== */
function clareia(hex,t){
  var n=parseInt(hex.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;
  r=Math.round(r+(255-r)*t); g=Math.round(g+(255-g)*t); b=Math.round(b+(255-b)*t);
  return '#'+((1<<24)|(r<<16)|(g<<8)|b).toString(16).slice(1);
}
function pinta(corpo,cor,cor2){
  return corpo.replace(/"#000"/g,'"'+TINTA+'"').replace(/#2F88FF/gi,cor).replace(/#43CCF8/gi,cor2||clareia(cor,.55));
}
function svg(corpo,giro){
  return '<svg class="ic" viewBox="0 0 48 48" aria-hidden="true">'+(giro?'<g transform="rotate('+giro+' 24 24)">'+corpo+'</g>':corpo)+'</svg>';
}
function icone(nome,cor,cor2,giro){ return svg(pinta(ICONES[nome],cor||'#7BD389',cor2),giro); }
function silhueta(nome){
  return svg(ICONES[nome].replace(/stroke="#[0-9a-fA-F]{3,6}"/g,'stroke="#C3C8E3"').replace(/fill="#[0-9a-fA-F]{3,6}"/g,'fill="#E6E9F5"'));
}
var UI={mapa:['map-draw','#7BD389'],album:['stickers','#FFC93C'],ajustes:['setting-two','#B8C2FF'],ouvir:['volume-up','#6EC3FF'],
  dica:['lampada','#FFD43B'],cadeado:['lock','#E3E6F3'],som:['bell-ring','#FFD43B'],anim:['magic','#B388FF'],livre:['unlock','#7BD389'],recomeca:['refresh','#FF9F43'],
  olho:['search','#6EC3FF'],feito:['check-one','#7BD389']};
function ui(k){ return k==='cadeado'?silhueta('lock'):icone(UI[k][0],UI[k][1]); }
var SETA_BRANCA='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var CHECK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#fff" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* Mascote: a coruja Lu */
function mascote(){
  var T=' stroke="'+TINTA+'" stroke-width="5" stroke-linejoin="round"';
  return '<svg class="mascote" viewBox="0 0 120 120" aria-hidden="true"><g class="m-corpo">'+
   '<path d="M29 42 21 13 47 29Z" fill="#8C7BFF"'+T+'/><path d="M91 42 99 13 73 29Z" fill="#8C7BFF"'+T+'/>'+
   '<g class="m-asa-e"><path d="M25 58c-12 12-11 30 4 39 2-14 1-27-4-39Z" fill="#6F5CE8"'+T+'/></g>'+
   '<g class="m-asa-d"><path d="M95 58c12 12 11 30-4 39-2-14-1-27 4-39Z" fill="#6F5CE8"'+T+'/></g>'+
   '<path d="M50 106v8M56 106v8M64 106v8M70 106v8" stroke="#FF9F43" stroke-width="5" stroke-linecap="round"/>'+
   '<ellipse cx="60" cy="66" rx="37" ry="43" fill="#8C7BFF"'+T+'/>'+
   '<ellipse cx="60" cy="84" rx="23" ry="21" fill="#E9E4FF"/>'+
   '<path d="M50 79l4 4 4-4M62 79l4 4 4-4M56 90l4 4 4-4" fill="none" stroke="#B9AEFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'+
   '<g class="m-olhos"><circle cx="44" cy="50" r="15" fill="#fff"'+T+'/><circle cx="76" cy="50" r="15" fill="#fff"'+T+'/>'+
   '<circle cx="46" cy="51" r="6.5" fill="'+TINTA+'"/><circle cx="78" cy="51" r="6.5" fill="'+TINTA+'"/>'+
   '<circle cx="48.5" cy="48.5" r="2.3" fill="#fff"/><circle cx="80.5" cy="48.5" r="2.3" fill="#fff"/></g>'+
   '<path d="M53 62h14l-7 10Z" fill="#FFC93C" stroke="'+TINTA+'" stroke-width="4" stroke-linejoin="round"/>'+
   '<circle cx="31" cy="67" r="5" fill="#FF9EC4" opacity=".75"/><circle cx="89" cy="67" r="5" fill="#FF9EC4" opacity=".75"/>'+
   '</g></svg>';
}

/* ======================================================================
   Figuras das sequências
   ====================================================================== */
var CORES={vermelho:'#FF6B6B',azul:'#4D96FF',amarelo:'#FFD43B',verde:'#5CCB6F',roxo:'#B388FF',laranja:'#FF9F43',rosa:'#FF8FB1'};
var FEM={vermelho:'vermelha',amarelo:'amarela',roxo:'roxa'};
var FORMAS={circulo:['circulo','m','círculo'],quadrado:['square','m','quadrado'],triangulo:['triangle','m','triângulo'],
  estrela:['star','f','estrela'],coracao:['coracao','m','coração']};
var COISAS={
  cachorro:['dog','#E8B07A','cachorro'],gato:['cat','#FFB84D','gato'],coelho:['rabbit','#FFC7D6','coelho'],sapo:['frog','#7BD389','sapo'],
  pato:['duck','#FFD43B','pato'],peixe:['fish-one','#FF9F43','peixe'],caranguejo:['crab','#FF7A6B','caranguejo'],baleia:['whale','#6EC3FF','baleia'],
  borboleta:['butterfly','#C3A6FF','borboleta'],abelha:['bee','#FFD43B','abelha'],joaninha:['bug','#FF6B6B','joaninha'],passaro:['bird','#6EC3FF','passarinho'],
  panda:['panda','#E9ECF7','panda'],maca:['apple','#FF6B6B','maçã'],banana:['banana','#FFD43B','banana'],cereja:['cherry','#FF5C7A','cereja'],
  limao:['lemon','#C8E86C','limão'],melancia:['watermelon','#6BCB77','melancia'],abacaxi:['pineapple','#FFC93C','abacaxi'],
  sol:['sun-one','#FFD43B','sol'],lua:['moon','#FFE08A','lua'],nuvem:['cloudy','#BFE3FF','nuvem'],broto:['seedling','#7BD389','broto'],
  barco:['sailboat-one','#FF8FB1','barquinho'],guardasol:['beach-umbrella','#FF9F43','guarda-sol'],
  coroa:['crown-three','#FFD43B','coroa'],joia:['diamond','#6EC3FF','joia'],chave:['key-two','#FFC93C','chave'],castelo:['castle','#C9D1FF','castelo'],
  bandeira:['flag','#FF6B6B','bandeira'],escudo:['shield-add','#6EC3FF','escudo'],espada:['holy-sword','#C9D1FF','espada'],
  luanova:['lua-nova','#FFE08A','lua nova'],luameia:['lua-meia','#FFE08A','meia lua'],luacheia:['lua-cheia','#FFE08A','lua cheia']
};
var SETAS={0:'para cima',90:'para a direita',180:'para baixo',270:'para a esquerda'};
var PONTOS={1:[[24,24]],2:[[16,16],[32,32]],3:[[15,15],[24,24],[33,33]],4:[[16,16],[32,16],[16,32],[32,32]],
  5:[[15,15],[33,15],[24,24],[15,33],[33,33]],6:[[16,14],[32,14],[16,24],[32,24],[16,34],[32,34]]};
var NUM_NOME=['zero','um','dois','três','quatro','cinco','seis','sete'];

/* devolve {svg, nome} de uma figura: "estrela:amarelo", "gato", "seta:90", "num:5", "dado:3" */
function figura(k){
  var p=k.split(':'),a=p[0],b=p[1];
  if(FORMAS[a]){ var f=FORMAS[a]; return {svg:icone(f[0],CORES[b]),nome:f[2]+' '+(f[1]==='f'&&FEM[b]?FEM[b]:b)}; }
  if(a==='seta') return {svg:icone('seta','#4D96FF',null,+b),nome:'seta '+SETAS[b]};
  if(a==='num') return {svg:svg('<circle cx="24" cy="24" r="19" fill="#FFD43B" stroke="'+TINTA+'" stroke-width="4"/>'+
      '<text x="24" y="33" text-anchor="middle" font-family="Fredoka,Nunito,sans-serif" font-weight="700" font-size="26" fill="'+TINTA+'">'+b+'</text>'),nome:'número '+b};
  if(a==='dado'){
    var c='<rect x="6" y="6" width="36" height="36" rx="9" fill="#FFE08A" stroke="'+TINTA+'" stroke-width="4"/>';
    PONTOS[b].forEach(function(q){ c+='<circle cx="'+q[0]+'" cy="'+q[1]+'" r="3.7" fill="'+TINTA+'"/>'; });
    return {svg:svg(c),nome:NUM_NOME[b]+(b==='1'?' bolinha':' bolinhas')};
  }
  var o=COISAS[a]; return {svg:icone(o[0],o[1]),nome:o[2]};
}

/* ======================================================================
   Mundos e fases
   t: next = qual vem depois · meio = qual falta no meio · erro = encontre a figura fora do lugar
      construir = complete as últimas k casas, uma de cada vez
   u = pedaço que se repete · n = tamanho · d = figura extra nas opções · g = posição do buraco
   e/x = posição e figura errada · s/a/o = sequência escrita à mão, resposta e opções · h = dica em texto
   f = figurinha [ícone, cor, nome]
   ====================================================================== */
var MUNDOS=[
 {nome:'Jardim das Cores',ic:['seedling','#7BD389'],cor:'#FFE3EE',selo:'#FF8FB1',txt:'Duas figuras que se revezam: uma, outra, uma, outra…',fases:[
  {t:'next',u:['circulo:vermelho','circulo:azul'],n:4,d:'circulo:amarelo',f:['seedling','#7BD389','Brotinho']},
  {t:'next',u:['estrela:amarelo','coracao:rosa'],n:5,d:'quadrado:verde',f:['sun-one','#FFD43B','Solzinho']},
  {t:'next',u:['cachorro','gato'],n:5,d:'coelho',f:['bug','#FF6B6B','Joaninha']},
  {t:'next',u:['maca','banana'],n:6,d:'cereja',f:['cherry','#FF5C7A','Cereja']},
  {t:'next',u:['sol','lua'],n:5,d:'nuvem',f:['umbrella','#6EC3FF','Guarda-chuva']},
  {t:'next',u:['borboleta','broto'],n:6,d:'joaninha',f:['butterfly','#C3A6FF','Borboleta']}]},
 {nome:'Floresta dos Bichos',ic:['tree-one','#6BCB77'],cor:'#DDF5E3',selo:'#5CCB6F',txt:'Agora o pedaço que se repete fica maior.',fases:[
  {t:'next',u:['circulo:vermelho','circulo:vermelho','circulo:azul'],n:5,d:'circulo:amarelo',f:['tree-one','#6BCB77','Árvore']},
  {t:'next',u:['sapo','pato','pato'],n:5,d:'peixe',f:['frog','#7BD389','Sapinho']},
  {t:'next',u:['triangulo:vermelho','quadrado:azul','circulo:amarelo'],n:5,d:'estrela:verde',f:['owl','#B388FF','Coruja']},
  {t:'next',u:['cachorro','gato','coelho'],n:7,d:'panda',f:['panda','#E9ECF7','Panda']},
  {t:'next',u:['estrela:verde','estrela:verde','coracao:roxo','coracao:roxo'],n:6,d:'circulo:azul',f:['bird','#6EC3FF','Passarinho']},
  {t:'next',u:['borboleta','abelha','joaninha','abelha'],n:6,d:'passaro',f:['elephant','#B8C2FF','Elefante']}]},
 {nome:'Praia do Meio',ic:['beach-umbrella','#FF9F43'],cor:'#DDF1FC',selo:'#4DB5F5',txt:'Alguém sumiu do meio da fila. Quem é?',fases:[
  {t:'meio',u:['peixe','estrela:amarelo'],n:6,g:3,d:'caranguejo',f:['fish-one','#FF9F43','Peixinho']},
  {t:'meio',u:['circulo:azul','circulo:amarelo'],n:7,g:2,d:'circulo:verde',f:['crab','#FF7A6B','Caranguejo']},
  {t:'meio',u:['peixe','peixe','caranguejo'],n:8,g:5,d:'baleia',f:['whale','#6EC3FF','Baleia']},
  {t:'meio',u:['melancia','abacaxi','limao'],n:8,g:4,d:'cereja',f:['dolphin','#6EC3FF','Golfinho']},
  {t:'meio',u:['circulo:vermelho','quadrado:azul','quadrado:azul'],n:8,g:1,d:'triangulo:amarelo',f:['sailboat-one','#FF8FB1','Veleiro']},
  {t:'meio',u:['barco','barco','sol','guardasol'],n:9,g:6,d:'baleia',f:['coconut-tree','#6BCB77','Coqueiro']}]},
 {nome:'Montanha dos Detetives',ic:['search','#B388FF'],cor:'#EDE6FF',selo:'#9B7BFF',txt:'Tem uma figura fora do lugar. Encontre!',fases:[
  {t:'erro',u:['circulo:vermelho','circulo:azul'],n:6,e:3,x:'circulo:vermelho',f:['search','#6EC3FF','Lupa']},
  {t:'erro',u:['cachorro','gato'],n:7,e:4,x:'coelho',f:['compass-one','#FFC93C','Bússola']},
  {t:'erro',u:['maca','maca','banana'],n:9,e:5,x:'maca',f:['mountain','#7BD389','Montanha']},
  {t:'erro',u:['triangulo:vermelho','quadrado:azul','circulo:amarelo'],n:9,e:6,x:'quadrado:azul',f:['flag','#FF6B6B','Bandeira']},
  {t:'erro',u:['estrela:amarelo','lua','lua'],n:9,e:7,x:'estrela:amarelo',f:['map-draw','#7BD389','Mapa']},
  {t:'erro',u:['coracao:rosa','coracao:rosa','estrela:verde','estrela:verde'],n:10,e:8,x:'estrela:verde',f:['telescope','#B388FF','Luneta']}]},
 {nome:'Castelo dos Construtores',ic:['castle','#FFB84D'],cor:'#FFF0D6',selo:'#FFB020',txt:'Você constrói o final da sequência, uma casa de cada vez.',fases:[
  {t:'construir',u:['circulo:vermelho','circulo:azul'],n:6,k:2,d:'circulo:amarelo',f:['key-two','#FFC93C','Chave']},
  {t:'construir',u:['coroa','joia'],n:7,k:3,d:'chave',f:['crown-three','#FFD43B','Coroa']},
  {t:'construir',u:['castelo','castelo','bandeira'],n:8,k:3,d:'chave',f:['castle','#C9D1FF','Castelo']},
  {t:'construir',u:['triangulo:vermelho','circulo:amarelo','quadrado:azul'],n:9,k:3,d:'estrela:verde',f:['shield-add','#6EC3FF','Escudo']},
  {t:'construir',u:['coracao:roxo','coracao:roxo','estrela:laranja','estrela:laranja'],n:10,k:4,d:'circulo:verde',f:['treasure-chest','#FFB84D','Baú']},
  {t:'construir',u:['coroa','escudo','escudo','coroa'],n:10,k:4,d:'espada',f:['magic-hat','#B388FF','Cartola']}]},
 {nome:'Céu das Setas',ic:['rocket-one','#FF8FB1'],cor:'#E4E8FF',selo:'#7C8CFF',txt:'Setas que giram, luas que mudam e coisas que crescem.',fases:[
  {t:'next',u:['seta:0','seta:90'],n:5,d:'seta:180',f:['hot-air-balloon','#FF8FB1','Balão']},
  {t:'next',u:['seta:0','seta:90','seta:180','seta:270'],n:6,f:['earth','#6EC3FF','Planeta Terra'],h:'A seta vai girando, sempre para o mesmo lado, como o ponteiro do relógio.'},
  {t:'next',u:['luanova','luameia','luacheia'],n:5,d:'lua',f:['moon','#FFE08A','Lua']},
  {t:'next',s:['num:1','num:2','num:3','num:4'],a:'num:5',o:['num:3','num:5','num:7'],f:['planet','#B388FF','Planeta'],h:'Cada número é um a mais que o anterior.'},
  {t:'next',s:['dado:1','dado:2','dado:3'],a:'dado:4',o:['dado:2','dado:4','dado:6'],f:['star','#FFD43B','Estrela'],h:'Cada casa tem uma bolinha a mais.'},
  {t:'construir',u:['seta:0','seta:90','seta:180','seta:270'],n:8,k:4,f:['rocket-one','#FF8FB1','Foguete'],h:'A seta vai girando, sempre para o mesmo lado, como o ponteiro do relógio.'}]}
];
var FASES=[]; MUNDOS.forEach(function(m,mi){ m.fases.forEach(function(f,fi){ f.m=mi; f.i=fi; FASES.push(f); }); });
var INSTR={next:'Qual vem depois?',meio:'Qual está faltando no meio?',erro:'Tem uma figura fora do lugar. Toque nela!',construir:'Complete a sequência, uma casa de cada vez.'};
var APOIO={next:'Toque na figura que completa a fila.',meio:'Olhe o pedaço que se repete.',erro:'Olhe com calma, uma figura de cada vez.',construir:'A casa azul é a próxima a preencher.'};
var ELOGIOS=['Muito bem!','Você conseguiu!','Isso mesmo!','Que olhar atento!','Mandou bem!'];

/* ======================================================================
   Memória (fica só neste aparelho) e ajustes
   ====================================================================== */
var CHAVE='padroes-v2';
var est={feitas:{},som:false,anim:true,livre:false};
try{ var sv=JSON.parse(localStorage.getItem(CHAVE)||'null'); if(sv) for(var k in sv) est[k]=sv[k]; }catch(e){}
try{ if(!localStorage.getItem(CHAVE) && window.matchMedia('(prefers-reduced-motion: reduce)').matches) est.anim=false; }catch(e){}
function salva(){ try{ localStorage.setItem(CHAVE,JSON.stringify(est)); }catch(e){} }

var $=function(i){return document.getElementById(i)};
function el(tag,cls,html){ var d=document.createElement(tag); if(cls) d.className=cls; if(html!=null) d.innerHTML=html; return d; }
function txt(tag,cls,t){ var d=el(tag,cls); d.textContent=t; return d; }
function aplicaAnim(){ document.body.classList.toggle('sem-animacao',!est.anim); }
function depois(ms,fn){ return setTimeout(fn,est.anim?ms:0); }

/* sons baixinhos (desligados por padrão) */
var ctx=null;
function tom(freqs){
  if(!est.som) return;
  try{
    ctx=ctx||new (window.AudioContext||window.webkitAudioContext)();
    freqs.forEach(function(f,i){
      var o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime+i*.12;
      o.type='sine'; o.frequency.value=f; g.gain.setValueAtTime(0,t);
      g.gain.linearRampToValueAtTime(.08,t+.03); g.gain.exponentialRampToValueAtTime(.0001,t+.35);
      o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t+.4);
    });
  }catch(e){}
}
function fala(t){
  try{ speechSynthesis.cancel(); var u=new SpeechSynthesisUtterance(t); u.lang='pt-BR'; u.rate=.9; speechSynthesis.speak(u); }catch(e){}
}

/* ======================================================================
   Efeitos: peça voando, faíscas, confete, mascote reagindo
   ====================================================================== */
function voa(de,para,html,fim){
  if(!est.anim||!de.animate){ fim(); return; }
  var a=de.getBoundingClientRect(),b=para.getBoundingClientRect();
  var v=el('div','voa','<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center">'+html+'</div>');
  v.style.cssText='left:'+a.left+'px;top:'+a.top+'px;width:'+a.width+'px;height:'+a.height+'px';
  v.firstChild.firstChild.style.cssText='width:70%;height:70%';
  document.body.appendChild(v);
  var dx=b.left+b.width/2-(a.left+a.width/2),dy=b.top+b.height/2-(a.top+a.height/2),s=b.width/a.width;
  var an=v.animate([{transform:'translate(0,0) scale(1)'},
    {transform:'translate('+dx/2+'px,'+(dy/2-70)+'px) scale('+((1+s)/2*1.1)+') rotate(-8deg)',offset:.5},
    {transform:'translate('+dx+'px,'+dy+'px) scale('+s+')'}],{duration:560,easing:'cubic-bezier(.45,0,.3,1)'});
  an.onfinish=function(){ v.remove(); fim(); };
}
var COR_FAISCA=['#FFC93C','#FF8FB1','#6EC3FF','#7BD389','#B388FF'];
function faiscas(alvo){
  if(!est.anim) return;
  var r=alvo.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  for(var i=0;i<10;i++){
    var f=el('div','faisca','<svg viewBox="0 0 24 24"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="'+COR_FAISCA[i%5]+'"/></svg>');
    var ang=i/10*Math.PI*2,dist=r.width*.6+Math.random()*30;
    f.style.left=(cx-7)+'px'; f.style.top=(cy-7)+'px';
    f.style.setProperty('--dx',Math.cos(ang)*dist+'px'); f.style.setProperty('--dy',Math.sin(ang)*dist+'px');
    document.body.appendChild(f); setTimeout(f.remove.bind(f),900);
  }
}
function confete(){
  if(!est.anim) return;
  for(var i=0;i<28;i++){
    var c=el('div','confete'); c.style.left=(Math.random()*100)+'vw'; c.style.background=COR_FAISCA[i%5];
    c.style.borderRadius=i%3===0?'50%':'3px'; c.style.zIndex=51;
    c.style.setProperty('--dx',(Math.random()*160-80)+'px'); c.style.setProperty('--giro',(Math.random()*720-360)+'deg');
    c.style.setProperty('--dur',(2.4+Math.random()*1.4)+'s'); c.style.setProperty('--atraso',(Math.random()*.5)+'s');
    document.body.appendChild(c); setTimeout(c.remove.bind(c),4600);
  }
}
function reage(tipo){
  var m=document.querySelector('#mascoteJogo .mascote'); if(!m) return;
  m.classList.remove('feliz','pensando'); void m.getBBox(); m.classList.add(tipo);
  clearTimeout(m._t); m._t=setTimeout(function(){ m.classList.remove(tipo); },1500);
}

/* ======================================================================
   Navegação
   ====================================================================== */
var telaAtual='mapa';
function mostra(id){
  ['mapa','jogo','album','ajustes'].forEach(function(t){ $(t).classList.toggle('oculto',t!==id); });
  var t=$(id); t.classList.remove('entra'); void t.offsetWidth; t.classList.add('entra');
  $('premio').classList.add('oculto');
  [].forEach.call(document.querySelectorAll('.confete,.faisca,.voa'),function(x){ x.remove(); });
  ['Mapa','Album','Ajustes'].forEach(function(n){ $('bt'+n).classList.toggle('ativo',id===n.toLowerCase()||(id==='jogo'&&n==='Mapa')); });
  try{ speechSynthesis.cancel(); }catch(e){}
  telaAtual=id; window.scrollTo(0,0);
}
function aberta(i){ return est.livre||i===0||!!est.feitas[i-1]||!!est.feitas[i]; }
function proxima(){ for(var i=0;i<FASES.length;i++) if(!est.feitas[i]) return i; return -1; }
function mundoCompleto(m){ return MUNDOS[m].fases.every(function(f){ return est.feitas[FASES.indexOf(f)]; }); }

/* ======================================================================
   Mapa
   ====================================================================== */
function mapa(){
  var t=$('mapa'); t.innerHTML='';
  var p=proxima(),nFeitas=Object.keys(est.feitas).length;
  var fl=el('div','fala'); fl.appendChild(el('div',null,mascote()));
  var msg=nFeitas===0?['Oi! Eu sou a Lu.','Vamos descobrir padrões juntos? Toque na bolinha amarela para começar.']
         :p<0?['Você visitou todos os mundos!','Pode jogar qualquer fase de novo quando quiser.']
         :['Que bom te ver!','A bolinha amarela mostra onde paramos.'];
  var b=el('div','balao'); b.appendChild(txt('b',null,msg[0])); b.appendChild(txt('span',null,msg[1])); fl.appendChild(b);
  t.appendChild(fl);
  var ilhas=el('div','ilhas');
  MUNDOS.forEach(function(m,mi){
    var c=el('section','ilha'); c.style.setProperty('--cor-ilha',m.cor); c.style.animationDelay=(mi*.06)+'s';
    var topo=el('div','ilha-topo');
    topo.appendChild(el('div','ilha-ic',icone(m.ic[0],m.ic[1])));
    var tx=el('div'); tx.appendChild(txt('h2',null,m.nome)); tx.appendChild(txt('p',null,m.txt)); topo.appendChild(tx);
    if(mundoCompleto(mi)) topo.appendChild(el('div','selo-ilha',ui('feito')+'<span>Explorado</span>'));
    c.appendChild(topo);
    var tr=el('div','trilha','<svg class="caminho" aria-hidden="true"></svg>');
    m.fases.forEach(function(f,fi){
      var gi=FASES.indexOf(f),bt=el('button','no'); bt.style.animationDelay=(mi*.06+fi*.05+.1)+'s';
      if(est.feitas[gi]){ bt.classList.add('feito'); bt.innerHTML=icone(f.f[0],f.f[1])+'<span class="ok">'+CHECK+'</span>'; bt.setAttribute('aria-label','Fase '+(fi+1)+', já feita: '+f.f[2]); }
      else if(aberta(gi)){ bt.classList.add(gi===p?'atual':'aberto'); bt.textContent=fi+1; bt.setAttribute('aria-label','Fase '+(fi+1)); if(gi===p) bt.appendChild(el('span','aqui',mascote())); }
      else { bt.classList.add('fechado'); bt.innerHTML=ui('cadeado'); bt.setAttribute('aria-label','Fase '+(fi+1)+', ainda fechada'); }
      bt.onclick=function(){ if(aberta(gi)) joga(gi); };
      tr.appendChild(bt);
    });
    c.appendChild(tr); ilhas.appendChild(c);
  });
  t.appendChild(ilhas);
  mostra('mapa');
  requestAnimationFrame(function(){ desenhaCaminhos(true); });
}
function desenhaCaminhos(anima){
  var trilhas=document.querySelectorAll('#mapa .trilha');
  trilhas.forEach(function(tr){
    var nos=tr.querySelectorAll('.no'); if(!nos.length) return;
    var pts=[].map.call(nos,function(n){ return [n.offsetLeft+n.offsetWidth/2,n.offsetTop+n.offsetHeight/2]; });
    var d='M'+pts[0][0]+' '+pts[0][1],dFeito=null,ult=-1;
    [].forEach.call(nos,function(n,i){ if(n.classList.contains('feito')) ult=i; });
    for(var i=1;i<pts.length;i++){
      var a=pts[i-1],b=pts[i],mx=(a[0]+b[0])/2;
      d+=' C'+mx+' '+a[1]+' '+mx+' '+b[1]+' '+b[0]+' '+b[1];
      if(i===Math.min(ult+1,pts.length-1)&&ult>=0) dFeito=d;
    }
    var s=tr.querySelector('svg.caminho');
    s.innerHTML='<path class="base" d="'+d+'"/>'+(dFeito?'<path class="feito" d="'+dFeito+'"/>':'')+'<path class="pontilhado" d="'+d+'"/>';
    var pf=s.querySelector('.feito');
    if(pf&&anima&&est.anim){ var len=pf.getTotalLength(); pf.style.setProperty('--len',len); pf.classList.add('desenha'); }
  });
}
var tRes; window.addEventListener('resize',function(){ clearTimeout(tRes); tRes=setTimeout(function(){ if(telaAtual==='mapa') desenhaCaminhos(false); },120); });

/* ======================================================================
   Jogo
   ====================================================================== */
var atual=0,L=null,seqCheia=[],resp=[],pos=0,erros=0,trava=false,botoes=[];

function joga(i){
  atual=i; L=FASES[i]; erros=0; pos=0; trava=false; botoes=[];
  var m=MUNDOS[L.m];
  $('jogo').style.setProperty('--cor-ilha',m.cor);
  $('chipMundo').innerHTML=icone(m.ic[0],m.ic[1]); $('chipMundo').appendChild(txt('span',null,m.nome));
  var ps=$('passos'); ps.innerHTML='';
  m.fases.forEach(function(f,fi){ var d=el('i'); if(est.feitas[FASES.indexOf(f)]) d.className='f'; if(fi===L.i) d.className='a'; ps.appendChild(d); });
  $('mascoteJogo').innerHTML=mascote();
  $('pergunta').innerHTML=''; $('pergunta').appendChild(txt('b',null,INSTR[L.t])); $('pergunta').appendChild(txt('span',null,APOIO[L.t]));
  $('aviso').innerHTML='';

  var tot=L.s?L.s.length:L.n;
  seqCheia=[]; for(var k=0;k<tot;k++) seqCheia.push(L.s?L.s[k]:L.u[k%L.u.length]);
  var vis=seqCheia.slice(); resp=[];
  if(L.t==='next'){ resp=[L.s?L.a:L.u[tot%L.u.length]]; vis.push(null); }
  if(L.t==='meio'){ resp=[vis[L.g]]; vis[L.g]=null; }
  if(L.t==='erro'){ vis[L.e]=L.x; }
  if(L.t==='construir'){ for(var j=tot-L.k;j<tot;j++){ resp.push(vis[j]); vis[j]=null; } }

  var s=$('seq'); s.innerHTML='';
  vis.forEach(function(e,idx){
    var d=el('div','peca'); d.style.animationDelay=(idx*.045)+'s';
    if(e===null){ d.classList.add('vazia'); d.textContent='?'; d.dataset.vaga='1'; d.setAttribute('aria-label','casa vazia'); }
    else { var fg=figura(e); d.innerHTML=fg.svg; d.setAttribute('aria-label',fg.nome); d.setAttribute('role','img'); }
    if(L.t==='erro'){
      d.classList.add('alvo'); d.tabIndex=0; d.setAttribute('role','button');
      d.onclick=function(){ tocaErro(idx,d); };
      d.onkeydown=function(ev){ if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); tocaErro(idx,d); } };
    }
    s.appendChild(d);
  });
  marcaVaga();

  var o=$('opcoes'); o.innerHTML='';
  if(L.t!=='erro'){
    var pool=L.o?L.o.slice():[];
    if(!L.o){ L.u.forEach(function(x){ if(pool.indexOf(x)<0) pool.push(x); }); if(L.d) pool.push(L.d); }
    pool.sort(function(){ return Math.random()-.5; });
    pool.forEach(function(e,idx){
      var fg=figura(e),b=el('button','opcao',fg.svg); b.style.animationDelay=(.25+idx*.07)+'s';
      b.setAttribute('aria-label',fg.nome); b._fig=e;
      b.onclick=function(){ escolhe(b); }; o.appendChild(b); botoes.push(b);
    });
  }
  $('btDica').classList.remove('chama');
  mostra('jogo');
}
function vagas(){ return [].slice.call($('seq').querySelectorAll('[data-vaga]')); }
function marcaVaga(){ vagas().forEach(function(v,i){ v.classList.toggle('agora',i===0); }); }
function avisa(t,tipo,ic){
  var a=$('aviso'); a.innerHTML='';
  var c=el('div','aviso-caixa'+(tipo?' '+tipo:''),ic?ui(ic):''); c.appendChild(txt('span',null,t)); a.appendChild(c);
}
function escolhe(b){
  if(trava||b.classList.contains('fora')) return;
  var v=vagas()[0]; if(!v) return;
  if(b._fig===resp[pos]){
    trava=true; tom([523]);
    var fg=figura(b._fig);
    voa(b,v,fg.svg,function(){
      v.innerHTML=fg.svg; v.removeAttribute('data-vaga'); v.classList.remove('vazia','agora'); v.classList.add('certa');
      v.setAttribute('aria-label',fg.nome); faiscas(v);
      pos++; erros=0;
      botoes.forEach(function(x){ x.classList.remove('fora'); });
      if(pos>=resp.length){ reage('feliz'); depois(700,conclui); }
      else { avisa('Isso! Agora a próxima casa.','bom','feito'); marcaVaga(); trava=false; }
    });
  } else {
    erros++; tom([330]); reage('pensando');
    b.classList.add('fora'); if(est.anim){ b.classList.remove('balanca'); void b.offsetWidth; b.classList.add('balanca'); }
    var frases=['Ainda não. Tudo bem! Olhe de novo.','Quase! Veja o pedaço que se repete.','Vamos com calma. A dica pode ajudar.'];
    avisa(frases[Math.min(erros-1,frases.length-1)],null,'olho');
    if(erros>=2) $('btDica').classList.add('chama');
  }
}
function tocaErro(i,d){
  if(trava) return;
  if(i===L.e){
    trava=true; tom([523]); reage('feliz');
    d.classList.add('vira');
    depois(300,function(){ var fg=figura(seqCheia[i]); d.innerHTML=fg.svg; d.classList.add('certa'); d.setAttribute('aria-label',fg.nome); faiscas(d); });
    depois(1000,conclui);
  } else {
    d.classList.add('conferida'); tom([330]); erros++; reage('pensando');
    avisa('Essa está no lugar certo. Procure outra!',null,'olho');
    if(erros>=3) $('btDica').classList.add('chama');
  }
}
function dica(){
  $('btDica').classList.remove('chama');
  var pecas=$('seq').children;
  [].forEach.call(pecas,function(p){ p.classList.remove('dica'); });
  if(L.h){ avisa(L.h,'dica','dica'); return; }
  for(var j=0;j<L.u.length&&j<pecas.length;j++) if(!pecas[j].dataset.vaga) pecas[j].classList.add('dica');
  avisa(L.t==='erro'?'As casas amarelas mostram o pedaço que se repete. Qual figura não segue esse pedaço?'
                    :'As casas amarelas mostram o pedaço que se repete. Depois dele, tudo começa de novo.','dica','dica');
}

/* ======================================================================
   Conclusão da fase
   ====================================================================== */
function conclui(){
  var novo=!est.feitas[atual]; est.feitas[atual]=1; salva();
  tom([523,659,784]);
  var ult=atual===FASES.length-1,m=MUNDOS[L.m],fimMundo=L.i===m.fases.length-1;
  var p=$('premio'); p.innerHTML='';
  var c=el('div','cartao'); c.style.setProperty('--cor-ilha',m.cor);
  var mc=el('div',null,mascote()); c.appendChild(mc.firstChild); c.firstChild.classList.add('feliz');
  var h=txt('h2',null,ELOGIOS[Math.floor(Math.random()*ELOGIOS.length)]); h.id='premioTit'; c.appendChild(h);
  var fg=el('div','figurinha','<div class="f-in">'+icone(L.f[0],L.f[1])+'</div>'); fg.style.setProperty('--cor-selo',m.selo); c.appendChild(fg);
  c.appendChild(el('div','nome-fig',(novo?'Figurinha nova: ':'Você já tem: ')+'<b></b>')); c.lastChild.lastChild.textContent=L.f[2];
  if(fimMundo) c.appendChild(txt('div','sub','Você explorou todo o mundo '+m.nome+'!'));
  var lb=el('div','linha-bts');
  var bp=el('button','bt-principal');
  if(!ult){ bp.innerHTML='Continuar '+SETA_BRANCA; bp.onclick=function(){ joga(atual+1); }; }
  else { bp.innerHTML=ui('album')+' Ver meu álbum'; bp.onclick=album; }
  lb.appendChild(bp);
  var bm=el('button','bt-leve',ui('mapa')+'Mapa'); bm.onclick=mapa; lb.appendChild(bm);
  c.appendChild(lb); p.appendChild(c); p.classList.remove('oculto');
  confete();
  setTimeout(function(){ bp.focus(); },60);
}

/* ======================================================================
   Álbum
   ====================================================================== */
function album(){
  var t=$('album'); t.innerHTML='';
  t.appendChild(el('h2','titulo-tela',ui('album')+'<span>Meu álbum</span>'));
  t.appendChild(txt('p','texto-tela','Cada fase guarda uma figurinha. Não tem pressa: cada um completa o seu álbum no seu tempo.'));
  MUNDOS.forEach(function(m,mi){
    var g=el('section','album-grupo'); g.style.setProperty('--cor-ilha',m.cor); g.style.animationDelay=(mi*.05)+'s';
    var h=el('h3',null,icone(m.ic[0],m.ic[1])); h.appendChild(txt('span',null,m.nome)); g.appendChild(h);
    var gr=el('div','album-grade');
    m.fases.forEach(function(f,fi){
      var tem=!!est.feitas[FASES.indexOf(f)];
      var s=el('div','selo '+(tem?'tem':'falta'),'<div class="s-in">'+(tem?icone(f.f[0],f.f[1]):silhueta(f.f[0]))+'</div>');
      s.style.setProperty('--cor-selo',m.selo); if(tem) s.firstChild.style.animationDelay=(mi*.05+fi*.04)+'s';
      s.appendChild(txt('span',null,tem?f.f[2]:'Fase '+(fi+1))); gr.appendChild(s);
    });
    g.appendChild(gr); t.appendChild(g);
  });
  mostra('album');
}

/* ======================================================================
   Ajustes
   ====================================================================== */
function ajustes(){
  var t=$('ajustes'); t.innerHTML='';
  t.appendChild(el('h2','titulo-tela',ui('ajustes')+'<span>Ajustes</span>'));
  t.appendChild(txt('p','texto-tela','Os ajustes ficam guardados neste aparelho.'));
  var box=el('div','ajustes');
  function chave(ic,nome,desc,prop,fn){
    var b=el('button','ajuste',ui(ic)); b.setAttribute('role','switch'); b.setAttribute('aria-checked',est[prop]?'true':'false');
    var tx=txt('div','txt',nome); tx.appendChild(txt('small',null,desc)); b.appendChild(tx); b.appendChild(el('div','chave'));
    b.onclick=function(){ est[prop]=!est[prop]; salva(); b.setAttribute('aria-checked',est[prop]?'true':'false'); if(fn) fn(); };
    box.appendChild(b);
  }
  chave('som','Sons','Sons baixinhos ao tocar nas figuras.','som');
  chave('anim','Animações','Movimentos suaves na tela. Desligue se incomodar.','anim',aplicaAnim);
  chave('livre','Todas as fases abertas','Para o professor escolher qualquer fase.','livre');
  var r=el('button','ajuste perigo',ui('recomeca')); var rt=txt('div','txt','Recomeçar do zero'); rt.appendChild(txt('small',null,'Apaga as figurinhas deste aparelho.'));
  r.appendChild(rt);
  r.onclick=function(){ if(confirm('Apagar todas as figurinhas deste aparelho?')){ est.feitas={}; salva(); mapa(); } };
  box.appendChild(r); t.appendChild(box);
  mostra('ajustes');
}

/* ======================================================================
   Início
   ====================================================================== */
aplicaAnim();
$('btInicio').insertAdjacentHTML('afterbegin',mascote());
$('btMapa').insertAdjacentHTML('afterbegin',ui('mapa'));
$('btAlbum').insertAdjacentHTML('afterbegin',ui('album'));
$('btAjustes').insertAdjacentHTML('afterbegin',ui('ajustes'));
$('btVoltar').insertAdjacentHTML('afterbegin',icone('arrow-left','#fff'));
$('btOuvir').innerHTML=ui('ouvir');
$('btDica').insertAdjacentHTML('afterbegin',ui('dica'));
$('btInicio').onclick=mapa; $('btMapa').onclick=mapa; $('btVoltar').onclick=mapa;
$('btAlbum').onclick=album; $('btAjustes').onclick=ajustes; $('btDica').onclick=dica;
$('btOuvir').onclick=function(){ fala($('pergunta').textContent.replace(/\?/,'? ')); };
document.addEventListener('keydown',function(ev){ if(ev.key==='Escape'&&!$('premio').classList.contains('oculto')) mapa(); });
mapa();
})();
