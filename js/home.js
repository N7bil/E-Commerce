fetch('js/items.json')
                .then(response => response.json())
                .then(data =>{
                    const swiper_items_sale =document.getElementById('swiper_items_sale')
                    const other_product =document.getElementById('other-product')
                    const other_product2 =document.getElementById('other-product-2')

                    allProduct = data 

                    data.forEach(product => {
                        if(product.old_price){
                            swiper_items_sale.innerHTML +=`
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


                    data.forEach(product => {
                        if(product.old_price){
                            other_product.innerHTML +=`
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


                    data.forEach(product => {
                        if(product.old_price){
                            other_product2.innerHTML +=`
                                <div class="product swiper-slide">
                                    <div class="icons">
                                        <span  onclick="addToCart(${product.id }, this)" id="addCart"><i class="fa-solid fa-cart-plus"></i></span>
                                        <span><i class="fa-solid fa-heart"></i></span>
                                        <span><a target="_blank" href="item.html"><i class="fa-solid fa-circle-info"></i></a></span>
                                    </div>
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