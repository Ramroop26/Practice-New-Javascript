// DOM => DOCUMENT OBJECT MODEL

// 1. document.getElementById()
// 2. document.getElementByClass()
// 3. document.querySelector(" # / . ")

//let callme=()=>{
    // window.alert("hello world")
    //document.write("hello world")
//     let mytag = document.querySelector("#text")
//     let hel = document.querySelector(".hello")
//      hel.innerHTML="<h1> hello world<h1/>"
//     mytag.innerHTML="<i>Welcome Ramroop Prajapati<i/>"
//     mytag.style.color="red"
//     mytag.style.backgroundColor="green"
    

// }
// let hello=()=>{
//     let hel = document.querySelector(".hello")
//     hel.innerHTML="<b> hello world<b/>"

// }
//----------------------------------------------------------------------------------//-----------------------------------------------/
// let  col = document.querySelector("#text")
// let re=()=>{
    
//     col.innerHTML="<h1>WELCOME RAMROOP PRAJAPATI<h1/>"
//     col.style.color="blue"
//     col.style.backgroundColor="red"
// }

// let gr=()=>{
  
//     col.innerHTML="<h1>WELCOME RAMROOP PRAJAPATI<h1/>"
//     col.style.color="yellow"
//     col.style.backgroundColor="green"
// }
// let ye=()=>{
   
//     col.innerHTML="<h1>WELCOME RAMROOP PRAJAPATI<h1/>"
//     col.style.color="red"
//     col.style.backgroundColor="yellow"
// }
//--------------------------------------------------------------------------------BOX------------------------------------------------------//

// let orange = ()=>{
//     let show = document.querySelector("#box")
//     let btn1 = document.querySelector(".btn1")
//     show.style.backgroundColor="orange"
//     show.style.border="5px solid blue"
//     btn1.style.backgroundColor="red"
// }

// let green = ()=>{
//     let show1= document.querySelector("#box")
//     let btn2 = document.querySelector(".btn2")
//     show1.style.backgroundColor="green"
//     show1.style.border="5px solid yellow"
//     btn2.style.backgroundColor="yellow"
// }

// let reset = ()=>{
//     let show2= document.querySelector("#box")
//     let btn3 = document.querySelector(".btn3")
//     show2.style.backgroundColor=""
//     show2.style.border=""
//     btn3.style.backgroundColor="green"
// }

//-------------------------------------------------------------------------IMAGE--------------------------------------------------//
// let orange = ()=>{
//     let show = document.querySelector("#box")
//     let btn1 = document.querySelector(".btn1")
//     show.style.border="5px solid blue"
//     btn1.style.backgroundColor="red"
//     show.style.backgroundImage="URL(https://tse3.mm.bing.net/th?id=OIP.U_VJuupQohwnzXcKMztqWgHaEo&pid=Api&P=0&h=180)"
// }

// let green = ()=>{
//     let show1= document.querySelector("#box")
//     let btn2 = document.querySelector(".btn2")
//     show1.style.backgroundImage="URL(https://tse3.mm.bing.net/th?id=OIP.j4KdqaXpnhbN94WzVyHUhAHaE8&pid=Api&P=0&h=180)"  
//     show1.style.border="5px solid yellow"
//     btn2.style.backgroundColor="yellow"
// }

// let reset = ()=>{
//     let show2= document.querySelector("#box")
//     let btn3 = document.querySelector(".btn3")
//     show2.style.backgroundColor=""
//     show2.style.border=""
//     btn3.style.backgroundColor="green"
//     show2.style.backgroundImage=""
// }

//-------------------------------------------------------------------Change Image---------------------------------------------------------//
// let changeImage=()=>{
//     let Image = document.querySelector("#imagg")
//     Image.src="https://tse3.mm.bing.net/th?id=OIP.U_VJuupQohwnzXcKMztqWgHaEo&pid=Api&P=0&h=180"
// }
// // //--------------------------------------------------------------------------- hide text-----------------------------------------------//
// let hide=()=> {
//     let hide = document.querySelector("#text")
//     if( hide.style.display == "none"){
//         hide.style.display = "block";
//         hide.style.color = "green";
//         let btn3 = document.querySelector(".btn1")
//          btn3.innerHTML="Show"
//          btn3.style.backgroundColor="yellow"
//     }
//     else{
//         hide.style.display = "none";

//     }
//}

/* The code you provided is defining three functions: */
// let  hide = ()=>{
//     let show  = document.querySelector("#text")
//     show.style.display= "none";
// }

// let  show = ()=>{
//     let show  = document.querySelector("#text")
//     show.style.display = "block";
// }

// let  reset = ()=>{
//     let show  = document.querySelector("#text")
//     show.style.fontSize = "";
// }

//---------------------------------------------------------------------Incand Dec couter---------------------------------------------//
 let counter = 0;


 let Inc=()=>{
   let count=  document.querySelector("#count");
   counter++;
   count.innerHTML = counter;
   count.style.color = "red"
 }

 let Dec=()=>{
 let count=  document.querySelector("#count");
 count.innerHTML = counter;
 if(counter>0){
counter--;
 }

    
    
 }

 let change1=()=>{
    let change = document.querySelector("#box")
    change.style.backgroundColor = "blue"
 }
  let change2=()=>{
    let change = document.querySelector("#box")
    change.style.backgroundColor = ""
 }