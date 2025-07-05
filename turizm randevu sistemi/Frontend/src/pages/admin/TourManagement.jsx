// src/pages/admin/TourManagement.jsx
import { useState } from 'react';
export default function TourManagement() {
  const [tours, setTours] = useState([
    { id: 1, title: "Kapadokya Turu", date: "2025-07-10", guide: "Ali Rehber", capacity: 20 }
  ]);
  return (
    <div className="bg-white p-6 rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">Tur Yönetimi</h2>
      <button className="bg-primary text-white px-4 py-2 rounded mb-4">Yeni Tur Ekle</button>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Tur Adı</th><th>Tarih</th><th>Rehber</th><th>Kapasite</th><th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {tours.map(tour => (
            <tr key={tour.id}>
              <td>{tour.title}</td>
              <td>{tour.date}</td>
              <td>{tour.guide}</td>
              <td>{tour.capacity}</td>
              <td>
                <button className="text-blue-600 mr-2">Düzenle</button>
                <button className="text-red-600">Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}