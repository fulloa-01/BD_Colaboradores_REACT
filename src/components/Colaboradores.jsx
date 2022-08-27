import { useState } from "react"
import { baseColaboradores } from "../BaseColabordores";
import {Button, Form} from 'react-bootstrap';



const Colaboradores = () => {
    const [colaborador, setNombreColaborador] = useState("")
    const [correo ,setCorreo] = useState("")
    const [listaColaborador, setListaColaborador] = useState(baseColaboradores)
    const [busqueda, setBusqueda] = useState("")
    
    const busquedaColab = (e) => {
        setBusqueda(e.target.value)
    }

    const filtro = !busqueda
        ? listaColaborador
        : listaColaborador.filter((item) =>
            item.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    const enviarFormulario = (e) => {
        e.preventDefault()
        setListaColaborador([...listaColaborador, {nombre: colaborador, correo: correo, id: ((listaColaborador.length)+1).toString()}])
        console.log(listaColaborador)
    }

    const capturaInputColaborador = (e) => {
        setNombreColaborador(e.target.value)
    }
    const capturaInputCorreo = (e) => {
        setCorreo(e.target.value)
    }

    return (
        <div>
        
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                <p className="navbar-brand">Busqueda de colaboradores</p>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Busca un colaborador" name="Buscador" value={busqueda} onChange={busquedaColab} />
                    </form>
                </div>
            </nav>
            <div className="container-fluid mt-5">
            <Form onSubmit={enviarFormulario}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre del colaborador</Form.Label>
                    <Form.Control value={colaborador} onChange={capturaInputColaborador} type="text" placeholder="Ingresa el nombre del colaborador" required />     
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Correo del colaborador</Form.Label>
                    <Form.Control value={correo} onChange={capturaInputCorreo} type="email" placeholder="Ingresa el correo del colaborador" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                Agregar Colaborador
                </Button>
                </Form>
                </div>

            <hr />
            
            <ul>
                <h1 className="display-4 mt-5">Listado de Colaboradores</h1>
                {listaColaborador.map(colaborador => <li 
                key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}
                </li>)}
            </ul>
            
            {busqueda === "" ? "" : 
                <div>
                    <hr />

                    <ul>
                        
                        <h2 className="display-4 mt-5">Resultado búsqueda</h2>
                        {filtro.map((item) => <li 
                        key={item.id}>{item.nombre} - {item.correo} 
                        </li>)}

                    </ul></div>}
            
        </div>

        
    )

}

export default Colaboradores
