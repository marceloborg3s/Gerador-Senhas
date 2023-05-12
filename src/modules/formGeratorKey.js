import geraKey from './gerator';

const keyGerator = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');


export default () => {
  gerarSenha.addEventListener('click', () => {
    keyGerator.innerHTML = gera()
  })
};

function gera() {
  const senha = geraKey(
    qtdCaracteres.value,
    chkMaiusculas.checked, // checked mostra se esta marcado
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );

  return senha || "Nada selecionado";
}