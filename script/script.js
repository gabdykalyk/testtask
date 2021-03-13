let closeBtn = document.querySelector('.close__btn') 
let searchResult = document.querySelector('.search__result')
let searchForm = document.createElement('form')
let searchIcon = document.querySelector('.search__icon')
let input = document.createElement('input')
closeBtn.addEventListener('click', ()=> {
    closeBtn.style.display = 'none'
    searchResult.style.display = 'none'
    searchIcon.after(searchForm)
    searchForm.append(input)
    input.style.border = 'none'
    input.style.outline = 'none'
})