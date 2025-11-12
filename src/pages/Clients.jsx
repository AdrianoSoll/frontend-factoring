import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const sample = [
  { id:1, nombre:'Acme S.A.', tipoDocumento:'RUC', documento:'20123456789', direccion:'Av. Siempreviva 123', telefono:'987654321', email:'contacto@acme.com', estado:'Activo' },
  { id:2, nombre:'Empresa XYZ', tipoDocumento:'DNI', documento:'12345678', direccion:'Calle Falsa 456', telefono:'912345678', email:'info@xyz.com', estado:'Activo' },
]

export default function Clients(){
  const [data, setData] = useState([])
  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('mock_clients') || 'null')
    if(saved) setData(saved)
    else { setData(sample); localStorage.setItem('mock_clients', JSON.stringify(sample)) }
  },[])

  const del = (id) => {
    if(!confirm('Eliminar cliente?')) return;
    const next = data.filter(d=>d.id!==id)
    setData(next)
    localStorage.setItem('mock_clients', JSON.stringify(next))
  }

  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl">Clientes</h2>
        <Link to="/clients/new" className="bg-blue-600 text-white px-3 py-1 rounded">Agregar Cliente</Link>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-sm text-gray-600 dark:text-gray-400">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Tipo Doc</th>
              <th className="px-4 py-2">Documento</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Tel</th>
              <th className="px-4 py-2">Dirección</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Acciones</th>

            </tr>
          </thead>
          <tbody>
            {data.map(c=> (
              <tr key={c.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{c.id}</td>
                <td className="px-4 py-2">{c.nombre}</td>
                <td className="px-4 py-2">{c.tipoDocumento}</td>
                <td className="px-4 py-2">{c.documento}</td>
                <td className="px-4 py-2">{c.email}</td>
                <td className="px-4 py-2">{c.telefono}</td>
                <td className="px-4 py-2">{c.direccion}</td>
                <td className="px-4 py-2">{c.estado}</td>
                <td className="px-4 py-2">
                  <button onClick={()=>del(c.id)} className="px-2 py-1 bg-red-500 text-white rounded">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}