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

function validationCheck(b, h){
    return (isNaN(b) || isNaN(h));
}

function calculateTriangleArea(){
    const triangleBase = getInputFieldById('triangle-base');
    const triangleHeight = getInputFieldById('triangle-height');

    if(validationCheck(triangleBase, triangleHeight)){
        alert('Please enter a number');
        return;
    }

    const triangleArea = 0.5 * area(triangleBase, triangleHeight);
    setElement('triangle-area', triangleArea);
}

function calculateRectangleArea(){
    const width = getInputFieldById('rectangle-width');
    const length = getInputFieldById('rectangle-length');

    if(validationCheck(width, length)){
        alert('Please enter a number');
        return;
    }

    const rectangleArea = area(width, length);
    setElement('rectangle-area', rectangleArea);
}

function calculateParallelogramArea(){
    const base = getInputFieldById('parallelogram-base');
    const height = getInputFieldById('parallelogram-height');

    if(validationCheck(base, height)){
        alert('Please enter a number');
        return;
    }

    const parallelogramArea = area(base, height);
    setElement('parallelogram-area', parallelogramArea);
}