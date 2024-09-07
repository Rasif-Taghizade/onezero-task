// import menuImage from ''
/* eslint-disable react/prop-types */
const CategoryCard = ({ itemData }) => {
    console.log(itemData)
    return (
        <div className="category__card">
            <img src='/menu.svg' alt="" className="category__card-image" />
            <p className="category__card-title">{itemData.name[0].value}</p>
            <div className="category__card-price">
                ₼ {itemData.priceSell}
            </div>
        </div>
    )
}

export default CategoryCard