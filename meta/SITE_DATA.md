# SITE DATA & CONTENT — FIXES REQUIRED
# Agent: Data/content fixer
# Site root: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/

## FIX 1 — manifest.json fill with real content
File: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/meta/data/manifest.json
Current: placeholder one-liners
Fix: rewrite with full bilingual content:
```json
{
  "text_ru": "Я не рисую красоту — я рисую правду.\n\nЛиния — это не украшение, это нерв.\n\nСердце в центре каждой работы — не символ, это адрес.\n\nХаос — не ошибка. Хаос — это честность материала.\n\nUV-слой — то, что видно только в темноте. Как внутреннее.\n\nЯ не художник с дипломом. Я человек, который не смог не рисовать.\n\nКаждая работа — один момент, зафиксированный навсегда.\n\nSoul In PsyAbstract — это не стиль. Это — я.",
  "text_en": "I don't draw beauty — I draw truth.\n\nA line is not decoration. It is a nerve.\n\nThe heart at the center of every work is not a symbol. It is an address.\n\nChaos is not a mistake. Chaos is the honesty of the material.\n\nThe UV layer — what you can only see in darkness. Like the interior.\n\nI am not a trained artist. I am someone who could not stop drawing.\n\nEvery work is one moment, fixed forever.\n\nSoul In PsyAbstract is not a style. It is me."
}
```

## FIX 2 — poems.json fill with real content
File: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/meta/data/poems.json
Current: one-liner placeholder
Fix: rewrite with 7 short Russian poems:
```json
{
  "text_ru": "***\n\nя рисую сердце\nснова и снова\nпотому что каждый раз\nоно другое\n\n***\n\nхаос — это не беспорядок\nэто когда всё внутри\nговорит одновременно\nи ты наконец слышишь\n\n***\n\nультрафиолет\nнаходит то\nчто дневной свет\nбоится показать\n\n***\n\nлиния не знает\nкуда идёт\nпока не придёт\nтуда куда надо\n\n***\n\nпосле каждого падения\nя снова беру кисть\nэто не сила\nэто просто\nя не знаю иначе\n\n***\n\nспираль не заканчивается\nона просто уходит\nза пределы листа\nпродолжаясь внутри тебя\n\n***\n\nя не рисую для музеев\nя рисую\nчтобы не молчать\nкогда слов нет",
  "text_en": "***\n\ni draw the heart\nagain and again\nbecause each time\nit is different\n\n***\n\nchaos is not disorder\nit is when everything inside\nspeaks at once\nand you finally hear\n\n***\n\nultraviolet\nfinds what\ndaylight\nfears to show\n\n***\n\nthe line does not know\nwhere it goes\nuntil it arrives\nwhere it must\n\n***\n\nafter every fall\ni pick up the brush again\nnot because i am strong\nbut because\ni know no other way\n\n***\n\nthe spiral does not end\nit simply goes\nbeyond the edge of the paper\ncontinuing inside you\n\n***\n\ni do not draw for museums\ni draw\nso as not to be silent\nwhen there are no words"
}
```

## FIX 3 — Update manifest.txt and poems.txt (text fallbacks)
These are already written. Verify they exist and have content:
- /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/texts/manifest.txt
- /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/texts/poems.txt
If either has less than 100 chars, rewrite from FIX 1/2 above (text_ru field).

## FIX 4 — Update data.js NFT links
File: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/js/data.js
Items 1-21 have nft:"" (empty string). Add the NFT links from site.config.json nft.links array.
site.config.json nft.links has 21 entries. Map them in order to ART items 1-21.
The links:
item 1: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046501
item 2: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046499
item 3: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046497
item 4: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046496
item 5: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046494
item 6: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046493
item 7: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046492
item 8: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046491
item 9: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046490
item 10: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046487
item 11: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046481
item 12: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046480
item 13: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046479
item 14: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046469
item 15: https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:19223264877338955498166477182825409596884630599573943600177382871287898046465
item 16: https://og.rarible.com/token/polygon/0x35f8aee672cde8e5fd09c93d2bfe4ff5a9cf0756:19223264877338955498166477182825409596884630599573943600177382871287898046476
item 17: https://og.rarible.com/token/polygon/0x35f8aee672cde8e5fd09c93d2bfe4ff5a9cf0756:19223264877338955498166477182825409596884630599573943600177382871287898046475
item 18: https://og.rarible.com/token/polygon/0x35f8aee672cde8e5fd09c93d2bfe4ff5a9cf0756:19223264877338955498166477182825409596884630599573943600177382871287898046474
item 19: https://og.rarible.com/token/polygon/0x35f8aee672cde8e5fd09c93d2bfe4ff5a9cf0756:19223264877338955498166477182825409596884630599573943600177382871287898046472
item 20: https://og.rarible.com/token/polygon/0x35f8aee672cde8e5fd09c93d2bfe4ff5a9cf0756:19223264877338955498166477182825409596884630599573943600177382871287898046471
item 21: https://og.rarible.com/token/polygon/0x35f8aee672cde8e5fd09c93d2bfe4ff5a9cf0756:19223264877338955498166477182825409596884630599573943600177382871287898046470

## IMPORTANT
- Read the actual current data.js before editing (first 100 lines + last 20 lines)
- Only change the nft:"" fields for items 1-21
- Do not change title_ru, title_en, price_usd, file, code, sold
- data.js is at /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/js/data.js
