// ============================================================
// CATÁLOGO SEMILLA — Explocarnes (demo)
// Carnicería MÓVIL en Miami — delivery GRATIS en todo Miami.
// Pedidos por teléfono hoy: (786) 467-8230. Sin web, sin app.
// Investigación 20-sep-2026 (@explocarnes, 5.3K seguidores):
//   - Nombres CONFIRMADOS de sus reels: "Combo Híbrido",
//     "El mejor combo de Explocarnes", "combo para BBQ".
//   - Horario publicado: Miércoles a Domingo.
//   - Posicionamiento: "los mejores precios", delivery incluido.
// Precio REAL del negocio: Combo Especial $139.99 (de su flyer).
// Todo lo demás lleva pending:true ("Precio sugerido — el dueño confirma").
// CATALOG_VERSION: subir para re-sembrar en el servidor.
// v2 (20-sep): menú argentinizado — Combo Parrillero Argentino,
//   longanizas dominicana+argentina, chorizo argentino, fraldinha
//   (corte brasilero); fuera plátanos.
// v3 (20-sep): fuera yuca (él vende carnes); extras → Accesorios de
//   Parrilla (carbón lump premium, astillas, fósforos, cuchillos);
//   departamento "Recomendaciones del Explotado".
// v4 (20-sep): Delantal de Parrillero Explotado en Accesorios.
// v5 (20-sep): Combo Especial REAL ($139.99, precio del flyer del negocio,
//   con su imagen) reemplaza el inventado; +2 combos rotativos sugeridos.
// v6 (21-sep): Combo Explocarnes REAL ($149.99, posteado por el dueño el
//   21-sep-2026: tomahawk ~5 lb, tira de churrasco ~3 lb, picanha, 2 NY,
//   2 cowboy, pack chorizo argentino) + Combo Parrilla Clásica sugerido $129.
// ============================================================

const CATALOG_VERSION = 7;

const SUGERIDO = { pending: true, note: "Precio sugerido — el dueño confirma" };

const SEED_CATALOG = {
  departments: [
    {
      id: "favoritos-explotado",
      name: "Recomendaciones del Explotado",
      icon: "⭐",
      categories: [
        {
          id: "fav-todos",
          name: "Todo",
          items: [
            { id: "combo-explocarnes", name: "Combo Explocarnes", price: 149.99, unit: "combo", active: true, image: "combo-explocarnes.jpg",
              desc: "1 Tomahawk (~5 lb), 1 tira de churrasco entera (~3 lb), 1 picanha entera, 2 New York strips, 2 Cowboy steaks y 1 pack de chorizo argentino. Delivery INCLUIDO en todo Miami. Esperamos tu pedido 👊" },
            { id: "combo-especial", name: "Combo Especial", price: 139.99, unit: "combo", active: true, tag: "⭐ El de la casa", image: "combo-especial.jpg",
              desc: "TODO POR SOLO $139.99 — 1 tira de churrasco, 3 New York, 3 ribeye, 1 tira de asado, 1 chorizo argentino, 1 queso blanco y 1 pomo de pimienta negra. Delivery INCLUIDO. Calidad que se siente, sabor que se comparte." },
            { id: "combo-hibrido", name: "Combo Híbrido", price: 99.99, unit: "combo", active: true, tag: "🔥 El más pedido", image: "combo-hibrido.jpg", ...SUGERIDO,
              desc: "La mezcla perfecta: res, cerdo y pollo con chorizos para la parrilla. Para 5–6 personas. Delivery GRATIS." },
            { id: "picana", name: "Picaña", price: 14.99, unit: "lb", active: true, tag: "👑 La reina", image: "cortes-premium.jpg", ...SUGERIDO,
              desc: "Con su capa de grasa, como manda la parrilla brasileña. Fresca del día." },
            { id: "chorizos", name: "Chorizo Argentino (paquete de 4)", price: 9.99, unit: "paquete", active: true, image: "embutidos.jpg", ...SUGERIDO,
              desc: "El infaltable del asado argentino — para la parrilla." }
          ]
        }
      ]
    },
    {
      id: "combos-bbq",
      name: "Combos BBQ",
      icon: "🥩",
      categories: [
        {
          id: "combos-todos",
          name: "Para la parrilla",
          items: [
            { id: "combo-explocarnes", name: "Combo Explocarnes", price: 149.99, unit: "combo", active: true, image: "combo-explocarnes.jpg",
              desc: "1 Tomahawk (~5 lb), 1 tira de churrasco entera (~3 lb), 1 picanha entera, 2 New York strips, 2 Cowboy steaks y 1 pack de chorizo argentino. Delivery INCLUIDO en todo Miami. Esperamos tu pedido 👊" },
            { id: "combo-especial", name: "Combo Especial", price: 139.99, unit: "combo", active: true, tag: "⭐ El de la casa", image: "combo-especial.jpg",
              desc: "TODO POR SOLO $139.99 — 1 tira de churrasco, 3 New York, 3 ribeye, 1 tira de asado, 1 chorizo argentino, 1 queso blanco y 1 pomo de pimienta negra. Delivery INCLUIDO. Calidad que se siente, sabor que se comparte." },
            { id: "combo-parrilla-clasica", name: "Combo Parrilla Clásica", price: 129, unit: "combo", active: true, tag: "💡 Sugerido", image: "combo-parrilla-clasica.jpg", ...SUGERIDO,
              desc: "La versión clásica: 1 picanha entera, 2 New York strips, 1 Cowboy ribeye y 1 pack de chorizo argentino. Un paso por debajo del Combo Explocarnes — mismo sabor, más ligero. Delivery INCLUIDO en todo Miami." },
            { id: "combo-hibrido", name: "Combo Híbrido", price: 99.99, unit: "combo", active: true, tag: "🔥 El más pedido", image: "combo-hibrido.jpg", ...SUGERIDO,
              desc: "La mezcla perfecta: res, cerdo y pollo con chorizos para la parrilla. Para 5–6 personas. Delivery GRATIS." },
            { id: "combo-familiar", name: "Combo Parrillero Familiar", price: 79.99, unit: "combo", active: true, image: "combo-familiar.jpg", ...SUGERIDO,
              desc: "Todo para el asado del fin de semana en familia. Para 4–5 personas. Delivery GRATIS." },
            { id: "combo-parrilla-completa", name: "Combo Parrilla Completa", price: 119.99, unit: "combo", active: true, image: "combo-hibrido.jpg", ...SUGERIDO,
              desc: "2 tiras de churrasco, 2 New York, 2 ribeye, chorizo argentino y longaniza. Para la parrilla grande del fin de semana. Delivery GRATIS." },
            { id: "combo-asado-express", name: "Combo Asado Express", price: 69.99, unit: "combo", active: true, image: "combo-insignia.jpg", ...SUGERIDO,
              desc: "1 tira de asado, 2 New York, chorizos argentinos y queso blanco. El asado rápido sin perder calidad. Delivery GRATIS." },
            { id: "combo-argentino", name: "Combo Parrillero Argentino", price: 89.99, unit: "combo", active: true, ...SUGERIDO,
              desc: "El asado argentino en tu casa: chorizo argentino, longaniza argentina, costillas de res y pollo a la parrilla. Delivery GRATIS." }
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
            { id: "fraldinha", name: "Fraldinha — Corte Brasilero", price: 12.99, unit: "lb", active: true, ...SUGERIDO,
              desc: "El corte brasilero de la parrilla — jugoso, para un churrasco de verdad." },
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
            { id: "chorizos", name: "Chorizo Argentino (paquete de 4)", price: 9.99, unit: "paquete", active: true, image: "embutidos.jpg", ...SUGERIDO,
              desc: "El infaltable del asado argentino — para la parrilla." },
            { id: "longaniza-dom", name: "Longaniza Dominicana (paquete)", price: 8.99, unit: "paquete", active: true, ...SUGERIDO,
              desc: "La longaniza de la tierra, con su picantico de casa." },
            { id: "longaniza-arg", name: "Longaniza Argentina (paquete)", price: 9.99, unit: "paquete", active: true, ...SUGERIDO,
              desc: "Estilo argentino — suave, jugosa, hecha para la parrilla." },
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
      name: "Accesorios de Parrilla",
      icon: "🔥",
      categories: [
        {
          id: "ext-todos",
          name: "Que no te falte nada",
          items: [
            { id: "carbon", name: "Carbón Lump Premium (bolsa grande)", price: 14.99, unit: "bolsa", active: true, ...SUGERIDO,
              desc: "El bueno — lump charcoal premium tipo Wild Fork. Enciende rápido, quema limpio y caliente." },
            { id: "wood-chips", name: "Astillas de Madera para Ahumar", price: 8.99, unit: "bolsa", active: true, ...SUGERIDO,
              desc: "Para darle humo a la carne — el toque del pitmaster." },
            { id: "fosforos", name: "Fósforos Largos", price: 3.99, unit: "caja", active: true, ...SUGERIDO,
              desc: "Enciende el carbón sin quemarte los dedos." },
            { id: "knife-set", name: "Set de Cuchillos Parrilleros", price: 39.99, unit: "set", active: true, ...SUGERIDO,
              desc: "Trinche y cuchillo del asador — para cortar como un profesional." },
            { id: "delantal", name: "Delantal de Parrillero Explotado", price: 24.99, unit: "delantal", active: true, tag: "🔥 Con su logo", ...SUGERIDO,
              desc: "Delantal con el logo de Explotado — para el asador de la casa. Compra tu carne y llévate el delantal." }
          ]
        }
      ]
    }
  ]
};

module.exports = { SEED_CATALOG, CATALOG_VERSION };
