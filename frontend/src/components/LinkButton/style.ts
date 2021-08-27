import styled from 'styled-components'

export const Container = styled.a`
    width: 100%;
    font-size: 20px;
    display: flex;
    justify-content: center;


    margin: 7px 0;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    background-color: ${props => props.theme.colors.success};
    transition: opacity .3s;
    &:hover {
        opacity: .7;
    }
`