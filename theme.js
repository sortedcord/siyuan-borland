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

    let isFocused = document.hasFocus();
    const getBorderColor = () => (isFocused ? "#ffff4A" : "#000064");

    const applyThemeBorder = () => {
        const borderColor = getBorderColor();

        const statusElement = document.getElementById("status");
        if (statusElement) {
            // keep original styling
            setStyles(statusElement, { backgroundColor: "black", color: "white" });
            setBorder(statusElement, { color: borderColor, sides: ["Bottom", "Right", "Left"] });
        }

        const outerframeElement = document.getElementById("toolbar");
        if (outerframeElement) {
            setStyles(outerframeElement, { backgroundColor: "#000080" });
            setBorder(outerframeElement, { color: borderColor, sides: ["Top", "Left", "Right"] });
        }

        const dockleftElement = document.getElementById("dockLeft");
        if (dockleftElement) {
            setStyles(dockleftElement, { backgroundColor: "#000080" });
            setBorder(dockleftElement, { color: borderColor, sides: ["Left"] });
        }

        const dockrightElement = document.getElementById("dockRight");
        if (dockrightElement) {
            setStyles(dockrightElement, { backgroundColor: "#000080" });
            setBorder(dockrightElement, { color: borderColor, sides: ["Right"] });
        }
    };

    window.addEventListener("focus", () => {
        isFocused = true;
        applyThemeBorder();
    });

    window.addEventListener("blur", () => {
        isFocused = false;
        applyThemeBorder();
    });

    applyThemeBorder();

    const windowButtons = document.getElementById("windowControls");
    if (windowButtons) {
        windowButtons.style.display = "none";
    }
})();
