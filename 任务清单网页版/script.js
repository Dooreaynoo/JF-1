const 文字栏 = document.querySelector(".文字栏");
const 清单 = document.querySelector(".清单");
const 按钮 = document.querySelector(".按钮");

function 添加新任务(){
    if(文字栏.value === ""){
        return;
    }
    const 任务 = document.createElement("li");
    任务.innerHTML= `<input type="checkbox" class="打勾方块">
    <label>${文字栏.value}</label>
    <button class="删除按钮">🗑️</button>
    `
    const 垃圾桶=任务.querySelector(".删除按钮");
    const 打勾方块=任务.querySelector(".打勾方块");
    打勾方块.addEventListener("change",function(){
        if(打勾方块.checked){
            任务.style.textDecoration="line-through";
            任务.style.color="gray";
            清单.append(任务);
        }
        else{
            任务.style.textDecoration="none";
            任务.style.color="black";
            清单.prepend(任务);
        }
    });
    垃圾桶.addEventListener("click",function(){
        任务.remove();
    });
        清单.append(任务);
        文字栏.value = "";
};
按钮.addEventListener("click",添加新任务);
文字栏.addEventListener("keyup",function(e){
    if(e.key === "Enter"){
        添加新任务();}
});