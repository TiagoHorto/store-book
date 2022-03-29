import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getBooksAddedToShoppingCart } from "../../../redux/selectors";
import Item from "./item/Item"
import S from "./styles";

const ListOfItens = () => {
    const { t } = useTranslation()
    let addedBooks = useSelector(getBooksAddedToShoppingCart);
    return (
        <S.Info>
            {addedBooks.length > 0 ? 
                    <>
                        {addedBooks.map(item => <Item key={item.id} item={item} />)} 
                    </> 
                : <S.Empty>{t("emptyBooks")}</S.Empty>}
        </S.Info>
    )
}

export default ListOfItens