fetch('https://randomuser.me/api/?results=8') 
    .then(response => response.json()) //получила ответ от бэкэнда
    .then(data => {
        const team = document.querySelector('#team') //полусила доступ к html тэгу

        data.results.sort((male, female) => {
            return male.gender - female.gender
        }) //пыталась сделать сортировку по полу

        data.results.forEach(member => { //пробежалась по циклу
            const box =document.createElement('div') //создала дом элемент
            box.className = 'box'

            const name = document.createElement('div')

            const photo = document.createElement('img')
            photo.className='pic'

            photo.setAttribute("src", member.picture.large) //добавила атрибуты и присвоила значения из объекта
            photo.setAttribute("alt", "avatar")
            
            name.textContent = `${member.name.first} ${member.name.last}` //присвоила значения из объекта
            name.className = 'name'

            team.appendChild(box) //вставила в корневой элемент
            box.appendChild(photo)
            box.appendChild(name)
           
        })
    })