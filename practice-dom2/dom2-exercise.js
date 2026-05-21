//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
function show() {

    
    let pAddr = document.createElement('p');
    pAddr.textContent = campus.address; 
    let h2Addr = document.querySelector('h2#addr');
    if (h2Addr) h2Addr.insertAdjacentElement('afterend', pAddr);

    
    let ulDept = document.createElement('ul');
    
    
    for (let g of gakka) {
        let liDept = document.createElement('li');
        
        liDept.textContent = g.name; 
        ulDept.insertAdjacentElement('beforeend', liDept);
    }
    
    let h2Dept = document.querySelector('h2#dept');
    if (h2Dept) h2Dept.insertAdjacentElement('afterend', ulDept);
}


let btnShow = document.querySelector('button#show');
if (btnShow) {
    btnShow.addEventListener('click', show);
}