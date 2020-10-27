window.addEventListener("load", event_load, false);

function event_load (event) {
    if ((event.type == "load") && ((event.target.URL).includes("ContentContainer.aspx"))) {
        // Confirm DOM element exists and inject CSS
        if (document.URL.indexOf("ContentContainer.aspx") !== -1) {
            console.log("ContentContainer.aspx Loaded: Injecting CSS");

            const contentContainerCSS = `
                .MainTable {
                    width: 100% !important;
                }
            `;

            const style = document.createElement('style');
            style.type = 'text/css';

            // add the css to the new style tag, as a text node
            style.appendChild(document.createTextNode(contentContainerCSS));

            document.head.appendChild(style);
            // Old styling for record keeping, delete once feature set matched by CSS inject
            // $($(iframe_id_ref).contents().find('#contentContainerFrame')[0].contentWindow.document).find('.MainTable')[0].style.width = '100%';
            // $($(iframe_id_ref).contents().find('#contentContainerFrame')[0].contentWindow.document).find('#b_s89_g89s90')[0].style.tableLayout = "auto";
        }
    }
}