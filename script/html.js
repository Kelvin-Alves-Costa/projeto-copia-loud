function Menu() {
    if (items.style.display == 'block'){
        items.style.display = 'none'
        Loud.style.position = 'static'
        header.style.background = 'black'
        header.style.padding = '20px'
        menu.style.color = 'white'                        
    }else{
        items.style.display = 'block'
        header.style.background = 'white' 
        Loud.style.position = 'absolute'
        Loud.style.left = '45%'
        Loud.style.bottom = '90%'
        menu.style.color = 'black'

    }
}