/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import api from "./api";

interface IBook {
  abrev: string;
}
interface IChapter {
  abrev: string;
  chapter: string;
}

class BibleService {
  async getBooks() {
    try {
      const response = await api.get("books", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkZyaSBNYXIgMDMgMjAyMyAxMjo1NToxNCBHTVQrMDAwMC5ndWlsaGVybWVyZWlzY2FtcG9zMjNAZ21haWwuY29tIiwiaWF0IjoxNjc3ODQ4MTE0fQ.i_nPbxixKR22A7XgvGHrpenB34xOkXvzhcBpPVrTTTc ",
        },
      });
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
      const response = await api.get(`books/${abrev}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkZyaSBNYXIgMDMgMjAyMyAxMjo1NToxNCBHTVQrMDAwMC5ndWlsaGVybWVyZWlzY2FtcG9zMjNAZ21haWwuY29tIiwiaWF0IjoxNjc3ODQ4MTE0fQ.i_nPbxixKR22A7XgvGHrpenB34xOkXvzhcBpPVrTTTc ",
        },
      });
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const errorRes = error.response?.data.message;
        return errorRes as string;
      }
      return false;
    }
  }

  async getChapter({ abrev, chapter }: IChapter) {
    try {
      const response = await api.get(`verses/nvi/${abrev}/${chapter}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkZyaSBNYXIgMDMgMjAyMyAxMjo1NToxNCBHTVQrMDAwMC5ndWlsaGVybWVyZWlzY2FtcG9zMjNAZ21haWwuY29tIiwiaWF0IjoxNjc3ODQ4MTE0fQ.i_nPbxixKR22A7XgvGHrpenB34xOkXvzhcBpPVrTTTc ",
        },
      });
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
