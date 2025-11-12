import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Asumo que también usas 'useNavigate'

export default function AddClient(){
  const [form, setForm] = useState({
    nombre:'', tipoDocumento:'RUC', documento:'', direccion:'', telefono:'', email:'', contacto:'', fechaRegistro:'', estado:'Activo', observaciones:''
  })
  const navigate = useNavigate()

  const update = (k,v) => setForm({...form, [k]: v})

  const submit = (e) => {
    e.preventDefault()
    // save to localStorage (mock)
    const clients = JSON.parse(localStorage.getItem('mock_clients') || '[]')
    const id = clients.length ? Math.max(...clients.map(c=>c.id))+1 : 1
    clients.push({ id, ...form })
    localStorage.setItem('mock_clients', JSON.stringify(clients))
    alert('Cliente agregado (mock)')
    navigate('/clients')
  }

  // 💡 NOTA: Definí una variable de estilo para no repetir
  const inputStyle = "w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-2 py-1 rounded"

  return (

    <main className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow mt-6">
      <h2 className="text-2xl mb-4">Agregar Persona / Cliente</h2>
      <form onSubmit={submit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className="block text-sm">Nombre / Razón Social</label><input value={form.nombre} onChange={e=>update('nombre', e.target.value)} className={inputStyle} required/></div>
          <div><label className="block text-sm">Tipo Documento</label><select value={form.tipoDocumento} onChange={e=>update('tipoDocumento', e.target.value)} className={inputStyle}>
            <option>RUC</option><option>DNI</option><option>CE</option>
          </select></div>
          <div><label className="block text-sm">Número Documento</label><input value={form.documento} onChange={e=>update('documento', e.target.value)} className={inputStyle} required/></div>
          <div><label className="block text-sm">Fecha Registro</label><input type="date" value={form.fechaRegistro} onChange={e=>update('fechaRegistro', e.target.value)} className={inputStyle}/></div>
          <div><label className="block text-sm">Email</label><input value={form.email} onChange={e=>update('email', e.target.value)} className={inputStyle} /></div>
          <div><label className="block text-sm">Teléfono</label><input value={form.telefono} onChange={e=>update('telefono', e.target.value)} className={inputStyle} /></div>
          <div className="md:col-span-2"><label className="block text-sm">Dirección</label><input value={form.direccion} onChange={e=>update('direccion', e.target.value)} className={inputStyle} /></div>
          <div className="md:col-span-2"><label className="block text-sm">Contacto</label><input value={form.contacto} onChange={e=>update('contacto', e.target.value)} className={inputStyle} /></div>
          <div className="md:col-span-2"><label className="block text-sm">Observaciones</label><textarea value={form.observaciones} onChange={e=>update('observaciones', e.target.value)} className={inputStyle} /></div>
          <div><label className="block text-sm">Estado</label><select value={form.estado} onChange={e=>update('estado', e.target.value)} className={inputStyle}><option>Activo</option><option>Inactivo</option></select></div>
        </div>
        <div className="pt-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded">Guardar</button>
        </div>
      </form>
    </main>
  )
}