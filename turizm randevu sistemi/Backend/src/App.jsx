import React, { useState } from "react";

const initialTours = [
  { id: 1, title: "Kapadokya Turu", date: "2025-07-10", endDate: "2025-07-12", guide: "Ali Rehber", vehicle: "34 ABC 123", capacity: 20, participants: 12 },
];

const initialUsers = [
  { id: 1, name: "Admin", email: "admin@firma.com", role: "Admin" },
  { id: 2, name: "Satış", email: "satis@firma.com", role: "Satış" },
  { id: 3, name: "Rehber", email: "rehber@firma.com", role: "Rehber" },
];

export default function App() {
  // State'ler
  const [page, setPage] = useState("dashboard");
  const [tours, setTours] = useState(initialTours);
  const [users, setUsers] = useState(initialUsers);
  const [showModal, setShowModal] = useState("");
  const [modalData, setModalData] = useState({});
  const [appointments, setAppointments] = useState([
    { id: 1, user: "Ayşe Yılmaz", tour: "Kapadokya Turu", date: "2025-07-10", status: "Aktif" },
  ]);
  const [reports] = useState({
    total: 120,
    income: 50000,
    popular: "Kapadokya Turu",
  });

  // Modal açma
  const openModal = (name, data = {}) => {
    setModalData(data);
    setShowModal(name);
  };
  const closeModal = () => setShowModal("");

  // Tur ekle/güncelle
  const handleTourSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const newTour = {
      id: modalData.id || Date.now(),
      title: fd.get("title"),
      date: fd.get("date"),
      endDate: fd.get("endDate"),
      guide: fd.get("guide"),
      vehicle: fd.get("vehicle"),
      capacity: Number(fd.get("capacity")),
      participants: Number(fd.get("participants")),
    };
    setTours((prev) =>
      modalData.id
        ? prev.map((t) => (t.id === modalData.id ? newTour : t))
        : [...prev, newTour]
    );
    closeModal();
  };

  // Tur sil
  const handleTourDelete = (id) => setTours((prev) => prev.filter((t) => t.id !== id));

  // Kullanıcı rol güncelle
  const handleRoleChange = (id, role) => setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, role } : u)));

  // Randevu ekle
  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    setAppointments((prev) => [
      ...prev,
      {
        id: Date.now(),
        user: fd.get("user"),
        tour: fd.get("tour"),
        date: fd.get("date"),
        status: "Aktif",
      },
    ]);
    closeModal();
  };

  // Kullanıcı ekle
  const handleUserSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: fd.get("name"),
        email: fd.get("email"),
        role: fd.get("role"),
      },
    ]);
    closeModal();
  };

  // Ekranlar
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow flex items-center px-8 h-16">
        <span className="text-2xl font-bold text-primary flex-1">Turizm Randevu Sistemi</span>
        <div className="space-x-4">
          <button onClick={() => setPage("dashboard")} className={page === "dashboard" ? "font-bold text-primary" : ""}>Dashboard</button>
          <button onClick={() => setPage("calendar")} className={page === "calendar" ? "font-bold text-primary" : ""}>Takvim</button>
          <button onClick={() => setPage("tours")} className={page === "tours" ? "font-bold text-primary" : ""}>Turlar</button>
          <button onClick={() => setPage("appointments")} className={page === "appointments" ? "font-bold text-primary" : ""}>Randevular</button>
          <button onClick={() => setPage("users")} className={page === "users" ? "font-bold text-primary" : ""}>Kullanıcılar</button>
          <button onClick={() => setPage("roles")} className={page === "roles" ? "font-bold text-primary" : ""}>Rol Yönetimi</button>
          <button onClick={() => setPage("reports")} className={page === "reports" ? "font-bold text-primary" : ""}>Raporlar</button>
        </div>
      </nav>

      {/* Dashboard */}
      {page === "dashboard" && (
        <div className="max-w-7xl mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded shadow text-center">
              <div className="text-2xl font-bold text-primary">{appointments.length}</div>
              <div className="text-gray-600">Bugünkü Rezervasyon</div>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <div className="text-2xl font-bold text-green-600">₺{reports.income.toLocaleString()}</div>
              <div className="text-gray-600">Toplam Gelir</div>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <div className="text-2xl font-bold text-red-600">%3</div>
              <div className="text-gray-600">İptal Oranı</div>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <div className="text-2xl font-bold text-blue-600">{users.length}</div>
              <div className="text-gray-600">Kullanıcı</div>
            </div>
          </div>
        </div>
      )}

      {/* Takvim */}
      {page === "calendar" && (
        <div className="max-w-4xl mx-auto py-10">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Tur Takvimi</h2>
            <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-2">
              {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {[...Array(31)].map((_, i) => (
                <div key={i} className="h-20 border rounded bg-gray-50 relative">
                  <div className="absolute top-1 left-1 text-xs text-gray-400">{i + 1}</div>
                  {tours
                    .filter((t) => Number(t.date.split("-")[2]) === i + 1)
                    .map((t) => (
                      <div key={t.id} className="mt-5 text-xs bg-primary text-white rounded px-1">{t.title}</div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tur Yönetimi */}
      {page === "tours" && (
        <div className="max-w-5xl mx-auto py-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Turlar</h2>
            <button className="bg-primary text-white px-4 py-2 rounded" onClick={() => openModal("tour")}>Yeni Tur Ekle</button>
          </div>
          <table className="w-full bg-white rounded shadow text-sm">
            <thead>
              <tr>
                <th>Tur Adı</th><th>Başlangıç</th><th>Bitiş</th><th>Rehber</th><th>Araç</th><th>Kapasite</th><th>Katılımcı</th><th>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour) => (
                <tr key={tour.id}>
                  <td>{tour.title}</td>
                  <td>{tour.date}</td>
                  <td>{tour.endDate}</td>
                  <td>{tour.guide}</td>
                  <td>{tour.vehicle}</td>
                  <td>{tour.capacity}</td>
                  <td>{tour.participants}</td>
                  <td>
                    <button className="text-blue-600 mr-2" onClick={() => openModal("tour", tour)}>Düzenle</button>
                    <button className="text-red-600" onClick={() => handleTourDelete(tour.id)}>Sil</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Randevu Takibi */}
      {page === "appointments" && (
        <div className="max-w-4xl mx-auto py-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Randevular</h2>
            <button className="bg-primary text-white px-4 py-2 rounded" onClick={() => openModal("appointment")}>Yeni Randevu</button>
          </div>
          <table className="w-full bg-white rounded shadow text-sm">
            <thead>
              <tr>
                <th>Müşteri</th><th>Tur</th><th>Tarih</th><th>Durum</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a.id}>
                  <td>{a.user}</td>
                  <td>{a.tour}</td>
                  <td>{a.date}</td>
                  <td>
                    <span className={a.status === "Aktif" ? "text-green-600" : "text-red-600"}>{a.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Kullanıcı Yönetimi */}
      {page === "users" && (
        <div className="max-w-3xl mx-auto py-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Kullanıcılar</h2>
            <button className="bg-primary text-white px-4 py-2 rounded" onClick={() => openModal("user")}>Yeni Kullanıcı</button>
          </div>
          <table className="w-full bg-white rounded shadow text-sm">
            <thead>
              <tr>
                <th>Ad Soyad</th><th>E-posta</th><th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Rol Yönetimi */}
      {page === "roles" && (
        <div className="max-w-3xl mx-auto py-10">
          <h2 className="text-xl font-bold mb-4">Rol Yönetimi</h2>
          <table className="w-full bg-white rounded shadow text-sm">
            <thead>
              <tr>
                <th>Kullanıcı</th><th>Rol</th><th>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.email}</td>
                  <td>
                    <select value={u.role} onChange={e => handleRoleChange(u.id, e.target.value)} className="border p-1 rounded">
                      <option>Admin</option>
                      <option>Satış</option>
                      <option>Rehber</option>
                    </select>
                  </td>
                  <td><button className="text-primary" onClick={() => alert("Rol güncellendi!")}>Kaydet</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Raporlama */}
      {page === "reports" && (
        <div className="max-w-3xl mx-auto py-10">
          <h2 className="text-xl font-bold mb-4">Raporlama</h2>
          <button className="bg-primary text-white px-4 py-2 rounded mr-2" onClick={() => alert("PDF dışa aktarıldı!")}>PDF Dışa Aktar</button>
          <button className="bg-primary text-white px-4 py-2 rounded" onClick={() => alert("Excel dışa aktarıldı!")}>Excel Dışa Aktar</button>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">İstatistikler</h3>
            <ul>
              <li>Toplam Rezervasyon: {reports.total}</li>
              <li>Toplam Gelir: ₺{reports.income.toLocaleString()}</li>
              <li>En Popüler Tur: {reports.popular}</li>
            </ul>
          </div>
        </div>
      )}

      {/* Modallar */}
      {showModal === "tour" && (
        <Modal onClose={closeModal}>
          <form className="space-y-4" onSubmit={handleTourSubmit}>
            <h2 className="text-lg font-bold">{modalData.id ? "Tur Düzenle" : "Yeni Tur Ekle"}</h2>
            <input name="title" defaultValue={modalData.title || ""} placeholder="Tur Adı" className="w-full border p-2 rounded" required />
            <div className="flex space-x-2">
              <input name="date" type="date" defaultValue={modalData.date || ""} className="w-1/2 border p-2 rounded" required />
              <input name="endDate" type="date" defaultValue={modalData.endDate || ""} className="w-1/2 border p-2 rounded" required />
            </div>
            <input name="guide" defaultValue={modalData.guide || ""} placeholder="Rehber" className="w-full border p-2 rounded" required />
            <input name="vehicle" defaultValue={modalData.vehicle || ""} placeholder="Araç" className="w-full border p-2 rounded" required />
            <input name="capacity" type="number" min={1} defaultValue={modalData.capacity || 1} placeholder="Kapasite" className="w-full border p-2 rounded" required />
            <input name="participants" type="number" min={0} defaultValue={modalData.participants || 0} placeholder="Katılımcı" className="w-full border p-2 rounded" required />
            <div className="flex justify-end">
              <button type="button" className="mr-2 px-4 py-2" onClick={closeModal}>İptal</button>
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded">{modalData.id ? "Güncelle" : "Kaydet"}</button>
            </div>
          </form>
        </Modal>
      )}
      {showModal === "appointment" && (
        <Modal onClose={closeModal}>
          <form className="space-y-4" onSubmit={handleAppointmentSubmit}>
            <h2 className="text-lg font-bold">Yeni Randevu</h2>
            <input name="user" placeholder="Müşteri Adı" className="w-full border p-2 rounded" required />
            <select name="tour" className="w-full border p-2 rounded" required>
              <option value="">Tur Seçin</option>
              {tours.map((t) => (
                <option key={t.id} value={t.title}>{t.title}</option>
              ))}
            </select>
            <input name="date" type="date" className="w-full border p-2 rounded" required />
            <div className="flex justify-end">
              <button type="button" className="mr-2 px-4 py-2" onClick={closeModal}>İptal</button>
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Kaydet</button>
            </div>
          </form>
        </Modal>
      )}
      {showModal === "user" && (
        <Modal onClose={closeModal}>
          <form className="space-y-4" onSubmit={handleUserSubmit}>
            <h2 className="text-lg font-bold">Yeni Kullanıcı</h2>
            <input name="name" placeholder="Ad Soyad" className="w-full border p-2 rounded" required />
            <input name="email" type="email" placeholder="E-posta" className="w-full border p-2 rounded" required />
            <select name="role" className="w-full border p-2 rounded" required>
              <option>Admin</option>
              <option>Satış</option>
              <option>Rehber</option>
            </select>
            <div className="flex justify-end">
              <button type="button" className="mr-2 px-4 py-2" onClick={closeModal}>İptal</button>
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Kaydet</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

// Modal Bileşeni
function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg relative">
        <button className="absolute top-2 right-2 text-gray-400 text-2xl" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
}