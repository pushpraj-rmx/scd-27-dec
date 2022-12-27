// get a reference to the hide button and the sticky element
const hideButton = document.querySelector('#hide-button');
const sticky = document.querySelector('.sticky');

// add a click event listener to the hide button
hideButton.addEventListener('click', () => {
  // toggle the visibility of the sticky element
  sticky.style.display = sticky.style.display === 'none' ? 'block' : 'none';
});
