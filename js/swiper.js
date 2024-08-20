var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



//   function scrollToFooter() {
//     const footer = document.getElementById('footer');
//     footer.scrollIntoView({ behavior: 'smooth' });
// }

// // Add event listener to the button
// document.getElementById('scrollButton').addEventListener('click', scrollToFooter);