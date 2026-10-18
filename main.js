const SIGNUP_URL='https://script.google.com/macros/s/AKfycbzfpbgY7aK1XWdBiBmMIHbhzhNP5hsUP-qNHOv-Mru-D_Q4DQqXiLRnqrkwjI31Sh_3/exec'; // Google Apps Script web app URL; empty = placeholder mode
// Source tracking: ?ref= (sanitized) is remembered for the visit
function cleanRef(v){return String(v||'').toLowerCase().replace(/[^a-z0-9_-]/g,'').slice(0,40)}
try{const r=cleanRef(new URLSearchParams(location.search).get('ref'));if(r)sessionStorage.setItem('ref',r)}catch(e){}
function getRef(){try{return cleanRef(sessionStorage.getItem('ref'))}catch(e){return ''}}
// Mobile menu
const mb=document.querySelector('.menu-btn'),nv=document.querySelector('.nav');
mb&&mb.addEventListener('click',()=>{const o=nv.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
// Agentwise signup: set SIGNUP_URL to the deployed Google Apps Script web app URL (see /workspace/vibestack-signup/README.md).
// While empty, forms show the "not live yet" placeholder.
document.querySelectorAll('[data-signup]').forEach(f=>f.addEventListener('submit',async e=>{
  e.preventDefault();const i=f.querySelector('input'),m=f.querySelector('.form-msg');
  const v=(i.value||'').trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){m.textContent='Please enter a valid email address.';return}
  if(!SIGNUP_URL){m.textContent='Thanks! Signup is not live yet, so nothing was saved.';f.reset();return}
  const btn=f.querySelector('button');btn&&(btn.disabled=true);
  try{
    await fetch(SIGNUP_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:new URLSearchParams(f.dataset.source?Object.assign({email:v,source:f.dataset.source},getRef()?{ref:getRef()}:{}):{email:v,source:getRef()||f.id||location.pathname})});
    m.textContent=f.dataset.source==='pro-waitlist'?"You're in! We'll email you once when Pro launches.":"You're in! Thanks for subscribing.";f.reset();
  }catch(err){m.textContent='Something went wrong. Please try again in a moment.'}
  finally{btn&&(btn.disabled=false)}
}));
// Prompt copy + category filter
document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{
  const t=b.closest('.prompt').querySelector('.prompt-text').textContent;
  try{await navigator.clipboard.writeText(t)}catch(e){const a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();document.execCommand('copy');a.remove()}
  const l=b.dataset.label||(b.dataset.label=b.textContent);b.textContent='Copied!';setTimeout(()=>b.textContent=l,1500)}));
document.querySelectorAll('#cat-filters .chip').forEach(c=>c.addEventListener('click',()=>{
  document.querySelectorAll('#cat-filters .chip').forEach(x=>x.classList.toggle('active',x===c));
  document.querySelectorAll('.prompt').forEach(p=>p.hidden=!(c.dataset.cat==='all'||p.dataset.cat===c.dataset.cat))}));
