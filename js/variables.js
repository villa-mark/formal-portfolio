// ********** Color Variables **********  

const colors = {
    light: {
        white: "#FFFFFF",
        blue_sapphire: "#024983",
        pantone_blue: "#0268bb"
    },
    dark: {
        eerie_black: "#121212",
        dark_charcoal: "#2e2e2e",
        chinese_silver: "#E0E0E0"
    }
};

const domvar = {
    // Background DOM 
    bg0: () => $(".main_background_container"),
    bg1: () => $("#element_background1"),
    bg2: () => $("#element_background2"),

    // Switch DOM 
    darkLightSwitch: () => $("#switch_dark_light"),
    circle: () => $("#circle"),

    // Text DOM 
    textElements: () => $("h3, h2, p, span")
};

const colorvar = {
    background_color: "",
    background_color_1: "",
    font_color: ""
}


export default {domvar, colors, colorvar};