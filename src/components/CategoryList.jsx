
import { CategoryItem } from "./CategoryItem"

function CategoryList({catalog = []}) {
    
    return ( 
        
    <div className="listen">
        {catalog.map(el => (
            <CategoryItem key={el.idCategory} {...el} />
        ))}
    </div> 
    )
}


export {CategoryList}