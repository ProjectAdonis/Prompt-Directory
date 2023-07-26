
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


//nav bar

let selectedItem;

function selectItem(e) {
if (this === selectedItem) return;
selectedItem.classList.remove('selected');
this.classList.add('selected');
selectedItem = this;
}

function init() {
selectedItem = document.querySelector('li.selected');
const items = document.querySelectorAll('a');
items.forEach((item) => {
item.addEventListener('click', selectItem, true);
})
}

init();

	// Search button
	const searchButton = document.getElementById("searchButton");
	const searchInput = searchButton.querySelector("input.search");

	searchButton.addEventListener("click", function (event) {
	event.preventDefault();
	searchInput.focus();
	});





  
  