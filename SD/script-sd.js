
// Positive cards system -------------------------------------------------

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



// Nav Bar -------------------------------------------------

let selectedItem;
let selectedFilter;

// Function to handle the selection of home and search buttons
function selectNavItem(e) {
  if (this === selectedItem) return;
  if (selectedItem) {
    selectedItem.classList.remove('selected');
  }
  this.classList.add('selected');
  selectedItem = this;

  // Deselect the selected filter if any
  if (selectedFilter) {
    selectedFilter.classList.remove('selected');
    selectedFilter = null;
  }
}

// Function to handle the selection of filter buttons
function selectFilter(e) {
  if (this === selectedFilter) return;

  // Deselect the ALL filter when another filter is clicked
  const allFilter = document.querySelector('a.button-filter[data-filter="all"]');
  if (selectedFilter === allFilter) {
    selectedFilter.classList.remove('selected');
  }

  if (selectedFilter) {
    selectedFilter.classList.remove('selected');
  }
  this.classList.add('selected');
  selectedFilter = this;

  // Unselect the home/search bar if selected
  if (selectedItem) {
    selectedItem.classList.remove('selected');
    selectedItem = null;
  }
}

function init() {
  const navItems = document.querySelectorAll('a.button');
  const filterItems = document.querySelectorAll('a.button-filter');

  // Find and set the default filter (ALL) on page load
  filterItems.forEach((item) => {
    if (item.dataset.filter === 'all') {
      selectedFilter = item;
      selectedFilter.classList.add('selected');
    }
  });

  // Add click event listeners for home/search buttons
  navItems.forEach((item) => {
    item.addEventListener('click', selectNavItem, true);
  });

  // Add click event listeners for filter buttons
  filterItems.forEach((item) => {
    item.addEventListener('click', selectFilter, true);
  });
}

init();

// Search button
const searchButton = document.getElementById('searchButton');
const searchInput = searchButton.querySelector('input.search');

searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  searchInput.focus();
});






// Copy buttons ncards--------------------------------------------------------

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


// Copy buttons pcards--------------------------------------------------------


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


// Filter buttons system ------------------------------------------------
