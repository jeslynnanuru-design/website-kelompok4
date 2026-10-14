// Data akademik kelompok ditempatkan di sini agar mudah disunting.
const members = [
  { number: '01', name: 'Beldelina Walkoma', npm: '12155201240024', prodi: 'Informatika', role: 'Anggota Kelompok', photo: 'images/bella.jpeg', photoClass: 'photo-beldelina', hobby: 'Bermain voli', description: 'Membantu dalam pengerjaan tugas dan pengembangan website kelompok.' },
  { number: '02', name: 'Grace Tevana Leteluru', npm: '12155201240072', prodi: 'Informatika', role: 'Anggota Kelompok', photo: 'images/grace.jpeg', hobby: 'Bermain bulutangkis', description: 'Membantu menyiapkan materi dan memberikan ide untuk website.' },
  { number: '03', name: 'Jeslyn Daniella Nanuru', npm: '12155201240089', prodi: 'Informatika', role: 'Ketua / Koordinator Kelompok', photo: 'images/jeslyn.jpeg', hobby: 'Bernyanyi', description: 'Mengatur pembagian tugas dan mengoordinasikan anggota kelompok.' },
  { number: '04', name: 'Joysen Esra Pattiasina', npm: '12155201240096', prodi: 'Informatika', role: 'Anggota Kelompok', photo: 'images/jeysen.jpeg', hobby: 'Bermain bola', description: 'Membantu membuat dan mengembangkan fitur website.' },
  { number: '05', name: 'Yiska Maryam Laufa', npm: '12155201240168', prodi: 'Informatika', role: 'Anggota Kelompok', photo: 'images/cika.jpeg', hobby: 'Memasak', description: 'Membantu memeriksa tampilan dan memastikan website berjalan dengan baik.' }
];

const aboutCards = [
  { icon: '↗', title: 'Website Interaktif', description: 'Halaman merespons tindakan pengguna seperti klik, pilihan, dan pengisian formulir.' },
  { icon: '▤', title: 'Pengolahan Data', description: 'Data diterima, diolah, dan disajikan sesuai kebutuhan aplikasi.' },
  { icon: '⇄', title: 'Komunikasi Web', description: 'Browser dan server bertukar informasi melalui protokol serta layanan web.' }
];

const topics = [
  { title: 'HTML', label: 'STRUKTUR', icon: '&lt;/&gt;', detail: 'HTML menyusun struktur dan elemen halaman web, seperti judul, paragraf, tautan, gambar, dan formulir.', example: '<h1>Judul halaman</h1>' },
  { title: 'CSS', label: 'TAMPILAN', icon: '#', detail: 'CSS mengatur tampilan, warna, jarak, tata letak, animasi, dan responsivitas sebuah halaman.', example: 'h1 { color: green; }' },
  { title: 'JavaScript', label: 'INTERAKSI', icon: 'JS', detail: 'JavaScript menjalankan logika, menanggapi tindakan pengguna, memvalidasi masukan, dan memperbarui konten halaman.', example: 'button.addEventListener(...)' },
  { title: 'API', label: 'PERTUKARAN DATA', icon: '⇄', detail: 'API menjadi aturan penghubung agar aplikasi dapat meminta dan bertukar data dengan layanan lain.', example: 'Aplikasi ↔ layanan data' },
  { title: 'HTTP', label: 'KOMUNIKASI', icon: '↔', detail: 'HTTP adalah protokol yang mengatur komunikasi dan pertukaran data antara client dan server.', example: 'Client ⇄ Server' },
  { title: 'HTTP Request', label: 'PERMINTAAN', icon: '↑', detail: 'HTTP Request adalah permintaan yang dikirim client ke server, berisi tujuan, metode, headers, dan data bila diperlukan.', example: 'GET /data' },
  { title: 'HTTP Response', label: 'RESPONS', icon: '↓', detail: 'HTTP Response adalah jawaban server kepada client, termasuk status, headers, dan isi data.', example: '200 OK · isi data' },
  { title: 'HTTP Headers', label: 'INFORMASI TAMBAHAN', icon: '☷', detail: 'HTTP Headers membawa informasi tambahan dalam request maupun response, misalnya format isi atau jenis autentikasi.', example: 'Content-Type: application/json' },
  { title: 'HTTP Status Codes', label: 'STATUS HASIL', icon: '№', detail: 'HTTP Status Codes menunjukkan hasil pemrosesan request agar client memahami keberhasilan atau jenis kendala.', example: '200 · 404 · 500' }
];

const technologies = [
  { name: 'HTML5', icon: '&lt;/&gt;', description: 'Menyusun struktur dan makna konten halaman.' },
  { name: 'CSS3', icon: '#', description: 'Mengatur tampilan, tata letak, dan responsivitas.' },
  { name: 'JavaScript', icon: 'JS', description: 'Menambahkan logika dan interaksi pada website.' },
  { name: 'API', icon: '⇄', description: 'Menghubungkan aplikasi dengan layanan data.' },
  { name: 'HTTP', icon: '↔', description: 'Mengatur komunikasi antara client dan server.' },
  { name: 'JSON', icon: '{ }', description: 'Format ringan untuk menyimpan dan bertukar data.' },
  { name: 'Git / GitHub', icon: '⑂', description: 'Mencatat perubahan kode dan mendukung kolaborasi.' }
];

const benefits = [
  { icon: '⌘', title: 'Membuat Website', description: 'Meningkatkan kemampuan membangun website.' },
  { icon: '↔', title: 'Client dan Server', description: 'Memahami cara browser berkomunikasi dengan server.' },
  { icon: '⇄', title: 'Menggunakan API', description: 'Mengenal pertukaran data antar aplikasi.' },
  { icon: 'JS', title: 'Menguasai JavaScript', description: 'Melatih logika dan membuat interaksi web.' },
  { icon: '∑', title: 'Logika Pemrograman', description: 'Menyusun langkah penyelesaian masalah.' },
  { icon: '✳', title: 'Kreativitas', description: 'Mengembangkan gagasan menjadi pengalaman digital.' },
  { icon: '◎', title: 'Kerja Kelompok', description: 'Belajar berkolaborasi dan berbagi tanggung jawab.' },
  { icon: '↗', title: 'Proyek Nyata', description: 'Menerapkan materi dalam karya web yang dapat diuji.' }
];

const flowNodes = [
  { name: 'PENGGUNA', icon: '◎', direction: 'request' }, { name: 'BROWSER', icon: '▣', direction: 'request' },
  { name: 'HTTP REQUEST', icon: '↑', direction: 'request' }, { name: 'SERVER / API', icon: '⌘', direction: 'request' },
  { name: 'DATABASE', icon: '▤', direction: 'response' }, { name: 'HTTP RESPONSE', icon: '↓', direction: 'response' },
  { name: 'BROWSER', icon: '▣', direction: 'response' }, { name: 'PENGGUNA', icon: '◎', direction: 'response' }
];

const journey = [
  { number: '01', icon: '⌕', title: 'Perencanaan', description: 'Menentukan tujuan, kebutuhan, dan ruang lingkup website.' },
  { number: '02', icon: '◇', title: 'Perancangan', description: 'Menyusun alur, struktur konten, dan rancangan tampilan.' },
  { number: '03', icon: '&lt;/&gt;', title: 'Pengembangan', description: 'Membangun halaman menggunakan HTML, CSS, dan JavaScript.' },
  { number: '04', icon: '✓', title: 'Pengujian', description: 'Memeriksa fungsi, tampilan, dan responsivitas website.' },
  { number: '05', icon: '▣', title: 'Penyelesaian', description: 'Merapikan isi, aset, dan dokumentasi proyek.' },
  { number: '06', icon: '↗', title: 'Presentasi', description: 'Menjelaskan proses dan hasil kerja kelompok.' }
];

const projectStats = [
  { value: 5, suffix: '', label: 'ANGGOTA KELOMPOK' }, { value: 1, suffix: '', label: 'PROYEK' },
  { value: 3, suffix: '+', label: 'TEKNOLOGI UTAMA' }, { value: null, suffix: '', label: 'IDE & KREATIVITAS' }
];

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const initials = (name) => name.split(' ').map((part) => part[0]).slice(0, 2).join('');

function renderAboutCards() {
  document.querySelector('#about-cards').innerHTML = aboutCards.map((card, index) => `
    <article class="about-card reveal" style="--delay:${index * 80}ms"><span class="about-card-icon" aria-hidden="true">${card.icon}</span>
      <h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.description)}</p></article>`).join('');
}

function renderTopics() {
  document.querySelector('#materials-grid').innerHTML = topics.map((topic, index) => `
    <button class="topic-card reveal" type="button" data-topic="${index}" style="--delay:${index * 40}ms">
      <span class="topic-head"><span class="topic-icon">${topic.icon}</span><span class="topic-index">${String(index + 1).padStart(2, '0')}</span></span>
      <span class="topic-label">${escapeHtml(topic.label)}</span><strong>${escapeHtml(topic.title)}</strong><span class="topic-open">LIHAT PENJELASAN <b aria-hidden="true">↗</b></span>
    </button>`).join('');
}

function renderTechnologies() {
  document.querySelector('#tech-grid').innerHTML = technologies.map((item, index) => `
    <article class="tech-card reveal" style="--delay:${index * 45}ms"><span class="tech-symbol" aria-hidden="true">${item.icon}</span>
      <span class="tech-index">${String(index + 1).padStart(2, '0')}</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p></article>`).join('');
}

function renderBenefits() {
  document.querySelector('#benefits-grid').innerHTML = benefits.map((item, index) => `
    <article class="benefit-card reveal" style="--delay:${index * 40}ms"><span class="benefit-icon" aria-hidden="true">${item.icon}</span>
      <div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></div><span class="benefit-number">${String(index + 1).padStart(2, '0')}</span></article>`).join('');
}

function watchImage(image, frame) {
  const showFallback = () => { frame.classList.add('has-fallback'); image.remove(); };
  if (image.complete) { if (!image.naturalWidth) showFallback(); return; }
  image.addEventListener('error', showFallback, { once: true });
}

function renderMembers() {
  const grid = document.querySelector('#team-grid');
  grid.innerHTML = members.map((member, index) => `
    <article class="member-card reveal" style="--delay:${index * 60}ms"><div class="member-photo ${member.photoClass || ''}">
      <span class="member-number">${member.number} / 05</span><span class="photo-fallback" aria-hidden="true">${escapeHtml(initials(member.name))}</span>
      <img src="${escapeHtml(member.photo)}" alt="Foto ${escapeHtml(member.name)}" loading="lazy"><span class="photo-caption">KELOMPOK PWL · 2026</span></div>
      <div class="member-content"><span class="member-role">${escapeHtml(member.role)}</span><h3>${escapeHtml(member.name)}</h3>
      <p>NPM · ${escapeHtml(member.npm)}</p><p>Program Studi · ${escapeHtml(member.prodi)}</p><p>Hobi · ${escapeHtml(member.hobby)}</p>
      <button class="profile-button" type="button" data-member="${index}">LIHAT PROFIL <span aria-hidden="true">↗</span></button></div></article>`).join('');
  grid.querySelectorAll('.member-photo img').forEach((image) => watchImage(image, image.closest('.member-photo')));
}

function renderTasks() {
  document.querySelector('#task-list').innerHTML = members.map((member, index) => `
    <article class="task-row reveal" style="--delay:${index * 55}ms"><span class="task-symbol" aria-hidden="true">${['◎', '◇', '&lt;/&gt;', 'JS', '▤'][index]}</span>
      <span class="task-number">${member.number}</span><div><h3>${escapeHtml(member.name)}</h3><span>${escapeHtml(member.role)}</span></div>
      <p>${escapeHtml(member.description)}</p><span class="task-arrow" aria-hidden="true">↗</span></article>`).join('');
}

function renderFlow() {
  document.querySelector('#flow-track').innerHTML = flowNodes.map((node, index) => `
    <div class="flow-node" data-flow-node="${index}"><span class="flow-icon" aria-hidden="true">${node.icon}</span>
      <strong>${escapeHtml(node.name)}</strong><small>${node.direction === 'request' ? 'PERMINTAAN' : 'BALASAN'}</small></div>
      ${index < flowNodes.length - 1 ? `<span class="flow-connector ${index < 4 ? 'request-path' : 'response-path'}" aria-hidden="true"><i></i></span>` : ''}`).join('');
}

function renderJourney() {
  document.querySelector('#journey-track').innerHTML = journey.map((step) => `
    <article class="journey-step reveal"><span class="journey-node">${step.icon}</span><span class="journey-number">${step.number}</span>
      <h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.description)}</p></article>`).join('');
}

function renderProjectStats() {
  document.querySelector('#project-stats').innerHTML = projectStats.map((item) => `
    <div class="project-stat"><strong ${item.value === null ? '' : `data-counter="${item.value}"`}>${item.value === null ? '∞' : '00'}${item.suffix}</strong>
      <span>${escapeHtml(item.label)}</span></div>`).join('');
}

function openModal(markup, trigger) {
  const modal = document.querySelector('#detail-modal');
  modal.returnFocus = trigger;
  document.querySelector('#modal-content').innerHTML = markup;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
}

function showTopic(index, trigger) {
  const topic = topics[index];
  if (!topic) return;
  openModal(`<p class="eyebrow"><span></span> MATERI PWL · ${escapeHtml(topic.label)}</p><h2 id="modal-title">${escapeHtml(topic.title)}</h2>
    <p class="modal-description">${escapeHtml(topic.detail)}</p><div class="example-box"><span>CONTOH</span><code>${escapeHtml(topic.example)}</code></div>`, trigger);
}

function showProfile(index, trigger) {
  const member = members[index];
  if (!member) return;
  openModal(`<div class="profile-modal-layout"><div class="modal-photo ${member.photoClass || ''}"><span class="photo-fallback" aria-hidden="true">${escapeHtml(initials(member.name))}</span>
    <img src="${escapeHtml(member.photo)}" alt="Foto ${escapeHtml(member.name)}"></div><div class="modal-profile-copy"><p class="eyebrow"><span></span> ANGGOTA ${member.number}</p>
    <h2 id="modal-title">${escapeHtml(member.name)}</h2><p class="modal-meta">NPM · ${escapeHtml(member.npm)}<br>Program Studi · ${escapeHtml(member.prodi)}</p>
    <span class="modal-role">${escapeHtml(member.role)}</span><p class="modal-description">${escapeHtml(member.description)}</p>
    <div class="profile-facts"><div><span>HOBI</span><strong>${escapeHtml(member.hobby)}</strong></div></div></div></div>`, trigger);
  const image = document.querySelector('.modal-photo img');
  watchImage(image, image.closest('.modal-photo'));
}

function closeModal() {
  const modal = document.querySelector('#detail-modal');
  if (!modal.classList.contains('is-open')) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  modal.returnFocus?.focus();
  modal.returnFocus = null;
}

function setupRevealAndCounters() {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const counterObserver = new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const total = Number(element.dataset.counter);
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 850, 1);
      element.textContent = String(Math.round(total * (1 - (1 - progress) ** 3))).padStart(2, '0') + (total === 3 ? '+' : '');
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    observer.unobserve(element);
  }), { threshold: 0.75 });
  document.querySelectorAll('[data-counter]').forEach((element) => counterObserver.observe(element));
}

function replayFlow() {
  const track = document.querySelector('#flow-track');
  track.classList.remove('is-playing');
  track.querySelectorAll('.flow-node').forEach((node) => node.classList.remove('is-active'));
  void track.offsetWidth;
  track.classList.add('is-playing');
  track.querySelectorAll('.flow-node').forEach((node, index) => window.setTimeout(() => node.classList.add('is-active'), index * 150));
}

function setupInteractions() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#nav-links');
  const topButton = document.querySelector('#back-to-top');
  const updateOnScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 16);
    topButton.classList.toggle('is-visible', window.scrollY > 420);
  };
  window.addEventListener('scroll', updateOnScroll, { passive: true });
  updateOnScroll();

  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menuToggle.setAttribute('aria-label', open ? 'Buka menu' : 'Tutup menu');
    nav.classList.toggle('is-open', !open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Buka menu');
    nav.classList.remove('is-open');
  }));
  document.querySelector('#materials-grid').addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-topic]');
    if (trigger) showTopic(Number(trigger.dataset.topic), trigger);
  });
  document.querySelector('#team-grid').addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-member]');
    if (trigger) showProfile(Number(trigger.dataset.member), trigger);
  });
  const modal = document.querySelector('#detail-modal');
  modal.addEventListener('click', (event) => { if (event.target.matches('[data-modal-close]')) closeModal(); });
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
  document.querySelector('#replay-flow').addEventListener('click', replayFlow);
  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) document.querySelectorAll('.nav-links a').forEach((link) => link.classList.toggle('is-current', link.hash === `#${entry.target.id}`));
  }), { rootMargin: '-35% 0px -55% 0px' });
  document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = form.elements.namedItem('nama').value.trim();
    document.querySelector('#form-feedback').textContent = `Terima kasih, ${name}. Pesan Anda sudah dicatat di halaman ini.`;
    form.reset();
  });
}

function setupParticles() {
  const layer = document.querySelector('.hero-particles');
  for (let index = 0; index < 18; index += 1) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * -8}s`;
    layer.append(particle);
  }
}

function setupTyping() {
  const target = document.querySelector('.hero-subtitle');
  const sentence = 'Mengenal Teknologi Web, Membangun Kreativitas, dan Berkarya Bersama.';
  let position = 0;
  const typeNext = () => {
    target.textContent = sentence.slice(0, position + 1);
    position += 1;
    if (position < sentence.length) window.setTimeout(typeNext, 32);
  };
  window.setTimeout(typeNext, 420);
}

function initialize() {
  renderAboutCards(); renderTopics(); renderTechnologies(); renderBenefits(); renderFlow(); renderMembers(); renderTasks(); renderJourney(); renderProjectStats();
  setupParticles(); setupInteractions(); setupRevealAndCounters(); setupTyping(); replayFlow();
  window.setTimeout(() => document.querySelector('#loader').classList.add('is-done'), 850);
}

document.addEventListener('DOMContentLoaded', initialize);
