import Web3 from 'web3'
import { encodeCallScript } from '@aragon/test-helpers/evmScript'
import {
  newDao,
  getApmRepo,
  getInstalledApps,
  encodeActCall,
  exec,
} from '@aragon/toolkit'


// Create a single vote with multiple votes encoded in an EVM script
const web3 = new Web3(
    new Web3.providers.WebsocketProvider(`ws://localhost:8545`)
)

// Retrieve web3 accounts.
const accounts = await web3.eth.getAccounts()
const acc0 = accounts[0]

const ensRegistryAddress = '<YOUR_ENS_REGISTRY_ADDR>'
const options = {
    provider: web3.eth.currentProvider,
    apm: {
    ipfs: {
        rpc: {
        protocol: 'http',
        host: 'localhost',
        port: 5001,
        default: true,
        },
        gateway: 'http://localhost:8080/ipfs',
    },
    ensRegistryAddress,
    },
    ensRegistryAddress,
}

// Retrieve DAO template from APM.
const repo = await getApmRepo(
    web3,
    'membership-template.aragonpm.eth',
    options.apm
)

// Create a membership DAO.
console.log(`Creating DAO...`)
const daoAddress = await newDao({
    repo,
    web3,
    newInstanceMethod: 'newTokenAndInstance',
    newInstanceArgs: [
    '<TOKEN_NAME>',
    '<TOKEN_SYMBOL>',
    'daoname' + Math.floor(Math.random() * 1000000),
    [acc0],
    ['500000000000000000', '50000000000000000', '604800'],
    '1296000',
    true,
    ],
    deployEvent: 'DeployDao',
})
console.log(`Created DAO: ${daoAddress}`)

// Retrieve Voting app.
console.log(`Retrieving apps...`)
const apps = await getInstalledApps(daoAddress, options)
const votingApp = apps.find(
    app =>
    app.appId ===
    '0x9fa3927f639745e587912d4b0fea7ef9013bf93fb907d29faeab57417ba6e1d4'
)
if (!votingApp)
    throw Error(
    `Voting app not found: ${apps.map(({ name }) => name).join(', ')}`
    )
const votingAddress = votingApp.proxyAddress
console.log(`Retrieved voting app: ${votingAddress}`)

// Encode a bunch of votes.
console.log(`Encoding multiple votes...`)
const actions = []
const emptyScript = '0x00'
const newVoteSignature = 'newVote(bytes,string)'
for (let i = 0; i < 10; i++) {
    actions.push({
    to: votingAddress,
    calldata: await encodeActCall(newVoteSignature, [
        emptyScript,
        `Vote metadata ${i}`,
    ]),
    })
}

// Encode all actions into a single EVM script.
console.log(`Encoding votes into an EVM script...`)
const script = encodeCallScript(actions)

// Create a single vote with all the other votes encoded in the script.
console.log(`Creating bundled vote with EVM script...`)
const tx = await exec({
    web3,
    dao: daoAddress,
    app: votingAddress,
    method: 'newVote',
    params: [script, 'Execute multiple votes'],
    apm: options.apm,
})

    console.log(`
Done! Transaction ${tx.receipt.transactionHash} executed
Run aragon start, and go to `)