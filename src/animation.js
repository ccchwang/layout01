window.onload = function() {
  window.addEventListener('scroll', function(){
    const element = document.getElementById('try');

    let elementTop = element.offsetTop;
    let windowTop = window.scrollY;

console.log(elementTop, windowTop)

    if (windowTop > elementTop) {
      document.getElementById('work-header').style.position = 'fixed';
      document.getElementById('work-header').style.top = '0';
    }
  })
}
