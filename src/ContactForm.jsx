
import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: '',
    mensaje: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Introduce tu nombre'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Introduce un correo válido'
    }

    if (!formData.servicio) {
      newErrors.servicio = 'Selecciona un servicio'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      alert(
        'Formulario validado correctamente. ' +
        'Este proyecto es una demostración y no envía datos.'
      )
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        name="nombre"
        type="text"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Tu nombre"
        autoComplete="name"
      />
      {errors.nombre && <span className="form-error">{errors.nombre}</span>}

      <label htmlFor="email">Correo electrónico</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="nombre@ejemplo.com"
        autoComplete="email"
      />
      {errors.email && <span className="form-error">{errors.email}</span>}

      <label htmlFor="servicio">Servicio</label>
      <select
        id="servicio"
        name="servicio"
        value={formData.servicio}
        onChange={handleChange}
      >
        <option value="">Selecciona un servicio</option>
        <option value="corte">Corte clásico</option>
        <option value="barba">Arreglo de barba</option>
        <option value="completo">Corte + barba</option>
      </select>
      {errors.servicio && (
        <span className="form-error">{errors.servicio}</span>
      )}

      <label htmlFor="mensaje">Mensaje (opcional)</label>
      <textarea
        id="mensaje"
        name="mensaje"
        rows="4"
        value={formData.mensaje}
        onChange={handleChange}
        placeholder="Cuéntanos qué necesitas..."
      />

      <button type="submit">Comprobar formulario</button>
    </form>
  )
}

export default ContactForm
