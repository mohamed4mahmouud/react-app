import React, { Component, Fragment } from "react";
import image1 from "../imgs/image-1.jpg";
import image2 from "../imgs/image-2.jpg";
import image3 from "../imgs/image-3.jpg";

export default class Slider extends Component {
  constructor() {
    super();
    this.state = {
      images: [image1, image2, image3],
      currentIndex: 0,
      isAutoSliding: true,
    };
  }

  componentDidMount() {
    // Start automatic sliding on mount
    this.startSliding();
  }

  componentWillUnmount() {
    // Clear interval when component unmounts
    clearInterval(this.intervalId);
  }

  startSliding = () => {
    this.intervalId = setInterval(this.next, 2000);
    this.setState({ isAutoSliding: true });
  };

  stopSliding = () => {
    clearInterval(this.intervalId);
    this.setState({ isAutoSliding: false });
  };

  toggleSliding = () => {
    if (this.state.isAutoSliding) {
      this.stopSliding();
    } else {
      this.startSliding();
    }
  };

  next = () => {
    const { currentIndex, images } = this.state;
    if (currentIndex < images.length - 1) {
      this.setState({ currentIndex: currentIndex + 1 });
    } else {
      this.setState({ currentIndex: 0 });
    }
  };

  previous = () => {
    const { currentIndex, images } = this.state;
    if (currentIndex > 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    } else {
      this.setState({ currentIndex: images.length - 1 });
    }
  };

  render() {
    const { images, currentIndex } = this.state;
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="slider-container">
                <img src={images[currentIndex]} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <button className="btn btn-primary me-2" onClick={this.previous}>
                Previous
              </button>
              <button
                className="btn btn-primary me-2"
                onClick={this.toggleSliding}
              >
                {this.state.isAutoSliding
                  ? "Stop Auto Slide"
                  : "Start Auto Slide"}
              </button>
              <button className="btn btn-primary me-2" onClick={this.next}>
                Next
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
