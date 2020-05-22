fetch('https://randomuser.me/api/?results=8') 
    .then(response => response.json())
    .then(data => {
        const team = document.querySelector('#team')

        data.results.sort((male, female) => {
            return male.gender - female.gender
        })

        data.results.forEach(member => {
            const box =document.createElement('div')
            box.className = 'box'

            const name = document.createElement('div')

            const photo = document.createElement('img')
            photo.className='pic'

            photo.setAttribute("src", member.picture.large)
            photo.setAttribute("alt", "avatar")
            
            name.textContent = `${member.name.first} ${member.name.last}`
            name.className = 'name'

            team.appendChild(box)
            box.appendChild(photo)
            box.appendChild(name)
           
        })
    })