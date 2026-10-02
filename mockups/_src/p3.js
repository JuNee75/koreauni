renderAdmin('grad');initTabs();
const TYPES=['취업','진학','창업','기타'],TC={'취업':'#2563eb','진학':'#7c3aed','창업':'#d97706','기타':'#9ca3af'},TB={'취업':'b-bl','진학':'b-pu','창업':'b-am','기타':'b-gy'};
const NOW=2026;
const FORMS={
 취업:[['기관 유형','sel',['대기업','중견기업','중소기업','공공기관','연구기관','대학·교육기관','해외기업']],['기관명','txt'],['부서 / 직위','txt'],['직무 분야','sel',['R&D','경영·기획','마케팅·영업','데이터·AI','재무·회계','컨설팅','교육·연구']],['입사일','date'],['고용 형태','sel',['정규직','계약직','파견·기타']],['전공 일치도','sel',['매우 일치','대체로 일치','보통','불일치']],['연봉 구간(선택)','sel',['비공개','3천만원 미만','3~5천만원','5~7천만원','7천만원 이상']]],
 진학:[['진학 학교','txt'],['진학 과정','sel',['박사','박사후과정','학사편입','해외 석·박사']],['전공','txt'],['입학일','date'],['국가','sel',['국내','해외']],['장학금 수혜','sel',['예','아니오']]],
 창업:[['기업명','txt'],['사업자등록번호','txt'],['업종','txt'],['설립일','date'],['상시 근로자 수','txt'],['연 매출 구간','sel',['1억 미만','1~10억','10~50억','50억 이상']],['투자 유치','sel',['없음','시드','시리즈A 이상','정부지원']]],
 기타:[['구분','sel',['구직 중','군복무','연구원·인턴','육아·휴식','해외체류','기타']],['세부 내용','txt']]
};
const DET={
 취업:[['삼성전자','대기업'],['LG CNS','대기업'],['한국개발연구원(KDI)','공공기관'],['네이버','대기업'],['한국은행','공공기관'],['딜로이트 안진','중견기업'],['한국조세재정연구원','연구기관'],['현대자동차','대기업'],['쿠팡','대기업'],['KB국민은행','대기업']],
 진학:[['고려대학교 박사과정'],['KAIST 박사과정'],['MIT Sloan 박사']],
 창업:[['(주)데이터브릿지'],['핀로직스']],기타:[['구직 중'],['군복무']]};
const N=['김도윤','이하린','박지호','최서윤','정우진','강민서','조예린','윤태양','임수아','한지우','송민재','오유진','서동현','권나연','배준영','홍다은','문시우','신하준'];
const D=[['경영학과','박사'],['AI경영학과','석사'],['데이터사이언스학과','통합'],['경영학과','석사'],['마케팅학과','석사'],['회계학과','박사'],['재무학과','석사'],['국제경영학과','석사'],['경영정보학과','통합']];
const TY=['취업','취업','진학','취업','취업','창업','취업','진학','취업','기타','취업','취업','진학','취업','창업','취업','취업','기타'];
const GY=[2025,2025,2025,2025,2025,2025,2023,2023,2023,2023,2023,2021,2021,2021,2021,2024,2022,2022];
const SV=['회신','열람','발송','회신','발송','열람','회신','발송','회신','반송','열람','회신','발송','발송','열람','','',''];
let ci=0,cp=0,cc=0,cq=0;
const G=N.map((n,i)=>{const t=TY[i],pool=DET[t],d=pool[(t==='취업'?ci++:t==='진학'?cp++:t==='창업'?cc++:cq++)%pool.length];
  const dept=D[i%D.length],rep=SV[i]==='회신';const g={id:i,n,sid:`${GY[i]-2}${String(10+i%4)}0${String(100+i*7).slice(-3)}`,dept:dept[0],prog:dept[1],gy:GY[i],email:`${['dyyoon','harin','jiho','seoyun','woojin','minseo','yerin','taeyang','sua','jiwoo','minjae','yujin','donghyun','nayeon','junyoung','daeun','siwoo','hajun'][i]}@gmail.com`,
   type:t,org:d[0],org2:d[1]||'',hist:[],svy:{st:SV[i],sent:SV[i]?`2026-10-05 09:00`:'',open:(SV[i]==='열람'||SV[i]==='회신')?`2026-10-0${6+i%3} ${10+i%8}:${10+i%5*7}`:'',rep:rep?`2026-10-0${6+i%3} ${10+i%8}:${20+i%5*7}`:'',rs:(i%5===2&&SV[i]!=='회신')?1:0}};
  const stamp=`2026-10-0${6+i%3} ${10+i%8}:${20+i%5*7}`;
  if(i<15){ // 본인/링크 입력
    if(SV[i]==='회신'||i%3===0||i>=15) g.hist.push({who:'link',by:g.n+' (설문 링크)',at:stamp,type:t,text:g.org+(g.org2?` · ${g.org2}`:'')});
    else if(i%2===0) g.hist.push({who:'self',by:g.n+' (본인)',at:`2026-09-${10+i}  14:0${i%9}`,type:t,text:g.org+(g.org2?` · ${g.org2}`:'')});
  }
  if(g.hist.length===0&&i<15){}
  return g});
// 관리자 보완 입력 사례
G[4].hist=[{who:'admin',by:'경영대학원 행정팀 (관리자)',at:'2026-10-15 11:02',type:'취업',text:G[4].org+' · 전화 확인(근거: 동문회 명부)'}];
G[9].hist=[{who:'admin',by:'학과 사무실 (관리자)',at:'2026-10-12 16:40',type:'기타',text:'구직 중 · 면담 확인'}];
G[2].hist=[{who:'link',by:'박지호 (설문 링크)',at:'2026-10-07 10:20',type:'진학',text:'고려대학교 박사과정'},{who:'admin',by:'대학원 학사팀 (관리자)',at:'2026-10-14 09:15',type:'진학',text:'고려대학교 박사과정 · 입학일(2026-03-02) 보완'}];
G[7].hist=[{who:'self',by:'조예린 (본인)',at:'2026-09-22 13:10',type:'취업',text:'딜로이트 안진 · 중견기업'},{who:'admin',by:'학과 사무실 (관리자)',at:'2026-10-16 10:30',type:'진학',text:'KAIST 박사과정 · 타 경로 정보로 별도 기록(본인값 유지)'}];
G.forEach(g=>{ // 기본 이력 보정: 이력 비어있으면 미등록
  if(!g.hist.length){g.type='미등록';g.org='';g.org2=''}});
G[16].hist=[{who:'admin',by:'대학원 학사팀 (관리자)',at:'2026-09-30 15:00',type:'취업',text:'한국조세재정연구원 · 연구기관'}];G[16].type='취업';G[16].org='한국조세재정연구원';
const lastBy=g=>{const sf=g.hist.filter(h=>h.who!=='admin');return sf.length?sf[sf.length-1]:(g.hist[g.hist.length-1]||null)};
const SRC={self:['본인 입력','b-gr'],link:['본인 입력(링크)','b-gr'],admin:['관리자 보완','b-bl']};
const yrOf=g=>NOW-g.gy;

/* ───── 통계 ───── */
const TREND=[['1년차',[62,18,6,14]],['3년차',[68,14,9,9]],['5년차',[70,10,13,7]]];
(function(){
  const W=560,H=250,L=36,B=34,T=12,bw=70,gw=(W-L)/3;let g='';
  [0,25,50,75,100].forEach(v=>{const y=T+(H-T-B)*(1-v/100);g+=`<line x1="${L}" x2="${W}" y1="${y}" y2="${y}" stroke="#eee"/><text x="${L-6}" y="${y+4}" font-size="10" fill="#999" text-anchor="end">${v}%</text>`});
  TREND.forEach((t,i)=>{let y0=H-B;const x=L+gw*i+(gw-bw)/2;t[1].forEach((v,j)=>{const h=(H-T-B)*v/100;y0-=h;g+=`<rect x="${x}" y="${y0}" width="${bw}" height="${h}" fill="${TC[TYPES[j]]}"><title>${t[0]} ${TYPES[j]} ${v}%</title></rect>`;if(v>=6)g+=`<text x="${x+bw/2}" y="${y0+h/2+4}" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">${v}%</text>`});g+=`<text x="${x+bw/2}" y="${H-12}" font-size="12" font-weight="600" text-anchor="middle" fill="#444">${t[0]}</text>`});
  // 연결선(취업)
  let pts=TREND.map((t,i)=>[L+gw*i+gw/2,H-B-(H-T-B)*t[1][0]/100/1]);
  $('#cStack').innerHTML=`<svg viewBox="0 0 ${W} ${H}">${g}</svg>`;
  $('#lgStack').innerHTML=TYPES.map(t=>`<span><i style="background:${TC[t]}"></i>${t}</span>`).join('');
})();
$('#cResp').innerHTML=[['1년 차',71,'(2025 졸업 · 대상 98명)'],['3년 차',58,'(2023 졸업 · 대상 86명)'],['5년 차',44,'(2021 졸업 · 대상 79명)']].map(r=>`<div><div class="row small" style="justify-content:space-between"><b>${r[0]} 회신율</b><span><b>${r[1]}%</b> <span class="muted">${r[2]}</span></span></div><div class="bar" style="margin-top:4px;height:10px"><i style="width:${r[1]}%;background:${r[1]>=60?'#16a34a':r[1]>=50?'#d97706':'#B23A3C'}"></i></div></div>`).join('')+'<div class="note info"><span data-i="info"></span><div>연차가 길수록 회신율이 낮아지는 경향이 있어 <b>미회신자 재발송 및 관리자 보완 입력</b>으로 확보율을 높입니다.</div></div>';
lines($('#cCohort'),['2019','2020','2021','2022','2023','2024','2025'],[{name:'취업률',color:'#2563eb',values:[61,58,60,64,66,67,66]},{name:'진학+창업 포함',color:'#7E191B',values:[84,82,86,88,89,90,90]}],{min:40,max:100,unit:'%',val:false,h:250});
$('#cOrg').innerHTML=[['대기업',31],['공공기관·연구소',24],['중견·중소기업',22],['대학·교육기관',13],['해외기업',6],['기타',4]].map(r=>`<div class="bar-row" style="grid-template-columns:110px 1fr 40px"><span class="n">${r[0]}</span><div class="bar"><i style="width:${r[1]*2.4}%"></i></div><span class="v">${r[1]}%</span></div>`).join('');
donut($('#cSrc'),[{name:'본인(링크 포함)',v:72,color:'#16a34a'},{name:'관리자 보완',v:28,color:'#2563eb'}],['72%','본인 입력']);
$('#lgSrc').innerHTML='<span><i style="background:#16a34a"></i>본인 72%</span><span><i style="background:#2563eb"></i>관리자 보완 28%</span>';
$('#tStat').innerHTML=`<thead><tr><th>졸업 연차</th><th class="c">조사 대상</th><th class="c">회신(본인)</th><th class="c">보완 입력</th><th class="c">확보율</th><th class="c">취업</th><th class="c">진학</th><th class="c">창업</th><th class="c">기타</th></tr></thead><tbody>
 ${[['1년 차',98,70,12,'83.7%',62,18,6,14],['3년 차',86,50,15,'75.6%',68,14,9,9],['5년 차',79,35,17,'65.8%',70,10,13,7]].map(r=>`<tr><td class="bold">${r[0]}</td><td class="c">${r[1]}</td><td class="c">${r[2]}</td><td class="c">${r[3]}</td><td class="c bold">${r[4]}</td><td class="c">${r[5]}%</td><td class="c">${r[6]}%</td><td class="c">${r[7]}%</td><td class="c">${r[8]}%</td></tr>`).join('')}</tbody>`;

/* ───── 목록 ───── */
function detTxt(g){return g.type==='미등록'?'<span class="muted">-</span>':`${g.org}${g.org2?` <span class="muted small">(${g.org2})</span>`:''}`}
function drawList(){
  const q=$('#lq').value.trim(),ty=$('#lType').value,yr=$('#lYr').value,sr=$('#lSrc').value;
  const L=G.filter(g=>{const lb=lastBy(g);return(!q||g.n.includes(q)||g.sid.includes(q)||g.org.includes(q))&&(!ty||g.type===ty)&&(!yr||String(g.gy)===yr)&&(!sr||(lb&&((sr==='본인')===(lb.who!=='admin'))))});
  $('#lCnt').textContent=`총 ${L.length}명 (표본)`;
  $('#lBody').innerHTML=L.map(g=>{const lb=lastBy(g);return`<tr><td class="bold">${g.n}</td><td>${g.sid}</td><td>${g.dept} · ${g.prog}</td><td class="c">${g.gy}</td><td class="c">${yrOf(g)}년차${[1,3,5].includes(yrOf(g))?' <span class="badge b-pr">대상</span>':''}</td><td>${g.type==='미등록'?'<span class="badge b-rd">미등록</span>':`<span class="badge ${TB[g.type]}">${g.type}</span>`}</td><td>${detTxt(g)}</td><td>${lb?`<span class="badge ${SRC[lb.who][1]}">${SRC[lb.who][0]}</span>`:'<span class="muted">-</span>'}</td><td class="muted small">${lb?lb.at:'-'}</td><td class="c"><button class="btn xs" onclick="openReg(${g.id},'${g.type==='미등록'?'admin':'self'}')">${g.type==='미등록'?'보완입력':'보기·수정'}</button></td></tr>`}).join('')||'<tr><td colspan="10" class="c muted" style="padding:28px">조회 결과 없음</td></tr>';
}
['lq','lType','lYr','lSrc'].forEach(i=>$('#'+i).oninput=drawList);drawList();

/* ───── 등록/수정 모달 ───── */
let RG={id:null,who:'admin',type:'취업'};
$('#rgStu').innerHTML=G.map(g=>`<option value="${g.id}">${g.n} · ${g.sid} (${g.dept})</option>`).join('');
function formHtml(t){return FORMS[t].map(f=>`<div class="field"><label>${f[0]}</label>${f[1]==='sel'?`<select class="select">${f[2].map(o=>`<option>${o}</option>`).join('')}</select>`:`<input class="input" type="${f[1]==='date'?'date':'text'}" ${f[0]==='기관명'||f[0]==='진학 학교'||f[0]==='기업명'?'id="fMain"':''}>`}</div>`).join('')}
function drawType(){$('#rgType').innerHTML=TYPES.map(t=>`<label class="chk" style="border:1px solid ${RG.type===t?'var(--primary)':'var(--border)'};background:${RG.type===t?'var(--primary-10)':'#fff'};padding:7px 14px;border-radius:8px;cursor:pointer"><input type="radio" name="rt" ${RG.type===t?'checked':''} onchange="RG.type='${t}';drawType()">${t}</label>`).join('');
  const g=G.find(x=>x.id===RG.id);$('#rgForm').innerHTML=`<div class="grid g2" style="gap:10px">${formHtml(RG.type)}</div>`;
  if(g&&g.type===RG.type&&RG.who==='self'){const m=$('#fMain');if(m)m.value=g.org}}
function drawWho(){$$('#rgWho .tab').forEach(b=>b.classList.toggle('on',b.dataset.w===RG.who));
  $('#rgWhoNote').className='note '+(RG.who==='self'?'ok':'info');
  $('#rgWhoNote').innerHTML=RG.who==='self'?'<span data-i="user"></span><div>졸업생 본인이 로그인 후(또는 설문 링크로) 직접 입력하는 경로입니다. 입력 주체·일시가 이력에 기록됩니다.</div>':'<span data-i="shield"></span><div>학과·대학원 관리자의 <b>보완 입력</b>입니다. 저장해도 <b>본인 입력값은 변경되지 않고</b> 별도 이력으로 추가됩니다.</div>';hydrateIcons()}
$$('#rgWho .tab').forEach(b=>b.onclick=()=>{RG.who=b.dataset.w;drawWho()});
function drawHist(){const g=G.find(x=>x.id===RG.id);
  const selfL=g&&g.hist.filter(h=>h.who!=='admin').slice(-1)[0],admL=g&&g.hist.filter(h=>h.who==='admin').slice(-1)[0];
  const box=(t,h,c)=>`<div style="border:1px solid var(--border);border-radius:8px;padding:10px;background:${h?'#fff':'#faf7f7'}"><div class="small bold" style="color:${c}">${t}</div>${h?`<div style="font-size:13px;margin-top:3px"><span class="badge ${TB[h.type]}">${h.type}</span> ${h.text.split(' · ')[0]}</div><div class="muted small" style="margin-top:2px">${h.at}</div>`:'<div class="muted small" style="margin-top:6px">입력 없음</div>'}</div>`;
  $('#rgCmp').innerHTML=box('본인 입력값(최신)',selfL,'#15803d')+box('관리자 보완값(최신)',admL,'#1d4ed8');
  $('#rgHist').innerHTML=g&&g.hist.length?[...g.hist].reverse().map(h=>`<div class="tl ${h.who==='admin'?'admin':''}"><div class="h"><span class="badge ${SRC[h.who][1]}">${SRC[h.who][0]}</span><b>${h.by}</b><span class="muted small">${h.at}</span></div><div class="b"><span class="badge ${TB[h.type]}">${h.type}</span> ${h.text}</div></div>`).join('')+(g.hist.length?`<div class="tl sys"><div class="h"><span class="badge b-gy">시스템</span><span class="muted small">졸업 ${g.gy}년 · 졸업생 정보 연계 등록</span></div></div>`:''):'<div class="muted small">등록된 이력이 없습니다. 첫 입력이 이력으로 기록됩니다.</div>'}
function openReg(id,who){RG.id=id==null?G.find(g=>g.type==='미등록').id:id;RG.who=who;const g=G.find(x=>x.id===RG.id);RG.type=g.type==='미등록'?'취업':g.type;
  $('#rgStu').value=RG.id;$('#rgTitle').textContent=id==null?'진로 정보 등록':`${g.n} · 진로 정보`;$('#rgSub').textContent=`${g.dept} · ${g.prog} · ${g.gy}년 졸업 (${yrOf(g)}년 차)`;
  drawWho();drawType();drawHist();openModal('m-reg')}
$('#rgStu').onchange=e=>{RG.id=+e.target.value;const g=G.find(x=>x.id===RG.id);$('#rgSub').textContent=`${g.dept} · ${g.prog} · ${g.gy}년 졸업 (${yrOf(g)}년 차)`;drawHist()};
function saveReg(){const g=G.find(x=>x.id===RG.id),m=$('#fMain'),now='2026-10-17 '+String(9+Math.floor(Math.random()*8)).padStart(2,'0')+':'+String(Math.floor(Math.random()*60)).padStart(2,'0');
  const txt=(m&&m.value)||'(세부 입력 내용)';
  g.hist.push({who:RG.who,by:RG.who==='admin'?'경영대학원 행정팀 (관리자)':g.n+' (본인)',at:now,type:RG.type,text:txt});
  if(RG.who==='self'||g.type==='미등록'||!g.hist.some(h=>h.who!=='admin')){g.type=RG.type;g.org=txt;g.org2=''}
  if(g.svy.st&&g.svy.st!=='회신'&&RG.who==='admin'){g.svy.st='보완';}
  drawHist();drawList();drawSvy();toast(RG.who==='admin'?'관리자 보완 입력이 별도 이력으로 저장되었습니다 (본인 입력값 유지)':'본인 입력 이력이 저장되었습니다')}

/* ───── 추적조사 ───── */
const T_ST={'회신':'b-gr','열람':'b-bl','발송':'b-gy','반송':'b-rd','보완':'b-in','':'b-gy'};
function drawSvy(){
  const T=G.filter(g=>[1,3,5].includes(yrOf(g)));
  const f=$('#sf').value;
  const sent=T.filter(g=>g.svy.sent).length,opened=T.filter(g=>g.svy.open).length,rep=T.filter(g=>g.svy.rep).length;
  $('#s1').textContent=sent;$('#s2').textContent=opened;$('#s2s').textContent=`열람률 ${Math.round(opened/(sent||1)*100)}%`;$('#s3').textContent=rep;$('#s3s').textContent=`회신률 ${Math.round(rep/(sent||1)*100)}%`;
  $('#s4').textContent=T.filter(g=>!g.svy.rep&&g.svy.st!=='보완').length;
  $('#sBody').innerHTML=T.filter(g=>!f||g.svy.st===f).map(g=>{const s=g.svy,nr=!s.rep&&s.st!=='보완';return`<tr><td class="bold">${g.n}</td><td class="c">${yrOf(g)}년</td><td class="small">${g.email}</td><td class="small muted">${s.sent||'-'}</td><td class="small muted">${s.open||'-'}</td><td class="small muted">${s.rep||'-'}</td><td class="c">${s.rs}회</td><td class="c"><span class="badge ${T_ST[s.st]}">${s.st==='보완'?'관리자 보완':s.st||'미발송'}</span></td><td class="c" style="white-space:nowrap">${nr?`<button class="btn xs" onclick="resend(${g.id})"><span data-i="refresh" data-c="sm"></span>재발송</button> <button class="btn xs" onclick="openReg(${g.id},'admin')">보완입력</button>`:s.st==='회신'?'<span class="small muted">자동 반영됨</span>':'<span class="small muted">완료</span>'}</td></tr>`}).join('');
  hydrateIcons()}
function resend(id){const g=G.find(x=>x.id===id);g.svy.rs++;g.svy.st=g.svy.st==='반송'?'반송':'발송';g.svy.sent='2026-10-17 10:00';drawSvy();toast(g.n+' 님에게 재발송했습니다 (동일 토큰 유지)')}
function resendAll(){const T=G.filter(g=>[1,3,5].includes(yrOf(g))&&!g.svy.rep&&g.svy.st!=='보완'&&g.svy.st!=='반송');T.forEach(g=>{g.svy.rs++;g.svy.sent='2026-10-17 10:00'});drawSvy();toast(`미회신자 ${T.length}명에게 일괄 재발송했습니다 (반송 메일 제외)`)}
function sendAll(){toast('연차 대상 졸업생 고유 링크(토큰)를 생성하고 이메일을 발송했습니다')}
$('#sf').onchange=drawSvy;drawSvy();
