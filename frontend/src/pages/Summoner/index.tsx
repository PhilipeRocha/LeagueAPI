import React, { useEffect, useState } from "react"
import { withRouter, RouteComponentProps, useHistory } from "react-router-dom"
import Loading from "../../components/Loading"
import Button from '../../components/Button'

import api from "../../services/api"

import bronze from "../../assets/Emblem_Bronze.png";
import iron from "../../assets/Emblem_Iron.png";
import silver from "../../assets/Emblem_Silver.png";
import gold from "../../assets/Emblem_Gold.png";
import platinum from "../../assets/Emblem_Platinum.png";
import diamond from "../../assets/Emblem_Diamond.png";
import grandmaster from "../../assets/Emblem_Grandmaster.png";
import master from "../../assets/Emblem_Master.png";
import challenger from "../../assets/Emblem_Challenger.png";

import {
    Container,
    SummonerIcon,
    EloSummoner,
    Header,
    Content,
    Line,
    Informations,
    Win,
    Lose,
    NoFound,
    ButtonArea
} from "./style"

interface RouterProps {
    id: string;
}

interface SummonerDetailProps extends RouteComponentProps<RouterProps> {
}

const Summoner: React.FC<SummonerDetailProps> = ({ match }) => {

    const [summoner, setSummoner] = useState(Object)
    const [loading, setLoading] = useState(false)

    const [noFoundPlayer, setNoFoundPlayer] = useState(false)

    const history = useHistory();


    useEffect(() => {
        async function loadData() {
            setLoading(true)
            await api.get(`/summoner/${match.params.id}`)
                .then(res => {
                    setSummoner(res.data)
                })
                .catch(e => {
                    alert(e)
                    setNoFoundPlayer(true)
                })
            setLoading(false)
            
        }


        loadData()
    },[])


    function validateElo(elo: string) {
        switch (elo) {
          case "BRONZE":
            return <EloSummoner src={bronze} alt="elo" />;
          case "IRON":
            return <EloSummoner src={iron} alt="elo" />;
          case "SILVER":
            return <EloSummoner src={silver} alt="elo" />;
          case "GOLD":
            return <EloSummoner src={gold} alt="elo" />;
          case "PLATINUM":
            return <EloSummoner src={platinum} alt="elo" />;
          case "DIAMOND":
            return <EloSummoner src={diamond} alt="elo" />;
          case "GRANDMASTER":
            return <EloSummoner src={grandmaster} alt="elo" />;
          case "MASTER":
            return <EloSummoner src={master} alt="elo" />;
          case "CHALLENGER":
            return <EloSummoner src={challenger} alt="elo" />;
          default: break;
        }
      }

    return (
        <Container>
            {
                loading ? 
                    <Loading /> 
                : 
                  noFoundPlayer ? <NoFound>
                    Desculpe, não encontramos esse invocador!
                    <Button
                      onClick={() => {
                        history.push(`/`)
                      }}
                    >
                        Voltar
                        
                    </Button>
                  </NoFound> :
                  <>
                    <Content>
                        <Header>
                            <div>
                                <SummonerIcon src={summoner.iconUrl} alt="icon"/>
                                <p>
                                    <h1>{summoner.name}</h1>
                                    <div>Nível {summoner.summonerLevel} - {summoner.tier} {summoner.rank} </div>
                                </p>
                                <div>#BR1</div>

                            </div>
                            {
                                validateElo(summoner.tier)
                            }


                        </Header>

                        <Line></Line>

                        <Informations>
                            <p>
                              <Win>
                                WINS: <h4>{summoner.wins}</h4>
                              </Win>
                              <Lose>
                                LOSES: <h4>{summoner.losses}</h4>
                              </Lose>
                            </p>
                            <div>
                              <h1>{summoner.winRate}%</h1>
                              <div>WIN RATE</div>
                            </div>
                        </Informations>
                    </Content>

                    
                    <ButtonArea>
                      <Button
                        onClick={() => {
                          history.push(`/`)
                        }}
                      >
                          Voltar
                          
                      </Button>
                    </ButtonArea>

                  </>
            }
        </Container>

    )
}


export default Summoner;