eventListeners();

function eventListeners() {
    let ui = new UI()

    document.querySelector(".form-input").addEventListener("submit", function (event) {
        ui.submitForm(event)
    })
}



function UI() { };

UI.prototype.submitForm = function (event) {
    event.preventDefault()

    let value = document.querySelector("#email").value
    let input = document.querySelector(".header-input__email")
    let feedback = document.querySelector(".invalid-feedback")
    let feedbackIcon = document.querySelector('.feedback-icon')


    console.log(value)
    if (value.indexOf("@") === -1 || value.indexOf('.') === -1 || !value) {
        input.classList.add("is-invalid")
        feedback.innerHTML = "Please provide a valid email"
        feedbackIcon.innerHTML = `<img src="./images/icon-error.svg"> `
    
    } else {

        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
        feedbackIcon.innerHTML = ''
        feedback.innerHTML = ''

        console.log("encontro");

    }

}
