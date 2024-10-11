const API_URL = `https://jsonplaceholder.typicode.com/users`

const container = document.querySelector('.container')
const  box = document.querySelector('.box')

async function getAllUsersData() {
    const response = await fetch(API_URL)
    const data = await response.json()
    container.innerHTML = ''
    data.forEach((item) => {
        const div = document.createElement('div')
        div.className = 'box'
        div.innerHTML = ` 
        <h5>${item.id}</h5>
        <h4>${item.name}</h4>
    <p>${item.phone}</p> 
     <p>${item.email}</p>
      <p>${item.address.street}</p>
       <p>${item.address.city}</p>
        
    `
    container.appendChild(div)
    })
}
getAllUsersData()
// email,street, city, name