import dynamic from "next/dynamic";
import React from "react";
import { isMobile } from "react-device-detect";
import OrderStatus from "../src/components/templates/order-status";

function goBack() {
  window.location.pathname = "/";
}

function ThankYou() {
  return (
    <div suppressHydrationWarning>
      <OrderStatus
        title="Agradecemos pelo Presente"
        buttonAction={goBack}
        buttonText="Voltar para o Início"
        isMobile={isMobile}
      >
        {[
          "Muito obrigado por nos agraciar com este presente.",
          "O pagamento foi feito com sucesso!",
        ]}
      </OrderStatus>
    </div>
  );
}

// export default ThankYou;

export default dynamic(() => Promise.resolve(ThankYou), {
  ssr: false,
});
