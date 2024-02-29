//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ data }) {
  return (
    <div>
      <h2>Información ingresada:</h2>
      <p>Hola {data.input1} !</p>
      <p>Hemos notado que tu musico favorito es {data.input2}, me encanta!</p>
    </div>
  );
}

export default Card;
