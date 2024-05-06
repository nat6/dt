import './articles.scss';

class Articles {
  static draw() {
    return `
      <section class="articles">
        <div class="articles__wrapper">
          <h2 class="section__title articles__title">
            articles & docs & FAQ
          </h2>
          <div class="articles__row">
            <div class="articles__item">
                <div class="articles__img"></div>
                <div class="articles__subtitle">
                    Article title [date]
                </div>
                <div class="articles__description">
                    Description with some text...
                </div>
            </div>
                        <div class="articles__item">
                <div class="articles__img"></div>
                <div class="articles__subtitle">
                    Article title [date]
                </div>
                <div class="articles__description">
                    Description with some text...
                </div>
            </div>
            <div class="articles__item">
                <div class="articles__img"></div>
                <div class="articles__subtitle">
                    Article title [date]
                </div>
                <div class="articles__description">
                    Description with some text...
                </div>
            </div>
            <div class="articles__item">
                <div class="articles__img"></div>
                <div class="articles__subtitle">
                    Article title [date]
                </div>
                <div class="articles__description">
                    Description with some text...
                </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default Articles;
