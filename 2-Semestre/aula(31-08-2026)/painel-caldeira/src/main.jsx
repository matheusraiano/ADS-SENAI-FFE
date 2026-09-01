import './index.css'
import { montarPainel } from './App.jsx'

// Ponto de entrada: apenas dispara a montagem do painel na div#root.
// A montagem vive no App.jsx para que os botões do desafio (−/+ °C)
// consigam pedir renderizar() quando os dados mudarem.
montarPainel()
