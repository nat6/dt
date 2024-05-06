import '../../global.scss';
import './script';

import Header from '../../components/header/Header';
import Promo from '../../components/promo/Promo';
import Events from '../../components/events/Events';
import EventFilters from '../../components/eventFilters/EventFilters';
import Memories from '../../components/memories/Memories';
import Sponsors from '../../components/sponsors/Sponsors';
import Articles from '../../components/articles/Articles';
import Footer from '../../components/footer/Footer';

document.querySelector('body')
  ?.insertAdjacentHTML('afterbegin', Header.draw());

document.querySelector('#innerwrapper')
  ?.insertAdjacentHTML('beforeend', Promo.draw());

document.querySelector('#innerwrapper')
  ?.insertAdjacentHTML('beforeend', Events.draw());

document.querySelector('#innerwrapper')
  ?.insertAdjacentHTML('beforeend', EventFilters.draw());

// document.querySelector('#innerwrapper')
//   ?.insertAdjacentHTML('beforeend', ParticipantsTop.draw());

document.querySelector('#innerwrapper')
  ?.insertAdjacentHTML('beforeend', Memories.draw());

document.querySelector('#innerwrapper')
  ?.insertAdjacentHTML('beforeend', Sponsors.draw());

document.querySelector('#innerwrapper')
  ?.insertAdjacentHTML('beforeend', Articles.draw());

document.querySelector('#innerwrapper')
  ?.insertAdjacentHTML('beforeend', Footer.draw());
