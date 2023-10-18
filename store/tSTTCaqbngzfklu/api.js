import axios from "axios"
import {
  TST_TC1047AQBNGZFKLU_USERNAME,
  TST_TC1047AQBNGZFKLU_PASSWORD
} from "react-native-dotenv"
const tSTTCaqbngzfklu = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047AQBNGZFKLU_USERNAME,
    password: TST_TC1047AQBNGZFKLU_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
