
;(() => {
  const mount = document.getElementById('gallery');
  if (!mount) return;

  // config for gallery
  const FREE = new Set([6,8,9,10,12,13,15,19,30,33,34,38,44,53,56,58,61,66,67,69,70,71,73,74,75,77,78,79,89,90,93]);
  const DRAFT = new Set([68,94,64,63,52,51,50,28,26]);
  const SOLD = new Set(); // computed dynamically if needed

  function priceFor(i){
    if (i <= 10) return 400;
    if (i <= 40) return 600;
    if (i <= 70) return 800;
    return 1000;
  }

  const grid = document.createElement('div');
  grid.className = 'grid-arts';

  for (let i=1;i<=94;i++){
    const card = document.createElement('article');
    card.className = 'art';
    const img = document.createElement('img');
    img.src = `/assets/img/${String(i).padStart(2,'0')}.jpg`;
    img.alt = `Art #${i}`;
    img.onerror = () => { img.style.objectFit = 'contain'; img.alt = 'image placeholder'; };
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const ov = document.createElement('div');
      ov.className = 'img-zoom-overlay';
      const zi = document.createElement('img');
      zi.src = img.src; zi.alt = img.alt;
      const zc = document.createElement('button');
      zc.className = 'img-zoom-close'; zc.textContent = '×';
      ov.appendChild(zi); ov.appendChild(zc);
      document.body.appendChild(ov);
      ov.addEventListener('click', () => ov.remove());
    });
    const meta = document.createElement('div');
    meta.className = 'meta';

    const badge = document.createElement('span');
    badge.className = 'badge';
    if (DRAFT.has(i)) badge.textContent = 'DRAFT';
    else if (FREE.has(i)) badge.textContent = 'FREE';
    else badge.textContent = 'FOR SALE';

    // Title from __DATA__
    const artData = window.__DATA__ && window.__DATA__.ART && window.__DATA__.ART[i-1];
    const titleEl = document.createElement('div');
    titleEl.className = 'art-title';
    if (artData) {
      titleEl.textContent = window.__LANG === 'en' ? artData.title_en : artData.title_ru;
    }

    const p = document.createElement('div');
    p.className = 'muted';
    p.textContent = window.__LANG === 'en'
      ? 'Ink liner. One of a kind. Aquamarine mood.'
      : 'Лайнер. Уникальный оригинал. Аквамариновое настроение.';

    const buy = document.createElement('div');
    buy.className = 'buybar';
    const btn = document.createElement('a');
    btn.className = 'btn';
    const price = priceFor(i);
    btn.textContent = (window.__LANG === 'en' ? 'Buy ' : 'Купить ') + `$${price}`;
    btn.href = '#';
    const artTitle = artData ? (window.__LANG === 'en' ? artData.title_en : artData.title_ru) : `Art #${i}`;
    btn.addEventListener('click', (e) => { e.preventDefault(); openBuy(i, price, artTitle); });
    buy.appendChild(btn);

    meta.appendChild(badge);
    meta.appendChild(titleEl);
    meta.appendChild(p);
    meta.appendChild(buy);

    card.appendChild(img);
    card.appendChild(meta);
    grid.appendChild(card);
  }
  mount.appendChild(grid);

  // buy modal shim — use PSA.openBuyModal if available
  window.openBuy = function(idx, basePrice, title){
    const psa = window.PSA;
    if(psa && psa.openBuyModal){
      psa.openBuyModal({id:idx, price:basePrice, title:title});
    } else {
      window.open('https://paypal.me/SoulInPsyAbstract/' + basePrice, '_blank');
    }
  };
})();
