import { BsFacebook,BsTwitter,BsInstagram,BsApple,BsBank } from "react-icons/bs";

const Socialicons = () => {
  return (
    <div className="text-teal-500">
        <span className="p-2 cursor-pointer inline-flex items-center gap-4 rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
         <BsFacebook />
         <BsTwitter />
         <BsInstagram />
         <BsApple />
         <BsBank />

        </span>
    </div>
  )
}

export default Socialicons