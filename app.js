(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const themeButton = $("#themeToggle");
  const mobileMenu = $("#mobileMenu");

  try {
    if (localStorage.getItem("openform-theme") === "dark") document.body.classList.add("dark");
  } catch (_) {}
  function syncTheme() {
    if (!themeButton) return;
    const dark = document.body.classList.contains("dark");
    $(".theme-icon", themeButton).textContent = dark ? "☼" : "◐";
    themeButton.setAttribute("aria-pressed", String(dark));
    themeButton.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }
  syncTheme();
  themeButton?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    try { localStorage.setItem("openform-theme", document.body.classList.contains("dark") ? "dark" : "light"); } catch (_) {}
    syncTheme();
  });
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

  function previewMarkup(kind) {
    switch(kind) {
      case "shape": return '<div class="art-sample sample-shape"><span class="sample-label">FORM STUDY / 001</span><div class="sample-circle"></div><div class="sample-pillar"></div><div class="sample-ring"></div><span class="sample-footer">GEOMETRY IS A LANGUAGE.</span></div>';
      case "soft": return '<div class="art-sample sample-soft"><div class="sample-blob blob-a"></div><div class="sample-blob blob-b"></div><div class="sample-blob blob-c"></div><span>SOFT<br>MATTER</span><small>COLOR FIELD STUDY / 04</small></div>';
      case "type": return '<div class="art-sample sample-type"><small>OPENFORM / TYPE STUDY</small><strong>Aa<span>!</span></strong><label>DISPLAY / VARIABLE / 2026</label></div>';
      case "orbit": return '<div class="art-sample sample-orbit"><svg viewBox="0 0 500 360" aria-label="Orbit illustration"><rect width="500" height="360" fill="#292927"/><g fill="none" stroke="#f2f2ef" stroke-width="2"><ellipse cx="250" cy="180" rx="160" ry="65" transform="rotate(-35 250 180)"/><ellipse cx="250" cy="180" rx="160" ry="65" transform="rotate(35 250 180)"/><ellipse cx="250" cy="180" rx="160" ry="65" transform="rotate(90 250 180)"/></g><circle cx="250" cy="180" r="47" fill="#777772"/><circle cx="105" cy="135" r="12" fill="#e4e4e0"/><circle cx="350" cy="88" r="9" fill="#b8b8b1"/><circle cx="250" cy="180" r="10" fill="#f2f2ef"/></svg></div>';
      case "ui": return '<div class="art-sample sample-ui"><div class="sample-ui-card"><div class="sample-ui-top"><i></i><i></i><i></i><span>DAILY / 07</span></div><small>YOUR SPACE, YOUR PACE</small><strong>Make room<br>for ideas.</strong><div class="sample-ui-rule"></div><b>Get started ↗</b></div></div>';
      case "fields": return '<div class="art-sample sample-fields"><div></div><div></div><div></div><span>FIELD<br>NOTES</span></div>';
      case "lines": return '<div class="art-sample sample-lines"><svg viewBox="0 0 500 360"><rect width="500" height="360" fill="#222220"/>' + Array.from({length:11},(_,i)=>'<path d="M -20 '+(40+i*27)+' C 120 '+(-30+i*30)+', 180 '+(120+i*12)+', 290 '+(40+i*26)+' S 420 '+(90+i*24)+', 530 '+(15+i*28)+'" fill="none" stroke="'+(i%2?'#888883':'#e4e4e0')+'" stroke-width="'+(i%3===0?3:1.4)+'" opacity="'+(.55+i*.035)+'"/>').join("") + '</svg></div>';
      case "icons": return '<div class="art-sample sample-icons"><div class="icon-grid">'+["＋","↗","○","✳","⌘","↘","□","×","⌕","↻","△","→"].map((x,i)=>'<span style="transform:rotate('+((i%3-1)*8)+'deg)">'+x+'</span>').join("")+'</div><small>12 MARKS / SVG</small></div>';
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
  const cardMarkup = (a, i) => '<article class="asset-card" tabindex="0" role="button" aria-label="View '+a.title+', '+a.category+', '+a.format+'" data-id="'+a.id+'" style="animation-delay:'+Math.min(i*30,240)+'ms"><div class="asset-preview">'+previewMarkup(a.kind)+'<span class="asset-open" aria-hidden="true">↗</span><span class="preview-label">'+String(i+1).padStart(2,"0")+' / '+a.category.toUpperCase()+'</span></div><div class="asset-meta"><div><h3>'+a.title+'</h3><p>'+a.format+' · Free sample</p></div><span class="asset-category">'+a.category+'</span></div></article>';

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
    $$(".filter-chip").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.filter===activeFilter)));
  }
  function openAsset(id) {
    const a = assets.find(x=>x.id===id);
    if (!a || !modal) return;
    previousFocus = document.activeElement;
    $("#modalPreview").innerHTML = previewMarkup(a.kind);
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
    $$(".filter-chip").forEach(btn=>btn.addEventListener("click",()=>{activeFilter=btn.dataset.filter;render()}));
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
    let shapes = "";
    if (a.kind==="shape") shapes='<circle cx="150" cy="120" r="68" fill="#888"/><rect x="270" y="55" width="110" height="240" rx="55" fill="#292927" transform="rotate(13 325 175)"/><circle cx="240" cy="175" r="100" fill="none" stroke="#eee" stroke-width="26"/>';
    else if (a.kind==="orbit") shapes='<g fill="none" stroke="#eee" stroke-width="2"><ellipse cx="250" cy="180" rx="160" ry="65" transform="rotate(-35 250 180)"/><ellipse cx="250" cy="180" rx="160" ry="65" transform="rotate(35 250 180)"/><ellipse cx="250" cy="180" rx="160" ry="65" transform="rotate(90 250 180)"/></g><circle cx="250" cy="180" r="47" fill="#777"/>';
    else if (a.kind==="type") shapes='<text x="250" y="220" font-family="Arial,sans-serif" font-size="170" text-anchor="middle" fill="#222">Aa</text><text x="365" y="145" font-family="Arial,sans-serif" font-size="90" font-weight="bold" fill="#777">!</text>';
    else if (a.kind==="ui") shapes='<rect x="55" y="40" width="390" height="280" rx="8" fill="#f7f7f5"/><text x="85" y="85" font-family="Arial,sans-serif" font-size="13" fill="#777">YOUR SPACE, YOUR PACE</text><text x="85" y="145" font-family="Arial,sans-serif" font-size="35" font-weight="bold" fill="#181818">Make room</text><text x="85" y="185" font-family="Arial,sans-serif" font-size="35" font-weight="bold" fill="#181818">for ideas.</text><rect x="85" y="225" width="120" height="35" rx="18" fill="#181818"/>';
    else if (a.kind==="grid") shapes='<path d="M75 30V330M175 30V330M275 30V330M375 30V330M25 90H475M25 170H475M25 250H475" stroke="#aaa" fill="none"/><circle cx="270" cy="170" r="75" fill="#333"/>';
    else if (a.kind==="soft"||a.kind==="fields") shapes='<circle cx="170" cy="170" r="120" fill="#aaa"/><circle cx="320" cy="210" r="92" fill="#666"/><circle cx="260" cy="115" r="62" fill="#eee"/>';
    else if (a.kind==="lines") shapes=Array.from({length:11},(_,i)=>'<path d="M 0 '+(35+i*27)+' Q 250 '+(i%2?20:340)+' 500 '+(35+i*27)+'" stroke="#aaa" stroke-width="2" fill="none"/>').join("");
    else if (a.kind==="icons") shapes=["＋","↗","○","✳","⌘","↘","□","×","⌕","↻","△","→"].map((t,i)=>'<text x="'+(80+(i%4)*115)+'" y="'+(105+Math.floor(i/4)*95)+'" text-anchor="middle" font-size="45" fill="#333">'+t+'</text>').join("");
    else if (a.kind==="paper") shapes='<circle cx="160" cy="160" r="112" fill="#eee"/><path d="M290 300V150a75 75 0 01150 0v150z" fill="#777"/><path d="M130 90L350 280" stroke="#252523" stroke-width="45"/>';
    else shapes='<text x="250" y="170" text-anchor="middle" font-family="Arial,sans-serif" font-size="44" font-weight="bold" fill="#222">'+a.title.replace(/&/g,"&amp;").replace(/</g,"&lt;")+'</text><text x="250" y="220" text-anchor="middle" font-family="monospace" font-size="14" fill="#555">OPENFORM / SAMPLE STUDY</text>';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360"><rect width="500" height="360" fill="#dcdcd6"/>'+shapes+'</svg>';
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