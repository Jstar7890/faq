const buttonElement =  document.querySelectorAll('.button');
buttonElement.forEach((buttonElements) => {
  buttonElements.addEventListener('click', () => {
    const text = buttonElements.nextElementSibling;
    if(!text.classList.contains('active')){
      document.querySelectorAll('.text').forEach((text) => {
      text.classList.remove('active')
    })

    document.querySelectorAll('.button').forEach((buttons) => {
      buttons.setAttribute('src','assets/images/icon-plus.svg')

    })
      text.classList.add('active');
      buttonElements.setAttribute('src','assets/images/icon-minus.svg')
  }
  else if(text.classList.contains('active')){
    text.classList.remove('active');
    buttonElements.setAttribute('src','assets/images/icon-plus.svg')
  }
  })
})