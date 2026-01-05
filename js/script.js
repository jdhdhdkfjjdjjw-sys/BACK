const autoSlides = document.querySelectorAll('.auto-carousel .slide');
const autoDotsContainers = document.querySelectorAll('.auto-dots');
let autoIndex = 0;

autoSlides.forEach((_, i) => {
  autoDotsContainers.forEach(container => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => showAuto(i);
    container.appendChild(dot);
  });
});

function showAuto(i) {
  autoSlides[autoIndex].classList.remove('active');
  autoIndex = i;
  autoSlides[autoIndex].classList.add('active');

  document.querySelectorAll('.auto-dots .dot').forEach((d, index) => {
    d.classList.toggle('active', index % autoSlides.length === autoIndex);
  });
}

setInterval(() => {
  showAuto((autoIndex + 1) % autoSlides.length);
}, 5000);


const track1 = document.querySelector('.manual-track');
const slides1 = document.querySelectorAll('.manual-slide');
const dotsContainer1 = document.querySelector('.manual-dots');
let index1 = 0;

slides1.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo1(i));
  dotsContainer1.appendChild(dot);
});

const dots1 = document.querySelectorAll('.manual-dots .dot');

function updateManual1() {
  const slideWidth = slides1[0].offsetWidth + 24; 
  const viewportWidth = document.querySelector('.manual-viewport').offsetWidth;

  let offset = slideWidth * index1 - (viewportWidth - slideWidth) / 2;
  if (offset < 0) offset = 0;

  const maxOffset = track1.scrollWidth - viewportWidth;
  if (offset > maxOffset) offset = maxOffset;

  track1.style.transform = `translateX(-${offset}px)`;

  slides1.forEach(s => s.classList.remove('active'));
  dots1.forEach(d => d.classList.remove('active'));

  slides1[index1].classList.add('active');
  dots1[index1].classList.add('active');
}

function goTo1(i) {
  index1 = i;
  updateManual1();
}


let startX1 = 0;
track1.addEventListener('touchstart', e => startX1 = e.touches[0].clientX);
track1.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX1 - endX > 50 && index1 < slides1.length - 1) index1++;
  if (endX - startX1 > 50 && index1 > 0) index1--;
  updateManual1();
});


updateManual1();


const track2 = document.querySelector('.manual_vers');
const slides2 = document.querySelectorAll('.manual_vers article');
const dotsContainer2 = document.querySelector('.manual-dots1');
let index2 = 0;

slides2.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo2(i));
  dotsContainer2.appendChild(dot);
});

const dots2 = document.querySelectorAll('.manual-dots1 .dot');

function updateManual2() {
  const slideWidth = slides2[0].offsetWidth + 24;
  const viewportWidth = document.querySelector('.manual_vers').offsetWidth;

  let offset = slideWidth * index2 - (viewportWidth - slideWidth) / 2;
  if (offset < 0) offset = 0;

  const maxOffset = track2.scrollWidth - viewportWidth;
  if (offset > maxOffset) offset = maxOffset;

  track2.style.transform = `translateX(-${offset}px)`;

  slides2.forEach(s => s.classList.remove('active'));
  dots2.forEach(d => d.classList.remove('active'));

  slides2[index2].classList.add('active');
  dots2[index2].classList.add('active');
}

function goTo2(i) {
  index2 = i;
  updateManual2();
}


let startX2 = 0;
track2.addEventListener('touchstart', e => startX2 = e.touches[0].clientX);
track2.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX2 - endX > 50 && index2 < slides2.length - 1) index2++;
  if (endX - startX2 > 50 && index2 > 0) index2--;
  updateManual2();
});


updateManual2();

const menuBtn = document.querySelector('.menu-btn');
const menuOverlay = document.getElementById('menu');
const closeBtn = document.querySelector('#menu .close-btn');

menuBtn.addEventListener('click', () => {
  menuOverlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  menuOverlay.style.display = 'none';
});

menuOverlay.addEventListener('click', (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.style.display = 'none';
  }
});

const menuVehicles = document.getElementById('menu-vehicles');
const menuEnergy = document.getElementById('menu-energy');
const submenuVehicles = document.getElementById('submenu-vehicles');
const submenuEnergy = document.getElementById('submenu-energy');
const backBtns = document.querySelectorAll('.back-btn');
const submenuCloseBtns = document.querySelectorAll('.submenu-content .close-btn');

menuVehicles.addEventListener('click', () => {
  menuOverlay.style.display = 'none';
  submenuVehicles.style.display = 'block';
});

menuEnergy.addEventListener('click', () => {
  menuOverlay.style.display = 'none';
  submenuEnergy.style.display = 'block';
});

backBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    submenuVehicles.style.display = 'none';
    submenuEnergy.style.display = 'none';
    menuOverlay.style.display = 'block';
  });
});

submenuCloseBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    submenuVehicles.style.display = 'none';
    submenuEnergy.style.display = 'none';
  });
});

submenuVehicles.addEventListener('click', (e) => {
  if (e.target === submenuVehicles) {
    submenuVehicles.style.display = 'none';
  }
});

submenuEnergy.addEventListener('click', (e) => {
  if (e.target === submenuEnergy) {
    submenuEnergy.style.display = 'none';
  }
});
