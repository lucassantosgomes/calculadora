const panel = document.querySelector('p');
const igual = document.getElementById('igual');
const limpar = document.getElementById('limpar');
const apagar = document.getElementById('apagar');
const bntCaracteres = document.querySelectorAll('.caracter');
let equacao = '';
bntCaracteres.forEach(element => {
  element.addEventListener('click', () => {
    equacao += element.value[0];
    panel.textContent += element.textContent;
  });
});
igual.addEventListener('click', () => {
  try {
    const resultado = eval(equacao);
    panel.textContent = resultado;
    equacao = `${resultado}`;
  } catch (error) {
    alert('operação inválida');
  }
});
limpar.addEventListener('click', () => {
  equacao = '';
  panel.textContent = '';
});
apagar.addEventListener('click', () => {
  const panelApagar = panel.textContent.split('');
  panelApagar.pop();
  panel.textContent = panelApagar.join('');
  const equacaoApagar = equacao.split('');
  equacaoApagar.pop();
  equacao = equacaoApagar.join('');
});
document.querySelector('body').addEventListener('keydown', e => {
  e.preventDefault();
  const teclaClicada = document.querySelector(`[value~='${e.key}']`);
  if (teclaClicada) {teclaClicada.click(); teclaClicada.focus()};
});

