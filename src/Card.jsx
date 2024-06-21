import profilePic from './assets/LOGOTRIEDGE.jpeg'

function Card() {

    return(
        //Seteamos el nombre pero esta vez le llamaremos CLASSNAME que es el que se usa en react o JSX
        <div className="card">
            <img className='card-image' src={profilePic} alt="Logo" />
            <h2 className='card-title'>Triedge</h2>
            <p className='parrafo'>Creando Una Card con React + Vite</p>

        </div>
    );
}

export default Card