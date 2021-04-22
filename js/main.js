
const indexOrderedList = document.getElementById('index');

const links = [
    {
      label: "Week1 notes",
      url: "content/week1/index.html"
    }
]

links.forEach(link => {
    indexOrderedList.innerHTML += `<li><a href='${link.url}' target ='_self'>${link.label}</a></li>`
})
        
