function createCardTheBestOfWeek(
  productImage,
  nameOfProduct,
  classOfProduct,
  starsAvaliation
) {
  return ` <div class="theBestOfWeekCards">
    <div class="imageWine">
    <img src="assets/the-best-of-week/${productImage}.png" alt="" />
    </div>
    
    <div class="theBestOfWeekText">
    <h3>${nameOfProduct}</h3>
    <p>${classOfProduct}</p>
    <div class="starsAvaliation">
    <img src="assets/the-best-of-week/${starsAvaliation}.svg" alt="" />
    </div>
    <button>Comprar</button>
    </div>
    </div>
    `;
}

function createCardCustomerOffers(image, nameOfProduct, classOfProduct, starsAvaliation) {
  return `
    <div class="customerOffersCards">
    <div class="imageWine">
      <img src="assets/customer-offers/${image}.png" alt="" />
    </div>

    <div class="customerOffersText">
      <h3>${nameOfProduct}</h3>
      <p>${classOfProduct}</p>
      <div class="starsAvaliation">
        <img src="assets/customer-offers/${starsAvaliation}.svg" alt="" />
      </div>
      <button>Comprar</button>
    </div>
  </div>
    `;
}

document.querySelector("section#theBestOfWeek").innerHTML =
  createCardTheBestOfWeek(
    "wine-card",
    "Casillero del Diablo Cabernet",
    "Sauvignon/Malbec 2018",
    "stars"
  ) +
  createCardTheBestOfWeek(
    "wine-card",
    "Casillero del Diablo Cabernet",
    "Sauvignon/Malbec 2018",
    "stars"
  ) +
  createCardTheBestOfWeek(
    "wine-card",
    "Casillero del Diablo Cabernet",
    "Sauvignon/Malbec 2018",
    "stars"
  );

document.querySelector("section.customerOffers").innerHTML =
  createCardCustomerOffers(
    "customer-offers-wine",
    "Casillero del Diablo Cabernet",
    "Sauvignon/Malbec 2018",
    "stars"
  ) +
  createCardCustomerOffers(
    "customer-offers-wine",
    "Casillero del Diablo Cabernet",
    "Sauvignon/Malbec 2018",
    "stars"
  ) +
  createCardCustomerOffers(
    "customer-offers-wine",
    "Casillero del Diablo Cabernet",
    "Sauvignon/Malbec 2018",
    "stars"
  );
