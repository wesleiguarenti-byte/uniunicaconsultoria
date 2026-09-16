/* CATALOGO OFICIAL UNIÚNICA - 2026 */
(function(){
  const cursos = [
    {tipo:'Licenciatura',area:'Educação',nome:'Pedagogia',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Exatas',nome:'Matemática',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Humanas',nome:'Geografia',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Linguagens',nome:'Letras – Português',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Linguagens',nome:'Letras – Português e Inglês',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Linguagens',nome:'Letras – Português e Espanhol',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Linguagens',nome:'Letras – Libras',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Biológicas',nome:'Ciências Biológicas',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Exatas',nome:'Física',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Exatas',nome:'Química',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Saúde',nome:'Educação Física',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Humanas',nome:'Ensino Religioso',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Humanas',nome:'Filosofia',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Humanas',nome:'História',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Humanas',nome:'Ciências Sociais',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Tecnologia',nome:'Computação',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Artes',nome:'Artes Visuais',duracao:'4 anos'},
    {tipo:'Licenciatura',area:'Educação',nome:'Educação Especial',duracao:'4 anos'},

    {tipo:'Bacharelado',area:'Tecnologia e Comunicação',nome:'Ciência da Computação',duracao:'4 anos'},
    {tipo:'Bacharelado',area:'Tecnologia e Comunicação',nome:'Sistemas de Informação',duracao:'4 anos'},
    {tipo:'Bacharelado',area:'Tecnologia e Comunicação',nome:'Jornalismo',duracao:'4 anos'},
    {tipo:'Bacharelado',area:'Tecnologia e Comunicação',nome:'Publicidade e Propaganda',duracao:'3,5 anos'},
    {tipo:'Bacharelado',area:'Gestão e Negócios',nome:'Administração',duracao:'4 anos'},
    {tipo:'Bacharelado',area:'Gestão e Negócios',nome:'Ciências Econômicas',duracao:'4 anos'},
    {tipo:'Bacharelado',area:'Gestão e Negócios',nome:'Ciências Contábeis',duracao:'4 anos'},
    {tipo:'Bacharelado',area:'Gestão e Negócios',nome:'Serviços Jurídicos e Notariais',duracao:'2 anos'},
    {tipo:'Bacharelado',area:'Engenharias e Agrárias',nome:'Engenharia de Bioprocessos e Biotecnologia',duracao:'5 anos'},
    {tipo:'Bacharelado',area:'Engenharias e Agrárias',nome:'Engenharia Civil',duracao:'5 anos'},
    {tipo:'Bacharelado',area:'Engenharias e Agrárias',nome:'Engenharia Mecânica',duracao:'5 anos'},
    {tipo:'Bacharelado',area:'Engenharias e Agrárias',nome:'Engenharia Elétrica',duracao:'5 anos'},
    {tipo:'Bacharelado',area:'Engenharias e Agrárias',nome:'Engenharia de Produção',duracao:'5 anos'},
    {tipo:'Bacharelado',area:'Engenharias e Agrárias',nome:'Engenharia de Controle e Automação',duracao:'5 anos'},
    {tipo:'Bacharelado',area:'Engenharias e Agrárias',nome:'Engenharia Química',duracao:'5 anos'},
    {tipo:'Bacharelado',area:'Engenharias e Agrárias',nome:'Engenharia Ambiental e Sanitária',duracao:'5 anos'},
    {tipo:'Bacharelado',area:'Engenharias e Agrárias',nome:'Engenharia de Software',duracao:'5 anos'},
    {tipo:'Bacharelado',area:'Engenharias e Agrárias',nome:'Engenharia de Materiais',duracao:'5 anos'},
    {tipo:'Bacharelado',area:'Engenharias e Agrárias',nome:'Agronomia',duracao:'5 anos'},
    {tipo:'Bacharelado',area:'Engenharias e Agrárias',nome:'Arquitetura e Urbanismo',duracao:'5 anos'},
    {tipo:'Bacharelado',area:'Humanas e Saúde',nome:'Psicopedagogia',duracao:'4 anos'},
    {tipo:'Bacharelado',area:'Humanas e Saúde',nome:'Serviço Social',duracao:'4 anos'},
    {tipo:'Bacharelado',area:'Humanas e Saúde',nome:'Teologia',duracao:'3,5 anos'},
    {tipo:'Bacharelado',area:'Humanas e Saúde',nome:'Letras – Libras Bacharelado',duracao:'4 anos'},
    {tipo:'Bacharelado',area:'Humanas e Saúde',nome:'Biblioteconomia',duracao:'3 anos'},
    {tipo:'Bacharelado',area:'Humanas e Saúde',nome:'Educação Física Bacharelado',duracao:'4 anos'},

    {tipo:'Tecnólogo',area:'Tecnologia e Inovação',nome:'Análise e Desenvolvimento de Sistemas',duracao:'2,5 anos'},
    {tipo:'Tecnólogo',area:'Tecnologia e Inovação',nome:'Ciência de Dados e Inteligência Artificial',duracao:'2,5 anos'},
    {tipo:'Tecnólogo',area:'Tecnologia e Inovação',nome:'Defesa Cibernética',duracao:'2,5 anos'},
    {tipo:'Tecnólogo',area:'Tecnologia e Inovação',nome:'Internet das Coisas',duracao:'2,5 anos'},
    {tipo:'Tecnólogo',area:'Tecnologia e Inovação',nome:'Redes de Computadores',duracao:'2,5 anos'},
    {tipo:'Tecnólogo',area:'Tecnologia e Inovação',nome:'Sistemas de Telecomunicações',duracao:'3 anos'},
    {tipo:'Tecnólogo',area:'Tecnologia e Inovação',nome:'Sistemas para Internet',duracao:'2,5 anos'},
    {tipo:'Tecnólogo',area:'Segurança',nome:'Gestão da Segurança Pública e Patrimonial',duracao:'2,5 anos'},
    {tipo:'Tecnólogo',area:'Segurança',nome:'Segurança no Trabalho',duracao:'3 anos'},
    {tipo:'Tecnólogo',area:'Criatividade e Design',nome:'Design de Interiores',duracao:'2 anos'},
    {tipo:'Tecnólogo',area:'Criatividade e Design',nome:'Design Gráfico',duracao:'2 anos'},
    {tipo:'Tecnólogo',area:'Gestão e Negócios',nome:'Comércio Exterior',duracao:'2 anos'},
    {tipo:'Tecnólogo',area:'Gestão e Negócios',nome:'Gestão Financeira',duracao:'2 anos'},
    {tipo:'Tecnólogo',area:'Gestão e Negócios',nome:'Empreendedorismo',duracao:'2 anos'},
    {tipo:'Tecnólogo',area:'Gestão e Negócios',nome:'Gestão Pública',duracao:'2 anos'},
    {tipo:'Tecnólogo',area:'Gestão e Negócios',nome:'Logística',duracao:'2 anos'},
    {tipo:'Tecnólogo',area:'Gestão e Negócios',nome:'Gestão de Cidades Inteligentes',duracao:'2,5 anos'},
    {tipo:'Tecnólogo',area:'Gestão e Negócios',nome:'Gestão de Recursos Humanos',duracao:'2 anos'},
    {tipo:'Tecnólogo',area:'Gestão e Negócios',nome:'Marketing',duracao:'2 anos'},
    {tipo:'Tecnólogo',area:'Gestão e Negócios',nome:'Marketing Digital',duracao:'2 anos'},
    {tipo:'Tecnólogo',area:'Gestão e Negócios',nome:'Processos Gerenciais',duracao:'2 anos'},
    {tipo:'Tecnólogo',area:'Meio Ambiente',nome:'Gestão Ambiental',duracao:'2 anos'},
    {tipo:'Tecnólogo',area:'Desenvolvimento Humano',nome:'Coaching e Desenvolvimento Humano',duracao:'2,5 anos'}
  ];

  const tipoSlug = {Tecnólogo:'tecnologo',Bacharelado:'bacharelado',Licenciatura:'licenciatura'};
  let tipoAtual = 'Tecnólogo';
  let mostrarTodos = false;

  function iniciar(){
    const grid=document.getElementById('catalogGrid');
    const count=document.getElementById('catalogCount');
    const search=document.getElementById('catalogSearch');
    const area=document.getElementById('catalogArea');
    const more=document.getElementById('catalogMore');
    const tabs=[...document.querySelectorAll('.catalog-tab')];
    if(!grid || !count) return;

    function atualizarAreas(){
      if(!area) return;
      const atual=area.value;
      const areas=[...new Set(cursos.filter(c=>c.tipo===tipoAtual).map(c=>c.area))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
      area.innerHTML='<option value="">Todas as áreas</option>'+areas.map(a=>`<option value="${a.replace(/"/g,'&quot;')}">${a}</option>`).join('');
      if(areas.includes(atual)) area.value=atual;
    }

    function render(){
      const termo=(search?.value||'').trim().toLocaleLowerCase('pt-BR');
      const areaEscolhida=area?.value||'';
      let lista=cursos.filter(c=>c.tipo===tipoAtual && (!areaEscolhida||c.area===areaEscolhida) && (!termo||c.nome.toLocaleLowerCase('pt-BR').includes(termo)));
      const limite=mostrarTodos?lista.length:9;
      const exibidos=lista.slice(0,limite);
      count.textContent=`${lista.length} ${lista.length===1?'curso encontrado':'cursos encontrados'}`;
      grid.innerHTML=exibidos.length?exibidos.map(c=>`<article class="catalog-card"><span class="catalog-type">${c.tipo}</span><h3>${c.nome}</h3><p class="catalog-area-label">${c.area}</p><div class="catalog-meta"><span>Duração</span><strong>${c.duracao}</strong></div><a class="btn btn-primary catalog-course-btn" href="https://wa.me/5531995528859?text=${encodeURIComponent('Olá! Acessei o site da UniÚnica e quero informações sobre o curso de '+c.nome+'.') }" target="_blank" rel="noopener">Tenho interesse</a></article>`).join(''):'<div class="catalog-empty">Nenhum curso encontrado com esses filtros.</div>';
      if(more){ more.style.display=lista.length>9?'inline-flex':'none'; more.textContent=mostrarTodos?'Mostrar menos':'Ver todos os cursos'; }
    }

    tabs.forEach(tab=>tab.addEventListener('click',()=>{
      tipoAtual=tab.dataset.type==='tecnologo'?'Tecnólogo':tab.dataset.type==='bacharelado'?'Bacharelado':'Licenciatura';
      mostrarTodos=false;
      tabs.forEach(t=>t.classList.toggle('active',t===tab));
      atualizarAreas(); render();
    }));
    search?.addEventListener('input',()=>{mostrarTodos=false;render()});
    area?.addEventListener('change',()=>{mostrarTodos=false;render()});
    more?.addEventListener('click',()=>{mostrarTodos=!mostrarTodos;render()});

    const estilo=document.createElement('style');
    estilo.textContent=`
      .catalog-card h3{font-size:16px;line-height:1.35;color:var(--dark);margin:12px 0 7px}
      .catalog-area-label{font-size:11px;color:var(--muted);font-weight:700;margin-bottom:16px}
      .catalog-meta{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border);padding-top:12px;margin-top:auto;margin-bottom:15px;font-size:11px;color:var(--muted)}
      .catalog-meta strong{color:var(--purple);font-size:12px}
      .catalog-course-btn{width:100%;padding:10px 12px;font-size:12px}
      .catalog-empty{grid-column:1/-1;text-align:center;padding:35px;color:var(--muted);font-weight:700}
      @media(max-width:900px){.catalog-grid{grid-template-columns:repeat(2,1fr)}}
      @media(max-width:600px){.catalog-grid{grid-template-columns:1fr}.catalog-toolbar{grid-template-columns:1fr}.catalog-wrap{padding:22px}}
    `;
    document.head.appendChild(estilo);
    atualizarAreas(); render();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar); else iniciar();
})();
