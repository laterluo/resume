// setTimeout(function(){
//   siteWelcome.classList.remove('active')
// }, 1000)

let specialTags = document.querySelectorAll('[data-x]')
for(let i=0; i<specialTags.length; i++){
  specialTags[i].classList.add('offset')
}

findClosest()
window.onscroll = function(){
  if(window.scrollY > 0){
    topNavBar.classList.add('sticky')
  }else{
    topNavBar.classList.remove('sticky')
  }
  findClosest()
}
function findClosest(){
  let specialTags = document.querySelectorAll('[data-x]')
  let minIndex = 0
  for(let i=1; i<specialTags.length; i++){
    if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
      minIndex = i
    }
  }
  // for(let i=0; i<specialTags.length; i++){
  //   specialTags[i].classList.remove('active')
  // }
  // specialTags[minIndex].classList.add('active')
  specialTags[minIndex].classList.remove('offset')
  let id = specialTags[minIndex].id   // minIndex 就是离窗口顶部最近的元素
  console.log(id)
  let a = document.querySelector('a[href="#' + id + '"]')
  let liTag = a.parentNode
  let brotherAndMe = liTag.parentNode.children
  for(let i=0; i<brotherAndMe.length; i++){
    brotherAndMe[i].classList.remove('highlight')
  }
  liTag.classList.add('highlight')
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
    let a = e.currentTarget
    let href = a.getAttribute('href')
    let element = document.querySelector(href)
    let top = element.offsetTop

    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    let currentTop = window.scrollY
    let targetTop = top - 80
    let distance = targetTop - currentTop   // 路程
    let duration = Math.abs((distance / 100) * 300)   // 时间
    if(duration > 500){
      duration = 500
    }
    var coords = { y: currentTop }    // 起始位置
    var tween = new TWEEN.Tween(coords)   // 起始位置
        .to({ y: targetTop }, duration)   // 结束位置和时间
        .easing(TWEEN.Easing.Quadratic.InOut)   // 缓动类型
        .onUpdate(function() {
          window.scrollTo(0, coords.y)    // 更新界面
        })
        .start()
  }
}