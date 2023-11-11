const target = document.querySelector(".target");

target.addEventListener("click", () => {
    const ribbon = document.querySelector(".ribbon");
    const top = document.querySelector(".top");

    ribbon.classList.add('open')
    ribbon.addEventListener("transitionend", () => {
        top.classList.add('open')
    })
})