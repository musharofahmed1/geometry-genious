function calculateTriangleArea(){
    //get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    //get triangle height
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area =  0.5 * base * height; 

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}
function calculateRectangleArea(){
    //get triangle base value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    //get triangle height
    const lengthField = document.getElementById('rectangle-length');
    const lenghtValueText = lengthField.value;
    const length = parseFloat(lenghtValueText);

    const area = width * length; 

    const RectangleAreaSpan = document.getElementById('rectangle-area');
    RectangleAreaSpan.innerText = area;
}