// ループ（繰り返し処理）の使い方

// for文: 指定回数だけ処理を繰り返す
console.log("=== for文 ===");
for (let i = 0; i < 5; i++) {
    // i = 0 で開始、i < 5 の間繰り返す、各ループでiを1増やす
    console.log("カウント: " + i); // 0, 1, 2, 3, 4 が出力される
}

// while文: 条件が真の間、処理を繰り返す
console.log("=== while文 ===");
let count = 0;
while (count < 3) {
    console.log("カウント: " + count); // 0, 1, 2 が出力される
    count++; // カウントを1増やす
}

// do-while文: 最低1回は処理を実行し、その後条件が真の間繰り返す
console.log("=== do-while文 ===");
let num = 0;
do {
    console.log("番号: " + num); // 0, 1, 2 が出力される
    num++;
} while (num < 3);

// 配列のループ: for...of文
console.log("=== for...of文 ===");
const colors = ["赤", "青", "緑"];
for (const color of colors) {
    console.log(color); // 各要素が順番に出力される
}

// break: ループを途中で終了
console.log("=== breakの使用 ===");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // i が 5 になったらループを終了
    }
    console.log(i); // 0, 1, 2, 3, 4 が出力される
}

// continue: 現在のループをスキップして次のループへ
console.log("=== continueの使用 ===");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // i が 2 の時はスキップ
    }
    console.log(i); // 0, 1, 3, 4 が出力される（2はスキップ）
}
