// Data
const slides = [
    { image: 'https://storage.googleapis.com/stateless-thedailyfandom-org/2021/08/e9d583bd-twilight-6.jpeg', city: 'Twilight', tagline: 'Experience the magic of twilight with us.' },
    { image: 'https://wallpapercat.com/w/full/3/e/0/337066-3840x2160-desktop-4k-white-fang-wallpaper.jpg', city: 'White Fang', tagline: 'Unleash your wild side.' },
    { image: 'https://cdni.rbth.com/rbthmedia/images/web/en-rbth/images/2013-01/big/nu_pogodi2.png', city: 'Well, just you wait!', tagline: 'Something incredible is coming.' },
    { image: 'https://www.thechurchillobserver.com/wp-content/uploads/2017/03/wolverine-photo.png', city: 'Logan - Wolverine', tagline: 'The strength within.' },
    { image: 'https://upload.wikimedia.org/wikipedia/pt/e/e5/MonsterHigh_Characters.png', city: 'Monster High', tagline: 'Embrace what makes you different.' },
    { image: 'https://sev.h-cdn.co/assets/15/34/1280x720/gallery-1440002423-teen-wolf-1.png', city: 'Teen Wolf', tagline: 'Transform and conquer.' },
];

const members = [
    { name: 'Twilight', image: 'https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFjTzBCOE0rWEwuX0FDX1NMMTUwMF8uanBn.jpg', bio: 'The film series tells the story of Bella Swan, a teenage girl who moves to the small town of Forks, Washington, and falls in love with Edward Cullen, a mysterious vampire. Their forbidden romance and the growing tension between the vampire coven (Cullens) and a local pack of werewolves (Jacob Black\'s pack) lead to escalating conflicts and supernatural dangers.' },
    { name: 'White Fang', image: 'https://m.media-amazon.com/images/I/6186lDAkl-L._AC_UF1000,1000_QL80_.jpg', bio: 'Set during the Klondike Gold Rush in 1898, a young prospector named Jack Conroy arrives in Alaska to claim his father\'s stake. He befriends a magnificent wolfdog named White Fang, a half-dog, half-wolf hybrid. Jack must save the animal from a brutal dog-fighting ring and earn the wild creature\'s trust, ultimately forging a powerful bond of friendship. It is recommended to read the original novel by Jack London with the same name to understand more about the story.' },
    { name: 'Well, just you wait!', image: 'https://m.media-amazon.com/images/M/MV5BNzU5YmQxMmQtMWI5Zi00NWQ2LWJlNzUtNWFkN2JhNTdiNWE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', bio: 'The series follows the comical, non-stop pursuit of the mischievous but artistic Wolf (Volk) as he attempts to catch (and presumably eat) the clever and positive Hare (Zayats). Each short, mostly silent episode is set in a different location—from a beach and a museum to a stadium and a construction site—with the Wolf\'s elaborate schemes always failing in slapstick fashion, usually ending with him yelling the titular phrase: "Nu, Zayats! Nu, pogodi!" ("Well, Hare! Well, just you wait!").' },
    { name: 'Logan - Wolverine', image: 'https://upload.wikimedia.org/wikipedia/en/3/37/Logan_2017_poster.jpg', bio: 'In the near-future, a weary Logan (Wolverine) cares for an ailing Professor X in a secluded hideout near the Mexican border. Logan\'s healing factor is diminished, and he\'s tormented by past losses. His attempt to remain hidden from the world is shattered when a young mutant girl, Laura (X-23), who shares his powers, arrives and needs his protection from dark forces pursuing her.' },
    { name: 'Monster High', image: 'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/3220905/6207290/TIARP5298__42387.1709692624.jpg?c=2', bio: 'The animated series follows the lives of the teenage children of famous monsters—known as "ghouls"—as they attend Monster High, a secondary school for supernatural creatures. The short episodes focus on the daily dramas, fashion mishaps, friendships, and acceptance-themed adventures of the core group, including Frankie Stein, Draculaura, Clawdeen Wolf, Lagoona Blue, and Cleo de Nile, as they navigate the monstrous halls of high school.' },
    { name: 'Teen Wolf', image: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/teen_wolf_series.png', bio: 'The series follows Scott McCall, an awkward high school student who is bitten by a werewolf. He attempts to navigate his new life as a supernatural being while keeping his secret, protecting his friends, and dealing with various mystical threats and creatures that plague the small California town of Beacon Hills.' },
];

const galleryVideos = [
    { videoId: 'uxjNDE2fMjI', alt: 'Twilight Trailer' },
    { videoId: 'nACyMvM9AR4', alt: 'White Fang Trailer' },
    { videoId: 'y0-xiXG0rTY', alt: 'Well, just you wait! Trailer' },
    { videoId: 'Div0iP65aZo', alt: 'Logan - Wolverine Trailer' },
    { videoId: '9CW1Ih4Ej3A', alt: 'Monster High Trailer' },
    { videoId: 'BmHM5eUp9w4', alt: 'Teen Wolf Trailer' },
];

const tourLocations = [
    { title: 'Twilight', image: 'https://sm.ign.com/t/ign_me/lists/h/how-to-wat/how-to-watch-the-twilight-movies-in-chronological-order_nyvc.1200.jpg', date: 'Fri 27 Nov 2016', description: 'Experience the magic of twilight with us.' },
    { title: 'White Fang', image: 'https://variety.com/wp-content/uploads/2015/11/rexfeatures_1631224a.jpg', date: 'Sat 28 Nov 2016', description: 'Unleash your wild side.' },
    { title: 'Well, just you wait!', image: 'https://m.media-amazon.com/images/M/MV5BYzJmZDRlMDktOWJjOC00NjRlLWEwYTUtMmYwZGYwZTk1YWFjXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg', date: 'Sun 29 Nov 2016', description: 'Something incredible is coming.' },
    { title: 'Logan - Wolverine', image: 'https://cdn.marvel.com/content/2x/fox_logan_lob_mas_mob_01.jpg', date: 'Mon 30 Nov 2016', description: 'The strength within.' },
    { title: 'Monster High', image: 'https://m.media-amazon.com/images/M/MV5BNzc4ZTJiNGQtZWJkNy00M2I3LWIxMDUtNDFhY2Y3ZjU1MGQyXkEyXkFqcGc@._V1_.jpg', date: 'Tue 01 Dec 2016', description: 'Embrace what makes you different.' },
    { title: 'Teen Wolf', image: 'https://www.hollywoodreporter.com/wp-content/uploads/2012/07/teen_wolf_cast_portrait_a_l.jpg', date: 'Wed 02 Dec 2016', description: 'Transform and conquer.' },
];

let currentSlide = 0;
let selectedMovie = '';
let currentLightboxIndex = 0;

// Initialize
function init() {
    renderSlides();
    renderMembers();
    renderGallery();
    renderTourDates();
    renderLocations();
    startSlideshow();
}

function renderSlides() {
    const container = document.getElementById('slidesContainer');
    const indicatorsContainer = document.getElementById('indicators');
    
    slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `slide ${index === 0 ? 'active' : ''}`;
        slideDiv.innerHTML = `
            <div class="slide-image" style="background-image: url('${slide.image}')"></div>
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <h1>${slide.city}</h1>
                <p>${slide.tagline}</p>
            </div>
        `;
        container.appendChild(slideDiv);

        const indicator = document.createElement('button');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.onclick = () => goToSlide(index);
        indicatorsContainer.appendChild(indicator);
    });
}

function renderMembers() {
    const grid = document.getElementById('membersGrid');
    members.forEach((member, index) => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <button class="member-image" onclick="openMemberModal(${index})">
                <img src="${member.image}" alt="${member.name}">
            </button>
            <p class="member-name">${member.name}</p>
        `;
        grid.appendChild(card);
    });
}

function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    galleryVideos.forEach((video, index) => {
        const item = document.createElement('button');
        item.className = 'gallery-item';
        item.onclick = () => openLightbox(index);
        item.innerHTML = `
            <img src="https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg" alt="${video.alt}">
            <div class="gallery-overlay">
                <div class="play-button">
                    <svg viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                </div>
            </div>
        `;
        grid.appendChild(item);
    });
}

function renderTourDates() {
    const container = document.getElementById('tourDatesContainer');
    const dates = [
        { month: 'September', status: 'Sold out', available: false },
        { month: 'October', status: 'Sold out', available: false },
        { month: 'November', status: '3', available: true },
    ];
    
    dates.forEach(date => {
        const item = document.createElement('div');
        item.className = 'tour-date-item';
        item.innerHTML = `
            <span>${date.month}</span>
            <span class="badge ${date.available ? 'badge-available' : 'badge-soldout'}">${date.status}</span>
        `;
        container.appendChild(item);
    });
}

function renderLocations() {
    const grid = document.getElementById('locationsGrid');
    tourLocations.forEach(location => {
        const card = document.createElement('div');
        card.className = 'location-card';
        card.innerHTML = `
            <img class="location-image" src="${location.image}" alt="${location.title}">
            <div class="location-content">
                <div class="location-title">${location.title}</div>
                <div class="location-date">${location.date}</div>
                <div class="location-description">${location.description}</div>
                <button class="btn" onclick="openTicketModal('${location.title}')">Buy Tickets</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Slideshow Functions
function startSlideshow() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }, 6000);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlide();
}

function updateSlide() {
    document.querySelectorAll('.slide').forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Modal Functions
function openMemberModal(index) {
    const member = members[index];
    document.getElementById('memberModalTitle').textContent = member.name;
    document.getElementById('memberModalImage').src = member.image;
    document.getElementById('memberModalBio').textContent = member.bio;
    document.getElementById('memberModal').classList.add('active');
}

function closeMemberModal() {
    document.getElementById('memberModal').classList.remove('active');
}

function openTicketModal(movieTitle) {
    selectedMovie = movieTitle;
    document.getElementById('ticketModalTitle').textContent = movieTitle + ' Tickets';
    document.getElementById('ticketQuantity').value = '1';
    document.getElementById('ticketEmail').value = '';
    document.getElementById('ticketModal').classList.add('active');
}

function closeTicketModal() {
    document.getElementById('ticketModal').classList.remove('active');
}

function openLightbox(index) {
    currentLightboxIndex = index;
    const video = galleryVideos[index];
    const content = document.getElementById('lightboxContent');
    content.innerHTML = `
        <iframe class="lightbox-iframe" src="https://www.youtube.com/embed/${video.videoId}?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="lightbox-controls">
            <button class="lightbox-btn" onclick="prevLightbox()">❮</button>
            <button class="lightbox-btn" onclick="nextLightbox()">❯</button>
        </div>
        <button class="modal-close" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; color: #fff; font-size: 1.5rem; cursor: pointer; z-index: 101;" onclick="closeLightbox()">✕</button>
    `;
    document.getElementById('lightboxModal').classList.add('active');
}

function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryVideos.length) % galleryVideos.length;
    openLightbox(currentLightboxIndex);
}

function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryVideos.length;
    openLightbox(currentLightboxIndex);
}

function closeLightbox() {
    document.getElementById('lightboxModal').classList.remove('active');
}

// Form Functions
function submitTicket(e) {
    e.preventDefault();
    const quantity = document.getElementById('ticketQuantity').value;
    const email = document.getElementById('ticketEmail').value;
    
    if (!quantity || isNaN(quantity) || quantity < 1) {
        alert('Please enter a valid ticket quantity');
        return;
    }
    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }
    
    alert(`Thank you for your order! ${quantity} ticket(s) for ${selectedMovie} will be sent to ${email}`);
    closeTicketModal();
}

function submitContact(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    alert(`Thank you ${name}! Your message has been received. We will contact you at ${email} soon.`);
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = '';
}

// Navigation
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('mobileMenu').classList.remove('active');
    }
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

// Close modals when clicking outside
window.onclick = function(event) {
    const memberModal = document.getElementById('memberModal');
    const ticketModal = document.getElementById('ticketModal');
    const lightboxModal = document.getElementById('lightboxModal');
    
    if (event.target === memberModal) memberModal.classList.remove('active');
    if (event.target === ticketModal) ticketModal.classList.remove('active');
    if (event.target === lightboxModal) lightboxModal.classList.remove('active');
}

// Start the app
init();
