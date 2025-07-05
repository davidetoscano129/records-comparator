# Records Management App

Un progetto **didattico** per imparare React e i suoi hooks principali attraverso un'applicazione di gestione records generica.

## Obiettivo Didattico

Questo progetto è stato creato come **esercizio di apprendimento** per padroneggiare:

### **React Hooks**

- `useState` - Gestione stati locali
- `useEffect` - Caricamento dati e lifecycle
- `useReducer` - Gestione stato complesso (favoriti)
- `useMemo` - Ottimizzazione filtri e calcoli
- `useCallback` - Prevenzione re-render inutili
- `useRef` - Riferimenti DOM diretti

### **Concetti React**

- **Componenti** con props
- **Separazione delle responsabilità**
- **Architettura modulare**
- **Gestione stato globale**

## Funzionalità Implementate

- **Ricerca** records per titolo/autore
- **Filtro** per categoria
- **Sistema favoriti** con persistenza LocalStorage
- **Confronto** tra 2 records
- **Statistiche** in tempo reale
- **Stati colorati** per status dei records

## Stack Tecnologico

- **React 18** (via CDN)
- **Babel Standalone** (transpilazione browser)
- **Vanilla CSS** (design glassmorphism)
- **LocalStorage** (persistenza dati)

## 📁 Struttura

```
├── index.html              # Entry point
├── styles/main.css         # Stili globali
├── components/             # Componenti React
├── services/               # Simulazione API
├── reducers/               # Gestione stato
└── utils/                  # Funzioni utility
```

## 🎓 Cosa ho imparato

- **Hooks avanzati** e loro casi d'uso
- **Ottimizzazione performance** con memoization
- **Gestione stato** con pattern Redux
- **Architettura** componenti modulari
- **Persistenza dati** lato client
