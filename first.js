sal({
    // threshold: 1,
    once: false
});

var tabPanel = document.querySelectorAll(".tab-panel")
var tabButton = document.querySelectorAll(".tab-button")
var darkModeColor = localStorage.getItem("darkmode")
var darkModeButton = document.getElementsByClassName('dark-mode')
var submit =document.querySelector(".submit")

// div transition

 
// tab configuration 

function tabbed(position, screen){
    tabButton.forEach(element => {
        element.style.backgroundColor =''
        element.style.color=''
    });
    tabButton[position].style.backgroundColor=screen
    tabButton[position].style.color='white'

    tabPanel.forEach(element=>{
        element.style.display='none'
    })
    tabPanel[position].style.display='block'

}
tabbed(0, '#161616')

// dark mode configuration

const addDarkmode = ()=>{
    document.body.classList.add('darkmodecolor')
    localStorage.setItem("darkmode", "enabled")
    darkModeButton[0].style.backgroundColor = '#161616'
    darkModeButton[0].style.color = 'white'
}
const removeDarkmode = ()=>{
    document.body.classList.remove('darkmodecolor')
    localStorage.setItem("darkmode", null)
    darkModeButton[0].style.backgroundColor = 'rgb(82, 80, 80)'
    darkModeButton[0].style.color = '#161616'
    
}
if (darkModeColor =='enabled'){
    addDarkmode()
}

function darkMode(){
    console.log('this is working')
    var darkModeColor = localStorage.getItem("darkmode")
    if (darkModeColor !== "enabled" ){
       addDarkmode()
        console.log(darkModeColor)
    }
    else {
        removeDarkmode()
        console.log(darkModeColor)
    }
}

// send email section
