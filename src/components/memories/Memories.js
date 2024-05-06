import './memories.scss';

class Memories {
  static draw() {
    return `
      <section class="memories">
        <div class="memories__wrapper">
          <h2 class="section__title memories__title">
            Memories
          </h2>
          <div class="memories__row">
            <div class="memories__item">
                <div class="memories__img"></div>
                <div class="memories__subtitle">
Event name [dates]
                </div>
                <div class="memories__sponsor">
                sponsor name
                </div>
            </div>
            <div class="memories__item">
                <div class="memories__img"></div>
                <div class="memories__subtitle">
Event name [dates]
                </div>
                <div class="memories__sponsor">
sponsor name
                </div>
            </div>
            <div class="memories__item">
                <div class="memories__img"></div>
                <div class="memories__subtitle">
Article title [date]
                </div>
                <div class="memories__sponsor">
Description with some text...
                </div>
            </div>
            <div class="memories__item">
                <div class="memories__img"></div>
                <div class="memories__subtitle">
Event name [dates]
                </div>
                <div class="memories__sponsor">
sponsor name
                </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default Memories;
