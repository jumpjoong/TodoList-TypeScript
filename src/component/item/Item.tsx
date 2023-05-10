import { useContext } from "react"
import { Input } from "../../type/typeContext"
import { AppC } from "../../context/Context"

function Item({detail, idx, completed}: Input) {
  const {item, setItem} = useContext(AppC)
  const fixInput = (idx: number) => {
    let same = item.filter((obj) => obj.idx !== idx)
    setItem(same)
  }
  return (
    <li >
      <p>{detail}</p>
      <img src="./img/delete.svg" alt="삭제" onClick={()=>fixInput(idx)}/>
    </li>
  )
}

export default Item