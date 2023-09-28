import './Galary.css'
import {RickAndMorty} from "../../helper/database/model.tsx";
import Card from "../../card/Card.tsx";

type GalleryProps = {
    items: RickAndMorty[]
}

export default function Gallery(props: GalleryProps) {


    return (
        <>
            <header className="gallery_header"><h2>Gallery</h2><input type="search" placeholder="Search"/></header>
            {props.items.map(item => <Card key={item.id} newItem={item}/>)}
        </>

    )
}