let div_1 = "";
let div_2 = "";
let div_class_1 = "";
let div_class_2 = "";



let easy = document.querySelector("#easy")
let medium = document.querySelector("#Medium")
let hard = document.querySelector("#hard")
let div_mode = document.querySelector("#div_mode");
let div_mother = document.querySelector("#div_mother")
let select_mode = "";
let pseudo = "";
let tab_images = [`"./public/img/images1.jpg" alt="1"`,`"./public/img/images2.jpg" alt="2"`,`"./public/img/images3.jpg" alt="3"`,`"./public/img/images4.jpg" alt="4"`,`"./public/img/images5.png" alt="5"`,`"./public/img/images6.jpg" alt="6"`,`"./public/img/images7.jpg" alt="7"`,`"./public/img/images8.png" alt="8"`]


div_mode.addEventListener("click",(event)=>{
    
    if (event.target.getAttribute("id") == "easy") {
        easy.style.background = "white"
        medium.style.background = "white"
        hard.style.background = "white"
        select_mode = "easy";
        event.target.style.background = "green"
    }else if (event.target.getAttribute("id") == "Medium") {
        easy.style.background = "white"
        medium.style.background = "white"
        hard.style.background = "white"
        select_mode = "medium";
        event.target.style.background = "green"
    }else if (event.target.getAttribute("id") == "hard") {
        easy.style.background = "white"
        medium.style.background = "white"
        hard.style.background = "white"
        select_mode = "hard";
        event.target.style.background = "green"
    }
    console.log(select_mode);

    if (event.target.getAttribute("id") == "addPlayer") {
        if (event.target.previousElementSibling.value.length != 0 ) {
            pseudo = event.target.previousElementSibling.value 
            console.log(pseudo);
            if (select_mode != "") {
                event.target.parentElement.classList.add("d-none");
                    generate_number()
            }
        }
        if (select_mode == "" && pseudo != "") {
            alert("chose your mode ")
        }
        if (select_mode != "" && pseudo == "") {
            alert("insert your pseudo")
        }
        
    }
})

const generate_number =()=>{
    if (select_mode == "easy") {
        
    let tab_images = [`"./public/img/images1.jpg" alt="1"`,`"./public/img/images2.jpg" alt="2"`,`"./public/img/images3.jpg" alt="3"`,`"./public/img/images4.jpg" alt="4"`,`"./public/img/images5.png" alt="5"`,`"./public/img/images6.jpg" alt="6"`,`"./public/img/images7.jpg" alt="7"`,`"./public/img/images8.png" alt="8"`]
    let tab_position = [`afterbegin`,`beforeend`];
    let random_image = Math.round(Math.random()*(tab_images.length-1));
    let random_posistion =  Math.round(Math.random()*(tab_position.length-1));
    let count = 0;
    while (count != 2) {
        console.log(tab_images[random_image]);
        div_mother.insertAdjacentHTML(`${tab_position[random_posistion]}`,`
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img width="190" height="265" src= ${tab_images[random_image]}>
            </div>
            <div class="flip-card-back">
                <img width="190" height="265"
                    src="./public/img/greed_island_card__reverse__by_daedalus_net_d8ll9nb-400t.png" alt="">
            </div>
        </div>
    </div>
        `)
        for (let i = 0; i < 1; i++) {
            div_mother.insertAdjacentHTML(`${tab_position[random_posistion]}`,`
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img width="190" height="265" src= ${tab_images[random_image-1]}>
            </div>
            <div class="flip-card-back">
                <img width="190" height="265"
                    src="./public/img/greed_island_card__reverse__by_daedalus_net_d8ll9nb-400t.png" alt="">
            </div>
        </div>
    </div>
        `)
        }
        count++
    }
    div_mother.addEventListener("click", (event) => {

        if (div_1 == "") {
            div_1 = event.target.parentElement.parentElement;
            console.log(div_1);
            div_1.classList.remove("flip-card-inner")
            div_class_1 = event.target.parentElement.previousElementSibling.firstElementChild.getAttributeNode("alt").value
            console.log(div_class_1);
        } else {
            div_2 = event.target.parentElement.parentElement;
            console.log(div_2);
            div_class_2 = event.target.parentElement.previousElementSibling.firstElementChild.getAttributeNode("alt").value
            div_2.classList.remove("flip-card-inner")
            setTimeout(() => {
                if (div_class_1 == div_class_2) {
                    alert("you win")
                div_1 = "";
                div_2 = "";
                div_class_1 = "";
                div_class_2 = "";
            } else {
                alert("you ugly")
                div_1.classList.add("flip-card-inner")
                div_2.classList.add("flip-card-inner")
                div_1 = "";
                div_2 = "";
                div_class_1 = "";
                div_class_2 = "";
            }
            }, 100);
        }
        
    });
    

}else  if (select_mode == "medium") {
    let tab_images = [`"./public/img/images1.jpg" alt="1"`,`"./public/img/images2.jpg" alt="2"`,`"./public/img/images3.jpg" alt="3"`,`"./public/img/images4.jpg" alt="4"`,`"./public/img/images5.png" alt="5"`,`"./public/img/images6.jpg" alt="6"`,`"./public/img/images7.jpg" alt="7"`,`"./public/img/images8.png" alt="8"`]
    let tab_position = [`afterbegin`,`beforeend`];
    let random_image = Math.round(Math.random()*(tab_images.length-1));
    let random_posistion =  Math.round(Math.random()*(tab_position.length-1));
    let count = 0;
    while (count != 4) {
        console.log(tab_images[random_image]);
        div_mother.insertAdjacentHTML(`${tab_position[random_posistion]}`,`
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img width="190" height="265" src= ${tab_images[random_image]}>
            </div>
            <div class="flip-card-back">
                <img width="190" height="265"
                    src="./public/img/greed_island_card__reverse__by_daedalus_net_d8ll9nb-400t.png" alt="">
            </div>
        </div>
    </div>
        `)
        for (let i = 0; i < 1; i++) {
            
            div_mother.insertAdjacentHTML(`${tab_position[random_posistion]}`,`
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img width="190" height="265" src= ${tab_images[random_image-1]}>
            </div>
            <div class="flip-card-back">
                <img width="190" height="265"
                    src="./public/img/greed_island_card__reverse__by_daedalus_net_d8ll9nb-400t.png" alt="">
            </div>
        </div>
    </div>
        `)
        }
        count++
    }
    div_mother.addEventListener("click", (event) => {
        if (div_1 == "") {
            div_1 = event.target.parentElement.parentElement;
            console.log(div_1);
            div_1.classList.remove("flip-card-inner")
            div_class_1 = event.target.parentElement.previousElementSibling.firstElementChild.getAttributeNode("alt").value
            console.log(div_class_1);
        } else {
            div_2 = event.target.parentElement.parentElement;
            console.log(div_2);
            div_class_2 = event.target.parentElement.previousElementSibling.firstElementChild.getAttributeNode("alt").value
            div_2.classList.remove("flip-card-inner")
            setTimeout(() => {
                if (div_class_1 == div_class_2) {
                    alert("you win")
                div_1 = "";
                div_2 = "";
                div_class_1 = "";
                div_class_2 = "";
            } else {
                alert("you ugly")
                div_1.classList.add("flip-card-inner")
                div_2.classList.add("flip-card-inner")
                div_1 = "";
                div_2 = "";
                div_class_1 = "";
                div_class_2 = "";
            }
            }, 100);
        }
    
    
    });
    

}else  if (select_mode == "hard") {
    let tab_images = [`"./public/img/images1.jpg" alt="1"`,`"./public/img/images2.jpg" alt="2"`,`"./public/img/images3.jpg" alt="3"`,`"./public/img/images4.jpg" alt="4"`,`"./public/img/images5.png" alt="5"`,`"./public/img/images6.jpg" alt="6"`,`"./public/img/images7.jpg" alt="7"`,`"./public/img/images8.png" alt="8"`]
    let tab_position = [`afterbegin`,`beforeend`];
    let random_image = Math.round(Math.random()*(tab_images.length-1));
    let random_posistion =  Math.round(Math.random()*(tab_position.length-1));
    let count = 0;
    while (count != 8) {
        console.log(tab_images[random_image]);
        div_mother.insertAdjacentHTML(`${tab_position[random_posistion]}`,`
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img width="190" height="265" src= ${tab_images[random_image]}>
            </div>
            <div class="flip-card-back">
                <img width="190" height="265"
                    src="./public/img/greed_island_card__reverse__by_daedalus_net_d8ll9nb-400t.png" alt="">
            </div>
        </div>
    </div>
        `)
        for (let i = 0; i < 1; i++) {
            
            div_mother.insertAdjacentHTML(`${tab_position[random_posistion]}`,`
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img width="190" height="265" src= ${tab_images[random_image-1]}>
            </div>
            <div class="flip-card-back">
                <img width="190" height="265"
                    src="./public/img/greed_island_card__reverse__by_daedalus_net_d8ll9nb-400t.png" alt="">
            </div>
        </div>
    </div>
        `)
        }
        count++
    }
    div_mother.addEventListener("click", (event) => {
        if (div_1 == "") {
            div_1 = event.target.parentElement.parentElement;
            console.log(div_1);
            div_1.classList.remove("flip-card-inner")
            div_class_1 = event.target.parentElement.previousElementSibling.firstElementChild.getAttributeNode("alt").value
            console.log(div_class_1);
        } else {
            div_2 = event.target.parentElement.parentElement;
            console.log(div_2);
            div_class_2 = event.target.parentElement.previousElementSibling.firstElementChild.getAttributeNode("alt").value
            div_2.classList.remove("flip-card-inner")
            setTimeout(() => {
                if (div_class_1 == div_class_2) {
                    alert("you win")
                div_1 = "";
                div_2 = "";
                div_class_1 = "";
                div_class_2 = "";
            } else {
                alert("you ugly")
                div_1.classList.add("flip-card-inner")
                div_2.classList.add("flip-card-inner")
                div_1 = "";
                div_2 = "";
                div_class_1 = "";
                div_class_2 = "";
            }
            }, 100);
        }
    
    
    });
    

}

}
generate_number()

























// !!second

//!!! fist
// let tab_easy = tab_images;
// let random = Math.round(Math.random()*(tab_easy.length-1))
// tab_easy[random];
// console.log(random);
// for (let i = 0; i < 3; i++) {
// div_mother.insertAdjacentHTML("beforeend",`
// <div class="flip-card">
// <div class="flip-card-inner">
//     <div class="flip-card-front">
//         <img width="190" height="265" src=${tab_easy[random]} alt="said">
//     </div>
//     <div class="flip-card-back">
//         <img width="190" height="265"
//             src="./public/img/greed_island_card__reverse__by_daedalus_net_d8ll9nb-400t.png" alt="">
//     </div>
// </div>
// </div>
// `)
// i++
// for (let id = 0; id < 1; id++) {
    
//     div_mother.insertAdjacentHTML("beforeend",`
//     <div class="flip-card">
//     <div class="flip-card-inner">
//         <div class="flip-card-front">
//             <img width="190" height="265" src=${tab_easy[random-1]} alt="said">
//         </div>
//         <div class="flip-card-back">
//             <img width="190" height="265"
//                 src="./public/img/greed_island_card__reverse__by_daedalus_net_d8ll9nb-400t.png" alt="">
//         </div>
//     </div>
//     </div>
//     `)
//     alert("hey")
    
//     id++
// }

// }




// !!! methodes 3
// if (select_mode == "easy") {
        
    
//     let tab_images_1 = tab_images ;
//     let random = Math.round(Math.random()*(2));
//     console.log(tab_images[random]);
    
//     for (let i = 0; i < 8 ; i++) {
//         div_mother.insertAdjacentHTML("beforeend",`
//         <div class="flip-card">
//         <div class="flip-card-inner">
//             <div class="flip-card-front">
//                 <img width="190" height="265" src= ${tab_images[random]}>
//             </div>
//             <div class="flip-card-back">
//                 <img width="190" height="265"
//                     src="./public/img/greed_island_card__reverse__by_daedalus_net_d8ll9nb-400t.png" alt="">
//             </div>
//         </div>
//     </div>
//         `)
//         div_mother.insertAdjacentHTML("beforeend",`
//         <div class="flip-card">
//         <div class="flip-card-inner">
//             <div class="flip-card-front">
//                 <img width="190" height="265" src= ${tab_images[random]}>
//             </div>
//             <div class="flip-card-back">
//                 <img width="190" height="265"
//                     src="./public/img/greed_island_card__reverse__by_daedalus_net_d8ll9nb-400t.png" alt="">
//             </div>
//         </div>
//     </div>
//         `)
//         tab_images = tab_images.splice(0,random)+tab_images.splice(1)
//         i++
//     }

// }