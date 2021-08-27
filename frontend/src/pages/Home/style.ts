import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62));
    color: ${props => props.theme.colors.white};

`

export const Logo = styled.div`
    font-size: 40px;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    > img {
        border-radius: 30px;
        margin-right: 10px;
    }
    
`

export const Title = styled.div`

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
    height: 400px;

    border-radius: 15px;
    justify-content: center;
`

export const BackImage = styled.img`
    width: 200px;
    height: 250px;
`

export const Form = styled.form`
    display: flex;
    height: 90px;
    padding: 15px 0px;

    > h3 {
        align-self: center;
        background: ${props => props.theme.colors.success}; 
        margin: 7px 15px;
        padding: 10px;
        border-radius: 5px;
        height: 47px;
        font-size: 20px;
    }

    > button {
        width: 180px;

        > a {
            text-decoration: none;
            color: ${props => props.theme.colors.white}; 
        }
    }
    
`