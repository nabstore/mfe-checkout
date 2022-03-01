import axios from "axios";
import { getToken } from "@nabstore/utils";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

const fetchCompras = async () => {
  const res = await api.get(`/compras`);
  return res.data;
};

const fetchOfertas = async () => {
  const res = await api.get(`produtos/ofertas`);
  return res.data;
};

const getEstimativaEntrega = async (cep) => {
  const res = await api.get(`/entregas?cep=${cep}`);
  return res.data;
};

const getImageUrl = (produtoId) => {
  return `${process.env.API_BASE_URL}/produtos/${produtoId}/image`;
};

const apiMethods = {
  fetchCompras,
  fetchOfertas,
  getEstimativaEntrega,
  getImageUrl,
};

export default apiMethods;
