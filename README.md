
# Análisis de sentimientos en texto con Microsoft Azure Cognitive Services  
La API de análisis de texto es un servicio basado en la nube que proporciona un procesamiento avanzado del lenguaje natural sobre el texto en bruto, e incluye cuatro funciones principales: análisis de sentimientos, extracción de frases clave, detección de lenguaje y reconocimiento de entidades con nombre.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

**Este proyecto integra Microsoft Cognitive Services con Node JS para ofrecer una API Rest de análisis de sentimientos en texto**

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

Para correr/modificar el proyecto necesitas:

```
-Cuenta vigente de Microsoft Azure 
-Node JS en versión 9.0 o superior
-VSCode o tu editor de código favorito
-Postman 
-Git 
```

### Instalación 🔧

Para instalar y configurar el proyecto:

1. Clona el proyecto en tu computadora.
2. Dentro de la consola, muévete al directorio clonado e instala las dependencias de node corriendo: $ npm install
3. Abre el proyecto en tu editor de código favorito
4. Crea las variables de entorno, creando un archivo  .env
4. Listo! 

### Demos 😎

Puedes probar/testear el proyecto en el siguiente link:
* [Demo](https://api-text-analytics.herokuapp.com/)


### Estructura del proyecto 📦
Integraremos cuatro servicios de análisis de texto:  
1. **Análisis de los sentimientos**
Use el análisis de sentimiento para averiguar lo que los clientes piensan de su marca o tema, analizando el texto en bruto en busca de pistas sobre el sentimiento positivo o negativo. Esta API devuelve una puntuación de sentimiento entre 0 y 1 para cada documento, donde 1 es el más positivo.
Los modelos de análisis se entrenan previamente mediante un extenso cuerpo de texto y tecnologías de lenguaje natural de Microsoft. En el caso de los idiomas seleccionados, la API puede analizar y puntuar cualquier texto sin procesar que proporcione, devolviendo directamente los resultados a la aplicación de llamada.

2. **Extracción de frases clave**
Extraer automáticamente frases clave para identificar rápidamente los puntos principales. Por ejemplo, para el texto de entrada "La comida era deliciosa y había un personal maravilloso", el API devuelve los principales puntos de conversación: "la comida" y "el personal maravilloso".

3. **Detección del lenguaje**
Se puede detectar en qué idioma está escrito el texto de entrada e informar de un código de idioma único para cada documento presentado a petición en una amplia gama de idiomas, variantes, dialectos y algunos idiomas regionales/culturales. El código de idioma se empareja con una puntuación que indica la fuerza de la puntuación.

4. **Reconocimiento de la entidad nombrada**
Identifique y categorice las entidades en su texto como personas, lugares, organizaciones, fecha/hora, cantidades, porcentajes, monedas y más. Las entidades bien conocidas también se reconocen y se vinculan a más información en la web.

## Construido con 🛠️

* [Microsoft Azure](https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/overview) - Nuestro servicio de Cloud Computing
* [Node JS](https://nodejs.org/es/) - Entorno para el backend de la API
* [Heroku](https://www.heroku.com/) - El hosting de nuestro proyecto


## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

* **Jimmy Vasquez** - *Trabajo Inicial* - [JimmyVazz](https://github.com/JimmyVazz/)
También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (MIT LICENCE) - mira el archivo [LICENSE.md](LICENSE.md) para detalles


⌨️ con ❤️ por [JimmyVazz](https://github.com/JimmyVazz/) 😊 para la comunidad
