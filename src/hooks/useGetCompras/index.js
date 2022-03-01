import { useEffect, useState } from "react";
import apiMethods from "../../services/api";

const useGetCompras = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    apiMethods
      .fetchCompras()
      .then((resp) => {
        setError(undefined);
        setData(resp);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setData(undefined);
        setIsLoading(false);
        console.error("Erro ao carregar compras");
      });
  }, []);

  return { data, isLoading, error };
};

export default useGetCompras;
