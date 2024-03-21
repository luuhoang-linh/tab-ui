const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$('.tab-item');
const panes = $$('.tab-pane');
const tabActive = $('.tab-item.active');
// nhớ là có cách với không có cách trong hàm $, $$ khác nhau
const line =  $('.tabs .line');

// mặc định line ở tab active ban đầu, trong html là tab react
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

// forEach qua 4 tab để quét từng tab 1,
// nếu bắt được sự kiện onclick vào tab nào thì,
// chuyển class active sang tab đó,
// đồng thời lấy index của tab đó truyền vào nodeList của  panes,
// để thực hiện tương tự tab
// với thằng line thì khi bắt được sự kiện click vào tab nào,
// thì chuyển thanh line sang tab đó, 
// kết hợp CSS làm hiệu ứng chuyển mượt mà 

items.forEach((tab, index) => {
  tab.onclick = function () {
    // xóa tab active hiện tại
    $('.tab-item.active').classList.remove('active');
    $('.tab-pane.active').classList.remove('active');

    // add active sang tab và pane
    let pane = panes[index];
    this.classList.add('active');
    pane.classList.add('active');

    // chuyển line
    line.style.left = this.offsetLeft + 'px';
    line.style.width = this.offsetWidth + 'px';
  }
});

