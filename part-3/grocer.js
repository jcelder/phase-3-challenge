
// Button Selectors
const cartBtn = document.getElementById('cart-btn')
const closeBtn = document.querySelector('.close-btn')
const clearBtn = document.querySelector('.clear-btn')
const addBtns = document.querySelectorAll('.item-btn')

// Element Selectors
const modal = document.getElementById('cartModal')
const modalList = document.querySelector('.modal-list')
const counter = document.getElementById('cart-item-count')
const total = document.querySelector('.total-amount')

// Event listeners for opening and closing modal
cartBtn.addEventListener('click', () => {
  modal.style.display = 'block'
})
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

// Event listener for window
window.addEventListener('click', () => {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
})

// Event listener for Add to Cart buttons
addBtns.forEach((btn) => {
  btn.addEventListener('click', function() {
    addToCart(this.parentElement)
  })
})

// Event listener for clear button
clearBtn.addEventListener('click', () => {
  counter.innerHTML = 0
  total.innerHTML = '0.00'
  modalList.innerHTML = ''
})

/**
 * Copies child information from the selected parent li element to the add to cart modal
 * @param {string} [parent] - Parent li element
 */

const addToCart = (parent) => {
  const name = parent.children[0].innerHTML
  const price = parent.children[1].innerHTML
  const addLi = document.createElement('li')

  addLi.innerHTML = `<span class="item-name">${name}</span><span class="modal-item-price">${price}</span>`
  modalList.appendChild(addLi)
  addCounter()
  updateTotal(price)
}

/**
 * Updates the counter on the cart button
 */
const addCounter = () => {
  const currentCounter = counter.innerHTML
  counter.innerHTML = parseInt(currentCounter) + 1
}

/**
 * Updates the total price of items in the shopping cart
 */
const updateTotal = (price) => {
  const currentTotal = total.innerHTML
  const newTotal = parseFloat(currentTotal) + parseFloat(price.slice(1))
  total.innerHTML = newTotal
}
