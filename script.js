const bios = {
  casimiro: {
    title: 'Casimiro de Abreu (1839–1860)',
    html: `
      <img class='bio-photo author-photo' data-author='casimiro' src='assets/images/authors/casimiro-de-abreu.jpg' alt='Retrato de Casimiro de Abreu' loading='lazy' /><p>Casimiro José Marques de Abreu foi um poeta brasileiro da 2ª geração romântica, fase também conhecida como ultrarromântica e marcada pelo “mal do século”. Sua poesia ficou conhecida pela musicalidade, pela saudade e pela sensibilidade direta.</p>
      <h4>Biografia resumida e organizada</h4>
      <p>

Casimiro José Marques de Abreu nasceu em Barra de São João, no Rio de Janeiro, filho de um comerciante português. Ainda jovem, foi enviado para trabalhar no comércio, mas não se identificou com a área e se interessou cada vez mais pela literatura.

Em 1853, viajou para Portugal, onde aprofundou sua carreira literária e escreveu grande parte de seus poemas e obras. Em Lisboa, teve destaque com a peça “Camões e o Jau” (1856) e produziu muitos textos que depois fariam parte de “As Primaveras” (1859), seu único livro.

Suas obras são marcadas pela saudade, sentimentalismo e valorização da infância, características da segunda geração do Romantismo brasileiro. Casimiro morreu em 1860, aos 21 anos, vítima de tuberculose.
</p>
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
      <img class='bio-photo author-photo' data-author='azevedo' src='assets/images/authors/alvares-de-azevedo.jpg' alt='Retrato de Álvares de Azevedo' loading='lazy' /><p>Álvares de Azevedo nasceu em São Paulo, em 1831, e é considerado o principal nome do Ultrarromantismo brasileiro. Sua obra combina lirismo, ironia, idealização amorosa e fascínio pela morte, com forte dualidade entre sonho e realidade.</p>
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
      <img class='bio-photo author-photo' data-author='varella' src='assets/images/authors/fagundes-varella.jpg' alt='Retrato de Fagundes Varella' loading='lazy' /><p>Fagundes Varella nasceu no Rio de Janeiro, em 1841, e estudou Direito em São Paulo. Sua poesia destaca conflitos humanos profundos e combina dor pessoal, religiosidade e reflexão existencial.</p>
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
  { q: '1) O que foi o Romantismo na literatura?', o: ['Um movimento que valorizou sentimentos e imaginação', 'Uma fase focada só em fórmulas científicas', 'Um período sem poesia no Brasil', 'Uma escola que rejeitava emoções'], a: 0 },
  { q: '2) O que marcou a 2ª geração do Romantismo?', o: ['Razão e lógica', 'Melancolia e sentimentos intensos', 'Tecnologia e ciência', 'Humor e sátira'], a: 1 },
  { q: '3) O que era o “mal do século”?', o: ['Um movimento político', 'Tristeza, melancolia e pessimismo', 'Uma guerra no Brasil', 'Um estilo de pintura'], a: 1 },
  { q: '4) Quem escreveu "Lira dos Vinte Anos"?', o: ['Fagundes Varella', 'Gonçalves Dias', 'Álvares de Azevedo', 'Machado de Assis'], a: 2 },
  { q: '5) Qual autor ficou conhecido pela saudade da infância?', o: ['Casimiro de Abreu', 'José de Alencar', 'Castro Alves', 'Álvares de Azevedo'], a: 0 },
  { q: '6) Qual obra está ligada a Fagundes Varella?', o: ['Cântico do Calvário', 'Iracema', 'Dom Casmurro', 'O Cortiço'], a: 0 },
  { q: '7) Quais temas aparecem muito na 2ª geração?', o: ['Alegria constante e humor', 'Morte, solidão e sofrimento amoroso', 'Apenas política e economia', 'Somente aventuras históricas'], a: 1 },
  { q: '8) O que o quiz ensina sobre os autores dessa fase?', o: ['Que todos escreviam do mesmo jeito', 'Que a fase valoriza emoção, saudade e conflito interior', 'Que o mais importante é decorar datas', 'Que não existiam obras conhecidas'], a: 1 }
];


const authorImageCandidates = {
  casimiro: [
    'assets/images/authors/casimiro-de-abreu.jpg',
    'Casimiro_de_Abreu_(Iconográfico).jpg',
    'Casimiro_de_Abreu_(lc...).jpg',
    'Casimiro_de_Abreu_(litografia).jpg',
    'Casimiro_de_Abreu.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/26/Casimiro_de_Abreu.jpg'
  ],
  azevedo: [
    'assets/images/authors/alvares-de-azevedo.jpg',
    'Alvares_de_Azevedo_(Iconográfico).jpg',
    'Alvares_de_Azevedo_(l...).jpg',
    'Alvares_de_Azevedo_(litografia).jpg',
    'Alvares_de_Azevedo.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/56/Alvares_de_Azevedo.jpg'
  ],
  varella: [
    'assets/images/authors/fagundes-varella.jpg',
    'Fagundes_Varella.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/63/Fagundes_Varella.jpg'
  ]
};

function tryImageCandidates(img, candidates, index = 0) {
  if (!img || !candidates || index >= candidates.length) return;
  const src = candidates[index];
  img.onerror = () => tryImageCandidates(img, candidates, index + 1);
  img.src = src;
}

document.querySelectorAll('.author-photo').forEach((img) => {
  const key = img.dataset.author;
  tryImageCandidates(img, authorImageCandidates[key]);
});
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
    const modalPhoto = modalContent.querySelector('.author-photo');
    if (modalPhoto) tryImageCandidates(modalPhoto, authorImageCandidates[modalPhoto.dataset.author]);
    document.body.classList.add('modal-open');
    modal.showModal();
  });
});
document.getElementById('close-modal').addEventListener('click', () => modal.close());

function closeModal() {
  modal.close();
  document.body.classList.remove('modal-open');
}

function closeModal() {
  modal.close();
  document.body.classList.remove('modal-open');
}

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
