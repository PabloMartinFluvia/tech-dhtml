function format() {
    const style = document.getElementById(`box`).style;
    [
        `width`,
        `height`,
        `padding`,
        `margin`,
        `border-width`,
        `outline-width`].map(property => {
            style[property] = parseInt(document.getElementById(property).value, 10) + `px`;
        });
    [
        `background-color`,
        `border-style`,
        `border-color`,
        `outline-style`,
        `outline-color`].map(property => {
            style[property] = document.getElementById(property).value;
        });
}