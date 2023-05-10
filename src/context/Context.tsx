import { FormEvent, SetStateAction, createContext, useRef, useState } from "react"
import { Input } from "../type/typeContext";
interface PageProps {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendInput: (e: FormEvent) => void;
  input:string;
  setItem: React.Dispatch<SetStateAction<Input[]>>
  item: Input[];
  
}
export const AppC = createContext<PageProps>({} as PageProps);

export const Context = ({children}: {children: JSX.Element}) => {
  const [input, setInput] = useState('');
  const [item, setItem] = useState<Input[]>([]);
  const nextId = useRef(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const sendInput = (e: FormEvent) => {
    e.preventDefault();
    setItem([
      ...item,
      {
        idx: nextId.current,
        detail: input,
        completed: false
      }
    ]);
    nextId.current++;
    setInput("");
  }
  const value = {handleInput, sendInput, input, item, setItem};
  return (
    <AppC.Provider value={value}>
      {children}
    </AppC.Provider>
  )
}
