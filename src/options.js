function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
      colour: document.querySelector("#colour").value
    });
  }

function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector("#colour").value = result.colour || "blue";
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting_colour = browser.storage.local.get("colour");
    getting_colour.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);