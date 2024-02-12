function calculateParaArea(){
    const paraBaseInput = document.getElementById('para-base');
    const paraBaseText = paraBaseInput.value;
    const base = parseFloat(paraBaseText);
    console.log(base);
    const paraHeightInput= document.getElementById('para-height');
    const paraHeightText = paraBaseInput.value;
    const height = parseFloat(paraBaseText);
    console.log(height);
    const area= base * height;
    const paraArea= document.getElementById('para-area');
    paraArea.innerText = area;
    console.log(area);
}