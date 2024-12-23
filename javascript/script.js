let backgroundColor = "#000000";
const widthContainer = 600;
const choiceColors = ["red", "blue", "green", "yellow", "black"];
let isColorSelected = false;

const container = document.querySelector(".container");
container.style.width = widthContainer + "px";
container.addEventListener("mouseover", (event) => {

    let target = event.target;
    if(target.className === "cell")
    {
        if(!isColorSelected)
            backgroundColor = getRandomColor();
        target.style.backgroundColor = backgroundColor;

        let opacity = target.style.opacity;
        opacity = Number(opacity) + 0.1

        target.style.opacity = opacity;
    }
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

    resetMenu();
    setGrid(input);
});

setGrid(16);

const menu = document.querySelector("ul");

for(let i = 0; i < choiceColors.length; i++)
{
    const colorCellMenu = document.createElement("li");
    colorCellMenu.style.backgroundColor = choiceColors[i];
    menu.appendChild(colorCellMenu);
}

menu.addEventListener("click", (event) => {

    if(event.target.tagName !== "LI")
        return;

    resetMenu();

    backgroundColor = event.target.style.backgroundColor;
    event.target.style.border = "2px Blue solid";
    isColorSelected = true;

});

function resetMenu()
{
    for(let i = 0; i < menu.childNodes.length; i++)
    {
        menu.childNodes[i].style.border = "2px black solid";
    }

    isColorSelected = false;
}

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
        cell.style.opacity = "10%";
        container.appendChild(cell);
    }
}

function getRandomColor(){

    let r = Math.round(Math.random() * 1000) % 256;
    let g = Math.round(Math.random() * 1000) % 256;
    let b = Math.round(Math.random() * 1000) % 256;

    let result = "rgb(" + r + ", " + g + ", " + b + ")";

    return result;
}