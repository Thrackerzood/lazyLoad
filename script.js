const images = document.querySelectorAll('img');
for (let i = 0; i < images.length; i++) {
  if (!images[i].complete) {
    images[i].classList.add('spinner');        
    images[i].addEventListener("load", remove_loader);
  }
}
function remove_loader() {
  this.classList.remove('spinner');      
};