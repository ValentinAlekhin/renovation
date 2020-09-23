import data from './renovationList.json' 
import './scss/style.scss'

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

const dataList = Object.entries(data).map(([address, {id, district, aria, demolition}]) => {
  return {
    address, id, district, aria, demolition,
  }
})

const addressItemTemplate = (address, district, aria, demolition) => `
  <div class="addressItem">
  <div class="addressString">
    <h4 class="address">${address}</h4>
    <h5 class="district">${district}</h5>
    <h6 class="aria">${aria}</h6>

  </div>
  <div class="adressInfo">
    <h2 class="info">Ваш дом снесут ${demolition}</h2>
  </div>
  </div>
`

const renderList = (list) => {
  console.log(list)
  const templateList = list.map((el, i) => {
    if (i > 50) return
    const { address, district, aria, demolition } = el
    return addressItemTemplate(address, district, aria, demolition)
  })

  resultsContainer.innerHTML = templateList.join('')
}

const setAddressInputValue = (value) => {
  state.inputs.address = value
  state.resultsList = setResultsList(value)
  renderList(state.resultsList)
}
const setDistrictInputValue = (value) => state.inputs.district = value
const setAriaInputValue = (value) => state.inputs.address = value

const setResultsList = address => {
  if (!address) return []

  const REGaddress = new RegExp(`^${address.toLowerCase()}`)
  return dataList.filter(el => REGaddress.test(el.address.toLowerCase()))
}

adressInput.addEventListener('input', e => setAddressInputValue(e.target.value))