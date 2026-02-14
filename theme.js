window.destroyTheme = () => {
    const statusElement = document.getElementById("status");
    if (statusElement) {
        statusElement.style.backgroundColor = "";
        // (optional) if you later add more styling, consider clearing via statusElement.removeAttribute("style")
    }
}

(function () {
    const setStyles = (el, styles) => {
        Object.assign(el.style, styles);
    };

    const setBorder = (el, { color = "#ffff4A", width = "5px", style = "solid", sides = ["Top", "Right", "Bottom", "Left"] } = {}) => {
        for (const side of sides) {
            el.style[`border${side}Style`] = style;
            el.style[`border${side}Color`] = color;
            el.style[`border${side}Width`] = width;
        }
    };

    const statusElement = document.getElementById("status");
    if (statusElement) {
        setStyles(statusElement, {
            backgroundColor: "black",
            color: "white",
        });
        setBorder(statusElement, { sides: ["Bottom", "Right", "Left"] });
    }

    const outerframeElement = document.getElementById("toolbar");
    if (outerframeElement) {
        setStyles(outerframeElement, { backgroundColor: "#000080" });
        setBorder(outerframeElement, { sides: ["Top", "Left", "Right"] });
    }

    const dockleftElement = document.getElementById("dockLeft");
    if (dockleftElement) {
        setStyles(dockleftElement, { backgroundColor: "#000080" });
        setBorder(dockleftElement, { sides: ["Left"] });
    }

    const dockrightElement = document.getElementById("dockRight");
    if (dockrightElement) {
        setStyles(dockrightElement, { backgroundColor: "#000080" });
        setBorder(dockrightElement, { sides: ["Right"] });
    }
})();
