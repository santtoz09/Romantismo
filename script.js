const bios = {
  casimiro: {
    title: 'Casimiro de Abreu (1839–1860)',
    html: `
      <p>Casimiro José Marques de Abreu foi um poeta brasileiro da 2ª geração romântica, fase também conhecida como ultrarromântica e marcada pelo “mal do século”. Sua poesia ficou conhecida pela musicalidade, pela saudade e pela sensibilidade direta.</p>
      <h4>Biografia resumida e organizada</h4>
      <ul>
        <li><strong>Nascimento e origem:</strong> nasceu em 4 de janeiro de 1839, em Barra de São João (atual distrito de Casimiro de Abreu - RJ), filho de comerciante português.</li>
        <li><strong>Vida no Rio:</strong> aos 15 anos, foi enviado ao Rio de Janeiro para atuar no comércio, mas não se identificou com a rotina e aproximou-se da literatura.</li>
        <li><strong>Boemia e jornais:</strong> integrou círculos literários e colaborou em periódicos como <em>A Marmota Fluminense</em> e <em>Correio Mercantil</em>.</li>
        <li><strong>Viagem a Portugal:</strong> em 1857 foi para Lisboa, vivência marcada por saudade intensa do Brasil e agravamento de sua saúde.</li>
        <li><strong>Volta e morte precoce:</strong> retornou ao Brasil em 1859 e faleceu em 1860, com apenas 21 anos.</li>
      </ul>
      <h4>Importância na literatura</h4>
      <ul>
        <li>Consolidou temas de saudade e memória da infância na poesia brasileira.</li>
        <li>Expressou o “mal do século” de forma acessível, emocional e musical.</li>
        <li>Dialogou com nacionalismo afetivo e idealização da experiência passada.</li>
      </ul>
      <blockquote>“Ah! que saudades que tenho da aurora da minha vida...”</blockquote>`
  },
  azevedo: {
    title: 'Álvares de Azevedo (1831–1852)',
    html: `
      <p>Álvares de Azevedo nasceu em São Paulo, em 1831, e é considerado o principal nome do Ultrarromantismo brasileiro. Sua obra combina lirismo, ironia, idealização amorosa e fascínio pela morte, com forte dualidade entre sonho e realidade.</p>
      <h4>Dados biográficos</h4>
      <ul>
        <li>Estudou na Faculdade de Direito do Largo São Francisco, espaço central da vida intelectual da época.</li>
        <li>Morreu aos 20 anos, o que reforçou sua imagem de poeta jovem e trágico.</li>
      </ul>
      <h4>Obras principais</h4>
      <ul>
        <li><em>Lira dos Vinte Anos</em></li>
        <li><em>Noite na Taverna</em></li>
      </ul>
      <h4>Importância para a 2ª geração</h4>
      <p>Sua escrita representa com intensidade os traços da geração ultrarromântica: tristeza, solidão, sofrimento amoroso, idealização da morte, sentimento de inadequação e exagero emocional. Também introduz contrastes entre delicadeza e sarcasmo, ampliando a complexidade estética da fase.</p>`
  },
  varella: {
    title: 'Fagundes Varella (1841–1875)',
    html: `
      <p>Fagundes Varella nasceu no Rio de Janeiro, em 1841, e estudou Direito em São Paulo. Sua poesia destaca conflitos humanos profundos e combina dor pessoal, religiosidade e reflexão existencial.</p>
      <h4>Trajetória e contexto</h4>
      <ul>
        <li>A perda do filho impactou profundamente sua produção poética.</li>
        <li>Essa experiência aparece de forma marcante em <em>Cântico do Calvário</em>.</li>
      </ul>
      <h4>Outras obras</h4>
      <ul>
        <li><em>Noturnas</em></li>
        <li><em>Vozes da América</em></li>
        <li><em>Cantos e Fantasias</em></li>
      </ul>
      <h4>Importância</h4>
      <p>Varella amplia o repertório do Ultrarromantismo ao unir emoção, sofrimento, espiritualidade e observação do mundo. Sua poesia funciona como ponte entre o drama íntimo da segunda geração e temas mais amplos da literatura brasileira posterior.</p>`
  }
};

const quizData = [
  { q: '1) Qual característica diferencia mais a 2ª geração romântica da 1ª geração no Brasil?', o: ['Ênfase no indianismo e herói nacional', 'Predomínio de subjetividade melancólica e conflito interior', 'Foco em crítica social abolicionista', 'Valorização do racionalismo clássico'], a: 1 },
  { q: '2) Em relação ao “mal do século”, a interpretação mais adequada é:', o: ['Uma epidemia literal entre escritores', 'Uma metáfora para angústia, tédio existencial e pessimismo', 'Um movimento político partidário', 'Uma escola científica do século XIX'], a: 1 },
  { q: '3) Qual alternativa descreve melhor a poesia de Casimiro de Abreu?', o: ['Linguagem satírica e crítica urbana direta', 'Tom épico nacionalista com exaltação indígena', 'Musicalidade, saudade da infância e afetividade', 'Experimentalismo formal e vanguarda'], a: 2 },
  { q: '4) Em Álvares de Azevedo, o dualismo aparece como:', o: ['Razão absoluta contra fé religiosa', 'Contraste entre idealização amorosa e desejo, sonho e realidade', 'Conflito entre campo e cidade industrial', 'Defesa da objetividade jornalística'], a: 1 },
  { q: '5) Qual obra está corretamente associada a Fagundes Varella?', o: ['Cântico do Calvário', 'Iracema', 'Memórias Póstumas de Brás Cubas', 'Os Sertões'], a: 0 },
  { q: '6) A recorrência de morte, noite e solidão no Ultrarromantismo indica principalmente:', o: ['Desinteresse por emoções pessoais', 'Aprofundamento da subjetividade e dramatização da existência', 'Rejeição total da poesia lírica', 'Preocupação central com progresso tecnológico'], a: 1 },
  { q: '7) Sobre o contexto dos autores da 2ª geração, é correto afirmar que:', o: ['Estavam afastados da influência europeia', 'Produziram em ambiente intelectual ligado a faculdades e círculos literários', 'Tinham foco majoritário em teatro cômico popular', 'Recusavam completamente a publicação em jornais'], a: 1 },
  { q: '8) Qual alternativa resume melhor a importância da 2ª geração para a literatura brasileira?', o: ['Eliminou a subjetividade romântica', 'Introduziu exclusivamente temas políticos', 'Consolidou a expressão poética da crise interior e da sensibilidade melancólica', 'Substituiu a poesia por narrativa histórica documental'], a: 2 }
];

const navItems = document.querySelectorAll('.nav-item');

function navigateTo(pageId) {
  const current = document.querySelector('.page.active');
  const next = document.getElementById(pageId);
  if (!next || current === next) return;
  current.classList.add('leaving');
  setTimeout(() => {
    current.classList.remove('active', 'leaving');
    next.classList.add('active');
  }, 280);
  navItems.forEach((item) => item.classList.toggle('active', item.dataset.page === pageId));
}

navItems.forEach((btn) => btn.addEventListener('click', () => navigateTo(btn.dataset.page)));

const modal = document.getElementById('bio-modal');
const modalContent = document.getElementById('modal-content');
document.querySelectorAll('[data-modal]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const info = bios[btn.dataset.modal];
    modalContent.innerHTML = `<h3>${info.title}</h3>${info.html}`;
    document.body.classList.add('modal-open');
    modal.showModal();
  });
});
document.getElementById('close-modal').addEventListener('click', () => modal.close());

function closeModal() {
  modal.close();
  document.body.classList.remove('modal-open');
}

document.getElementById('close-modal').addEventListener('click', closeModal);
modal.addEventListener('close', () => document.body.classList.remove('modal-open'));

function closeModal() {
  modal.close();
  document.body.classList.remove('modal-open');
}

document.getElementById('close-modal').addEventListener('click', closeModal);
modal.addEventListener('close', () => document.body.classList.remove('modal-open'));

const quizCard = document.getElementById('quiz-card');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const result = document.getElementById('quiz-result');
let i = 0; let score = 0; let answered = false;

function renderQuiz() {
  const item = quizData[i];
  answered = false;
  nextBtn.disabled = true;
  progressText.textContent = `Pergunta ${i + 1} de ${quizData.length}`;
  progressFill.style.width = `${(i / quizData.length) * 100}%`;
  quizCard.innerHTML = `<h4>${item.q}</h4>${item.o.map((text, idx) => `<button class="option" data-index="${idx}">${text}</button>`).join('')}`;
  quizCard.querySelectorAll('.option').forEach((opt) => {
    opt.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      nextBtn.disabled = false;
      const choice = Number(opt.dataset.index);
      quizCard.querySelectorAll('.option').forEach((btn, idx) => {
        if (idx === item.a) btn.classList.add('correct');
        if (idx === choice && idx !== item.a) btn.classList.add('wrong');
      });
      if (choice === item.a) score += 1;
    });
  });
}

nextBtn.addEventListener('click', () => {
  i += 1;
  if (i >= quizData.length) {
    progressFill.style.width = '100%';
    quizCard.innerHTML = '<h4>Quiz concluído</h4><p>Dinâmica encerrada! Agora compare as respostas com os argumentos discutidos pela turma.</p>';
    result.textContent = `Pontuação final: ${score}/${quizData.length}`;
    nextBtn.classList.add('hidden');
    restartBtn.classList.remove('hidden');
    return;
  }
  renderQuiz();
});

restartBtn.addEventListener('click', () => {
  i = 0; score = 0; result.textContent = '';
  nextBtn.classList.remove('hidden');
  restartBtn.classList.add('hidden');
  renderQuiz();
});

renderQuiz();
