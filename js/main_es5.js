

class Filter{
    constructor(){
        this.init();
        this.bindingEvent();
        this.inputRange01();
    }   
    init(){
        this.topWrap = document.querySelector('.toolbar');
        this.search = this.topWrap.querySelector('input[type="search"]');
        this.totlePT = this.topWrap.querySelector('.counter span');
        this.btns = this.topWrap.querySelectorAll('.view-options button');
        this.inputRange = this.topWrap.querySelector('input[type="range"]');
        this.imgList = document.querySelector('.image-list');
        this.imgListItem = this.imgList.querySelectorAll('li');
        this.imgListItemTT = this.imgList.querySelectorAll('figcaption p:first-child');
        this.myArr = [];
        this.countIdx = 1;
        this.active = 'active';
        this.gridView = 'grid-view';
        this.listView = 'list-view';
        this.hidden = 'd-none';
    }
    bindingEvent(){
        this.btns.forEach(function(btn,idx){
    
            btn.addEventListener('click', e=>{
                e.preventDefault();
    
                this.Btns01(this.btns, idx);
            });
        }.bind(this));
        for(const item of this.imgListItemTT){
            this.myArr.push({
                id:this.countIdx++,
                text : item.textContent
            });
        }  
        this.search.addEventListener('keyup',function(){
            console.log(this.value);
            for(const item of this.imgListItem){
                item.classList.add(this.hidden);
                const keyword = this.value;
                console.log(keyword);
                const arr2 = this.myArr.filter(el=>{
                return el.text.includes(keyword);
            });
            if(arr2.length > 0){
                for(const el of arr2){
                    document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(this.hidden);
                }
            }
            this.totlePT.innerText = arr2.length;
            }
        }); 
    }
    Btns01(target,idx){
        for(const el of target){
            const parent = el.parentElement;
            parent.classList.remove(this.active);
            target[idx].parentElement.classList.add(this.active);
    
            if(target[idx].parentElement.classList.contains('show-list')){
                target[idx].parentElement.previousElementSibling.previousElementSibling.classList.add(this.hidden);
                    this.imgList.classList.remove(this.gridView);
                    this.imgList.classList.add(this.listView);

            } else{
                target[idx].parentElement.previousElementSibling.classList.remove(this.hidden);
                    this.imgList.classList.remove(this.listView);
                    this.imgList.classList.add(this.gridView);
            }
        }
    }
    inputRange01(){
        this.inputRange.addEventListener('input',function(){
            document.documentElement.style.setProperty('--minRangeValue',`${this.value}px`);
        });
    }



}









