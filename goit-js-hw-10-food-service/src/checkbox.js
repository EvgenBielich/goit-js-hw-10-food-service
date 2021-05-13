const Theme = {
   LIGHT: 'light-theme',
   DARK: 'dark-theme',
 };
 
 const checkboxEl = document.querySelector('#theme-switch-toggle');
 const bodyEl = document.querySelector('body');
 
 bodyEl.classList.add(Theme.LIGHT); 
 
 checkboxEl.addEventListener("click", onClickEl);
 
 let clicks = 0;
 
 function onClickEl() {
     clicks += 1;
     console.log(clicks);
     if (clicks % 2 === 0) {
      bodyEl.classList.remove(Theme.DARK);
         bodyEl.classList.add(Theme.LIGHT);
         localStorage.setItem('theme', Theme.LIGHT);
     
     }
     else  {
         bodyEl.classList.remove(Theme.LIGHT);
         bodyEl.classList.add(Theme.DARK);
         localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.DARK);
     }
   localStorage.setItem('click', clicks);
 }
 
 const themeInLocal = localStorage.getItem('theme');
 
  if (themeInLocal === Theme.DARK) {
    bodyEl.classList.add(Theme.DARK);
      checkboxEl.checked = true;
       clicks += 1;;
  }