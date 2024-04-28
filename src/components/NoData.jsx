import { TbMoodSad } from "react-icons/tb";
import { Link } from "react-router-dom";

function NoData() {
  return (
    <div className="flex justify-center items-center flex-col h-[400px] py-20">
        <TbMoodSad className="w-72 h-72 text-stone-100"  />
        <h1 className="text-2xl font-semibold text-stone-100">You Haven't added any data!!</h1>
        <p className="font-semibold text-stone-200">Go here and add your destination <Link to="/add-tourist-spot" className="font-bold underline text-stone-200">Add</Link></p>

    </div>
  )
}

export default NoData