import helloWorld from './script.js';
import '../styles/main.scss';
import balloons from '../assets/balloons.jpg';

console.log(helloWorld());

const image = document.querySelector('#balloons');
image.src = balloons;
