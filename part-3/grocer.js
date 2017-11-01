
// Button Selectors
const cartBtn = document.getElementById('cart-btn')
const closeBtn = document.querySelector('.close-btn')
const clearBtn = document.querySelector('.clear-btn')
const addBtns = document.querySelectorAll('.item-btn')
//
const modal = document.getElementById('cartModal')

cartBtn.addEventListener('click', () => modal.style.display = 'block')
closeBtn.addEventListener('click', () => modal.style.display = 'none')
