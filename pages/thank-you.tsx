import React from "react";
import OrderStatus from "../src/components/templates/order-status";

function goBack() {
  window.location.pathname = "/";
}

function ThankYou() {
  return (
    <>
      <OrderStatus
        title="Agradecemos pelo Presente"
        buttonAction={goBack}
        buttonText="Voltar para o Início"
      >
        {[
          "Muito obrigado por nos agraciar com este presente.",
          "O pagamento foi feito com sucesso!",
        ]}
      </OrderStatus>
    </>
  );
}

export default ThankYou;
