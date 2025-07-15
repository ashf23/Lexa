let cart = [];

function addToCart(book, price) {
  cart.push({ book, price });
  updateCart();
}

function updateCart() {
  const list = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');
  const whatsappButton = document.getElementById('whatsapp-button');

  list.innerHTML = '';
  let total = 0;
  let message = 'Hola, quiero pedir los siguientes libros:%0A';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.book + ' - RD$' + item.price;
    list.appendChild(li);
    total += item.price;
    message += '- ' + item.book + '%0A';
  });

  totalDisplay.textContent = total;
  whatsappButton.href = 'https://wa.me/1809992681?text=' + message + 'Total: RD$' + total;
}
