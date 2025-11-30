// Menu Hamburguer
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const navLinks = document.querySelector('.nav-links');

// Abrir menu
hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
    hamburger.classList.add('active');
    closeMenu.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Fechar menu
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    closeMenu.style.display = 'none';
    document.body.style.overflow = '';
});

// Fechar menu ao clicar nos links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        closeMenu.style.display = 'none';
        document.body.style.overflow = '';
    });
});

// Prevenir zoom em inputs no iOS
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

// Smooth Scroll suave para mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animação de scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.about-image, .about-text, .section-title, .education-item, .project-card, .contact-form, footer p');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

// Inicializar animações quando a página carrega
window.addEventListener('load', () => {
    document.querySelector('.about-text').classList.add('animated');
    document.querySelector('.about-image').classList.add('animated');
    animateOnScroll();
});

// Verificar animações durante o scroll
window.addEventListener('scroll', animateOnScroll);

// Efeito de digitação no título
const heroTitle = document.querySelector('.hero-text h1');
const text = heroTitle.textContent;
heroTitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Iniciar efeito de digitação
setTimeout(typeWriter, 500);

// Função para enviar para o WhatsApp
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obter os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Número de telefone (substitua pelo seu número)
    const phoneNumber = "86994811716"; // Sem o +55

    // Criar a mensagem que será enviada
    const whatsappMessage = `Olá Lucas, vim pelo seu portfólio!%0A%0A*Nome:* ${name}%0A*Email:* ${email}%0A*Mensagem:* ${message}`;

    // Criar o link do WhatsApp
    const whatsappUrl = `https://wa.me/55${phoneNumber}?text=${whatsappMessage}`;

    // Redirecionar diretamente para o WhatsApp
    window.open(whatsappUrl, '_blank');
});