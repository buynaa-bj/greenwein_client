"use client";
import React, { useState } from 'react';

// Захиалгын гоё form
function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    quantity: 1,
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Энд API-р мэдээлэл илгээнэ (mock)
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form 
      className="flex flex-col gap-7 mt-7 bg-[#232223] rounded-xl shadow-xl px-10 py-8 border border-[#d4af3775]" 
      style={{ maxWidth: 480, margin: "0 auto" }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl text-[#D4AF37] font-serif text-center font-bold tracking-wide mb-2">Дарсны Захиалга</h2>
      <div>
        <label htmlFor="name" className="text-[#c9bb9a] uppercase text-xs font-semibold">Нэр</label>
        <input
          id="name"
          name="name"
          required
          type="text"
          value={form.name}
          onChange={handleChange}
          className="w-full mt-2 bg-[#222] rounded-md px-4 py-2 text-gray-100 outline-none"
          placeholder="Таны нэр"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-[#c9bb9a] uppercase text-xs font-semibold">Утас</label>
        <input
          id="phone"
          name="phone"
          required
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className="w-full mt-2 bg-[#222] rounded-md px-4 py-2 text-gray-100 outline-none"
          placeholder="9999-9999"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-[#c9bb9a] uppercase text-xs font-semibold">Имэйл</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full mt-2 bg-[#222] rounded-md px-4 py-2 text-gray-100 outline-none"
          placeholder="email@domain.com"
        />
      </div>
      <div>
        <label htmlFor="product" className="text-[#c9bb9a] uppercase text-xs font-semibold">Захиалах дарс</label>
        <select
          id="product"
          name="product"
          value={form.product}
          onChange={handleChange}
          className="w-full mt-2 bg-[#222] rounded-md px-4 py-2 text-gray-100 outline-none"
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
        <label htmlFor="quantity" className="text-[#c9bb9a] uppercase text-xs font-semibold">Тоо ширхэг</label>
        <input
          id="quantity"
          name="quantity"
          required
          type="number"
          min={1}
          max={50}
          value={form.quantity}
          onChange={handleChange}
          className="w-full mt-2 bg-[#222] rounded-md px-4 py-2 text-gray-100 outline-none"
        />
      </div>
      <div>
        <label htmlFor="notes" className="text-[#c9bb9a] uppercase text-xs font-semibold">Тусгай хүсэлт</label>
        <textarea
          id="notes"
          name="notes"
          rows="3"
          value={form.notes}
          onChange={handleChange}
          placeholder="Хүргэлтийн хаяг, нэмэлт хүсэлт"
          className="w-full mt-2 bg-[#222] rounded-md px-4 py-2 text-gray-100 outline-none"
        />
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-[#2d2a23] rounded px-6 py-3 flex items-center">
          {/* reCAPTCHA mock */}
          <div className="w-28 h-7 bg-[#524e3a] text-center text-xs text-[#d4af37] leading-7 rounded select-none font-mono">Im not a robot</div>
        </div>
      </div>
      <button
        type="submit"
        disabled={submitted}
        className="mt-8 bg-[#D4AF37] text-[#232223] font-bold py-3 rounded-full transition hover:bg-white hover:text-[#D4AF37] text-lg shadow-xl uppercase tracking-wide"
      >
        {submitted ? "Илгээгдэж байна..." : "Захиалах"}
      </button>
      {submitted && (
        <div className="text-center mt-3 text-[#D4AF37] text-base">Таны захиалгыг амжилттай хүлээн авлаа!</div>
      )}
    </form>
  );
}

export default function WineOrderPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#292725] to-[#201e1b] font-serif text-[#e2c491] pb-20">
      <section className="w-full pt-24 pb-16 px-4 max-w-2xl mx-auto">
        <div className="bg-[#181611]/80 border border-[#dfc07768] rounded-2xl shadow-2xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 opacity-40 pointer-events-none select-none" aria-hidden>
            <img src="/images/wine-hands.png" alt="Wine" width={300} height={300} style={{filter: 'blur(2px)'}} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#D4AF37] font-serif text-center mb-5 drop-shadow-lg tracking-widest">
            Wine Order
          </h1>
          <p className="text-[#c9bb9a] text-base text-center mb-9 leading-relaxed font-sans">
            Бид танд гүйцэтгэхэд хялбар, хурдан захиалгын системийг санал болгож байна. Доор мэдээллээ оруулж захиалаарай!
          </p>
          <OrderForm />
        </div>
      </section>
    </main>
  );
}
