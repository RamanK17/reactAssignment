import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import App from './App.js';

import './src/css/mui.min.css';
import './src/css/style.scss';
// import './src/images';

const dummyData = [
  { id: 0, img: "./src/assets/images/golden-temple.jpg",  title: "The Golden Temple", description:"The Golden temple is the holiest shrine of Sikhs. It was built in late 16th century by Guru Arjan, and a copy of the Sikh scripture was placed inside the temple in 1604. Its sanctum walls were covered in marble and the dome was decorated with gold foil by Ranjit Singh in the 19th century."},
  { id: 1, img: "./src/assets/images/taj-mahal.jpg",  title: "The Taj Mahal",description:"The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal. The imperial court documenting Shah Jahan's grief after the death of Mumtaz Mahal illustrate the love story held as the inspiration for Taj Mahal."},
  { id: 2, img: "./src/assets/images/gatewayOfIndia.jpg",  title: "Gateway Of India",description:"The Gateway of India is an arch monument built during the 20th century in Bombay, India. The monument was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911.The structural plan of Gateway of India is designed in the Indo-Saracenic style."},
  { id: 3, img: "./src/assets/images/jal-mahal.jpg",  title: "Jal Mahal",description:"Jal Mahal (meaning 'Water Palace') is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace and the lake around it were renovated and enlarged in the 18th century by Maharaja Jai Singh II of Amber."},
  { id: 4, img: "./src/assets/images/mysorePalace.jpg",  title: "Mysore Palace",description:"Ambavilas Palace, otherwise known as the Mysore Palace, is a historical palace and a royal residence at Mysore in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward."}
  
];

ReactDOM.render(
  <App app={dummyData} />,
  document.getElementById('app')
);
