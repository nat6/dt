import './footer.scss';

class Footer {
  static draw() {
    return `
      <footer class="footer">
          <div class="footer__wrapper">
            <div class="footer__block">
                <h2 class="footer__title">
                  devteam.games
                </h2>
                <a href='/' class="footer__logo">
                    DEVTEAM
                    <br>
                    about us
                </a>

                <div class="footer__social">
                  <div class="footer__icon footer__facebook"></div>
                  <div class="footer__icon footer__linkedin"></div>
                  <div class="footer__icon footer__telegram"></div>
                  <div class="footer__icon footer__instagram"></div>
                  <div class="footer__icon footer__youtube"></div>
                </div>

            </div>

            <div class="footer__block">
              <ul class="footer__nav">
                <div class="footer__column">
                    <li class="nav__item">
                      <a href="#" class="nav__link">
                      ☑
                      </a>
                    </li>

                    <h3 class="footer__subtitle">
                        Dashboards
                    </h3>

                    <li class="nav__item">
                      <a href="#" class="nav__link">
                      - Participant
                      </a>
                    </li>

                    <li class="nav__item">
                      <a href="#" class="nav__link">
                      - Sponsor
                      </a>
                    </li>

                    <li class="nav__item">
                      <a href="#" class="nav__link">
                      - App Developer
                      </a>
                    </li>
                </div>

                <div class="footer__column">
                    <h3 class="footer__subtitle">
                    Events
                    </h3>

                    <li class="nav__item">
                      <a href="#" class="nav__link">
                      - List
                      </a>
                    </li>

                    <li class="nav__item">
                      <a href="#" class="nav__link">
                      - Calendar
                      </a>
                    </li>

                    <li class="nav__item">
                      <a href="#" class="nav__link">
                      - Memories
                      </a>
                    </li>

                    <h3 class="footer__subtitle">
                    Sponsors
                    </h3>
                </div>

                <div class="footer__column">
                    <h3 class="footer__subtitle">
                    Heroes
                    </h3>

                    <li class="nav__item">
                      <a href="#" class="nav__link">
                      - List
                      </a>
                    </li>

                    <li class="nav__item">
                      <a href="#" class="nav__link">
                      - TOP
                      </a>
                    </li>
                </div>

                <div class="footer__column">
                    <h3 class="footer__subtitle">
                    Useful info
                    </h3>

                    <li class="nav__item">
                      <a href="#" class="nav__link">
                      - FAQ
                      </a>
                    </li>

                    <li class="nav__item">
                      <a href="#" class="nav__link">
                      - Articles
                      </a>
                    </li>

                    <li class="nav__item">
                      <a href="#" class="nav__link">
                      - Documentation
                      </a>
                    </li>
                </div>

              </ul>
              <div class="footer__copyright">
                <div class="copyright__row">
                    Copyright © 2024 BEHIND SOFTWARE GROUL SRL. - All rights reserved.
                </div>
                <div class="copyright__row">
                    Use of this site constitutes acceptance of our User Agreement and Privacy Policy.
                </div>
              </div>
            </div>
          </div>
      </footer>
    `;
  }
}

export default Footer;
