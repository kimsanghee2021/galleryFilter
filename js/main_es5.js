const topWrap = document.querySelector('.toolbar');
const search = topWrap.querySelector('input[type="search"]');
const totlePT = topWrap.querySelector('.counter span');
const btns = topWrap.querySelectorAll('.view-options button');
const inputRange = topWrap.querySelector('input[type="range"]');
const imgList = document.querySelector('.image-list');
const imgListItem = imgList.querySelectorAll('li');
const imgListItemTT = imgList.querySelectorAll('figcaption p:first-child');

const myArr = [];
let countIdx = 1;

const active = 'active';
const gridView = 'grid-view';
const listView = 'list-view';
const hidden = 'd-none';


btns.forEach(function(btn,idx){
    btn.addEventListener('click',function(e){
        e.preventDefault();
        Btns(btns,idx);
    });
});


inputRange.addEventListener('input',function(){
    document.documentElement.style.setProperty('--minRangeValue',`${this.value}px`);
});


search.addEventListener('keyup',handler);

//버튼함수
function Btns(target,idx){
    for(const el of target){
        const parent = el.parentElement;
        parent.classList.remove(active);
        target[idx].parentElement.classList.add(active);

        if(target[idx].parentElement.classList.contains('show-list')){
            target[idx].parentElement.previousElementSibling.previousElementSibling.classList.add(hidden);
            imgList.classList.remove(gridView);
            imgList.classList.add(listView);
        } else{
            target[idx].parentElement.previousElementSibling.classList.remove(hidden);
            imgList.classList.remove(listView);
            imgList.classList.add(gridView);
        }
    }
}



for(const item of imgListItemTT){
    myArr.push({
        id:countIdx++,
        text : item.textContent
    });
}    


function handler(){
    for(const item of imgListItem){
        item.classList.add(hidden);
        const keyword = this.value;
        const arr2 = myArr.filter(function(el){
            return el.text.includes(keyword);
        });
        if(arr2.length > 0){
            for(const el of arr2){
                document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(hidden);
            }
        }
        totlePT.innerText = arr2.length;
    }
}



