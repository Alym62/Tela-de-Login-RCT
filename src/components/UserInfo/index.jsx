import React from "react";
import { Container, NameText, Progress } from "./style";
const UserInfo = (nome, percentual) => {
    return (
<Container>
    <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual}/>
    </div>
</Container>
    )
}

export { UserInfo }