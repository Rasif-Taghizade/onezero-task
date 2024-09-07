import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";

const MainContent = () => {
    // Redux-dan bütün data və seçilmiş kateqoriyanı götür
    const allData = useSelector((state) => state.data.allData);
    const selectedCategory = useSelector((state) => state.category.category);

    // Seçilmiş kateqoriyaya əsasən datanı filtr edən funksiya
    const filteredItems = () => {
        if (selectedCategory === "All") {
            return allData;  // "All" seçildikdə bütün məlumatlar gəlir
        } else {
            return allData.filter((item) => item.name[0].value === selectedCategory);  // Seçilən kateqoriyaya görə filterlənir
        }
    };

    const itemsToDisplay = filteredItems();

    return (
        <div className="main-content__container">
            {itemsToDisplay.length > 0 ? (
                <div>
                    {itemsToDisplay.map((item) => (
                        <div key={item.id}>
                            <h2 className="category__heading">{item.name[0].value}</h2>
                            <div className="category__items">{item.menuItems.map(item => {
                                return (
                                    <div key={item.id}>
                                        <CategoryCard itemData={item} />
                                    </div>
                                )
                            })}</div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No items available for this category.</p>
            )}
        </div>
    );
};

export default MainContent;
