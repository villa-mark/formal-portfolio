import varElem from './variables.js';
let mode = "light";

function toggleTheme() {
    if (mode === "light") {
        setColors("light");
    } else {
        setColors("dark");
    }

    // Apply the colors to the elements
    varElem.domvar.bg0().css("background-color", varElem.colorvar.background_color_1);
    varElem.domvar.bg1().css("background-color", varElem.colorvar.background_color_1);
    varElem.domvar.bg2().css("background-color", varElem.colorvar.background_color);
    varElem.domvar.textElements().css("color", varElem.colorvar.font_color);
}


function setColors(theme) {
    if (theme === "light") {
        varElem.colorvar.background_color = varElem.colors.light.white;
        varElem.colorvar.background_color_1 = varElem.colors.light.blue_sapphire;
        varElem.colorvar.font_color = varElem.colors.light.pantone_blue;
    } else {
        varElem.colorvar.background_color = varElem.colors.dark.eerie_black;
        varElem.colorvar.background_color_1 = varElem.colors.dark.dark_charcoal;
        varElem.colorvar.font_color = varElem.colors.dark.chinese_silver;
    }
}

varElem.domvar.darkLightSwitch().on("click", ()=>{
    mode = mode === "light" ? "dark" : "light";
    toggleTheme();
});

$(document).ready(() => {
    toggleTheme();
});
