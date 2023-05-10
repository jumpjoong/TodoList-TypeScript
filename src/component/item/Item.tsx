import { useContext } from "react"
import { Input } from "../../type/typeContext"
import { AppC } from "../../context/Context"

function Item({detail, idx, completed}: Input) {
  const data = {detail, idx, completed}
  const {item, setItem} = useContext(AppC)
  const deleteItem = (idx: number) => {
    setItem(item.filter((obj) => obj.idx !== idx))
  }
  const fixInput = (idx: number) => {
    // setItem(item.filter((obj) => {
    //   console.log("같나?")
    //   return obj.idx === idx 
    //   ?{...item, completed: true} : item
    // }))
    // let bbb = item.filter(obj => obj.idx == idx)
    setItem(item.filter(obj => obj.idx == idx ? item[idx].completed = true : item))
  }
  return (
    <li >
      {
        completed ? <div>true</div> : <p>{data.detail}</p>
      }
      {/* <p onClick={()=>booleanCtrl()}>{detail}</p> */}
      <img src="./img/edit.svg" alt="수정" onClick={()=>fixInput(data.idx)}/>
      <img src="./img/delete.svg" alt="삭제" onClick={()=>deleteItem(data.idx)}/>
    </li>
  )
}

export default Item