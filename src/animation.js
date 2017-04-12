window.onload = function() {
  window.addEventListener('scroll', function(){
    const element = document.getElementById('try');

    let elementTop = element.offsetTop;
    let windowTop = window.scrollY;

    let objectBottom = element.offsetHeight + element.offsetTop;
    let windowBottom = window.innerHeight + window.scrollY;

console.log('top', elementTop, windowTop)

console.log('bottom', objectBottom, windowBottom)

    if (windowTop > elementTop) {
      document.getElementById('work-header').style.position = 'fixed';
      document.getElementById('work-header').style.top = '0';
    }

    if (windowTop < elementTop) {
      document.getElementById('work-header').style.position = 'absolute';
      document.getElementById('work-header').style.left = '0';
    }

    if (windowBottom > objectBottom) {
      document.getElementById('work-header').style.position = 'absolute';
      document.getElementById('work-header').style.top = '50%';
    }
  })
}
