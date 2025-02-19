// function handleSubmit(event) {
//     event.preventDefault();

//     let name = document.getElementById('name').value;
//     let rollNo = document.getElementById('rollNo').value;
//     let subject = document.getElementById('subject').value;
//     let number = document.getElementById('number').value;
//     let checkbox = document.getElementById('checkbox').checked;

//     let table = document.getElementById('outputTable');
//     let row = table.insertRow(-1);
//     let cell1 = row.insertCell(0);
//     let cell2 = row.insertCell(1);
//     let cell3 = row.insertCell(2);
//     let cell4 = row.insertCell(3);

//     cell1.textContent = name;
//     cell2.textContent = rollNo;
//     cell3.textContent = subject;
//     cell4.textContent = checkbox ? number : '';
// }

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll("input").forEach(input => {
//         input.addEventListener("keydown", function (event) {
//             if (event.key === "Enter") {
//                 event.preventDefault();
//                 document.querySelector("button[type='submit']").click();
//             }
//         });
//     });
// });

function handleSubmit(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let rollNo = document.getElementById('rollNo').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let number = document.getElementById('number').value.trim();
    let checkbox = document.getElementById('checkbox').checked;

    if (name === "" || rollNo === "" || subject === "" || number === "") {
        alert("All fields must be filled out before submitting!");
        return;
    }

    let table = document.getElementById('outputTable');
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.textContent = name;
    cell2.textContent = rollNo;
    cell3.textContent = subject;
    cell4.textContent = checkbox ? number : '';

    // Clear input fields after successful submission
    document.getElementById('name').value = "";
    document.getElementById('rollNo').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('number').value = "";
    document.getElementById('checkbox').checked = false;
}


// alert section start
function showGreeting() {
    let now = new Date();
    let hours = now.getHours();
    let greetingText;

    if (hours < 12) {
        greetingText = "Good morning! Have a great day!";
    } else if (hours < 18) {
        greetingText = "Good afternoon! Hope you're having a wonderful day!";
    } else {
        greetingText = "Good evening! Relax and enjoy your evening!";
    }

    let greetingElement = document.getElementById("greeting");
    greetingElement.innerText = greetingText;
    greetingElement.style.display = "block";

    // Hide message after 5 seconds
    setTimeout(() => {
        greetingElement.style.display = "none";
    }, 5000);
}

// Show the greeting when the page loads
window.onload = showGreeting;
// alert section end
