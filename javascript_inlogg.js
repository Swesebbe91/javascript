const Loginform = document.getElementById('LoginForm');
const LoginButton = document.getElementById('LoginButton')
const loginError = document.getElementById('login-error-msg')


LoginButton.addEventListener('click', (e) => {
    e.preventDefault();

    const username = Loginform.username.value;
    const password = Loginform.password.value;

    if (username === 'user' && password === 'test1') {
        alert('Inloggning lyckades');
        location.reload
    }
    else {
        loginError.style.opacity = 1;

    }  
})