export const calcularTotalCompra = (cart) => {
    return cart.reduce((total, item) => {
      return total + (item.price * item.cantidad);
    }, 0);
  };
  