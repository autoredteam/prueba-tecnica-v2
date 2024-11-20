# Instrucciones para Prueba Técnica

En esta prueba técnica, se te proporcionará un código que necesita ser depurado, revisado y optimizado. A continuación, se detallan las tareas que debes realizar:

1. **Revisar y explicar el código**:
    - Analizar el codigo entregado y explicar el funcionamiento del mismo.

2. **Corregir Errores**: Identifica y corrige cualquier error presente en el código. Esto incluye errores de lógica, sintaxis y cualquier otro tipo de error que pueda afectar el funcionamiento del código.

3. **Refactorizar Código y aplicar buenas prácticas**: Refactoriza el código para mejorar su legibilidad y mantenibilidad. Esto incluye:
   - Eliminar duplicados.
   - Aplicar funciones flecha (arrow functions).
   - Optimizar el código para mejorar su rendimiento.
   - Utilizar `async/await` en lugar de promesas anidadas.
   - Evitar `ifs` anidados y callbacks anidados.
   - Uso de `camelCase` para nombres de variables y funciones.
   - Comentarios claros y concisos donde sea necesario.
   - Código limpio y bien estructurado.
   - Modularizar el código.
   - Se sugiere usar axios para las solicitudes HTTP.


### Funcionamiento esperado:



```typescript
"/vehicle-info/AAAA01"

{
    totalLoss: { 
        status: 'OK', 
        data:   {
            patente: "AAAA01",
            fecha: "2024-04-01",
            status: "NO REGISTRA PERDIDA TOTAL",
        }
    },
    prt: { 
        status: 'OK', 
        data: {
            patente: "AAAA01",
                fecha: "2024-04-01",
            status: "APROBADA",
        },
    },
    fines: { status: 'OK', data: [] },
};
```

```typescript
"/vehicle-info/AAAA00"

{
    totalLoss: { 
        status: 'NOT_OK', 
        data: {
            patente: "AAAA00",
            fecha: "2024-03-01",
            status: "REGISTRA PERDIDA TOTAL",
        }
    },
    prt: {
        status: 'NOT_OK',
        data: {
            status: "RECHAZADA",
            patente: "AAAA00",
            fecha: "2024-04-01",
        }
    },
    fines: { 
        status: 'NOT_OK', 
        data: [
            {
                patente: "AAAA00",
                fecha: "2024-03-01",
                hora: "12:00",
                lugar: "Concepcion",
                infraccion: "Conducir sin licencia",
                monto: 120000,
        },
        {
                patente: "AAAA00",
                fecha: "2024-05-01",
                hora: "14:00",
                lugar: "Concepcion",
                infraccion: "Conducir en estado de ebriedad",
                monto: 200000,
            },  
        ],
    },
}
```

## Endpoints disponibles

- http://localhost:3000/total-loss/:license

```typescript
{
    patente: "ABCD12",
    fecha: "YYYY-MM-DD",
    status: "REGISTRA PERDIDA TOTAL" | "NO REGISTRA PERDIDA TOTAL",
}
```

- http://localhost:3000/prt/:license

```typescript
{
    patente: "ABCD12",
    fecha: "YYYY-MM-DD",
    status: "RECHAZADA" | "APROBADA",
}
```

- http://localhost:3000/fines/:license

```typescript
[
    {
        patente: "ABCD12",
        fecha: "YYYY-MM-DD",
        hora: "HH:MM",
        lugar: "LUGAR",
        infraccion: "INFRACCION",
        monto: 000000,
    },
    ..... {}
]
```
