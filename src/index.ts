import * as express from 'express';
import { Request, Response } from 'express';


import * as bodyParser from 'body-parser';
import { Game, Player, Tablero } from './dani';

const app = express();
// const que = new queries();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
const {
  PORT = 3000,
} = process.env;

app.get('/', (req: Request, res: Response) => {
  res.send(`Welcome to my TicTacToe API,<br> 
  You can change the name and the nick name of the player 1 [daniel] [danicobe] are set by default, <br>
  http://localhost:3000/player/1/name/[Player1_Name]/nickname/[Player1_Nickname], <br>
  You can change the name and the nick name of the player 2 [Alejandro] [Alejo] are set by default <br> 
  http://localhost:3000/player/2/name/[Player2_name]/nickname/[Player2_Nickname] <br>
  If tou want some info about player 1 try this<br> 
  http://localhost:3000/player/1/info <br>
  If tou want some info about player 2 try this<br> 
  http://localhost:3000/player/2/info <br><br>
  Remember the first to play is player 1, to fill a cell in TicTacToe API  just use this<br>
  http://localhost:3000/player/[player_turn]/setX/[axis_x]/setY/[axis_y] <br>
  `);
});


let mygame = new Game(new Tablero, new Player('Daniel', 'Danicobe', 1), new Player('Alejandro', 'Alejo', 2));

app.get('/player/1/info', (req: Request, res: Response) => {
  res.send({ info: mygame.player1.presentation() });
});

app.get('/player/1/name/:name/nickname/:nickName', (req: Request, res: Response) => {
  mygame.player1.setNames(req.params.name, req.params.nickName);
  res.send({ status: 'changed', info: mygame.player1.presentation() });
});

app.get('/player/2/info', (req: Request, res: Response) => {
  res.send({ info: mygame.player2.presentation() });
});

app.get('/player/2/name/:name/nickname/:nickName', (req: Request, res: Response) => {
  mygame.player2.setNames(req.params.name, req.params.nickName);
  res.send({ status: 'changed', info: mygame.player1.presentation() });
});

app.get('/player/:id/setX/:x/setY/:y', (req: Request, res: Response) => {

  if (mygame.isTurnOfPlayer(parseInt(req.params.id))) {
    if (mygame.table.canPlay(parseInt(req.params.x), parseInt(req.params.y))) {
      mygame.table.play(parseInt(req.params.x), parseInt(req.params.y), parseInt(req.params.id));
      if (mygame.table.checkVictory()) {
        res.send(`The player number ${mygame.table.checkVictory()} has won tic tac toe <br> ${mygame.table.view()}`);
      } else {

        mygame.setTurn(parseInt(req.params.id) == 1 ? 2 : 1);
        res.send(`${mygame.table.view()}   <br> It is turn of player   ${mygame.getTurn()} <br> http://localhost:3000/player/${mygame.getTurn()}/setX/[axis_x]/setY/[axis_y]`);
      }
    } else {

      res.send(`${mygame.table.view()}  <br> The cell [${req.params.x}] [${req.params.y}] is filled, choose other cell <br> http://localhost:3000/player/${mygame.getTurn()}/setX/[axis_x]/setY/[axis_y]`);
    }

  } else {
    res.send(`${mygame.table.view()}   <br> It is turn of player   ${mygame.getTurn()}   !!!!!!!!!!!!!!!!!! <br> http://localhost:3000/player/${mygame.getTurn()}/setX/[axis_x]/setY/[axis_y]`);
  }

});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('Your table is ready http://localhost:' + PORT);
  });
}

export default app;