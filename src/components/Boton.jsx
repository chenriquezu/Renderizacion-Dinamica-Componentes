import Button  from "react-bootstrap/Button";
const Boton  = (props) =>{
    const {texto} = props;
    return <Button variant ="primary" type = "submit">{texto}</Button>
} ;

export default Boton;
