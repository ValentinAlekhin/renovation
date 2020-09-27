export default (address, district, aria, demolition) => `
  <div class="addressItem">
  <div class="addressString">
    <h4 class="adress">${address}</h4>
    <h5 class="district">${district}</h5>
    <h6 class="aria">${aria}</h6>
  </div>
  <div class="adressInfo">
  <div class="line"></div>
    <h2 class="info">Ваш дом снесут ${demolition}</h2>
  </div>
  </div>
`