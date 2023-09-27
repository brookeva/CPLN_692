import { SlideDeck } from './slidedeck.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([29.9652, -90.09820], 13);

// ## The Base Tile Layer
L.tileLayer('https://api.mapbox.com/styles/v1/brookeva/clmjx2n3j043o01ph4bpd3tms/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJvb2tldmEiLCJhIjoiY2xtandqYmJzMDc1aDJ3bDgxeTA5aXhvOSJ9.IafG9Pd_exryjb5MaKIIQw', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
}).addTo(map);

// ## Interface Elements
const slides = document.querySelectorAll('.slide');

// ## The SlideDeck object
const deck = new SlideDeck(slides, map);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();