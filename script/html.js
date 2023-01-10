function Menu() {
    if (items.style.display == 'block'){
        items.style.display = 'none'  
        Loud.style.transform = 'translateX(0%)'                     
        header.style.backgroundColor = 'black'
        menu.style.color = 'white'
        flexnav.style.color = 'white'
        loja.style.color = 'white'
        book.style.color = 'white'
        time.style.color = 'white'
        sobre.style.color = 'white'
        blog.style.color = 'white'
        vagas.style.color = 'white'
        carrinho.style.color = 'white'
        clube.style.color = 'white'
    }else{
        items.style.display = 'block'
        Loud.style.transform = 'translateX(218%)'
        header.style.backgroundColor = 'white'
        menu.style.color = 'black'
        flexnav.style.color = 'black'
        loja.style.color = 'black'
        book.style.color = 'black'
        time.style.color = 'black'
        sobre.style.color = 'black'
        blog.style.color = 'black'
        vagas.style.color = 'black'
        carrinho.style.color = 'black'
        clube.style.color = 'black'
    
    }
}

function Tamanho() {
    if (window.innerWidth >= 768){
        items.style.display = 'block'
    }else{
        items.style.display = 'none'
    }
}