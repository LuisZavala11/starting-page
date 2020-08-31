let backdrop=document.querySelector(".backdrop")
let planButtons=document.querySelectorAll(".plan button")
let modal=document.getElementById("modal")
let modalAction=document.getElementById("modalAction")
let toggleButton=document.getElementById("toggleButton")
let mobileNav=document.querySelector(".mobile-nav")

for (const planButton of planButtons) {
    console.log(planButton)
    planButton.addEventListener("click", ()=>{
        modal.classList.add("open")
        backdrop.classList.add("open")
    })
}

if (modalAction){
modalAction.addEventListener("click",()=>{
   closeModal()
})
}

backdrop.addEventListener("click",()=>{
   closeModal()
    mobileNav.classList.remove("open")

})

toggleButton.addEventListener("click", ()=>{
    mobileNav.classList.add("open")
    backdrop.classList.add("open")
})

const closeModal=()=>{
    if(modalAction){
    modal.classList.remove("open")
    }
    backdrop.classList.remove("open")
}