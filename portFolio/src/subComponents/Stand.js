import React, { useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components';

import { Chef, ChefParty } from '../components/AllSvgs';

const shakeAnimation = keyframes`
    0%, 100% {
      transform: translateX(0);
    }
    25%, 75% {
      transform: translateX(-30px);
    }
    50% {
      transform: translateX(30px);
    }
  `;

const pendulumAnimation = keyframes`
  0% {
    transform: rotate(7deg);
  }
  50% {
    transform: rotate(-7deg);
  }
  100% {
    transform: rotate(7deg);
  }
`;
const CajaAnimadaJoker = styled.div` 
  animation: ${pendulumAnimation} 1s ease-in-out infinite;
  display: flex;
  justify-content: center;
 

`

const CajaJoker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${shakeAnimation} 15s ease-out infinite;
 
;`

const CajaBotones = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  left: 15%;
  top: 84%;
  justify-content: space-between;
  gap: 10px;
  `

const Botones = styled.div`
 width: 100%;
 position: absolute;
 top: 15%
 `

const OtroComponenteDeBotones = styled.div`
  width: 100%;
  position: absolute;
  top: 15%;
`

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const Button = styled.button`
transition: background-color 0.5s;

  font-size: 1.9rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    animation: ${pulseAnimation} 0.5s ease-in-out infinite;
    transform: scale(1.1);
  }
`;

const FrutaButton = styled(Button)`
border-color: transparent;
border-radius: 10%;
padding: 2px;
box-shadow: 0 0 10px rgba(0, 0, 0, 1);

`;

const ComidaButton = styled(Button)`
  border-color: transparent;
  padding: 2px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);

  border-radius: 10%;
`;


const MensajeTexto = styled.div`
transition: color 0.5s;
display: none;
align-items: center;
text-align: center;
position: absolute;
  height: 100px;
  width: 170px;
  top: -78%;
  left: 65%;
  padding: 12px;
  color: black;
  border-radius: 150px;
  font-size: 0.9rem;

  
  `;

const MensajeNube = styled.div`
  width: 300px;
  height: 180px;
  position: absolute;
  z-index: 1;
  cursor: pointer;

  &:hover .mensaje-texto {
    display: flex;
   
  }
  `;

const TextoNube = styled.div`
`



const RenderBotones = ({ clickMode, handleClickText, currentMenu }) => {

  const mensajes = [
    "La única lista de invitados que necesitamos es la de la fiesta.",
    "Baila como si nadie estuviera mirando",
    "Las noches siempre comienzan con una cerveza",
    "En nuestro mundo, las risas son la moneda de curso legal.",
    "Aprovecha la vida ¡los recuerdos durarán para siempre!",
    "No es solo una fiesta, es una obra maestra en movimiento.",
    "Si la música es buena, baila. Si la comida es buena, come.",
    "En nuestro código de vestimenta, la diversión es obligatoria.",
    "La risa es el mejor acompañante en cualquier celebración.",
    "No contamos las horas, contamos los momentos de diversión.",
    "Si te preguntas si debes bailar o no, la respuesta es siempre sí.",
    "La diversión no tiene hora de inicio ni de final, simplemente sucede.",
    "En nuestra fiesta, la única regla es ser auténtico y disfrutar al máximo.",
    "Las risas compartidas y las noches interminables son la mejor terapia."

  ];

  const mensajesLight = [

    "La única dieta que seguimos es Come, sonríe, repite",
    "Siempre es hora de tacos. ¿Por qué limitarse al martes?",
    "¿Quieres algo crujiente y delicioso? ¡Pídelo aquí y ahora!",
    "En nuestro puesto, las calorías no cuentan. Es un hecho científico.",
    "¿Te preocupa la dieta? ¡Come con nosotros y preocúpate después!",
    "Nuestra comida es tan deliciosa que hasta el hambre viene a visitarnos.",
    "¿Te preocupa la dieta? ¡Come con nosotros y preocúpate después!",
    "La vida es corta, come más hamburguesas.",
    'Amor a primera mordida nuestras hamburguesas te conquistarán',
    "No estamos diciendo que nuestras hamburguesas curen todo, pero casi.",
    "El secreto está en la salsa, y sí, lo sabemos",
    "Si el queso no se estira, ¿realmente es una buena pizza?",
    "La felicidad es un pedazo de pizza en cada mano",


  ];

  // Convierte cada cadena en un objeto con la propiedad 'usado'
  const mensajesConEstado = mensajes.map(texto => ({ texto, usado: false }));

  const getRandomMessage = () => {
    // Obtén una lista de mensajes no utilizados
    const mensajesNoUsados = mensajesConEstado.filter(mensaje => !mensaje.usado);

    // Verifica si todos los mensajes han sido utilizados y reinicia el estado
    if (mensajesNoUsados.length === 0) {
      mensajes.forEach(mensaje => (mensaje.usado = false));
    }

    const mensajeSeleccionado = mensajesNoUsados[Math.floor(Math.random() * mensajesNoUsados.length)];

    mensajeSeleccionado.usado = true;

    return mensajeSeleccionado.texto;
  };


  // Convierte cada cadena en un objeto con la propiedad 'usado'
  const mensajesLightConEstado = mensajesLight.map(texto => ({ texto, usado: false }));

  const getRandomMessageLight = () => {
    // Obtén una lista de mensajes no utilizados
    const mensajesNoUsados = mensajesLightConEstado.filter(mensaje => !mensaje.usado);

    // Verifica si todos los mensajes han sido utilizados y reinicia el estado
    if (mensajesNoUsados.length === 0) {
      mensajes.forEach(mensaje => (mensaje.usado = false));
    }

    const mensajeSeleccionado = mensajesNoUsados[Math.floor(Math.random() * mensajesNoUsados.length)];

    mensajeSeleccionado.usado = true;

    return mensajeSeleccionado.texto;
  };



  const text = `
  - - - - =^_^= - - 🍕 - - 🥾 - - 🍔 - - (°.°) - - 🐣 - - 🤸🏻‍♂️ - - 🍓 - - ><(((('> - - 🤹🏻‍♂️ - - ʕ·ᴥ·ʔ - - 🍼 - -
  ^._.^ - - 🍒 - - =^_^= - - 🌶 - - 🍢 - - 🥠 - - <(°.°)> - - 🥥 - - 🤸🏻‍♂️ - - 🥖 - - ><(((('> - - 🧚 - - ʕ·ᴥ·ʔ - - 🍌 - -
  ^._.^ - - 🍍 - - =^_^= - - 🍅 - - 🧃 - - 🍜 - - <(°.°)> - - 🍫 - - 🥞 - - ☕️ - - ><(((('> - - 🍇 - - ʕ·ᴥ·ʔ - - 🍦 - -
  ^._.^ - - 🦖 - - 🧋
  
  `

  const menu = "Menú mixto"

  const text2 = `
 - - 🍈 - - 🍉 - - 🍇 - - 🍓 - - 🫐 - - 🥝 - - 🍍 - - 🍓 - - 🍒 - - 🥥 - - 🍑 - - 🥭 - - 🍌 - - 🍋 - - 🍊 - - 🍐 - - 🍎 - - 🍏 - - 🍈 - - 🍉 - - 🍇 - - 🍓 - - 🫐 - - 🥝 - - 🍍 - - 🍓 - - 🍒 - - 🥥 - - 🍑 - - 🥭 - - 🍌 - - 🍋 - - 🍊 - - 🍐 - - 🍎 - - 🍏 - - 🍈 - - 🍉 - - 🍇 - - 🍓 - - 🫐 - - 🥝 - - 🍍 - - 🍓 - - 🍒 - - 🥥 - - 🍑 - - 🥭 - - 🍌 - - 🍋 - - 🍊 - - 🍐 - - 🍎 - - 🍏
    `;
  const menu2 = "Frutas"

  const text3 = `
  - - 🍆 - - 🥑 - - 🥦 - - 🥙 - - 🥬 - - 🥒 - - 🧆 - - 🫑 - - 🌽 - - 🥕 - - 🫒 - - 🌮 - - 🧅 - - 🫚 - - 🥔 - - 🍠 - - 🫘 - - 🫛 - - 🌶 - - 🧄 - - 🥗 - - 🍆 - - 🥑 - - 🥦 - - 🥙 - - 🥬 - - 🥒 - - 🧆 - - 🫑 - - 🌽 - - 🥕 - - 🫚 - - 🥔 - - 🍠 - - 🫘 - - 🫛 - - 🌶 - - 🧄 - - 🥗 - - 🍆 - - 🥑 - - 🥦 - - 🥙 - - 🥬 - - 🥒 - - 🧆 - - 🫑 - - 🌽 - - 🥕 - - 🫚 - - 🥔 - - 🍠 - - 🫘 - - 🫛 
  `;
  const menu3 = "Vegano"

  const text4 = `
  - - 🥩 - - 🥓 - - 🍗 - - 🐣 - - 🦖 - - 🐑 - - 🦔 - - 🍖 - - 🦴 - - 🍝 - - 🤸‍♂️ - - 🧘‍♀️ - - 🍳 - - 🥚 - - 🍜 - - 🧚 - - 🧠 - - 🫀 - - 🦆 - - 🦙 - - 🦖 - - 🐇 - - 🐀 - - 🐢 - - 🐦 - - 🐧 - - 🥩 - - 🥓 - - 🍗 - - 🐣 - - 🦖 - - 🐑 - - 🦔 - - 🍖 - - 🦴 - - 🍝 - - 🤸‍♂️ - - 🧘‍♀️ - - 🍳 - - 🥚 - - 🍜 - - 🧚 - - 🧠 - - 🫀 - - 🦆 - - 🦙 - - 🐖 - - 🐇 - - 🐀 - - 🐢 - - 🐦 - - 🐧 - - 🪺 - - 🐏
  `
  const menu4 = "Carnívoro"

  const text5 = `
  - - 🦑 - - 🦐 - - 🍱 - - 🦀 - - 🐙 - - 🦪 - - 🍣 - - 🐠 - - 🐟 - - 🍤 - - 🐳 - - 🦪 - - 🦈 - - 🦭 - - 🐚 - - 🦑 - - 🦐 - - 🪼 - - 🦀 - - 🐙 - - 🦪 - - 🐡 - - 🐠 - - 🐟 - - 🐬 - - 🐳 - - 🐋 - - 🦈 - - 🦭 - - 🐚 - - 🦑 - - 🦐 - - 🦞 - - 🦀 - - 🐙 - - 🦪 - - 🐡 - - 🐠 - - 🐟 - - 🐬 - - 🐳 - - 🐋 - - 🦈 - - 🦭 - - 🐚 - - 🦑 - - 🦐 - - 🦞 - - 🦀 - - 🐙 - - 🦪 - - 🐡 - - 🐠 - - 🐟
  `;
  const menu5 = "Pescados y Mariscos"

  const text6 = `
  - - 🍼 - - 🧃 - - 🥤 - - 🧋 - - 🫙 - - 🍶 - - 🍼 - - 🥛 - - 🫖 - - ☕️ - - 🍵 - - 🧉 - - 🍼 - - 🧃 - - 🥤 - - 🧋 - - 🫙 - - 🍶 - - 🍼 - - 🥛 - - 🫖 - - ☕️ - - 🍵 - - 🧉 - - 🍼 - - 🧃 - - 🥤 - - 🧋 - - 🫙 - - 🍶 - - 🍼 - - 🥛 - - 🫖 - - ☕️ - - 🍵 - - 🧉 - - 🍼 - - 🧃 - - 🥤 - - 🧋 - - 🫙 - - 🍶 - - 🍼 - - 🥛 - - 🫖 - - ☕️ - - 🍵 - - 🧉 - - 🍼 - - 🧃 - - 🥤 - - 🧋 - - 🫙 - - 🍶 - - 🍼 - - 🥛 - -
  `;
  const menu6 = "Bebida"

  const text7 = `
  - - 🍔 - - 🍟 - - 🍕 - - 🌭 - - 🍿 - - 🥤 - - 🍦 - - 🍭 - - 🍩 - - 🍿 - - 🍕 - - 🌭 - - 🍟 - - 🍔 - - 🍔 - - 🍟 - - 🍕 - - 🌭 - - 🍿 - - 🥤 - - 🍦 - - 🍭 - - 🍩 - - 🍿 - - 🍕 - - 🌭 - - 🍟 - - 🍔 - - 🍔 - - 🍟 - - 🍕 - - 🌭 - - 🍿 - - 🥤 - - 🍦 - - 🍭 - - 🍩 - - 🍿 - - 🍕 - - 🌭 - - 🍟 - - 🍔 - - 🍔 - - 🍟 - - 🍕 - - 🌭 - - 🍿 - - 🥤 - - 🍦 - - 🍭 - - 🍩 - - 🍿 - - 🍕 - - 🌭
    `;
  const menu7 = "FastFood"

  const text8 = `
  - - * - - / - - + - - ) - - / - - % - - $ - - @ - - # - - | - - &  - - $ - - ? - - ^ - - * - - / - - + - - ) - - / - - * - - / - - + - - ) - - / - - % - - $ - - @ - - # - - | - - &  - - $ - - ? - - ^ - - * - - / - - + - - ) - - / - - * - - / - - + - - ) - - / - - % - - $ - - @ - - # - - | - - &  - - $ - - ? - - ^ - - * - - / - - + - - ) - - / - - * - - / - - + - - ) - - / - - % 
  `;
  const menu8 = "Snacks"

  const text9 = `
  - - - - =^_^= - - 🐑 - - 🍹 - - 🥓 - - (°.°) - - 🍯 - - 🧠 - - 🌂 - - ><(((('> - - 💃 - - ʕ·ᴥ·ʔ - - 🐤 - -
  ^._.^ - - 🦖 - - =^_^= - - 🍗 - - 🌯 - - 👟 - - <(°.°)> - - 🐣 - - 🤸🏻‍♂️ - - 🌽 - - ><(((('> - - 🍭 - - ʕ·ᴥ·ʔ - - 🥦 - -
  ^._.^ - - 🌶 - - =^_^= - - 🍩 - - 🐛 - - 🍔 - - <(°.°)> - - 🍰 - - 🤸🏻‍♂️ - - 🦑 - - ><(((('> - - 🍕 - - ʕ·ᴥ·ʔ - - 🍸 - -
  ^._.^ - - 🍺 - - 🥩

  `
  const menu9 = "Menú sorpresa"

  const text10 = `
  🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 - - 🍺 
       `;
  const menu10 = "Cervezas"

  const text11 = `
  🍷 - - 🍹 - - 🍷 - - 🍸 - - 🍸 - - 🍹 - - 🍹 - - 🍷 - - 🍷 - - 🍹 - - 🍸 - - 🍷 - - 🍸 - - 🍷 - - 🍹 - - 🍸 - - 🍹 - - 🍷 - - 🍸 - - 🍹 - - 🍹 - - 🍷 - - 🍸 - - 🍹 - - 🍷 - - 🍷 - - 🍸 - - 🍷 - - 🍹 - - 🍸 - - 🍷 - - 🍸 - - 🍹 - - 🍸 - - 🍹 - - 🍷 - - 🍸 - - 🍸 - - 🍷 - - 🍷 - - 🍹 - - 🍹 - - 🍷 - - 🍷 - - 🍹 - - 🍸 - - 🍷 - - 🍸 - - 🍷 - - 🍹 - - 🍸 - - 🍹 - - 🍷 - - 🍸 - - 🍷

     `;
  const menu11 = "Cocteles"

  const text12 = `
  🍾 - - 🥂 - - 🍾 - - 🥂 - - 🍾 - - 🍾 - - 🥃 - - 🥃 - - 🥃 - - 🥂 - - 🍾 - - 🥂 - - 🍾 - - 🍾 - - 🥂 - - 🍾 - - 🥃 - - 🍾 - - 🍾 - - 🥂 - - 🥂 - - 🍾 - - 🥂 - - 🍾 - - 🥃 - - 🍾 - - 🍾 - - 🍾 - - 🥂 - - 🍾 - - 🍾 - - 🍾 - - 🥂 - - 🥃 - - 🍾 - - 🍾 - - 🍾 - - 🥂 - - 🍾 - - 🥂 - - 🍾 - - 🥃 - - 🍾 - - 🍾 - - 🥂 - - 🥃 - - 🍾 - - 🍾 - - 🍾 - - 🥂 - - 🍾 - - 🥂 - - 🍾 - - 🥃 - - 🍾
  
  `;
  const menu12 = "Tragos  "

  const text13 = `
  🪱 - - 🕷 - - 🦗 - - 🐜 - - 🪳 - - 🦟 - - 🐞 - - 🐌 - - 🪰 - - 🐛 - - 🦋 - - 🦂 - - 🕸 - - 🐜 - - 🦋 - - 🪲 - - 🕸 - - 🦗 - - 🐜 - - 🪳 - - 🪱 - - 🐜 - - 🦋 - - 🐛 - - 🐞 - - 🪰 - - 🐌 - - 🕷 - - 🕸 - - 🐛 - - 🐌 - - 🐜 - - 🦟 - - 🐜 - - 🐜 - - 🦋 - - 🐜 - - 🦗 - - 🐜 - - 🪳 - - 🐜 - - 🦟 - - 🕸 - - 🐞 - - 🐛 - - 🪱 - - 🕷 - - 🦗 - - 🐜 - - 🪳 - - 🦟 - - 🐞 - - 🐌 - - 🪰 - - 🐛

  `;
  const menu13 = "Bichos"

  const text14 = `
  🥨 - - 🧇 - - 🥐 - - 🌭 - - 🍔 - - 🍟 - - 🍕 - - 🫓 - - 🥪 - - 🌯 - - 🫔 - - 🧇 - - 🧀 - - 🥨 - - 🌭 - - 🥐 - - 🌭 - - 🍔 - - 🍟 - - 🍕 - - 🌭 - - 🍟 - - 🍔 - - 🥨 - - 🥯 - - 🥐 - - 🌭 - - 🍔 - - 🍟 - - 🍕 - - 🫓 - - 🥪 - - 🌯 - - 🫔 - - 🧇 - - 🧀 - - 🍕 - - 🌭 - - 🍟 - - 🍔 - - 🍔 - - 🍟 - - 🍕 - - 🌭 - - 🍿 - - 🧇 - - 🌯 - - 🍭 - - 🫓 - - 🍿 - - 🍕 - - 🌭 - - 🍟 - - 🍔 - - 🍔

  `;
  const menu14 = "Chatarra"

  const text15 = `
  🍥 - - 🥠 - - 🥮 - - 🍢 - - 🍡 - - 🍧 - - 🍨 - - 🍦 - - 🥧 - - 🧁 - - 🍰 - - 🎂 - - 🍮 - - 🍭 - - 🍬 - - 🍫 - - 🍿 - - 🍩 - - 🍪 - - 🍥 - - 🥠 - - 🥮 - - 🍢 - - 🍡 - - 🍧 - - 🍨 - - 🍦 - - 🥧 - - 🧁 - - 🍰 - - 🎂 - - 🍮 - - 🍭 - - 🍬 - - 🍫 - - 🍿 - - 🍩 - - 🍪 - - 🍥 - - 🥠 - - 🥮 - - 🍢 - - 🍡 - - 🍧 - - 🍨 - - 🍦 - - 🥠 - - 🥮 - - 🍢 - - 🍡 - - 🍧 - - 🍨 - - 🍦 - - 🥧 - - 🧁
   
       `;
  const menu15 = "Dulces"

  const text16 = `
  🥛 - - 🧃 - - 🍼 - - 🧋 - - 🧃 - - 🍼 - - 🥤 - - 🍼 - - 🧃 - - 🥤 - - 🍼 - - 🥛 - - 🧃 - - 🧋 - - 🥤 - - 🧋 - - 🥤 - - 🍼 - - 🥛 - - 🧃 - - 🍼 - - 🧋 - - 🧃 - - 🍼 - - 🥤 - - 🍼 - - 🧃 - - 🥤 - - 🍼 - - 🥛 - - 🧃 - - 🧋 - - 🥤 - - 🧋 - - 🥤 - - 🍼 - - 🥛 - - 🧃 - - 🍼 - - 🧋 - - 🧃 - - 🍼 - - 🥤 - - 🍼 - - 🧃 - - 🥤 - - 🍼 - - 🥛 - - 🥤 - - 🍼 - - 🥛 - - 🧃 - - 🧋 - - 🥤 - - 🧋
  
  
  `;
  const menu16 = "Sodas"


  const getColor = (menu) => {
    return currentMenu === menu ? "rgba(255, 255, 255, 0.5)" : null;
  };

  const color = getColor(menu);
  const color2 = getColor(menu2);
  const color3 = getColor(menu3);
  const color4 = getColor(menu4);
  const color5 = getColor(menu5);
  const color6 = getColor(menu6);
  const color7 = getColor(menu7);
  const color8 = getColor(menu8);
  const color9 = getColor(menu9);
  const color10 = getColor(menu10);
  const color11 = getColor(menu11);
  const color12 = getColor(menu12);
  const color13 = getColor(menu13);
  const color14 = getColor(menu14);
  const color15 = getColor(menu15);
  const color16 = getColor(menu16);

  const [hovered, setHovered] = useState(false);
  const [message, setMessage] = useState('');
  const [messageLight, setMessageLight] = useState('');


  const handleHover = () => {
    if (!hovered) {
      setHovered(false);
      setMessage(getRandomMessage());
    }
  };


  const handleHoverLight = () => {
    if (!hovered) {
      setHovered(false);
      setMessageLight(getRandomMessageLight());
    }
  };


  return clickMode ? (
    <div>
      <Botones>
        <CajaJoker>
          <MensajeNube onMouseEnter={handleHover} onClick={handleHover} >
            <MensajeTexto className="mensaje-texto"><TextoNube><img src="./pensamientoMorado.png" alt="nube" style={{ width: '280px', height: '210px', position: 'absolute', top: '-18%', left: '-21%', zIndex: '-1' }} />{message}</TextoNube></MensajeTexto>
          </MensajeNube>
          <CajaAnimadaJoker>
            <Chef style={{ width: "35%" }} height={300} />
          </CajaAnimadaJoker>
        </CajaJoker>
        <CajaBotones>
          <FrutaButton style={{ backgroundColor: color9, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text9, menu9)}> <img src="./abrircaja.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /> </FrutaButton>
          <FrutaButton style={{ backgroundColor: color10, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text10, menu10)}><img src="./cerveza.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /> </FrutaButton>
          <FrutaButton style={{ backgroundColor: color11, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text11, menu11)}><img src="./coctel.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /> </FrutaButton>
          <FrutaButton style={{ backgroundColor: color12, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text12, menu12)}><img src="./whisky.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /> </FrutaButton>
          <FrutaButton style={{ backgroundColor: color13, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text13, menu13)}><img src="./oruga.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /> </FrutaButton>
          <FrutaButton style={{ backgroundColor: color14, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text14, menu14)}><img src="./pizza.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /> </FrutaButton>
          <FrutaButton style={{ backgroundColor: color15, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text15, menu15)}><img src="./dulces.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /> </FrutaButton>
          <FrutaButton style={{ backgroundColor: color16, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text16, menu16)}><img src="./refresco.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /> </FrutaButton>
        </CajaBotones>
      </Botones>
    </div>
  ) : (
    <div>
      <OtroComponenteDeBotones>
        <CajaJoker>
          <MensajeNube onMouseEnter={handleHoverLight} onClick={handleHoverLight}>
            <MensajeTexto className="mensaje-texto"> <img src="./pensamiento.png" alt="nube" style={{ width: '280px', height: '210px', position: 'absolute', top: '-18%', left: '-21%', zIndex: '-1' }} />{messageLight}</MensajeTexto>
          </MensajeNube>
          <CajaAnimadaJoker>
            <ChefParty style={{ width: "35%" }} height={300} />
          </CajaAnimadaJoker>
        </CajaJoker>
        <CajaBotones>
          <ComidaButton style={{ backgroundColor: color, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text, menu)}><img src="./plato-principal.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /> </ComidaButton>
          <ComidaButton style={{ backgroundColor: color2, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text2, menu2)}><img src="./frutas.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /></ComidaButton>
          <ComidaButton style={{ backgroundColor: color3, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text3, menu3)}><img src="./hoja.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /></ComidaButton>
          <ComidaButton style={{ backgroundColor: color4, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text4, menu4)}><img src="./carne.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /></ComidaButton>
          <ComidaButton style={{ backgroundColor: color5, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text5, menu5)}><img src="./pez.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /></ComidaButton>
          <ComidaButton style={{ backgroundColor: color7, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text7, menu7)}><img src="./hamburguesa.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /></ComidaButton>
          <ComidaButton style={{ backgroundColor: color8, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text8, menu8)}><img src="./papas-fritas.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /></ComidaButton>
          <ComidaButton style={{ backgroundColor: color6, borderWidth: "2px", borderStyle: "solid" }} onClick={() => handleClickText(text6, menu6)}><img src="./te.png" alt="botonPlato" style={{ width: '38px', height: '35px' }} /></ComidaButton>
        </CajaBotones>
      </OtroComponenteDeBotones>
    </div>
  );
};


export default RenderBotones