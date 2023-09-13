// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  onClickEmoji = () => {
    this.setState({isFeedback: true})
  }

  renderFeedBack = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-con">
        <div className="card">
          <h1 className="head">
            How satisfied are you with our <br /> customer support performance?
          </h1>
          <ul className="unorder-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  onClick={this.onClickEmoji}
                  type="button"
                  className="buttonemoj"
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji"
                  />
                  <br />
                  <span className="emoji-name">{emoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-con">
        <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
        <h1 className="thank-head"> Thank You!</h1>
        <p className="para">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {isFeedback ? this.renderThankyou() : this.renderFeedBack()}
        </div>
      </div>
    )
  }
}
export default Feedback
