// ============================================================
// CATÁLOGO SEMILLA — Explocarnes (demo)
// Carnicería MÓVIL en Miami — delivery GRATIS en todo Miami.
// Pedidos por teléfono hoy: (786) 467-8230. Sin web, sin app.
// Investigación 20-sep-2026 (@explocarnes, 5.3K seguidores):
//   - Nombres CONFIRMADOS de sus reels: "Combo Híbrido",
//     "El mejor combo de Explocarnes", "combo para BBQ".
//   - Horario publicado: Miércoles a Domingo.
//   - Posicionamiento: "los mejores precios", delivery incluido.
// NINGÚN precio fue publicado por el negocio — TODOS los precios
// llevan pending:true ("Precio sugerido — el dueño confirma").
// CATALOG_VERSION: subir para re-sembrar en el servidor.
// ============================================================

const CATALOG_VERSION = 1;

const SUGERIDO = { pending: true, note: "Precio sugerido — el dueño confirma" };

const SEED_CATALOG = {
  departments: [
    {
      id: "combos-bbq",
      name: "Combos BBQ",
      icon: "🥩",
      categories: [
        {
          id: "combos-todos",
          name: "Para la parrilla",
          items: [
            { id: "combo-mejor", name: "El Mejor Combo de Explocarnes", price: 129.99, unit: "combo", active: true, tag: "⭐ El favorito", image: "combo-insignia.jpg", ...SUGERIDO,
              desc: "El que todos piden: picaña, churrasco, costillas de cerdo, pollo, chorizos y longaniza. Para 8–10 personas. Delivery GRATIS." },
            { id: "combo-hibrido", name: "Combo Híbrido", price: 99.99, unit: "combo", active: true, tag: "🔥 El más pedido", image: "combo-hibrido.jpg", ...SUGERIDO,
              desc: "La mezcla perfecta: res, cerdo y pollo con chorizos para la parrilla. Para 5–6 personas. Delivery GRATIS." },
            { id: "combo-familiar", name: "Combo Parrillero Familiar", price: 79.99, unit: "combo", active: true, image: "combo-familiar.jpg", ...SUGERIDO,
              desc: "Todo para el asado del fin de semana en familia. Para 4–5 personas. Delivery GRATIS." },
            { id: "combo-dominicano", name: "Combo Asado Dominicano", price: 89.99, unit: "combo", active: true, ...SUGERIDO,
              desc: "Para los de la tierra: longaniza, costillas de cerdo, pollo y chorizos con el sazón de casa. Delivery GRATIS." }
          ]
        }
      ]
    },
    {
      id: "cortes",
      name: "Cortes Premium",
      icon: "🔪",
      categories: [
        {
          id: "cortes-todos",
          name: "Por libra",
          items: [
            { id: "picana", name: "Picaña", price: 14.99, unit: "lb", active: true, tag: "👑 La reina", image: "cortes-premium.jpg", ...SUGERIDO,
              desc: "Con su capa de grasa, como manda la parrilla brasileña. Fresca del día." },
            { id: "churrasco", name: "Churrasco", price: 13.99, unit: "lb", active: true, ...SUGERIDO,
              desc: "El corte de la casa para la parrilla — jugoso y lleno de sabor." },
            { id: "ribeye", name: "Ribeye", price: 16.99, unit: "lb", active: true, ...SUGERIDO,
              desc: "Marmoleo de primera para los que saben de carne." },
            { id: "costilla-res", name: "Costillas de Res", price: 11.99, unit: "lb", active: true, ...SUGERIDO,
              desc: "Para cocinar lento o tirar a la parrilla — pura manteca de sabor." }
          ]
        }
      ]
    },
    {
      id: "pollo-cerdo",
      name: "Pollo y Cerdo",
      icon: "🍗",
      categories: [
        {
          id: "pc-todos",
          name: "Fresco del día",
          items: [
            { id: "pollo-entero", name: "Pollo Entero", price: 7.99, unit: "pollo", active: true, image: "pollo-cerdo.jpg", ...SUGERIDO,
              desc: "Pollo fresco entero — para asar, freír o a la parrilla." },
            { id: "costilla-cerdo", name: "Costillas de Cerdo", price: 8.99, unit: "lb", active: true, ...SUGERIDO,
              desc: "Costillitas de cerdo frescas, perfectas para el BBQ." },
            { id: "pernil", name: "Pernil de Cerdo", price: 6.99, unit: "lb", active: true, ...SUGERIDO,
              desc: "Para el pernil asado del domingo — pídelo con tiempo." },
            { id: "masa-cerdo", name: "Masas de Cerdo", price: 7.99, unit: "lb", active: true, ...SUGERIDO,
              desc: "Trozos de cerdo para freír — el chicharrón empieza aquí." }
          ]
        }
      ]
    },
    {
      id: "embutidos",
      name: "Embutidos",
      icon: "🌭",
      categories: [
        {
          id: "emb-todos",
          name: "Para la parrilla",
          items: [
            { id: "chorizos", name: "Chorizos (paquete de 4)", price: 9.99, unit: "paquete", active: true, image: "embutidos.jpg", ...SUGERIDO,
              desc: "Chorizos parrilleros — los que no pueden faltar en el asado." },
            { id: "longaniza", name: "Longaniza Dominicana (paquete)", price: 8.99, unit: "paquete", active: true, ...SUGERIDO,
              desc: "La longaniza de la tierra, con su picantico de casa." },
            { id: "salchicha-parrillera", name: "Salchichas Parrilleras", price: 7.99, unit: "paquete", active: true, ...SUGERIDO,
              desc: "Para los muchachos y para picar mientras se asa lo demás." }
          ]
        }
      ]
    },
    {
      id: "paquetes",
      name: "Paquetes Semanales",
      icon: "📦",
      categories: [
        {
          id: "paq-todos",
          name: "La compra de la semana",
          items: [
            { id: "paquete-semanal", name: "Paquete Semanal Familiar", price: 149.99, unit: "paquete", active: true, tag: "💰 Ahorra", image: "paquete-semanal.jpg", ...SUGERIDO,
              desc: "Res, pollo, cerdo y embutidos para toda la semana — empacado y listo. Delivery GRATIS." },
            { id: "paquete-pollo-cerdo", name: "Paquete Pollo + Cerdo", price: 59.99, unit: "paquete", active: true, ...SUGERIDO,
              desc: "Pollo y cerdo fresco para la semana. Delivery GRATIS." }
          ]
        }
      ]
    },
    {
      id: "extras",
      name: "Extras para el BBQ",
      icon: "🔥",
      categories: [
        {
          id: "ext-todos",
          name: "No te falte nada",
          items: [
            { id: "carbon", name: "Carbón (bolsa grande)", price: 12.99, unit: "bolsa", active: true, ...SUGERIDO,
              desc: "Bolsa grande de carbón — porque sin fuego no hay parrilla." },
            { id: "yuca", name: "Yuca (5 lb)", price: 6.99, unit: "bolsa", active: true, ...SUGERIDO,
              desc: "Yuca fresca para acompañar el asado." },
            { id: "platanos", name: "Plátanos (mano)", price: 4.99, unit: "mano", active: true, ...SUGERIDO,
              desc: "Para los tostones y maduros del BBQ." }
          ]
        }
      ]
    }
  ]
};

module.exports = { SEED_CATALOG, CATALOG_VERSION };
