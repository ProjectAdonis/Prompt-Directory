//  JQUERY SEARCH FILTER - Credits: //codepen.io/alexerlandsson/pen/ZbyRoO
// --------------------------
// 1) Add [data-search] to search input
// 2) Add [data-filter-item] to the items that should be filtered
// 3) Add [data-filter-name="SEARCH TERM"] to the filter-items (lowercase)

$('[data-search]').on('keyup', function () {
	var searchVal = $(this).val();
	var filterItems = $('[data-filter-item]');

	if (searchVal != '') {
		filterItems.addClass('hidden');
		$('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
	} else {
		filterItems.removeClass('hidden');
	}
});

