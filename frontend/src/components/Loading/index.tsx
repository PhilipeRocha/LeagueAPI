import React from "react"
import CircularProgress from '@material-ui/core/CircularProgress';

import { Container } from "./style"



const Loading: React.FC = () => {


    return (
        <Container>
            <CircularProgress color="inherit"/>
        </Container>
    )

}

export default Loading;