

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