
const cartBtn = document.getElementById('cart-button')
const closeBtn = document.querySelector('.close-btn')
const modal = document.getElementById('cartModal')

cartBtn.addEventListener('click', () => modal.style.display = 'block')
closeBtn.addEventListener('click', () => modal.style.display = 'none')
