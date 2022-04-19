import dynamic from "next/dynamic";
import React from "react";
import { isMobile } from "react-device-detect";
import OrderStatus from "../src/components/templates/order-status";

function goBack() {
  window.location.pathname = "/";
}

function Processing() {
  return (
    <>
      <OrderStatus
        title="Agradecemos pelo Presente"
        buttonAction={goBack}
        buttonText="Voltar para o Início"
        isMobile={isMobile}
      >
        {[
          "Muito obrigado por nos agraciar com este presente.",
          "O pagamento está sendo processado.",
          "Em breve você receberá um aviso em caso de sucesso.",
        ]}
      </OrderStatus>
    </>
  );
}

export default dynamic(() => Promise.resolve(Processing), {
  ssr: false,
});

// export default Processing;
