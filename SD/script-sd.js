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

// Get the search button
const searchBtn = document.getElementById('searchButton');

// Add event listeners
navItems.forEach(item => {
	item.addEventListener('click', selectNavItem);
});

filterItems.forEach(item => {
	item.addEventListener('click', selectFilter);
});

function selectNavItem() {
	// Unselect search button if home clicked
	if (this.classList.contains('selected')) {
		searchBtn.classList.remove('selected');
	}

	if (this === selectedItem) {
		this.classList.remove('selected');
		selectedItem = null;
	} else {
		this.classList.add('selected');
		if (selectedItem) {
			selectedItem.classList.remove('selected');
		}
		selectedItem = this;
	}
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
const searchInput = searchBtn.querySelector('input.search');

searchBtn.addEventListener('click', e => {
	e.preventDefault();
	searchInput.focus();
});


// Home button delay
document.getElementById("delayButton").addEventListener("click", function (event) {
	event.preventDefault();
	this.disabled = true;
	setTimeout(() => {
	  window.open(this.href, "_blank");
	  this.disabled = false;
	}, 0);
  });
  
  // MOBILE NAV BAR -----------------

// Selected status of filter buttons
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

// Explicitly select ALL filter on init
const allmFilter = document.querySelector('.mbutton-filter[data-filter="all"]');
allmFilter.classList.add('selected');
let mselectedFilter = allmFilter;
  
// -------------------------------------------------
// Positive cards system
// -------------------------------------------------


$(document).ready(function() {
	var zindex = 100;

	$("div.card").click(function(e) {
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
					.css({
						zIndex: zindex
					})
					.addClass("show");
			}

			zindex++;
		} else {
			$("div.pcards")
				.addClass("showing");
			$(this)
				.css({
					zIndex: zindex
				})
				.addClass("show");

			zindex++;
		}
	});
});

// -------------------------------------------------
// Copy buttons pcards
// -------------------------------------------------


function copyDescription(button) {
	var cardElement = button.closest('.card');
	var descriptionToCopy = cardElement.querySelector('.card-description').innerText;
	button.innerText = 'Copied!';
  
	// Create a temporary input element to copy the text
	var tempInput = document.createElement('input');
	tempInput.style.position = 'absolute';
	tempInput.style.left = '-9999px';
	document.body.appendChild(tempInput);
  
	// Set the input value to the description text
	tempInput.value = descriptionToCopy;
	tempInput.select();
  
	// Execute the copy command inside the click event
	document.execCommand('copy');
  
	// Remove the temporary input element
	document.body.removeChild(tempInput);
  
	// Set a timeout to revert the button text to "Copy" after a brief delay (e.g., 2 seconds)
	setTimeout(function () {
	  button.innerText = 'Copy';
	}, 2000);
  }
  

// -------------------------------------------------
// Copy buttons ncards
// -------------------------------------------------

function copyText(button) {
	var contentElement = button.parentElement;
	var textToCopy = contentElement.querySelector('.ncopy').innerText;
	button.innerText = 'Copied!';
  
	// Create a temporary input element to copy the text
	var tempInput = document.createElement('input');
	tempInput.style.position = 'absolute';
	tempInput.style.left = '-9999px';
	document.body.appendChild(tempInput);
  
	// Set the input value to the text to copy
	tempInput.value = textToCopy;
	tempInput.select();
  
	// Execute the copy command inside the click event
	document.execCommand('copy');
  
	// Remove the temporary input element
	document.body.removeChild(tempInput);
  
	// Set a timeout to revert the button text to "Copy" after a brief delay (e.g., 2 seconds)
	setTimeout(function () {
	  button.innerText = 'Copy';
	}, 2000);
  }



// -------------------------------------------------
// Filter system
// -------------------------------------------------

let currentFilter = 'all'; // Variable to keep track of the currently selected filter

// Desktop Nav

const filterBtns = document.querySelectorAll('.button-filter');
const pcards = document.querySelector('.pcards');
const ncards = document.querySelector('.ncards');

filterBtns.forEach(btn => {
	btn.addEventListener('click', filterCards);
});

function filterCards() {
	currentFilter = this.dataset.filter; // Update the currentFilter variable

	if (currentFilter === 'all') {
		pcards.style.display = 'flex';
		ncards.style.display = 'flex';
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
		ncards.style.display = 'flex';
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

// Function to update the grid layout of .ncards based on the number of visible cards
function updateNCardsGridLayout() {
	const visibleCards = document.querySelectorAll(".ncard[style='display: grid;']");
	const numVisibleCards = visibleCards.length;

	const ncardsContainer = document.querySelector(".ncards");

	// Update the grid layout
	function updateLayout(gridColumns) {
		ncardsContainer.style.setProperty('grid-template-columns', `repeat(${gridColumns}, minmax(0, 1fr))`);

		// Check if .ncards need to be centered
		if (gridColumns < 4) {
			ncardsContainer.classList.add("centered");
		} else {
			ncardsContainer.classList.remove("centered");
		}
	}

	// Check if the current filter is "ALL" or "negative"
	if (currentFilter === 'all') {
		// Use as many columns as visible cards
		updateLayout(numVisibleCards);
	}
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
		const nDescription = card.querySelector(".description")?.innerText || "";
		const nCopy = card.querySelector(".ncopy")?.innerText || "";

		const cardMatches =
			title.toLowerCase().includes(query) ||
			smallTitle.toLowerCase().includes(query) ||
			description.toLowerCase().includes(query) ||
			nTitle.toLowerCase().includes(query) ||
			nDescription.toLowerCase().includes(query) ||
			nCopy.toLowerCase().includes(query);
		(currentFilter === "all" ||
			(currentFilter === "positive" && cardMatches) ||
			(currentFilter === "negative" && !cardMatches));

		card.style.display = cardMatches ? "inline-block" : "none";

		if (cardMatches) {
			atLeastOneCardMatches = true;
		}
	});

	// Update the grid layout after filtering
	updateNCardsGridLayout();
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

// Call the updateNCardsGridLayout function on page load to set the initial layout
window.addEventListener("load", updateNCardsGridLayout);