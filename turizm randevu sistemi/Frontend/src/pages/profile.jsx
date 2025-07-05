// src/pages/Profile.jsx
export default function Profile() {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Profilim</h2>
      <input type="text" className="w-full border p-2 rounded mb-3" placeholder="Ad Soyad" />
      <input type="email" className="w-full border p-2 rounded mb-3" placeholder="E-posta" />
      <button className="w-full bg-primary text-white py-2 rounded mb-4">Güncelle</button>
      <h3 className="font-semibold mb-2">Geçmiş Randevular</h3>
      <ul className="text-sm">
        <li>Kapadokya Turu - 10.07.2025 <button className="text-red-500 ml-2">İptal Et</button></li>
      </ul>
    </div>
  );
}