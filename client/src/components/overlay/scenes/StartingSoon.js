import React from "react";
import { animateCSS } from "../../../helper/AnimateHelper";

class StartingSoon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        timer : props.seconds,
    }
  }

  componentDidMount(){
    this.countdownTimer = setInterval(() => {
        var currentTime = this.state.timer - 1;
        this.setState({
            timer: currentTime
        })
        if(currentTime == 0){
            clearInterval(this.countdownTimer);
            animateCSS("#slider", "slideOutLeft").then(() => {
                this.props.endOverlay();   
            })
        };
      }, 1000);
  }

  convertToString(time){
      var minutes = Math.floor(time / 60);
      var seconds = time % 60;

      return (
          <>{minutes}:{seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</>
      )
  }

  render() {
    return (
      <div className="absolute h-full w-full">
        <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
          <div className="col-span-6 row-span-6 animate__animated animate__slideInLeft bg-white shadow-2xl" id="slider">
            <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
              <div className="row-start-3 col-span-6">
                <div className="text-8xl text-black text-center startingSoonShadow font-comfortaa">
                  Starting Soon
                </div>
                <div className="text-8xl text-black text-center startingSoonShadow font-comfortaa">
                  {this.convertToString(this.state.timer)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StartingSoon;
