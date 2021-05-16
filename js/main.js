
const indexOrderedList = document.getElementById('index');

const links = [
    {
      label: "Week1",
      url: "content/week1/index.html"
    },
    {
      label: "Week2",
      url: "content/week2/index.html"
    },
    {
      label: "Week3",
      url: "content/week3/index.html"
    },
    {
      label: "Week4",
      url: "content/week4/index.html"
    }
]

links.forEach(link => {
    indexOrderedList.innerHTML += `<li><a href='${link.url}' target ='_self'>${link.label}</a></li>`
})
        
