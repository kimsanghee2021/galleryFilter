//for of 반복문으로 제목과 인덱스 번호를 배열로 담기
//인풋박스에 텍스트 입력시 해당 텍스트 노출하기 
//모든 사진을 다 안보이게 한다.
//현재 인풋에 담기는 값과 인풋에 담기는 값에 맞는 필터를 만들어라
//필터어레이에 0개 이상 즉 1개라도 나오면 해당하는 값을 노출시켜라
const topWrap = document.querySelector('.toolbar');
const search = topWrap.querySelector('input[type="search"]');
const totlePT = topWrap.querySelector('.counter span');
const btns = topWrap.querySelectorAll('.view-options button');
const inputRange = topWrap.querySelector('input[type="range"]');
const imgList = document.querySelector('.image-list');
const imgListItem = imgList.querySelectorAll('li');
const imgListItemTT = imgList.querySelectorAll('figcaption p:first-child');

const active = 'active';
const gridView = 'grid-view';
const listView = 'list-view';
const hidden = 'd-none';

//상단 버튼활성화 스크립트 짜기 
btns.forEach(function(btn,idx){
    btn.addEventListener('click',function(e){
        e.preventDefault();
        for(const el of btns){
            const parent = el.parentElement;
            parent.classList.remove(active);
            btns[idx].parentElement.classList.add(active);
            // console.log(parent);
            if(btns[idx].parentElement.classList.contains('show-list')){
                btns[idx].parentElement.previousElementSibling.previousElementSibling.classList.add(hidden);
                imgList.classList.remove(gridView);
                imgList.classList.add(listView);
            } else{
                btns[idx].parentElement.previousElementSibling.classList.remove(hidden);
                imgList.classList.remove(listView);
                imgList.classList.add(gridView);
            }
        }

    });
});

//input range를 변할때마다 갤러리 넓이가 변하게 짜기
inputRange.addEventListener('input',function(){
    document.documentElement.style.setProperty('--minRangeValue',`${this.value}px`);
});

//검색키워드 필터 적용방법
