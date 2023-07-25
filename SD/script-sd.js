
// Filter/Dropdown menu system
const filtersDropdown = document.querySelector('.filters-dropdown');
const cardsDiv = document.querySelector('.cards');
const pageNcontentMain = document.querySelector('.page-ncontent');
const header = document.querySelector('.header');

filtersDropdown.addEventListener('change', function () {
  const selectedValue = filtersDropdown.value;

  switch (selectedValue) {
	case 'all':
	  cardsDiv.style.display = 'inline-block';
	  pageNcontentMain.style.display = 'grid';
	  pageNcontentMain.style.transform = 'translateY(0)';
	  header.style.transform = 'translateX(0)';
	  break;
	case 'positive':
	  cardsDiv.style.display = 'inline-block';
	  pageNcontentMain.style.display = 'none';
	  pageNcontentMain.style.transform = 'translateY(0)';
	  header.style.transform = 'translateX(0)';
	  break;
	case 'negative':
	  cardsDiv.style.display = 'none';
	  pageNcontentMain.style.display = 'grid';
	  pageNcontentMain.style.transform = 'translateY(-45%)';
	  header.style.transform = 'translateX(-1%)';
	  break;
	default:
	  break;
	}
});
    
 
 // Positive cards system
 $(document).ready(function(){
	var zindex = 10;
	
	$("div.card").click(function(e){
	  e.preventDefault();
	  
	  var isShowing = false;
  
	  if ($(this).hasClass("show")) {
		isShowing = true;
	  }
  
	  if ($("div.cards").hasClass("showing")) {
		$("div.card.show")
		  .removeClass("show");
  
		if (isShowing) {
		  $("div.cards")
			.removeClass("showing");
		} else {
		  $(this)
			.css({zIndex: zindex})
			.addClass("show");
		}
  
		zindex++;
	  } else {
		$("div.cards")
		  .addClass("showing");
		$(this)
		  .css({zIndex: zindex})
		  .addClass("show");
  
		zindex++;
	  }   
	});
  });


  
  