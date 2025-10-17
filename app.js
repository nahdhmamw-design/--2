
function escapeHtml(s){ return String(s||'').replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]); }
document.addEventListener('DOMContentLoaded', ()=>{
  const listEl = document.getElementById('list');
  const detailEl = document.getElementById('detail');
  const search = document.getElementById('search');
  const ageInput = document.getElementById('age');
  const formFilter = document.getElementById('formFilter');

  // populate formFilter options
  const forms = Array.from(new Set(MEDS.map(m=>m.form))).sort();
  forms.forEach(f=>{ const opt = document.createElement('option'); opt.value=f; opt.textContent = f; formFilter.appendChild(opt); });

  function renderList(filter='', form=''){
    listEl.innerHTML='';
    const q = filter.trim().toLowerCase();
    const items = MEDS.filter(m => (m.trade_ar + ' ' + m.trade_en + ' ' + m.ingredient).toLowerCase().includes(q))
                     .filter(m => form ? m.form===form : true);
    items.sort((a,b)=> a.trade_en.localeCompare(b.trade_en));
    items.forEach(m=>{
      const div = document.createElement('div');
      div.className='card-item';
      div.dataset.name = m.trade_en;
      div.innerHTML = `<h4>${escapeHtml(m.trade_ar)} / ${escapeHtml(m.trade_en)}</h4>
        <div><span class="badge">${escapeHtml(m.ingredient)}</span><span class="form-badge">${escapeHtml(m.form)}</span></div>
        <p style="margin-top:8px;color:#556b72">${escapeHtml(m.class)}</p>`;
      div.addEventListener('click', ()=> { document.querySelectorAll('.card-item').forEach(c=>c.classList.remove('selected')); div.classList.add('selected'); showDetail(m); });
      listEl.appendChild(div);
    });
  }

  function showDetail(m){
    detailEl.style.display='block';
    const age = parseInt(ageInput.value||'0',10);
    let doseNote = m.dose_adult || 'راجع النشرة الطبية أو الصيدلي';
    if(age>0 && age<12) doseNote = 'جرعات الأطفال تعتمد على الوزن؛ راجع صيدليًا أو طبيبًا.';
    detailEl.innerHTML = `
      <h3>${escapeHtml(m.trade_ar)} / ${escapeHtml(m.trade_en)}</h3>
      <p><strong>المادة الفعالة:</strong> ${escapeHtml(m.ingredient)} <span class="form-pill">${escapeHtml(m.form)}</span></p>
      <p><strong>الفئة:</strong> ${escapeHtml(m.class)}</p>
      <p><strong>جرعة عامة (بالبلوغ):</strong> ${escapeHtml(m.dose_adult)}</p>
      <p><strong>إرشاد آمن حسب العمر:</strong> ${escapeHtml(doseNote)}</p>
      <p><strong>المصدر:</strong> ${escapeHtml(m.source)}</p>
      <div style="margin-top:12px"><button class="btn" id="downloadPdf">تحميل كـ PDF</button></div>
    `;
    document.getElementById('downloadPdf').addEventListener('click', ()=> downloadPdf(m, age));
  }

  function downloadPdf(m, age){
    const html = `
      <html><head><meta charset="utf-8"><title>${m.trade_en}</title></head>
      <body style="font-family:Arial,Helvetica,sans-serif;padding:20px">
        <h2>${m.trade_ar} / ${m.trade_en}</h2>
        <p><strong>المادة الفعالة:</strong> ${m.ingredient}</p>
        <p><strong>الصيغة:</strong> ${m.form}</p>
        <p><strong>الفئة:</strong> ${m.class}</p>
        <p><strong>جرعة عامة (بالبالغين):</strong> ${m.dose_adult}</p>
        <p><strong>تعليمات آمنة حسب العمر:</strong> ${age>0 && age<12 ? 'جرعات الأطفال تعتمد على الوزن—استشر الصيدلي/الطبيب.' : 'توجيهات عامة—استشر المختص.'}</p>
        <p>المصدر: ${m.source}</p>
      </body></html>`;
    const w = window.open('','_blank','width=700,height=900');
    w.document.write(html); w.document.close(); w.focus(); w.print(); w.close();
  }

  search.addEventListener('input',(e)=> renderList(e.target.value, formFilter.value));
  formFilter.addEventListener('change', ()=> renderList(search.value, formFilter.value));
  ageInput.addEventListener('input', ()=> { const sel = document.querySelector('.card-item.selected'); if(sel){ const med = MEDS.find(m=>m.trade_en===sel.dataset.name); if(m) showDetail(m);} });
  renderList('');
});
