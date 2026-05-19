// js/app.js
// Use this COMPLETE working file.
// This fixes the issue where wallpapers were not showing on the home page.

const galleryContainer = document.getElementById('galleryContainer');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('themeToggle');

let currentCategory = 'all';

// Read URL parameters
const params = new URLSearchParams(window.location.search);
const urlCategory = params.get('category');
const urlTag = params.get('tag');

// Apply category from URL if present
if (urlCategory) {
  currentCategory = urlCategory;
}

// Set active category button
filterButtons.forEach(btn => {
  if (btn.dataset.category === currentCategory) {
    btn.classList.add('active');
  }

  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentCategory = btn.dataset.category;

    // Remove tag filters when category button is clicked
    window.history.replaceState(
      {},
      '',
      currentCategory === 'all'
        ? 'index.html'
        : `index.html?category=${currentCategory}`
    );

    renderGallery();
  });
});

// Search event
if (searchInput) {
  searchInput.addEventListener('input', renderGallery);
}

// Theme toggle
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');

    const isLight = document.body.classList.contains('light');

    localStorage.setItem(
      'theme',
      isLight ? 'light' : 'dark'
    );

    themeToggle.textContent = isLight ? '☀️' : '🌙';
  });
}

// Load saved theme
(function loadTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light');

    if (themeToggle) {
      themeToggle.textContent = '☀️';
    }
  }
})();

// Render gallery
function renderGallery() {
  if (!galleryContainer) return;

  const query = searchInput
    ? searchInput.value.toLowerCase()
    : '';

  const filtered = wallpapers.filter(item => {
    // Category filter
    const matchesCategory =
      currentCategory === 'all' ||
      item.category === currentCategory;

    // Search filter
    const matchesSearch =
      item.title.toLowerCase().includes(query);

    // Tag filter
    // For now, both 4K and HD should show all wallpapers
    const matchesTag =
      !urlTag ||
      urlTag === '4k' ||
      urlTag === 'hd';

    return (
      matchesCategory &&
      matchesSearch &&
      matchesTag
    );
  });

  if (filtered.length === 0) {
    galleryContainer.innerHTML =
      '<p>No wallpapers found.</p>';
    return;
  }

  galleryContainer.innerHTML = filtered
    .map(
      item => `
      <div class="card">
        <img src="${item.image}" alt="${item.title}">

        <div class="card-content">
          <h3>${item.title}</h3>
          <p>${item.category.toUpperCase()} • 4K</p>

            <div class="actions">
            <!-- Preview Button -->
            <a
                class="btn icon-btn"
                href="preview.html?id=${item.id}"
                title="Preview"
            >
                👁
            </a>

            <!-- Download Button -->
            <a
                class="btn download-btn-card"
                href="${item.image}"
                download
                target="_blank"
            >
                Download
            </a>
            </div>
        </div>
      </div>
    `
    )
    .join('');
}

// Initial render
renderGallery();