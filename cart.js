let addToCartBtn = document.getElementById("btn");

function addToCart() {
  const cartItems = ["Apples", "Oranges", "Cirese"];
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert("hello")
}
addToCartBtn.addEventListener('click', addToCart)

let fromLocalSotarge = localStorage.getItem("cartItems");

let array = JSON.parse(fromLocalSotarge)

console.log(array);