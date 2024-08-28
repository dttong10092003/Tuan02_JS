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

// 1. Tạo mảng cầu thủ cho mỗi đội
const [players1, players2] = game.players;
console.log("Cầu thủ đội 1:", players1);
console.log("Cầu thủ đội 2:", players2);

// 2. Tách thủ môn và cầu thủ trên sân của Bayern Munich (đội 1)
const [gk, ...fieldPlayers] = players1;
console.log("Thủ môn đội 1:", gk);
console.log("Cầu thủ trên sân của đội 1:", fieldPlayers);

// 3. Tạo mảng 'allPlayers' chứa tất cả cầu thủ của cả hai đội
const allPlayers = [...players1, ...players2];
console.log("Tất cả cầu thủ:", allPlayers);

// 4. Tạo mảng 'players1Final' chứa tất cả cầu thủ ban đầu của đội 1 và 3 cầu thủ dự bị
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log("Cầu thủ cuối cùng của đội 1:", players1Final);

// 5. Tạo biến cho từng tỉ lệ cược
const { team1, x: draw, team2 } = game.odds;
console.log("Tỉ lệ cược đội 1:", team1);
console.log("Tỉ lệ cược hòa:", draw);
console.log("Tỉ lệ cược đội 2:", team2);

// 6. Viết hàm 'printGoals' để in tên cầu thủ và tổng số bàn thắng
function printGoals(...players) {
    console.log("Cầu thủ ghi bàn:", players);
    console.log("Tổng số bàn thắng:", players.length);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log("Đội có khả năng thắng cao hơn: Bayern Munich");
team1 > team2 && console.log("Đội có khả năng thắng cao hơn: Borrussia Dortmund");
