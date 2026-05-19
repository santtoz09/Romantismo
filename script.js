const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

document.getElementById('quizForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const answers = { q1: 'b', q2: 'c', q3: 'a', q4: 'b' };
  let score = 0;
  Object.entries(answers).forEach(([q, val]) => {
    const marked = document.querySelector(`input[name="${q}"]:checked`);
    if (marked && marked.value === val) score++;
  });
  const result = document.getElementById('quizResult');
  result.textContent = `Você acertou ${score} de ${Object.keys(answers).length}. ${score >= 3 ? 'Ótima revisão!' : 'Revise os tópicos e tente de novo.'}`;
});
