// scripts/script.js
document.getElementById("reportForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Report submitted successfully!");
    this.reset();
});
