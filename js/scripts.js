
/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.getElementById("circle").addEventListener("click", function() {
    var hiddenText = document.getElementById("hiddenText");
    hiddenText.classList.toggle("show");
});

    document.getElementById('circle').addEventListener('click', function() {
        var hiddenText = document.getElementById('hiddenText');
        if (hiddenText.classList.contains('hidden')) {
            hiddenText.classList.remove('hidden'); // Remove a classe de ocultação
            hiddenText.classList.add('visible'); // Adiciona a classe para exibir
        } else {
            hiddenText.classList.remove('visible'); // Remove a classe de exibição
            hiddenText.classList.add('hidden'); // Adiciona a classe para ocultar
        }
    });
    const inputField = document.getElementById('inputField');
    const submitButton = document.getElementById('submitButton');
    const clearButton = document.getElementById('clearButton');
    const form = document.getElementById('myForm');
    
    // Habilitar o botão somente se o campo de entrada não estiver vazio
    inputField.addEventListener('input', () => {
        if (inputField.value.trim() !== '') {
            submitButton.classList.remove('disabled');
            submitButton.disabled = false; // Habilita o botão
        } else {
            submitButton.classList.add('disabled');
            submitButton.disabled = true; // Desabilita o botão
        }
    });
    
    // Lidar com o envio do formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
    
        // Aqui você pode fazer algo com os dados do formulário, como enviá-los via AJAX
        console.log('Formulário enviado:', inputField.value);
    
        // Limpar o campo de entrada
        inputField.value = '';
    
        // Desabilitar o botão novamente
        submitButton.classList.add('disabled');
        submitButton.disabled = true; // Desabilita o botão
    });
    
    // Lidar com o clique do botão de limpar
    clearButton.addEventListener('click', () => {
        // Limpar o campo de entrada
        inputField.value = '';
    
        // Desabilitar o botão de enviar
        submitButton.classList.add('disabled');
        submitButton.disabled = true; // Desabilita o botão
    });
    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Previne o comportamento padrão de envio do formulário
        // Exibir a mensagem de sucesso
        document.getElementById('submitSuccessMessage').classList.remove('d-none');
        // Limpa o formulário
        document.getElementById('contactForm').reset();
    });

