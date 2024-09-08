
import { useState } from "react";
import Modal from "./Modal";

/* eslint-disable react/prop-types */
const CategoryCard = ({ itemData }) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    };

    // Overlay-ə klik edildikdə modalı bağla
    const closeModalOnOverlayClick = () => {
        setModal(false);
    };

    console.log(itemData)

    return (
        <div className="category__card" onClick={toggleModal}>
            <img src='/menu.svg' alt="" className="category__card-image" />
            <p className="category__card-title">{itemData.name[0].value}</p>
            <div className="category__card-price">
                ₼ {itemData.priceSell}
            </div>
            {
                modal && <Modal data={itemData} closeModalOnOverlayClick={closeModalOnOverlayClick} />
            }
        </div>
    )
}

export default CategoryCard