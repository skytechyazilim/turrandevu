// src/pages/admin/RoleManagement.jsx
export default function RoleManagement() {
  return (
    <div className="bg-white p-6 rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">Rol Yönetimi</h2>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Kullanıcı</th><th>Rol</th><th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>admin@firma.com</td>
            <td>
              <select className="border p-1 rounded">
                <option>Admin</option>
                <option>Satış</option>
                <option>Rehber</option>
              </select>
            </td>
            <td><button className="text-primary">Kaydet</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}