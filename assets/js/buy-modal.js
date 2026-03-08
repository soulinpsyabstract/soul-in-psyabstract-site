// /assets/js/buy-modal.js — модалка с Exclusive +200
(function(){
  const $ = (s,p=document)=>p.querySelector(s);
  function fmt(n){return '$'+(n||0)}
  window.openBuy = function(code, priceArg, titleArg){
    // accept numeric index (from gallery.js) or string code
    let a;
    if (typeof code === 'number') {
      a = (window.__DATA__ && __DATA__.ART[code-1]) || null;
    } else {
      a = (window.__DATA__ && __DATA__.ART.find(x=>x.code===code)) || null;
    }
    if(!a) return alert('Work not found');
    const ex = 200, base = a.price_usd||priceArg||0;
    const eth = (window.__PAYCFG__&&__PAYCFG__.ETH_ADDRESS)||'';
    const ncpCode = (window.__PAYCFG__&&window.__PAYCFG__.NCP&&window.__PAYCFG__.NCP[String(base)])||'';
    const label = a.title_ru||a.title_en||titleArg||a.code||('Art #'+code);
    const html = `
    <div class="modal" onclick="this===event.target && this.remove()">
      <div class="box">
        <h3>${label}</h3>
        <p>Base: ${fmt(base)} • Exclusive: ${fmt(base+ex)}</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${ncpCode?`<a class="btn" target="_blank" rel="noopener" href="https://www.paypal.com/ncp/payment/${ncpCode}">PayPal Fast</a>`:''}
          <a class="btn" target="_blank" rel="noopener" href="${(window.__PAYCFG__&&__PAYCFG__.PAYPAL_ME)||'https://paypal.me/SoulInPsyAbstract'}">PayPal.me</a>
          ${a.nft?`<a class="btn" target="_blank" href="${a.nft}" rel="noopener">NFT Token</a>`:''}
          ${eth?`<button class="btn" id="copyeth">Copy ETH</button>`:''}
        </div>
        <div style="margin-top:10px"><button class="btn" onclick="this.closest('.modal').remove()">Close</button></div>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', html);
    const b = $('#copyeth'); 
    if(b){ 
      b.addEventListener('click', async ()=>{
        try{ await navigator.clipboard.writeText(eth); b.textContent='ETH copied'; }catch(e){}
      });
    }
  };
})();