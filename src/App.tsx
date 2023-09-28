
import './App.css'
import {RichAndMorties} from './helper/database/db.tsx'
import {RickAndMorty} from './helper/database/model.tsx'
import Gallery from "./assets/gallery/Galery.tsx";
import {useState} from "react";

export default function App() {
    const [items, setItems] = useState<RickAndMorty[]>(RichAndMorties.results)

    return <Gallery items={items}/>
}
