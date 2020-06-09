import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import './App.css'
import FooterPage from './Components/Footer'

import marked from 'marked'

import { sampleText } from './sampleText'

class App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount () {
    const text = localStorage.getItem('text')

    if (text) {
      this.setState({ text })
    }
  }

  componentDidUpdate () {
    const { text } = this.state
    localStorage.setItem('text', text)
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  handleClickClear = event => {
    const text = ''
    this.setState({ text })
  }

  handleClickReset = event => {
    const text = sampleText
    this.setState({ text })
  }

  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  render () {
    return (
      <div className='App'>
        <div className='container'>
          <h1 className='title' id='title'>
            Editeur de Markdown
          </h1>
          <div className='row'>
            <div className='col-sm-6'>
              <h2 className='title'>Markdown</h2>
              <textarea
                id='my-textarea'
                spellCheck='false'
                onChange={this.handleChange}
                value={this.state.text}
                className='form-control'
                rows='35'
              />
              <div className='buttons'>
                <button onClick={this.handleClickClear}>Tout effacer</button>
                <button onClick={this.handleClickReset}>Réinitialiser</button>
              </div>
            </div>
            <div className='col-sm-6'>
              <h2 className='title'>Résultat</h2>
              <div
                dangerouslySetInnerHTML={this.renderText(this.state.text)}
                className='resultat'
              />
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    )
  }
}

export default App
