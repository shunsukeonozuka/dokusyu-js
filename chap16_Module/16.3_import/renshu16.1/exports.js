// ①名前付きエクスポート
// オブジェクト
export const object = { apple: "リンゴ", banana: "バナナ" };
// 関数
export function fn() {
    console.log("関数のエクスポート");
}
// クラス
export class exClass {
    static console() {
        console.log("クラスのエクスポート");
    }
}
// 関数のデフォルトエクスポート
export default () => {
    console.log("関数のデフォルトエクスポート");
};
