# CHAT PET
Este proyecto implementa un sistema distribuido para facilitar la comunicación entre clientes y proveedores de servicios dentro de la plataforma Pet's Ride. A través de este chat, los usuarios pueden interacturar en tiempo real con veterinarios, cuidadores, paseadores y otros profesionales del cuidado animal.


# 📌 Descripción
**Chat Pet** es un sistema de mensajería basado en una arquitectura **Cliente-Servidor** que emplea tecnologías modernas para garantizar una comunciación fluida, segura y escalable. Está diseñado para integrarse dentro del ecosistema más amplio de servicios de Pet's Ride, permitiendo conversaciones uno a uno mediante una API RESTful y una interfaz amigable.


## 🧩 ¿Por qué es un Sistema Distribuido?

El sistema está distribuido en varios componentes que interactúan entre sí a través de una red:
* **Clientes (FrontEnd)**: Aplicación ReactJS que se ejecuta en el navegador de usuario, conectándose al servidor para enviar y recibir mensajes.
* **Servidor (BackEnd)**: API REST desarrollada con Node.js y Express, responsable de gestionar la lógica de negocio, autenticación y almacenamiento de mensajes.
* **Base de Datos**: MongoDB como sistema de almacenamiento NoSQL distribuido, ideal para guardar conversaciones en tiempo real.
* **Comunicación**: Todo el intercambio de datos entre cliente y servidor se realiza mediante peticiones HTTP sobre una red, característica esencial de los sistemas distribuidos.

## ⚙️ Tecnologías utilizadas

| Componente       | Tecnología            |
|------------------|------------------------|
| Frontend         | ReactJS + Node.js      |
| Backend          | Node.js + Express.js   |
| Base de datos    | MongoDB                |
| Comunicación     | Servicios Web (REST)   |


# Diagramas del Sistema
1. Diagrama de Arquitectura General
2. Diagrama de Secuencia del Proceso
3. Diagrama de Casos de Uso


# Interfaces de usuario
<div align="center">
<img src="Docs/IU.png">
</div>
- [Figma del proyecto - Ver diseño en Figma](https://www.figma.com/design/PELtlEl7AhFgfCv5fKukyD/Chat-Pet?node-id=0-1&t=XqNm3S2cBTtcCt1c-1)


# 🚀 Cómo ejecutar el proyecto
1. Clonar el repositorio
   ```bash
      git clone https://github.com/LeticiaTejeroGamboa2401/ChatPet.git
      cd chat-pet
2. BackEnd
   ```bash
      cd backend
      npm install
      npm start
3. FrontEnd
   ```bash
      cd ../frontend
      npm install
      npm run dev

# 🤝 Colaboradores
<div>
<a href="https://github.com/ArmandoCanche"><img src="https://avatars.githubusercontent.com/u/91635600?s=96&v=4" title="armando-canche" width="50" height="50" ></a>
<a href="https://github.com/LeticiaTejeroGamboa2401"><img src="https://avatars.githubusercontent.com/u/92128636?v=4" title="lae-tejero" width="50" height="50" ></a>
<a href="https://github.com/LuisLagunez"><img src="https://avatars.githubusercontent.com/u/72402156?v=4" title="luis-lagunez" width="50" height="50" ></a>
</div>
