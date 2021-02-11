import Layout from '../components/layout'
import '../styles/globals.css'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 1500,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

function MyApp({ Component, pageProps }) {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Layout>
        
      <Component {...pageProps} />
      </Layout>
    </AlertProvider>
    
  )
}

export default MyApp
