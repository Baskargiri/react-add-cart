import { Gameout } from "./Gameout";

function TicTak() {
  const board =[null,null,null,null,null,null,null,null,null]

  return (
    <div className='body'>
      <h1>NAMED FUNCTION</h1>
   <div className="brd">   {board.map(()=>(
        <Gameout />
      ))}</div>
    </div>
  );
}

export {TicTak}