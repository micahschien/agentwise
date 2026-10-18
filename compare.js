// Fills the Free tier and Cheapest paid columns on compare.html from PRICES (prices-data.js).
(function(){
  if(typeof PRICES==='undefined')return;
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
  document.querySelectorAll('#compare-table tr[data-name]').forEach(tr=>{
    const p=PRICES.find(x=>x.name===tr.dataset.name);if(!p)return;
    const src=`<small><a href="${esc(p.source_url)}" target="_blank" rel="noopener">Source</a> · checked ${esc(p.checked)} · <span class="badge ${esc(p.status)}">${esc(p.status)}</span></small>`;
    tr.querySelector('.c-free').innerHTML=esc(p.free_tier);
    tr.querySelector('.c-paid').innerHTML=(p.price_usd_month==null?'<em>unverified</em>':`<strong>$${esc(p.price_usd_month)}/mo</strong> `+esc(p.paid_plan))+`<small>${esc(p.price_note)}</small>`+src;
  });
})();
