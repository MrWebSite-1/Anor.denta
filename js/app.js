/* ===== RENDER ===== */
const $=id=>document.getElementById(id),C=CONFIG;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
document.title=C.brand;
$("brand").innerHTML=C.logo?`<img src="${C.logo}" alt="${esc(C.brand)}">`:esc(C.brand);
$("heroTitle").textContent=C.heroTitle;$("heroText").textContent=C.heroText;
$("menu").innerHTML=C.menu.filter(m=>m[1]!=="#price").map(m=>`<a href="${m[1]}">${esc(m[0])}</a>`).join("");
(function(){const E=C.expert;if(!E){$("expert").remove();return}
 const ph=$("expPhoto");ph.innerHTML=`<img src="${esc(E.img)}" alt="${esc(E.name)}" width="520" height="650">`;
 ph.firstChild.addEventListener("error",()=>{ph.classList.add("empty");ph.innerHTML="<span>Shifokor rasmi</span>"});
 $("expTag").textContent=E.tag;$("expName").textContent=E.name;$("expText").textContent=E.text;
 $("expStats").innerHTML=E.stats.map(x=>`<div><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`).join("");})();
const IC={search:'<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',tooth:'<path d="M7 3.5c-2.2 0-3.5 1.7-3.5 4 0 2.2.9 3.4 1.6 5.2.8 2 .9 3.700 1.400 6 .3 1.400 1.100 2.300 2 2.300 1.100 0 1.400-1.500 1.700-3 .2-1 .6-1.700 1.300-1.700s1.100.7 1.300 1.700c.3 1.500.6 3 1.700 3 .9 0 1.700-.9 2-2.300.5-2.300.6-4 1.400-6 .7-1.800 1.600-3 1.600-5.200 0-2.300-1.300-4-3.500-4-1.600 0-2.500.9-4 .9S8.600 3.500 7 3.500z"/>',implant:'<path d="M5 4h14c0 3-2.200 5-4.500 5h-5C7.200 9 5 7 5 4z"/><path d="M9 12h6M9.500 15h5M10 18h4M12 9v12"/>',crown:'<path d="M4 18h16M5 18l-1-10 5 4 3-6 3 6 5-4-1 10"/>',drop:'<path d="M12 3c3.500 4.500 6 7.500 6 11a6 6 0 0 1-12 0c0-3.500 2.500-6.500 6-11z"/><path d="M9.500 14.500a2.500 2.500 0 0 0 2.500 2.500"/>',syringe:'<path d="M18 3l3 3M16 5l3 3M14 7l3 3-7.500 7.500-4-1-1-4zM5.500 18.500L3 21M10 13l2 2"/>',spark:'<path d="M12 3l1.800 5.200L19 10l-5.200 1.800L12 17l-1.800-5.200L5 10l5.200-1.800z"/><path d="M19 16l.7 2 2 .7-2 .7L19 21.400l-.7-2-2-.7 2-.7z"/>',plus:'<circle cx="12" cy="12" r="8.500"/><path d="M12 8v8M8 12h8"/>'};
const svcIco=k=>`<span class="svc-ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]||IC.plus}</svg></span>`;
$("serviceGrid").innerHTML=C.services.map((s,i)=>`<article class="card svc" data-service="${i}" tabindex="0" role="button" aria-label="${esc(s.t)}: batafsil">${svcIco(s.ic)}<h3>${esc(s.t)}</h3><p class="muted">${esc(s.d)}</p><ul>${s.items.slice(0,3).map(x=>`<li>${esc(x)}</li>`).join("")}</ul><span class="svc-more">Batafsil <i aria-hidden="true">→</i></span></article>`).join("");
$("cases").innerHTML=C.cases.map(c=>{const ph=(src,lab)=>`<figure>${src?`<img src="${esc(src)}" alt="${esc(c.t)} — ${lab}" loading="lazy">`:"Rasm joyi"}<figcaption>${lab}</figcaption></figure>`;
 return `<div class="card"><div class="ba">${ph(c.before,"Oldin")}${ph(c.after,"Keyin")}</div><div class="tag">${esc(c.tag)}</div><h3>${esc(c.t)}</h3><p class="muted" style="margin:0;font-size:14px">${esc(c.d)}</p><div class="case-meta">${c.meta.map(m=>`<span>${esc(m)}</span>`).join("")}</div></div>`}).join("");
(function(){const rd=$("reader"),sc=()=>{rd.scrollTop=0};
 const close=()=>{rd.hidden=true;document.body.style.overflow=""};
 document.addEventListener("click",e=>{const b=e.target.closest("[data-article]");if(b){const a=C.articles[+b.dataset.article];$("rt").textContent=a[0];{const im=$("rimg"),src=C.artImgs&&C.artImgs[+b.dataset.article];if(src){im.src=src;im.alt=(C.artAlts||[])[+b.dataset.article]||a[0];im.hidden=false}else{im.hidden=true}}$("rbody").innerHTML=a[2].replace(/__BRAND__/g,esc(C.brand));rd.hidden=false;document.body.style.overflow="hidden";sc()}
  if(e.target.closest("#readerClose"))close()});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!rd.hidden&&!$("modal").classList.contains("open"))close()});
})();
/* ===== XIZMAT PANELI ===== */
(function(){const rd=$("reader"),back=$("readerClose"),cta=rd.querySelector(".reader-cta");let open=false,cur=0;
 const hash=i=>"#xizmat-"+C.services[i].k;
 function show(i,push){const v=C.services[i];open=true;back.textContent="← Xizmatlar";
  $("rt").textContent=v.t;{const im=$("rimg");im.src="images/"+(i+1)+".png";im.alt=v.t;im.classList.add("sq");im.hidden=false}
  $("rbody").innerHTML=`<p class="lead">${esc(v.intro)}</p><div class="note"><b>Kimga kerak:</b> ${esc(v.who)}</div><h3>Xizmat turlari va narxlari</h3><p class="muted pick-hint">Narx ustiga bosing: xizmat avtomatik tanlanadi.</p><ul class="plist">${v.prices.map((r,j)=>`<li role="button" tabindex="0" data-price="${j}"><span class="pn">${esc(r[0])}</span><span class="pp">${esc(r[1])}</span></li>`).join("")}</ul><h3>Yozilish</h3><form id="svcForm" class="svc-form"><label for="svcN">Ismingiz</label><input id="svcN" required><label for="svcP">Telefon</label><input id="svcP" type="tel" required placeholder="+998"><label for="svcBtn">Xizmat</label><input type="hidden" id="svcS"><div class="dd" id="svcDd"><button type="button" class="dd-btn" id="svcBtn" aria-haspopup="listbox" aria-expanded="false"><span id="svcBtnT">Xizmatni tanlang</span></button><ul class="dd-list" id="svcList" role="listbox" hidden>${v.prices.map((r,j)=>`<li role="option" tabindex="-1" data-opt="${j}"><span>${esc(r[0])}</span><b>${esc(r[1])}</b></li>`).join("")}</ul></div><div class="svc-submit"><button class="btn" type="submit">Yozilish</button></div><div class="ok" id="svcOk">So‘rov yuborildi. Tez orada qo‘ng‘iroq qilamiz.</div></form><div class="svc-addr"><div class="svc-addr-in svc-addr-top"><h3>Manzil</h3></div><iframe class="svc-map" title="Klinika manzili xaritada" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent(C.mapq)}&output=embed"></iframe><div class="svc-addr-in"><p class="svc-a">${esc(C.address)}</p><p class="svc-ph"><a href="tel:${C.phone.replace(/\s/g,"")}">${esc(C.phone)}</a></p><div class="svc-links"><a class="btn" href="tel:${C.phone.replace(/\s/g,"")}">Qo‘ng‘iroq qilish</a><a class="btn ghost" href="https://instagram.com/${esc(C.instagram)}" target="_blank" rel="noopener">Instagram</a></div></div></div>`;
  cta.hidden=true;cur=i;
  rd.hidden=false;document.body.style.overflow="hidden";rd.scrollTop=0;
  if(push&&location.hash!==hash(i))history.pushState(null,"",hash(i))}
 function hide(fromHash){if(!open)return;open=false;rd.hidden=true;document.body.style.overflow="";
  if(!fromHash&&location.hash.indexOf("#xizmat-")==0)history.back()}
 function fromHash(){const m=location.hash.match(/^#xizmat-(.+)$/);
  if(m){const i=C.services.findIndex(x=>x.k===m[1]);if(i>-1){show(i,false);return}}
  hide(true)}
 document.addEventListener("click",e=>{
  const c=e.target.closest("[data-service]");if(c){show(+c.dataset.service,true);return}
  const ob=e.target.closest("#svcBtn");if(ob){const l=$("svcList");l.hidden=!l.hidden;ob.setAttribute("aria-expanded",String(!l.hidden));if(!l.hidden){const sel=l.querySelector(".on");(sel||l).scrollIntoView&&0}return}
  const op=e.target.closest("[data-opt]");if(op){setSvc(+op.dataset.opt);return}
  if(!e.target.closest("#svcDd"))closeDd();
  const pr=e.target.closest("[data-price]");if(pr){pick(+pr.dataset.price);return}
  if(e.target.closest("[data-article]")){$("rimg").classList.remove("sq");open=false;back.textContent="← Maqolalar";cta.hidden=false}
  if(e.target.closest("#readerClose"))hide(false)});
 document.addEventListener("keydown",e=>{
  if(e.key==="Enter"||e.key===" "){const c=e.target.closest&&e.target.closest("[data-service]");if(c&&c.tagName==="ARTICLE"){e.preventDefault();show(+c.dataset.service,true)}}
  if(e.key==="Escape"&&open&&!$("modal").classList.contains("open")){const l=$("svcList");if(l&&!l.hidden){closeDd();return}hide(false)}});
 function mark(j){document.querySelectorAll("#rbody [data-price]").forEach(x=>x.classList.toggle("sel",+x.dataset.price===j))}
 function setSvc(j){const v=C.services[cur],r=v.prices[j];$("svcS").value=j;$("svcBtnT").textContent=r[0]+" — "+r[1];$("svcBtn").classList.add("has");mark(j);closeDd()}
 function closeDd(){const l=$("svcList");if(l&&!l.hidden){l.hidden=true;$("svcBtn").setAttribute("aria-expanded","false")}}
 function pick(j){setSvc(j);$("svcOk").style.display="none";$("svcForm").scrollIntoView({behavior:"smooth",block:"center"});setTimeout(()=>$("svcN").focus({preventScroll:true}),450)}
 document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches&&e.target.matches("[data-price]")){e.preventDefault();pick(+e.target.dataset.price)}});
 document.addEventListener("submit",e=>{if(e.target.id!=="svcForm")return;e.preventDefault();if($("svcS").value===""){$("svcList").hidden=false;$("svcBtn").setAttribute("aria-expanded","true");$("svcBtn").focus();return}const sv=C.services[cur],r=sv.prices[+$("svcS").value];$("svcOk").style.display="block";send($("svcN").value,$("svcP").value,"",sv.t+": "+r[0]+" — "+r[1])});
 addEventListener("hashchange",fromHash);fromHash();
})();

/* ===== ALOQA, XARITA, FOOTER ===== */
(function(){const tel="tel:"+C.phone.replace(/\s/g,""),ig="https://instagram.com/"+C.instagram;
 const I={ph:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',ig:'<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17" cy="7" r=".6"/>',pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/>',clk:'<circle cx="12" cy="12" r="8.500"/><path d="M12 7.500V12l3 2"/>'};
 const ic=k=>`<span class="c-ico"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[k]}</svg></span>`;
 const row=(k,l,v,h)=>`<li>${ic(k)}<div><small>${l}</small>${h?`<a href="${h}" target="_blank" rel="noopener">${v}</a>`:`<b>${v}</b>`}</div></li>`;
 $("cList").innerHTML=row("ph","Telefon",esc(C.phone),tel)+row("ig","Instagram","@"+esc(C.instagram),ig)+row("pin","Manzil",esc(C.address),C.maps)+row("clk","Ish vaqti",esc(C.hours));
 $("cIg").href=ig;$("cTel").href=tel;
 $("s2").innerHTML='<option value="">Tanlang</option>'+C.services.map(v=>`<option>${esc(v.t)}</option>`).join("");
 const dt=$("dt2");dt.min=new Date().toISOString().slice(0,10);
 $("mapFrame").src=C.mapEmbed||`https://www.google.com/maps?q=${encodeURIComponent(C.mapq)}&output=embed`;
 $("brand2").textContent=C.brand;$("ftag").textContent=C.tagline||"";
 $("fnav").innerHTML=[["Xizmatlar","#services"],["Mutaxassis","#expert"],["Natijalar","#clients"],["Aloqa","#contact"]].map(m=>`<a href="${m[1]}">${m[0]}</a>`).join("");
 $("fcontact").innerHTML=`<a href="${tel}">${esc(C.phone)}</a><a href="${C.maps}" target="_blank" rel="noopener">${esc(C.address)}</a>`;
 $("fig").href=ig;
 $("fcopy").textContent="© "+new Date().getFullYear()+" "+C.brand+". Barcha huquqlar himoyalangan.";
})();
/* ===== MODAL ===== */
const modal=$("modal");
document.addEventListener("click",e=>{
 const b=e.target.closest("[data-book]");
 if(b){$("ok").style.display="none";modal.classList.add("open");$("n").focus()}
 if(e.target===modal||e.target.id==="close")modal.classList.remove("open");
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")modal.classList.remove("open")});
function send(name,phone,doc,svc){
 const text=`Yangi so‘rov\nIsm: ${name}\nTelefon: ${phone}${doc?"\nShifokor: "+doc:""}${svc?"\nXizmat: "+svc:""}`;
 try{navigator.clipboard&&navigator.clipboard.writeText(text)}catch(_){}
 window.open(`https://ig.me/m/${C.instagram}`,"_blank");
}
$("bookForm").addEventListener("submit",e=>{e.preventDefault();$("ok").style.display="block";send($("n").value,$("p").value,"")});
$("contactForm").addEventListener("submit",e=>{e.preventDefault();$("ok2").style.display="block";const x=[$("s2").value&&"Xizmat: "+$("s2").value,$("dt2").value&&"Sana: "+$("dt2").value,$("m2").value&&"Xabar: "+$("m2").value].filter(Boolean).join("\n");send($("n2").value,$("p2").value,"",x)});

/* ===== SCROLL ANIMATSIYA ===== */
(function(){
 const io="IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -6% 0px"}):null;
 function watch(el,delay){el.classList.add("reveal");el.style.setProperty("--d",(delay||0)+"ms");io?io.observe(el):el.classList.add("in")}
 function init(root){
  root.querySelectorAll(".hero .wrap > *, section h2, section .muted:not(.card .muted), .banner, .logos, form, .tabs").forEach((el,i)=>{if(!el.classList.contains("reveal"))watch(el,0)});
  root.querySelectorAll(".grid, .slider").forEach(g=>{[...g.children].forEach((c,i)=>{if(!c.classList.contains("reveal"))watch(c,Math.min(i,5)*110)})});
 }
 init(document);
 const nav=document.querySelector("header.nav");
 const onScroll=()=>nav.classList.toggle("scrolled",scrollY>10);
 addEventListener("scroll",onScroll,{passive:true});onScroll();
})();
