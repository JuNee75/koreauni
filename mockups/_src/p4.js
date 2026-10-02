initTabs();
function go(id){const b=$(`#mainTabs .tab[data-pane="${id}"]`);b&&b.click()}
const CORE=['논리적 추론','다학제간 통찰','독창적 발상','메타인지적 성찰','연구문제 구조화','증거기반 분석'],CV=[68,58,55,62,69,71],CA=[72,70,66,68,72,74];
const LEARN=['학업적 효능감','학업적 회복탄력성','성실성 및 책임감','시간관리','집중력·학습환경','학습전략·정보처리'],LV=[85,80,81,72,76,74],LA=[78,76,77,74,75,76];
const TDIM=['연구탐구','기술개발','사업개척','공공기여','교육전달','전문서비스'],TV=[82,60,48,55,66,58],TAV=[70,62,58,56,60,62];
const lvl=s=>s>=85?['탁월','b-am']:s>=75?['우수','b-gr']:s>=65?['보통','b-bl']:['개선필요','b-rd'];

/* ── 진단 이력 ── */
const DH=[
 {k:'진로 트랙',r:'2026-2학기',d:'2026-10-05',res:'학술연구형',sc:82,avg:'-',type:2},
 {k:'학습연구역량',r:'2026-2학기',d:'2026-10-05',sc:78,avg:76,type:1},
 {k:'핵심역량',r:'2026-2학기',d:'2026-10-05',sc:64,avg:72,type:0},
 {k:'학습연구역량',r:'2026-1학기',d:'2026-04-11',sc:75,avg:75,type:1},
 {k:'핵심역량',r:'2026-1학기',d:'2026-04-11',sc:61,avg:70,type:0},
 {k:'학습연구역량',r:'2025-2학기',d:'2025-10-09',sc:73,avg:74,type:1},
 {k:'핵심역량',r:'2025-2학기',d:'2025-10-09',sc:58,avg:68,type:0}];
function drawDH(){const f=$('#dKind').value;$('#dBody').innerHTML=DH.map((x,i)=>({x,i})).filter(o=>!f||o.x.k===f).map(({x,i})=>{const l=x.type===2?null:lvl(x.sc);return`<tr><td class="bold">${x.k}</td><td>${x.r}</td><td class="muted">${x.d}</td><td class="c bold">${x.type===2?x.res+' <span class="muted small">('+x.sc+'점)</span>':x.sc+'점'}</td><td class="c">${l?`<span class="badge ${l[1]}">${l[0]}</span>`:'<span class="badge b-pr">1순위</span>'}</td><td class="c">${x.avg}</td><td class="c"><button class="btn xs" onclick="openDiagH(${i})">결과 보기</button></td></tr>`}).join('')}
$('#dKind').onchange=drawDH;drawDH();
$('#recentTbl').innerHTML='<thead><tr><th>진단</th><th>회차</th><th class="c">결과</th><th class="c"></th></tr></thead><tbody>'+DH.slice(0,5).map((x,i)=>`<tr><td class="bold">${x.k}</td><td class="muted small">${x.r}</td><td class="c bold">${x.type===2?x.res:x.sc+'점'}</td><td class="c"><button class="btn xs" onclick="openDiagH(${i})">보기</button></td></tr>`).join('')+'</tbody>';
lines($('#dTrend'),['2025-2','2026-1','2026-2'],[{name:'핵심역량',color:'#2563eb',values:[58,61,64]},{name:'학습연구역량',color:'#16a34a',values:[73,75,78]}],{min:40,max:100,h:230});

/* ── 결과 상세 ── */
const barS=(n,v,a,c)=>`<div style="display:grid;grid-template-columns:130px 1fr 34px 60px;gap:10px;align-items:center;font-size:13px"><span>${n}</span><div class="bar" style="overflow:visible"><i style="width:${v}%;background:${c}"></i><u style="position:absolute;left:${a}%;top:-3px;width:2px;height:14px;background:#333"></u></div><b style="text-align:right">${v}</b><span class="badge ${lvl(v)[1]}" style="justify-content:center">${lvl(v)[0]}</span></div>`;
const MSG=[{t:'핵심역량',c:'#2563eb',n:CORE,v:CV,a:CA,s:64,msg:'융합연구 관련 항목(다학제간 통찰·독창적 발상)이 학과 평균 대비 낮습니다. 타 전공 세미나와 아이디어 발상 프로그램을 권장합니다.'},
 {t:'학습연구역량',c:'#16a34a',n:LEARN,v:LV,a:LA,s:78,msg:'학업적 효능감과 회복탄력성이 우수합니다. 시간관리 항목은 상대적으로 낮아 연구 일정 코칭을 권장합니다.'}];
function openDiag(t,hist){$('#mdT').textContent=(DH.find(x=>x.type===t&&(!hist||true))||{}).k+' 진단 결과';
  if(t===2){$('#mdB').innerHTML=`<div class="note pri"><span data-i="compass"></span><div><b>1순위 학술연구형</b> (적합도 82점) · 2순위 산업 R&amp;D형 (60점)<br><span class="small">연구탐구 영역이 가장 높으며, 학계 진출 및 연구기관 진로와 연계성이 높은 유형입니다.</span></div></div><div class="grid g2" style="align-items:center"><div class="chart" id="mdR"></div><div style="display:flex;flex-direction:column;gap:8px">${TDIM.map((d,i)=>`<div class="bar-row" style="grid-template-columns:80px 1fr 30px"><span class="n">${d}</span><div class="bar"><i style="width:${TV[i]}%;background:#d97706"></i></div><span class="v">${TV[i]}</span></div>`).join('')}</div></div><div class="note info small"><span data-i="info"></span><div>진로 트랙 결과는 별도 용역 산출물의 판정 알고리즘에 따라 산출됩니다. 추천 프로그램은 대시보드에서 확인하세요.</div></div>`;
    openModal('m-diag');hydrateIcons();radar($('#mdR'),TDIM,[{name:'평균',color:'#999',values:TAV,dash:1,fill:0},{name:'나',color:'#d97706',values:TV}],{size:300});return}
  const m=MSG[t];$('#mdB').innerHTML=`<div class="row" style="gap:14px"><span style="font-size:40px;font-weight:800;color:${m.c}">${m.s}</span><div><span class="badge ${lvl(m.s)[1]}">${lvl(m.s)[0]}</span><div class="muted small">▍ = 학과 평균</div></div></div><div style="display:flex;flex-direction:column;gap:10px">${m.n.map((n,i)=>barS(n,m.v[i],m.a[i],m.c)).join('')}</div><div class="note info small"><span data-i="info"></span><div>${m.msg}</div></div>`;openModal('m-diag');hydrateIcons()}
function openDiagH(i){const x=DH[i];openDiag(x.type)}

/* ── 대시보드 ── */
radar($('#rdA'),CORE.map(n=>n.slice(0,5)),[{name:'학과',color:'#999',values:CA,dash:1,fill:0},{name:'나',color:'#2563eb',values:CV}],{size:270});
radar($('#rdB'),LEARN.map(n=>n.slice(0,5)),[{name:'학과',color:'#999',values:LA,dash:1,fill:0},{name:'나',color:'#16a34a',values:LV}],{size:270});
radar($('#rdC'),TDIM,[{name:'평균',color:'#999',values:TAV,dash:1,fill:0},{name:'나',color:'#d97706',values:TV}],{size:270});
const ALL=[...CORE.map((n,i)=>({n,v:CV[i],g:'핵심'})),...LEARN.map((n,i)=>({n,v:LV[i],g:'학습연구'}))].sort((a,b)=>b.v-a.v);
$('#swBox').innerHTML=`<div class="bold" style="color:#15803d">강점</div>${ALL.slice(0,3).map(x=>`<div class="note ok" style="justify-content:space-between;padding:8px 12px"><span><b>${x.n}</b> <span class="small">${x.g}</span></span><b>${x.v}</b></div>`).join('')}<div class="bold" style="color:#b91c1c;margin-top:4px">보완점</div>${ALL.slice(-3).reverse().map(x=>`<div class="note" style="justify-content:space-between;padding:8px 12px;background:#fef2f2;border:1px solid #fecaca;color:#991b1b"><span><b>${x.n}</b> <span class="small">${x.g}</span></span><b>${x.v}</b></div>`).join('')}<div class="note pri small"><span data-i="compass"></span><div>진로 트랙 <b>학술연구형</b> 과 연계하면 <b>연구문제 구조화·증거기반 분석</b> 강점을 살려 학술논문 역량을 확장할 수 있습니다.</div></div>`;
const PG=[
 {n:'융합연구 아이디어톤',w:'보완점',why:'다학제간 통찰 · 독창적 발상 보완',p:'2026-11-05 ~ 11-20',s:'신청 가능',h:12,c:'#2563eb'},
 {n:'연구 시간관리 · 몰입 코칭',w:'보완점',why:'시간관리 보완',p:'2026-11-02 ~ 11-30',s:'신청 가능',h:8,c:'#16a34a'},
 {n:'영문 학술논문 작성 워크숍',w:'진로',why:'학술연구형 · SCI(E) 투고 역량',p:'2026-10-28 ~ 10-30',s:'마감 임박',h:9,c:'#7E191B'},
 {n:'연구자 커리어 특강: 교수·포스닥 임용',w:'진로',why:'학술연구형 트랙 연계',p:'2026-11-12 14:00',s:'신청 완료',h:2,c:'#7c3aed'},
 {n:'다학제 공동연구 세미나',w:'보완점',why:'다학제간 통찰 보완',p:'2026-11-09 ~ 11-23',s:'신청 가능',h:10,c:'#0d9488'},
 {n:'BK21 학술 멘토링',w:'진로',why:'학술연구형 · 지도교수 외 멘토 매칭',p:'상시 신청',s:'신청 가능',h:15,c:'#d97706'}];
function drawPg(f){$('#pgList').innerHTML=PG.filter(p=>!f||p.w===f).map(p=>`<div class="card prog" style="border-left:4px solid ${p.c}"><div class="row" style="justify-content:space-between"><span class="badge ${p.w==='진로'?'b-pr':'b-bl'}">${p.w==='진로'?'진로 트랙 기반':'보완점 기반'}</span><span class="badge ${p.s==='신청 완료'?'b-gr':p.s==='마감 임박'?'b-rd':'b-gy'}">${p.s}</span></div><b style="font-size:15px">${p.n}</b><div class="small" style="color:var(--primary)"><span data-i="spark" data-c="sm"></span> ${p.why}</div><div class="muted small">${p.p} · ${p.h}시간</div><button class="btn sm ${p.s==='신청 가능'||p.s==='마감 임박'?'pri':''}" ${p.s==='신청 완료'?'disabled':''} onclick="toast('${p.n} 신청이 접수되었습니다')">${p.s==='신청 완료'?'신청 완료':'신청하기'}</button></div>`).join('');hydrateIcons()}
$$('#pgFilter .btn').forEach(b=>b.onclick=()=>{$$('#pgFilter .btn').forEach(x=>x.classList.toggle('pri',x===b));drawPg(b.dataset.f)});drawPg('');

/* ═══ 이력서 / 포트폴리오 엔진 ═══ */
const ST={n:'김민준',sid:'2024020001',dept:'경영학과',prog:'박사과정 2학년 3학기',adv:'이영철 교수',lab:'경영전략연구실',enr:'2024-03-01',mail:'minjun.kim@korea.ac.kr',tel:'010-1234-5678'};
const G={
 courses:{t:'교과과정 이수',cols:['연도·학기','과목명','구분','학점','성적'],it:[
  ['C1','2024 1학기','경영전략론','전공필수','3','A+'],['C2','2024 1학기','조직행동론','전공필수','3','A0'],['C3','2024 2학기','연구방법론','전공필수','3','A+'],['C4','2024 2학기','마케팅관리론','전공선택','3','B+'],['C5','2025 1학기','경영경제학','전공선택','3','A0'],['C6','2025 1학기','박사논문연구I','전공필수','3','P']]},
 nonc:{t:'비교과 프로그램',cols:['기간','프로그램명','운영','시간'],it:[
  ['N1','2024-04-05','연구윤리교육','비대면','3시간'],['N2','2024-09-12 ~ 09-14','논문작성법 특강','대면','9시간'],['N3','2025-03-15 ~ 06-07','BK21 세미나','혼합','15시간']]},
 train:{t:'연수 이력',cols:['기간','프로그램명','기관','국가'],it:[
  ['T1','2025-01-08 ~ 01-19','해외 단기 연수 프로그램','Harvard Business School','미국'],['T2','2024-07-10 ~ 07-14','연구방법론 집중과정','고려대학교 연구소','한국']]},
 intern:{t:'인턴십',cols:['기간','프로그램명','기관','국가'],it:[['I1','2025-06-01 ~ 08-31','글로벌 경영전략 인턴십','McKinsey & Company','싱가포르']]},
 lect:{t:'강의 이력',cols:['학기','과목명','구분','학점'],it:[['L1','2025-1','경영학개론','강의','3'],['L2','2025-1','비즈니스영어 세미나','SEMO','1']]},
 startup:{t:'창업 이력',cols:['설립일','기업명','업종','직원'],it:[['S1','2024-09-01','(주)에듀테크솔루션','교육서비스업','3명']]},
 qual:{t:'자격 · 어학',cols:['취득일','명칭','발급기관','점수/비고'],it:[['Q1','2024-05-15','경영지도사','중소벤처기업부','자격증'],['Q3','2024-05-14','TOEIC','ETS Korea','935'],['Q4','2024-09-10','TEPS','서울대학교','488']]},
 award:{t:'수상 경력',cols:['일자','수상명','수여기관','등급'],it:[['A1','2024-11-25','우수논문상','한국경영학회','금상'],['A2','2025-02-20','BK21 우수 대학원생상','한국연구재단','우수상']]},
 paper:{t:'논문 실적',kind:'list',it:[['P1','디지털 전환이 기업 성과에 미치는 영향: 동적역량 관점','경영학연구 · 2025-03-15 · 김민준, 이영철 · KCI · 제1저자'],['P2','Strategic Agility and Firm Performance in Digital Era','Asia Pacific Journal of Management · 2025-07-01 · Kim M., Lee Y. · SCI · 제1저자']]},
 pres:{t:'학술발표',kind:'list',it:[['R1','디지털 전환과 경영전략 혁신','한국경영학회 동계학술대회 · 2024-11-25 · 서울'],['R2','Digital Transformation and Organizational Capability','AOM Annual Meeting 2025 · 2025-08-10 · Chicago, USA']]},
 diag:{t:'역량 진단 결과',kind:'list',it:[['D1','핵심역량 — 64점 (개선필요)','학과 평균 72점 · 2026-2학기 진단 · 하위: 논리적 추론 68, 증거기반 분석 71 등'],['D2','학습연구역량 — 78점 (우수)','학과 평균 76점 · 학업적 효능감 85, 성실성 81 등'],['D3','진로 트랙 — 학술연구형 (적합도 82)','2순위 산업 R&D형 · 연구탐구 영역 최고']]}};
const DOC={
 resume:{name:'이력서',file:'이력서_김민준',groups:['courses','nonc','train','intern','lect','startup','qual','award','paper','diag'],
   def:{courses:['C1','C2','C3','C5'],nonc:['N2','N3'],train:['T1'],intern:['I1'],startup:['S1'],qual:['Q1','Q3'],award:['A1','A2'],paper:['P1','P2'],diag:['D2','D3']}},
 port:{name:'연구 포트폴리오',file:'연구포트폴리오_김민준',groups:['paper','pres','award','courses','nonc','train','intern','startup','diag'],
   def:{paper:['P1','P2'],pres:['R1','R2'],award:['A1'],courses:['C3','C6'],nonc:['N2','N3'],train:['T2'],diag:['D1','D2','D3']}}};
const S={},META={resume:{title:'이력서',contact:true,stmt:''},port:{title:'연구 포트폴리오',contact:true,
 stmt:'기업의 디지털 전환과 동적역량이 조직 성과에 미치는 영향을 실증 연구하고 있습니다. 경영전략과 조직역량의 상호작용을 중심으로 국내외 학술지 2편(SCI 1, KCI 1)을 게재하였으며, 향후 다학제 접근을 통한 융합연구로 연구 범위를 확장하고자 합니다.',kw:'디지털 전환, 동적역량, 전략적 민첩성, 조직성과'}};
const SAVED={resume:[{n:'이력서_연구직 지원용',t:'2026-09-28 10:12',c:12}],port:[{n:'포트폴리오_박사과정 중간점검',t:'2026-09-20 15:40',c:14}]};
Object.keys(DOC).forEach(k=>{S[k]={};DOC[k].groups.forEach(g=>S[k][g]=new Set(DOC[k].def[g]||[]))});
function build(k){
  const d=DOC[k],root=$(k==='resume'?'#resumeApp':'#portApp');
  root.innerHTML=`<div class="grid" style="grid-template-columns:350px 1fr;align-items:start" class="docgrid">
   <div class="card" style="position:sticky;top:90px"><div class="card-h"><h3>항목 선택</h3><div class="row"><button class="btn xs" data-a="all">전체 선택</button><button class="btn xs" data-a="none">해제</button></div></div>
    <div class="card-b" style="display:flex;flex-direction:column;gap:12px">
      <div class="field"><label>문서 제목</label><input class="input" data-m="title" value="${META[k].title}"></div>
      <label class="chk"><input type="checkbox" data-m="contact" ${META[k].contact?'checked':''}>연락처(이메일·전화) 포함</label>
      ${k==='port'?`<div class="field"><label>연구 소개 (직접 작성)</label><textarea class="input" rows="5" data-m="stmt">${META[k].stmt}</textarea></div><div class="field"><label>연구 키워드</label><input class="input" data-m="kw" value="${META[k].kw}"></div>`:`<div class="field"><label>자기소개 / 한 줄 소개 (선택)</label><textarea class="input" rows="3" data-m="stmt" placeholder="이력서 상단에 표시됩니다"></textarea></div>`}
      <div class="sel-list" data-sel></div></div></div>
   <div style="display:flex;flex-direction:column;gap:12px;min-width:0">
     <div class="card"><div class="card-b row"><b>${d.name} 미리보기</b><span class="badge b-gy" data-cnt></span><span class="spacer"></span>
       <button class="btn" data-a="save"><span data-i="check" data-c="sm"></span>저장</button><button class="btn" data-a="print"><span data-i="print" data-c="sm"></span>인쇄</button><button class="btn pri" data-a="pdf"><span data-i="dl" data-c="sm"></span>PDF 변환</button></div></div>
     <div class="paper-wrap"><div class="paper" data-paper></div></div>
     <div class="card"><div class="card-h"><h3>저장된 문서</h3></div><div class="card-b" style="display:flex;flex-direction:column;gap:8px" data-saved></div></div>
   </div></div>`;
  const sel=$('[data-sel]',root);
  sel.innerHTML=d.groups.map(g=>`<div class="sel-grp"><div class="gh"><span>${G[g].t}</span><label class="chk small"><input type="checkbox" data-g="${g}">전체</label></div>${G[g].it.map(r=>`<label class="sel-item"><input type="checkbox" data-k="${g}:${r[0]}" ${S[k][g].has(r[0])?'checked':''}><span>${G[g].kind==='list'?r[1]:itemLabel(g,r)}<small>${G[g].kind==='list'?r[2]:itemSub(g,r)}</small></span></label>`).join('')}</div>`).join('');
  sel.addEventListener('change',e=>{const t=e.target;
    if(t.dataset.g){S[k][t.dataset.g]=new Set(t.checked?G[t.dataset.g].it.map(r=>r[0]):[]);$$(`[data-k^="${t.dataset.g}:"]`,sel).forEach(c=>c.checked=t.checked)}
    else if(t.dataset.k){const[g,id]=t.dataset.k.split(':');t.checked?S[k][g].add(id):S[k][g].delete(id)}
    sync()});
  $$('[data-m]',root).forEach(el=>el.addEventListener('input',()=>{META[k][el.dataset.m]=el.type==='checkbox'?el.checked:el.value;paint()}));
  root.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a;
    if(a==='all'||a==='none'){d.groups.forEach(g=>S[k][g]=new Set(a==='all'?G[g].it.map(r=>r[0]):[]));$$('[data-k],[data-g]',sel).forEach(c=>c.checked=a==='all');sync()}
    if(a==='save'){SAVED[k].unshift({n:META[k].title+'_'+new Date().getFullYear(),t:'2026-10-02 '+String(new Date().getHours()).padStart(2,'0')+':'+String(new Date().getMinutes()).padStart(2,'0'),c:count(k)});paintSaved();toast('저장되었습니다. 저장된 문서에서 다시 불러올 수 있습니다')}
    if(a==='print')doPrint(k,false);if(a==='pdf')doPrint(k,true)});
  function count(k){return d.groups.reduce((a,g)=>a+S[k][g].size,0)}
  function paintSaved(){$('[data-saved]',root).innerHTML=SAVED[k].map(s=>`<div class="saved"><span><b>${s.n}</b><br><span class="muted small">${s.t} · ${s.c}개 항목</span></span><span class="row"><button class="btn xs" onclick="toast('저장본을 불러왔습니다')">불러오기</button><button class="btn xs" onclick="toast('PDF를 다운로드합니다')"><span data-i="dl" data-c="sm"></span>PDF</button></span></div>`).join('');hydrateIcons()}
  function paint(){$('[data-cnt]',root).textContent=`선택 ${count(k)}개 항목`;$('[data-paper]',root).innerHTML=paper(k)}
  function sync(){paint()}
  root._paint=paint;paint();paintSaved();hydrateIcons();
}
function itemLabel(g,r){return g==='courses'?r[2]+' ('+r[1]+')':g==='nonc'?r[2]:g==='train'?r[2]:g==='intern'?r[2]:g==='lect'?r[2]:g==='startup'?r[2]:g==='qual'?r[2]:r[2]}
function itemSub(g,r){return g==='courses'?r[3]+' · '+r[4]+'학점 · '+r[5]:g==='nonc'?r[1]+' · '+r[3]+' · '+r[4]:g==='train'||g==='intern'?r[3]+' · '+r[1]:g==='lect'?r[1]+' · '+r[3]:g==='startup'?r[3]+' · '+r[1]:g==='qual'?r[3]+' · '+r[4]:r[3]+' · '+r[1]+(r[4]?' · '+r[4]:'')}
function paper(k){
  const d=DOC[k],m=META[k],isR=k==='resume';
  let h=`<h1>${m.title}</h1><div class="ph"><div class="photo">사진<br>3×4</div><table><tr><th>성명</th><td>${ST.n}</td><th>학번</th><td>${ST.sid}</td></tr><tr><th>소속</th><td>${ST.dept}</td><th>과정</th><td>${ST.prog}</td></tr><tr><th>지도교수</th><td>${ST.adv}</td><th>연구실</th><td>${ST.lab}</td></tr><tr><th>입학일</th><td>${ST.enr}</td><th>${m.contact?'연락처':'재학상태'}</th><td>${m.contact?ST.mail+'<br>'+ST.tel:'재학'}</td></tr></table></div>`;
  if(!isR&&m.stmt)h+=`<h2>연구 소개</h2><div class="stmt">${esc(m.stmt)}</div>${m.kw?`<div class="sub" style="margin-top:6px">키워드: <b style="color:#222">${esc(m.kw)}</b></div>`:''}`;
  if(isR&&m.stmt)h+=`<h2>자기소개</h2><div class="stmt">${esc(m.stmt)}</div>`;
  d.groups.forEach(g=>{const sel=G[g].it.filter(r=>S[k][g].has(r[0]));if(!sel.length)return;
    h+=`<h2>${G[g].t}</h2>`;
    if(G[g].kind==='list')h+=sel.map(r=>`<div class="it"><b>${r[1]}</b><div class="sub">${r[2]}</div></div>`).join('');
    else h+=`<table><thead><tr>${G[g].cols.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${sel.map(r=>`<tr>${r.slice(1).map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
    if(g==='diag'&&(S[k][g].has('D1')||S[k][g].has('D2'))){h+=`<div style="margin-top:6px">${S[k][g].has('D1')?CORE.map((n,i)=>`<div class="mini-bar"><span>${n}</span><div><i style="width:${CV[i]}%;background:#2563eb"></i></div><b>${CV[i]}</b></div>`).join(''):''}${S[k][g].has('D2')?LEARN.map((n,i)=>`<div class="mini-bar"><span>${n}</span><div><i style="width:${LV[i]}%;background:#16a34a"></i></div><b>${LV[i]}</b></div>`).join(''):''}</div>`}});
  const total=d.groups.reduce((a,g)=>a+S[k][g].size,0);
  if(!total)h+='<p class="sub" style="text-align:center;margin-top:40px">왼쪽에서 포함할 항목을 선택하세요.</p>';
  h+=`<div class="foot">위 내용은 사실과 다름이 없음을 확인합니다.<br><br>2026년 10월 2일<br><b style="font-size:14px">${ST.n}</b> (인)<br><br><span style="color:#888">고려대학교 대학원 역량관리시스템 발급 · ${isR?'이력서':'연구 포트폴리오'}</span></div>`;
  return h}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\n/g,'<br>')}
function doPrint(k,pdf){const t=document.title;document.title=DOC[k].file;if(pdf)toast('인쇄 창에서 대상을 ‘PDF로 저장’으로 선택하세요 (실서비스: 서버 PDF 변환)');
  setTimeout(()=>{try{window.print()}catch(e){}document.title=t},pdf?600:50)}
build('resume');build('port');
$$('#resumeApp>div,#portApp>div').forEach(x=>{x.style.gridTemplateColumns='350px minmax(0,1fr)'});
const mq=()=>{const n=innerWidth<1000;$$('#resumeApp>div,#portApp>div').forEach(x=>x.style.gridTemplateColumns=n?'1fr':'350px minmax(0,1fr)')};addEventListener('resize',mq);mq();
