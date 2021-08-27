import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    font-size: 20px;
    margin: 7px 0;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    background-color: ${props => props.theme.colors.success};
    transition: opacity .3s;
    &:hover {
        opacity: .7;
    }
`