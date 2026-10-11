(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const themeButtons = [$("#themeToggle"), $("#themeToggleMobile")].filter(Boolean);
  const mobileMenu = $("#mobileMenu");
  try { if (localStorage.getItem("openform-theme") === "dark") document.body.classList.add("dark"); } catch (_) {}
  function syncTheme() {
    const dark = document.body.classList.contains("dark");
    themeButtons.forEach(button => {
      const icon = $(".theme-icon", button);
      if (icon) icon.textContent = dark ? "☼" : "◐";
      button.setAttribute("aria-pressed", String(dark));
      button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    });
  }
  syncTheme();
  themeButtons.forEach(button => button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    try { localStorage.setItem("openform-theme", document.body.classList.contains("dark") ? "dark" : "light"); } catch (_) {}
    syncTheme();
  }));
  mobileMenu?.addEventListener("click", () => {
    const nav = $(".main-nav");
    if (!nav) return;
    const open = nav.classList.toggle("mobile-open");
    mobileMenu.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  const assets = [
    {id:"soft-forms",title:"Soft forms",category:"Illustration",format:"SVG",tags:["SVG","Illustration","Organic"],description:"A set of quiet, organic shapes for flexible compositions, posters, and visual studies.",kind:"shape"},
    {id:"quiet-grid",title:"Quiet grid",category:"Background",format:"SVG",tags:["Background","Grid","Structure"],description:"A restrained grid background for layouts that need structure without visual noise.",kind:"grid"},
    {id:"type-play",title:"Type play",category:"Typography",format:"SVG",tags:["Typography","Display","Experiment"],description:"A typographic experiment made to be remixed into posters, covers, and digital compositions.",kind:"type"},
    {id:"orbit-study",title:"Orbit study",category:"Illustration",format:"SVG",tags:["SVG","Illustration","Abstract"],description:"An abstract orbit illustration built from editable vector paths and circles.",kind:"orbit"},
    {id:"daily-ui",title:"Daily dashboard concept",category:"UI",format:"SVG",tags:["UI","Dashboard","Layout"],description:"A compact dashboard concept with hierarchy, navigation, and a simple action pattern.",kind:"ui"},
    {id:"color-fields",title:"Color fields no. 04",category:"Background",format:"SVG",tags:["Background","Abstract","Texture"],description:"Layered organic fields designed as a lightweight, scalable background study.",kind:"fields"},
    {id:"motion-lines",title:"Motion lines study",category:"Motion",format:"SVG",tags:["Motion","Loop","Lines"],description:"A vector line study with visual rhythm that can be adapted into a looping motion experiment.",kind:"lines"},
    {id:"icon-playground",title:"Icon playground",category:"UI",format:"SVG",tags:["UI","Icons","Interface"],description:"A small set of simple interface symbols and geometric marks for wireframes and mockups.",kind:"icons"},
    {id:"cut-paper",title:"Cut-paper shapes",category:"Illustration",format:"SVG",tags:["Illustration","Shapes","Poster"],description:"Overlapping paper-inspired shapes with simple geometry and strong contrast.",kind:"paper"},
    {id:"soft-matter",title:"Soft matter backgrounds",category:"Background",format:"SVG",tags:["Background","Texture","Abstract"],description:"A soft tonal composition for covers, landing pages, and visual studies.",kind:"soft"},
    {id:"type-specimen",title:"Type specimen kit",category:"Typography",format:"SVG",tags:["Typography","Specimen","Display"],description:"A typographic specimen layout for exploring expressive display type and interface labels.",kind:"type"},
    {id:"type-motion",title:"Type in motion",category:"Motion",format:"SVG",tags:["Motion","Typography","Kinetic"],description:"A kinetic typography concept sheet and starting point for motion studies.",kind:"kinetic"}
  ];

  function previewMarkup(kind, id) {
    switch (kind) {
      case "shape": return '<div class="art-sample sample-shape"><span class="sample-label">FORM STUDY / 001</span><div class="sample-circle"></div><div class="sample-pillar"></div><div class="sample-ring"></div><span class="sample-footer">GEOMETRY / LAYER / PLAY</span></div>';
      case "soft": return '<div class="art-sample sample-soft"><div class="sample-blob blob-a"></div><div class="sample-blob blob-b"></div><div class="sample-blob blob-c"></div><span>SOFT<br>MATTER</span><small>FIELD STUDY / 04</small></div>';
      case "type": return id === "type-specimen" ? '<div class="art-sample sample-type specimen-variant"><small>OPENFORM / TYPE STUDY</small><strong>Rr<span>?</span></strong><label>REGULAR / ITALIC / CONTRAST</label><div class="type-specimen-line"></div></div>' : '<div class="art-sample sample-type"><small>OPENFORM / TYPE STUDY</small><strong>Aa<span>!</span></strong><label>FORM / FOLLOWS / FEELING</label></div>';
      case "orbit": return '<div class="art-sample sample-orbit"><svg viewBox="0 0 500 360" role="img" aria-label="Orbit illustration"><rect width="500" height="360" fill="#172238"/><g fill="none" stroke="#a7e5f2" stroke-width="2"><ellipse cx="250" cy="180" rx="160" ry="65" transform="rotate(-35 250 180)"/><ellipse cx="250" cy="180" rx="160" ry="65" transform="rotate(35 250 180)"/><ellipse cx="250" cy="180" rx="160" ry="65" transform="rotate(90 250 180)"/></g><circle cx="250" cy="180" r="48" fill="#4a7dec"/><circle cx="250" cy="180" r="15" fill="#d5f58e"/><circle cx="105" cy="135" r="12" fill="#ff8977"/><circle cx="350" cy="88" r="9" fill="#f8f6ef"/></svg></div>';
      case "ui": return '<div class="art-sample sample-ui"><div class="sample-ui-card"><div class="sample-ui-top"><i></i><i></i><i></i><span>DAILY / 07</span></div><small>YOUR SPACE, YOUR PACE</small><strong>Make room<br>for ideas.</strong><div class="sample-ui-rule"></div><b>Get started ↗</b></div></div>';
      case "fields": return '<div class="art-sample sample-fields"><div></div><div></div><div></div><span>FIELD<br>NOTES</span></div>';
      case "lines": return '<div class="art-sample sample-lines"><svg viewBox="0 0 500 360" role="img" aria-label="Abstract motion lines"><rect width="500" height="360" fill="#172238"/>' + Array.from({length:14},(_,i)=>'<path d="M -20 '+(35+i*23)+' C 80 '+(i%3?25:210)+', 180 '+(i%2?300:90)+', 290 '+(45+i*21)+' S 420 '+(75+i*17)+', 530 '+(10+i*25)+'" fill="none" stroke="'+(["#a7e5f2","#85a6ff","#ff8977","#eef5ff"][i%4])+'" stroke-width="'+(i%4===0?3:1.5)+'" opacity="'+(.6+i*.025)+'"/>').join("") + '</svg></div>';
      case "icons": return '<div class="art-sample sample-icons"><div class="icon-grid">'+["＋","↗","○","✳","⌘","↘","□","×","⌕","↻","△","→"].map((x,i)=>'<span style="transform:rotate('+((i%3-1)*6)+'deg)">'+x+'</span>').join("")+'</div><small>12 MARKS / SVG</small></div>';
      case "paper": return '<div class="art-sample sample-paper"><div class="paper-circle"></div><div class="paper-arch"></div><div class="paper-cut"></div><div class="paper-label">CUT / FOLD / REPEAT</div></div>';
      case "kinetic": return '<div class="art-sample sample-kinetic"><small>MOTION TEST / 02</small><strong>MOVE<br><em>WITH</em><br>INTENT.</strong><span>TYPE / TIMING / RHYTHM</span></div>';
      case "grid": return '<div class="art-sample sample-grid"><div class="grid-lines"></div><small>NOTES FROM THE MARGIN / 008</small><strong>Make<br>space for<br><em>better ideas.</em></strong><span>EDITORIAL GRID STUDY</span></div>';
      default: return "";
    }
  }

  const grid = $("#assetGrid");
  const modal = $("#assetModal");
  let activeFilter = "All", query = "", previousFocus = null;
  const search = $("#searchInput"), clear = $("#clearSearch"), empty = $("#emptyState");
  const cardMarkup = (a, i) => '<article class="asset-card" tabindex="0" role="button" aria-label="View '+a.title+', '+a.category+', '+a.format+'" data-id="'+a.id+'" data-kind="'+a.kind+'" style="animation-delay:'+Math.min(i*25,180)+'ms"><div class="asset-preview">'+previewMarkup(a.kind,a.id)+'<span class="preview-label">'+String(i+1).padStart(2,"0")+' / '+a.category.toUpperCase()+'</span><span class="asset-open" aria-hidden="true">↗</span></div><div class="asset-meta"><div><h3>'+a.title+'</h3><p>'+a.format+' · ORIGINAL SAMPLE</p></div><span class="asset-category">'+a.category+'</span></div></article>';

  function render() {
    if (!grid) return;
    let list = assets.filter(a => (activeFilter === "All" || a.category === activeFilter) && (a.title+" "+a.category+" "+a.format+" "+a.tags.join(" ")).toLowerCase().includes(query.toLowerCase()));
    const sort = $("#sortSelect")?.value;
    if (sort === "az") list.sort((a,b)=>a.title.localeCompare(b.title));
    if (sort === "type") list.sort((a,b)=>a.category.localeCompare(b.category)||a.title.localeCompare(b.title));
    grid.innerHTML = list.map(cardMarkup).join("");
    const status = $("#filterStatus"), count = $("#collectionCount");
    if (status) status.textContent = list.length+" resource"+(list.length===1?"":"s");
    if (count) count.textContent = list.length+" RESOURCE"+(list.length===1?"":"S");
    if (empty) empty.hidden = list.length > 0;
    grid.hidden = list.length === 0;
    if (clear) clear.style.display = query ? "grid" : "none";
    $$(".filter-chip, .sidebar-filter").forEach(b=>{const active=b.dataset.filter===activeFilter;b.setAttribute("aria-pressed",String(active));b.classList.toggle("is-active",active);b.classList.toggle("active",active);});
  }
  function openAsset(id) {
    const a = assets.find(x=>x.id===id);
    if (!a || !modal) return;
    previousFocus = document.activeElement;
    $("#modalPreview").innerHTML = previewMarkup(a.kind,a.id);
    $("#modalEyebrow").textContent = a.category.toUpperCase()+" / "+a.format+" / FREE SAMPLE";
    $("#modalTitle").textContent = a.title;
    $("#modalDescription").textContent = a.description;
    $("#modalTags").innerHTML = a.tags.map(t=>"<span>"+t+"</span>").join("");
    modal.dataset.assetId = a.id;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
    $("#modalClose")?.focus();
  }
  function closeAsset() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
    previousFocus?.focus?.();
  }
  if (grid) {
    search?.addEventListener("input",()=>{query=search.value.trim();render()});
    clear?.addEventListener("click",()=>{search.value="";query="";render();search.focus()});
    $("#sortSelect")?.addEventListener("change",render);
    $(".filter-chip, .sidebar-filter").forEach(btn=>btn.addEventListener("click",()=>{activeFilter=btn.dataset.filter;render()}));
    $("#resetFilters")?.addEventListener("click",()=>{activeFilter="All";query="";if(search)search.value="";render()});
    grid.addEventListener("click",e=>{const card=e.target.closest(".asset-card");if(card)openAsset(card.dataset.id)});
    grid.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.classList.contains("asset-card")){e.preventDefault();openAsset(e.target.dataset.id)}});
    render();
    const params = new URLSearchParams(location.search);
    const requested = params.get("resource") || (location.hash.startsWith("#asset-") ? location.hash.slice(7) : "");
    if (requested) setTimeout(()=>openAsset(requested),80);
  }
  $("#modalClose")?.addEventListener("click",closeAsset);
  modal?.addEventListener("click",e=>{if(e.target===modal)closeAsset()});
  function svgFor(a) {
    const palette = {
      paper: "#F5F4F0", ink: "#191A1B", blue: "#4386F5",
      coral: "#FF8977", acid: "#B8EFDF", lavender: "#DCDFFB", white: "#FCFCFA"
    };
    let background = palette.paper, shapes = "";
    if (a.kind === "shape") {
      background = palette.acid;
      shapes = '<circle cx="160" cy="155" r="112" fill="'+palette.paper+'"/><rect x="119" y="24" width="76" height="280" rx="38" fill="'+palette.coral+'" transform="rotate(34 157 164)"/><circle cx="328" cy="221" r="88" fill="none" stroke="'+palette.blue+'" stroke-width="27"/><circle cx="328" cy="221" r="18" fill="'+palette.paper+'"/>';
    } else if (a.kind === "orbit") {
      background = palette.ink;
      shapes = '<g fill="none" stroke="'+palette.paper+'" stroke-width="2"><ellipse cx="250" cy="180" rx="160" ry="65" transform="rotate(-35 250 180)"/><ellipse cx="250" cy="180" rx="160" ry="65" transform="rotate(35 250 180)"/><ellipse cx="250" cy="180" rx="160" ry="65" transform="rotate(90 250 180)"/></g><circle cx="250" cy="180" r="49" fill="'+palette.blue+'"/><circle cx="250" cy="180" r="15" fill="'+palette.acid+'"/><circle cx="105" cy="135" r="12" fill="'+palette.coral+'"/><circle cx="350" cy="88" r="9" fill="'+palette.acid+'"/>';
    } else if (a.kind === "type") {
      background = palette.coral;
      shapes = '<text x="218" y="224" font-family="Arial,sans-serif" font-size="178" font-weight="700" text-anchor="middle" letter-spacing="-18" fill="'+palette.paper+'">Aa</text><text x="377" y="137" font-family="Arial,sans-serif" font-size="105" font-weight="700" text-anchor="middle" fill="'+palette.acid+'">!</text><path d="M52 276H448" stroke="'+palette.ink+'" stroke-width="2"/><text x="52" y="306" font-family="monospace" font-size="12" letter-spacing="2" fill="'+palette.ink+'">TYPE / PLAY / REPEAT</text>';
    } else if (a.kind === "ui") {
      background = palette.blue;
      shapes = '<rect x="45" y="35" width="410" height="290" rx="5" fill="'+palette.paper+'"/><circle cx="66" cy="56" r="4" fill="'+palette.coral+'"/><circle cx="80" cy="56" r="4" fill="'+palette.acid+'"/><circle cx="94" cy="56" r="4" fill="'+palette.blue+'"/><path d="M45 72H455" stroke="#D6D4CC"/><text x="78" y="110" font-family="monospace" font-size="11" fill="#74746D">YOUR SPACE, YOUR PACE</text><text x="78" y="163" font-family="Arial,sans-serif" font-size="39" font-weight="700" letter-spacing="-2" fill="'+palette.ink+'">Make room</text><text x="78" y="207" font-family="Arial,sans-serif" font-size="39" font-weight="700" letter-spacing="-2" fill="'+palette.ink+'">for ideas.</text><rect x="78" y="247" width="142" height="40" rx="3" fill="'+palette.ink+'"/><text x="94" y="272" font-family="Arial,sans-serif" font-size="12" fill="'+palette.paper+'">Get started ↗</text>';
    } else if (a.kind === "grid") {
      background = palette.paper;
      shapes = '<g stroke="#C8C5BB" stroke-width="1">'+Array.from({length:8},(_,i)=>'<path d="M'+(30+i*63)+' 25V335"/>').join("")+Array.from({length:5},(_,i)=>'<path d="M25 '+(42+i*68)+'H475"/>').join("")+'</g><circle cx="272" cy="167" r="83" fill="'+palette.acid+'"/><path d="M272 84V250M189 167H355" stroke="'+palette.blue+'" stroke-width="3"/><path d="M210 107L334 231" stroke="'+palette.coral+'" stroke-width="18"/>';
    } else if (a.kind === "soft" || a.kind === "fields") {
      background = a.kind === "soft" ? palette.blue : palette.lavender;
      shapes = '<circle cx="155" cy="157" r="122" fill="'+palette.coral+'"/><circle cx="337" cy="219" r="110" fill="'+palette.acid+'"/><circle cx="274" cy="106" r="63" fill="'+palette.paper+'" opacity=".93"/><path d="M40 288Q145 241 226 302T470 288" fill="none" stroke="'+palette.ink+'" stroke-width="3"/><text x="32" y="43" font-family="monospace" font-size="10" letter-spacing="2" fill="'+(a.kind === "soft" ? palette.paper : palette.ink)+'">FIELD STUDY / 04</text>';
    } else if (a.kind === "lines") {
      background = palette.ink;
      shapes = Array.from({length:12},(_,i)=>'<path d="M-20 '+(24+i*27)+' C90 '+(i%2?30:185)+', 180 '+(i%3?290:110)+', 295 '+(40+i*24)+' S420 '+(80+i*19)+', 530 '+(15+i*28)+'" fill="none" stroke="'+(i%3===0?palette.coral:i%3===1?palette.acid:palette.paper)+'" stroke-width="'+(i%4===0?4:1.5)+'" opacity="'+(.64+i*.025)+'"/>').join("");
    } else if (a.kind === "icons") {
      background = palette.acid;
      shapes = ["＋","↗","○","✳","⌘","↘","□","×","⌕","↻","△","→"].map((t,i)=>'<rect x="'+(35+(i%4)*110)+'" y="'+(44+Math.floor(i/4)*91)+'" width="84" height="68" rx="2" fill="'+(i%3===0?palette.coral:i%3===1?palette.blue:palette.paper)+'"/><text x="'+(77+(i%4)*110)+'" y="'+(91+Math.floor(i/4)*91)+'" font-family="Arial,sans-serif" font-size="36" text-anchor="middle" fill="'+(i%3===1?palette.paper:palette.ink)+'">'+t+'</text>').join("");
    } else if (a.kind === "paper") {
      background = palette.lavender;
      shapes = '<circle cx="150" cy="155" r="112" fill="'+palette.acid+'"/><path d="M290 300V146a77 77 0 01154 0v154z" fill="'+palette.coral+'"/><path d="M128 80L358 285" stroke="'+palette.blue+'" stroke-width="48"/><circle cx="352" cy="87" r="24" fill="'+palette.paper+'"/>';
    } else if (a.kind === "kinetic") {
      background = palette.acid;
      shapes = '<text x="38" y="140" font-family="Arial,sans-serif" font-size="66" font-weight="700" letter-spacing="-4" fill="'+palette.ink+'">MOVE</text><text x="38" y="202" font-family="Arial,sans-serif" font-size="66" font-weight="700" letter-spacing="-4" fill="none" stroke="'+palette.blue+'" stroke-width="2">WITH</text><text x="38" y="264" font-family="Arial,sans-serif" font-size="66" font-weight="700" letter-spacing="-4" fill="'+palette.coral+'">INTENT.</text><path d="M38 288H463" stroke="'+palette.ink+'" stroke-width="2"/>';
    } else {
      const safeTitle = a.title.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
      background = palette.coral;
      shapes = '<text x="250" y="165" text-anchor="middle" font-family="Arial,sans-serif" font-size="42" font-weight="700" letter-spacing="-2" fill="'+palette.paper+'">'+safeTitle+'</text><path d="M80 198H420" stroke="'+palette.acid+'" stroke-width="10"/><text x="250" y="245" text-anchor="middle" font-family="monospace" font-size="14" letter-spacing="2" fill="'+palette.ink+'">OPENFORM / SAMPLE STUDY</text>';
    }
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360" role="img" aria-label="'+a.title.replace(/&/g,"&amp;").replace(/"/g,"&quot;")+' sample artwork"><rect width="500" height="360" fill="'+background+'"/>'+shapes+'</svg>';
  }
  $("#downloadButton")?.addEventListener("click",()=>{
    const a=assets.find(x=>x.id===modal?.dataset.assetId);if(!a)return;
    const url=URL.createObjectURL(new Blob([svgFor(a)],{type:"image/svg+xml;charset=utf-8"}));
    const link=document.createElement("a");link.href=url;link.download="openform-"+a.id+".svg";document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),800);
  });
  $("#copyButton")?.addEventListener("click",async()=>{
    const a=assets.find(x=>x.id===modal?.dataset.assetId);if(!a)return;
    const btn=$("#copyButton"), source=svgFor(a);
    try{await navigator.clipboard.writeText(source)}catch(_){const area=document.createElement("textarea");area.value=source;document.body.append(area);area.select();document.execCommand("copy");area.remove()}
    btn.textContent="SVG copied ✓";setTimeout(()=>btn.textContent="Copy source SVG",1500);
  });
  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"&&modal?.classList.contains("open")){closeAsset();return}
    if(e.key==="/"&&search&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();search.focus()}
    if(e.key==="Tab"&&modal?.classList.contains("open")){
      const focusable=$$('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])',modal).filter(el=>el.offsetParent!==null);
      if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }
  });
})();