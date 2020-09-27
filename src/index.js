import './scss/style.scss'
import addressItemTemplate from './template/AddresItemTemplate'
import AddressFinder from './api/AddressFinder'
import Replacer from './utils/replacer'

const adressInput = document.querySelector('#addres')
const resultsContainer = document.querySelector('#results')

const state = {
  inputs: {
    address: {
      isActive: false,
      value: '',
    },
    district: {
      isActive: false,
      value: '',
    },
    aria: {
      isActive: false,
      value: '',
    },
  },
  resultsList: []
}

const renderList = (list) => {
  const templateList = list.map((el, i) => {
    if (i > 50) return
    const { address, district, aria, demolition } = el
    return addressItemTemplate(address, district, aria, demolition)
  })

  resultsContainer.innerHTML = templateList.join('')

  document.querySelectorAll('.addressItem').forEach(el => {
    el.addEventListener('click', (e) => {
      if (el.classList.contains('show')) {
        el.classList.remove('show')
      } else el.classList.add('show')
    })
  })
}

const setAddressInputValue = (value) => {
  const adress = Replacer(value)
  adressInput.value = adress
  state.resultsList = AddressFinder(adress)
  renderList(state.resultsList)
}

adressInput.addEventListener('input', e => setAddressInputValue(e.target.value))