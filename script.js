//your code here

document.addEventListener("DOMContentLoaded", function() {
    console.log("Page Loaded. Ready for form interaction.");
    
    document.querySelector("form").addEventListener("submit", function(event) {
        if (!document.getElementById('tos').checked) {
            alert("You must agree to the Terms of Service.");
            event.preventDefault(); 
        }
    });
});
