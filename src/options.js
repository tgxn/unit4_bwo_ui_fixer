function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
      ubw_url: document.querySelector("#ubw_url").value
    });
  }

function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector("#ubw_url").value = result.ubw_url || "https://www.google.com.au";
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.local.get("ubw_url");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);