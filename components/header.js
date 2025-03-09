class HeaderElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const rootPath = this.getAttribute("root-path") || "/";
    this.innerHTML = `
      <header
          data-nav-state="closed"
          data-nav-element="navbar"
          class="u-layout-vflex c-navbar"
      >
          <div class="u-layout-hflex c-navbar_inner">
              <div aria-hidden="" class="c-navbar_overlay"></div>

              <a
                  href="${rootPath}index.html"
                  aria-label="Go Back Home"
                  class="c-navbar_logo u-inline-block"
              >
                  <p>Austin Joseph</p>
              </a>
              <ul role="list" class="c-navbar_drawer u-list-unstyled">
                  <li class="c-navbar_links is-pr">
                      <a href="${rootPath}" class="c-navbar_link u-inline-block">
                          <div>Sandbox</div>
                          <img
                              src="${rootPath}images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-element_border"></div>
                      </a>
                      <a href="${rootPath}#" class="c-navbar_link u-inline-block">
                          <div>Gallery</div>
                          <img
                              src="${rootPath}images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-element_border"></div>
                      </a>
                      <a
                          href="${rootPath}about.html"
                          class="c-navbar_link u-inline-block"
                      >
                          <div>About</div>
                          <img
                              src="${rootPath}images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-element_border"></div>
                      </a>
                      <a href="${rootPath}#" class="c-navbar_link u-inline-block">
                          <div>Resume</div>
                          <img
                              src="${rootPath}images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-element_border"></div>
                      </a>
                  </li>
                  <li class="c-navbar_links is-sec">
                      <a href="${rootPath}#" class="c-navbar_link u-inline-block">
                          <div>Colophon</div>
                          <img
                              src="${rootPath}images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-element_border"></div>
                      </a>
                      <a href="${rootPath}#" class="c-navbar_link u-inline-block">
                          <div>Uses</div>
                          <img
                              src="${rootPath}images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-element_border"></div>
                      </a>
                      <a href="${rootPath}#" class="c-navbar_link u-inline-block">
                          <div>Thoughts</div>
                          <img
                              src="${rootPath}images/icons/arrow.png"
                              width="20"
                              height="20"
                          />
                          <div class="c-element_border"></div>
                      </a>
                  </li>
                  <li class="c-navbar_links is-tert">
                      <a
                          href="${rootPath}#"
                          class="c-navbar_link is-marker u-inline-block"
                      >
                          <div>London, England</div>
                          <div class="u-text-secondary">[00:00]</div>
                      </a>
                  </li>
              </ul>
              <div
                  data-nav-element="menu"
                  class="c-navbar_menu u-inline-block"
              >
                  <div class="c-navbar_marker"></div>
                  <div>Menu</div>
              </div>
          </div>
      </header>
    `;
  }
}

customElements.define("el-header", HeaderElement);
