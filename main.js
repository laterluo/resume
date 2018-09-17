setTimeout(function(){
  siteWelcome.classList.remove('active')
}, 2000)

window.onscroll = function(){
  if(window.scrollY > 0){
    topNavBar.classList.add('sticky')
  }else{
    topNavBar.classList.remove('sticky')
  }
}

let liTags = document.querySelectorAll('.nav > li')
for(let i=0; i<liTags.length; i++){
  liTags[i].onmouseenter = function(e){
    e.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function(e){
    e.currentTarget.classList.remove('active')
  }
}

let aTags = document.querySelectorAll('.nav > li > a')
for(let i=0; i<aTags.length; i++){
  aTags[i].onclick = function(e){
    e.preventDefault()
    var a = e.currentTarget
    var href = a.getAttribute('href')
    var element = document.querySelector(href)
    var top = element.offsetTop
    window.scrollTo(0, top - 80)
  }
}