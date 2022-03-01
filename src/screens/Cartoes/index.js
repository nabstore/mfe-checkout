import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { routes } from "@nabstore/utils";
import { Anchor, Button, LoadingIcon, Typography } from "@nabstore/styleguide";
import useGetCartoes from "../../hooks/useGetCartoes";
import CartaoItem from "../../components/CartaoItem";

const Cartoes = ({ selectCartAction }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: cartoes, isLoading, error } = useGetCartoes();
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (cartao) => {
    dispatch(selectCartAction(cartao));
    navigate(routes.ENDERECOS);
  };

  if (error) {
    return <></>;
  }

  return (
    <div className="container">
      {/* <AddCartao 
        handleClose={() => setShowModal(false)} 
        showModal={showModal} 
      /> */}

      <Anchor.GoBack path={routes.CART} text="Voltar ao carrinho" />

      <div className="float-end">
        <Button.Primary onClick={() => setShowModal(true)}>
          <FontAwesomeIcon className="me-2" icon={faPlusCircle} /> Novo Cartão
        </Button.Primary>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Typography.Title>Cartões</Typography.Title>
      </div>

      {isLoading ? (
        <div className="d-flex flex-column align-items-center">
          <LoadingIcon.Oval className="mt-5" stroke="#2f2f2f" />
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center mb-5">
          {cartoes.map((cartao) => (
            <CartaoItem
              key={cartao.id}
              cartao={cartao}
              handleSelect={handleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cartoes;
