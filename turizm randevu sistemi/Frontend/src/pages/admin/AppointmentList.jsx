// src/pages/admin/AppointmentList.jsx
export default function AppointmentList() {
  return (
    <div className="bg-white p-6 rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">Randevu Takibi</h2>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Müşteri</th><th>Tur</th><th>Tarih</th><th>Durum</th><th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ayşe Yılmaz</td>
            <td>Kapadokya Turu</td>
            <td>10.07.2025</td>
            <td><span className="text-green-600">Aktif</span></td>
            <td><button className="text-red-600">İptal Et</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}