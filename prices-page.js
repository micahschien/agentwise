(function(){
const q=document.getElementById('price-search'),st=document.getElementById('price-status'),body=document.getElementById('price-rows'),cnt=document.getElementById('price-count');
let sortK='name',asc=true;
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function render(){const s=q.value.trim().toLowerCase(),f=st.value;
 const r=PRICES.filter(t=>(f==='all'||t.status===f)&&(!s||(t.name+' '+t.category+' '+(t.paid_plan||'')).toLowerCase().includes(s)));
 r.sort((a,b)=>{let x=a[sortK],y=b[sortK];if(x==null)x=asc?Infinity:-Infinity;if(y==null)y=asc?Infinity:-Infinity;
  if(typeof x==='string')x=x.toLowerCase();if(typeof y==='string')y=y.toLowerCase();return(x<y?-1:x>y?1:0)*(asc?1:-1)});
 body.innerHTML=r.map(t=>`<tr><td><strong>${esc(t.name)}</strong><small>${esc(t.category)}</small></td><td>${esc(t.free_tier)}</td><td>${esc(t.paid_plan)}</td><td><strong>${t.price_usd_month==null?'<em>unverified</em>':'$'+t.price_usd_month}</strong><small>${esc(t.price_note)}</small></td><td>${esc(t.checked)}</td><td><a href="${esc(t.source_url)}" target="_blank" rel="noopener">Source</a></td><td><span class="badge ${esc(t.status)}">${esc(t.status)}</span></td></tr>`).join('')||'<tr><td colspan="7">No matches.</td></tr>';
 document.querySelectorAll('th[data-k]').forEach(th=>{th.removeAttribute('aria-sort');if(th.dataset.k===sortK)th.setAttribute('aria-sort',asc?'ascending':'descending')});
 cnt.textContent=r.length+' of '+PRICES.length+' tools · data updated '+PRICES_UPDATED}
document.querySelectorAll('th[data-k]').forEach(th=>th.addEventListener('click',()=>{const k=th.dataset.k;if(k===sortK)asc=!asc;else{sortK=k;asc=true}render()}));
q.addEventListener('input',render);st.addEventListener('change',render);render();})();
