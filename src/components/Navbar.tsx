
import { Link } from "react-router-dom";


export default function Navbar(){
  return(
    <header className="p-4 absolute w-full z-[900]">
      <div className=" max-w-3xs p-1 px-7 glass-bg mx-auto gap-14 flex justify-center items-center rounded-3xl">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
      </div>
    </header>
  )
}