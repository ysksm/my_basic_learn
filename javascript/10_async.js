// 非同期処理: setTimeout、Promise、async/await

// setTimeout: 指定時間後に処理を実行
console.log("開始");

setTimeout(function() {
    console.log("2秒後に実行されます");
}, 2000); // 2000ミリ秒 = 2秒

console.log("終了"); // この行は先に実行される

// 出力順序:
// 開始
// 終了
// 2秒後に実行されます（2秒後）

// Promise: 非同期処理の結果を扱う
function fetchData() {
    return new Promise(function(resolve, reject) {
        // 非同期処理をシミュレート
        setTimeout(function() {
            const success = true; // 成功フラグ
            
            if (success) {
                resolve("データ取得成功！"); // 成功時
            } else {
                reject("エラーが発生しました"); // 失敗時
            }
        }, 1000);
    });
}

// Promiseの使用: thenとcatch
fetchData()
    .then(function(result) {
        console.log(result); // 成功時の処理
        return "次の処理";
    })
    .then(function(result) {
        console.log(result); // チェーン可能
    })
    .catch(function(error) {
        console.error(error); // エラー時の処理
    });

// async/await: Promiseをより読みやすく書く方法
async function getData() {
    try {
        console.log("データ取得開始...");
        const result = await fetchData(); // Promiseの完了を待つ
        console.log(result);
        console.log("データ取得完了");
    } catch (error) {
        console.error("エラー:", error);
    }
}

// async関数を呼び出す
getData();

// 複数のPromiseを並列実行
async function fetchMultipleData() {
    const promise1 = new Promise(resolve => {
        setTimeout(() => resolve("データ1"), 1000);
    });
    
    const promise2 = new Promise(resolve => {
        setTimeout(() => resolve("データ2"), 1500);
    });
    
    const promise3 = new Promise(resolve => {
        setTimeout(() => resolve("データ3"), 500);
    });
    
    // Promise.all: すべてのPromiseが完了するのを待つ
    try {
        const results = await Promise.all([promise1, promise2, promise3]);
        console.log(results); // 出力: ['データ1', 'データ2', 'データ3']
    } catch (error) {
        console.error("エラー:", error);
    }
}

fetchMultipleData();

// Promise.race: 最初に完了したPromiseの結果を返す
async function raceExample() {
    const fast = new Promise(resolve => {
        setTimeout(() => resolve("速い処理"), 500);
    });
    
    const slow = new Promise(resolve => {
        setTimeout(() => resolve("遅い処理"), 2000);
    });
    
    const winner = await Promise.race([fast, slow]);
    console.log(winner); // 出力: 速い処理
}

raceExample();

// 実用例: API呼び出しのシミュレーション
async function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // APIレスポンスをシミュレート
            const users = {
                1: { name: "太郎", age: 25 },
                2: { name: "花子", age: 30 }
            };
            
            const user = users[userId];
            if (user) {
                resolve(user);
            } else {
                reject(new Error("ユーザーが見つかりません"));
            }
        }, 1000);
    });
}

async function displayUser() {
    try {
        const user = await fetchUserData(1);
        console.log(`名前: ${user.name}, 年齢: ${user.age}`);
    } catch (error) {
        console.error(error.message);
    }
}

displayUser();
