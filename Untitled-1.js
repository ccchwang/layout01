window.onload = function() {
  window.addEventListener('scroll', function(){
    const workHeader = document.getElementById('work-header');

    if (window.innerWidth >= 992) {
      const workMain = document.getElementById('work-main');

      let workMainTop = workMain.offsetTop;
      let windowTop = window.scrollY;

      let workMainBottom = workMain.offsetHeight + workMain.offsetTop;
      let windowBottom = window.innerHeight + window.scrollY;


      if (windowTop > workMainTop) {
        workHeader.style.position = 'fixed';
        workHeader.style.top = '0';
      }

      if (windowTop < workMainTop) {
        workHeader.style.position = 'absolute';
        workHeader.style.left = '0';
      }

      if (windowBottom > workMainBottom) {
        workHeader.style.position = 'absolute';
        workHeader.style.top = '50%';
      }
    }
    else {
      workHeader.style.position = 'relative'
    }
  })
}
