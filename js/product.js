let price = '';
let orders = '';
let name_seller = '';

const sellers_contain = document.querySelector('.sellers');

const img_star = '<img src="materials/img/favourite.png" class="star" />';


async function getInfo(){
    fetch('data.json')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        data.forEach(seller => { 
            const seller_contain = document.createElement('div');
            seller_contain.className = "seller";
            const profile_pic = document.createElement('span');
            profile_pic.className = 'img-seller-container';
            profile_pic.innerHTML = "<img src='materials/img/images.jpeg' alt=''>";

            const star_contain = document.createElement('span');
            star_contain.className="star_container";
            star_contain.innerHTML ='';

            const info_box = document.createElement('div');
            info_box.className = 'info';

            seller_contain.appendChild(profile_pic);
            seller_contain.appendChild(info_box);
            const review = document.createElement('div');
            review.className = 'review-stars';
            review.appendChild(star_contain);
            info_box.appendChild(review);

            console.log(seller.stars);
            for(let i = 0; i < seller.stars; i ++){
                star_contain.innerHTML += img_star;
                
            }
            info_box.innerHTML += `
            <p>price: ${seller.price}</p>
            <p>orders: <span class="markey">${seller.orders}</span></p>
            <p>seller: ${seller.name}</p>
            </div>
            <div class="action"><button class="order"><a href="product.html">Commander</a></button></div>

            `;
            sellers_contain.appendChild(seller_contain);
        })
    });
}

getInfo();



