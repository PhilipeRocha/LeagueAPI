import React from "react"

import { Container } from "./style"

type ILinkButtonProps = {
    link: string;
}

const LinkButton: React.FC<ILinkButtonProps> = ({
    children, link
}) => (
    <Container href={link}>
        {children}
    </Container>
)

export default LinkButton;