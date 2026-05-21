// 3. 定义 changeDom 函数
function changeDom() {
    
    // === 1. 要素の新規作成（添加“ヨット”） ===
    let l1 = document.createElement('li');
    l1.textContent = 'ヨット';
    let u1 = document.querySelector('#kazoeuta');
    if (u1) u1.insertAdjacentElement('beforeend', l1);

    // === 2. 属性の変更（显示蓝月亮图片） ===
    let img = document.querySelector('img#bluemoon');
    if (img) img.setAttribute('src', 'bluemoon.jpg');

    // === 3. 拓殖大学のリンクを追加 ===
    let a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp/');
    let p_takudai = document.querySelector('p#takudai');
    if (p_takudai) p_takudai.insertAdjacentElement('afterend', a);

    // === 4. 要素の削除（把整个大列表连根拔起删掉） ===
    let u_kassen = document.querySelector('ul#kassen');
    if (u_kassen) u_kassen.remove();

    // === 5. 複雑な新規要素の作成（创建光的三原色列表） ===
    let u_primary = document.createElement('ul');
    
    let li_red = document.createElement('li');
    li_red.textContent = '赤';
    u_primary.insertAdjacentElement('beforeend', li_red);
    
    let li_green = document.createElement('li');
    li_green.textContent = '緑';
    u_primary.insertAdjacentElement('beforeend', li_green);
    
    let li_blue = document.createElement('li');
    li_blue.textContent = '青';
    u_primary.insertAdjacentElement('beforeend', li_blue);
    
    let p_primary = document.querySelector('p#primary');
    if (p_primary) p_primary.insertAdjacentElement('afterend', u_primary);
}

// 4. 将 changeDom 函数注册给“変更”按钮的点击事件（イベントハンドラとして登録）
let btn = document.querySelector('button#henkou');
if (btn) {
    btn.addEventListener('click', changeDom);
}