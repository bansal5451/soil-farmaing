document.getElementById("adminLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("adminUsername").value.trim();
  const password = document.getElementById("adminPassword").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Simple admin check (for demo purposes)
  if (username === "admin" && password === "admin123") {
    // Redirect to dashboard
    window.location.href = "admin-dashboard.html";
  } else {
    errorMsg.textContent = "Invalid credentials..";
  }
});
