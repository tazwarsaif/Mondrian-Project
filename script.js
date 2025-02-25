document.addEventListener("DOMContentLoaded", () => {
    const siteURL = "https://my-portfolio-ftoh.onrender.com/"; // Change to your site URL
    const iframe = document.getElementById("websiteFrame");

    function loadWebsite() {
        iframe.src = siteURL + "?t=" + new Date().getTime(); // Add timestamp to avoid caching issues
        iframe.style.display = "block";
        document.getElementById("message").innerText = "Website refreshed!";
    }

    // Load immediately and repeat every 10 seconds
    loadWebsite();
    setInterval(loadWebsite, 20000); // Reload every 10 seconds
});
