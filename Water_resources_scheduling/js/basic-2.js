var tab = document.getElementById('tab');

var btn = tab.getElementsByClassName('btn');

var con = tab.getElementsByClassName('tab-con');

/*
var btn = $('#tab').find('.btn');
var con = $('.tab-con');
*/

console.log(tab);
console.log(btn);
console.log(con);

for (var i=0;i<btn.length;i++){
    btn[i].index=i;
    btn[i].onclick= function () {
        for (var j=0;j<btn.length;j++){
                btn[j].className = 'layui-btn btn layui-btn-primary';
                con[j].className = 'tab-con'
        }
       this.className = 'act btn layui-btn layui-btn-primarylayui-btn-primary';
        con[this.index].className = 'tab-con act'
    }
}