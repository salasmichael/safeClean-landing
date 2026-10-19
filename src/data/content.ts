export const WHATSAPP = '573116587002'

export const phones = [
  { label: 'Medellín', display: '311 658 7002', tel: '+573116587002' },
  { label: 'Medellín', display: '312 837 7218', tel: '+573128377218' },
  { label: 'Bogotá', display: '311 634 6620', tel: '+573116346620' },
]
export const email = 'comercialmedellin.safeclean@gmail.com'
export const social = {
  facebook: 'https://www.facebook.com/SafeCleanSAS',
  instagram: 'https://www.instagram.com/safecleanlimpiezasegura/',
}

export const waLink = (text = 'Hola SafeClean, quiero cotizar un servicio de limpieza.') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`

export const nav = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nebulizacion', label: 'Nebulización' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' },
]

export const services = [
  {
    id: 'hogares',
    title: 'Limpieza de hogares',
    img: '/img/limpiezasegura.com_.co_icono_limpieza-hogares.png',
    intro: 'Profesionales capacitadas que transforman tus espacios en un ambiente agradable e impecable.',
    groups: [
      { name: 'Baños', items: ['Lavado de pisos y paredes', 'Desinfección del área', 'Limpieza de cabinas y lavamanos', 'Juntas de baldosas', 'Espejos y griferías'] },
      { name: 'Cocina', items: ['Fogón, horno y microondas', 'Lavado de nevera', 'Extractor de olores', 'Gabinetes y paños de cocina', 'Lavado de canecas'] },
      { name: 'Casa', items: ['Barrer, trapear y sacudir', 'Paredes, puertas y ventanas', 'Aspirado', 'Tendido de camas'] },
    ],
  },
  {
    id: 'oficinas',
    title: 'Limpieza de oficinas',
    img: '/img/limpiezasegura.com_.co_icono_limpieza-oficinas.png',
    intro: 'Bienestar y productividad para tu equipo con un espacio de trabajo siempre cuidado.',
    groups: [
      { name: 'Áreas de trabajo', items: ['Papeleras', 'Barrido, trapeado y aspirado', 'Sacudido de oficinas', 'Muebles y sillas', 'Cables de equipos sin desconectarlos'] },
      { name: 'Cocineta y detalles', items: ['Lavado de cocineta y vajilla', 'Limpieza de nevera', 'Riego de plantas', 'Paredes y ventanas', 'Café y atención al personal'] },
    ],
  },
  {
    id: 'ph',
    title: 'Propiedad horizontal',
    img: '/img/limpiezasegura.com_.co_icono_limpieza-PH.png',
    intro: 'Aseo y limpieza para conjuntos y edificios, con la importancia que merece tu comunidad.',
    groups: [
      { name: 'Zonas comunes', items: ['Pisos y paredes', 'Puertas, ventanas y barandas', 'Ascensores', 'Lobby y portería', 'Parqueaderos y exteriores'] },
      { name: 'Residuos', items: ['Recolección de basuras y reciclaje', 'Lavado del cuarto de basuras', 'Lavado de canecas', 'Puertas de los shuts'] },
    ],
  },
]

export const values = [
  ['Compromiso', 'Vamos más allá del deber en lo que nos confían.'],
  ['Orientación al servicio', 'Entendemos tus necesidades y trabajamos para cumplirlas.'],
  ['Lealtad', 'Mantenemos nuestros compromisos aun en circunstancias difíciles.'],
  ['Respeto', 'Valoramos a los demás y a nosotros mismos.'],
  ['Sentido de pertenencia', 'Nos identificamos con el equipo y sus valores.'],
  ['Honestidad', 'Generamos confianza: nuestro personal representa tu casa y nuestra imagen.'],
] as const

export const steps = [
  ['Cuéntanos qué necesitas', 'Escríbenos por WhatsApp o llama: hogar, oficina o edificio.'],
  ['Recibe tu cotización', 'Te asesoramos con horarios flexibles, por día o por horas.'],
  ['Disfruta tu espacio', 'Personal capacitado y de confianza deja todo impecable.'],
] as const

export const faqs = [
  ['¿En qué ciudades prestan el servicio?', 'Atendemos en Medellín y Bogotá. Escríbenos para confirmar tu zona.'],
  ['¿Puedo contratar por horas o por días?', 'Sí. Nos adaptamos a tus necesidades con horarios flexibles.'],
  ['¿Qué es la nebulización en frío (ULV)?', 'Es una niebla de gotas de desinfectante de entre 5 y 50 micrones que penetra y cubre grandes superficies sin ventiladores adicionales.'],
  ['¿Cómo solicito una cotización?', 'Usa el formulario de esta página, escríbenos por WhatsApp o llama a cualquiera de nuestras líneas.'],
] as const
