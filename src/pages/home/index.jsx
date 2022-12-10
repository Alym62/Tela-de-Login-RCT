import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, TextContent, Title, TitleHighLight } from './styles'
const Home = () => {

const navigate = useNavigate();

const handleClickSignIn = () => {
    navigate('/login')
}

    return (<>
        <Header />
        <Container>
            <div>
                <Title>Implemente 
                    <TitleHighLight>
                    Implemente
                    <br />
                    </TitleHighLight>
                    O seu futuro agora!
                </Title>
                <TextContent>
                    Domine as tecnologias!!
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
            </div>
        </Container>
    </>)
}
export { Home }