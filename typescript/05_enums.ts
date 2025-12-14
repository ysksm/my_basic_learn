// Enum（列挙型）: 名前付きの定数のセットを定義

// 数値列挙型: デフォルトで0から始まる連番
enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
}

let currentDirection: Direction = Direction.Up;
console.log(currentDirection); // 出力: 0

if (currentDirection === Direction.Up) {
    console.log("上方向です"); // 出力: 上方向です
}

// 明示的に値を指定
enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

function handleResponse(status: Status): string {
    switch (status) {
        case Status.Success:
            return "成功しました";
        case Status.NotFound:
            return "見つかりませんでした";
        case Status.ServerError:
            return "サーバーエラーが発生しました";
        default:
            return "不明なステータス";
    }
}

console.log(handleResponse(Status.Success));      // 出力: 成功しました
console.log(handleResponse(Status.NotFound));     // 出力: 見つかりませんでした

// 文字列列挙型: 文字列値を持つEnum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let favoriteColor: Color = Color.Blue;
console.log(favoriteColor); // 出力: BLUE

// Enumを使用した関数
function paintCar(color: Color): string {
    return `車を${color}色で塗装します。`;
}

console.log(paintCar(Color.Red));   // 出力: 車をRED色で塗装します。
console.log(paintCar(Color.Green)); // 出力: 車をGREEN色で塗装します。

// Enumの利点: タイプセーフで、定義された値以外は使用できない
// paintCar("YELLOW"); // エラー: 定義されていない値は使用できない
