import { MailOutlined, MoreOutlined } from "@ant-design/icons";

export const DatasheetHead: React.FunctionComponent = () => {
  const divStyle = "flex items-center gap-1 text-xs";
  
  return (
    <div className="head bg-gray-100 py-2 pl-4 rounded rounded-b-none border border-gray-300 pr-10 flex justify-between sm:text-sm text-gray-400">
      <div className={`w-[4%] ${divStyle}`}><input type="checkbox" className="custom-checkbox" /></div>
      <div className={`w-[8%] ${divStyle}`}>Client <img src='/img/sort.png' className='h-[1em] cursor-pointer' /> </div>
      <div className={`w-[12%] ${divStyle}`}>Email ID <img src='/img/sort.png' className='h-[1em] cursor-pointer' /> </div>
      <div className={`w-[12%] ${divStyle}`}>Website <img src='/img/sort.png' className='h-[1em] cursor-pointer' /> </div>
      <div className={`w-[12%] ${divStyle}`}>Location <img src='/img/sort.png' className='h-[1em] cursor-pointer' /> </div>
      <div className={`w-[8%] ${divStyle}`}>Industry <img src='/img/sort.png' className='h-[1em] cursor-pointer' /> </div>
      <div className={`w-[8%] ${divStyle}`}>Federal ID <img src='/img/sort.png' className='h-[1em] cursor-pointer' /> </div>
      <div className={`w-[4%] ${divStyle}`}>Action</div>
    </div>
  );
};

interface DatasheetRowProps {
  location: string;
}

export const DatasheetRow: React.FC<DatasheetRowProps> = ({ location }) => {
  return(
  <div className="bg-gray-50 py-2 pl-4 rounded rounded-t-none border border-gray-300 pr-10 flex justify-between sm:text-sm">
    <div className="w-[4%] flex items-center"><input type="checkbox" className="custom-checkbox" /></div>
    <div className="w-[8%] flex items-center gap-1 text-xxs sm:text-xs">clientname</div>
    <div className="w-[12%] flex items-center gap-1 text-xxs sm:text-xs">clientname@gmail.com</div>
    <div className="w-[12%] flex items-center gap-1 text-xxs sm:text-xs">clientwebsite.com</div>
    <div className="w-[12%] flex items-center gap-1 text-xxs sm:text-xs">{location}</div>
    <div className="w-[8%] flex items-center gap-1 text-xxs sm:text-xs">Software</div>
    <div className="w-[8%] flex items-center gap-1 text-xxs sm:text-xs">5463721</div>
    <div className="w-[4%] flex items-center gap-4 text-xxs sm:text-xs">
      <MailOutlined className="h-[1em] text-blue-600 cursor-pointer" />
      <MoreOutlined className="h-[1em] cursor-pointer" />
    </div>
  </div>
)};
