import { MenuFoldOutlined,ShareAltOutlined,MoreOutlined,SearchOutlined } from "@ant-design/icons"
import Datasheet from "./Datasheet";
import Footer from "./Footer";
const Workspace:React.FunctionComponent = () => {
    const btnStyle = "hover:bg-blue-700 hover:text-white hover:cursor-pointer rounded px-2 h-8";
  return (
    <div className="mx-10 my-2">
    <div>
    <div className="firstBar flex justify-between items-center">
        <p className="text-sm text-gray-400 sm:text-lg font-semibold">Clients</p>
        <div className="icons flex gap-1 sm:gap-3">
        <MenuFoldOutlined className={btnStyle} />
        <MenuFoldOutlined className={btnStyle} />
        <MenuFoldOutlined className={btnStyle} />
        <ShareAltOutlined className={btnStyle} />
        <MoreOutlined className={btnStyle} />
        <button className="bg-blue-700 text-white rounded text-xs px-4">Add Client</button>
        </div>
    </div>
    <div className="my-2">
    <div className="secondBar flex space-x-0 items-center relative">
      <div className="relative w-[70%]">
        <input
          type="text"
          placeholder="React developer"
          className="pl-10 pr-4 py-1 border border-gray-300 outline-none rounded-md w-full"
        />
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-none">
          <SearchOutlined />
        </span>
      </div>

      <div className="relative w-[24%]">
        <input
          type="text"
          placeholder="Hyderabad, IN"
          className="pl-10 pr-4 py-1 border border-gray-300 outline-none rounded-md w-full"
        />
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-none">
          <img src="/img/location.png" className="h-[1em]" />
        </span>
        <button className="bg-blue-50 p-0 px-4 text-blue-600 text-sm  absolute right-0 h-full border border-blue-600 rounded-l-none rounded-r-md ">Search</button>
      </div>
      <span className="text-blue-500 underline text-sm sm:text-sm absolute right-0 cursor-pointer">Advanced</span>
    </div>
    </div>
    </div>
    <Datasheet />
    <Footer />  
    </div>
  )
}

export default Workspace