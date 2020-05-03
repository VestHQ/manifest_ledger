const menu = document.getElementById('manifest-nav-toggle')
const menuOpen = document.getElementById('manifest-nav')
const navigation = document.querySelector('nav')

menu.addEventListener('click', () => {
    if (menuOpen.classList.contains('nav-open') !== true) {
        menuOpen.classList.add('nav-open');
        menu.classList.add('close-menu');
        navigation.classList.add('fullscreen')
    } else {
        menuOpen.classList.remove('nav-open');
        menu.classList.remove('close-menu');
        navigation.classList.remove('fullscreen')
    }
});