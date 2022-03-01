import React from "react";
import apiMethods from "../../services/api";
import { Button, Typography } from "@nabstore/styleguide";
import Card from "../Card";
import useGetOffers from "../../hooks/useGetOffers";
import { currencyFormatter, defaultImages } from "@nabstore/utils";
import "antd/dist/antd.css";
import { notification } from "antd";
import { useDispatch, useSelector } from "react-redux";

const BestOffers = ({ addProductToCartAction }) => {
  const dispatch = useDispatch();
  const { data: ofertas, isLoading, error } = useGetOffers();
  const { cart } = useSelector((state) => ({
    cart: state.cart,
  }));

  const handleAddAoCarrinho = (produto) => {
    if (cart.produtos.find((prod) => prod.id === produto.id)) {
      const args = {
        message: "Ei, se liga!",
        description: "Este produto já foi adicionado ao carrinho.",
        duration: 2,
      };
      notification.info(args);
      return;
    }

    dispatch(
      addProductToCartAction({
        id: produto.id,
        precoUnit: produto.preco,
        qtd: 1,
        nome: produto.nome,
      })
    );
    const args = {
      message: "Prontinho =)",
      description: "Produto adicionado ao carrinho.",
      duration: 2,
    };
    notification.success(args);
  };

  if (isLoading || error || ofertas.length === 0) {
    return <></>;
  }

  return (
    <div className="mt-5">
      <hr className="mb-5" />
      <Typography.Title>Melhores Ofertas</Typography.Title>
      <div className="d-flex flex-row justify-content-center mb-5">
        {ofertas.map((produto) => (
          <Card style={{ width: "16rem" }} className="card" key={produto.id}>
            <img
              src={apiMethods.getImageUrl(produto.id)}
              className="card-img-top"
              onError={(e) => (e.target.src = defaultImages.NO_IMAGE_URL)}
              alt={produto.nome}
            />
            <div className="card-body">
              <h5 className="card-title">{produto.nome}</h5>
              <h2 className="card-title">{currencyFormatter(produto.preco)}</h2>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-center">
                <Button.Secondary
                  margin="10px 0 0 0"
                  onClick={() => handleAddAoCarrinho(produto)}
                >
                  Add ao carrinho
                </Button.Secondary>
              </li>
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BestOffers;
