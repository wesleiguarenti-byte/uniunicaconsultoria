from pathlib import Path
import re

path = Path('index.html')
html = path.read_text(encoding='utf-8')

css = r'''
/* CATALOGO-GRADUACAO-2026 */
.catalog-section{background:#fff}
.catalog-wrap{background:#fff;border:1px solid var(--border);border-radius:24px;padding:34px;box-shadow:0 16px 45px rgba(38,16,46,.08)}
.catalog-tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:22px}
.catalog-tab{border:1px solid var(--border);background:#fff;color:var(--purple-dark);border-radius:13px;padding:15px 12px;font-weight:900;cursor:pointer;transition:.2s}
.catalog-tab:hover{transform:translateY(-2px);border-color:#cdb3e4}
.catalog-tab.active{background:linear-gradient(135deg,#391466,#8733ff);color:#fff;border-color:transparent;box-shadow:0 10px 25px rgba(101,38,184,.2)}
.catalog-toolbar{display:grid;grid-template-columns:1.5fr .8fr;gap:12px;margin-bottom:20px}
.catalog-search,.catalog-area{width:100%;padding:14px 16px;border:1px solid #ddd;border-radius:11px;background:#fff;outline:none;font-size:14px}
.catalog-search:focus,.catalog-area:focus{border-color:var(--purple);box-shadow:0 0 0 3px rgba(101,38,184,.1)}
.catalog-count{font-size:12px;color:var(--muted);font-weight:700;margin:0 0 15px}
.catalog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}
.catalog-card{background:var(--light);border:1px solid var(--border);border-radius:16px;padding:20px;display:flex;flex-direction:column;min-height:210px;transition:.2s}
.catalog-card:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(38,16,46,.08);border-color:#d4bde7}
.catalog-type{display:inline-flex;width:max-content;padding:5px 9px;border-radius:999px;background:#efe6f8;color:var(--purple);font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.4px}
.catalog-card h3{font-size:16px;color:var(--dark);line-height:1.35;margin:12px 0 7px}
.catalog-card p{font-size:12px;color:var(--muted);margin-bottom:15px}
.catalog-card .btn{margin-top:auto;width:100%;padding:11px 14px;font-size:12px}
.catalog-more{text-align:center;margin-top:22px}
.catalog-empty{text-align:center;padding:35px 15px;color:var(--muted);background:var(--light);border-radius:15px;border:1px dashed var(--border);grid-column:1/-1}
.catalog-help{margin-top:22px;background:var(--purple-soft);border-radius:17px;padding:22px;text-align:center}
.catalog-help h3{color:var(--dark);margin-bottom:5px;font-size:18px}
.catalog-help p{font-size:13px;color:var(--muted);margin-bottom:15px}
@media(max-width:900px){.catalog-grid{grid-template-columns:repeat(2,1fr)}.catalog-toolbar{grid-template-columns:1fr}.catalog-wrap{padding:24px}}
@media(max-width:600px){.catalog-tabs{grid-template-columns:1fr}.catalog-grid{grid-template-columns:1fr}.catalog-wrap{padding:18px}.catalog-card{min-height:190px}}
'''

new_section = r'''<section id="cursos" class="catalog-section">
  <div class="container">
    <div class="section-title">
      <h2>Encontre sua graduação</h2>
      <p>Escolha o tipo de formação, filtre por área e encontre cursos que combinam com seus objetivos profissionais.</p>
    </div>
    <div class="catalog-wrap">
      <div class="catalog-tabs" role="tablist" aria-label="Tipo de graduação">
        <button class="catalog-tab active" type="button" data-type="Tecnólogo">Tecnólogos</button>
        <button class="catalog-tab" type="button" data-type="Bacharelado">Bacharelados</button>
        <button class="catalog-tab" type="button" data-type="Licenciatura">Licenciaturas</button>
      </div>
      <div class="catalog-toolbar">
        <input id="catalogSearch" class="catalog-search" type="search" placeholder="Buscar pelo nome do curso..." aria-label="Buscar curso">
        <select id="catalogArea" class="catalog-area" aria-label="Filtrar por área">
          <option value="">Todas as áreas</option>
        </select>
      </div>
      <div id="catalogCount" class="catalog-count"></div>
      <div id="catalogGrid" class="catalog-grid"></div>
      <div class="catalog-more">
        <button id="catalogMore" class="btn btn-outline" type="button">Ver todos os cursos</button>
      </div>
      <div class="catalog-help">
        <h3>Não encontrou o curso que procura?</h3>
        <p>Fale com um consultor e informe sua área de interesse. Podemos orientar você sobre as opções disponíveis.</p>
        <a class="btn btn-accent" href="#" onclick="openWhatsApp('Olá! Acessei o catálogo de graduações da UniÚnica e preciso de ajuda para encontrar um curso.');return false;">Quero falar com um consultor</a>
      </div>
    </div>
  </div>
</section>'''

pattern = re.compile(r'<section id="cursos">.*?</section>', re.S)
if not pattern.search(html):
    raise SystemExit('section #cursos not found')
html = pattern.sub(new_section, html, count=1)

if 'CATALOGO-GRADUACAO-2026' not in html:
    html = html.replace('</style>', css + '</style>', 1)

script = r'''
<script id="catalogo-graduacao-script">
const catalogCourses = [
  {name:'Análise e Desenvolvimento de Sistemas',type:'Tecnólogo',area:'Tecnologia',duration:'2,5 anos'},
  {name:'Ciência de Dados e Inteligência Artificial',type:'Tecnólogo',area:'Tecnologia',duration:'2,5 anos'},
  {name:'Defesa Cibernética',type:'Tecnólogo',area:'Tecnologia'},
  {name:'Internet das Coisas',type:'Tecnólogo',area:'Tecnologia'},
  {name:'Geoprocessamento',type:'Tecnólogo',area:'Tecnologia',duration:'3 anos'},
  {name:'Sistemas para Internet',type:'Tecnólogo',area:'Tecnologia',duration:'2,5 anos'},
  {name:'Gestão de Segurança Pública e Patrimonial',type:'Tecnólogo',area:'Gestão e Segurança',duration:'2,5 anos'},
  {name:'Design Gráfico',type:'Tecnólogo',area:'Comunicação e Design',duration:'2 anos'},
  {name:'Gestão Financeira',type:'Tecnólogo',area:'Gestão e Negócios',duration:'2 anos'},
  {name:'Empreendedorismo',type:'Tecnólogo',area:'Gestão e Negócios',duration:'2 anos'},
  {name:'Gestão Pública',type:'Tecnólogo',area:'Gestão e Negócios',duration:'2 anos'},
  {name:'Logística',type:'Tecnólogo',area:'Gestão e Negócios',duration:'2 anos'},
  {name:'Serviços Jurídicos e Notariais',type:'Tecnólogo',area:'Jurídica',duration:'2 anos'},
  {name:'Gestão de Cidades Inteligentes',type:'Tecnólogo',area:'Gestão e Tecnologia',duration:'2,5 anos'},
  {name:'Processos Gerenciais',type:'Tecnólogo',area:'Gestão e Negócios'},
  {name:'Administração',type:'Bacharelado',area:'Gestão e Negócios',duration:'4 anos'},
  {name:'Agronomia',type:'Bacharelado',area:'Agrárias'},
  {name:'Ciência da Computação',type:'Bacharelado',area:'Tecnologia',duration:'4 anos'},
  {name:'Ciências Contábeis',type:'Bacharelado',area:'Gestão e Negócios',duration:'4 anos'},
  {name:'Ciências Econômicas',type:'Bacharelado',area:'Gestão e Negócios',duration:'4 anos'},
  {name:'Serviço Social',type:'Bacharelado',area:'Humanas e Sociais'},
  {name:'Teologia',type:'Bacharelado',area:'Humanas e Sociais'},
  {name:'Biblioteconomia',type:'Bacharelado',area:'Humanas e Sociais'},
  {name:'Psicopedagogia',type:'Bacharelado',area:'Humanas e Sociais'},
  {name:'Pedagogia',type:'Licenciatura',area:'Educação'},
  {name:'Educação Física',type:'Licenciatura',area:'Educação'},
  {name:'Ciências Biológicas',type:'Licenciatura',area:'Educação'},
  {name:'Filosofia',type:'Licenciatura',area:'Educação'},
  {name:'Física',type:'Licenciatura',area:'Educação'},
  {name:'Matemática',type:'Licenciatura',area:'Educação'},
  {name:'Geografia',type:'Licenciatura',area:'Educação'},
  {name:'História',type:'Licenciatura',area:'Educação'},
  {name:'Química',type:'Licenciatura',area:'Educação'},
  {name:'Letras',type:'Licenciatura',area:'Educação'}
];

(function initCatalog(){
  const grid=document.getElementById('catalogGrid');
  const search=document.getElementById('catalogSearch');
  const area=document.getElementById('catalogArea');
  const count=document.getElementById('catalogCount');
  const more=document.getElementById('catalogMore');
  const tabs=[...document.querySelectorAll('.catalog-tab')];
  if(!grid||!search||!area||!count||!more)return;
  let activeType='Tecnólogo';
  let showAll=false;
  function fillAreas(){
    const areas=[...new Set(catalogCourses.filter(c=>c.type===activeType).map(c=>c.area))].sort();
    area.innerHTML='<option value="">Todas as áreas</option>'+areas.map(a=>`<option value="${a}">${a}</option>`).join('');
  }
  function render(){
    const q=search.value.trim().toLowerCase();
    const a=area.value;
    const list=catalogCourses.filter(c=>c.type===activeType && (!a||c.area===a) && (!q||c.name.toLowerCase().includes(q)||c.area.toLowerCase().includes(q)));
    count.textContent=`${list.length} curso${list.length===1?'':'s'} encontrado${list.length===1?'':'s'}`;
    const visible=showAll?list:list.slice(0,6);
    grid.innerHTML=visible.length?visible.map(c=>`<article class="catalog-card"><span class="catalog-type">${c.type}</span><h3>${c.name}</h3><p>${c.area}${c.duration?' • '+c.duration:''}</p><button class="btn btn-primary" type="button" onclick="catalogInterest('${c.name.replace(/'/g,"\\'")}')">Quero saber mais</button></article>`).join(''):'<div class="catalog-empty">Nenhum curso encontrado com esses filtros.<br><br><button class="btn btn-accent" type="button" onclick="openWhatsApp(\'Olá! Não encontrei o curso que procuro no catálogo e gostaria de ajuda.\');return false;">Falar com consultor</button></div>';
    more.style.display=list.length>6?'inline-flex':'none';
    more.textContent=showAll?'Mostrar menos':'Ver todos os cursos';
  }
  tabs.forEach(tab=>tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active')); tab.classList.add('active'); activeType=tab.dataset.type; showAll=false; search.value=''; fillAreas(); render();
  }));
  search.addEventListener('input',()=>{showAll=false;render();});
  area.addEventListener('change',()=>{showAll=false;render();});
  more.addEventListener('click',()=>{showAll=!showAll;render();});
  fillAreas(); render();
})();
function catalogInterest(course){openWhatsApp('Olá! Acessei o catálogo da UniÚnica e tenho interesse no curso de '+course+'. Gostaria de receber mais informações sobre a oferta disponível.');}
</script>
'''
if 'catalogo-graduacao-script' not in html:
    html = html.replace('</body>', script + '</body>', 1)
path.write_text(html, encoding='utf-8')
print('catalog updated')
