document.addEventListener("DOMContentLoaded", (() => {
    const form = document.getElementById('form');

    let formSend = async (e) => {
        e.preventDefault();
        // let formData = new FormData(form);
        let data = {
            name: document.getElementById("nameReal").value,
            email: document.getElementById("emailReal").value,
            description: document.getElementById("descriptionReal").value
        }

        let response = await fetch('index.php', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        let result = await response.json();
        alert(result.message);
        form.reset();
    }

    form.addEventListener('submit', formSend);



}));











// let data = {
//     name: document.getElementById("name").value,
//     tel: selector.inputmask.unmaskedvalue(),
//     msg: document.getElementById("msg").value
// }

// let response = await fetch("mail.php", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8"
//     }
// })

// let result = await response.text()

// alert(result)