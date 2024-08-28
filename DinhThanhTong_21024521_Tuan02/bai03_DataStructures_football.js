const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1. Tạo mảng 'events' chứa các sự kiện khác nhau (không trùng lặp)
const events = [...new Set(gameEvents.values())];
console.log("Các sự kiện trong trận đấu:", events);

// 2. Xóa thẻ vàng ở phút 64 khỏi bản ghi sự kiện
gameEvents.delete(64);
console.log("Sau khi xóa thẻ vàng không công bằng:", gameEvents);

// 3. Tính toán và ghi log câu "An event happened, on average, every 9 minutes"
const gameDuration = 90; // 90 phút
const avgEventInterval = gameDuration / gameEvents.size;
console.log(`Trung bình cứ mỗi ${avgEventInterval.toFixed(2)} phút lại có một sự kiện xảy ra`);

// 4. Duyệt qua 'gameEvents' và ghi log từng phần tử, chỉ rõ thuộc hiệp 1 hay hiệp 2
for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? '[HIỆP 1]' : '[HIỆP 2]';
    console.log(`${half} ${minute}: ${event}`);
}
