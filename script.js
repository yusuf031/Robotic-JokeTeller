const toggleSwitch= document.querySelector('input[type="checkbox"]');
toggleSwitch.addEventListener('change',switchtheme);
/* Switch ThemeDynamically */
function switchtheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme','dark');
        document.getElementById('switchIcon').setAttribute('class','fa-regular fa-moon')
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
    }
}