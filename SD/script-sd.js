
// Positive cards system
$(document).ready(function(){
var zindex = 10;

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
  }

  // Function to handle the selection of filter buttons
  function selectFilter(e) {
    if (this === selectedFilter) return;
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
      if (item.querySelector('span').textContent === 'ALL') {
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
	const searchButton = document.getElementById("searchButton");
	const searchInput = searchButton.querySelector("input.search");

	searchButton.addEventListener("click", function (event) {
	event.preventDefault();
	searchInput.focus();
	});
