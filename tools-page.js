(function(){
const grid=document.getElementById('tool-grid'),q=document.getElementById('tool-search'),sel=document.getElementById('tool-cat'),cnt=document.getElementById('tool-count'),empty=document.getElementById('tool-empty');
[...new Set(TOOLS.map(t=>t.category))].sort().forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;sel.appendChild(o)});
function esc(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function render(){const s=q.value.trim().toLowerCase(),c=sel.value;
 const r=TOOLS.filter(t=>(c==='all'||t.category===c)&&(!s||(t.name+' '+t.description+' '+t.category).toLowerCase().includes(s)));
 grid.innerHTML=r.map(t=>`<a class="card" href="${esc(t.url)}" target="_blank" rel="noopener"><span class="tag">${esc(t.category)}</span><h3>${esc(t.name)}</h3><p>${esc(t.description)}</p><span class="more">Visit →</span></a>`).join('');
 cnt.textContent=r.length+' of '+TOOLS.length+' tools';empty.hidden=r.length>0}
q.addEventListener('input',render);sel.addEventListener('change',render);render();})();
