

let titles = document.querySelectorAll(".box_title");
let paragraphs = document.querySelectorAll(".box_desc");
let buttons = document.querySelectorAll('.plus_img');
let minus_buttons = document.querySelectorAll('.minus_img');
let currentI = 0;
document.getElementById(`desc${currentI+1}`).style.display = 'block';
buttons[currentI].style.display = 'none';
minus_buttons[currentI].style.display = 'block';

for (let i=0;i<=3;i++) {
    titles[i].addEventListener("click",function () {
        if (document.getElementById(`desc${i+1}`).style.display !== 'block'){
            document.getElementById(`desc${i+1}`).style.display = 'block';
            buttons[i].style.display = 'none';
            minus_buttons[i].style.display = 'block';
        } else {
            document.getElementById(`desc${i+1}`).style.display = 'none';
            buttons[i].style.display = 'block';
            minus_buttons[i].style.display = 'none';
        }
    })
}
const showPara = (ci)=>{
    paragraphs[ci].style.display = 'block';
    buttons[ci].style.display = 'none';
    minus_buttons[ci].style.display = 'block';
}
const hidePara = (ci)=>{
    paragraphs[ci].style.display = 'none';
    buttons[ci].style.display = 'block';
    minus_buttons[ci].style.display = 'none';
}
document.addEventListener("keydown",function (ev) {

    if(ev.key==='ArrowDown'){
        hidePara(currentI);
        currentI = currentI < paragraphs.length -1 ? ++currentI : paragraphs.length-1;
        showPara(currentI);
    }else if(ev.key==='ArrowUp'){
        hidePara(currentI);
        currentI = currentI > 0 ? --currentI : 0;
        showPara(currentI);
    }
})
