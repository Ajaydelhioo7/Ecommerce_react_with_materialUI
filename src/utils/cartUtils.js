export const addToCart = (cartItems, product, quantity = 1) => {
  const updatedCart = [...cartItems];
  const existingProductIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  if (existingProductIndex !== -1) {
    updatedCart[existingProductIndex].quantity += quantity;
  } else {
    updatedCart.push({ ...product, quantity });
  }

  return updatedCart;
};

export const updateCartQuantity = (cartItems, productId, newQuantity) => {
  return cartItems.map((item) =>
    item.id === productId ? { ...item, quantity: newQuantity } : item
  );
};

export const removeCartItem = (cartItems, productId) => {
  return cartItems.filter((item) => item.id !== productId);
};
// Utility function to calculate the total number of items in the cart
export const calculateCartTotalItems = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};
