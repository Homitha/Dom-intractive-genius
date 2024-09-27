function calculateTriangleArea(){
    const baseInput = document.getElementById('triangle-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText)

    const heightInput = document.getElementById('triangle-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText)

    // Calculate 
    const Area = 0.5*base*height;

    const Final  = document.getElementById('triangle-area');
    Final.innerText = Area;
}

function calculateRectangleArea(){
    const WeightInput = document.getElementById('rectangle-base');
    const WeightText = WeightInput.value;
    const Weight = parseFloat(WeightText)

    const lengthInput = document.getElementById('rectangle-height');
    const lengthtText = lengthInput.value;
    const length = parseFloat(lengthtText)

    // Calculate 
    const Area = Weight * length;

    const Final  = document.getElementById('rectangle-area');
    Final.innerText = Area;
}