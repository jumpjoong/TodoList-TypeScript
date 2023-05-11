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
        <table>
          <thead>
            <tr>
              <td>게시글 번호</td>
              <td>제목</td>
              <td>수정 및 삭제</td>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Main