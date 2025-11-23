// keep menu on the top

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');

    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');


// show up menu mobile
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});



function openPopup(id) {
  document.getElementById(id).style.display = 'block';
}

function closePopup(id) {
  document.getElementById(id).style.display = 'none';
  let descriptions = document.querySelectorAll('[id="description"]');
  descriptions.forEach(function (desc) {
    desc.style.display = 'flex';
  });


  let creatorss = document.querySelectorAll('[id="creatorss"]');
  creatorss.forEach(function (creator) {
    creator.style.display = 'none';
  });
}
function darkmode() {

  document.body.classList.toggle("dark");
}



function back() {
  let descriptions = document.querySelectorAll('[id="description"]');
  descriptions.forEach(function (desc) {
    desc.style.display = 'flex';
  });


  let creatorss = document.querySelectorAll('[id="creatorss"]');
  creatorss.forEach(function (creator) {
    creator.style.display = 'none';
  });
}

function creatorss() {

  let descriptions = document.querySelectorAll('[id="description"]');
  descriptions.forEach(function (desc) {
    desc.style.display = 'none';
  });


  let creatorss = document.querySelectorAll('[id="creatorss"]');
  creatorss.forEach(function (creator) {
    creator.style.display = 'flex';
  });
}

//  $('#videoCarousel').carousel({
//     interval: false,
//     pause: true,
//     wrap: true
//   });


