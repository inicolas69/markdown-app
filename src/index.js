import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

function enableTab (id) {
  var el = document.getElementById(id)
  el.onkeydown = function (e) {
    if (e.keyCode === 9) {
      // tab was pressed

      // get caret position/selection
      var val = this.value,
        start = this.selectionStart,
        end = this.selectionEnd

      // set textarea value to: text before caret + tab + text after caret
      this.value = val.substring(0, start) + '\t' + val.substring(end)

      // put caret at right position again
      this.selectionStart = this.selectionEnd = start + 1

      // prevent the focus lose
      return false
    }
  }
}

enableTab('my-textarea')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
