import axios from "axios"
import {
  TST_TC1047RZHJHXZRPH_USERNAME,
  TST_TC1047RZHJHXZRPH_PASSWORD
} from "react-native-dotenv"
const tSTTCrzhjhxzrph = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047RZHJHXZRPH_USERNAME,
    password: TST_TC1047RZHJHXZRPH_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
