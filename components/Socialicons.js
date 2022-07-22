import { Icons } from "./Menu"

const Socialicons = ({Icons}) => {
  return (
    <div className="text-teal-500">
      {Icons.map(icon=>(
        <span key={icon.name} className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
         <bootstrap-icon name={icon.name}></bootstrap-icon>
        </span>
      ))}
    </div>
  )
}

export default Socialicons