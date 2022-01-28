import React from 'react'
import { useSotaWeb3React } from 'sota-web3-react-test-1'

const CardConnect = ({connectOption}) => {
    const  {tryActivate} = useSotaWeb3React()

    const handleConnectWallet = () => {
        tryActivate(connectOption.connector)
    }

    return <React.Fragment>
        <h1>{connectOption.title}</h1>
        <img style={{width: "30px"}} src={connectOption.icon} alt="connect-alt"/>
        <p>{connectOption.description}</p>
        <button onClick={handleConnectWallet}>Connect to Wallet</button>
    </React.Fragment>
}

export default CardConnect