// IMPORTACIONES




// LÓGICA
document.addEventListener('DOMContentLoaded', ()=>{

    const loginPage = document.getElementById("loginPage")
    const loginContainer = document.getElementById("login-users-content");
    const loginAcces = document.getElementById('login-acces');

    loginAcces.addEventListener('mouseover', (e)=>{
        loginContainer.classList.add("focus");
    });
    loginAcces.addEventListener('mouseleave',()=>{
        loginContainer.classList.remove("focus");
    } )

    loginAcces.addEventListener('click', async ()=>{

        loginContainer.classList.remove("focus");
        loginContainer.classList.add("clicked");
        // Click y en un periodo de 4 segundos debe cerrar pestaña
        // Durante ese perido va reproducir el soundtrack de login de windows
        // Se añadirá estilos de clicked, que mantendrá el bockground gradiente y además se añadira un elemento p de setting configuration
        // Pasado los 4 segundos se añade el display none para quitar el elemento de la pantalla
        
        setInterval(()=>{
            loginPage.style.display="none"
        },4000)
        
        
    })





})