function searchGoogle() {
    let query = document.getElementById('search-box').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}
