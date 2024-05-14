import './App.css'
import OrdersTable from './components/OrdersTable'
import SalesChart from './components/SalesChart'
import StatCards from './components/StatCards'
import Layout from './layout'

function App() {

  return (
    <>
      <Layout>
        <StatCards />
        <SalesChart />
        <OrdersTable />
      </Layout>
    </>
  )
}

export default App
