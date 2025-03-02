document.addEventListener('DOMContentLoaded', function () {
  const home = document.querySelector('[href="index.html"]');
  const about = document.querySelector('[href="about.html"]');

  home.addEventListener('click', function (event) {
    console.log('home clicked');
  });

  about.addEventListener('click', function (event) {
    console.log('about clicked');
  });
});
