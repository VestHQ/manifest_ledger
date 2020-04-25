const menu = document.getElementById('manifest-nav-toggle')

menu.addEventListener('click', () => {
    console.log('click')
    if (document.getElementById('manifest-nav').classList.contains('nav-open') !== true) {
        document.getElementById('manifest-nav').classList.add('nav-open');
        this.classList.add('close-menu');
    } else {
        document.getElementById('manifest-nav').classList.remove('nav-open');
        this.classList.remove('close-menu');
    }
});