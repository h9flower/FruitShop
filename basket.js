let products = JSON.parse(localStorage.getItem('products'));

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

products.forEach(e => (
  new MenuCard(
    e.photoSrc,
    e.photoAlt,
    e.title,
    e.price,
    ".container .cards",
  ).render()
))
