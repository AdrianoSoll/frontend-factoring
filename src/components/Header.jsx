import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle' // Importar el botón de tema

export default function Header() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('mock_user')
    navigate('/login')
  }

  return (
    // Contenedor principal: Flex, centrado vertical y espacio entre grupos
    <nav className="w-full bg-white dark:bg-gray-800 shadow px-6 py-3 flex items-center justify-between">
      
      {/* GRUPO 1: Logo y Links (Izquierda) */}
      <div className="flex items-center space-x-6"> {/* Aumenté el espacio para separar logo y links */}
        
        {/* Logo (de tu imagen) */}
        <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Liquidez360
        </span>

        {/* Links de Navegación */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Dashboard</Link>
          <Link to="/clients" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Clientes</Link>
          <Link to="/entities" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Entidades Financiera</Link>
          <Link to="/invoice" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Factura</Link>
          <Link to="/warranty" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Garantia</Link>
          <Link to="/contract" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Contrato Factoring</Link>
        </div>
      </div>

      {/* GRUPO 2: Acciones (Derecha) */}
      <div className="flex items-center space-x-4">
        
        {/* --- 👇 ¡ORDEN CAMBIADO! 👇 --- */}
        
        {/* 1. Botón de Cerrar Sesión */}
        <button 
          onClick={handleLogout} 
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Cerrar sesión
        </button>
        
        {/* 2. Botón de Tema */}
        <ThemeToggle /> 
        
      </div>

    </nav>
  )
}