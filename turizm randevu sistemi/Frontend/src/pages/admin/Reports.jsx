// src/pages/admin/Reports.jsx
export default function Reports() {
  return (
    <div className="bg-white p-6 rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">Raporlama</h2>
      <button className="bg-primary text-white px-4 py-2 rounded mr-2">PDF Dışa Aktar</button>
      <button className="bg-primary text-white px-4 py-2 rounded">Excel Dışa Aktar</button>
      <div className="mt-6">
        <h3 className="font-semibold mb-2">İstatistikler</h3>
        <ul>
          <li>Toplam Rezervasyon: 120</li>
          <li>Toplam Gelir: ₺50.000</li>
          <li>En Popüler Tur: Kapadokya Turu</li>
        </ul>
      </div>
    </div>
  );
}