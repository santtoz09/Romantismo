const toggles = document.querySelectorAll('.toggle-btn');

toggles.forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);
    const opened = target.classList.toggle('open');
    button.textContent = opened ? 'Ver menos' : 'Ver mais';
  });
});

const quizForm = document.getElementById('quiz-form');
quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const answers = { q1: 'b', q2: 'a', q3: 'a', q4: 'b' };
  let score = 0;

  Object.entries(answers).forEach(([key, correct]) => {
    const selected = quizForm.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === correct) score += 1;
  });

  const result = document.getElementById('quiz-result');
  result.textContent = `Você acertou ${score} de 4 questões. ${score >= 3 ? 'Excelente revisão para a apresentação!' : 'Revise os autores e tente novamente.'}`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
