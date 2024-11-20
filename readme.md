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
"/vehicle-info/AAAA00"

{
    totalLoss: { status: 'NOT_OK', data: [] },
    prt: { status: 'NOT_OK', data: [] },
    fines: { status: 'NOT_OK', data: [] },
}
```

```typescript
"/vehicle-info/AAAA01"

{
    totalLoss: { status: 'OK', data: [] },
    prt: { status: 'OK', data: [] },
    fines: { status: 'OK', data: [] },
};
```

