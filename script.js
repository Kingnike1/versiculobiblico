const verses = [
  "Tudo posso naquele que me fortalece. - Fp 4:13",
  "O Senhor é meu pastor e nada me faltará. - Sl 23:1",
  "Porque Deus amou o mundo de tal maneira... - Jo 3:16",
  "Alegrem-se sempre no Senhor. - Fp 4:4",
  "Entrega o teu caminho ao Senhor... - Sl 37:5",
  "Não temas, porque eu sou contigo. - Is 41:10",
  "Peça e será dado; busque e encontrará. - Mt 7:7",
  "O Senhor é a minha força e o meu cântico. - Êx 15:2",
  "Eu sou o caminho, a verdade e a vida. - Jo 14:6",
  "Bem-aventurados os que têm fome e sede de justiça. - Mt 5:6",
  "O Senhor é a minha luz e a minha salvação. - Sl 27:1",
  "Porque eu bem sei os planos que tenho para vós, diz o Senhor. - Jr 29:11",
  "Tudo contribui para o bem daqueles que amam a Deus. - Rm 8:28",
  "O amor é paciente, o amor é bondoso. - 1 Co 13:4",
  "Eu sou o alfa e o ômega, o princípio e o fim. - Ap 22:13",
  "Vinde a mim, todos os que estais cansados e sobrecarregados. - Mt 11:28",
  "Porque o Senhor é bom; a sua misericórdia dura para sempre. - Sl 100:5",
  "Eu te instruirei e te ensinarei o caminho que deves seguir. - Sl 32:8",
  "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco. - 1 Ts 5:18",
  "O Senhor é fiel em todas as suas palavras e santo em todas as suas obras. - Sl 145:13",
  "Se Deus é por nós, quem será contra nós? - Rm 8:31",
  "Porque onde estiver o vosso tesouro, aí estará também o vosso coração. - Mt 6:21",
  "O Senhor ouvirá quando eu clamar a Ele. - Sl 4:3",
  "Mas o Senhor é fiel, e vos fortalecerá e vos guardará do maligno. - 2 Ts 3:3",
  "Sede fortes e corajosos, não temais, nem vos assusteis. - Dt 31:6",
  "Em Cristo somos mais que vencedores. - Rm 8:37",
  "O Senhor é o meu refúgio e a minha fortaleza, o meu Deus, em quem confio. - Sl 91:2",
  "O Senhor é bom para todos, e as suas misericórdias estão sobre todas as suas obras. - Sl 145:9",
  "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos. - Hb 11:1",
  "Não andeis ansiosos por coisa alguma, mas em tudo, pela oração e súplica, com ação de graças, apresentai os vossos pedidos a Deus. - Fp 4:6",
  "O Senhor é o meu pastor, nada me faltará. - Sl 23:1",
  "Digo-vos, pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á. - Mt 7:7",
  "Pois Deus não nos deu o espírito de covardia, mas de poder, de amor e de moderação. - 2 Tm 1:7",
  "Mas o fruto do Espírito é amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade, mansidão, domínio próprio. - Gl 5:22-23",
  "Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros. - Ef 4:32",
  "Vós sois a luz do mundo; não se pode esconder uma cidade situada sobre um monte. - Mt 5:14",
  "O Senhor é a minha força e o meu cântico, e se fez a minha salvação. - Êx 15:2",
  "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco. - 1 Ts 5:18"
];


function showRandomVerse() {
  const verseElement = document.getElementById('verse');
  const randomIndex = Math.floor(Math.random() * verses.length);
  verseElement.textContent = verses[randomIndex];
}

function addToFavorites() {
  const verseElement = document.getElementById('verse');
  const verseText = verseElement.textContent;

  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(verseText)) {
    favorites.push(verseText);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
  } else {
    alert('Esse versículo já está nos Favoritos.');
  }
}

function displayFavorites() {
  const favoritesContainer = document.getElementById('favorites');
  favoritesContainer.innerHTML = '';

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.forEach(fav => {
    const p = document.createElement('p');
    p.textContent = fav;
    p.onclick = () => alert(fav);
    favoritesContainer.appendChild(p);
  });
}
// Função para reiniciar o temporizador a cada 5 segundos
function startAutoRefresh() {
  showRandomVerse();
  setInterval(showRandomVerse, 5000);
}
// Função para copiar o conteúdo do container do versículo
function copyVerse() {
  const verseElement = document.getElementById('verse');
  const verseText = verseElement.textContent;

  // Criação de um textarea temporário para copiar o texto
  const textarea = document.createElement('textarea');
  textarea.value = verseText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  alert('Versículo copiado: ' + verseText);
}
// Carrega um novo versículo e mostra favoritos ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
  startAutoRefresh();
  showRandomVerse();
  displayFavorites();
});