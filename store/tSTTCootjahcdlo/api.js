import axios from "axios"
import {
  TST_TC1047OOTJAHCDLO_PASSWORD,
  TST_TC1047OOTJAHCDLO_USERNAME
} from "react-native-dotenv"
const tSTTCootjahcdlo = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047OOTJAHCDLO_PASSWORD,
    password: TST_TC1047OOTJAHCDLO_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
