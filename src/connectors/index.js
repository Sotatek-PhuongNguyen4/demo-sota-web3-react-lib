import { SotaMetamaskConnector, SotaWalletConnectConnector } from "sota-web3-react-test-1"
import { RPC_URLS } from "../constants/rpc_urls"


export const metamaskconnect = new SotaMetamaskConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 137, 80001]
})

export const walletconnect = new SotaWalletConnectConnector({
    supportedChainIds:  [1, 3, 4, 5, 42, 137, 80001],
    rpc: RPC_URLS,
    qrcode: true
})