/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import api from "./api";

interface IBook {
  abrev: string;
}

class BibleService {
  async getBooks() {
    try {
      const response = await api.get("books");
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const errorRes = error.response?.data.message;
        return errorRes as string;
      }
      return false;
    }
  }

  async getBook({ abrev }: IBook) {
    try {
      const response = await api.get(`books/${abrev}`);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const errorRes = error.response?.data.message;
        return errorRes as string;
      }
      return false;
    }
  }

  // async getChapter() {
  //   try {
  //     const response = await api.get("verses/:version/:abbrev/:chapter");
  //     return response.data;
  //   } catch (error: any) {
  //     if (axios.isAxiosError(error)) {
  //       const errorRes = error.response?.data.message;
  //       return errorRes as string;
  //     }
  //     return false;
  //   }
  // }
}
export default new BibleService();
