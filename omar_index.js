// var strname ='omar'

// var strjob='engineer'

// var str= `my name is ${strname} and i am an ${strjob}`

// console.log(str);

// var product = {
//   title: "t-shirt",
//   description: "this is a t-shirt",
//   price: "120",
// };
var products = [
  { title: "title1", description: "description1", price: "10" },
  { title: "title2", description: "description2", price: "20" },
  { title: "title3", description: "description3", price: "30" },
  { title: "title4", description: "description4", price: "40" },
  { title: "title5", description: "description5", price: "50" },
  { title: "title6", description: "description6", price: "60" },
  { title: "title7", description: "description7", price: "70" },
  { title: "title8", description: "description8", price: "80" }
];


for(let i=0;i<products.length;i++){


document.getElementById('pro-root').innerHTML+=`



<div class="pro-card">
<img src="../img/products/f1.jpg" alt="">
<span>PRAND</span>
<h1>${products[i].title}</h1>
<p>${products[i].description}</p>
<div class="price"> 
   <h5>${products[i].price} <span>EGP</span></h5>
   <a href="#"><span class="material-symbols-outlined i">
    add_shopping_cart
    </span></a>
  </div>
  </div>




`


}