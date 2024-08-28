const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Duyệt qua mảng game.scored và in ra tên cầu thủ cùng với số thứ tự bàn thắng
console.log("=== Kết quả trận đấu ===");
for (const [index, player] of game.scored.entries()) {
    console.log(`Bàn thắng ${index + 1}: ${player}`);
}

const oddsValues = Object.values(game.odds);
let averageOdd = 0;
for (const odd of oddsValues) {
    averageOdd += odd;
}
averageOdd /= oddsValues.length;
console.log("Tỉ lệ cược trung bình:", averageOdd);

console.log(`Tỉ lệ cược cho chiến thắng ${game.team1}: ${game.odds.team1}`);
console.log(`Tỉ lệ cược hòa: ${game.odds.x}`);
console.log(`Tỉ lệ cược cho chiến thắng ${game.team2}: ${game.odds.team2}`);

// 4. Tạo đối tượng 'scorers' chứa tên cầu thủ ghi bàn và số lượng bàn thắng
const scorers = {};
for (const player of game.scored) {
    scorers[player] = (scorers[player] || 0) + 1;
}
console.log("Danh sách cầu thủ ghi bàn:", scorers);
