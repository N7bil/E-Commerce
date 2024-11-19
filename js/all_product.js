fetch('js/items.json')
                .then(response => response.json())
                .then(data =>{
                    const swiper_items_sale =document.getElementById('products_div')

                    allProduct = data 

                    data.forEach(product => {
                        if(product.old_price){
                            products_div.innerHTML +=`
                                <div class="product swiper-slide">
                                    <div class="icons">
                                        <span  onclick="addToCart(${product.id }, this)" id="addCart"><i class="fa-solid fa-cart-plus"></i></span>
                                        <span><i class="fa-solid fa-heart"></i></span>
                                        <span><a target="_blank" href="item.html"><i class="fa-solid fa-circle-info"></i></a></span>
                                    </div>
                                <span class="sale-present">%10</span>
                                <div class="img-product">
                                    <img src="${product.img}" alt="">
                                    <img class="img-hover" src="${product.img_hover}" alt="">
                                </div>
                                <h3 class="name-product"><a href="#">${product.name}</a></h3>
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div class="price">
                                    <p><span>$${product.price}</span></p>
                                    <p class="old-price">$${product.old_price}</p>
                                </div>  
                                </div>   
                            `
                        }
                        
                    });
                })


// ////////////////open&close filter\\\\\\\\\\\\\\\\\\\\\\\\\\

let filter =  document.querySelector('.filter')

function open_close_filter() {
    filter.classList.toggle('active')
}

