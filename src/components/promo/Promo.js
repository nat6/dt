import './promo.scss';

class Promo {
  static draw() {
    return `
      <section class='promo'>
        <div class='promo__wrapper'>
          <div class='promo__row'>
            <div class='promo__block promo__block_left'>
              <div class='promo__button'>
                Complete
                <span class='promo__buttonGlitch'>
                  Complete
                </span>
              </div>

              <div class='promo__button'>
                Discover
                <span class='promo__buttonGlitch'>
                  Discover
                </span>
              </div>

              <div class='promo__button'>
                Learn
                <span class='promo__buttonGlitch'>
                  Learn
                </span>
              </div>

              <div class='promo__button'>
                More
                <span class='promo__buttonGlitch'>
                  More
                </span>
              </div>
            </div>

            <div class='promo__block'>
              <div class='promo__button'>
                Recent view
                  <span class='promo__buttonGlitch'>
                    Recent view
                  </span>
              </div>
              <div class='promo__button'>
                Wishlist
                <span class='promo__buttonGlitch'>
                  Wishlist
                </span>
              </div>
              <div class='promo__button'>
                Registered in
                <span class='promo__buttonGlitch'>
                  Registered in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default Promo;
