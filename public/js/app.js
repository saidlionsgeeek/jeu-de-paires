let div_1 = "";
let div_2 = "";
let div_class_1 = "";
let div_class_2 = "";



let easy = document.querySelector("#easy")
let medium = document.querySelector("#medium")
let hard = document.querySelector("#hard")
let div_mode = document.querySelector("#div_mode");
let div_mother = document.querySelector("#div_mother")
let select_mode = "";
let pseudo = "";
let count = 0;
let tab_images = [`"./public/img/images1.jpg" alt="1"`,`"./public/img/images2.jpg" alt="2"`,`"./public/img/images3.jpg" alt="3"`,`"./public/img/images4.jpg" alt="4"`,`"./public/img/images5.png" alt="5"`,`"./public/img/images6.jpg" alt="6"`,`"./public/img/images7.jpg" alt="7"`,`"./public/img/images8.png" alt="8"`]
let tab_suffle=[];
let timer = 0;
let score = document.querySelector("#score")
console.log(score);





const generate_number =(params)=>{
    tab_images.sort((a, b) => 0.5 - Math.random())

    tab_suffle=[];

for (let i = 0; i < params; i++) {
    tab_suffle.push(tab_images[i])
    tab_suffle.push(tab_images[i])
}

tab_suffle.sort((a, b) => 0.5 - Math.random())

for (let i = 0; i < tab_suffle.length; i++) {
    let element = tab_suffle[i];
    
        div_mother.insertAdjacentHTML("beforeend",`
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img width="150" height="205" src= ${element}>
            </div>
            <div class="flip-card-back">
                <img width="150" height="205"
                    src="./public/img/greed_island_card__reverse__by_daedalus_net_d8ll9nb-400t.png" alt="">
            </div>
        </div>
    </div>
        `)
}

}

function check_cards(params) {
    div_mother.addEventListener("click", (e) => {
        if (div_1 == "") {
            div_1 = e.target.parentElement.parentElement;
            console.log(div_1);
            div_1.classList.remove("flip-card-inner")
            div_class_1 = e.target.parentElement.previousElementSibling.firstElementChild.getAttributeNode("alt").value
            console.log(div_class_1);
        } else {
            div_2 = e.target.parentElement.parentElement;
            console.log(div_2);
            div_class_2 = e.target.parentElement.previousElementSibling.firstElementChild.getAttributeNode("alt").value
            div_2.classList.remove("flip-card-inner")

            if (div_class_1 == div_class_2) {
                alert("you find a paires")
                count++
                div_1.parentElement.remove()
                div_2.parentElement.remove()
                console.log(count);
                if (count == params) {
                    div_mode.classList.add("lolo");
                    div_mode.classList.remove("d-none");
                    div_mother.classList.add("d-none");
                    score.insertAdjacentHTML("beforeend",`
                    <div>
                    <h1>${pseudo}</h1>
                    <p>${timer}</p>
                      </div>
                    `)
                    count = 0   ;
                }
                div_1 = "";
                div_2 = "";
                div_class_1 = "";
                div_class_2 = "";
               
            } else {
                alert("try again")
                div_1.classList.add("flip-card-inner")
                div_2.classList.add("flip-card-inner")
                div_1 = "";
                div_2 = "";
                div_class_1 = "";
                div_class_2 = "";
            }

        }

    });
    
}







div_mode.addEventListener("click",(event)=>{
    
    if (event.target.getAttribute("id") == "easy") {
        easy.style.background = "rgb(40, 46, 113)"
        medium.style.background = "rgb(40, 46, 113)"
        hard.style.background = "rgb(40, 46, 113)"
        select_mode = "easy";
        event.target.style.background = "green"
    }else if (event.target.getAttribute("id") == "medium") {
        easy.style.background = "rgb(40, 46, 113)"
        medium.style.background = "rgb(40, 46, 113)"
        hard.style.background = "rgb(40, 46, 113)"
        select_mode = "medium";
        event.target.style.background = "green"
    }else if (event.target.getAttribute("id") == "hard") {
        easy.style.background = "rgb(40, 46, 113)"
        medium.style.background = "rgb(40, 46, 113)"
        hard.style.background = "rgb(40, 46, 113)"
        select_mode = "hard";
        event.target.style.background = "green"
    }
    console.log(select_mode);

    if (event.target.getAttribute("id") == "addPlayer") {
        if (event.target.previousElementSibling.value.length != 0 ) {
            pseudo = event.target.previousElementSibling.value 
            console.log(pseudo);
            if (select_mode != "") {
                event.target.parentElement.classList.remove("lolo");
                event.target.parentElement.classList.add("d-none");
                if (div_mother.classList.contains("d-none")) {
                    div_mother.classList.remove("d-none")
                }
                if (select_mode == "easy") {
                    setTimeout(() => {
                        timer++
                    }, 1000);
                    generate_number(2)
                    check_cards(2)

                }else if (select_mode == "medium") {
                    setTimeout(() => {
                        timer++
                    }, 1000);
                    generate_number(4)
                    check_cards(4)
                }else if (select_mode == "hard") {
                    setTimeout(() => {
                        timer++
                    }, 1000);
                    generate_number(8)
                    check_cards(8)
                }
            }
        }
        if (select_mode == "" && pseudo != "") {
            alert("chose your mode ")
        }
        if (select_mode != "" && pseudo == "") {
            alert("insert your pseudo")
        }
        if (select_mode == "" && pseudo == "") {
            alert("insert your pseudo and chose mode")
        }
        
    }
})




























// const ppdm =()=>{
//     let div = div_mode.children
//     for (let i = 0; i < div.length; i++) {
//         let element = div[i];
//         element.addEventListener("click",(event)=>{
//             if (event.target.getAttribute("id") == "easy") {
//                         easy.style.background = "white"
//                         medium.style.background = "white"
//                         hard.style.background = "white"
//                         select_mode = "easy";
//                         event.target.style.background = "green"
//                     }else if (event.target.getAttribute("id") == "medium") {
//                         easy.style.background = "white"
//                         medium.style.background = "white"
//                         hard.style.background = "white"
//                         select_mode = "medium";
//                         event.target.style.background = "green"
//                     }else if (event.target.getAttribute("id") == "hard") {
//                         easy.style.background = "white"
//                         medium.style.background = "white"
//                         hard.style.background = "white"
//                         select_mode = "hard";
//                         event.target.style.background = "green"
//                     }
//                     console.log(select_mode);
                
//                     if (event.target.getAttribute("id") == "addPlayer") {
//                         if (event.target.previousElementSibling.value.length != 0 ) {
//                             pseudo = event.target.previousElementSibling.value 
//                             console.log(pseudo);
//                             if (select_mode != "") {
//                                 event.target.parentElement.classList.add("d-none");
//                                 if (div_mother.classList.contains("d-none")) {
//                                     div_mother.classList.remove("d-none")
//                                 }
//                                 generate_number()
//                             }
//                         }
//                         if (select_mode == "" && pseudo != "") {
//                             alert("chose your mode ")
//                         }
//                         if (select_mode != "" && pseudo == "") {
//                             alert("insert your pseudo")
//                         }
                        
//                     }
//         })
//     }
// }


















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