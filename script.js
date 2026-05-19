const questions = [
  { type: 'mcq', text: '1. A 2ª geração do romantismo era conhecida principalmente por:', options: ['A) Humor e comédia', 'B) Tecnologia e ciência', 'C) Tristeza, sonho e melancolia', 'D) Futebol e aventura'], answer: 2 },
  { type: 'mcq', text: '2. Qual autor ficou famoso pelo estilo sombrio e misterioso?', options: ['A) Machado de Assis', 'B) Álvares de Azevedo', 'C) Monteiro Lobato', 'D) Carlos Drummond'], answer: 1 },
  { type: 'mcq', text: '3. O “mal do século” representava:', options: ['A) Uma doença física', 'B) Um movimento político', 'C) O excesso de sentimentos tristes e pessimistas', 'D) Uma guerra'], answer: 2 },
  { type: 'mcq', text: '4. Quem escreveu “Meus Oito Anos”?', options: ['A) Casimiro de Abreu', 'B) Fagundes Varela', 'C) José de Alencar', 'D) Gonçalves Dias'], answer: 0 },
  { type: 'mcq', text: '5. Qual desses temas aparecia MUITO no ultrarromantismo?', options: ['A) Espaço sideral', 'B) Morte e saudade', 'C) Esportes', 'D) Tecnologia'], answer: 1 },
  { type: 'vf', text: '6. Verdadeiro ou falso: Os autores da 2ª geração gostavam de poemas felizes e otimistas.', options: ['Verdadeiro', 'Falso'], answer: 1 },
  { type: 'mcq', text: '7. Quem foi um dos principais autores da 2ª geração romântica?', options: ['A) Fagundes Varela', 'B) Pelé', 'C) Santos Dumont', 'D) Oscar Niemeyer'], answer: 0 },
  { type: 'complete', text: '8. Complete: A 2ª geração romântica também era chamada de: “Ultra__________”', options: ['romântica', 'moderna', 'científica', 'urbana'], answer: 0 },
  { type: 'mcq', text: '9. Qual dessas opções combina MAIS com o clima do ultrarromantismo?', options: ['A) Festa na praia', 'B) Chuva, lua e poesia triste', 'C) Corrida de Fórmula 1', 'D) Carnaval'], answer: 1 },
  { type: 'mcq', text: '10. Quem geralmente morria cedo e tinha vida intensa na literatura romântica?', options: ['A) Os autores ultrarromânticos', 'B) Os cientistas', 'C) Os jogadores', 'D) Os políticos'], answer: 0 },
  { type: 'mcq', text: 'Pergunta final divertida: Se Álvares de Azevedo tivesse Instagram, o que ele provavelmente postaria?', options: ['A) “Partiu praia 😎”', 'B) “A tristeza é minha única companhia…”', 'C) “Treino pago 💪”', 'D) “Receita de bolo”'], answer: 1 }
];

const screens = { start: document.getElementById('start-screen'), quiz: document.getElementById('quiz-screen'), result: document.getElementById('result-screen') };
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const soundBtn = document.getElementById('sound-btn');
const questionCard = document.getElementById('question-card');
const currentQuestion = document.getElementById('current-question');
const totalQuestions = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');
const scoreEl = document.getElementById('score');

let state = { index: 0, score: 0, selected: null, sound: false };

totalQuestions.textContent = questions.length;

function switchScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function tone(freq = 520, time = 0.08) {
  if (!state.sound) return;
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.value = freq;
  gain.gain.value = 0.03;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + time);
}

function renderQuestion() {
  const q = questions[state.index];
  state.selected = null;
  nextBtn.disabled = true;
  currentQuestion.textContent = state.index + 1;
  progressFill.style.width = `${((state.index) / questions.length) * 100}%`;

  questionCard.innerHTML = `
    <h3 class="question-title">${q.text}</h3>
    <div class="options">
      ${q.options.map((opt, idx) => `<button class="option" data-idx="${idx}">${opt}</button>`).join('')}
    </div>
  `;

  questionCard.querySelectorAll('.option').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (state.selected !== null) return;
      state.selected = Number(btn.dataset.idx);
      nextBtn.disabled = false;
      const correct = q.answer;
      questionCard.querySelectorAll('.option').forEach((optBtn, idx) => {
        if (idx === correct) optBtn.classList.add('correct');
        if (idx === state.selected && idx !== correct) optBtn.classList.add('wrong');
      });
      if (state.selected === correct) {
        state.score += 1;
        scoreEl.textContent = state.score;
        tone(620, 0.11);
      } else {
        tone(210, 0.14);
      }
    });
  });
}

function resultMessage(score, total) {
  const ratio = score / total;
  if (ratio === 1) return 'Álvares de Azevedo teria orgulho de você. 🌙';
  if (ratio >= 0.8) return 'Você sobreviveu ao Mal do Século! 📖';
  if (ratio >= 0.6) return 'Seu coração é ultrarromântico. 💙';
  if (ratio >= 0.4) return 'Você escapou da melancolia romântica. ☔';
  return 'A névoa da poesia te confundiu, mas a próxima leitura te salva! ✨';
}

function showResult() {
  switchScreen('result');
  document.getElementById('result-points').textContent = `Você fez ${state.score} de ${questions.length} pontos.`;
  document.getElementById('result-message').textContent = resultMessage(state.score, questions.length);
  document.getElementById('result-badges').innerHTML = [
    '🎓 Revisão concluída com estilo literário.',
    '📚 Autores revisados: Álvares, Casimiro e Varela.',
    '🌧️ Clima ultrarromântico dominado.'
  ].map((text) => `<div class="badge">${text}</div>`).join('');
}

startBtn.addEventListener('click', () => { state.index = 0; state.score = 0; scoreEl.textContent = '0'; switchScreen('quiz'); renderQuestion(); tone(400, 0.06); });
nextBtn.addEventListener('click', () => {
  state.index += 1;
  if (state.index >= questions.length) {
    progressFill.style.width = '100%';
    showResult();
    return;
  }
  renderQuestion();
});
restartBtn.addEventListener('click', () => switchScreen('start'));
soundBtn.addEventListener('click', () => {
  state.sound = !state.sound;
  soundBtn.setAttribute('aria-pressed', String(state.sound));
  soundBtn.textContent = state.sound ? '🔊 Efeitos sonoros: ligados' : '🔉 Efeitos sonoros: desligados';
  tone(500, 0.05);
});
