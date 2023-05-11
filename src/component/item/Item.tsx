import { useContext, useRef } from "react"
import { Input } from "../../type/typeContext"
import { AppC } from "../../context/Context"

function Item({detail, idx, completed}: Input) {
  const data = {detail, idx, completed};
  const {item, setItem} = useContext(AppC);
  const fixRef = useRef<HTMLInputElement>(null);
  ///컨텐츠 삭제
  const deleteItem = (idx: number) => {
    setItem(item.filter((obj) => obj.idx !== idx));
  }
  //수정창으로 변경
  const fixInput = (idx: number) => {
    setItem(prevItem => prevItem.map(item => 
      item.idx === idx ? {...item, completed: !item.completed} : item
    ));
  }
  //수정창 텍스트 변경
  const fixChange = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(prevItem => prevItem.map(item => 
        item.idx === idx ? {...item, detail: e.target.value} : item
    ));
  }
  
  return (
    <tr>
      {
        completed ? 
        <>
          <td>
            <p>{data.idx}</p>
          </td>
          <td>
            <input ref={fixRef} type="text" value={data.detail} onChange={(e)=>fixChange(data.idx, e)}/> 
          </td>
        </>
        :<>
        <td>
          <p>{data.idx}</p>
        </td>
        <td>
          <p>{data.detail}</p>
        </td>
        </> 
      }
      <td>
      <img src="./img/edit.svg" alt="수정" onClick={()=>fixInput(data.idx)}/>
      <img src="./img/delete.svg" alt="삭제" onClick={()=>deleteItem(data.idx)}/>
      </td>
    </tr>
  )
}

export default Item