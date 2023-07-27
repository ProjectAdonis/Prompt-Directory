// Pcards generation -------------------------------------------------

// Select pcards container  
const pcardsEl = document.querySelector('.pcards');

// Load pcards.json
fetch('pcards.json')
  .then(response => response.json())
  .then(data => {

    // Loop through JSON data  
    data.forEach(card => {
    
      // Create card element
      const cardEl = document.createElement('div');
      cardEl.classList.add('card');

      // Image holder
      const imageHolderEl = document.createElement('div');
      imageHolderEl.classList.add('card__image-holder');
      
      const imageEl = document.createElement('img');
      imageEl.classList.add('card__image');
      imageEl.src = card.image;
      imageEl.alt = card.title;

      imageHolderEl.appendChild(imageEl);

      // Card title
      const titleEl = document.createElement('div');
      titleEl.classList.add('card-title');

      titleEl.innerHTML = `
        <h2>${card.title}  
          <small>${card.smallTitle}</small>
        </h2>
      `;

      // Flap 1
      const flap1El = document.createElement('div');
      flap1El.classList.add('card-flap', 'flap1');

      const descEl = document.createElement('div');
      descEl.classList.add('card-description');
      descEl.textContent = card.description;

      // Flap 2
      const flap2El = document.createElement('div');
      flap2El.classList.add('card-flap', 'flap2');

      const actionsEl = document.createElement('div');
      actionsEl.classList.add('card-actions');

      const copyBtn = document.createElement('a');
      copyBtn.classList.add('btn');  
      copyBtn.textContent = 'Copy';
      copyBtn.href = '#';

      actionsEl.appendChild(copyBtn);

      flap2El.appendChild(actionsEl); 

      // Append elements
      flap1El.appendChild(flap2El);  
      cardEl.appendChild(imageHolderEl);
      cardEl.appendChild(titleEl);
      cardEl.appendChild(flap1El);

      // Append card to pcards
      pcardsEl.appendChild(cardEl);

    });

  });

// Positive cards system -------------------------------------------------

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




// Filter buttons system ------------------------------------------------

// Get filter buttons
const filterBtns = document.querySelectorAll('.button-filter');

// Get card containers
const pcards = document.querySelector('.pcards');
const ncards = document.querySelector('.ncards');

// Handle filter button clicks
filterBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const filter = e.target.dataset.filter;
    
    if(filter === 'all') {
      pcards.style.display = 'grid';
      ncards.style.display = 'grid'; 
    }
    else if(filter === 'positive') {
      pcards.style.display = 'grid';
      ncards.style.display = 'none';
    }
    else if(filter === 'negative') {
      pcards.style.display = 'none';
      ncards.style.display = 'grid';
    }
  }); 
});
