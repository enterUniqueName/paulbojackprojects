function checkForm() {  
    const passwordInput = document.getElementById("passwordInput").value;
    let check = passwordInput.toLowerCase() === "yourreflection77";
    if(check) {
      window.location = 'index.html';
    } else {
        alert('Incorrect password');
    }
};
