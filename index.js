// var product = {
//   title: "t-shirt",
//   description: "this is a t-shirt",
//   price: "120",
// };
var root = document.getElementById("root");
let loggedin = false;
var users = [];
var cart = [];
var product = [
  { title: "title", description: "description", price: "80", id: "1" },
  { title: "title", description: "description", price: "20", id: "2" },
  { title: "title", description: "description", price: "20", id: "3" },
  { title: "title", description: "description", price: "20", id: "4" },
  { title: "zamalek", description: "zamalek", price: "880", id: "5" },
  { title: "title", description: "description", price: "20", id: "6" },
  { title: "title", description: "description", price: "20", id: "7" },
  { title: "title", description: "description", price: "20", id: "8" },
  { title: "zamalek", description: "zamalek", price: "20", id: "9" },
];

const render_product = (data) => {
  root.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    root.innerHTML += `
        <div class="card">
          <img src="img/2.png" alt="">
          <h1>${data[i].title}</h1>
          <p>${data[i].description}</p>
          <div class="price">
            <h4>${data[i].price}<span>  EGP</span>
            </h4>
            <button onclick="add_cart('${data[i].id}')" >add to card</button>
          </div>
      </div>
        
    `;
  }
};
const show = () => {
  document.getElementById("result").classList.toggle("active");
};
//
document.getElementById("search").addEventListener("click", function () {
  root.innerHTML = "";
  let input = document.getElementById("result").value;
  for (let j = 0; j < product.length; j++) {
    if (
      product[j].title.includes(input) ||
      product[j].description.includes(input)
    ) {
      root.innerHTML += `
      <div class="card">
        <img src="img/2.png" alt="">
        <h1>${product[j].title}</h1>
        <p>${product[j].description}</p>
        <div class="price">
          <h4>${product[j].price}<span>  EGP</span>
          </h4>
          <button>add to card</button>
        </div>
    </div>

  `;
    }
  }
});
const Signup = () => {
  root.innerHTML = "";
  root.innerHTML = `<div class="form">
    <h1>Sign up now </h1>
    <input id="email" type="email" placeholder="Enter your e-mail ">
    <input id="password" type="password" placeholder="Enter your password ">
    <p><input type="checkbox" >agree to terms</p>
    <button onclick="shika()" >Signup</button>
    <hr>
    <p>Or</p>
    <button >Signup with google</button>
    <p>do u have an account ? <a href="#" onclick="Signin()" >Sign in</a></p>
</div>`;
};

const Signin = () => {
  root.innerHTML = "";
  root.innerHTML = `<div class="form">
    <h1>Sign in </h1>
    <input type="email" placeholder="Enter your e-mail ">
    <input type="password" placeholder="Enter your password ">
    <button onclick="login()">login</button>
  
</div>`;
};
const shika = () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = { email, password };
  users.push(user);
  render_product(product);
  console.log(users);
};
//
const login = () => {
  root.innerHTML = "";
  loggedin = true;
  root.innerHTML = `<p>you logged im ! </p>`;
  render_product(product);
};

const render_add = () => {
  if (loggedin === false) {
    root.innerHTML = "";
    root.innerHTML = `<h1>you must login first </h1>`;
  } else {
    root.innerHTML = `      
    <div class="add">
        <h3>Add product</h3>
        <input type="text" placeholder="titile">
        <input type="text" placeholder="description">
        <input type="text" placeholder="price">
        <button  onclick="add()" >Add</button>
    </div>`;
  }
};

const render_cart = () => {
  if (loggedin) {
    root.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
      root.innerHTML += `
        <div class="card">
          <img src="img/2.png" alt="">
          <h1>${cart[i].title}</h1>
          <p>${cart[i].description}</p>
          <div class="price">
            <h4>${cart[i].price}<span>  EGP</span>
            </h4>
            <button   >buy</button>
          </div>
      </div>
    `;
    }
  } else {
  }
};
const add_cart = (id) => {
  for (let i = 0; i < product.length; i++) {
    if (product[i].id === id) {
      cart.push(product[i]);
    }
    console.log(cart);
  }
  // root.innerHTML = "";
  // render_cart();
};
// const cart = () => {
//   document.getElementById("to_cart").addEventListener("click", function () {
//     root.innerHTML = "";
//     root.innerHTML = `
//       <div class="cart">
//   <div class="image">
//   <img src="https://i.pinimg.com/originals/01/57/d3/0157d301917541f15677dc43f31f1fcb.png" alt="">
//   </div>
//    <div class="info">
//        <h3>${title}</h3>
//        <p>${description}</p>
//        <span>${span}</span>
//        <button>buy</button>
//    </div>
// </div>
//     `;
//   });
// };
