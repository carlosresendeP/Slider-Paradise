const btnNext = document.querySelector(".next")
const btnBack = document.querySelector(".back")

const container = document.querySelector(".container")
const list = document.querySelector(".list")
const thumb = document.querySelector(".thumb")


/*
PODE FAZER ASSIM TAMBEM!

btnNext.addEventListener("click", function (){
    moveItemsOnClick('next')
})
btnBack.addEventListener("click", function(){
    moveItemsOnClick('back')
})

*/


btnNext.onclick = () => (moveItemsOnClick('next'))
btnBack.onclick = () => (moveItemsOnClick('back'))



function moveItemsOnClick(type){
    //seleciona todos os items
    //list > todos os itens grandes
    //thumb > todos os itens pequenos

    let listItems = document.querySelectorAll(".list-item")
    let thumbItems = document.querySelectorAll(".thumb-item")

    console.log(listItems);
    console.log(thumbItems);
    
    
    //0 1 2 3
    if(type === 'next'){
        //appendChild vai jogar o item em primeiro
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])

        //add ou tirar uma class com o "classlist   "
        container.classList.add('next')
    }else{
        //prepend vai jogar o item para ultimo
        list.prepend(listItems[listItems.length -1])
        
        thumb.prepend(thumbItems[thumbItems.length -1])
        container.classList.add('back')
    }

    setTimeout( () => {
        container.classList.remove('next')
        container.classList.remove('back')
    },3000);
}


