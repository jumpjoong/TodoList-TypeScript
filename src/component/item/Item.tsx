import { Input } from "../../type/typeContext"

function Item({idx, detail, completed}: Input) {
  return (
    <li>
      <p>{detail}</p>
    </li>
  )
}

export default Item