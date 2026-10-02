/* ── helpers shared by all mock screens ── */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
function toast(msg){let t=$('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('on');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('on'),2200)}
function initTabs(root=document){
  $$('[data-tabs]',root).forEach(g=>{
    const tabs=$$('.tab',g), scope=document.querySelector(g.dataset.tabs);
    tabs.forEach(t=>t.addEventListener('click',()=>{
      tabs.forEach(x=>x.classList.toggle('on',x===t));
      $$(':scope > .pane',scope).forEach(p=>p.classList.toggle('on',p.id===t.dataset.pane));
      window.scrollTo({top:0});
    }));
  });
}
function openModal(id){$('#'+id).classList.add('on')}
function closeModal(id){$('#'+id).classList.remove('on')}
document.addEventListener('click',e=>{
  if(e.target.classList&&e.target.classList.contains('overlay'))e.target.classList.remove('on');
  const mb=e.target.closest('.menu-group>.menu-btn'); if(mb)mb.parentElement.classList.toggle('open');
});
function ic(n,c=''){const p={
 dash:'<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>',
 trend:'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
 users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
 file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
 bar:'<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
 user:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>',
 chev:'<polyline points="6 9 12 15 18 9"/>',
 bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
 compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
 layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
 grad:'<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
 mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>',
 send:'<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
 plus:'<path d="M12 5v14M5 12h14"/>', edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
 dl:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
 up:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
 search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
 check:'<polyline points="20 6 9 17 4 12"/>', clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
 eye:'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
 refresh:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M8 16H3v5"/>',
 print:'<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
 book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
 flask:'<path d="M10 2v7.5L4 20a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L14 9.5V2"/><path d="M8.5 2h7"/>',
 award:'<circle cx="12" cy="8" r="6"/><path d="M15.5 13.9 17 22l-5-3-5 3 1.5-8.1"/>',
 brief:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
 target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
 spark:'<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/>',
 link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
 shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
 cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
 code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
 hist:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
 trash:'<path d="M3 6h18"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/>',
 star:'<polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/>',
 filter:'<polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"/>'
}[n]||'';return `<svg class="i ${c}" viewBox="0 0 24 24">${p}</svg>`}
function hydrateIcons(){$$('[data-i]').forEach(e=>{e.outerHTML=ic(e.dataset.i,e.dataset.c||'')})}

/* radar chart (SVG) — series:[{name,color,values[]}] */
function radar(el,labels,series,opt={}){
  const S=opt.size||360,cx=S/2,cy=S/2,R=S/2-62,n=labels.length,max=opt.max||100,rings=[20,40,60,80,100];
  const pt=(i,v)=>{const a=-Math.PI/2+2*Math.PI*i/n;return[cx+R*v/max*Math.cos(a),cy+R*v/max*Math.sin(a)]};
  let g='';rings.forEach(r=>{g+=`<polygon points="${labels.map((_,i)=>pt(i,r).join(',')).join(' ')}" fill="none" stroke="#e5dede" stroke-width="1"/>`;
    g+=`<text x="${cx+3}" y="${cy-R*r/max+10}" font-size="9" fill="#aaa">${r}</text>`});
  labels.forEach((l,i)=>{const[x,y]=pt(i,max),[lx,ly]=pt(i,max+14);g+=`<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#e5dede"/>`;
    const anc=Math.abs(lx-cx)<8?'middle':lx>cx?'start':'end';g+=`<text x="${lx}" y="${ly+4}" font-size="11.5" font-weight="600" fill="#444" text-anchor="${anc}">${l}</text>`});
  series.forEach(s=>{const p=s.values.map((v,i)=>pt(i,v).join(',')).join(' ');
    g+=`<polygon points="${p}" fill="${s.color}" fill-opacity="${s.fill??.18}" stroke="${s.color}" stroke-width="2" ${s.dash?'stroke-dasharray="5 4"':''}/>`;
    if(!s.dash)s.values.forEach((v,i)=>{const[x,y]=pt(i,v);g+=`<circle cx="${x}" cy="${y}" r="3.5" fill="${s.color}"/>`})});
  el.innerHTML=`<svg viewBox="0 0 ${S} ${S}" style="max-width:${S}px;margin:auto">${g}</svg>`}

/* grouped vertical bars — data:[{label,values[]}], colors[] */
function bars(el,data,colors,opt={}){
  const W=opt.w||560,H=opt.h||240,L=34,B=34,T=14,max=opt.max||100,gw=(W-L-10)/data.length,k=colors.length,bw=Math.min(28,(gw-16)/k);
  let g='';[0,25,50,75,100].filter(v=>v<=max||v===0).forEach(v=>{const y=T+(H-T-B)*(1-v/max);g+=`<line x1="${L}" x2="${W}" y1="${y}" y2="${y}" stroke="#eee"/><text x="${L-6}" y="${y+4}" font-size="10" fill="#999" text-anchor="end">${Math.round(v)}</text>`});
  data.forEach((d,i)=>{const x0=L+gw*i+(gw-bw*k-(k-1)*3)/2;d.values.forEach((v,j)=>{const h=(H-T-B)*v/max,x=x0+j*(bw+3),y=H-B-h;
    g+=`<rect x="${x}" y="${y}" width="${bw}" height="${h}" rx="3" fill="${colors[j]}"><title>${d.label}: ${v}</title></rect>`;
    if(opt.val!==false)g+=`<text x="${x+bw/2}" y="${y-4}" font-size="10" font-weight="600" fill="#444" text-anchor="middle">${v}</text>`});
    g+=`<text x="${L+gw*i+gw/2}" y="${H-12}" font-size="11" fill="#555" text-anchor="middle">${d.label}</text>`});
  el.innerHTML=`<svg viewBox="0 0 ${W} ${H}">${g}</svg>`}

/* line chart — x labels, series:[{name,color,values[]}] */
function lines(el,xs,series,opt={}){
  const W=opt.w||560,H=opt.h||240,L=36,R=16,B=32,T=14,max=opt.max||100,min=opt.min||0,sx=i=>L+(W-L-R)*i/(xs.length-1||1),sy=v=>T+(H-T-B)*(1-(v-min)/(max-min));
  let g='';const step=(max-min)/4;for(let k=0;k<=4;k++){const v=min+step*k,y=sy(v);g+=`<line x1="${L}" x2="${W-R}" y1="${y}" y2="${y}" stroke="#eee"/><text x="${L-6}" y="${y+4}" font-size="10" fill="#999" text-anchor="end">${Math.round(v)}${opt.unit||''}</text>`}
  xs.forEach((x,i)=>g+=`<text x="${sx(i)}" y="${H-10}" font-size="11" fill="#555" text-anchor="middle">${x}</text>`);
  series.forEach(s=>{g+=`<polyline fill="none" stroke="${s.color}" stroke-width="2.5" points="${s.values.map((v,i)=>sx(i)+','+sy(v)).join(' ')}"/>`;
    s.values.forEach((v,i)=>{g+=`<circle cx="${sx(i)}" cy="${sy(v)}" r="4" fill="#fff" stroke="${s.color}" stroke-width="2.5"><title>${s.name} ${xs[i]}: ${v}</title></circle>`;if(opt.val!==false)g+=`<text x="${sx(i)}" y="${sy(v)-9}" font-size="10" font-weight="600" fill="${s.color}" text-anchor="middle">${v}${opt.unit||''}</text>`})});
  el.innerHTML=`<svg viewBox="0 0 ${W} ${H}">${g}</svg>`}

/* donut — parts:[{name,v,color}] */
function donut(el,parts,center){
  const S=180,cx=90,cy=90,r=68,sw=26,tot=parts.reduce((a,b)=>a+b.v,0);let a0=-Math.PI/2,g='';
  parts.forEach(p=>{const a1=a0+2*Math.PI*p.v/tot,l=a1-a0>Math.PI?1:0;
    const d=`M${cx+r*Math.cos(a0)} ${cy+r*Math.sin(a0)} A${r} ${r} 0 ${l} 1 ${cx+r*Math.cos(a1-.0001)} ${cy+r*Math.sin(a1-.0001)}`;
    g+=`<path d="${d}" fill="none" stroke="${p.color}" stroke-width="${sw}"><title>${p.name} ${p.v}</title></path>`;a0=a1});
  g+=`<text x="${cx}" y="${cy-2}" font-size="22" font-weight="700" text-anchor="middle" fill="#242424">${center[0]}</text><text x="${cx}" y="${cy+16}" font-size="11" text-anchor="middle" fill="#888">${center[1]}</text>`;
  el.innerHTML=`<svg viewBox="0 0 ${S} ${S}" style="max-width:${S}px;margin:auto">${g}</svg>`}

/* admin shell */
const ADMIN_MENU=[
 {t:'대시보드',i:'dash',u:'#'},
 {t:'대학원 성과지표',i:'trend',s:[['핵심성과지표'],['자율성과지표']]},
 {t:'교육연구단 성과지표',i:'users',u:'#'},
 {t:'게시판관리',i:'file',s:[['공지사항'],['자료실']]},
 {t:'핵심역량진단',i:'bar',s:[['진단현황'],['버전관리'],['설문지관리']]},
 {t:'진로 트랙 검사',i:'compass',s:[['검사 운영·문항 탑재','career-track'],['결과 대시보드','career-track']],isNew:1},
 {t:'통합 프로파일',i:'layers',u:'integrated-profile',key:'profile',isNew:1},
 {t:'졸업생 진로 추적',i:'grad',u:'graduate-tracking',key:'grad',isNew:1},
 {t:'학생정보',i:'user',u:'#'}
];
function renderAdmin(active){
  const html=ADMIN_MENU.map(m=>{
    if(m.s){const open=m.key===active||m.s.some(x=>x[1]===active);
      return `<div class="menu-group ${open?'open':''}"><button class="menu-btn">${ic(m.i,'lg')}<span class="grow">${m.t}</span>${m.isNew?'<span class="new-dot">NEW</span>':''}${ic('chev','chev')}</button><div class="submenu">${m.s.map((x,k)=>`<a href="${x[1]?x[1]+'.html':'#'}" class="${x[1]===active&&(k===0||x[1]!=='career-track')?(k===0?'active':''):''}">${x[0]}</a>`).join('')}</div></div>`}
    const on=(m.u===active||m.key===active);
    return `<a class="menu-btn ${on?'active':''}" href="${m.u&&m.u!=='#'?m.u+'.html':'#'}">${ic(m.i,'lg')}<span class="grow">${m.t}</span>${m.isNew?'<span class="new-dot">NEW</span>':''}</a>`}).join('');
  $('#sidebar-nav').innerHTML=html}
