import axios from "axios"
import {
  TST_TC1047ISDBTOZIXR_PASSWORD,
  TST_TC1047ISDBTOZIXR_USERNAME
} from "react-native-dotenv"
const tSTTCisdbtozixr = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047ISDBTOZIXR_PASSWORD,
    password: TST_TC1047ISDBTOZIXR_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
