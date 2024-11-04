import CustomerApp from './customer/CustomerApp'

export default function App() {

  const role = 'customer'

  return (
    role === 'admin' ? <AdminApp /> : <CustomerApp />
  )
}
