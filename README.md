# 🥩 Explocarnes — Pedidos (demo)

Sistema de pedidos para **Explocarnes** (@explocarnes), carnicería
**móvil** en Miami — hoy toma pedidos solo por teléfono
((786) 467-8230), con **delivery GRATIS en todo Miami**.
Mié–Dom.

- App de clientes (`/`) — tema carnicería premium: rojo fuego/negro,
  dorado, logo de toro, español, US$. **100% delivery** (sin pickup —
  el negocio es móvil).
- Pantalla de tienda (`/tienda`) — fondo oscuro, protegida con `STORE_KEY`:
  pipeline pendiente_pago → nuevo → preparando → listo → entregado,
  sonido de pedido nuevo, editor de catálogo/precios, pestaña Historial
  (filtros por fecha y estado, conteo de pedidos, total de ingresos),
  Zelle configurable de la tienda.

## Flujo de pago (EE.UU.)

- **Efectivo** — el cliente paga al recibir. El pedido entra como `nuevo`.
- **Zelle** — pantalla de pre-pago con el handle de la tienda y botón
  "✅ Ya envié el pago". El pedido entra como `pendiente_pago`
  (tarjeta amarilla con tap-to-call); la tienda toca **Pago recibido**
  tras ver el dinero y la cocina arranca.

## Catálogo semilla

Investidado el 20-sep-2026 del Instagram del negocio. Nombres de combos
confirmados de sus reels ("Combo Híbrido", "El mejor combo de
Explocarnes", "combo para BBQ"). **Todos los precios son sugeridos**
(marcados "Precio sugerido — el dueño confirma") — el dueño los ajusta
en la pestaña Catálogo de `/tienda`.

## Despliegue (Render)

1. Render → **New → Blueprint**
2. Conectar el repo `Papyboy1920/explocarnes-pedidos`
3. **Apply** y esperar el despliegue
4. Copiar la clave generada de `STORE_KEY` (Render → Environment)
5. Pegarla en `/tienda` y hacer un pedido de prueba

## Demo local

```bash
npm install
STORE_KEY=prueba node server.js
# http://localhost:3000/        (clientes)
# http://localhost:3000/tienda  (tienda)
```

**Nota:** usa SQLite en disco efímero — solo para demo/arranque.
Un lanzamiento real necesita Postgres pago.
