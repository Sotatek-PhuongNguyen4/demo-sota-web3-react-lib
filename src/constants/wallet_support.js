import { metamaskconnect, walletconnect } from "../connectors"
import { imageUrl } from "../constants/url"

export const WALLET_SUPPORT = [{
    title: "MetaMask",
    icon: imageUrl + "metamask.png",
    connector: metamaskconnect,
    description: "Easy-to-use browser extension",
},  
{
    title: "WalletConnect",
    icon: imageUrl + "wallet-connect.png",
    connector: walletconnect,
    description: "Connect to Trust Wallet, Rainbow Wallet and more...",
    isMobile: true
}]