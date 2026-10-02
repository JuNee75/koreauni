const fs=require('fs');const d=__dirname;
const css=fs.readFileSync(d+'/common.css','utf8'),cjs=fs.readFileSync(d+'/common.js','utf8');
function build(out,shell,body,js,title,header,icon){
  let h=fs.readFileSync(d+'/'+shell,'utf8');
  const rep=(k,v)=>{h=h.split(k).join(v)};
  const bodyS=fs.existsSync(d+'/'+body)?fs.readFileSync(d+'/'+body,'utf8'):'';
  const jsS=fs.readFileSync(d+'/'+js,'utf8');
  h=h.replace('/*COMMON_CSS*/\n{{CSS}}',()=>css+(fs.existsSync(d+'/'+js.replace('.js','.css'))?fs.readFileSync(d+'/'+js.replace('.js','.css'),'utf8'):''));
  h=h.replace('/*COMMON_JS*/\n{{JS}}',()=>cjs+'\n'+jsS);
  h=h.replace('{{BODY}}',()=>bodyS);
  rep('{{TITLE}}',title);rep('{{HEADER}}',header||title);rep('{{ICON}}',icon||'dash');
  fs.writeFileSync(d+'/../'+out,h);console.log('built',out,(h.length/1024).toFixed(0)+'KB');
}
const arg=process.argv[2];
const T={
 p1:()=>build('career-track.html','shell-admin.html','p1.body.html','p1.js','진로 트랙 검사 관리','진로 트랙 검사 관리','compass'),
 p2:()=>build('integrated-profile.html','shell-admin.html','p2.body.html','p2.js','통합 프로파일','통합 프로파일 (핵심역량·학습연구역량·진로 트랙)','layers'),
 p3:()=>build('graduate-tracking.html','shell-admin.html','p3.body.html','p3.js','졸업생 진로 추적','졸업생 진로 추적 관리','grad'),
 p4:()=>build('learner-mypage.html','shell-user.html','p4.body.html','p4.js','학습자 마이페이지','마이페이지','user')
};
(arg?[arg]:Object.keys(T)).forEach(k=>T[k]());
