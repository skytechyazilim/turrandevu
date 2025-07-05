// src/pages/BookTour.jsx
import { useState } from 'react';
export default function BookTour() {
  const [tour, setTour] = useState('');
  const [date, setDate] = useState('');
  const [count, setCount] = useState(1);
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Tur Rezervasyonu</h2>
      <select value={tour} onChange={e => setTour(e.target.value)} className="w-full border p-2 rounded mb-3">
        <option value="">Tur Seçin</option>
        <option value="kapadokya">Kapadokya Turu</option>
        <option value="efes">Efes Turu</option>
      </select>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full border p-2 rounded mb-3" />
      <input type="number" min={1} value={count} onChange={e => setCount(e.target.value)} className="w-full border p-2 rounded mb-3" placeholder="Kişi Sayısı" />
      <button className="w-full bg-primary text-white py-2 rounded">Devam Et ve Öde</button>
    </div>
  );
}