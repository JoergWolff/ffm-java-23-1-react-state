import './Card.css'
import './Card.css'
import {RickAndMorty} from '../helper/database/model.tsx'

export default function Card(props: { newItem: RickAndMorty }) {
    return (
        <section className="card">
            <div>
                <img src={props.newItem.image} alt={props.newItem.name}/>
            </div>
            <div>
                <h4>Name:<br/>{props.newItem.name}</h4>
                <p>Location:<br/>{props.newItem.location?.name}</p>
                <p>Species:<br/>{props.newItem.species}</p>
            </div>


        </section>
    )
}