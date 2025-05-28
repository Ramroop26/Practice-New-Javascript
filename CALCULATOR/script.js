let store = ""
let press=(value)=>{
    let show = document.querySelector("#display")
    store  = store+value
    show.innerHTML = store


}
let res=()=>{
    let show = document.querySelector("#display")
   show.innerHTML = eval(store) //"1+2"=3
    store= toString()
}
let del=()=>{
    let show = document.querySelector("#display")
    store = store.slice(0,-1)
    show.innerHTML = store
}
let cl=()=>{
    let show = document.querySelector("#display")
    store = ""
    show.innerHTML = store
}