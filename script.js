const wrapper = document.querySelector('.wrapper');

function setWrapperContentHeight() {
    const footerHeight = document.querySelector('footer').offsetHeight;
    const headerHeight = document.querySelector('header').offsetHeight;
    const wrapperContent = document.querySelector('.wrapper__content');
    const windowHeight = window.innerHeight;
    const newHeight = windowHeight - footerHeight - headerHeight;
    wrapperContent.style.height = `${newHeight}px`;
}

window.onload = setWrapperContentHeight;
window.onresize = setWrapperContentHeight;

