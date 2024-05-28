import Tradeicon from './Tradeicon'
/* eslint-disable */
export default function Card({rank}) {
  return (
   <>
        <div className="mt-2  px-0 border-[#e27498] border-1 col-4 mx-1 shadow-lg">
            <div className="flex pt-2 bg-light">
                <div className="ml-1 bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold">{rank}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 ml-auto mr-auto mt-5 pb-3">Selling with re entr</h3>
            </div>
            <div className="main">
                 <div className="flex">
                    <div className="flex m-4">
                        <div className="flex-col items-center mb-2">
                            <div className="flex">
                                <Tradeicon />
                                    <span className="ml-1">3.96</span>
                            </div>
                            <span className="font-bold">Calmar Ratio</span>
                        </div>
                    </div>
                    <div className="vr my-[29px]"></div>
                        <div className="flex m-4">
                            <div className="flex-col items-center mb-2">
                                <span className="ml-1">381845</span> <br />
                                <span className="font-bold">Overall Profit</span>
                            </div>
                        </div>
                        <div className="vr my-[29px]"></div>
                        <div className="flex m-4">
                            <div className="flex-col items-center mb-2">
                                <span className="ml-1">319.54</span> <br />
                                <span className="font-bold">Avg. Daily Profit:</span>
                            </div>
                        </div>
                    </div>
                        <hr />
                        <div className="flex m-4">
                                <div className="flex-col items-center mr-4 mb-2">
                                    <span className="ml-1">0.65</span> <br />
                                    <span className="font-bold">Win %(Day)</span>
                                </div>
                                <div className="vr mx-2"></div>

                                <div className="flex-col items-center mx-4 mb-2">
                                    <span className="ml-1">500</span> <br />
                                    <span className="font-bold">Price</span>
                                </div>
                                <div className="vr mx-2"></div>
                                <div>
                                <button type="button" className="text-[20px] dark:text-blue-500 border ml-5 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:hover:text-white dark:hover:bg-gray-600 ">Edit</button>
                                </div>
                        </div>
                    </div>
                   
                    </div>
   </>
  )
}
