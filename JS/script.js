const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.02;
    }

    draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].size <= 0.2) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

canvas.addEventListener("mousemove", (event) => {
    for (let i = 0; i < 5; i++) {
        const size = Math.random() * 5 + 2;
        const speedX = (Math.random() - 0.5) * 2;
        const speedY = (Math.random() - 0.5) * 2;
        particles.push(new Particle(event.x, event.y, size, speedX, speedY));
    }
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();


// const socials = document.getElementById('socials');
// let lastScrollY = window.scrollY; // Последняя позиция прокрутки
// let springEffect = 0; // Значение пружинного эффекта

// window.addEventListener('scroll', () => {
//   // Вычисляем разницу прокрутки
//   const scrollDelta = window.scrollY - lastScrollY;
  
//   // Задаем амплитуду пружины
//   springEffect += scrollDelta * 0.2;

//   // Ограничиваем эффект (чтобы не улетало далеко)
//   springEffect = Math.max(-20, Math.min(20, springEffect));

//   // Применяем transform с учетом пружины
//   socials.style.transform = `translateY(calc(-50% + ${springEffect}px))`;

//   // Постепенное затухание эффекта
//   setTimeout(() => {
//     springEffect *= 0.9; // Уменьшаем амплитуду со временем
//     socials.style.transform = `translateY(calc(-50% + ${springEffect}px))`;
//   }, 50);

//   // Обновляем позицию прокрутки
//   lastScrollY = window.scrollY;
// });

const clickableElement = document.querySelector('.last-name');
const clickSound = document.getElementById('click-sound');

clickableElement.addEventListener('click', () => {
  clickSound.play(); 
});