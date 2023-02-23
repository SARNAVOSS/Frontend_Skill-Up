import React, {useContext} from 'react'
import ConnetWallet from '../components/ConnetWallet';
import { Basecontext } from '../Context/Basecontext'

const Home = () => {

  const {state, dispatch} = useContext(Basecontext);

  // console.log(state.user)

  return (
    // <div>{state.user}</div>
    <ConnetWallet />
  )
}

export default Home