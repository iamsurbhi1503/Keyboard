document.addEventListener('keydown', event => {
    const display = document.getElementById('display');
    display.textContent = `You Pressed: ${event.key} | Keycode: ${event.keyCode}`;
});