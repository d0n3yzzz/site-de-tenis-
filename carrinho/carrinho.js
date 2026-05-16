// === ESTADO DO CARRINHO ===
// Sempre lê do localStorage para refletir mudanças de outras páginas
function getCart() {
  return JSON.parse(localStorage.getItem('sneakerCart')) || [];
}
function saveCart(cart) {
  localStorage.setItem('sneakerCart', JSON.stringify(cart));
}

// Desconto de cupom (state local)
let discountPercent = 0;
const VALID_COUPONS = {
  'SNEAKER10': 10,
  'PROMO20': 20,
  'FRETE': 0  // cupom de frete grátis (tratado no cálculo)
};

// === RENDER CARRINHO ===
function renderCart() {
  const cart = getCart();
  const cartItems = document.getElementById('cartItems');
  const itemCount = document.getElementById('itemCount');
  const checkoutBtn = document.getElementById('checkoutBtn');

  cartItems.innerHTML = '';

  // Total de itens
  const totalQty = cart.reduce((acc, i) => acc + i.quantity, 0);
  itemCount.textContent = `${totalQty} item${totalQty !== 1 ? 's' : ''}`;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h3>Seu carrinho está vazio</h3>
        <p>Adicione tênis incríveis para começar.</p>
        <a href="../paginaPrincipal/paginainicial.html">Explorar Produtos</a>
      </div>`;
    checkoutBtn.disabled = true;
    updateSummary(0);
    return;
  }

  checkoutBtn.disabled = false;

  cart.forEach((item, index) => {
    const itemTotal = (item.price * item.quantity).toFixed(2).replace('.', ',');
    const priceFormatted = item.price.toFixed(2).replace('.', ',');

    const el = document.createElement('article');
    el.className = 'cart-item';
    el.dataset.index = index;
    el.innerHTML = `
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <div class="item-info">
        <p class="item-brand">${item.brand}</p>
        <h3>${item.name}</h3>
        <span class="item-size">Tam. ${item.size}</span>
      </div>
      <div class="item-right">
        <div class="quantity-controls">
          <button onclick="changeQty(${index}, -1)" aria-label="Diminuir">−</button>
          <span>${item.quantity}</span>
          <button onclick="changeQty(${index}, 1)" aria-label="Aumentar">+</button>
        </div>
        <strong class="item-price">R$ ${itemTotal}</strong>
        <button class="remove-btn" onclick="removeItem(${index})">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18"/><path d="M19 6l-1 14H6L5 6"/><path d="M9 6V4h6v2"/></svg>
          Remover
        </button>
      </div>`;
    cartItems.appendChild(el);
  });

  updateSummary();
}

// === ATUALIZAR RESUMO ===
function updateSummary() {
  const cart = getCart();
  let subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);

  // Frete: grátis acima de 500 ou com cupom FRETE
  const couponCode = document.getElementById('couponInput').value.trim().toUpperCase();
  let shipping = subtotal > 500 || couponCode === 'FRETE' ? 0 : 29.90;

  // Desconto percentual
  let discount = 0;
  if (discountPercent > 0) {
    discount = subtotal * (discountPercent / 100);
  }

  const total = subtotal - discount + shipping;

  // Formata valores
  const fmt = v => 'R$ ' + v.toFixed(2).replace('.', ',');

  document.getElementById('subtotal').textContent = fmt(subtotal);
  document.getElementById('shipping').textContent  = shipping === 0 ? 'Grátis 🎉' : fmt(shipping);
  document.getElementById('total').textContent     = fmt(total);

  // Linha de desconto
  const promoRow = document.getElementById('promoRow');
  if (discount > 0) {
    promoRow.style.display = 'flex';
    document.getElementById('promoValue').textContent = '−' + fmt(discount);
  } else {
    promoRow.style.display = 'none';
  }
}

// === MUDAR QUANTIDADE ===
function changeQty(index, delta) {
  const cart = getCart();
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) cart[index].quantity = 1;
  saveCart(cart);
  renderCart();
}

// === REMOVER ITEM ===
function removeItem(index) {
  const cart = getCart();
  const name = cart[index].name;
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
  showToast(`${name} removido do carrinho.`);
}

// === CUPOM ===
function applyCoupon() {
  const input   = document.getElementById('couponInput');
  const msg     = document.getElementById('couponMsg');
  const code    = input.value.trim().toUpperCase();

  if (!code) {
    msg.textContent = 'Digite um código.';
    msg.className   = 'coupon-hint error';
    return;
  }

  if (code === 'FRETE') {
    discountPercent = 0;
    msg.textContent = '✓ Frete grátis aplicado!';
    msg.className   = 'coupon-hint success';
    input.disabled  = true;
    document.getElementById('couponBtn').disabled = true;
    updateSummary();
    return;
  }

  if (VALID_COUPONS[code] !== undefined) {
    discountPercent = VALID_COUPONS[code];
    msg.textContent = `✓ Cupom aplicado! ${discountPercent}% de desconto.`;
    msg.className   = 'coupon-hint success';
    input.disabled  = true;
    document.getElementById('couponBtn').disabled = true;
    updateSummary();
  } else {
    discountPercent = 0;
    msg.textContent = '✗ Cupom inválido ou expirado.';
    msg.className   = 'coupon-hint error';
  }
}

// Aplica cupom ao pressionar Enter no campo
document.getElementById('couponInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') applyCoupon();
});

// === CHECKOUT ===
function checkout() {
  const cart = getCart();
  if (cart.length === 0) return;

  // Exibe modal de sucesso
  document.getElementById('modalOverlay').classList.add('show');
  localStorage.removeItem('sneakerCart');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show');
  window.location.href = '../paginaPrincipal/paginainicial.html';
}

// Fecha modal ao clicar fora
document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// === TOAST ===
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// === INIT ===
renderCart();