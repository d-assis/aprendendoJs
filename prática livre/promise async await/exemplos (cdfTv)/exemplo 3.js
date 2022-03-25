const ul = document.querySelector('#users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    // a linha abaixo não funciona, mas pq???????
    //.then((response) => {response.json()})
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        
        return data.map((user) => {
            let li = document.createElement('li');
            li.innerHTML = `${user.name} (${user.username})`;
            ul.appendChild(li)
        })
        
    })
    .catch((error) => {console.log(`Ooops! ${error}`)})
