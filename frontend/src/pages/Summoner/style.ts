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

export const SummonerIcon = styled.img`
    height: 100px;
    width: 100px;
    margin-left: 20px;
    margin-right: 15px;
    border: 1px solid #fff;
    
`

export const Header = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    > div {
        display: flex;
        > p {
            > div {
                margin-left: 10px;
            }
        }
        > div {
            margin-left: 5px;

        }
    }


`

export const EloSummoner = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 20px;
`;

export const Line = styled.span`
    height: 4px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: ${props => props.theme.colors.quaternary};
`


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 350px;

    border-radius: 15px;
    justify-content: space-between;

    background-color: ${props => props.theme.colors.primary};
`

export const Win = styled.div`
    display: flex;
    font-size: 40px;
    font-weight: bold;
    color: ${props => props.theme.colors.info};

    > h4 {
        margin-left: 8px;
        color: white;
    }
`

export const Lose = styled.div`
    display: flex;
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 10px;
    color: ${props => props.theme.colors.warning};

    > h4 {
        margin-left: 8px;
        color: white;
    }
`

export const Informations = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    > p {
        margin-right: 40px;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 150px;
        width: 150px;
        border-radius: 100px;
        border: 4px solid ${props => props.theme.colors.quaternary};

        > div {
            font-weight: bold;
            color: ${props => props.theme.colors.secondary};
        }
    }
`

export const NoFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 30px;

    > button {
        margin-top: 25px;
        width: 220px;

        > a {
            text-decoration: none;
            color: ${props => props.theme.colors.white};
        }
    }
`


export const ButtonArea = styled.div`

    > button {
        width: 220px;
    }
`