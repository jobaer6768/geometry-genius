function getInputFieldById(inputId){
    const inputField = document.getElementById(inputId);
    const value = parseFloat(inputField.value);
    inputField.value = '';

    return value;
}

function getInnerElementById(elementId){
    const innerElement = document.getElementById(elementId);
    const element = parseFloat(innerElement.innerText);

    return element;
}

function setElement(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function area(a, b){
    return a*b;
}

function calculateTriangleArea(){
    const triangleBase = getInputFieldById('triangle-base');
    const triangleHeight = getInputFieldById('triangle-height');

    const triangleArea = 0.5 * area(triangleBase, triangleHeight);
    setElement('triangle-area', triangleArea);

    return triangleArea;
}
