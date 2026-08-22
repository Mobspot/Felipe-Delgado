(function(){
  var open=document.getElementById('open'), close=document.getElementById('close'),
      panel=document.getElementById('panel'), fab=document.getElementById('fab');

  function setPanel(on){
    if(on){ panel.setAttribute('data-open',''); document.body.style.overflow='hidden'; close.focus(); }
    else{ panel.removeAttribute('data-open'); document.body.style.overflow=''; open.focus(); }
    open.setAttribute('aria-expanded', on ? 'true':'false');
  }
  open.addEventListener('click',function(){ setPanel(true); });
  close.addEventListener('click',function(){ setPanel(false); });
  panel.addEventListener('click',function(e){ if(e.target.tagName==='A') setPanel(false); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape' && panel.hasAttribute('data-open')) setPanel(false); });

  function onScroll(){
    if(window.scrollY > window.innerHeight*0.25) fab.setAttribute('data-show','');
    else fab.removeAttribute('data-show');
  }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
})();
