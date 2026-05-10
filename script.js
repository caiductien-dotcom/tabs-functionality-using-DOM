// 1. Chọn tất cả các nút và các khối nội dung
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

// 2. Lặp qua từng nút để gắn sự kiện click
tabs.forEach(btn => {
    btn.addEventListener('click', () => {
        
        // BƯỚC A: Dọn dẹp trạng thái cũ
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // BƯỚC B: Kích hoạt trạng thái mới
        // Thêm active cho nút vừa bấm
        btn.classList.add('active');

        // Lấy giá trị từ data-target (ví dụ: "tab2")
        const targetId = btn.getAttribute('data-target');
        
        // Tìm phần tử có ID đó và thêm class active
        document.getElementById(targetId).classList.add('active');
    });
});