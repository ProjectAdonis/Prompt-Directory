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

// Selected status of filter buttons -- mobile nav bar
const buttonFilters = document.querySelectorAll('.mbutton-filter');

// Add event listener to each button-filter
buttonFilters.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the 'selected' class from all button-filters
    buttonFilters.forEach(btn => btn.classList.remove('selected'));
    // Add the 'selected' class to the clicked button-filter
    button.classList.add('selected');
  });
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

let currentFilter = 'all'; // Variable to keep track of the currently selected filter

// Desktop Nav

const filterBtns = document.querySelectorAll('.button-filter');
const pcards = document.querySelector('.pcards'); 
const ncards = document.querySelector('.ncards');
const ncontent = document.querySelector('.ncontent');

filterBtns.forEach(btn => {
  btn.addEventListener('click', filterCards);
});

function filterCards() {
  currentFilter = this.dataset.filter; // Update the currentFilter variable

  if (currentFilter === 'all') {
    pcards.style.display = 'flex';
    ncards.style.display = 'grid';
  }

  if (currentFilter === 'positive') {
    pcards.style.display = 'flex';
    ncards.style.display = 'none';
  }

  if (currentFilter === 'negative') {
    pcards.style.display = 'none';
    ncards.style.display = 'grid';
  }

  // After applying the filter, also perform a search if there's a search query
  const searchQuery = searchInputDesktopNav.value;
  filterResults(searchQuery);
}


// Mobile Nav 

const mobileFilterBtns = document.querySelectorAll('.mbutton-filter');

mobileFilterBtns.forEach(btn => {
  btn.addEventListener('click', mfilterCards);
});

function mfilterCards() {
  currentFilter = this.dataset.filter; // Update the currentFilter variable

  if (currentFilter === 'all') {
    pcards.style.display = 'flex';
    ncards.style.display = 'grid';
  }

  if (currentFilter === 'positive') {
    pcards.style.display = 'flex';
    ncards.style.display = 'none';
  }

  if (currentFilter === 'negative') {
    pcards.style.display = 'none';
    ncards.style.display = 'grid';
  }

  // After applying the filter, also perform a search if there's a search query
  const searchQuery = searchInputMobileNav.value;
  filterResults(searchQuery);
}

// -------------------------------------------------
// Search system 
// -------------------------------------------------

// Function to update the grid layout based on the number of visible cards
function updateGridLayout() {
  const visibleCards = document.querySelectorAll(".card[style='display: grid;'], .ncard[style='display: grid;']");
  const numVisibleCards = visibleCards.length;
  const gridColumns = numVisibleCards >= 3 ? 4 : 2; // Use 4 columns if 3 or more cards are visible, otherwise use 2 columns
  cardsContainer.style.setProperty('grid-template-columns', `repeat(${gridColumns}, minmax(0, 1fr))`);
}

// Function to filter the cards based on the search query
function filterResults(searchQuery = "") {
  const query = searchQuery.toLowerCase().trim();
  let atLeastOneCardMatches = false;

  cards.forEach((card) => {
    const title = card.querySelector(".card-title h2")?.innerText || "";
    const smallTitle = card.querySelector(".card-title small")?.innerText || "";
    const description = card.querySelector(".card-description")?.innerText || "";
    const nTitle = card.querySelector(".ntitle")?.innerText || "";
    const nCopy = card.querySelector(".ncopy")?.innerText || "";

    const cardMatches =
      title.toLowerCase().includes(query) ||
      smallTitle.toLowerCase().includes(query) ||
      description.toLowerCase().includes(query) ||
      nTitle.toLowerCase().includes(query) ||
      nCopy.toLowerCase().includes(query);
    (currentFilter === "all" ||
      (currentFilter === "positive" && cardMatches) ||
      (currentFilter === "negative" && !cardMatches)); // Handle the negative filter here

    card.style.display = cardMatches ? "grid" : "none";

    if (cardMatches) {
      atLeastOneCardMatches = true;
    }
  });

  // Update the grid layout after filtering
  updateGridLayout();
}

// Get all the cards and the pcards container
const cardsContainer = document.querySelector(".pcards");
const cards = document.querySelectorAll(".card, .ncard");

// Attach event listener to the search input in the desktop nav bar
const searchInputDesktopNav = document.getElementById("searchInput");
searchInputDesktopNav.addEventListener("input", (event) => {
  const searchQuery = event.target.value;
  filterResults(searchQuery);
});

// Attach event listener to the search input in the mobile nav bar
const searchInputMobileNav = document.querySelector('label input[type="text"]');
searchInputMobileNav.addEventListener("input", (event) => {
  const searchQuery = event.target.value;
  filterResults(searchQuery);
});

// Close the menu when Enter key is pressed in the search input
const menuCheckbox = document.querySelector('input[aria-label="checkbox-menu"]');
searchInputMobileNav.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    menuCheckbox.checked = false; // Uncheck the checkbox to close the menu
  }
});

// Call the updateGridLayout function on page load to set the initial layout
window.addEventListener("load", updateGridLayout);
