document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('accessibility-btn');
    let fontSizeLevel = 0; // 0 = normal, 1 = médio, 2 = grande
    
    btn.addEventListener('click', function() {
      // Remove todas as classes de tamanho de fonte primeiro
      document.body.classList.remove('font-small', 'font-medium', 'font-large');
      
      // Cicla entre os tamanhos
      fontSizeLevel = (fontSizeLevel + 1) % 3;
      
      // Aplica a classe correspondente
      if (fontSizeLevel === 1) {
        document.body.classList.add('font-medium');
        btn.innerHTML = 'A<span aria-hidden="true">++</span>';
        btn.title = "Tamanho da fonte médio";
      } else if (fontSizeLevel === 2) {
        document.body.classList.add('font-large');
        btn.innerHTML = 'A<span aria-hidden="true">+++</span>';
        btn.title = "Tamanho da fonte grande";
      } else {
        btn.innerHTML = 'A<span aria-hidden="true">+</span>';
        btn.title = "Aumentar tamanho da fonte";
      }
      
      // Armazena a preferência no localStorage
      localStorage.setItem('fontSizePreference', fontSizeLevel);
    });
    
    // Verifica se há uma preferência salva
    const savedPreference = localStorage.getItem('fontSizePreference');
    if (savedPreference) {
      fontSizeLevel = parseInt(savedPreference);
      document.body.classList.remove('font-small', 'font-medium', 'font-large');
      
      if (fontSizeLevel === 1) {
        document.body.classList.add('font-medium');
        btn.innerHTML = 'A<span aria-hidden="true">++</span>';
        btn.title = "Tamanho da fonte médio";
      } else if (fontSizeLevel === 2) {
        document.body.classList.add('font-large');
        btn.innerHTML = 'A<span aria-hidden="true">+++</span>';
        btn.title = "Tamanho da fonte grande";
      }
    }
  });