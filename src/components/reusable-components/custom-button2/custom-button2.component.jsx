import React from 'react';
import './custom-button2.styles.scss';
import { Component } from 'react';

// const CustomButton2 = ({ this.props.children, this.props.classOn, ...restProps }) => {
class CustomButton2 extends Component {
    handleToggle = (e) => {
        /* eslint-disable no-unused-expressions */
        e.preventDefault;
        var element = document.getElementsByClassName("snowfallClass")[0];
        element.classList.remove("snow_type_1_Egg","snow_type_2_Egg","snow_type_1_Ring","snow_type_2_Ring","snow_type_1_Diamond","snow_type_2_Diamond");
        switch (this.props.children) {
            case "GoldEggV": 
                element.classList.add("snow_type_1_Egg","snow_type_2_Egg");
                break;
            case "GoldRing": 
                element.classList.add("snow_type_1_Ring","snow_type_2_Ring");
                break;
            case "Diamond": 
                element.classList.add("snow_type_1_Diamond","snow_type_2_Diamond");
                break;
            default:
                break;
        }
        
        // Keep this next /* line */ for preventing 'Expected an assignment or function call 
        // and instead saw an expression no-unused-expressions' error if using null... :
        /* eslint-disable no-unused-expressions */
        (element.style.display === "")
            ?
            (element.style.display = "none",
                // null)
                console.log("Snow OFF : display=\"", element.style.display, "\" (saving GPU use)"))
            :
            (element.style.display = "",
                // null)
                console.log("Snow ON : display=\"", element.style.display, "\""))

        // BOUNCING effect:
        var elementToBounce = document.getElementById(this.props.children);
        // -> removing the class
        elementToBounce.classList.add("bounce");
        // -> triggering reflow
        /* eslint-disable no-self-assign */
        elementToBounce.offsetWidth;
        // -> and re-adding the class
        // elementToBounce.classList.remove("bounce");
        /* eslint-disable no-loop-func */
        setTimeout(function () { elementToBounce.classList.remove('bounce'); }, 1000);
    };
    render() {
        return (
            <button
                className={`
                ${this.props.classOn === "ON" ? "custom-button2-on" : "custom-button2-off"} 
                `}
                onClick={(e) => { this.handleToggle(e); }}
            >
                <img className="letItSnowPic" id={`${this.props.children}`}
                    src={require(`../../../assets/${this.props.children}.png`)} alt={`${this.props.children} clipart`}
                />
            </button>
        );
    }
}

export default CustomButton2;
