import axios from "axios";
import api from "./api";

class BibleService {
  async getBooks() {
    try {
      const response = await api.get(`books`);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const errorRes = error.response?.data.message;
        return errorRes as string;
      }
      return false;
    }
  }
}
export default new BibleService();
