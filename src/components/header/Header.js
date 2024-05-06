import './header.scss';

class Header {
  static draw() {
    return `
      <header class="header">

      <div id="header1">
        <div class="tech">
          DevTeam
        </div>
      </div>

      <div id="header2">
  <div class="blurb">
<!--    welcome to the x7 space station, 3131.-->
  </div>
  <div class="icon">
    <a href="#wrapper">


<!--      <i class="ri-fingerprint-line"></i>-->
    </a>
  </div>
  <div class="links">
    <a href="/">Events</a>
    <a href="/">Heroes</a>
    <a href="/">Sponsors</a>
    <a href="/">Info</a>
  </div>
</div>

<div id="wrapper">
  <div id="user-bar">
    <div class="left">
        <div class="header__icon header__menu"></div>
        <div class="input__wrapper">
            <input class="input__element" name="query" placeholder="Search..." type="search">
            <div class="input__icon"></div>
        </div>
    </div>
        <div class="logo"></div>
<!--    <a class="name" href="/">longfirst andalastname</a>-->
    <div class="right">
            <div class="header__icon header__location"></div>
            <div class="header__icon header__messages"></div>
            <div class="header__icon header__notifications"></div>
            <div class="header__icon header__user"></div>
    </div>
  </div>

  <div class="tri-left"></div>
  <div class="tri-right"></div>


  <div id="innerwrapper">

  </div>

<!--   <div id="jump">-->
<!--    <a href="javascript:scroll(0,0);" title="scroll to top">-->
<!--      <i class="ri-arrow-up-s-line"></i>-->
<!--    </a>-->
<!--    <div class="sep"></div>-->
<!--    <a href="#bottom" title="scroll to bottom">-->
<!--      <i class="ri-arrow-down-s-line"></i>-->
<!--    </a>-->
<!--  </div>-->
<!--</div>-->
<!--<div id="bottom"></div>-->


        <div class="header__wrapper">
          <div class="header__block">

          </div>

          <div class="header__block">
            <a href='/' class="header__logo">
                DEVTEAM
            </a>
          </div>

          <div class="header__block">

          </div>
        </div>
<!--        <div class="header__wrapper header__buttons">-->
<!--          <div class="header__block">-->
<!--            <div class="header__button">-->
<!--              Events-->
<!--            </div>-->
<!--            <div class="header__button">-->
<!--                Heroes-->
<!--            </div>-->
<!--            <div class="header__button">-->
<!--                Sponsors-->
<!--            </div>-->
<!--            <div class="header__button">-->
<!--                Info-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </header>
    `;
  }
}

export default Header;
