document.addEventListener("DOMContentLoaded", function() {
    var modeSwitchBtn = document.querySelector('.mode-switch-btn');
    var body = document.body;
  
    modeSwitchBtn.addEventListener('click', function() {
      toggleMode();
    });
  
    function toggleMode() {
      body.classList.toggle("dark-mode");
      body.classList.toggle("light-mode");
  

      var mode = body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("mode", mode);
    }
  
    var savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      body.classList.add("dark-mode");
    }
  });

  const database = [
    "honza.grass",
    "petr.quaver",
    "adam.kamojo",
    "michal.kamone",
    "kristian.kamochleba"
];

function loginuser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginData = username + "." + password;

    for (let i = 0; i < database.length; i++) {
        if (loginData === database[i]) {
            console.log("Login successful.");
            window.location.href = "loginsuccess.html";
            return;
        }
    }

    console.log("Login Failed.");
    window.location.href = "loginfailed.html";
}