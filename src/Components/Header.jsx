import { Text, Group, Button, Paper, Modal, TextInput,PasswordInput, Anchor, Stack, Divider} from '@mantine/core';
import React, { useState, useContext  } from 'react';
import { ContextoAutenticacion } from '../Components/ContextoAutenticacion';



export default function Header() {
    const { autenticarUsuario, registrarUsuario, error } = useContext(ContextoAutenticacion);
    
    const [opened, setOpened] = useState(false);
    const [opened2, setOpened2] = useState(false);

    const [usuarioLogin, setUsuarioLogin] = useState("");
    const [contraseñaLogin, setContraseñaLogin] = useState("");
    const [usuarioRegistro, setUsuarioRegistro] = useState("");
    const [contraseñaRegistro, setContraseñaRegistro] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");

    const close = () => setOpened(false);
    const close2 = () => setOpened2(false);
    const open = () => setOpened(true);
    const open2 = () => {
        setOpened(false);
        setOpened2(true);
    };
    
    const handleLogin = async () => {
        const result = await autenticarUsuario(usuarioLogin, contraseñaLogin);
        if (!result) {
        } else {
          setUsuarioLogin('');
          setContraseñaLogin('');
          setOpened(false); 
          alert("¡Login exitoso!");
        }
      };

    const handleRegister = async () => {
        if (contraseñaRegistro !== confirmarContraseña) {
            alert("Las contraseñas deven ser iguales");
            return;
        }
        const result = await registrarUsuario(usuarioRegistro, contraseñaRegistro);
        if (!result) {
        } else {
          setUsuarioRegistro('');
          setContraseñaRegistro('');
          setConfirmarContraseña('');
          setOpened2(false); 
          alert("registrado exitosamente");
        }
      };

    return (
        <>
            <Modal opened={opened} onClose={close} title="registrate">
                <TextInput radius="md" label="Ingrese Usuario" c={'blue'} value={usuarioLogin} onChange={(e)=> setUsuarioLogin(e.target.value) }/>
                <Divider my="xs" label="I" labelPosition="center" />
                <PasswordInput radius="md" label="Ingrese Contraseña" c={'blue'} value={contraseñaLogin} onChange={(e)=> setContraseñaLogin(e.target.value)}/>
                <Stack>
                    <Button className="BotonModal" color="blue" radius='md' size="md" variant='light' onClick={handleLogin}>Confirmar</Button>
                    <Anchor onClick={open2} c="blue" size="md"> Registrar</Anchor>
                    {error && <Text c="red">{error}</Text>}
                </Stack>
            </Modal>

            <Modal opened={opened2} onClose={close2} title="Crea tu cuenta">
                <TextInput radius="md" label="Ingrese Usuario" c={'blue'} value={usuarioRegistro} onChange={(e)=> setUsuarioRegistro(e.target.value)}/>
                <PasswordInput radius="md" label="Ingrese Contraseña" c={'blue'} value={contraseñaRegistro} onChange={(e)=> setContraseñaRegistro(e.target.value)}/>
                <PasswordInput radius="md" label="Confirme Contraseña" c={'blue'} value={confirmarContraseña} onChange={(e)=> setConfirmarContraseña(e.target.value)}/>
                <Button className="BotonModal" color="blue" radius='md' size="md" variant='light' onClick={handleRegister}>Confirmar</Button>
            </Modal>

            <Paper className='paperHeader' padding="xl" shadow="xl" style={{padding:10}}>
                <Text size='xl' c='black' fw={700} ta='center'>Memes Web</Text>
                    <Button className='BotonSesion' color="blue" radius='lg' size="md"
                    variant='light' onClick={open} >Iniciar Sesion</Button>
            </Paper>
        </>
    )
}