import { useState } from "react";
import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const Modal = ({ data, closeModalOnOverlayClick }) => {
    const [count, setCount] = useState(0)
    const selectedCategory = useSelector((state) => state.category.category);

    return (
        <div className="modal">
            <div className="overlay" onClick={closeModalOnOverlayClick}></div>
            <div className="modal__inner">
                <div className="modal__image">
                    <img src="/modal_image.png" alt="image" />
                </div>
                <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                    <p className="modal__content-title">{data.name[0].value}</p>
                    <p className="modal__content-category">{selectedCategory}</p>
                    <p className="modal__content-price">₼ {data.priceSell}</p>
                    <div className="modal__content-counter">
                        <button className="increment" onClick={() => setCount(count - 1)}>-</button>
                        <span>{count}</span>
                        <button className="decrement" onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    <ul className="modal__content-description">
                        <li>Amount: {data.amount}</li>
                        <li>Calories: {data.calories}</li>
                        <li>PriceCost: {data.priceCost}</li>
                        <li>Place in the list: {data.placeInTheList}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Modal