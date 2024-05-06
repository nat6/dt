import './promo.scss';

class Promo {
  static draw() {
    return `
      <section class="promo">
        <div class="promo__wrapper">
          <div class="promo__row">
            <div class="promo__block promo__block_left">
              <div class="promo__button">
                Complete
              </div>
              <div class="promo__button">
                  Discover
              </div>
              <div class="promo__button">
                  Learn
              </div>
              <div class="promo__button">
                  More
              </div>
            </div>

            <div class="promo__block">
              <div class="promo__button">
                Recent view
              </div>
              <div class="promo__button">
                  Wishlist
              </div>
              <div class="promo__button">
                  Registered in
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default Promo;
