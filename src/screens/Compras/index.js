import React from "react";
import { NoPurchasesMessage } from "./styles";
import { routes } from "@nabstore/utils";
import { Anchor, Typography, LoadingIcon } from "@nabstore/styleguide";
import useGetCompras from "../../hooks/useGetCompras";
import CompraItem from "../../components/CompraItem";

const Compras = () => {
  const { data: compras, isLoading, error } = useGetCompras();

  if (error) {
    return <></>;
  }

  return (
    <div className="container">
      <Anchor.GoBack path={routes.HOME} text="Voltar aos produtos" />

      <div className="d-flex justify-content-center">
        <Typography.Title>Minhas Compras</Typography.Title>
      </div>

      {isLoading ? (
        <div className="d-flex flex-column align-items-center">
          <LoadingIcon.Oval className="mt-5" stroke="#2f2f2f" />
        </div>
      ) : compras.length === 0 ? (
        <NoPurchasesMessage className="d-flex justify-content-center mt-5">
          Você ainda não fez compra alguma =(.
        </NoPurchasesMessage>
      ) : (
        <div className="d-flex flex-column align-items-center mb-5">
          {compras.map((compra) => (
            <CompraItem key={compra.id} compra={compra} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Compras;
