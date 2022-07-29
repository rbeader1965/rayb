import { BsFacebook,BsTwitter,BsInstagram,BsApple,BsBank } from "react-icons/bs";
import Link from "next/link";
const Socialicons = () => {
  return (
    <div className="text-teal-500">
        <span className="p-2 cursor-pointer inline-flex items-center space-x-4 rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
          <Link href="https://www.facebook.com">
          <a><BsFacebook /></a>
          </Link>
         <Link href="https://twitter.com/?lang=en">
         <a><BsTwitter/></a>
         </Link>
         <Link href="https://www.instagram.com">
          <a><BsInstagram/> </a>
         </Link>
         <Link href="https://www.apple.com">
         <a><BsApple/></a>
         </Link>
         <Link href="https://www.chase.com">
         <a><BsBank/></a>
         </Link>

        </span>
    </div>
  )
}

export default Socialicons