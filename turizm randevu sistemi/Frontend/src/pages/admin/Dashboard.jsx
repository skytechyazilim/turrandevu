// src/pages/admin/Dashboard.jsx
export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
      <div className="bg-white p-6 rounded shadow text-center">
        <div className="text-2xl font-bold text-primary">24</div>
        <div className="text-gray-600">Bugünkü Rezervasyon</div>
      </div>
      <div className="bg-white p-6 rounded shadow text-center">
        <div className="text-2xl font-bold text-green-600">₺12.500</div>
        <div className="text-gray-600">Toplam Gelir</div>
      </div>
      <div className="bg-white p-6 rounded shadow text-center">
        <div className="text-2xl font-bold text-red-600">%3</div>
        <div className="text-gray-600">İptal Oranı</div>
      </div>
      <div className="bg-white p-6 rounded shadow text-center">
        <div className="text-2xl font-bold text-blue-600">5</div>
        <div className="text-gray-600">Yeni Kayıt</div>
      </div>
    </div>
  );
}