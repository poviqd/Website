const CONFIG ={
    first: 'Timofey', last: 'Androsov', role: 'Student',
    phone: '212 555 6342', telegram: 'qddddddddddddddq',
    github: 'poviqd', firm: 'GitHub', firmSub: 'Software and Projects',
    address: 'FEFU Campus 10 Ajax Bay, Russky Island Vladivostok, Russia 690922', email: 'androsov.to@dvfu.ru'
};

const $ = id => document.getElementById(id), R = (a,b) => a + Math.random()*(b-a);
$('tg').textContent = CONFIG.phone; $('tg').href = 'https://t.me/' + CONFIG.telegram;
$('gh').innerHTML = CONFIG.firm + '<small>' + CONFIG.firmSub + '</small>'; $('gh').href = 'https://github.com/' + CONFIG.github;
$('name').innerHTML = '<span class="tee">' + CONFIG.first[0] + '</span>' + CONFIG.first.slice(1) + ' <b><span class="aye">' + CONFIG.last[0] + '</span>' + CONFIG.last.slice(1) + '</b>'; $('role').textContent = CONFIG.role;
$('addr').innerHTML = CONFIG.address + '<br>'; $('mail').textContent = CONFIG.email; $('mail').href = 'mailto:' + CONFIG.email;

const PAPERS = [
    {c:'#faf8f1', f:'0.7',        o:3, s:1.2, e:74, g:1.03, font:'f1'},
    {c:'#f2f7f4', f:'0.3 0.05',   o:3, s:3.5, e:68, g:1.1,  font:'f2'},
    {c:'#f1f4f0', f:'0.09',       o:4, s:5.5, e:68, g:1.1,  font:'f3'},
    {c:'#f4f3f1', f:'0.8',        o:1, s:.4,  e:78, g:1,    font:'f4', ld:.3, dots:1},
    {c:'#fbf7ec', f:'0.05',       o:4, s:5,   e:70, g:1.1,  font:'f1'},
    {c:'#fcfcfa', f:'0.5', f2:'0.02', o:3, s:2, e:72, g:1.05, font:'f1'}
]

const W = {c:'#fdfdfc', f:'0.9', o:1, s:.4, e:78, g:1};
const EGGS = [
 {L:0, paper:W, html:`<div class="c" style="top:7%;font:600 4.4cqw/1.1 Arial;color:#444">Larry Page<br><span style="font-weight:400;font-size:3.6cqw">CEO</span></div>
  <div class="c" style="top:24%;font:700 17cqw/1 'Libre Bodoni',Georgia,serif;letter-spacing:-.02em"><b style="color:#3a5fb8">G</b><b style="color:#d6402f">o</b><b style="color:#f2c11c">o</b><b style="color:#3a5fb8">g</b><b style="color:#3f9d41">l</b><b style="color:#d6402f">e!</b></div>
  <div class="l" style="bottom:10%;font:400 2.9cqw/1.3 Arial;color:#2a3f8f">http://google.com/<br>555 Bryant, #106<br>Palo Alto, CA 94301</div>
  <div class="r" style="bottom:10%;font:400 2.9cqw/1.3 Arial;color:#2a3f8f">Office 650 330-0100<br>Fax 650 618-1499<br>larry@google.com</div>`},
 {L:2, paper:{c:'#eadfae', f:'0.07 0.05', o:4, s:2, e:70, g:1.02}, html:`<div class="c" style="top:10%;font:700 8cqw/1 Cabin,Arial;letter-spacing:-.01em;color:#5d4a1a">apple computer inc.</div>
  <div class="l" style="left:14%;top:30%;font:500 3.6cqw/1.2 Cabin,Arial;color:#6b5a30">10260 Bandley Drive<br>Cupertino, California 95014<br>(408) 996-1010</div>
  <div class="l" style="left:14%;top:58%;font:500 3.8cqw/1.25 Cabin,Arial;color:#6b5a30">Steven Jobs<br><span style="font-size:3cqw">Vice President,<br>New Product Development</span></div>`},
 {L:1, paper:W, html:`<div class="c" style="top:11%;font:700 5cqw Verdana,Tahoma,sans-serif;color:#1a2748">I’m CEO, Bitch.</div>
  <div class="c" style="top:42%;font:400 4.2cqw Verdana,Tahoma,sans-serif">mark zuckerberg</div>
  <div class="c" style="top:60%;font:400 2.6cqw/1.5 Verdana,Tahoma,sans-serif"><b style="font-size:3.2cqw">facebook</b> <span style="font-variant-caps:small-caps">corporate headquarters</span><br>3156 university avenue, palo alto, ca 94301-1605<br>phone: 650-543-4800 fax: 650-543-4801</div>`},
 {L:1, paper:{c:'#f8f8f3', f:'0.8', o:2, s:.6, e:76, g:1.02}, html:`<div class="c" style="top:9%;font:700 7.4cqw Arial;letter-spacing:.04em;color:#1d3f7a">DUNDER MIFFLIN</div>
  <div class="c" style="top:23%;font:400 3cqw Arial;letter-spacing:.3em;color:#1d3f7a">PAPER COMPANY, INC.</div>
  <div class="c" style="top:42%;font:700 5cqw/1.3 Arial">Michael Scott<br><span style="font:400 3.6cqw Arial">Regional Manager</span></div>
  <div class="l" style="bottom:9%;font:400 2.7cqw/1.35 Arial;color:#333">1725 Slough Avenue<br>Scranton, PA 18505</div>
  <div class="r" style="bottom:9%;font:italic 2.7cqw/1.35 Arial;color:#333">Limitless paper<br>in a paperless world</div>`},
 {L:1, paper:W, html:`<div class="l" style="top:9%;font:700 4.6cqw 'Courier New',monospace;letter-spacing:.12em;color:#1c3a1c">METACORTEX</div>
  <div class="c" style="top:38%;font:700 5.4cqw/1.3 Arial;color:#111">Thomas A. Anderson<br><span style="font:400 3.6cqw Arial">Program Writer</span></div>
  <div class="c" style="bottom:9%;font:400 2.6cqw/1.4 'Courier New',monospace;color:#2a2a2a">Software Development Division<br>there is no spoon · 555 0199</div>`},
 {L:0, paper:{c:'#fbfaf5', f:'0.7', o:3, s:1.2, e:74, g:1.03}, html:`<div class="l" style="top:9%;font:500 3.6cqw 'Courier New',monospace;color:#6b6b6b">// business card</div>
  <div class="c" style="top:30%;font:700 8cqw Georgia,serif">Hello, World!</div>
  <div class="c" style="top:55%;font:500 4cqw/1.4 'Courier New',monospace">${CONFIG.first} ${CONFIG.last}<br>${CONFIG.role}</div>
  <div class="c" style="bottom:9%;font:400 2.8cqw 'Courier New',monospace;color:#444">git commit -m "hire me" · ${CONFIG.email}</div>`}
];

const rr = Math.random(), k = Math.random()*(PAPERS.length+1)|0;
const egg = rr < .1 ? EGGS[Math.random()*(EGGS.length-1)|0] : k === PAPERS.length ? EGGS[EGGS.length-1] : null;
const pi = Math.random()*PAPERS.length|0, p = egg ? egg.paper : PAPERS[pi], card = $('card'), sd = Math.random()*9999|0;
const noise = p.f2
  ? `<feTurbulence type='fractalNoise' baseFrequency='${p.f}' numOctaves='${p.o}' seed='${sd}' result='a'/><feTurbulence type='fractalNoise' baseFrequency='${p.f2}' numOctaves='${p.o}' seed='${sd+5}' result='b'/><feComposite in='a' in2='b' operator='arithmetic' k2='.5' k3='.5' result='n'/>`
  : `<feTurbulence type='fractalNoise' baseFrequency='${p.f}' numOctaves='${p.o}' seed='${sd}' result='n'/>`;
const gain = ['R','G','B'].map(c => `<feFunc${c} type='linear' slope='${p.g}'/>`).join('');
const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='700' height='400'><filter id='f' x='0' y='0' width='100%' height='100%'>${noise}<feDiffuseLighting in='n' lighting-color='#fff' surfaceScale='${p.s}'><feDistantLight azimuth='${30+Math.random()*60|0}' elevation='${p.e}'/></feDiffuseLighting><feComponentTransfer>${gain}</feComponentTransfer></filter><rect width='100%' height='100%' filter='url(#f)'/></svg>`;
Object.assign($('paper').style, {backgroundColor:p.c, backgroundImage:`url("data:image/svg+xml,${encodeURIComponent(svg)}")`, backgroundSize:'100% 100%', backgroundBlendMode:'multiply'});
if(egg){card.classList.add('egg'); $('paper').insertAdjacentHTML('afterend', `<div class="egglayer">${egg.html}</div>`)}
else{card.classList.add(p.font, 'p' + pi); if(p.dots) $('tg').textContent = CONFIG.phone.replace(/ /g,'.')}
card.style.setProperty('--la', R(100,170).toFixed(0) + 'deg');
card.style.setProperty('--ld', (p.ld ?? R(.05,.2)).toFixed(2));
card.style.transform = `rotate(${R(-1.8,1.2).toFixed(2)}deg)`;

const r = Math.random(), L = egg ? egg.L : r < .3 ? 0 : r < .7 ? 1 : 2;
card.style.borderRadius = [2,3,7][L] + 'px';
if(L === 2) $('paper').style.filter = 'brightness(.96) saturate(.85)';
(function(){
  const c = $('wear'), x = c.getContext('2d'), W = c.width, H = c.height;
  const line = (x1,y1,x2,y2,col,w) => {x.strokeStyle = col; x.lineWidth = w; x.beginPath(); x.moveTo(x1,y1); x.lineTo(x2,y2); x.stroke()};
  const blot = (cx,cy,rad,col) => {const g = x.createRadialGradient(cx,cy,0,cx,cy,rad); g.addColorStop(0,col); g.addColorStop(1,'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(cx-rad,cy-rad,rad*2,rad*2)};
  x.lineCap = 'round';
  for(let i = 0; i < [60,500,1600][L]; i++){
    x.fillStyle = Math.random() < .5 ? `rgba(255,255,255,${R(.1,.4)})` : `rgba(60,45,30,${R(.05,.25)})`;
    const s = R(.5, L ? 2.6 : 1.5); x.fillRect(R(0,W), R(0,H), s, s);
  }
  if(!L) return;
  const g = x.createRadialGradient(W/2,H/2,H*.3,W/2,H/2,W*.62);
  g.addColorStop(0,'rgba(150,110,50,0)'); g.addColorStop(1,`rgba(150,110,50,${[0,.16,.34][L]})`);
  x.fillStyle = g; x.fillRect(0,0,W,H);
  [[0,0],[W,0],[0,H],[W,H]].forEach(([cx,cy]) => { if(L === 2 || Math.random() < .5) blot(cx,cy,R(50,130)*L,'rgba(110,95,75,.45)') });
  for(let i = 0; i < L*16; i++){
    const t = R(0,1), len = R(40,200), e = R(1,4), col = `rgba(255,255,255,${R(.3,.6)})`;
    [() => line(t*W,e,t*W+len,e,col,R(1,3)), () => line(t*W,H-e,t*W+len,H-e,col,R(1,3)),
     () => line(e,t*H,e,t*H+len,col,R(1,3)), () => line(W-e,t*H,W-e,t*H+len,col,R(1,3))][Math.random()*4|0]();
  }
  const dir = R(0,Math.PI);
  for(let i = 0; i < [0,25,100][L]; i++){
    const sx = R(0,W), sy = R(0,H), a = dir + R(-.4,.4), len = R(15,90);
    line(sx,sy,sx+Math.cos(a)*len,sy+Math.sin(a)*len, Math.random() < .6 ? 'rgba(255,255,255,.35)' : 'rgba(70,60,50,.18)', R(.6,2));
  }
  for(let i = 0; i < [0,1,3][L]; i++){
    const x1 = R(.05,.95)*W, x2 = R(.05,.95)*W, cx = (x1+x2)/2 + R(-40,40);
    const path = o => {x.beginPath(); x.moveTo(x1+o,0); x.quadraticCurveTo(cx+o,H/2,x2+o,H); x.stroke()};
    x.strokeStyle = 'rgba(60,45,30,.06)'; x.lineWidth = 9; path(0);
    x.strokeStyle = `rgba(50,40,30,${L === 2 ? .3 : .18})`; x.lineWidth = 1.5; path(0);
    x.strokeStyle = 'rgba(255,255,255,.55)'; x.lineWidth = 1.5; path(2);
  }
  if(Math.random() < .5){
    const cx = R(.2,.8)*W, cy = R(.2,.8)*H, rot = R(0,3);
    for(let k = 2; k < 14; k++){x.strokeStyle = 'rgba(90,80,70,.07)'; x.lineWidth = 2; x.beginPath(); x.ellipse(cx,cy,k*5,k*7,rot,0,6.3); x.stroke()}
  }
  if(L === 2 || Math.random() < .3){
    blot(R(.1,.9)*W, R(.1,.9)*H, R(60,150), 'rgba(140,100,50,.18)');
    if(L === 2 && Math.random() < .6){
      const cx = R(.2,.8)*W, cy = R(.25,.75)*H, rad = R(60,110);
      blot(cx,cy,rad,'rgba(140,95,45,.1)');
      x.strokeStyle = 'rgba(110,70,30,.28)'; x.lineWidth = R(4,9);
      x.beginPath(); x.arc(cx,cy,rad,R(0,1),R(5,6.2)); x.stroke();
    }
  }
})();

const cv = $('draw'), ctx = cv.getContext('2d');
const CUR = {
  pencil: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><path d='M2 30l3-9 17-17 6 6-17 17z' fill='%23e0a526' stroke='%23222' stroke-width='1.5'/><path d='M2 30l3-9 6 6z' fill='%23333'/></svg>") 2 30, crosshair`,
  eraser: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><rect x='5' y='9' width='22' height='14' rx='3' fill='%23f2efe8' stroke='%23222' stroke-width='1.5'/><rect x='5' y='9' width='9' height='14' rx='3' fill='%232c5fa8'/></svg>") 16 16, cell`
};
let tool = null, drawing = false, last = null;
const pos = e => {const b = cv.getBoundingClientRect(); return {x:(e.clientX-b.left)*cv.width/b.width, y:(e.clientY-b.top)*cv.height/b.height, p:e.pressure||.5}};
function stroke(a,b){
  ctx.lineCap = ctx.lineJoin = 'round';
  if(tool === 'eraser'){
    ctx.globalCompositeOperation = 'destination-out'; ctx.globalAlpha = 1; ctx.lineWidth = 34;
    ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); return;
  }
  ctx.globalCompositeOperation = 'source-over';
  const w = 2.2 + b.p*1.8, j = () => (Math.random()-.5)*1.4;
  ctx.strokeStyle = '#34343a'; ctx.globalAlpha = .32*(.6+b.p); ctx.lineWidth = w;
  ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
  const n = Math.ceil(Math.hypot(b.x-a.x,b.y-a.y)*1.2)+3;
  ctx.fillStyle = '#2a2a2f';
  for(let i = 0; i < n; i++){ const t = Math.random(); ctx.globalAlpha = R(.25,.7); ctx.fillRect(a.x+(b.x-a.x)*t+R(-w,w)*.6, a.y+(b.y-a.y)*t+R(-w,w)*.6, R(.5,1.3), R(.5,1.3)); }
}
cv.addEventListener('pointerdown', e => {if(!tool) return; drawing = true; cv.setPointerCapture(e.pointerId); last = pos(e); stroke(last,{x:last.x+.1,y:last.y+.1,p:last.p})});
cv.addEventListener('pointermove', e => {if(!drawing) return; const q = pos(e); stroke(last,q); last = q});
['pointerup','pointercancel'].forEach(t => cv.addEventListener(t, () => drawing = false));
function pick(t){
  tool = tool === t ? null : t;
  ['pencil','eraser'].forEach(n => $(n).setAttribute('aria-pressed', tool === n));
  cv.style.cursor = tool ? CUR[tool] : 'grab';
  card.classList.toggle('inking', !!tool);
}
$('pencil').onclick = () => pick('pencil');
$('eraser').onclick = () => pick('eraser');

let z = 10, wasDrag = false;
function drag(el, skip){
  let s = null; el._t = {x:0, y:0};
  const put = () => el.style.translate = `${el._t.x}px ${el._t.y}px`;
  el.put = (x,y) => {el._t = {x,y}; put()};
  el.addEventListener('pointerdown', e => {
    if(e.button || (skip && skip(e))) return;
    s = {x:e.clientX, y:e.clientY, ox:el._t.x, oy:el._t.y, on:false, id:e.pointerId};
    el.style.zIndex = ++z;
  });
  el.addEventListener('pointermove', e => {
    if(!s || e.pointerId !== s.id) return;
    const dx = e.clientX - s.x, dy = e.clientY - s.y;
    if(!s.on){
      if(Math.hypot(dx,dy) < 6) return;
      s.on = true; el.setPointerCapture(e.pointerId); el.classList.add('lift'); document.body.classList.add('dragging');
    }
    const old = el._t; el._t = {x:s.ox+dx, y:s.oy+dy}; put();
    const b = el.getBoundingClientRect(), cx = b.left+b.width/2, cy = b.top+b.height/2;
    if(cx < 0 || cy < 0 || cx > innerWidth || cy > innerHeight){el._t = old; put()}
  });
  const end = () => {
    if(!s) return;
    if(s.on){wasDrag = true; setTimeout(() => wasDrag = false, 0)}
    el.classList.remove('lift'); document.body.classList.remove('dragging'); s = null;
  };
  el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
  el.addEventListener('click', e => {if(wasDrag){e.preventDefault(); e.stopImmediatePropagation()}}, true);
}
drag(card, () => tool);
drag($('pencil')); drag($('eraser'));
['pencil', 'eraser'].forEach(n => {
  $(n).style.setProperty('--r', R(-45, 45).toFixed(1) + 'deg');
  $(n).put(R(-40,40), R(-20, 20));
});

const TOUCAN = 'toucan.jpg';
const tee = document.querySelector('.tee');
const onTee = e => {
    if(tool) return false;
    const b = tee.getBoundingClientRect();
    return b.width > 0 && e.clientX >= b.left-6 && e.clientX <= b.right+6 && e.clientY >= b.top-6 && e.clientY <= b.bottom+6;
};
card.addEventListener('pointermove', e => {
    if(!tool && !drawing && !document.body.classList.contains('dragging')) cv.style.cursor = onTee(e) ? 'pointer' : 'grab';
});
card.addEventListener('click', e => {if(onTee(e)) showPhoto()});
function showPhoto(){
  const o = document.createElement('div'); o.className = 'lb';
  o.innerHTML = `<figure><img src="${TOUCAN}" alt=""></figure>`;
  const esc = e => {if(e.key === 'Escape') close()};
  const close = () => {o.classList.add('out'); setTimeout(() => o.remove(), 250); removeEventListener('keydown', esc)};
  o.onclick = close; addEventListener('keydown', esc); document.body.appendChild(o);
}

card.addEventListener('click', e => {if(tool && e.target.closest('a')) e.preventDefault()}, true);
