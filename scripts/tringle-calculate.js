function calculateTringleArea(){
    const tringleBaseInput = document.getElementById('triangle-base');
    const tringleBaseText= tringleBaseInput.value;
    const base =parseFloat(tringleBaseText) ;
    console.log(base);
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height= parseFloat(triangleHeightText);
    console.log(height);

    const area= .5*base*height;
    console.log("area of triangle is: ",area);
    const triangleAreaSpan= document.getElementById('triangle-area');
    triangleAreaSpan.innerText =area;

}
 


