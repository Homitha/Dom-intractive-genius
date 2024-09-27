function calculateParallelogramArea(){
    const base = getInputValue('Parallelogram-base');
    const height = getInputValue('Parallelogram-height');

    const area = base * height;
    // console.log(area);

    setInnerText('Parallelogram-area', area);
}


function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputvalue = parseFloat(inputText);
    return inputvalue;
}

function setInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}