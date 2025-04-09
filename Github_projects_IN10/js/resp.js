burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')

burger.addeventlistener('click',()=>{
    resp.classlist.toggle('btn')
    navbar.classlist.toggle('ul li')
})