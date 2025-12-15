"use client";
import React, { useState } from "react";

// Премиум дарсны захиалгын form
function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    quantity: 1,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Mock submit
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form
      className="flex flex-col gap-8 mt-10 bg-white rounded-2xl shadow-2xl px-8 py-10 border border-[#F5F5F5] max-w-lg mx-auto"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl text-[#D4AF37] font-serif text-center font-bold tracking-wide mb-1">
        Дарсны Захиалга
      </h2>
      <div>
        <label
          htmlFor="name"
          className="text-[#1A1A1A] uppercase text-xs font-semibold tracking-wide"
        >
          Нэр
        </label>
        <input
          id="name"
          name="name"
          required
          type="text"
          value={form.name}
          onChange={handleChange}
          className="w-full mt-2 bg-[#F5F5F5] border border-[#E5E5E5] rounded-md px-4 py-2 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:bg-white"
          placeholder="Таны нэр"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="text-[#1A1A1A] uppercase text-xs font-semibold tracking-wide"
        >
          Утас
        </label>
        <input
          id="phone"
          name="phone"
          required
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className="w-full mt-2 bg-[#F5F5F5] border border-[#E5E5E5] rounded-md px-4 py-2 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:bg-white"
          placeholder="9999-9999"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="text-[#1A1A1A] uppercase text-xs font-semibold tracking-wide"
        >
          Имэйл
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full mt-2 bg-[#F5F5F5] border border-[#E5E5E5] rounded-md px-4 py-2 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:bg-white"
          placeholder="email@domain.com"
        />
      </div>
      <div>
        <label
          htmlFor="product"
          className="text-[#1A1A1A] uppercase text-xs font-semibold tracking-wide"
        >
          Захиалах дарс
        </label>
        <select
          id="product"
          name="product"
          value={form.product}
          onChange={handleChange}
          className="w-full mt-2 bg-[#F5F5F5] border border-[#E5E5E5] rounded-md px-4 py-2 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:bg-white"
          required
        >
          <option value="">— Сонгох —</option>
          <option value="Чихэрлэг цагаан дарс">Чихэрлэг цагаан дарс</option>
          <option value="Улаан дарс">Улаан дарс</option>
          <option value="Хатаасан дарс">Хатаасан дарс</option>
          <option value="Розэ">Розэ</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="quantity"
          className="text-[#1A1A1A] uppercase text-xs font-semibold tracking-wide"
        >
          Тоо ширхэг
        </label>
        <input
          id="quantity"
          name="quantity"
          required
          type="number"
          min={1}
          max={50}
          value={form.quantity}
          onChange={handleChange}
          className="w-full mt-2 bg-[#F5F5F5] border border-[#E5E5E5] rounded-md px-4 py-2 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:bg-white"
        />
      </div>
      <div>
        <label
          htmlFor="notes"
          className="text-[#1A1A1A] uppercase text-xs font-semibold tracking-wide"
        >
          Тусгай хүсэлт
        </label>
        <textarea
          id="notes"
          name="notes"
          rows="3"
          value={form.notes}
          onChange={handleChange}
          placeholder="Хүргэлтийн хаяг, нэмэлт хүсэлт"
          className="w-full mt-2 bg-[#F5F5F5] border border-[#E5E5E5] rounded-md px-4 py-2 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:bg-white"
        />
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-[#F5F5F5] rounded px-6 py-3 flex items-center border border-[#E5E5E5]">
          {/* reCAPTCHA mock */}
          <div className="w-28 h-7 bg-[#F5F5F5] border border-[#D4AF37] text-center text-xs text-[#D4AF37] leading-7 rounded select-none font-mono">
            Im not a robot
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={submitted}
        className={`mt-8 bg-[#D4AF37] text-[#1A1A1A] font-bold py-3 rounded-full transition duration-150 hover:bg-white hover:text-[#D4AF37] border border-[#D4AF37] text-lg shadow-xl uppercase tracking-wide ${submitted ? "opacity-60" : "hover:shadow-2xl"}`}
      >
        {submitted ? "Илгээгдэж байна..." : "Захиалах"}
      </button>
      {submitted && (
        <div className="text-center mt-3 text-[#D4AF37] text-base">
          Таны захиалгыг амжилттай хүлээн авлаа!
        </div>
      )}
    </form>
  );
}

export default function WineOrderPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] font-serif text-[#1A1A1A] pb-20">
      <section className="w-full pt-24 pb-16 px-4 max-w-2xl mx-auto">
        <div className="bg-[#F5F5F5] border border-[#E5E5E5] rounded-2xl shadow-2xl p-8 md:p-16 relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 opacity-30 pointer-events-none select-none"
            aria-hidden
          >
            <img
              src="/images/wine-hands.png"
              alt="Wine"
              width={300}
              height={300}
              className="blur-sm"
              style={{ filter: "blur(2px)" }}
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#D4AF37] font-serif text-center mb-5 drop-shadow-lg tracking-widest">
            Wine Order
          </h1>
          <p className="text-[#1A1A1A]/70 text-base text-center mb-9 leading-relaxed font-sans">
            Бид танд гүйцэтгэхэд хялбар, хурдан захиалгын системийг санал болгож байна. Доор мэдээллээ оруулж захиалаарай!
          </p>
          <OrderForm />
        </div>
      </section>
    </main>
  );
}
