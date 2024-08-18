document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón utilizando su id
    const div = document.getElementById('div1');

    // Define la función que se ejecutará cuando se haga clic en el botón
    function myFunction() {
        alert('Hola! Soy el div');
    }

    div1.addEventListener('click', myFunction);
});
