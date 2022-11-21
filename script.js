function removeStartigImageAnimations() {
  let images = document.querySelectorAll("img");
  [...images].map((image) => {
    image.classList.remove("startAnimation");
    image.style.opacity = 1;
  });
}

setTimeout(removeStartigImageAnimations, 2500);
