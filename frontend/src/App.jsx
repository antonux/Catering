import CustomerApp from './customer/CustomerApp'
import AdminApp from './admin/AdminApp'

export default function App() {

  const role = 'customer'

  return (
    role === 'admin' ? <AdminApp /> : <CustomerApp />
  )
}
