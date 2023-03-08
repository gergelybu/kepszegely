window.addEventListener("load", init);

function init() {
  const Lista = [];
  const kepek = document.querySelectorAll("article img");
  for (let index = 0; index < kepek.length; index++) {
    let text = kepek[index].src;
    //word = text.split("http://127.0.0.1:5500/");
    word = text.split("https://gergelybu.github.io/kepszegely/");
    Lista.push(word[1]);
    //Lista.push(kepek[index].src);
  }
  console.log(Lista);
  for (let index = 0; index < kepek.length; index++) {
    kepek[index].addEventListener("mouseover", szegelyvaltas);
    kepek[index].addEventListener("mouseout", szegelyle);
  }
}

function szegelyvaltas(event) {
  const ELEM = event.target.parentNode;
  console.log(ELEM);
  ELEM.classList.add("szegely");
}

function szegelyle(event) {
  const ELEM = event.target.parentNode;
  console.log(ELEM);
  ELEM.classList.remove("szegely");
}
