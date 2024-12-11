import { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { format, startOfToday, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameMonth, isToday, isEqual, add, sub } from "date-fns";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";

const Dashboard = () => {
  const [salesData] = useState([
    { month: 'Jan', sales: 4000, expenses: 2400 },
    { month: 'Feb', sales: 3000, expenses: 1398 },
    { month: 'Mar', sales: 2000, expenses: 9800 },
    { month: 'Apr', sales: 2780, expenses: 3908 },
    { month: 'May', sales: 1890, expenses: 4800 },
    { month: 'Jun', sales: 2390, expenses: 3800 },
  ]);

  const [recentOrders] = useState([
    { id: 1, customer: 'John Doe', product: 'Laptop', amount: '$1200', status: 'Completed' },
    { id: 2, customer: 'Jane Smith', product: 'Smartphone', amount: '$800', status: 'Processing' },
    { id: 3, customer: 'Mike Johnson', product: 'Headphones', amount: '$250', status: 'Shipped' },
  ]);

  return (
    <></>
    // <div className="flex flex-1 h-screen bg-gray-100">
    //   <div className="w-full p-6 h-full overflow-y-auto">
    //     <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
    //       {/* Key Metrics Cards */}
    //       <div className="bg-white p-5 rounded-lg shadow">
    //         <h2 className="text-xl font-semibold mb-4">Total Sales</h2>
    //         <p className="text-3xl font-bold text-blue-600">$45,231</p>
    //         <p className="text-green-500">+12.3% from last month</p>
    //       </div>
    //       <div className="bg-white p-5 rounded-lg shadow">
    //         <h2 className="text-xl font-semibold mb-4">New Customers</h2>
    //         <p className="text-3xl font-bold text-purple-600">256</p>
    //         <p className="text-green-500">+8.7% increase</p>
    //       </div>
    //       <div className="bg-white p-5 rounded-lg shadow">
    //         <h2 className="text-xl font-semibold mb-4">Pending Orders</h2>
    //         <p className="text-3xl font-bold text-red-600">34</p>
    //         <p className="text-red-500">-2.5% decrease</p>
    //       </div>
    //     </div>

    //     {/* Sales Chart */}
    //     <div className="bg-white p-6 rounded-lg shadow mb-6">
    //       <h2 className="text-xl font-semibold mb-4">Monthly Sales Overview</h2>
    //       <div className="h-72">
    //         <ResponsiveContainer width="100%" height="100%">
    //           <BarChart data={salesData}>
    //             <XAxis dataKey="month" />
    //             <YAxis />
    //             <Tooltip />
    //             <Legend />
    //             <Bar dataKey="sales" fill="#3182ce" />
    //             <Bar dataKey="expenses" fill="#e53e3e" />
    //           </BarChart>
    //         </ResponsiveContainer>
    //       </div>
    //     </div>

    //     {/* Recent Orders Table */}
    //     <div className="bg-white p-6 rounded-lg shadow">
    //       <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
    //       <div className="overflow-x-auto">
    //         <table className="w-full">
    //           <thead>
    //             <tr className="bg-gray-100 text-left">
    //               <th className="p-3">Order ID</th>
    //               <th className="p-3">Customer</th>
    //               <th className="p-3">Product</th>
    //               <th className="p-3">Amount</th>
    //               <th className="p-3">Status</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {recentOrders.map((order) => (
    //               <tr key={order.id} className="border-b">
    //                 <td className="p-3">{order.id}</td>
    //                 <td className="p-3">{order.customer}</td>
    //                 <td className="p-3">{order.product}</td>
    //                 <td className="p-3">{order.amount}</td>
    //                 <td className="p-3">
    //                   <span className={`
    //                     px-3 py-1 rounded-full text-xs 
    //                     ${order.status === 'Completed' ? 'bg-green-200 text-green-800' : 
    //                       order.status === 'Processing' ? 'bg-yellow-200 text-yellow-800' : 
    //                       'bg-blue-200 text-blue-800'}
    //                   `}>
    //                     {order.status}
    //                   </span>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Dashboard;