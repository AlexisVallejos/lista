const input = document.querySelector("input");
const agrega = document.querySelector(".agregado");
const ul = document.querySelector("ul");
const vaciado = document.querySelector(".vacio");

agrega.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(eliminado());
    ul.appendChild(li);

    input.value = "";
    vaciado.style.display = "none";
  }
});

function eliminado() {
  const eliminado = document.createElement("button");

  eliminado.textContent = "X";
  eliminado.className = "btn-delete";

  eliminado.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      vaciado.style.display = "block";
    }
  });

  return eliminado;
}
