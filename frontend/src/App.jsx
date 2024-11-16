import CustomerApp from './customer/CustomerApp'
import AdminApp from './admin/AdminApp'

export default function App() {

  const role = 'admin'

  return (
    role === 'admin' ? <AdminApp /> : <CustomerApp />
  )
}
