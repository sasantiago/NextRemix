// import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

// import { cookieStorage, createStorage } from 'wagmi'
// import { mainnet, sepolia,avalancheFuji } from 'wagmi/chains'

// // Get projectId from https://cloud.walletconnect.com
// export const projectId = process.env.NODE_ENV

// if (!projectId) throw new Error('Project ID is not defined')

// export const metadata = {
//   name: 'AppKit',
//   description: 'AppKit Example',
//   url: 'https://web3modal.com', // origin must match your domain & subdomain
//   icons: ['https://avatars.githubusercontent.com/u/37784886']
// }

// // Create wagmiConfig
// const chains = [mainnet, sepolia,avalancheFuji] as const
// export const config = defaultWagmiConfig({
//   chains,
//   projectId,
//   metadata,
//   ssr: true,
//   storage: createStorage({
//     storage: cookieStorage
//   }),
// })