// === HEADER SCROLL ===
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// === CONTADOR CARRINHO ===
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem('sneakerCart')) || [];
  let total = 0;
  cart.forEach(item => { total += item.quantity; });
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }
}
updateCartCounter();

// === SCROLL AO HERO ===
function scrollToProducts() {
  document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
}

// === ELEMENTOS ===
const searchInput  = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const clearBtn     = document.getElementById('clearSearch');
const products     = document.querySelectorAll('.product-link');
const emptyState   = document.getElementById('emptyState');
const emptyMsg     = document.getElementById('emptyMsg');
const searchResult = document.getElementById('searchResult');

// === BUSCA ===
searchButton.addEventListener('click', searchProducts);
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') searchProducts();
  if (e.key === 'Escape') clearSearch();
});
searchInput.addEventListener('input', () => {
  clearBtn.style.display = searchInput.value ? 'block' : 'none';
});

function searchProducts() {
  const value = searchInput.value.trim().toLowerCase();
  if (!value) { clearSearch(); return; }

  let found = 0;
  products.forEach(product => {
    const name = product.dataset.name.toLowerCase();
    if (name.includes(value)) {
      product.style.display = 'block';
      found++;
    } else {
      product.style.display = 'none';
    }
  });

  searchResult.textContent = found
    ? `${found} resultado${found > 1 ? 's' : ''} para "${value}"`
    : '';

  if (found === 0) {
    emptyMsg.textContent = `Nenhum tênis encontrado para "${value}"`;
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
  }
}

function clearSearch() {
  searchInput.value = '';
  clearBtn.style.display = 'none';
  searchResult.textContent = '';
  emptyState.style.display = 'none';
  products.forEach(p => { p.style.display = 'block'; });
  // Reaplica filtro de marca ativo
  const activeFilter = document.querySelector('.filter-btn.active');
  if (activeFilter && activeFilter.dataset.brand !== 'all') {
    filterByBrand(activeFilter.dataset.brand);
  }
}

// === FILTROS — MENU DESKTOP E BARRA MOBILE ===
const allFilterTriggers = document.querySelectorAll('.filter-btn, .menu-link');

allFilterTriggers.forEach(trigger => {
  trigger.addEventListener('click', e => {
    e.preventDefault();
    const brand = trigger.dataset.brand;

    // Sincroniza ambos os conjuntos de filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.brand === brand);
    });
    document.querySelectorAll('.menu-link').forEach(link => {
      link.classList.toggle('active', link.dataset.brand === brand);
    });

    filterByBrand(brand);
    searchInput.value = '';
    searchResult.textContent = '';
    emptyState.style.display = 'none';
  });
});

function filterByBrand(brand) {
  let found = 0;
  products.forEach(product => {
    const match = brand === 'all' || product.dataset.brand === brand;
    product.style.display = match ? 'block' : 'none';
    if (match) found++;
  });
  if (found === 0) {
    emptyMsg.textContent = `Nenhum tênis encontrado para "${brand}"`;
    emptyState.style.display = 'block';
  }
}

// === QUICK ADD (+ Carrinho na home) ===
document.querySelectorAll('.quick-add').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    const { id, name, brand, price, image } = btn.dataset;
    const cart = JSON.parse(localStorage.getItem('sneakerCart')) || [];

    const existing = cart.find(item => item.id === id && !item.size);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({
        id, name, brand,
        price: parseFloat(price),
        size: 'único',
        quantity: 1,
        image
      });
    }

    localStorage.setItem('sneakerCart', JSON.stringify(cart));
    updateCartCounter();

    // Feedback visual no botão
    btn.textContent = '✓ Adicionado!';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = '+ Carrinho';
      btn.classList.remove('added');
    }, 2000);

    showToast(`${name} adicionado ao carrinho!`);
  });
});

// === TOAST ===
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// === ANIMAÇÃO SCROLL DOS CARDS ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${i * 0.07}s`;
      entry.target.classList.add('card-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(24px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

// Adiciona classe que dispara a animação
const style = document.createElement('style');
style.textContent = `.card-visible { opacity: 1 !important; transform: none !important; }`;
document.head.appendChild(style);