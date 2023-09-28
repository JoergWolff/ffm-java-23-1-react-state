import './Galary.css'
import {RickAndMorty} from "../../helper/database/model.tsx";
import Card from "../../card/Card.tsx";
import {ChangeEvent, useState} from "react";

type GalleryProps = {
    items: RickAndMorty[]
}

export default function Gallery(props: GalleryProps) {

    const [searchText, setSearchText]=useState<string>("")

    const searchCharacters = props.items.filter(character=>character.name.toLowerCase().includes(searchText.toLowerCase()))

    function onSearch(event: ChangeEvent<HTMLInputElement>){
        setSearchText(event.target.value)
    }

    return (
        <>
            <header className="gallery_header"><h2>Gallery</h2><input type="search" placeholder="Search" value={searchText} onChange={onSearch}/></header>

            {searchCharacters.length === 0 ?
                <h2>Leider kein Eintrag gefunden...</h2>
                :
                searchCharacters.map(item => <Card key={item.id} newItem={item}/>) }
        </>

    )
}