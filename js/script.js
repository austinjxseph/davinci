document
  .querySelector('[data-nav-element="menu"]')
  .addEventListener("click", () => {
    const navbar = document.querySelector('[data-nav-element="navbar"]');
    const currentState = navbar.getAttribute("data-nav-state");
    const newState = currentState === "open" ? "closed" : "open";

    navbar.setAttribute("data-nav-state", newState);

    document.body.style.overflow = newState === "open" ? "hidden" : "";
  });
