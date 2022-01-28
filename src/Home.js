import React from "react"
import { useSotaWeb3React } from "sota-web3-react-test-1"
import CardConnect from "./components/card-connect"
import { WALLET_SUPPORT } from "./constants/wallet_support"

const Home = () => {
    const { account, error, balance, formatToken } = useSotaWeb3React()

    const AccountStatus = () => {
        if(!account) {
            return <h1>Not connect wallet</h1>
        }
        return <h1>Your Account: {account}</h1>
    }

    return <React.Fragment>
        <AccountStatus />
        {
            error && <h1 style={{color: "red"}}>{error}</h1>
        }
        {
            balance && <h1>Amount: {formatToken(balance)}</h1>
        }
        {
            WALLET_SUPPORT.map(wallet => {
                return <CardConnect 
                    key={wallet.title}
                    connectOption={wallet}
                />
            })
        }
    </React.Fragment>
}

export default Home