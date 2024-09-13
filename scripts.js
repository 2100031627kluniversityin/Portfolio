var script = document.createElement('script');
script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
document.head.appendChild(script);

script.onload = function () {
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Front End Developer', 'Web Designer'],
        typeSpeed: 50,
    });
};
