fetch(chrome.runtime.getURL("/model.html"))
  .then((r) => r.text())
  .then((html) => {
    document.body.insertAdjacentHTML("beforeend", html);
    // not using innerHTML as it would break js event listeners of the page
  });

window.proRedirect = () => {
  window.location.href =
    "https://definetely-not-reddit.netlify.app" + window.location.pathname;
};
// href="https://definetely-not-reddit.netlify.app/"
