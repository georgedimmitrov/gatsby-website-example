import React, { useState } from 'react';

// define Order context
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // place state in here
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
