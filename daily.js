(function(){
const list=document.getElementById('feed-list');if(!list||typeof FEED==='undefined')return;
const names={ai:'AI',agents:'Agents',vibe:'Vibe coding',games:'Games'};
const fmt=d=>new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
list.innerHTML=FEED.map(i=>`<article class="card flat feed-item" data-topic="${i.topic}"><span class="tag">${names[i.topic]}</span> <span class="muted small">${fmt(i.date)}</span><h3>${esc(i.title)}</h3><p>${esc(i.summary)}</p><a class="more" href="${i.url}" target="_blank" rel="noopener">${esc(i.source)} →</a></article>`).join('');
document.getElementById('feed-updated').textContent='Last updated '+fmt(FEED_UPDATED)+'.';
document.querySelectorAll('#feed-filters .chip').forEach(c=>c.addEventListener('click',()=>{
document.querySelectorAll('#feed-filters .chip').forEach(x=>x.classList.toggle('active',x===c));
list.querySelectorAll('.feed-item').forEach(p=>p.hidden=!(c.dataset.topic==='all'||p.dataset.topic===c.dataset.topic))}));
})();
