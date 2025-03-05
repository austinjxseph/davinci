class HeaderElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header
          data-nav-state="closed"
          data-nav-element="navbar"
          class="u-layout-vflex c-navbar"
      >
          <div class="u-layout-hflex c-navbar_inner">
              <div aria-hidden="" class="c-navbar_overlay"></div>

              <a
                  href="index.html"
                  aria-label="Go Back Home"
                  class="c-navbar_logo u-inline-block"
              >
                  <p>Austin Joseph</p>
              </a>
              <ul role="list" class="c-navbar_drawer u-list-unstyled">
                  <li class="c-navbar_links is-pr">
                      <a href="" class="c-navbar_link u-inline-block">
                          <div>Sandbox</div>
                          <img
                              src="images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-navbar_border"></div>
                      </a>
                      <a href="#" class="c-navbar_link u-inline-block">
                          <div>Gallery</div>
                          <img
                              src="images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-navbar_border"></div>
                      </a>
                      <a
                          href="about.html"
                          class="c-navbar_link u-inline-block"
                      >
                          <div>About</div>
                          <img
                              src="images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-navbar_border"></div>
                      </a>
                      <a href="#" class="c-navbar_link u-inline-block">
                          <div>Resume</div>
                          <img
                              src="images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-navbar_border"></div>
                      </a>
                  </li>
                  <li class="c-navbar_links is-sec">
                      <a href="#" class="c-navbar_link u-inline-block">
                          <div>Colophon</div>
                          <img
                              src="images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-navbar_border"></div>
                      </a>
                      <a href="#" class="c-navbar_link u-inline-block">
                          <div>Uses</div>
                          <img
                              src="images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-navbar_border"></div>
                      </a>
                      <a href="#" class="c-navbar_link u-inline-block">
                          <div>Thoughts</div>
                          <img
                              src="images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-navbar_border"></div>
                      </a>
                  </li>
                  <li class="c-navbar_links is-tert">
                      <a
                          href="#"
                          class="c-navbar_link is-marker u-inline-block"
                      >
                          <div>London, England</div>
                          <div class="u-text-secondary">[00:00]</div>
                      </a>
                  </li>
              </ul>
              <a
                  data-nav-element="menu"
                  href="#"
                  class="c-navbar_menu u-inline-block"
              >
                  <div class="c-navbar_marker"></div>
                  <div>Menu</div>
              </a>
          </div>
      </header>
    `;
  }
}

customElements.define("el-header", HeaderElement);
