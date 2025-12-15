"use client";
import React from "react";
import { FaFacebook, FaPhoneAlt, FaMapMarkerAlt, FaRegCommentDots } from "react-icons/fa";
import api from "../utils/axios";

export const OrderForm = ({ cartItems, closeDrawer }) => {
  const [formData, setFormData] = React.useState({
    quantity: "",
    phone: "",
    description: "",
    address: "",
    aimag: "",
    sum: "",
  });
  const [isLocalOrder, setIsLocalOrder] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone) {
      alert("Утасны дугаараа оруулна уу!");
      return;
    }

    try {
      setIsSubmitting(true);

      const orderData = {
        customer: formData,
        items: cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        total: cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };

      const res = await api.post("/submit", orderData);

      setIsSubmitting(false);
      closeDrawer();
      alert("Захиалга амжилттай илгээгдлээ!");
      setFormData({
        quantity: "",
        phone: "",
        description: "",
        address: "",
        aimag: "",
        sum: "",
      });
    } catch (err) {
      setIsSubmitting(false);
      alert("Захиалга илгээхэд алдаа гарлаа!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white rounded-2xl shadow-2xl px-8 py-10 border border-[#F5F5F5] max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-[#D4AF37] mb-4 text-center font-serif tracking-wide">
        Захиалгын мэдээлэл
      </h2>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="number"
            placeholder="Утасны дугаар"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full bg-[#F5F5F5] border border-[#E5E5E5] rounded-md px-4 py-3 pl-11 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:bg-white font-serif"
            required
          />
          <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Нэмэлт мэдээлэл"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full bg-[#F5F5F5] border border-[#E5E5E5] rounded-md px-4 py-3 pl-11 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:bg-white font-serif"
          />
          <FaRegCommentDots className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Хаяг"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="w-full bg-[#F5F5F5] border border-[#E5E5E5] rounded-md px-4 py-3 pl-11 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:bg-white font-serif"
          />
          <FaFacebook className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <input
          id="local-order"
          type="checkbox"
          checked={isLocalOrder}
          onChange={(e) => setIsLocalOrder(e.target.checked)}
          className="accent-[#D4AF37] w-4 h-4"
        />
        <label htmlFor="local-order" className="text-[#1A1A1A] text-sm font-serif select-none">
          Орон нутгаас захиалж байна уу?
        </label>
      </div>

      {isLocalOrder && (
        <div className="flex flex-col gap-4 mt-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Аймаг"
              value={formData.aimag}
              onChange={(e) =>
                setFormData({ ...formData, aimag: e.target.value })
              }
              className="w-full bg-[#F5F5F5] border border-[#E5E5E5] rounded-md px-4 py-3 pl-11 text-[#1A1A1A] outline-none focus:border-[#D4AF37] focus:bg-white font-serif transition"
            />
            <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Сум"
              value={formData.sum}
              onChange={(e) =>
                setFormData({ ...formData, sum: e.target.value })
              }
              className="w-full bg-[#F5F5F5] border border-[#E5E5E5] rounded-md px-4 py-3 pl-11 text-[#1A1A1A] outline-none focus:border-[#D4AF37] focus:bg-white font-serif transition"
            />
            <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 rounded-lg font-bold text-lg font-serif mt-2 transition
          ${
            isSubmitting
              ? "bg-[#E5E5E5] text-[#1A1A1A] opacity-70 cursor-not-allowed"
              : "bg-gradient-to-r from-[#D4AF37] to-[#b79a2b] text-white hover:from-[#b79a2b] hover:to-[#D4AF37] shadow"
          }
        `}
      >
        {isSubmitting ? "Илгээж байна..." : "Захиалах"}
      </button>
    </form>
  );
};
