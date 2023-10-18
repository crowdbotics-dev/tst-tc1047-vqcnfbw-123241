import axios from "axios"
import {
  TST_TC1047OPLFIFKZIJ_PASSWORD,
  TST_TC1047OPLFIFKZIJ_USERNAME
} from "react-native-dotenv"
const tSTTCoplfifkzij = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047OPLFIFKZIJ_PASSWORD,
    password: TST_TC1047OPLFIFKZIJ_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
