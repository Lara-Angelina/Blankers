
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
    
    window.addEventListener('DOMContentLoaded', event => {
        // Função para validar o formulário
        function validateForm() {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const rating = document.getElementById('rating');
            let isValid = true;
    
            // Validação do nome
            if (name.value.trim() === "") {
                name.classList.add('is-invalid');
                isValid = false;
            } else {
                name.classList.remove('is-invalid');
            }
    
            // Validação do email
            if (email.value.trim() === "" || !validateEmail(email.value)) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.remove('is-invalid');
            }
    
            // Validação da nota
            if (rating.value === "") {
                rating.classList.add('is-invalid');
                isValid = false;
            } else {
                rating.classList.remove('is-invalid');
            }
    
    
            return isValid;
        }
    
        // Função auxiliar para validar email
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    
        // Lidar com o envio do formulário
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir envio padrão do formulário
    
            // Se o formulário for válido
            if (validateForm()) {
                // Exibir mensagem de sucesso
                document.getElementById('submitSuccessMessage').classList.remove('d-none');
                document.getElementById('submitErrorMessage').classList.add('d-none');
    
                // Limpar o formulário
                this.reset();
    
                // Remover classes de validação (invalid feedback)
                const inputs = this.querySelectorAll('.form-control');
                inputs.forEach(input => input.classList.remove('is-invalid'));
    
            } else {
                // Exibir mensagem de erro
                document.getElementById('submitErrorMessage').classList.remove('d-none');
                document.getElementById('submitSuccessMessage').classList.add('d-none');
            }
        });
    });
    