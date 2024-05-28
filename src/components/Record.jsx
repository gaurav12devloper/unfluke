import Tradeicon from './Tradeicon'
export default function Record({rank}) {
  return (
    <tr className="hover:bg-gray-100 border-b border-[#e27498] border-1 text-[17px]">
    <th scope="row" className="px-6 py-4">
        {rank}
    </th>
    <td className="px-6 py-4">
        Selling with re entr
    </td>
    <td className="px-6 py-4 flex">
    <Tradeicon />
        3.96
    </td>
    <td className="px-6 py-4">
        381845
    </td>
    <td className="px-6 py-4">
    319.54
    </td>
    <td className="px-6 py-4">
        0.65
    </td>
    <td className="px-6 py-4">
        500
    </td>
    <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
    </td>
</tr>
  )
}
