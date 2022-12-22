import {
  Program,
  AnchorProvider,
  Idl,
  setProvider,
} from "@project-serum/anchor"
import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js"
import { IDL, ScavengerHunt } from "../idl/scavenger_hunt"

const MockWallet = {
  signTransaction: () => Promise.reject(),
  signAllTransactions: () => Promise.reject(),
  publicKey: Keypair.generate().publicKey,
}

export const connection = new Connection(clusterApiUrl("devnet"))

const provider = new AnchorProvider(connection, MockWallet, {})
setProvider(provider)