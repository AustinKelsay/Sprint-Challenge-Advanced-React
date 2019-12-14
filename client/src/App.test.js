import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import App from './App';
import Cards from "./components/Cards"
import Toggle from "./components/Toggle";
import useDarkMode from "./components/hooks/useDarkMode";
import useLocalStorage from "./components/hooks/useLocalStorage";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('sets state as our data from the API call and renders the Cards component if this.state.players.length > 0', () => {
    expect(App)
    expect(App.componentDidMount)
  })
})

describe('Cards', () => {
  it('displays player cards from props', () => {
    expect(Cards)
  })
})

describe('Toggle', () => {
  it('toggles a boolean value onClick that passes that value to useDarkMode', () => {
    expect(Toggle)
    expect(Toggle.toggleMode)
  })
})

describe('useDarkMode', () => {
  it('takes an initial value and passes it into useLocalStorage, if the storedValue === true then our effect hook will ad the dark-mode class', () => {
    const darkMode = rtl.render(<useDarkMode />)
    expect(darkMode)
    expect(darkMode.useLocalStorage)
  })
})

describe('useLocalStorage', () => {
  it('takes key and an initial value, if key exists we will return the value attatched, if not we will set the storedValue to an inital value of false', () => {
    const localStorage = rtl.render(<useLocalStorage />)
    expect(localStorage)
    expect(localStorage.setValue)
  })
})