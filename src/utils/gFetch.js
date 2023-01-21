const productos = [
  {
    id: "1",
    name: "Sillón Darwin",
    category: "sillas",
    price: 10000,
    description: "Íntegramente construido en acero, su base cromada brillante la va a diferenciar de otros modelos. Dinámico y más importante con un diseño distinto. Sistema regulable en altura para ajustar a cualquier posición de trabajo.",
    img: "https://desillas.com/img/productos/ITWUYF_1.jpg"
  },
  {
    id: "2",
    name: "Silla plastica apilable jardin exterior Mica",
    category: "sillas",
    price: 3000,
    description: "Silla apilable de poliestireno. Cómodo y facil de limpiar",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/275/965/products/171-9b2bcc1f40d6fce32216546341658294-640-0.webp"
  },
  {
    id: "3",
    name: "Mesa De Comedor Nordica Madera",
    category: "mesas",
    price: 50000,
    description: "Mesa de madera con tapa de madera laqueada. Viene desarmado. \nMedidas: Largo 120cm - Ancho 80cm - Alto 75cm",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/275/965/products/924728-mla31995876751_082019-o-09ed2b68712aaddad515955323751242-640-0.webp"
  },
  {
    id: "4",
    name: "Mesa plastica cuadrada simil Rattán",
    category: "mesas",
    price: 20000,
    description: "Mesa de plástico simil Rattán. Fácil de limpiar y resistente a rayos UV.\nMedidas: Ancho 70 x Largo 70 x Alto 75cm",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/275/965/products/alejo-choco11-e049298b623aba819b16686052415275-640-0.webp"
  },
  {
    id: "5",
    name: "Sofa Sillon 3 Cuerpos Placa Soft Diseño Katia",
    category: "sofas",
    price: 150000,
    description: "Estructura de madera Saligna cepillada, espigada y estacionada. Asientos de espuma 28kg soft de alta densidad. Almohadones de respaldo 100% vellón siliconado.",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/275/965/products/1221-96b1a62af169508b7a16548099812780-640-0.webp"
  },
]

export const gFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id ? productos.find(prod => prod.id === id) : productos)
    }, 1000)
  })
}