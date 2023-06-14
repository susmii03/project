// google Search.
function performGoogleSearch() {
    var searchInput = document.getElementById("search-input").value;
    if (searchInput.trim() === "") {
      return;
    } else {
      var encodedSearchQuery = encodeURIComponent(searchInput);
      var searchURL = "https://www.google.com/search?q=" + encodedSearchQuery;
      window.location.href = searchURL;
    }
  }