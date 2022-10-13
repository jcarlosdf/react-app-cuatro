import styled from "styled-components";

export const FormContainer = styled.div`
    z-index: 200;
    margin:auto;
    width: 60%;
    max-width: 300px;
    height: 400px;
    background: rgb(250,250,256);
    color: black;
    padding-top: 30px;
    position: relative;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    button{
        border: none;
        outline:0;
        border-radius: 5px;
        font-weight: 600;
        font-size: 1em;
        cursor: pointer;
    }
    button.closeBtnForm {
        position: absolute;
        right: 25px;
        top: 20px;
        width: 30px;
        height: 30px;
        z-index: 300;
    }
    h3 {
        line-height: 1em;
        font-size: 1.4em;
        position: absolute;
        top:0;
        left:28px;
        text-align:left;
        // width:100%;
        // background: blue;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin:auto;
        width: 90%;
        height: 90%;
        padding-top: 60px;
        // background: blue;
        position: relative;
        
        div {
            // background-color: yellow;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items:center;
            gap: 20px;
            position: relative;
            width: 90%;
            height:50%;

            label {
                position:absolute;
                top:-15px;
                text-align:left;
                width:100%;
                letter-spacing: 1px;
                font-weight: 600;
                // margin-bottom:30px;
            }
            input {
                height: 25px;
                width: 100%;
                border-radius: 5px;
                border: none;
                outline: none;
                font-size: 1.2em;
                margin-bottom: 25px;
                color: white;
                background-color: rgb(100,100,100)
            }
            button {
                height: 30px;
                width: 100%;
                // margin-top: 10px;

            }

        }
    }
    span {
        position: absolute;
        bottom: 11px;
        width:100%;
        padding:0;
        margin:0;
    }
`

export const InputErrors = styled.span`
    display: block;
    color: red;
    text-align: left;
`

// export default {InputErrors, FormContainer}