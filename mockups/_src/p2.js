renderAdmin('profile');initTabs();
const CORE=['논리적 추론','다학제간 통찰','독창적 발상','메타인지적 성찰','연구문제 구조화','증거기반 분석'];
const LEARN=['학업적 효능감','학업적 회복탄력성','성실성 및 책임감','시간관리','집중력·학습환경','학습전략·정보처리'];
const TRK=['학술연구형','산업 R&D형','창업·혁신형','정책·공공형','교육·전수형','전문직·컨설팅형'];
const TDIM=['연구탐구','기술개발','사업개척','공공기여','교육전달','전문서비스'];
const TCOL=['#7E191B','#2563eb','#d97706','#0d9488','#7c3aed','#16a34a'];
const RAW=[
 ['김민준','2024020001','경영학과','박사',2024,[68,58,55,62,69,71],[85,80,81,72,76,74],[82,60,48,55,66,58]],
 ['이서연','2025010012','AI경영학과','석사',2025,[80,74,72,78,76,82],[90,86,88,80,84,86],[58,86,52,40,45,62]],
 ['박현우','2023030007','데이터사이언스학과','통합',2023,[74,70,66,72,70,78],[79,75,70,66,72,78],[66,90,50,44,48,60]],
 ['Wang Fang','2024020045','경영학과','박사',2024,[70,66,64,68,72,74],[72,70,76,64,66,70],[88,55,40,62,70,50]],
 ['정하은','2025010023','마케팅학과','석사',2025,[62,66,78,60,58,60],[70,68,66,74,64,62],[50,46,80,52,60,84]],
 ['오진석','2023020018','회계학과','박사',2023,[78,64,60,72,74,84],[84,82,88,78,80,82],[72,48,40,60,58,88]],
 ['Nguyen Thi Mai','2025010034','국제경영학과','석사',2025,[72,76,70,66,68,72],[80,78,74,70,76,79],[55,60,76,58,52,82]],
 ['최예진','2024010009','재무학과','석사',2024,[70,62,58,64,68,80],[76,74,78,69,71,73],[52,50,45,58,60,90]],
 ['한승우','2024030002','경영정보학과','통합',2024,[66,72,74,62,70,68],[70,66,72,60,68,70],[60,84,66,44,40,58]],
 ['유태현','2025020008','데이터사이언스학과','박사',2025,[82,78,76,80,84,86],[88,86,90,82,86,88],[70,88,60,50,46,64]],
 ['Tanaka Yuki','2024020056','AI경영학과','박사',2024,[74,68,62,70,72,76],[78,70,66,64,70,72],[84,58,50,66,72,52]],
 ['강수빈','2023010015','경영학과','석사',2023,[60,58,54,62,60,66],[68,72,70,60,66,64],[48,45,40,60,88,62]]
].map(r=>({n:r[0],id:r[1],dept:r[2],prog:r[3],yr:r[4],core:r[5],learn:r[6],trk:r[7],
  cs:Math.round(r[5].reduce((a,b)=>a+b)/6),ls:Math.round(r[6].reduce((a,b)=>a+b)/6),ts:Math.max(...r[7]),top:r[7].indexOf(Math.max(...r[7]))}));
const avg=a=>Math.round(a.reduce((x,y)=>x+y,0)/(a.length||1));
const lvl=s=>s>=85?['탁월','b-am']:s>=75?['우수','b-gr']:s>=65?['보통','b-bl']:['개선필요','b-rd'];
const mask=n=>n.length<=2?n:n[0]+'*'.repeat(n.length-2)+n[n.length-1];

/* 3종 대시보드 */
const barRow=(n,v,c)=>`<div class="bar-row" style="grid-template-columns:110px 1fr 34px"><span class="n">${n}</span><div class="bar"><i style="width:${v}%;background:${c}"></i></div><span class="v">${v}</span></div>`;
$('#d1').innerHTML=CORE.map((n,i)=>barRow(n,avg(RAW.map(s=>s.core[i])),'#2563eb')).join('');
$('#d2').innerHTML=LEARN.map((n,i)=>barRow(n,avg(RAW.map(s=>s.learn[i])),'#16a34a')).join('');
const tc=TRK.map((_,i)=>RAW.filter(s=>s.top===i).length);
donut($('#dDonut'),TRK.map((n,i)=>({name:n,v:tc[i]||.0001,color:TCOL[i]})),[RAW.length,'표본(명)']);
$('#dLg').innerHTML=TRK.map((n,i)=>`<span><i style="background:${TCOL[i]}"></i>${n} ${tc[i]}</span>`).join('');
lines($('#dTrend'),['2025-1','2025-2','2026-1','2026-2'],[{name:'핵심역량',color:'#2563eb',values:[66,68,70,71]},{name:'학습연구역량',color:'#16a34a',values:[70,72,73,75]}],{min:50,max:90});
$('#dPart').innerHTML=[['핵심역량 진단',141,'#2563eb'],['학습연구역량 진단',136,'#16a34a'],['진로 트랙 검사',128,'#d97706'],['3종 모두 완료',94,'#7E191B']].map(x=>`<div><div class="row small" style="justify-content:space-between"><b>${x[0]}</b><span>${x[1]} / 186명 (${Math.round(x[1]/186*100)}%)</span></div><div class="bar" style="margin-top:4px"><i style="width:${x[1]/186*100}%;background:${x[2]}"></i></div></div>`).join('')+'<div class="note info"><span data-i="info"></span><div>3종 중 하나라도 미완료인 학생은 통합 프로파일에서 <b>미응시 항목이 회색으로 표시</b>되며 해당 항목은 비교에서 제외됩니다.</div></div>';

/* 기준별 통계 */
const GK={dept:['학과','dept'],prog:['과정','prog'],year:['입학연도','yr']};let G='dept';
[...new Set(RAW.map(s=>s.dept))].forEach(d=>$('#sfDept').insertAdjacentHTML('beforeend',`<option>${d}</option>`));
function drawStat(){
  const fp=$('#sfProg').value,fy=$('#sfYear').value,fd=$('#sfDept').value;
  const L=RAW.filter(s=>(!fp||s.prog===fp)&&(!fy||String(s.yr)===fy)&&(!fd||s.dept===fd)),k=GK[G][1];
  const groups={};L.forEach(s=>(groups[s[k]]=groups[s[k]]||[]).push(s));
  const rows=Object.entries(groups).sort((a,b)=>String(a[0]).localeCompare(String(b[0]))).map(([g,a])=>{
    const cs=avg(a.map(x=>x.cs)),ls=avg(a.map(x=>x.ls)),ts=avg(a.map(x=>x.ts));
    const cnt=TRK.map((_,i)=>a.filter(x=>x.top===i).length),ti=cnt.indexOf(Math.max(...cnt));
    const ci=CORE.map((_,i)=>avg(a.map(x=>x.core[i]))),li=LEARN.map((_,i)=>avg(a.map(x=>x.learn[i])));
    const all=[...CORE.map((n,i)=>[n,ci[i]]),...LEARN.map((n,i)=>[n,li[i]])].sort((x,y)=>y[1]-x[1]);
    return{g,n:a.length,done:a.length-(String(g).length%2),cs,ls,ts,ti,top:all.slice(0,1)[0][0],low:all[all.length-1][0],arr:a}});
  $('#stTitle').textContent=GK[G][0]+'별 3종 평균 비교';$('#stTh').textContent=GK[G][0];
  bars($('#stChart'),rows.map(r=>({label:String(r.g).replace('데이터사이언스학과','데이터사이언스').replace('학과','').replace('AI경영','AI경영'),values:[r.cs,r.ls,r.ts]})),['#2563eb','#16a34a','#d97706'],{w:Math.max(560,rows.length*110),h:250,val:rows.length<=6});
  const best=[...rows].sort((a,b)=>(b.cs+b.ls)-(a.cs+a.ls))[0],worst=[...rows].sort((a,b)=>(a.cs+a.ls)-(b.cs+b.ls))[0];
  $('#stSum').innerHTML=rows.length?`<div class="kpi" style="padding:0"><div class="ic bg-g"><span data-i="star" data-c="lg"></span></div><div><div class="l">역량 평균 최고 집단</div><div class="v" style="font-size:18px">${best.g}</div><div class="s">핵심 ${best.cs} · 학습연구 ${best.ls}</div></div></div><div class="divider"></div><div class="kpi" style="padding:0"><div class="ic bg-r"><span data-i="target" data-c="lg"></span></div><div><div class="l">보완 필요 집단</div><div class="v" style="font-size:18px">${worst.g}</div><div class="s">핵심 ${worst.cs} · 학습연구 ${worst.ls}</div></div></div><div class="divider"></div><div class="small muted">집계 대상 ${L.length}명 · 학번 단위 개인 식별정보는 통계 화면에 노출되지 않습니다. (집단 5명 미만은 비공개 처리 예정)</div>`:'<span class="muted">조건에 맞는 데이터가 없습니다</span>';
  $('#stBody').innerHTML=rows.map((r,i)=>`<tr style="cursor:pointer" onclick="pickGroup(${i})"><td class="bold">${r.g}${G==='year'?'학년도':''}</td><td class="c">${r.n}</td><td class="c">${r.done}</td><td class="c">${Math.round(r.done/r.n*100)}%</td><td class="c">${r.cs} <span class="badge ${lvl(r.cs)[1]}">${lvl(r.cs)[0]}</span></td><td class="c">${r.ls} <span class="badge ${lvl(r.ls)[1]}">${lvl(r.ls)[0]}</span></td><td class="c">${r.ts}</td><td><span class="badge" style="background:${TCOL[r.ti]}15;color:${TCOL[r.ti]};border-color:${TCOL[r.ti]}55">${TRK[r.ti]}</span></td><td class="small">${r.top}</td><td class="small">${r.low}</td></tr>`).join('')||'<tr><td colspan="10" class="c muted" style="padding:24px">데이터 없음</td></tr>';
  window._rows=rows;hydrateIcons();
}
function pickGroup(i){const r=_rows[i];toast(r.g+' 집단 '+r.n+'명 — 학생 통합 프로파일 탭에서 개별 조회할 수 있습니다');}
$$('#gb .tab').forEach(b=>b.onclick=()=>{$$('#gb .tab').forEach(x=>x.classList.toggle('on',x===b));G=b.dataset.g;drawStat()});
['sfProg','sfYear','sfDept'].forEach(i=>$('#'+i).onchange=drawStat);drawStat();

/* 개별 통합 프로파일 */
let CUR=0;
function drawList(){const q=$('#oq').value.trim().toLowerCase();$('#oList').innerHTML=RAW.map((s,i)=>({s,i})).filter(o=>!q||o.s.n.toLowerCase().includes(q)||o.s.id.includes(q)).map(o=>`<div onclick="CUR=${o.i};drawList();drawOne()" style="padding:11px 16px;border-bottom:1px solid var(--border);cursor:pointer;${o.i===CUR?'background:var(--primary-10);border-left:3px solid var(--primary)':''}"><div class="row" style="justify-content:space-between"><b>${o.s.n}</b><span class="badge b-gy">${o.s.prog}</span></div><div class="muted small">${o.s.dept} · ${o.s.id}</div></div>`).join('')}
$('#oq').oninput=drawList;
function scoreCard(t,ic,col,s,a,sub){const l=lvl(s);return`<div class="card kpi" style="align-items:flex-start"><div class="ic ${col}"><span data-i="${ic}" data-c="lg"></span></div><div style="flex:1"><div class="l">${t}</div><div class="row" style="gap:8px"><span class="v">${s}</span><span class="badge ${l[1]}">${l[0]}</span></div><div class="s">${sub}</div></div></div>`}
function cmpBars(names,vals,avgs,col){return names.map((n,i)=>{const d=vals[i]-avgs[i];return`<div style="display:grid;grid-template-columns:120px 1fr 34px 46px;gap:10px;align-items:center;font-size:13px"><span>${n}</span><div class="bar" style="overflow:visible"><i style="width:${vals[i]}%;background:${col}"></i><u title="학과 평균 ${avgs[i]}" style="position:absolute;left:${avgs[i]}%;top:-3px;width:2px;height:14px;background:#333"></u></div><b style="text-align:right">${vals[i]}</b><span class="small" style="color:${d>=0?'#15803d':'#b91c1c'};font-weight:600">${d>=0?'+':''}${d}</span></div>`}).join('')}
function drawOne(){
  const s=RAW[CUR],peers=RAW.filter(x=>x.dept===s.dept),pc=CORE.map((_,i)=>avg(peers.map(x=>x.core[i]))),pl=LEARN.map((_,i)=>avg(peers.map(x=>x.learn[i])));
  const all=[...CORE.map((n,i)=>({n,v:s.core[i],g:'핵심역량'})),...LEARN.map((n,i)=>({n,v:s.learn[i],g:'학습연구역량'}))].sort((a,b)=>b.v-a.v);
  const st=all.slice(0,3),wk=all.slice(-3).reverse();
  const t2=[...s.trk.map((v,i)=>({v,i}))].sort((a,b)=>b.v-a.v);
  $('#oMain').innerHTML=`
  <div class="card"><div class="card-b row" style="gap:16px"><div class="avatar" style="width:52px;height:52px;font-size:20px">${s.n[0]}</div><div><div class="row"><h2>${s.n}</h2><span class="badge b-gy">${s.prog}</span><span class="badge b-gr">재학</span></div><div class="muted small">${s.dept} · ${s.id} · ${s.yr}학년도 입학</div></div><span class="spacer"></span><button class="btn" onclick="toast('통합 프로파일 PDF를 생성합니다')"><span data-i="print" data-c="sm"></span>PDF 출력</button></div></div>
  <div class="grid g3">${scoreCard('핵심역량','bar','bg-b',s.cs,0,'학과 평균 '+avg(peers.map(x=>x.cs))+'점 · 진단일 2026-10-02')}${scoreCard('학습연구역량','book','bg-g',s.ls,0,'학과 평균 '+avg(peers.map(x=>x.ls))+'점 · 진단일 2026-10-05')}
   <div class="card kpi" style="align-items:flex-start"><div class="ic bg-a"><span data-i="compass" data-c="lg"></span></div><div style="flex:1"><div class="l">진로 트랙 (1순위)</div><div class="row" style="gap:8px"><span class="v" style="font-size:19px;color:${TCOL[t2[0].i]}">${TRK[t2[0].i]}</span></div><div class="s">적합도 ${t2[0].v}점 · 2순위 ${TRK[t2[1].i]}</div></div></div></div>
  <div class="grid g2">
    <div class="card"><div class="card-h"><h3>핵심역량 ↔ 학습연구역량 프로파일</h3><span class="desc">하위 6개 항목 · 점선=학과 평균</span></div><div class="card-b grid g2" style="gap:0"><div><div class="small bold" style="text-align:center;color:#2563eb">핵심역량</div><div class="chart" id="rd1"></div></div><div><div class="small bold" style="text-align:center;color:#16a34a">학습연구역량</div><div class="chart" id="rd1b"></div></div></div></div>
    <div class="card"><div class="card-h"><h3>진로 트랙 프로파일</h3><span class="desc">6개 영역 적합도</span></div><div class="card-b chart" id="rd2"></div><div class="legend" style="justify-content:center;padding-bottom:14px"><span><i style="background:#d97706"></i>${s.n}</span><span><i style="background:#999"></i>전체 평균</span></div></div>
  </div>
  <div class="grid g2">
    <div class="card"><div class="card-h"><h3>핵심역량 상세</h3><span class="desc">▍= 학과 평균 · 우측 증감</span></div><div class="card-b" style="display:flex;flex-direction:column;gap:10px">${cmpBars(CORE,s.core,pc,'#2563eb')}</div></div>
    <div class="card"><div class="card-h"><h3>학습연구역량 상세</h3><span class="desc">▍= 학과 평균 · 우측 증감</span></div><div class="card-b" style="display:flex;flex-direction:column;gap:10px">${cmpBars(LEARN,s.learn,pl,'#16a34a')}</div></div>
  </div>
  <div class="card"><div class="card-h"><h3>3종 진단 통합 비교 · 강점과 보완점</h3><span class="desc">점수 기준 상·하위 항목과 진로 트랙 연계 해석</span></div>
   <div class="card-b grid g3">
    <div><div class="row bold" style="color:#15803d;margin-bottom:8px"><span data-i="star" data-c="sm"></span>강점 (상위 3)</div>${st.map(x=>`<div class="note ok" style="margin-bottom:8px;justify-content:space-between"><span><b>${x.n}</b> <span class="small">(${x.g})</span></span><b>${x.v}</b></div>`).join('')}</div>
    <div><div class="row bold" style="color:#b91c1c;margin-bottom:8px"><span data-i="target" data-c="sm"></span>보완점 (하위 3)</div>${wk.map(x=>`<div class="note" style="margin-bottom:8px;justify-content:space-between;background:#fef2f2;border:1px solid #fecaca;color:#991b1b"><span><b>${x.n}</b> <span class="small">(${x.g})</span></span><b>${x.v}</b></div>`).join('')}</div>
    <div><div class="row bold" style="color:var(--primary);margin-bottom:8px"><span data-i="compass" data-c="sm"></span>진로 트랙 연계 해석</div><div class="note pri" style="flex-direction:column;gap:6px"><div><b>${TRK[t2[0].i]}</b> 트랙은 <b>${TDIM[t2[0].i]}</b> 영역이 핵심입니다.</div><div class="small">강점 <b>${st[0].n}</b> 은(는) 해당 트랙의 핵심 역량과 ${t2[0].i<2?'직접':'간접'} 연계됩니다. 보완점 <b>${wk[0].n}</b> 향상 프로그램을 권장합니다.</div></div></div>
   </div></div>
  <div class="card"><div class="card-h"><h3>진단 이력 (회차별 점수)</h3></div><div class="card-b"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>진단 회차</th><th class="c">핵심역량</th><th class="c">학습연구역량</th><th class="c">진로 트랙(1순위)</th><th>진단일</th></tr></thead><tbody>
    <tr><td>2026학년도 2학기</td><td class="c bold">${s.cs}</td><td class="c bold">${s.ls}</td><td class="c">${TRK[t2[0].i]}</td><td class="muted">2026-10-05</td></tr>
    <tr><td>2026학년도 1학기</td><td class="c">${s.cs-3}</td><td class="c">${s.ls-2}</td><td class="c muted">-</td><td class="muted">2026-04-11</td></tr>
    <tr><td>2025학년도 2학기</td><td class="c">${s.cs-6}</td><td class="c">${s.ls-4}</td><td class="c muted">-</td><td class="muted">2025-10-09</td></tr></tbody></table></div></div></div>`;
  radar($('#rd1'),CORE.map(n=>n.slice(0,6)),[{name:'학과평균',color:'#999',values:pc,dash:1,fill:0},{name:'핵심',color:'#2563eb',values:s.core}],{size:300});radar($('#rd1b'),LEARN.map(n=>n.slice(0,6)),[{name:'학과평균',color:'#999',values:pl,dash:1,fill:0},{name:'학습',color:'#16a34a',values:s.learn}],{size:300});
  radar($('#rd2'),TDIM,[{name:'전체',color:'#999',values:TDIM.map((_,i)=>avg(RAW.map(x=>x.trk[i]))),dash:1,fill:0},{name:s.n,color:'#d97706',values:s.trk,fill:.25}],{size:340});
  hydrateIcons();
}
drawList();drawOne();
