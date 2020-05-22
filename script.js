fetch('https://randomuser.me/api/?results=8') 
    .then(response => response.json())
    .then(data => {
        const team = document.querySelector('#team')

        data.results.forEach(member => {

            const name = document.createElement('div')
            const photo = document.createElement('img')
            photo.setAttribute("src", member.picture.large)
            photo.setAttribute("alt", "avatar")
            
            name.textContent = `${member.name.title} ${member.name.first} ${member.name.last}`

            team.appendChild(name)
            team.appendChild(photo)
        })
    })

    

   
