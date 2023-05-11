import { FormEvent, useContext } from "react"
import { Input } from "../../type/typeContext"
import { AppC } from "../../context/Context"

function Item({detail, idx, completed}: Input) {
  const data = {detail, idx, completed}
  const {item, setItem} = useContext(AppC)
  const deleteItem = (idx: number) => {
    setItem(item.filter((obj) => obj.idx !== idx))
  }
  //수정창으로 변경
  const fixInput = (idx: number) => {
    setItem(prevItem => prevItem.map(item => 
      item.idx == idx ? {...item, completed: !item.completed} : item
    ));
  }
  const fixChange = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(idx, e.target.value)
    setItem(prevItem => prevItem.map(item => 
        item.idx === idx ? {...item, detail: e.target.value} : item
    ))
  }
  return (
    <li >
      {
        completed ? <input type="text" value={data.detail} onChange={(e)=>fixChange(data.idx, e)}/> : <p>{data.detail}</p>
      }
      <img src="./img/edit.svg" alt="수정" onClick={()=>fixInput(data.idx)}/>
      <img src="./img/delete.svg" alt="삭제" onClick={()=>deleteItem(data.idx)}/>
    </li>
  )
}

export default Item