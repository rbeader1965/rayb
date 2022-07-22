import Item from "./item"
import { TOURS,RECIPES,POKER,WORK} from './Menu'
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item Links={TOURS} title="TOURS" />
        <Item Links={RECIPES} title="RECIPES" />
        <Item Links={POKER} title="POKER" />
        <Item Links={WORK} title="WORK" />
    </div>
  )
}

export default ItemsContainer