"use client";
import React from "react";
import { Drawer } from "antd";
import {
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import { useCartDrawer } from "@/context/CartDrawerContext";
import { useCart } from "@/context/CartContext";
import { OrderForm } from "@/components/OrderFrom";

export const CartDrawer = () => {
  const { isDrawerOpen, closeDrawer } = useCartDrawer();
  const [showOrderForm, setShowOrderForm] = React.useState(false);
  const { cartItems, updateQuantity, removeFromCart, totalAmount, clearCart } =
    useCart();

  const handleQuantityChange = (productId, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCartIconClick = () => {
    if (showOrderForm) {
      setShowOrderForm(false);
    }
  };

  return (
    <Drawer
      title={
        <div className="flex items-center justify-between bg-white px-1 py-2 rounded-t-xl border-b border-[#F5F5F5]">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleCartIconClick}
            title={showOrderForm ? "Сагс руу буцах" : undefined}
          >
            <ShoppingCart className="text-[#D4AF37] w-5 h-5" />
            <span className="text-lg font-bold text-[#1A1A1A] font-serif tracking-wide">Сагс</span>
            {cartItems.length > 0 && (
              <span className="bg-[#D4AF37] text-white text-xs px-2 py-1 rounded-full font-semibold">
                {cartItems.length}
              </span>
            )}
          </div>
          {cartItems.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="text-[#D4AF37] border border-[#D4AF37] bg-white hover:bg-[#F5F5F5] px-3 py-1 rounded transition text-xs font-semibold"
            >
              Цэвэрлэх
            </button>
          )}
        </div>
      }
      placement="right"
      closable
      onClose={closeDrawer}
      open={isDrawerOpen}
      width={400}
      className="cart-drawer"
      bodyStyle={{ background: "#FFFFFF", padding: 0 }}
    >
      {!showOrderForm ? (
        cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[400px]">
            {/* Premium Empty Cart */}
            <div className="flex flex-col items-center justify-center">
              <ShoppingCart className="w-14 h-14 text-[#D4AF37] mb-4" />
              <div className="text-[#1A1A1A] text-lg font-serif font-bold mb-2">Сагс хоосон байна</div>
              <div className="text-[#D4AF37] text-xs font-medium font-serif mb-1">
                Бүтээгдэхүүн нэмэхийн тулд дэлгэрэнгүй хуудас руу орно уу
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full bg-white">
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-4 pt-4">
              <ul className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <li key={item._id} className="bg-[#F5F5F5] rounded-xl shadow-sm flex px-4 py-3 gap-4 items-center">
                    {/* Product Image */}
                    <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white border border-[#F5F5F5]">
                      <img
                        src={`http://localhost:8888/uploads/${item.image}`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="font-serif text-base font-semibold text-[#1A1A1A] truncate">{item.name}</div>
                      <div className="text-[#8d8558] text-xs mt-1 line-clamp-2">
                        {item.description && item.description.length > 50
                          ? `${item.description.substring(0, 50)}...`
                          : item.description}
                      </div>
                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-[#D4AF37] text-base font-serif">
                          ₮{item.price?.toLocaleString()}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item._id, item.quantity, -1)}
                            className="w-7 h-7 flex items-center justify-center rounded bg-white border border-[#F5F5F5] hover:bg-[#FFF] transition"
                          >
                            <Minus className="w-4 h-4 text-[#D4AF37]" />
                          </button>
                          <span className="w-7 text-center font-semibold text-[#1A1A1A] text-base font-serif">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item._id, item.quantity, 1)}
                            className="w-7 h-7 flex items-center justify-center rounded bg-white border border-[#F5F5F5] hover:bg-[#FFF] transition"
                          >
                            <Plus className="w-4 h-4 text-[#D4AF37]" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item._id)}
                            className="w-7 h-7 flex items-center justify-center rounded ml-1 bg-white border border-[#F5F5F5] hover:bg-[#D4AF37] transition"
                            aria-label="Remove"
                          >
                            <Trash2 className="w-4 h-4 text-[#D4AF37] group-hover:text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Footer */}
            <div className="border-t border-[#F5F5F5] pt-4 mt-4 px-4 bg-white pb-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-[#1A1A1A] font-serif">Нийт дүн:</span>
                  <span className="text-2xl font-bold text-[#D4AF37] font-serif">
                    ₮{totalAmount?.toLocaleString()}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowOrderForm(true)}
                  className="w-full py-3 bg-[#D4AF37] text-white text-base font-serif font-semibold rounded-lg shadow hover:bg-[#c2a027] transition"
                >
                  Захиалга өгөх
                </button>
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="w-full py-3 border border-[#F5F5F5] text-[#1A1A1A] font-serif rounded-lg hover:bg-[#F5F5F5] transition"
                >
                  Үргэлжлүүлэх
                </button>
              </div>
            </div>
          </div>
        )
      ) : (
        <OrderForm cartItems={cartItems} closeDrawer={closeDrawer} />
      )}
    </Drawer>
  );
};
