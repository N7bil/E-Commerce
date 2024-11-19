// open & colse cart

let cart =  document.querySelector('.cart')

function openCart() {
    cart.classList.add('active')
}
function closeCart() {
    cart.classList.remove('active')
}

// open & colse menu

let menu =  document.querySelector('#menu')

function open_menu() {
    menu.classList.add('active')
}
function close_menu() {
    menu.classList.remove('active')
}
// back-to-top
document.addEventListener("DOMContentLoaded", function () {
    let back_top = document.querySelector('.back');  
    if (back_top) {
        back_top.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

// add to cart

// function checkLogedIn(){
//     if(localStorage.getItem('username')){
//         console.log("yessssss")
//     }else{
//         window.location = "login.html"
//     }
// }   

// ///////////////////////////add to cart\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/\\/\/\/\/\/

var allProduct    
var item_in_cart = document.querySelector(".item-in-cart")
let product_cart = []

function addToCart(id , btn){
    product_cart.push(allProduct[id])
    btn.classList.add("active")
    
    getCartItems()
}

let Count_item = document.querySelector(".count")
let price_cart = document.querySelector(".price-cart")
let conut_item_cart = document.querySelector(".conut_item_cart")
let price_cart_total = document.querySelector("#price_cart_total")
function getCartItems(){
    let total_price = 0
    let items_c = ""
    for (let i = 0; i < product_cart.length; i++) {
       items_c += `
        <div class="item-cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="content-cart">
                    <h4>${product_cart[i].name} </h4>
                    <p class="price_cart">$${product_cart[i].price}</p>
                </div>
                <button onclick = "removeFromCart(${i})" class="delete-item"><i class="fa-solid fa-trash-can"></i></button>
            </div>
       `
       total_price += product_cart[i].price
    }
    item_in_cart.innerHTML = items_c
    price_cart .innerHTML ="$"+ total_price
    Count_item.innerHTML = product_cart.length

    conut_item_cart.innerHTML = `(${product_cart.length}    item in cart)`
    price_cart_total.innerHTML = "$"+ total_price
} 
function removeFromCart(index){
    product_cart.splice(index,1)
    getCartItems()
}   


// ///////////item-img\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let big_img = document.getElementById("bigImg")

function ChanegItemImg(img){
    big_img.src = img
}