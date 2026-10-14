// Semua biodata anggota diatur di array ini agar mudah diperbarui.
const anggota = [
  { nama: 'Beldelina Walkoma', fileFoto: 'images/beldelina.jpg', nim: '[NIM]', peran: 'Anggota Kelompok', hobi: '[HOBI]', deskripsi: '[DESKRIPSI]' },
  { nama: 'Grace Tevana Leteluru', fileFoto: 'images/grace.jpg', nim: '[NIM]', peran: 'Anggota Kelompok', hobi: '[HOBI]', deskripsi: '[DESKRIPSI]' },
  { nama: 'Jeslyn Daniella Nanuru', fileFoto: 'images/jeslyn.jpg', nim: '[NIM]', peran: 'Ketua / Koordinator Kelompok', hobi: '[HOBI]', deskripsi: '[DESKRIPSI]', ketua: true },
  { nama: 'Joysen Esra Pattiasina', fileFoto: 'images/joysen.jpg', nim: '[NIM]', peran: 'Anggota Kelompok', hobi: '[HOBI]', deskripsi: '[DESKRIPSI]' },
  { nama: 'Yiska Maryam Laufa', fileFoto: 'images/yiska.jpg', nim: '[NIM]', peran: 'Anggota Kelompok', hobi: '[HOBI]', deskripsi: '[DESKRIPSI]' }
];

const nilaiKelompok = [
  { ikon: '</>', judul: 'Pemrograman', isi: 'Menerapkan logika dan menyusun kode yang mudah dipahami.' },
  { ikon: '▣', judul: 'Website', isi: 'Merancang pengalaman digital yang nyaman di berbagai perangkat.' },
  { ikon: '✳', judul: 'Teknologi', isi: 'Mengenal perangkat dan konsep web yang terus berkembang.' },
  { ikon: '◎', judul: 'Kerja Sama', isi: 'Berbagi peran, belajar bersama, dan menyelesaikan tujuan kelompok.' }
];

const escapeHtml = (nilai) => String(nilai).replace(/[&<>"']/g, (karakter) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[karakter]);
const inisial = (nama) => nama.split(' ').map((kata) => kata[0]).slice(0, 2).join('');

function pasangFallbackFoto(gambar, bingkai) {
  const gunakanInisial = () => {
    bingkai.classList.add('has-fallback');
    gambar.remove();
  };
  if (gambar.complete) {
    if (!gambar.naturalWidth) gunakanInisial();
    return;
  }
  gambar.addEventListener('error', gunakanInisial, { once: true });
}

function tampilkanNilaiKelompok() {
  document.querySelector('#about-values').innerHTML = nilaiKelompok.map((item, urutan) => `
    <article class="value-card reveal" style="--delay:${urutan * 60}ms">
      <span class="value-icon" aria-hidden="true">${escapeHtml(item.ikon)}</span>
      <h3>${escapeHtml(item.judul)}</h3><p>${escapeHtml(item.isi)}</p>
    </article>`).join('');
}

function tampilkanAnggota() {
  const wadah = document.querySelector('#team-grid');
  wadah.innerHTML = anggota.map((orang, urutan) => `
    <article class="member-card reveal ${orang.ketua ? 'member-card--leader' : ''}" style="--delay:${urutan * 65}ms">
      <div class="member-photo">
        <span class="member-count">${String(urutan + 1).padStart(2, '0')} / 05</span>
        <span class="photo-fallback" aria-hidden="true">${escapeHtml(inisial(orang.nama))}</span>
        <img src="${escapeHtml(orang.fileFoto)}" alt="Foto ${escapeHtml(orang.nama)}" loading="lazy">
      </div>
      <div class="member-content">
        ${orang.ketua ? '<span class="leader-flag">KETUA KELOMPOK</span>' : ''}
        <span class="member-role">${escapeHtml(orang.peran)}</span>
        <h3>${escapeHtml(orang.nama)}</h3>
        <p class="member-caption">Program Studi Informatika</p>
        <button class="profile-button" type="button" data-anggota="${urutan}">LIHAT PROFIL <span aria-hidden="true">↗</span></button>
      </div>
    </article>`).join('');
  wadah.querySelectorAll('.member-photo img').forEach((gambar) => pasangFallbackFoto(gambar, gambar.closest('.member-photo')));
}

function bukaProfil(urutan, pemicu) {
  const orang = anggota[urutan];
  if (!orang) return;
  const modal = document.querySelector('#profile-modal');
  const isi = document.querySelector('#modal-body');
  isi.innerHTML = `
    <div class="profile-modal-layout">
      <div class="modal-photo"><span class="photo-fallback" aria-hidden="true">${escapeHtml(inisial(orang.nama))}</span><img src="${escapeHtml(orang.fileFoto)}" alt="Foto ${escapeHtml(orang.nama)}"></div>
      <div class="modal-profile-copy"><p class="eyebrow"><span></span> PROFIL ANGGOTA ${String(urutan + 1).padStart(2, '0')}</p>
        <h2 id="modal-name">${escapeHtml(orang.nama)}</h2><p class="modal-role">${escapeHtml(orang.peran)}</p>
        <dl class="profile-details"><div><dt>NIM</dt><dd>${escapeHtml(orang.nim)}</dd></div>
          <div><dt>PROGRAM STUDI</dt><dd>Informatika</dd></div><div><dt>HOBI</dt><dd>${escapeHtml(orang.hobi)}</dd></div></dl>
        <p class="modal-description">${escapeHtml(orang.deskripsi)}</p>
      </div>
    </div>`;
  pasangFallbackFoto(isi.querySelector('.modal-photo img'), isi.querySelector('.modal-photo'));
  modal.returnFocus = pemicu;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
}

function tutupProfil() {
  const modal = document.querySelector('#profile-modal');
  if (!modal.classList.contains('is-open')) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  modal.returnFocus?.focus();
  modal.returnFocus = null;
}

function siapkanAnimasiGulir() {
  const pengamat = new IntersectionObserver((entri, pengamatSaatIni) => {
    entri.forEach((item) => {
      if (!item.isIntersecting) return;
      item.target.classList.add('is-visible');
      pengamatSaatIni.unobserve(item.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((elemen) => pengamat.observe(elemen));
}

function siapkanNavigasi() {
  const kepala = document.querySelector('.site-header');
  const tombolAtas = document.querySelector('#back-to-top');
  const menu = document.querySelector('.menu-toggle');
  const tautan = document.querySelector('#nav-links');
  const bilahGulir = document.querySelector('#scroll-progress');

  const perbaruiGulir = () => {
    kepala.classList.toggle('is-scrolled', window.scrollY > 12);
    tombolAtas.classList.toggle('is-visible', window.scrollY > 420);
    const jarak = document.documentElement.scrollHeight - window.innerHeight;
    bilahGulir.style.width = `${jarak > 0 ? (window.scrollY / jarak) * 100 : 0}%`;
  };
  window.addEventListener('scroll', perbaruiGulir, { passive: true });
  perbaruiGulir();

  menu.addEventListener('click', () => {
    const terbuka = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!terbuka));
    menu.setAttribute('aria-label', terbuka ? 'Buka menu' : 'Tutup menu');
    tautan.classList.toggle('is-open', !terbuka);
  });
  tautan.querySelectorAll('a').forEach((tautanMenu) => tautanMenu.addEventListener('click', () => {
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Buka menu');
    tautan.classList.remove('is-open');
  }));

  const pengamatBagian = new IntersectionObserver((entri) => entri.forEach((item) => {
    if (!item.isIntersecting) return;
    tautan.querySelectorAll('a').forEach((tautanMenu) => {
      tautanMenu.classList.toggle('is-current', tautanMenu.hash === `#${item.target.id}`);
    });
  }), { rootMargin: '-35% 0px -55% 0px' });
  document.querySelectorAll('main section[id]').forEach((bagian) => pengamatBagian.observe(bagian));
  tombolAtas.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function siapkanModal() {
  const modal = document.querySelector('#profile-modal');
  document.querySelector('#team-grid').addEventListener('click', (peristiwa) => {
    const pemicu = peristiwa.target.closest('[data-anggota]');
    if (pemicu) bukaProfil(Number(pemicu.dataset.anggota), pemicu);
  });
  modal.addEventListener('click', (peristiwa) => {
    if (peristiwa.target.matches('[data-modal-close]')) tutupProfil();
  });
  modal.querySelector('.modal-close').addEventListener('click', tutupProfil);
  document.addEventListener('keydown', (peristiwa) => {
    if (peristiwa.key === 'Escape') tutupProfil();
  });
}

function siapkanLogo() {
  document.querySelectorAll('img[src="images/logo-ukim.png"]').forEach((gambar) => {
    const sembunyikanGambarRusak = () => gambar.remove();
    if (gambar.complete && !gambar.naturalWidth) sembunyikanGambarRusak();
    else gambar.addEventListener('error', sembunyikanGambarRusak, { once: true });
  });
}

function mulaiWebsite() {
  tampilkanNilaiKelompok();
  tampilkanAnggota();
  siapkanLogo();
  siapkanAnimasiGulir();
  siapkanNavigasi();
  siapkanModal();
  window.setTimeout(() => document.querySelector('#loader').classList.add('is-done'), 800);
}

document.addEventListener('DOMContentLoaded', mulaiWebsite);
