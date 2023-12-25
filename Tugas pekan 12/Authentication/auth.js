function validateForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;


    let messages = [];

    if (username === 'Luthfi' && password === 'student-nf23')  {
        alert ('login success');
        window.location.href = 'success.html';
    } else {
        alert ('invalid username / password'); 
    }

}
