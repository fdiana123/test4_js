const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');




modalButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modalid = this.dataset.modalButton;
         const modal = document.querySelector('#' + modalid);
        modal.classList.remove('hidden');
    })
})

modalClosebuttons.forEach(function (item) {
    item.addEventListener('click', function () {
       const modal = this.closest('[data-modal]');
       modal.classList.add('hidden');

    })
})