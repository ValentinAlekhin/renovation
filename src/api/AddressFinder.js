import data from '../renovationList.json'

const dataList = Object.entries(data).map(([address, {id, district, aria, demolition}]) => {
  return {
    address, id, district, aria, demolition,
  }
})

export default str => {
  if (!str) return []

  const REGaddress = new RegExp(`^${str.toLowerCase()}`)
  return dataList.filter(el => REGaddress.test(el.address.toLowerCase()))
}