export abstract class Person {

    abstract name: string;

    goodMorning() {
        console.log('Buenos dias')
    }
}

export interface Iplayer extends Person {
    nickname: string;
    player: number;
    presentation(): string;
    setNames(name: string, nickname: string): void;
}

export class Player extends Person implements Iplayer {
    name: string;
    player: number;
    nickname: string;

    constructor(name: string, nickname: string, player: number) {
        super();
        this.name = name;
        this.nickname = nickname;
        this.player = player;
    }
    setNames(name: string, nickname: string): void {
        this.name = name;
        this.nickname = nickname;
    }
    presentation(): string {
        return (`I'm ${this.nickname}(${this.name}) I'm the player number ${this.player}`);
    }
}

export interface ITable {
    table: number[][];
    play(x: number, y: number, player: number): string;
    canPlay(x: number, y: number): boolean;
    checkVictory(): number;
    view(): string;
}

export class Tablero implements ITable {
    table: number[][];

    constructor() {
        this.table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    }

    canPlay(x: number, y: number) {
        return this.table[x][y] == 0;
    }

    play(x: number, y: number, player: number) {
        if (this.table[x][y] == 0) {
            this.table[x][y] = player;
            return this.view();
        }

        return this.view();
    }

    checkVictory() {
        //rows
        console.log("check!!!");


        if (this.table[0][0] != 0 && this.table[0][0] == this.table[0][1] && this.table[0][1] == this.table[0][2])
            return this.table[0][0];
        if (this.table[1][0] != 0 && this.table[1][0] == this.table[1][1] && this.table[1][1] == this.table[1][2])
            return this.table[1][0];
        if (this.table[2][0] != 0 && this.table[2][0] == this.table[2][1] && this.table[2][1] == this.table[2][2])
            return this.table[2][0];
        //colums
        if (this.table[0][0] != 0 && this.table[0][0] == this.table[1][0] && this.table[1][0] == this.table[2][0])
            return this.table[0][0];
        if (this.table[0][1] != 0 && this.table[0][1] == this.table[1][1] && this.table[1][1] == this.table[1][2])
            return this.table[1][0];
        if (this.table[0][2] != 0 && this.table[0][2] == this.table[1][2] && this.table[1][2] == this.table[2][2])
            return this.table[2][0];
        //diagonals
        if (this.table[0][0] != 0 && this.table[0][0] == this.table[1][1] && this.table[1][1] == this.table[2][2])
            return this.table[0][0];
        if (this.table[2][0] != 0 && this.table[2][0] == this.table[1][1] && this.table[1][1] == this.table[0][2])
            return this.table[0][2];
        return null;
    }

    view() {
        return `==========<br>
        = ${this.table[0][0]} = ${this.table[0][1]} = ${this.table[0][2]} =<br>
        ==========<br>
        = ${this.table[1][0]} = ${this.table[1][1]} = ${this.table[1][2]} =<br>
        ==========<br>
        = ${this.table[2][0]} = ${this.table[2][1]} = ${this.table[2][2]} =<br>
        ==========<br> `;
    }
}


export class Game {

    public table: Tablero;
    public player1: Player;
    public player2: Player;
    public turn: number;

    constructor(table: ITable, player1: Iplayer, player2: Iplayer) {
        this.table = table;
        this.player1 = player1;
        this.player2 = player2;
        this.turn = 1;
    }

    play(x: number, y: number, player: number) {
        this.player1.presentation();
        this.table.play(x, y, player);
    }

    isTurnOfPlayer(player: number) {
        return player == this.turn;
    }

    getTurn() {
        return this.turn;
    }

    setTurn(turn: number) {
        return this.turn = turn;
    }
}