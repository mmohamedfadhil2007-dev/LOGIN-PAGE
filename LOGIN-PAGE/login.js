let users = JSON.parse(localStorage.getItem("users")) || {
  "user1": "pass1",
  "user2": "pass2",
  "user3": "pass3",
  "user4": "pass4",
  "user5": "pass5",
  "user6": "pass6",
  "user7": "pass7",
  "user8": "pass8",
  "user9": "pass9",
  "user10": "pass10"
};

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function showSignUp() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "block";
}

function showLogin() {
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

function showSuccess(message) {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("successBox").style.display = "block";
  document.getElementById("successMsg").innerText = message;
}

function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (users[username] && users[username] === password) {
    showSuccess("Login successful!");
  } else {
    document.getElementById("result").innerText = "Invalid username or password.";
  }
  return false;
}

function signUp() {
  const newUser = document.getElementById("newUser").value;
  const newPass = document.getElementById("newPass").value;

  if (users[newUser]) {
    document.getElementById("signupResult").innerText = "Username already exists!";
  } else {
    users[newUser] = newPass;
    saveUsers();
    showSuccess("User registered successfully!");
  }
  return false;
}

function logout() {
  document.getElementById("successBox").style.display = "none";
  showLogin();
  // Clear form fields when logging out
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function clearData() {
  localStorage.removeItem("users");
  users = {
    "user1": "pass1",
    "user2": "pass2",
    "user3": "pass3",
    "user4": "pass4",
    "user5": "pass5",
    "user6": "pass6",
    "user7": "pass7",
    "user8": "pass8",
    "user9": "pass9",
    "user10": "pass10"
  };
  alert("All user data cleared. Default 10 users restored.");
  logout();
}