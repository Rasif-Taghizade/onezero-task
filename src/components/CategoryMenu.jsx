import axios from "axios"
import Button from "./Button"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/slices/CategorySlice";
import { setAllData } from "../store/slices/AllDataSlice";

const CategoryMenu = () => {
    const selectedCategory = useSelector((state) => state.category.category);
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);

    const listUniqueCategories = async () => {
        try {
            const response = await axios.get("http://localhost:5000/menu.json");
            const { data } = response.data;
            dispatch(setAllData(data.categories))
            setCategories(data.categories)
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    // Seçilən kateqoriyaya görə elementləri filtr edirik
    const handleCategorySelect = (categoryName) => {
        dispatch(setCategory(categoryName));
    };

    useEffect(() => {
        listUniqueCategories();
    }, []);

    return (
        <div className="category__container">
            <Button label='All' onClick={() => handleCategorySelect("All")} className={selectedCategory === "All" ? "primary" : "secondary"} />
            {
                categories.map((category) => {
                    return (
                        <Button label={category.name[0].value} onClick={() => handleCategorySelect(category.name[0].value)} className={selectedCategory === category.name[0].value ? "primary" : "secondary"} key={category.id} />
                    )
                })
            }
        </div>
    )
}

export default CategoryMenu