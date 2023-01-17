
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Input } from '../../components/Input';

import { useForm } from "react-hook-form";

import { CriarText, Container, Column, EsqueciText, InfoText, Row, SubtitleLogin,Title, TitleLogin, Wrapper, } from './styles'
const Cadastro = () => {

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    return(<>
        < Header />
        <Container>
            <Column >
                <Title> A plataforma para você aprender com experts, dominar as principais 
                    tecnologias e entrar mais rápido nas empresas mais desejadas. </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin> Comece agora grátis </TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change. </SubtitleLogin>
                    <form>
                        <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome" control={control} />
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                        <Input type="Password" placeholder="Password" leftIcon={<MdLock />}  name="senha" control={control} />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    
                    <Row>
                        <InfoText>
                            Ao clicar em "Criar minha conta grátis", declaro que aceito as Politícas
                             de Privacidades e os Termos de Uso da DIO.
                        </InfoText>                        
                    </Row>
                    <Row>
                        <EsqueciText>Já tenho conta.</EsqueciText>
                        <CriarText>  Fazer login </CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
    )
} 

export { Cadastro }