const Footer:React.FunctionComponent = () => {
  return (
    <div className="flex justify-between my-2">
        <div className="flex">
        <p className="text-gray-400 text-xxs sm:text-xs mr-14">showing 1 to 10 of 1000 results</p>
        <div className="flex ml-10">
        <p className="text-gray-400 text-xxs sm:text-xs">show</p>
        <select name="quantity" id="quantity_selection" className="text-xxs sm:text-xs mx-2 border border-gray-300 rounded">
            <option value="1">10</option>
            <option value="2">20</option>
            <option value="3">30</option>
            <option value="4">40</option>
        </select>
        <p className="text-gray-400 text-xxs sm:text-xs">per page</p>
        </div>
        </div>

        <div className="flex">
        <div className="flex ml-10">
        <p className="text-gray-400 text-xxs sm:text-xs">Go to page</p>
        <input id="pageInput" type="number" className="text-xxs outline-none  sm:text-xs mx-2 border border-gray-300 w-6 px-1 rounded" />
        <button className="text-xxs sm:text-xs text-blue-600 border border-blue-600 rounded-sm px-2">Go</button>     
        </div>
        <div className="numberBtn flex text-xxs sm:text-xs font-semibold">
        <span><p>{'<'}</p></span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>25</span>
        <span>26</span>
        <span>27</span>
        <span>...</span>
        <span>51</span>
        <span>52</span>
        <span>53</span>
        <span>{'>'}</span>
        </div>
        </div>
    </div>
  )
}

export default Footer