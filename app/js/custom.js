const Switch = document.getElementById("switch")
Switch.addEventListener("change", (e) => {
    let theme = e.currentTarget.checked
    darkmode(theme)
})
darkmode(JSON.parse(localStorage.getItem("dark-theme")))

function darkmode(theme) {
    localStorage.setItem("dark-theme", theme)
    if (theme === true) {
        document.documentElement.setAttribute("data-theme", "dark")
    } else if (theme === false) {
        document.documentElement.setAttribute("data-theme", "light")
    }
    Switch.checked = theme;
}