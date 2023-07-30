/** 
 * Giải thích từng phần của đoạn mã:

    export default function logger(reducer) { ... }: Đây là một hàm được xuất khẩu mặc định (default export) từ module. Hàm này có tên là logger và có một tham số reducer là một hàm reducer khác.

    return function (prevState, action, args) { ... }: Trong hàm logger, chúng ta trả về một hàm mới với ba tham số là prevState, action, và args. Hàm này là reducer mở rộng (enhanced reducer) được thêm vào chức năng ghi log thông tin.

    const nextState = reducer(prevState, action, args);: Trong hàm mới, chúng ta gọi hàm reducer ban đầu (được truyền vào qua tham số reducer) với các tham số prevState, action, và args để tính toán nextState. Hàm reducer này sẽ thay đổi trạng thái (state) dựa trên hành động (action) và tham số khác (args) nếu có.

    return nextState;: Cuối cùng, trong hàm mới, chúng ta trả về nextState, đó chính là kết quả của quá trình giữ nguyên chức năng reducer ban đầu, nhưng đã được bổ sung thêm chức năng ghi log thông tin. Trạng thái mới nextState sẽ được trả về bởi hàm mới này để cập nhật trong store Redux.
*/
export default function logger(reducer) {
    return function (prevState, action, args) {
        console.group(action);
        const nextState = reducer(prevState, action, args);
        console.log('Previous state: ', prevState);
        console.log('Args: ', args);
        console.log('Next state: ', nextState);
        console.groupEnd();
        return nextState;
    };
}
