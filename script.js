//1.chon tat ca cac nut va cac khoi noi dung
const tabs = document.querySelectorAll('tab-btn');
const contents = document.querySelectorAll('.tab-content');

//lap qua tung nut de gan sk click
tabs.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        //buoc A: don dep trang thai cu
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        //buoc B: kich hoat trang thai moi
        //them active vao nut vua bam
        btn.classList.add('active');

        //lay gia tri tu data target
        const targetId = btn.getAttribute('data-target');

        //tim phan tu co id do va them class active
        document.getElementById(targetId).classList.add('active');
    });
});