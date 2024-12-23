let backgroundColor = "#000000";
const widthContainer = 600;

const container = document.querySelector(".container");
container.style.width = widthContainer + "px";
container.addEventListener("mouseover", (event) => {

    let target = event.target;
    if(target.className === "cell")
        target.style.backgroundColor =backgroundColor;
});

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click",() => {

    let input = 0;
    let token = true;

    while(token)
    {
        input = prompt("Insert a number:", "");

        if(!Number(input))
        {
            alert("You must insert a number");
        }
        else if (input < 1 || input > 100)
        {
            alert("You have to insert a number between 1 and 100");
        }
        else
        {
            token = false;
        }
    }

    setGrid(input);
});

setGrid(16);

function setGrid(number)
{
    const oldCells = document.querySelectorAll(".cell");
    const numberOfCells = number * number;
    let minWidth = widthContainer / number

    for(let i = 0; i < oldCells.length; i++)
    {
        oldCells[i].remove();
    }

    for(let i = 0; i < numberOfCells; i++)
    {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.minWidth = minWidth + "px";
        container.appendChild(cell);
    }
}