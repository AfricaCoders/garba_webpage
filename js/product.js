let price = '';
let orders = '';
let name_seller = '';

const sellers_contain = document.querySelector('.sellers');
const review_contain = document.querySelector('.review-stars');
const inner_stars = document.createElement('span');

async function getInfo(){
    fetch('data.json')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        data.forEach(seller => { 
            console.log(seller.stars);
            for(let i = 0; i < seller.stars; i ++){
                inner_stars.innerText += `<span><img src="materials/img/favourite.png"  class="star" alt="" srcset=""></span>`;
                console.log('yes');     
            }
            console.log(inner_stars);

            sellers_contain.innerHTML += `
            <div class="seller">
                <span class="img-seller-container">
                    <img  src="materials/img/images.jpeg" alt="">
                </span>
                <div class="info">
                    <div class="review-stars">
                        <span><p class="number-star">${seller.stars}</p> <img src="materials/img/favourite.png"  class="star" alt="" srcset=""></span>
                    </div>
                    <!-- fetch data from data.json -->
                    <p>price: ${seller.price}</p>
                    <p>orders: <span class="markey">${seller.orders}</span></p>
                    <p>seller: ${seller.name}</p>
                </div>
                <div class="action"><button class="order"><a href="product.html">Commander</a></button></div>
            </div>
            `;

        })
    });
}

getInfo();



