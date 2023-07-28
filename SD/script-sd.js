// -------------------------------------------------
// Nav Bar
// -------------------------------------------------

let selectedItem = null;

// Get navigation and filter items
const navItems = document.querySelectorAll('a.button');
const filterItems = document.querySelectorAll('a.button-filter');

// Explicitly select ALL filter on init
const allFilter = document.querySelector('a.button-filter[data-filter="all"]');
allFilter.classList.add('selected');
let selectedFilter = allFilter;

// Add event listeners
navItems.forEach(item => {
  item.addEventListener('click', selectNavItem); 
});

filterItems.forEach(item => {
  item.addEventListener('click', selectFilter);
});

function selectNavItem() {
  if (this === selectedItem) return;
  
  this.classList.add('selected');
  selectedItem = this;
}

function selectFilter() {
  if (this === selectedFilter) return;

  if (selectedFilter) {
    selectedFilter.classList.remove('selected');
  }

  this.classList.add('selected');
  selectedFilter = this;
  
  // Unselect nav item if selected
  if (selectedItem) {
    selectedItem.classList.remove('selected');
    selectedItem = null; 
  }
}

// Search button logic
const searchBtn = document.getElementById('searchButton');
const searchInput = searchBtn.querySelector('input.search');

searchBtn.addEventListener('click', e => {
  e.preventDefault();
  searchInput.focus(); 
});


// -------------------------------------------------
// Positive cards system
// -------------------------------------------------


$(document).ready(function(){
var zindex = 100;

$("div.card").click(function(e){
	e.preventDefault();
	
	var isShowing = false;

	if ($(this).hasClass("show")) {
	isShowing = true;
	}

	if ($("div.pcards").hasClass("showing")) {
	$("div.card.show")
		.removeClass("show");

	if (isShowing) {
		$("div.pcards")
		.removeClass("showing");
	} else {
		$(this)
		.css({zIndex: zindex})
		.addClass("show");
	}

	zindex++;
	} else {
	$("div.pcards")
		.addClass("showing");
	$(this)
		.css({zIndex: zindex})
		.addClass("show");

	zindex++;
	}   
});
});



// -------------------------------------------------
// Copy buttons pcards
// -------------------------------------------------


function copyDescription(button) {
  // Get the parent element (.card) of the clicked button
  var cardElement = button.closest('.card');

  // Get the card description text from the .card-description element within the same .card
  var descriptionToCopy = cardElement.querySelector('.card-description').innerText;

  // Change the text of the clicked button to "Copied!"
  button.innerText = "Copied!";

  // Copy the description text to the clipboard
  copyToClipboard(descriptionToCopy);

  // Set a timeout to revert the button text to "Copy" after a brief delay (e.g., 2 seconds)
  setTimeout(function() {
    button.innerText = "Copy";
  }, 2000);
}

function copyToClipboard(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

// -------------------------------------------------
// Copy buttons ncards
// -------------------------------------------------

function copyText(button) {
  // Get the parent element (.ncontent) of the clicked button
  var contentElement = button.parentElement;

  // Get the text from the <p> element within the same .ncontent
  var textToCopy = contentElement.querySelector('.ncopy').innerText;

  // Change the text of the clicked button to "Copied!"
  button.innerText = "Copied!";

  // Copy the text to the clipboard
  copyToClipboard(textToCopy);

  // Set a timeout to revert the button text to "Copy" after a brief delay (e.g., 2 seconds)
  setTimeout(function() {
    button.innerText = "Copy";
  }, 2000);
}

function copyToClipboard(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}



// -------------------------------------------------
// Filter system
// -------------------------------------------------

// Desktop Nav

const filterBtns = document.querySelectorAll('.button-filter');
const pcards = document.querySelector('.pcards'); 
const ncards = document.querySelector('.ncards');

filterBtns.forEach(btn => {
  btn.addEventListener('click', filterCards);
});

function filterCards() {
  if (this.dataset.filter === 'all') {
    pcards.style.display = 'flex';
    ncards.style.display = 'grid';
  }

  if (this.dataset.filter === 'positive') {
    pcards.style.display = 'flex';
    ncards.style.display = 'none';
  }

  if (this.dataset.filter === 'negative') {
    pcards.style.display = 'none'; 
    ncards.style.display = 'grid';
  }
}

// Mobile Nav 

const mobileFilterBtns = document.querySelectorAll('.mbutton-filter');

mobileFilterBtns.forEach(btn => {
  btn.addEventListener('click', mfilterCards);
});

function mfilterCards() {
  if (this.dataset.filter === 'all') {
    pcards.style.display = 'flex';
    ncards.style.display = 'grid';
  }

  if (this.dataset.filter === 'positive') {
    pcards.style.display = 'flex';
    ncards.style.display = 'none';
  }

  if (this.dataset.filter === 'negative') {
    pcards.style.display = 'none'; 
    ncards.style.display = 'grid';
  }
}

// -------------------------------------------------
// Search system 
// -------------------------------------------------


// Get search inputs
function init() {
  document.addEventListener('DOMContentLoaded', () => {
    const searchInputDesktop = document.querySelector('.desktop .search'); 
    const searchInputMobile = document.querySelector('.mobile .search');

    // Add input listeners  
    searchInputDesktop.addEventListener('input', filterCards);
    searchInputMobile.addEventListener('input', filterCards);

    function filterCards(e) {

      const query = e.target.value.toLowerCase();

      // Loop through all cards
      const allCards = document.querySelectorAll('.card, .ncard');
      allCards.forEach(card => {

        // Get card text
        let cardText = card.textContent.toLowerCase();

        // Hide non-matching cards
        if (cardText.indexOf(query) === -1) {
          card.style.display = 'none';
        } else {
          card.style.display = 'block'; 
        }

      });
    }
  });

}

init();
