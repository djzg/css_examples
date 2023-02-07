const colorThemes = document.querySelectorAll('[name="theme"]');

console.log(colorThemes);


// store theme to localStorage 

const storeTheme = function (theme) {
  localStorage.setItem("theme", theme)
}

colorThemes.forEach(themeOption => {
  themeOption.addEventListener('click', () => {
    storeTheme(themeOption.id);
  });
});




// apply the theme

const setTheme = function() {
  const activeTheme = localStorage.getItem('theme');

  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });

  // fallback for no :has() support
  document.documentElement.className = theme;
};


document.onload = setTheme();