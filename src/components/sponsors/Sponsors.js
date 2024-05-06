import './sponsors.scss';

class Sponsors {
  static draw() {
    return `
      <section class="sponsors">
        <div class="sponsors__wrapper">
          <div class="sponsors__row">
            <h2 class="section__title sponsors__title">
              sponsors
            </h2>
            <div class="sponsors__button">
                Add your own event
              </div>
          </div>
          <div class="sponsors__row">
            <div class="sponsors__item"></div>
             <div class="sponsors__item"></div>
             <div class="sponsors__item"></div>
             <div class="sponsors__item"></div>
             <div class="sponsors__item"></div>
          </div>
        </div>
      </div>
    `;
  }
}

export default Sponsors;
