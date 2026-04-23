function show(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
function fetchProducts() {
  let div = document.getElementById("products");
  div.innerHTML = "Loading...";

  setTimeout(() => {
    let data = [
      { name: "Laptop" },
      { name: "Phone" }
    ];

    div.innerHTML = "";
    data.forEach(p => {
      div.innerHTML += `<p>${p.name}</p>`;
    });
  }, 1000);
}
let store = {
  cart: []
};

function addItem() {
  store.cart.push("Item " + (store.cart.length + 1));
  renderCart();
}

function renderCart() {
  let div = document.getElementById("cart");
  div.innerHTML = "";

  store.cart.forEach(item => {
    div.innerHTML += `<p>${item}</p>`;
  });
}
function sendMessage() {
  let msg = document.getElementById("msg").value;
  let chat = document.getElementById("chat");

  chat.innerHTML += `<p>You: ${msg}</p>`;

  // fake reply
  setTimeout(() => {
    chat.innerHTML += `<p>Bot: Reply to "${msg}"</p>`;
  }, 500);
}