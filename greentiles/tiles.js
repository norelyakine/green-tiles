const catalog = document.querySelector(".container")
const prd = document.getElementsByClassName("onebox")
const filterbuttons = document.querySelectorAll(".filter")



const search = () => {
    const searching = document.querySelector(".searchbar").value.toUpperCase()
    const head = document.getElementsByTagName('h4')
    for(var i=0; i<head.length; i++){
        let match = prd[i].getElementsByTagName('h4')[0]
        if (match){
            let txt = match.textContent || match.innerHTML

            if(match){
                if(txt.toUpperCase().indexOf(searching)> -1){
                    prd[i].style.display=""

                }
                else{
                    prd[i].style.display="none"
                }
            }
        }
    }
}


var furniture = [
        {   id:1,
            name: "Sage Sofa",
            category: "indoor",
            subcategory: "living room",
            supersubcategory:"sofa",
            supersubcategory2:"chair",
            price: "1020",
            image: "sofa4.jpeg"
        },
        {   id:2,
            name: "Bulgert Sofa",
            category: "indoor",
            subcategory: "living room",
            supersubcategory:"sofa",
            supersubcategory2:"chair",
            price: "780",
            image: "sofa1.jpeg"
        },
        {   id:3,
            name: "Requ Table",
            category: "indoor",
            subcategory: "living room",
            supersubcategory:"table",
            price: "610",
            image: "table3.jpeg"
        },
        
        {   id:4,
            name: "Longrun Table",
            category: "indoor",
            subcategory: "living room",
            supersubcategory:"table",
            price: "640",
            image: "table2.jpeg"
        },
        {   id:5,
            name: "Hop Chairs",
            category: "indoor",
            subcategory: "kitchen",
            supersubcategory:"chair",
            price: "610",
            image: "kitch1.jpeg"
        },
        {   id:6,
            name: "Set dinner table & chairs",
            category: "indoor",
            subcategory: "living room",
            subcategory2: "kitchen",
            supersubcategory:"dinner table",
            supersubcategory2:"chair",
            price: "3000",
            image: "dinnertable1.jpeg"
        },
        {   id:7,
            name: "Invierno Armchair",
            category: "indoor",
            subcategory: "living room",
            supersubcategory:"sofa",
            supersubcategory2:"chair",
            price: "800",
            image: "sofa5.jpeg"
        },
        {   id:8,
            name: "Beautiful Rest",
            category: "indoor",
            category2: "terrace",
            subcategory: "living room",
            supersubcategory2:"chair",
            price: "900",
            image: "sofach1.jpeg"
        },
        {   id:9,
            name: "Set Greenery Table & Chairs",
            category: "terrace",
            subcategory: "table",
            subcategory2: "chair",
            price: "1110",
            image: "terrace2.jpeg"
        },
        {   id:10,
            name: "Round Bathtub ",
            category: "indoor",
            subcategory: "bathroom",
            price: "670",
            image: "round-bathtub-1.jpg"
        },
        {   id:11,
            name: "Blatant Desk & Chair",
            category: "office",
            subcategory: "living room",
            supersubcategory:"table",
            price: "7000",
            image: "modoff.jpg"
        },
        
       
    ];

window.addEventListener("DOMContentLoaded", function(){
    product(furniture)
})

filterbuttons.forEach(function(button){
    button.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.filter
        const productcategory= furniture.filter(function(furnitureitem){
         if(furnitureitem.category === category || furnitureitem.category2 === category)
            return furnitureitem
        })
       if(category==='all'){
        product(furniture)
       }
       else{
        product(productcategory)
       }
    })
});

function product(productitem){
    let display_furniture = productitem.map(function(item){
        return `<article class="onebox">
        <ion-icon name="cart" class="ct"></ion-icon>
        <ion-icon name="heart" class="heart"></ion-icon>
        <img src=${item.image} alt = ${item.name}>
        <h4>${item.name}</h4>
        <h5>${item.price}.00</h5>
          </article>`})
        display_furniture = display_furniture.join("")
        catalog.innerHTML = display_furniture

    }




    
    
    