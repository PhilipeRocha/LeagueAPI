import React, { useState } from "react"
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input'
import Button from '../../components/Button'

import SkarnerR from '../../assets/SkarnerImpale.png'
import SkarnerRender from '../../assets/SkarnerRender.png'

import {
    Container,
    Logo,
    Title,
    Content,
    BackImage,
    Form
} from "./style"


const Home: React.FC = () => {

    const [summoner, setSummoner] = useState("")
    const history = useHistory();

    return (
        <Container>
            <Content>
                <Logo>
                    <img src={SkarnerR} alt="logo" />
                    <div>Skarner Founder</div>
                    
                </Logo>
                <Title>Busque por seu Nick!</Title>

                <Form>
                    <Input 
                        placeholder={'Digite aqui o invocador a ser capturado...'}
                        onChange={(e) => setSummoner(e.target.value)}
                    />
                    <h3>BR1</h3>
                    <Button
                        onClick={() => {
                            history.push(`/summoner/${summoner}`)    
                    }}
                    >
                        Buscar
                        
                    </Button>
                </Form>

            </Content>
            
            <BackImage src={SkarnerRender} alt="Skarner" />
        </Container>

    )
}


export default Home;