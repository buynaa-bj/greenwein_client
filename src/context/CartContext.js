"use client";
import { showToast } from "@/utils/ShowToast";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Эхний ачаалал дээр localStorage-с сагсны мэдээлэл авах
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Сагсны мэдээлэл өөрчлөгдөх бүрт localStorage-д хадгалах, нийт дүнг тооцоолох
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  }, [cartItems]);

  // Сагсанд нэмэх функц
  const addToCart = (product) => {
    if (!product) return; // хамгаалалт
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      // images байхгүй үед image (string)-ээс массив болгох
      const normalizedImages = Array.isArray(product.images)
        ? product.images
        : product.image
        ? [
            // API static upload base-тай нийцүүлэх
            `https://localhost:8888/uploads/${product.image}`,
          ]
        : [];

      return [
        ...prevItems,
        {
          ...product,
          quantity: 1,
          images: normalizedImages,
        },
      ];
    });
  };

  // Сагснаас устгах функц
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
  };

  // Тоо ширхэг шинэчлэх функц
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      )
    );
  };

  // Сагсыг цэвэрлэх функц
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  // Сагсны цонхыг нээх/хаах
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalAmount,
        isCartOpen,
        toggleCart,
      }}
    >
      {children}{" "}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart нь CartProvider-ийн дотор ашиглагдах ёстой!");
  }
  return context;
}
