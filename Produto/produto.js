// === BANCO DE DADOS DE PRODUTOS ===
const PRODUCTS = {
  'nike-air-max': {
    id: 'nike-air-max',
    name: 'Nike Air Max',
    brand: 'Nike',
    badge: 'Novo',
    price: 599.90,
    stars: 5,
    reviews: 142,
    description: 'O Nike Air Max oferece amortecimento Air Max de última geração, cabedal respirável e sola de borracha de alta tração. Perfeito para o uso diário com estilo e conforto premium. A tecnologia Air na entressola garante conforto durante todo o dia, enquanto o design moderno combina com qualquer look.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900',
    thumbs: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=900',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=900',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=900'
    ],
    oldPrice: null,
    installments: 6
  },
  'adidas-ultraboost': {
    id: 'adidas-ultraboost',
    name: 'Adidas Ultraboost',
    brand: 'Adidas',
    badge: null,
    price: 699.90,
    stars: 5,
    reviews: 98,
    description: 'O Adidas Ultraboost é o tênis de corrida mais confortável do mundo. Com tecnologia Boost que devolve energia a cada passada, cabedal Primeknit que se adapta ao seu pé e sola Continental™ para máxima tração em qualquer superfície.',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=900',
    thumbs: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=900',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=900',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=900'
    ],
    oldPrice: null,
    installments: 6
  },
  'puma-rsx': {
    id: 'puma-rsx',
    name: 'Puma RS-X',
    brand: 'Puma',
    badge: null,
    price: 499.90,
    stars: 4,
    reviews: 67,
    description: 'O Puma RS-X resgata a estética dos anos 80 com uma roupagem moderna. Design bold e chunky, amortecimento RS (Running System) no calcanhar e parte frontal, e cabedal em mesh e couro sintético para durabilidade e estilo únicos.',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=900',
    thumbs: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=900',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=900',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=900'
    ],
    oldPrice: null,
    installments: 5
  },
  'nb-550': {
    id: 'nb-550',
    name: 'New Balance 550',
    brand: 'New Balance',
    badge: null,
    price: 749.90,
    stars: 5,
    reviews: 211,
    description: 'O New Balance 550 é um clássico dos anos 80 ressuscitado com todo o seu charme original. Cabedal em couro premium, entressola em EVA e sola de borracha durável. Um ícone do streetwear que nunca sai de moda.',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=900',
    thumbs: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=900',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=900',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=900'
    ],
    oldPrice: null,
    installments: 6
  },
  'jordan-low': {
    id: 'jordan-low',
    name: 'Jordan Low',
    brand: 'Jordan',
    badge: '-20%',
    price: 899.90,
    stars: 5,
    reviews: 185,
    description: 'O Air Jordan Low traz o legado do maior jogador de basquete de todos os tempos em um perfil mais baixo e versátil. Couro premium, amortecimento Air visível no calcanhar e detalhes icônicos da linha Jordan. Estilo que transcende as quadras.',
    image: 'https://images.unsplash.com/photo-1584735175315-9d5df23be4be?q=80&w=900',
    thumbs: [
      'https://images.unsplash.com/photo-1584735175315-9d5df23be4be?q=80&w=900',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=900',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=900'
    ],
    oldPrice: 1124.90,
    installments: 9
  },
  'adidas-forum': {
    id: 'adidas-forum',
    name: 'Adidas Forum',
    brand: 'Adidas',
    badge: null,
    price: 639.90,
    stars: 4,
    reviews: 73,
    description: 'O Adidas Forum é uma lenda do basquete dos anos 80, agora com novo fôlego. Cabedal alto em couro, tira de velcro cruzada, e sola de borracha robusta. Um tênis que define gerações e continua sendo referência de estilo.',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=900',
    thumbs: [
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=900',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=900',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=900'
    ],
    oldPrice: null,
    installments: 6
  },
  'nike-revolution': {
    id: 'nike-revolution',
    name: 'Nike Revolution',
    brand: 'Nike',
    badge: null,
    price: 459.90,
    stars: 4,
    reviews: 54,
    description: 'O Nike Revolution é o parceiro ideal para quem quer começar a correr ou simplesmente um tênis leve para o dia a dia. Cabedal respirável, entressola de espuma macia e sola de borracha flexível que se adapta ao movimento natural do pé.',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=900',
    thumbs: [
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=900',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=900',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=900'
    ],
    oldPrice: null,
    installments: 5
  },
  'nike-dunk': {
    id: 'nike-dunk',
    name: 'Nike Dunk Low',
    brand: 'Nike',
    badge: 'Hot',
    price: 799.90,
    stars: 5,
    reviews: 320,
    description: 'O Nike Dunk Low é o tênis do momento. Originalmente criado para o basquete universitário em 1985, conquistou as ruas e não saiu mais. Cabedal em couro com sobreposições contrastantes, colarinho acolchoado e sola de borracha com padrão de pivô.',
    image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=900',
    thumbs: [
      'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=900',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=900',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=900'
    ],
    oldPrice: null,
    installments: 8
  }
};

// === CARREGAR PRODUTO DA URL ===
function getProductFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  return id && PRODUCTS[id] ? PRODUCTS[id] : PRODUCTS['nike-air-max'];
}

// === RENDERIZAR PRODUTO NA PÁGINA ===
function renderProduct(p) {
  // Título da aba
  document.title = `${p.name} — SneakerStore`;

  // Imagem principal
  document.getElementById('productImage').src = p.image;
  document.getElementById('productImage').alt = p.name;

  // Miniaturas
  const thumbsEl = document.querySelector('.thumbnails');
  thumbsEl.innerHTML = p.thumbs.map((src, i) => `
    <button class="thumb ${i === 0 ? 'active' : ''}" onclick="changeImage(this, '${src}')">
      <img src="${src.replace('w=900', 'w=200')}" alt="Ângulo ${i + 1}">
    </button>
  `).join('');

  // Marca e badge
  document.querySelector('.product-meta .brand').textContent = p.brand;
  const badgeEl = document.querySelector('.product-badge');
  if (p.badge) {
    badgeEl.textContent = p.badge;
    badgeEl.style.display = 'inline-block';
  } else {
    badgeEl.style.display = 'none';
  }

  // Nome
  document.querySelector('.product-info h1').textContent = p.name;

  // Avaliações
  const starsText = '★'.repeat(p.stars) + '☆'.repeat(5 - p.stars);
  document.querySelector('.stars').textContent = starsText;
  document.querySelector('.rating-count').textContent = `(${p.reviews} avaliações)`;

  // Preço
  const priceBlock = document.querySelector('.price-block');
  const installmentValue = (p.price / p.installments).toFixed(2).replace('.', ',');
  const priceFormatted = p.price.toFixed(2).replace('.', ',');

  if (p.oldPrice) {
    const oldPriceFormatted = p.oldPrice.toFixed(2).replace('.', ',');
    priceBlock.innerHTML = `
      <small class="old-price">R$ ${oldPriceFormatted}</small>
      <strong class="price">R$ ${priceFormatted}</strong>
      <span class="price-installment">ou ${p.installments}x de R$ ${installmentValue} sem juros</span>
    `;
  } else {
    priceBlock.innerHTML = `
      <strong class="price">R$ ${priceFormatted}</strong>
      <span class="price-installment">ou ${p.installments}x de R$ ${installmentValue} sem juros</span>
    `;
  }

  // Descrição
  document.querySelector('.description').textContent = p.description;
}

// === PRODUTO ATIVO ===
const currentProduct = getProductFromURL();
renderProduct(currentProduct);

// === CONTADOR CARRINHO ===
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem('sneakerCart')) || [];
  let total = 0;
  cart.forEach(item => { total += item.quantity; });
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = total;
}
updateCartCounter();

// === TROCAR IMAGEM ===
function changeImage(thumbEl, src) {
  document.getElementById('productImage').src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

// === QUANTIDADE ===
let quantity = 1;

function increase() {
  quantity++;
  document.getElementById('quantity').textContent = quantity;
}

function decrease() {
  if (quantity > 1) {
    quantity--;
    document.getElementById('quantity').textContent = quantity;
  }
}

// === SELEÇÃO DE TAMANHO ===
let selectedSize = null;

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedSize = btn.textContent.trim();
  document.getElementById('sizeError').classList.remove('show');
}

// === VALIDAÇÃO ===
function validateSize() {
  if (!selectedSize) {
    const err = document.getElementById('sizeError');
    err.classList.add('show');
    document.querySelector('.sizes').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return false;
  }
  return true;
}

// === ADICIONAR AO CARRINHO ===
function addToCart() {
  if (!validateSize()) return;

  const cart = JSON.parse(localStorage.getItem('sneakerCart')) || [];

  const product = {
    id: currentProduct.id,
    name: currentProduct.name,
    brand: currentProduct.brand,
    price: currentProduct.price,
    size: selectedSize,
    quantity: quantity,
    image: currentProduct.image
  };

  const existing = cart.find(item => item.id === product.id && item.size === product.size);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem('sneakerCart', JSON.stringify(cart));
  updateCartCounter();

  const btn = document.getElementById('addCartBtn');
  btn.textContent = '✓ Adicionado!';
  btn.classList.add('added');
  setTimeout(() => {
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      Adicionar ao Carrinho
    `;
    btn.classList.remove('added');
  }, 2500);

  showToast(`${currentProduct.name} adicionado ao carrinho!`);
}

// === COMPRAR AGORA ===
function buyNow() {
  if (!validateSize()) return;
  addToCart();
  setTimeout(() => {
    window.location.href = '../carrinho/carrinho.html';
  }, 600);
}

// === TOAST ===
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}