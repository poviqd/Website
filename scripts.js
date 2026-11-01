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