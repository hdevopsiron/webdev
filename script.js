
console.log("JS is connected! 🚀");

// Toggle data-theme on <body> when anywhere is clicked
document.body.addEventListener('click', function (e) {
	// Ignore clicks on links in the navbar
	if (e.target.closest('.navbar a')) return;
	const current = document.body.getAttribute('data-theme');
	document.body.setAttribute('data-theme', current === 'dark' ? '' : 'dark');
});
