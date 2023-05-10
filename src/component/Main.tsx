import { useContext } from "react"
import { AppC } from "../context/Context"
import Item from "./item/Item";
import '../style/main.scss'

function Main() {
  const {handleInput, sendInput, input, item} = useContext(AppC);

  return (
    <div>
      <form onSubmit={e => sendInput(e)}>
        <input placeholder='오늘의 할 일' type="text"onChange={handleInput} value={input}/>
      </form>
      <div>
        <ul>
        {
          item && item.slice(0).reverse().map(obj => 
            <Item 
            key={obj.idx}
            idx = {obj.idx}
            detail = {obj.detail}
            completed = {obj.completed}
            />
          )
        }
        </ul>
      </div>
    </div>
  )
}

export default Main