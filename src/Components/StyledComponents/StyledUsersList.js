import styled from "styled-components";


export const Modal = styled.div`
  background: grey;
  width: 25%;
  max-width: 500px;
  height: 200px;
  position: absolute;
`;

export const Container = styled.div`
  width: 350px;
  height: 180px;
  white-space: pre-wrap;
  background-color: rgb(200, 200, 200);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  transition: 3s;

  &:hover{
    box-shadow: 5px 5px 15px 1px rgb(200 250 100 /0.9),
    -5px -5px 15px 1px rgb(200 150 20 /0.9);
    transition: 500ms;
    // cursor: pointer;
  }
  h3 {
    width: 100%;
    color: green;
    font-size: 1.5em;
    line-height: 1em;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    text-align: left;
    text-transform: capitalize;
    border-bottom: 1px solid black;
  }

  ul {
    width: 100%;
    list-style: none;
    line-height: 1.2em;
    margin-left:0;
    padding-left:0;
    text-align: left;
    border-bottom: 1px solid black;
  }

  span {
    display: block;
    text-align:left;
    width: 100%;
    color: #e4afa4;
    padding-left: 10px;
  }
  p {
    color: blue;
    margin: 0;
    padding-left: 10px;
    margin-bottom: 10px;
    font-weight:500;
    font-size: 1.1em;
    text-transform: lowercase;
  }

  div {
    align-self: flex-end;
    
  }
  
`;

export const ActionStyles = styled.div`
  display: inline-block;
  width: 35px;
  height: 30px;
  border-radius: 5px;
  color: ${({ color }) => (color ? color : "#345ef3" )};;
  line-height: 1em;
  font-size: 1.5rem;
  cursor:  ${({active})=>(active ? "pointer" : "" )};
  filter: drop-shadow(1px 1px 2px rgb(200 0 0 /0.5));

  &:active {
     ${({active})=>(active ?
       "filter: drop-shadow(0 0 0 rgb(200 0 0 /0.5))"
        :
        ""
      )};
  }
`;



// export default Container
