function calculateRhombusArea(){
    const d1 = getInputValue('Rhombus-d1');
    const d2 = getInputValue('Rhombus-d2');
    
    const area = 0.5 * d1 * d2;
    setInnerText('Rhombus-area', area);

    }


// function calculateRhombusArea(){
//     const d1Input = document.getElementById('Rhombus-d1');
//     const d1Text = d1Input.value;
//     const d1 = parseFloat(d1Text)

//     const  d2Input = document.getElementById('Rhombus-d2');
//     const  d2Text =  d2Input.value;
//     const  d2 = parseFloat( d2Text)

//     // Calculate 
//     const Area =  0.5 * d1 * d2;

//     const Final  = document.getElementById('Rhombus-area');
//     Final.innerText = Area;
// }