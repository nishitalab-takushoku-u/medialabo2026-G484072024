
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("都市: " + data.name);
  
  console.log("天気: " + data.weather[0].description);
  console.log("気温: " + (data.main.temp - 273.15).toFixed(1) + " °C");
  console.log("体感温度: " + (data.main.feels_like - 273.15).toFixed(1) + " °C");

}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  let result = document.querySelector('#result');

  
  result.innerHTML = '';

  
  let h2 = document.createElement('h2');
  h2.textContent = '検索結果';
  result.insertAdjacentElement('beforeend', h2);

  
  let ul = document.createElement('ul');

  
  let li1 = document.createElement('li');
  li1.textContent = '都市: ' + data.name;
  ul.insertAdjacentElement('beforeend', li1);

  
  let li2 = document.createElement('li');
  li2.textContent = '天気: ' + data.weather[0].description;
  ul.insertAdjacentElement('beforeend', li2);

  
  let li3 = document.createElement('li');
  li3.textContent = '気温: ' + data.main.temp.toFixed(1) + ' °C';
  ul.insertAdjacentElement('beforeend', li3);

  
  let li4 = document.createElement('li');
  li4.textContent = '体感温度: ' + data.main.feels_like.toFixed(1) + ' °C';
  ul.insertAdjacentElement('beforeend', li4);

  
  let li5 = document.createElement('li');
  li5.textContent = '湿度: ' + data.main.humidity + '%';
  ul.insertAdjacentElement('beforeend', li5);

  
  result.insertAdjacentElement('beforeend', ul);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
document.querySelector('#btn')
  .addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let key =document.querySelector('#key').value;


console.log('検索キー: ' + key);
let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + key + '.json';

  
  axios.get(url)
      .then(showResult)   
      .catch(showError)   
      .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
    let result = document.querySelector('#result');

    result.innerHTML = '<p>検索に失敗しました</p>';
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除するこ
