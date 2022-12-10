import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles'

const schema = yup.object({
    email: yup.string().email('email não é valido').required('campo obrigatorio'),
    password: yup.string().min(3, 'no mininmo 3 caracteres').required('campo obrigatorio'),
  }).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })
    const onSubmit = data => console.log(data);

    const handleClickSignIn = () => {
        navigate('/feed')
    }
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    Hello MyFrendo!
                </Title>
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Faça seu Cadastro</TitleLogin>
                <SubTitleLogin>Faça seu Login!</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="email" control={control} placeholder="e-mail" />
                <Input name="password" control={control} placeholder="senha" type="password"/>
                <Button title="Entrar" variant="secondary"  type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha?</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
            </Wrapper>
                <Input placeholder="email" />
            </Column>
        </Container>
    </>)
}
export { Login }