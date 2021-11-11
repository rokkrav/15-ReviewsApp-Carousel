import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  clickOnRightArrow = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props

    if (activeReview < reviewsList.length - 1) {
      this.setState(preState => ({activeReview: preState.activeReview + 1}))
    }
  }

  clickOnLeftArrow = () => {
    const {activeReview} = this.state

    if (activeReview > 0) {
      this.setState(preState => ({activeReview: preState.activeReview - 1}))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-details-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state
    const currentReviewDetails = reviewsList[activeReview]
    return (
      <div className="reviews-main-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            testid="leftArrow"
            className="arrow-button"
            onClick={this.clickOnLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.renderActiveReview(currentReviewDetails)}

          <button
            type="button"
            testid="rightArrow"
            className="arrow-button"
            onClick={this.clickOnRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
