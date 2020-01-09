import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;

  background: ${props => props.props.background || "black"};
  color: ${props => props.props.color || "rgb(255, 255, 255)"};
  font-size: ${props => props.props.fontSize || "15px"};
  font-weight: ${props => props.props.fontWeight || "600"};
  border-radius: ${props => props.props.radius || "6px"};
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
  }
`
Button.propTypes = {
  /**
   * The background color of this component
   */
  background: PropTypes.string,
  /**
   * The text color of this component
   */
  color: PropTypes.string,
  /**
   * The font size of this component
   */
  fontSize: PropTypes.string,
  /**
   * The font weight of this component
   */
  fontWeight: PropTypes.string,
  /**
   * The border radius of this component
   */
  radius: PropTypes.string,
  /**
   * The margin top of this component
   */
  marginTop: PropTypes.string,
  /**
   * The margin bottom of this component
   */
  marginBottom: PropTypes.string,
}

Button.defaultProps = {
  background: 'black',
  color: 'rgb(255, 255, 255)',
  fontSize: '15px',
  fontWeight: '600',
  radius: '6px'
}

export default Button