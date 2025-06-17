document.addEventListener("DOMContentLoaded", () => {
    

    function loadWebsite() {
      let siteURL = "https://my-portfolio-ftoh.onrender.com/"; // Change to your site URL
     let iframe = document.getElementById("websiteFrame");
        iframe.src = siteURL + "?t=" + new Date().getTime(); // Add timestamp to avoid caching issues
        iframe.style.display = "block";
        document.getElementById("message").innerText = "Website refreshed!";
    }

    // Load immediately and repeat every 10 seconds
    loadWebsite();
    setInterval(loadWebsite, 20000); // Reload every 10 seconds

    function pingAiSummarizer() {
  fetch("https://ai-note-summarizer-tfmx.onrender.com/", { mode: "no-cors" })
    .then(() => console.log("Pinged AI Summarizer"))
    .catch(() => console.warn("Ping failed"));
    }

    pingAiSummarizer();
    setInterval(pingAiSummarizer, 20000);
});
