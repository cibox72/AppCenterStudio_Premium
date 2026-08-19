/* licenza.js — blocco licenza per le app collegate */
(function(){
  const codice=new URLSearchParams(location.search).get("studio")||sessionStorage.getItem("studio");
  function blocca(msg){
    const mostra=()=>{document.body.innerHTML=`<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f6f4f0;font-family:Georgia,serif;color:#2e2e38">
    <div style="background:#fff;border:1px solid #e6e2da;border-radius:14px;padding:36px;max-width:430px;text-align:center">
    <div style="font-size:34px">🔒</div><h2 style="margin:10px 0 6px">Licenza non attiva</h2>
    <p style="color:#8a8a96">${msg}</p></div></div>`;};
    if(document.body)mostra();else document.addEventListener("DOMContentLoaded",mostra);
  }
  if(!codice)return blocca("Accedi da AppCenterStudio‑Premium per aprire le applicazioni.");
  sessionStorage.setItem("studio",codice);
  fetch("../licenses.json?t="+Date.now(),{cache:"no-store"}).then(r=>r.json()).then(l=>{
    const s=(l.studi||[]).find(x=>x.codice===codice);
    const oggi=new Date().toISOString().slice(0,10);
    if(!s)return blocca("Codice studio non riconosciuto.");
    if(!s.attivo)return blocca("Accesso sospeso. Contatta il fornitore.");
    if(s.scadenza<oggi)return blocca("La prova è scaduta. Contatta il fornitore per il rinnovo.");
  }).catch(()=>blocca("Verifica licenza non riuscita. Controlla la connessione."));
})();
