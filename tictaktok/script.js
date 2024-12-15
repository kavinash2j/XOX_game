document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.querySelectorAll(".but");
    let showp = document.querySelector("#head"); // Select the <p> with id "head"
    let showdiv = document.querySelector("#winner");
    let pressO = true;
    let conatiner = document.querySelector("#container");
    conatiner.classList.remove("hide2");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (pressO) {
                button.innerText = "O";
            } else {
                button.innerText = "X";
            }
            pressO = !pressO;
            button.disabled = true;
            checkwinn();
        });
    });

    function winner(first) {
        showp.textContent = `Winner is ${first}`; // Update the text inside the <p>
        showdiv.classList.remove("hide"); // Remove the hide class to show the div
        conatiner.classList.add("hide2");
    }

    let winn = [
        [0, 1, 2], [0, 3, 6], [3, 4, 5], [1, 4, 7], 
        [2, 5, 8], [6, 7, 8], [0, 4, 8], [2, 4, 6]
    ];

    function checkwinn() {
        for (let win of winn) {
            let first = buttons[win[0]].innerText;
            let second = buttons[win[1]].innerText;
            let third = buttons[win[2]].innerText;

            if (first !== "" && second !== "" && third !== "") {
                if (first === second && first === third) {
                    winner(first); // Call the winner function with the winning player
                }
            }
        }
    }

    // Reset button logic
    let reset = document.querySelector("#re");
    reset.addEventListener("click", () => {
        for(let but of buttons){
            but.innerText = '';
            but.disabled = false;
        }
        showdiv.classList.add("hide");
        conatiner.classList.remove("hide2");
    })
});
