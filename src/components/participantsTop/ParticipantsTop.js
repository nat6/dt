import './participantsTop.scss';

class ParticipantsTop {
  static draw() {
    return `
      <section class="participantsTop">
        <div class="participantsTop__wrapper">
          <h2 class="section__title participantsTop__title">
            Participants TOP
          </h2>
          <div class="participantsTop__row">
            <div class="participantsTop__rank">
                individual participants
            </div>
            <div class="participantsTop__rank">
                teams
            </div>
            <div class="participantsTop__rank">
                organizations
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default ParticipantsTop;
