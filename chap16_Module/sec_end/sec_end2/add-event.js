// 要素の特定のイベントに対してアクションを登録する関数
export default function (element, eventType, action) {
    element.addEventListener(eventType, (event) => {
        action(event);
    });
}
