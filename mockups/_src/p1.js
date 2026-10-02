renderAdmin('career-track');initTabs();
const TR=[
 {k:'A',n:'학술연구형',c:'#7E191B',dim:'연구탐구',sub:'분석·논증'},
 {k:'B',n:'산업 R&D형',c:'#2563eb',dim:'기술개발',sub:'문제해결'},
 {k:'C',n:'창업·혁신형',c:'#d97706',dim:'사업개척',sub:'위험감수'},
 {k:'D',n:'정책·공공형',c:'#0d9488',dim:'공공기여',sub:'조직·조정'},
 {k:'E',n:'교육·전수형',c:'#7c3aed',dim:'교육전달',sub:'소통·공감'},
 {k:'F',n:'전문직·컨설팅형',c:'#16a34a',dim:'전문서비스',sub:'분석·소통'}];
const DIMS=TR.map(t=>t.dim);
const ITEMTXT={
 연구탐구:['새로운 이론을 검증하는 과정에 몰입한다','한 주제를 깊이 파고드는 일이 즐겁다','논문 작성과 학술 발표에 흥미를 느낀다','불확실한 문제도 가설을 세워 탐구한다','학계에서 인정받는 연구자가 되고 싶다','선행연구를 비판적으로 읽는 것이 즐겁다'],
 기술개발:['연구 결과를 실제 제품·기술로 구현하고 싶다','현장의 기술 문제를 해결하는 일이 보람 있다','기업 연구소에서 프로젝트를 수행해 보고 싶다','실험·시제품 제작 과정이 흥미롭다','특허 등 기술 성과물에 관심이 있다','산업계 요구에 맞춰 연구를 설계할 수 있다'],
 사업개척:['새로운 사업 기회를 찾는 일이 즐겁다','실패 위험이 있어도 도전을 선호한다','연구 성과를 기반으로 창업을 고려한다','투자 유치·사업계획 수립에 관심이 있다','스스로 조직을 만들어 이끌고 싶다','시장 변화를 빠르게 읽는 편이다'],
 공공기여:['공공 정책 수립에 기여하고 싶다','사회 문제 해결이 직업 선택의 핵심 기준이다','정부·공공기관의 연구 기능에 관심이 있다','다양한 이해관계를 조정하는 일을 잘한다','제도 개선 제안을 해 본 경험이 있다','안정적인 공적 역할을 중요하게 생각한다'],
 교육전달:['지식을 설명하고 가르치는 일이 즐겁다','후학을 지도하는 역할을 하고 싶다','강의 준비 과정에서 보람을 느낀다','학습자의 성장을 돕는 일에 관심이 있다','교육 프로그램을 설계해 본 경험이 있다','다른 사람의 이해 수준에 맞춰 설명할 수 있다'],
 전문서비스:['전문 지식으로 고객 문제를 자문하고 싶다','데이터·자료를 근거로 의사결정을 지원한다','다양한 산업·조직의 문제를 접하고 싶다','전문 자격 취득이 진로에 중요하다','보고서·제안서 작성에 자신 있다','빠르게 변하는 프로젝트 환경에 적응한다']};
const ITEMS=[];DIMS.forEach((d,di)=>ITEMTXT[d].forEach((t,i)=>ITEMS.push({id:'CT'+String(di*6+i+1).padStart(2,'0'),d,t,rev:(i===5&&di%2===0),w:1.0})));
// 문항
const sel=$('#itemArea');DIMS.forEach(d=>sel.insertAdjacentHTML('beforeend',`<option>${d}</option>`));
function drawItems(){const f=sel.value;$('#itemBody').innerHTML=ITEMS.filter(x=>!f||x.d===f).map(x=>`<tr><td>${x.id}</td><td><span class="badge b-pr">${x.d}</span></td><td>${x.t}</td><td>5점 리커트</td><td class="c">${x.rev?'<span class="badge b-am">Y</span>':'-'}</td><td class="c">${x.w.toFixed(1)}</td><td class="c"><button class="btn xs" onclick="toast('버전 고정 상태입니다')"><span data-i="eye" data-c="sm"></span></button></td></tr>`).join('');hydrateIcons()}
sel.onchange=drawItems;drawItems();
$('#prevBody').innerHTML=ITEMS.slice(0,4).map((x,i)=>`<div class="card card-b"><div class="bold" style="margin-bottom:10px">${i+1}. ${x.t}</div><div class="row" style="gap:18px">${['매우 그렇지 않다','그렇지 않다','보통이다','그렇다','매우 그렇다'].map((o,k)=>`<label class="chk"><input type="radio" name="p${i}"${k===3&&i===0?' checked':''}>${o}</label>`).join('')}</div></div>`).join('');
// 알고리즘
$('#algoBody').innerHTML=TR.map((t,i)=>`<tr><td><span class="badge" style="background:${t.c}15;color:${t.c};border-color:${t.c}55">${t.n}</span></td><td>${t.dim}</td><td class="c"><input class="input" style="width:64px;text-align:center" value="1.00"></td><td class="c"><input class="input" style="width:64px;text-align:center" value="0.${3+i%3}0"></td><td class="c"><input class="input" style="width:64px;text-align:center" value="60"></td></tr>`).join('');
const SIMV=[78,64,45,52,60,70];
$('#sliders').innerHTML=DIMS.map((d,i)=>`<div class="bar-row" style="grid-template-columns:70px 1fr 36px"><span class="n">${d}</span><input type="range" min="0" max="100" value="${SIMV[i]}" data-i="${i}" style="accent-color:var(--primary)"><span class="v" id="sv${i}">${SIMV[i]}</span></div>`).join('');
function judge(v){return TR.map((t,i)=>({t,s:v[i]})).sort((a,b)=>b.s-a.s)}
function sim(){const v=$$('#sliders input').map(x=>+x.value);v.forEach((x,i)=>$('#sv'+i).textContent=x);const r=judge(v),mix=r[0].s-r[1].s<=5;
 $('#simOut').innerHTML=`<div class="muted small">판정 결과</div><div class="row" style="margin:6px 0"><span class="badge" style="font-size:14px;padding:4px 14px;background:${r[0].t.c};color:#fff;border-color:${r[0].t.c}">1순위 ${r[0].t.n}</span><span class="badge b-gy" style="font-size:13px;padding:3px 12px">2순위 ${r[1].t.n}</span>${mix?'<span class="badge b-am">혼합형</span>':''}</div><div class="muted small">적합도 ${r[0].s}점 / 차이 ${r[0].s-r[1].s}점 · 하한(60) ${r[0].s>=60?'충족':'미충족 → 판정 보류'}</div>`}
$$('#sliders input').forEach(x=>x.oninput=sim);sim();
const CASES=[['C-01','연구탐구 92 / 기술 55','학술연구형',[92,55,40,48,50,52]],['C-02','기술개발 88 / 사업 85','산업 R&D형(혼합)',[50,88,85,45,40,55]],['C-03','사업개척 90 / 기술 62','창업·혁신형',[48,62,90,40,45,50]],['C-04','공공기여 85 / 교육 70','정책·공공형',[55,40,42,85,70,50]],['C-05','교육전달 91','교육·전수형',[60,40,35,50,91,45]],['C-06','전문서비스 83 / 공공 79','전문직·컨설팅형(혼합)',[50,45,60,79,48,83]]];
function runVerify(){let ok=0;$('#verifyBody').innerHTML=CASES.map(c=>{const r=judge(c[3]),nm=r[0].t.n+(r[0].s-r[1].s<=5?'(혼합)':'');const pass=nm===c[2];if(pass)ok++;return`<tr><td>${c[0]}</td><td>${c[1]}</td><td>${c[2]}</td><td>${nm}</td><td class="c">${pass?'<span class="badge b-gr">일치</span>':'<span class="badge b-rd">불일치</span>'}</td></tr>`}).join('');const s=$('#verifySum');s.style.display='flex';s.innerHTML=`<span data-i="info"></span><div>기준 케이스 ${CASES.length}건 중 <b>${ok}건 일치 (${Math.round(ok/CASES.length*100)}%)</b> · 실제 산출물 탑재 후 전체 기준 케이스로 재검증하며, 일치율 기준(예: 100%) 충족 시 배포가 가능합니다.</div>`;hydrateIcons();toast('검증이 완료되었습니다')}
runVerify();
// 대시보드 데이터
const STU=[['김민준','2024020001','경영학과','박사',2024],['이서연','2025010012','AI경영학과','석사',2025],['박현우','2023030007','데이터사이언스학과','통합',2023],['Wang Fang','2024020045','경영학과','박사',2024],['정하은','2025010023','마케팅학과','석사',2025],['오진석','2023020018','회계학과','박사',2023],['Nguyen Thi Mai','2025010034','국제경영학과','석사',2025],['최예진','2024010009','재무학과','석사',2024],['한승우','2024030002','경영정보학과','통합',2024],['유태현','2025020008','데이터사이언스학과','박사',2025],['Tanaka Yuki','2024020056','AI경영학과','박사',2024],['강수빈','2023010015','경영학과','석사',2023]]
 .map((s,i)=>{const seed=[[82,60,48,55,66,58],[58,86,52,40,45,62],[66,90,50,44,48,60],[88,55,40,62,70,50],[50,46,80,52,60,84],[72,48,40,60,58,88],[55,60,76,58,52,82],[52,50,45,58,60,90],[60,84,66,44,40,58],[70,88,60,50,46,64],[84,58,50,66,72,52],[48,45,40,60,88,62]][i];
  const r=judge(seed);return{n:s[0],id:s[1],dept:s[2],prog:s[3],yr:s[4],v:seed,r,d:`2026-1${i%2}-${String(3+i).padStart(2,'0')}`}});
const dsel=$('#fDept');[...new Set(STU.map(s=>s.dept))].forEach(d=>dsel.insertAdjacentHTML('beforeend',`<option>${d}</option>`));
const TOTAL=186;
function drawDash(){
 const dp=$('#fDept').value,pg=$('#fProg').value,yr=$('#fYear').value,q=$('#q').value.trim();
 let L=STU.filter(s=>(!dp||s.dept===dp)&&(!pg||s.prog===pg)&&(!yr||String(s.yr)===yr));
 const done=L.length,scale=dp||pg||yr?1:1;
 // 전체 분포는 샘플 확대
 const cnt={};TR.forEach(t=>cnt[t.k]=0);L.forEach(s=>cnt[s.r[0].t.k]++);
 const base=dp||pg||yr?1:10; // 시안: 전체 보기 시 모집단 확대
 const tot=done*base;$('#k1').textContent=(dp||pg||yr?Math.max(done,1)+Math.round(done*0.4):TOTAL)+'명';$('#k2').textContent=(dp||pg||yr?done:128)+'명';$('#k2s').textContent=(dp||pg||yr?'응시율 '+Math.round(done/(done+Math.round(done*.4)||1)*100):'응시율 68.8')+'%';
 const top=TR.map(t=>({t,c:cnt[t.k]})).sort((a,b)=>b.c-a.c)[0];$('#k3').textContent=top.t.n;$('#k3s').textContent=Math.round(top.c/(done||1)*100)+'% ('+top.c+'명 / 표본 '+done+'명)';
 $('#k4').textContent=L.filter(s=>s.r[0].s-s.r[1].s<=5).length+'명';
 donut($('#cDonut'),TR.map(t=>({name:t.n,v:cnt[t.k]||0.0001,color:t.c})),[done,'표본(명)']);
 $('#lgDonut').innerHTML=TR.map(t=>`<span><i style="background:${t.c}"></i>${t.n} ${cnt[t.k]}</span>`).join('');
 const avg=DIMS.map((_,i)=>Math.round(L.reduce((a,s)=>a+s.v[i],0)/(L.length||1)));
 radar($('#cRadar'),DIMS,[{name:'평균',color:'#7E191B',values:avg}],{size:300});
 const byD={};L.forEach(s=>{(byD[s.dept]=byD[s.dept]||[]).push(s)});
 $('#cDept').innerHTML=Object.entries(byD).map(([d,a])=>{const c={};a.forEach(s=>c[s.r[0].t.k]=(c[s.r[0].t.k]||0)+1);return`<div><div class="row" style="justify-content:space-between;font-size:12.5px"><b>${d}</b><span class="muted">${a.length}명</span></div><div style="display:flex;height:12px;border-radius:99px;overflow:hidden;margin-top:4px">${TR.filter(t=>c[t.k]).map(t=>`<i title="${t.n} ${c[t.k]}" style="width:${c[t.k]/a.length*100}%;background:${t.c}"></i>`).join('')}</div></div>`}).join('')||'<span class="muted">데이터 없음</span>';
 const rows=L.filter(s=>!q||s.n.toLowerCase().includes(q.toLowerCase())||s.id.includes(q));
 $('#stuBody').innerHTML=rows.map((s,i)=>{const m=s.r[0].s-s.r[1].s<=5;return`<tr><td class="bold">${s.n[0]+'*'.repeat(Math.max(s.n.length-2,1))+(s.n.length>1?s.n[s.n.length-1]:'')}</td><td>${s.id}</td><td>${s.dept}</td><td>${s.prog}</td><td>${s.yr}</td><td><span class="badge" style="background:${s.r[0].t.c}15;color:${s.r[0].t.c};border-color:${s.r[0].t.c}55">${s.r[0].t.n}</span> ${m?'<span class="badge b-am">혼합</span>':''}</td><td><span class="badge b-gy">${s.r[1].t.n}</span></td><td class="c bold">${s.r[0].s}</td><td class="muted">${s.d}</td><td class="c"><button class="btn xs" onclick="showRes('${s.id}')">보기</button></td></tr>`}).join('')||'<tr><td colspan="10" class="c muted" style="padding:30px">조회된 결과가 없습니다</td></tr>';
}
['fDept','fProg','fYear'].forEach(i=>$('#'+i).onchange=drawDash);$('#q').oninput=drawDash;drawDash();
function showRes(id){const s=STU.find(x=>x.id===id);$('#mrTitle').textContent=s.n+' · 진로 트랙 검사 결과';
 $('#mrBody').innerHTML=`<div class="grid g2"><div class="chart" id="mrRadar"></div><div style="display:flex;flex-direction:column;gap:10px"><div class="note pri"><span data-i="compass"></span><div><b>1순위 ${s.r[0].t.n}</b> (적합도 ${s.r[0].s}점)<br><span class="small">핵심 영역: ${s.r[0].t.dim} · 보조: ${s.r[0].t.sub}</span></div></div>${s.r.slice(0,3).map((x,i)=>`<div class="bar-row" style="grid-template-columns:110px 1fr 36px"><span class="n">${i+1}. ${x.t.n}</span><div class="bar"><i style="width:${x.s}%;background:${x.t.c}"></i></div><span class="v">${x.s}</span></div>`).join('')}<div class="muted small">※ 산출물 탑재 후 트랙 해석문·추천 진로·추천 프로그램이 함께 제공됩니다.</div></div></div>`;
 hydrateIcons();radar($('#mrRadar'),DIMS,[{name:s.n,color:'#7E191B',values:s.v}],{size:320});openModal('m-res')}
