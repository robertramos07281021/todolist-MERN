/* eslint-disable react/prop-types */
import styled from "styled-components";


const Alert = ({msg}) => {
  return (
    <> 
    <DivAlert>
      <i className="fa-solid fa-triangle-exclamation"></i>
      {msg}
    </DivAlert>
     </>
  )
}

export default Alert


const DivAlert = styled.div({
  position: `absolute`,
  top: `0`,
  left: `50%`,
  transform: `translate(-50%,-50%)`
})