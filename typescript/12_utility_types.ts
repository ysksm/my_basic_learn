// ユーティリティ型: TypeScript組み込みの便利な型変換ツール

// 元となる型定義
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Partial<T>: すべてのプロパティをオプショナルにする
type PartialUser = Partial<User>;
// 結果: { id?: number; name?: string; email?: string; age?: number; }

const partialUser: PartialUser = {
    name: "太郎" // id, email, age は省略可能
};
console.log(partialUser);

// Required<T>: すべてのプロパティを必須にする
interface OptionalUser {
    id?: number;
    name?: string;
}

type RequiredUser = Required<OptionalUser>;
// 結果: { id: number; name: string; }

const requiredUser: RequiredUser = {
    id: 1,
    name: "花子" // 両方とも必須
};
console.log(requiredUser);

// Readonly<T>: すべてのプロパティを読み取り専用にする
type ReadonlyUser = Readonly<User>;

const readonlyUser: ReadonlyUser = {
    id: 1,
    name: "次郎",
    email: "jiro@example.com",
    age: 28
};

// readonlyUser.name = "別の名前"; // エラー: 読み取り専用
console.log(readonlyUser);

// Pick<T, K>: 特定のプロパティだけを選択
type UserPreview = Pick<User, "id" | "name">;
// 結果: { id: number; name: string; }

const preview: UserPreview = {
    id: 1,
    name: "太郎"
    // email, age は含まれない
};
console.log(preview);

// Omit<T, K>: 特定のプロパティを除外
type UserWithoutEmail = Omit<User, "email">;
// 結果: { id: number; name: string; age: number; }

const userNoEmail: UserWithoutEmail = {
    id: 1,
    name: "花子",
    age: 30
    // email は含まれない
};
console.log(userNoEmail);

// Record<K, T>: キーと値の型を指定してオブジェクト型を作成
type UserRole = "admin" | "editor" | "viewer";
type RolePermissions = Record<UserRole, string[]>;

const permissions: RolePermissions = {
    admin: ["read", "write", "delete"],
    editor: ["read", "write"],
    viewer: ["read"]
};
console.log(permissions);

// Exclude<T, U>: T から U に代入可能な型を除外
type AllTypes = string | number | boolean;
type StringOrNumber = Exclude<AllTypes, boolean>;
// 結果: string | number

const value1: StringOrNumber = "text"; // OK
const value2: StringOrNumber = 123;    // OK
// const value3: StringOrNumber = true; // エラー

// Extract<T, U>: T から U に代入可能な型のみを抽出
type ExtractedTypes = Extract<AllTypes, string | boolean>;
// 結果: string | boolean

const extracted1: ExtractedTypes = "text"; // OK
const extracted2: ExtractedTypes = true;   // OK
// const extracted3: ExtractedTypes = 123;  // エラー

// NonNullable<T>: null と undefined を除外
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;
// 結果: string

const definite: DefiniteString = "hello"; // OK
// const definite2: DefiniteString = null; // エラー

// ReturnType<T>: 関数の戻り値の型を取得
function getUser() {
    return {
        id: 1,
        name: "太郎",
        email: "taro@example.com"
    };
}

type UserReturnType = ReturnType<typeof getUser>;
// 結果: { id: number; name: string; email: string; }

const returnedUser: UserReturnType = getUser();
console.log(returnedUser);

// Parameters<T>: 関数の引数の型をタプルとして取得
function createUser(name: string, age: number, email: string) {
    return { name, age, email };
}

type CreateUserParams = Parameters<typeof createUser>;
// 結果: [string, number, string]

const params: CreateUserParams = ["次郎", 28, "jiro@example.com"];
console.log(createUser(...params));

// 実用例: APIレスポンスの型定義
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

type UserResponse = ApiResponse<User>;
type UsersResponse = ApiResponse<User[]>;

const singleUserResponse: UserResponse = {
    data: {
        id: 1,
        name: "太郎",
        email: "taro@example.com",
        age: 25
    },
    status: 200,
    message: "Success"
};

const multipleUsersResponse: UsersResponse = {
    data: [
        { id: 1, name: "太郎", email: "taro@example.com", age: 25 },
        { id: 2, name: "花子", email: "hanako@example.com", age: 30 }
    ],
    status: 200,
    message: "Success"
};

console.log(singleUserResponse);
console.log(multipleUsersResponse);
