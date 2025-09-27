# Patrones de Diseño

Este repositorio contiene un trabajo en grupo sobre patrones de diseño implementados en TypeScript. El proyecto está dividido en 3 ejercicios, cada uno en su propia carpeta.

## Estructura del Proyecto

- `exercise1/`: Ejercicio 1 - Patrón Builder (ver README.md para detalles del problema)
- `exercise2/`: Ejercicio 2 - Patrón Bridge (ver README.md para detalles del problema)
- `exercise3/`: Ejercicio 3 - Patrón Mediator (ver README.md para detalles del problema)
- `.gitignore`: Archivos ignorados por Git (node_modules, dist, etc.)

Cada carpeta de ejercicio contiene:
- `package.json`: Dependencias y scripts de npm
- `tsconfig.json`: Configuración de TypeScript
- `src/`: Código fuente en TypeScript
- `dist/`: Archivos compilados (ignorados en Git)
- `README.md`: Descripción detallada del problema y beneficios esperados
- `SOLUTION.md`: Explicación de la solución implementada

## Requisitos

- Node.js (versión 14 o superior)
- npm (viene incluido con Node.js)

## Instrucciones de Instalación y Uso

Para probar un ejercicio específico:

1. Clona el repositorio: `git clone <url-del-repositorio>`
2. Navega a la carpeta del ejercicio: `cd exercise1` (o `exercise2` o `exercise3`)
3. Instala las dependencias: `npm install`
4. Compila el código: `npm run build`
5. Ejecuta el programa: `npm start`

Cada ejercicio mostrará su salida en la consola, demostrando el funcionamiento del patrón de diseño implementado.

### Descripción de Ejercicios

- **Ejercicio 1 (Builder)**: Construcción de un objeto `Car` con múltiples configuraciones opcionales de manera flexible y legible.
- **Ejercicio 2 (Bridge)**: Gestión de notificaciones de diferentes tipos en múltiples plataformas (web, móvil, escritorio) sin explosión de subclases.
- **Ejercicio 3 (Mediator)**: Implementación de un chat room donde los usuarios se comunican a través de un mediador centralizado.

## Criterios Generales

### Actividad: Patrones de diseño

#### Descripción:
En los siguientes tres ejercicios deberá:
- Identificar el tipo de patrón (Estructural, comportamiento, creacional)
- Seleccionar el patrón que considera que es.
- Diseñar el diagrama de clases de la solución.
- Desarrollar el código del ejercicio.

## Contribución

Cada miembro del grupo puede trabajar en su ejercicio asignado. Recuerda hacer push de los cambios a medida que se resuelvan los problemas.

## Notas

- Asegúrate de tener Node.js instalado.
- Las dependencias se instalan localmente en cada carpeta de ejercicio.
- Usa Git para versionar los cambios.