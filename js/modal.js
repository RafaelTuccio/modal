const initModal = (modalId) => {
    const modalOpen = document.getElementById(modalId);
    modalOpen.classList.add("modal-show")
}

const openModal = document.querySelector("#open-modal");
openModal.addEventListener("click", () => {
    initModal("modal")
})

const closeModal = (modalId) => {
    const modalClose = document.getElementById(modalId)
    modalClose.classList.remove("modal-show")
}

const close = document.querySelector("#close-modal");
close.addEventListener("click", () =>{
    closeModal('modal')
})