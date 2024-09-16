
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que el formulario se envíe automáticamente

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar si los campos están vacíos
    if (username === '' || password === '') {
        alert('Por favor, completa todos los campos antes de continuar.');
        return; // Detiene la ejecución si hay campos vacíos
    }

    // Autenticación de usuario y contraseña
    if (username === 'Danilo' && password === 'Pruebas1234*') {
        alert('Inicio de sesión exitoso. ¡Bienvenido Danilo!');
        // Redirigir a otra página después del inicio de sesión exitoso
        window.location.href = 'home.html'; // Cambia a la URL de la página que desees
    } else {
        alert('Usuario o contraseña incorrectos. Intenta nuevamente.');
    }
});