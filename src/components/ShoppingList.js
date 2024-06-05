import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem";
import * as PropTypes from "prop-types";


PlantItem.propTypes = {
    cover: PropTypes.any,
    light: PropTypes.any,
    name: PropTypes.any,
    id: PropTypes.any,
    water: PropTypes.any
};

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList