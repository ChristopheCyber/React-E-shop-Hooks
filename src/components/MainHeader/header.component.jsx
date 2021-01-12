import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
// import { ReactComponent as Icon } from '../../assets/diamond0.png';
//component with Icon for shopping cart:
import CartIcon from '../cart-icon/cart-icon.component'
//component for shopping cart pre-Checkout:
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
//component for API Snow button:
import CustomButton2 from '../../components/reusable-components/custom-button2/custom-button2.component'

import './header.styles.menunav.css';
import './header.styles.scss';
import { Link } from 'react-router-dom';
// Firebase Authentication firebase.auth(): imported for sign-out 
import { auth } from "../../firebase/firebase.utils.js";
// for REDUX use
import { connect } from 'react-redux';
//for REDUX / Selectors
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';

const HeaderComponent = ({ currentUser, hidden }) => {
    console.log("HeaderComponent => currentUser=", currentUser);
    return (
        <div /*className="options"*/>
            <nav className="MenuNavHeader">
                <div className="left-header">
                    <Link to='./' className="link3 logo" /*className="logo-container"*/>
                        <Logo />
                        Home
                    </Link>
                    <span>
                        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                    </span>
                    <div className="snow-buttons-container">
                        <CustomButton2 classOn={"ON"} children="snowflake0" />
                    </div>
                    <span>
                        {'\u00A0'}{'\u00A0'}
                    </span>
                    <div className="snow-buttons-container">
                        <CustomButton2 classOn={"ON"} children="GoldEggV" />
                    </div>
                    <span>
                        {'\u00A0'}{'\u00A0'}
                    </span>
                    <div className="snow-buttons-container">
                        <CustomButton2 classOn={"ON"} children="Diamond" />
                    </div>
                    <span>
                        {'\u00A0'}{'\u00A0'}
                    </span>
                    <div className="snow-buttons-container">
                        <CustomButton2 classOn={"ON"} children="GoldRing" />
                    </div>
                    {/* for testing HOOKS: */}
                    <span>
                        {'\u00A0'}{'\u00A0'}
                    </span>
                    <div className="snow-buttons-container">
                        <Link to='./hooksTests' className="link3">
                            HOOKS test Component
                        </Link>
                    </div>
                </div>

                <h1> E-Shop demo </h1>
                <ul>
                    <li>
                        <Link to="/shop" className="link">Shop</Link>
                    </li>
                    {/*
                     <li>
                         <Link to="./signinandup" className="link">Sign in</Link>
                     </li>
                    */}
                    <li>
                        <Link to="./contact" className="link">Contact</Link>
                    </li>
                    <li>
                        {/* {console.log("HeaderComponent => currentUser.user =",currentUser.user)}
                     */}
                        {(currentUser) ? (
                            console.log("HeaderComponent ? => currentUser !== null =",
                                currentUser),
                            <div className="link" onClick={() => {
                                auth.signOut().then(function () {
                                    console.log('Signed Out');
                                }, function (error) {
                                    console.error('Sign Out Error', error);
                                });
                            }
                            }>
                                Sign-Out
                            </div>
                        )
                            : (
                                console.log("HeaderComponent ? => currentUser === null =",
                                    currentUser),
                                <Link to="./signinandup" className="link">
                                    Sign in
                            </Link>
                            )
                        }
                    </li>
                    <li>
                        <CartIcon />
                    </li>
                </ul>
                {/*hiding or not Cart Dropdown pre-checkout comp*/}
                {hidden ? null : <CartDropdown />}
            </nav>
        </div>
    );
}
/*
//createStructuredSelector used for replacing REDUCERs simple callings 
//to avoid to have a long list of functions ..(state) as:
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
}); */
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

/*
//before Selectors: fct accessing the state props through the Root-Reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
});
/*Equivalent to destructuring nested value {currentUser} of user as:
    const mapStateToProps = ( { user: {currentUser} },{ cart: {hidden} } ) => ({
    currentUser,
    hidden
});
*/

export default connect(mapStateToProps)(HeaderComponent);
