import { BellOutlined,MailOutlined,BranchesOutlined } from '@ant-design/icons'
const Workspacebar:React.FunctionComponent = () => {
    const btnStyle = "hover:bg-blue-700 hover:text-white hover:cursor-pointer rounded px-2 h-8";
  return (
    <div className='flex justify-between py-2 px-4 bg-gray-100'>
        <div className='text-lg sm:text-xl md:text-2xl'>Acksk</div>
        <div className='flex gap-2 sm:gap-3 md:gap-5'>
        <div className='relative'>
        <BellOutlined className={btnStyle} />
        <span className='absolute right-2 top-2 bg-red-400 w-2 h-2 rounded-full'></span>
        </div>
        <div className='relative'>
        <MailOutlined className={btnStyle} />
        <span className='absolute right-1 top-2 bg-red-400 w-2 h-2 rounded-full'></span>
        </div>
        <BranchesOutlined className={btnStyle} />
        <div className='flex gap-1 items-center text-xs sm:text-sm font-semibold'>Workspace name <img src='./img/down-arrow.png' className='h-[1em] hover:cursor-pointer' /></div>
        </div>
    </div>
  )
}

export default Workspacebar