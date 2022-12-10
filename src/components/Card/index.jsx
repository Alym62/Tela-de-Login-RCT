import React from "react";
import { CardContainer, Content, HasInfo, PostInfo, UserInfo } from './style';
const Card = () => {
    return (
<CardContainer>
    <Content>
        <UserInfo>
            <div>
                <h4>Aly</h4>
                <p>Há 10 minutos</p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4>Projetinho Fellas!!</h4>
            <p>Projeto feito na mansão da Dio  🤯 </p> <strong>Saiba mais</strong>
        </PostInfo>
        <HasInfo>
            <h4>#HTML #CSS #Javascript</h4>
        </HasInfo>
    </Content>
</CardContainer>
    )
}
export { Card }