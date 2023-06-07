// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, text: ''}

  change = event => {
    const {count} = this.state
    const {text} = this.state
    console.log(count)
    console.log(text)
    this.setState({text: event.target.value})
    console.log(text)
    this.setState({count: text.length})
    console.log(count)
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <div>
          <h1>Calculate the letters you enter</h1>
          <label htmlFor="input">Enter the phrase</label>
          <br />

          <input
            type="text"
            id="input"
            onChange={this.change}
            className="input"
          />

          <p className="result">No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
