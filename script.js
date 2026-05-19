const bios = {
  casimiro: {
    title: 'Casimiro de Abreu (1839–1860)',
    html: `<p>Casimiro José Marques de Abreu foi poeta da 2ª geração romântica, conhecido pela saudade, linguagem musical e forte carga emocional.</p><ul><li>Nasceu em 4 de janeiro de 1839, em Barra de São João (RJ).</li><li>Atuou no meio literário carioca e publicou em jornais.</li><li>Foi para Lisboa, sentiu saudades do Brasil e adoeceu.</li><li>Morreu em 1860, aos 21 anos.</li></ul><blockquote>“Ah! que saudades que tenho da aurora da minha vida...”</blockquote>`
  },
  azevedo: {
    title: 'Álvares de Azevedo (1831–1852)',
    html: `<p>Nascido em São Paulo, estudou no Largo São Francisco e tornou-se referência do ultrarromantismo.</p><ul><li>Morreu precocemente aos 20 anos.</li><li>Obras: <em>Lira dos Vinte Anos</em> e <em>Noite na Taverna</em>.</li><li>Temas: tristeza, solidão, morte e exagero sentimental.</li></ul>`
  },
  varella: {
    title: 'Fagundes Varella (1841–1875)',
    html: `<p>Nascido no Rio de Janeiro, também estudou Direito em São Paulo.</p><ul><li>A perda do filho marcou sua poesia.</li><li>Destaque para <em>Cântico do Calvário</em>.</li><li>Outras obras: <em>Noturnas</em>, <em>Vozes da América</em> e <em>Cantos e Fantasias</em>.</li></ul>`
  }
};

const quizData = [
  { q: 'O que marcou a Segunda Geração do Romantismo?', o: ['Humor e sátira', 'Melancolia, subjetividade e sofrimento amoroso', 'Valorização da ciência'], a: 1 },
  { q: 'Quem escreveu Lira dos Vinte Anos?', o: ['Álvares de Azevedo', 'Casimiro de Abreu', 'Fagundes Varella'], a: 0 },
  { q: 'Qual autor ficou conhecido pela saudade da infância?', o: ['Casimiro de Abreu', 'Machado de Assis', 'José de Alencar'], a: 0 },
  { q: '“Mal do século” significa:', o: ['Entusiasmo tecnológico', 'Excesso de sentimentos tristes e pessimistas', 'Movimento político'], a: 1 }
];

const pages = document.querySelectorAll('.page');
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

document.getElementById('wiki-search').addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;
  const value = event.target.value.toLowerCase();
  if (value.includes('autor')) navigateTo('autores');
  else if (value.includes('quiz')) navigateTo('quiz');
  else if (value.includes('ultra') || value.includes('segunda')) navigateTo('ultra');
  else navigateTo('romantismo');
});

const modal = document.getElementById('bio-modal');
const modalContent = document.getElementById('modal-content');
document.querySelectorAll('[data-modal]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const info = bios[btn.dataset.modal];
    modalContent.innerHTML = `<h3>${info.title}</h3>${info.html}`;
    modal.showModal();
  });
});
document.getElementById('close-modal').addEventListener('click', () => modal.close());

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
    quizCard.innerHTML = '<h4>Quiz concluído</h4><p>Revisão finalizada com sucesso.</p>';
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
