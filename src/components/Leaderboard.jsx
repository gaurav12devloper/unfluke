import Tradeicon from "./Tradeicon";
import Card from "./Card";
import Record from "./Record";
export default function Leaderboard() {
    return (
        <>      
            
             <div className="mx-40 mt-2">
             <h1 className="text-center text-[70px] my-10 leaderboard-title">Leaderboards</h1>
             <div className="flex mr-5">
                <Card rank="1" />
                <Card rank="2" /> 
                <Card rank="3" />   
             </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 mb-10">
                <h2 className="border-[#e27498] border-t border-x p-2 pb-4">
                <span className="text-[28px] mb-5 font-bold mx-3">Basic Backtest</span></h2>
                    <table className="w-full text-sm text-left text-[17px] border-[#e27498] border-1">
                        <thead className="uppercase bg-gray-50">
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-[#e27498]  hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="col" className="px-6 py-3">
                                    Rank
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Calmar Ratio
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Overall Profit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Avg. Daily Profit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Win %(Day)
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            <Record rank="1" />
                            <Record  rank="2"/>
                            <Record  rank="3"/>
                            <Record rank="4"/>
                            <Record rank="5" />
                            <Record rank="6" />
                            <Record rank="7" />
                        </tbody>
                    </table>
                </div>

             </div>
        </>
        
        
    );
}
