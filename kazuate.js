// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// ゲーム終了判定
let owari = false;

// ボタンを押した後の処理
function hantei() {

  // 予想回数を増やす
  kaisu++;

  // span#kaisu の表示を更新
  document.querySelector('#kaisu').textContent = kaisu;

  // テキストボックスの値を取得
  let yoso =
    Number(document.querySelector('#yoso').value);
    document.querySelector('#yosokekka').textContent = yoso;

  // 結果表示用
  let result =
    document.querySelector('#result');

  // 4回以上 または終了済み
  if (kaisu >= 4 || owari === true) {

    result.textContent =
      '答えは ' + kotae +
      ' でした．すでにゲームは終わっています';

    return;
  }

  // 正解
  if (yoso === kotae) {

    result.textContent =
      '正解です．おめでとう!';

    owari = true;
  }

  // 不正解
  else {

    // 3回目で失敗
    if (kaisu === 3) {

      result.textContent =
        'まちがい．残念でした．答えは ' +
        kotae + ' です．';

      owari = true;
    }

    // 答えの方が大きい
    else if (yoso < kotae) {

      result.textContent =
        'まちがい．答えはもっと大きいですよ';
    }

    // 答えの方が小さい
    else {

      result.textContent =
        'まちがい．答えはもっと小さいですよ';
    }
  }
}

// ボタンにイベントを登録
document.querySelector('#btn')
  .addEventListener('click', hantei);