
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-active');
    });
}


const registerModal = document.getElementById('registerModal');
const successPopup = document.getElementById('successPopup');

function openModal() {
    if (registerModal) {
        registerModal.classList.add('active');
    }
}

function closeModal() {
    if (registerModal) {
        registerModal.classList.remove('active');
    }
}

window.addEventListener('click', (e) => {
    if (e.target === registerModal) {
        closeModal();
    }
});

function handleRegister(event) {
    event.preventDefault(); 
    closeModal(); 
    
    if (successPopup) {
        successPopup.classList.add('active');
        setTimeout(() => {
            successPopup.classList.remove('active');
            document.getElementById('registrationForm').reset(); 
        }, 2000);
    }
}


const autoModeSwitch = document.getElementById('autoModeSwitch');
const sprinkleStatus = document.getElementById('sprinkleStatus');

if (autoModeSwitch && sprinkleStatus) {
    autoModeSwitch.addEventListener('change', function() {
        const timeNow = new Date();
        const timeString = `${String(timeNow.getHours()).padStart(2, '0')}:${String(timeNow.getMinutes()).padStart(2, '0')}`;
        
        if (this.checked) {
            sprinkleStatus.textContent = 'Aktif';
            sprinkleStatus.style.color = '#34D399';
            appendLog(timeString, "Penyiraman dialihkan kembali ke sistem AI otomatis.", "item-green");
        } else {
            sprinkleStatus.textContent = 'Standby';
            sprinkleStatus.style.color = '#94A3B8';
            appendLog(timeString, "Mode Otomatis dinonaktifkan. Menunggu input kontrol manual.", "item-blue");
        }
    });
}

function appendLog(time, text, dotType) {
    const timeline = document.getElementById('timelineActivity');
    if (timeline) {
        const item = document.createElement('div');
        item.className = `timeline-item ${dotType}`;
        item.innerHTML = `
            <span class="time-stamp">${time}</span>
            <p class="activity-text">${text}</p>
        `;
        timeline.insertBefore(item, timeline.firstChild);
    }
}


const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
