class MenuCard {
  constructor(src, alt, title, price, parentSelector) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.price = price;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = `
    <div class="card">
    <img class="photo" src=${this.src} width="200" height="150" alt=${this.alt}>
    <p class="title">${this.title}</p>
    <div class="price_wrap">
      <span class="price">${this.price}</span>
      <p>$</p>
    </div>
    <button class="addBasket"> Добавить в корзину</button>
    </div>`;

    this.parent.append(element)
  }
}

new MenuCard(
  "https://www.gastronom.ru/binfiles/images/20151029/bddcbbce.jpg",
  "banana",
  'Банан',
  10,
  ".container .cards",
).render();
new MenuCard(
  "https://st.depositphotos.com/1003272/1632/i/600/depositphotos_16322913-stock-photo-red-apple.jpg",
  "apple",
  'Яблоко',
  8,
  ".container .cards",
).render();
new MenuCard(
  "https://thailand-news.ru/sites/default/files/storage/images/2016-20/papaya-thaiskii-frukt.jpg",
  "papaya",
  'Папайа',
  10,
  ".container .cards",
).render();

var products = [];

const btnBasket = document.querySelectorAll('.addBasket');
const quanity = document.querySelector('.quantity');

btnBasket.forEach(e => e.onclick = function (es) {

  const photoSrc = es.target.parentNode.querySelector('.photo').src;
  const photoAlt = es.target.parentNode.querySelector('.photo').alt;
  const price = es.target.parentNode.querySelector('.price').innerText;
  const title = es.target.parentNode.querySelector('.title').innerText;

  const product = {
    photoSrc,
    photoAlt,
    price,
    title,
  };

  products.push(product);

  console.log(products);

  var recProducts = JSON.stringify(products);

  localStorage.setItem("products", recProducts);
});
