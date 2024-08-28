import { DatasheetHead, DatasheetRow } from "./DatasheetItems"
import { data } from "./data"
const Datasheet:React.FunctionComponent = () => {
  return (
    <div className=''>
    <DatasheetHead />
    <div className="max-h-[56.5vh]">
    {
      data.slice(0,10).map((location) => (
        <DatasheetRow location = {location} />
      ))
    }
    </div>
    </div>
  )
}

export default Datasheet