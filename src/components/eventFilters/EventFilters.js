import './eventFilters.scss';

class EventFilters {
  static draw() {
    return `
      <section class="eventFilters">
        <div class="eventFilters__wrapper">
          <h2 class="section__title eventFilters__title">
            Find event
          </h2>
          <div class="eventFilters__row">
            <div class="eventFilters__filter">
            geo
            </div>
            <div class="eventFilters__filter">
participant type
            </div>
            <div class="eventFilters__filter">
event type
            </div>
            <div class="eventFilters__filter">
status
            </div>
            <div class="eventFilters__filter">
sponsor
            </div>
            <div class="eventFilters__filter">
tags and description
            </div>
            <div class="eventFilters__filter">
participation fee
            </div>
            <div class="eventFilters__filter">
dates
            </div>
            <div class="eventFilters__button">
                  Search
              </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default EventFilters;
