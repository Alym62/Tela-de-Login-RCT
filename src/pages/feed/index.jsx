import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
import { Container, Column, Title, TitleHighLight } from './styles'
const Feed = () => {
    return (<>
        <Header />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight>#RANKING 1</TitleHighLight>
                <UserInfo percentual={35} nome="Aly, o mior 🙅🏻‍♂️" />
            </Column>
        </Container>
    </>)
}
export { Feed }