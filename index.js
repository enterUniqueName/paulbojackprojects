function checkForm() {  
    const passwordInput = document.getElementById("passwordInput").value;
    let check = passwordInput.toLowerCase() === "avenue42";
    if(check) {
      window.location = 'index.html';
      sessionStorage.setItem('login', 'true');
    } else {
        alert('Incorrect password');
    }
};

let loggedIn = sessionStorage.getItem('login');

function goBack() {
  if(loggedIn === 'true') {
    window.location = '/index.html';
  } else {
    window.location = '/login.html';
    // window.location = '/index_copy.html';
  }
};

function logOut() {
  window.location = '/login.html';
};