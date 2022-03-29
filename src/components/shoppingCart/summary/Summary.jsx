import { Euro } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getTotalAmountToPay } from "../../../redux/selectors";
import S from "./styles";

const Summary = () => {
    const { t } = useTranslation()
    const total = useSelector(getTotalAmountToPay)
    return (
        <S.SummaryContainer>
            <S.SummaryTitle>{t("orderSummary")}</S.SummaryTitle>
            <S.SummaryItem>
                <S.SummaryItemText>{t("subtotal")}</S.SummaryItemText>
                <S.SummaryItemPrice><Euro fontSize="small" /> {total.totalAmountToPay.toFixed(2)}</S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem>
                <S.SummaryItemText>{t("shipping")}</S.SummaryItemText>
                {total.totalAmountToPay.toFixed(2) < total.shippingLimit ? 
                    <S.SummaryItemPrice><Euro fontSize="small" /> {total.shipping}</S.SummaryItemPrice>
                    : 
                    <S.SummaryItemPrice>{t("freeCosts")}</S.SummaryItemPrice>
                }
            </S.SummaryItem>
            <S.SummaryItem type="total">
                <S.SummaryItemText>{t("total")}</S.SummaryItemText>
                {total.totalAmountToPay.toFixed(2) < total.shippingLimit ? 
                <S.SummaryItemPrice><Euro fontSize="small" /> {(+total.shipping + +total.totalAmountToPay).toFixed(2)} </S.SummaryItemPrice>
                :
                <S.SummaryItemPrice><Euro fontSize="small" /> {total.totalAmountToPay.toFixed(2)} </S.SummaryItemPrice>   }
            </S.SummaryItem>
            <S.Button>{t("checkout")}</S.Button>
        </S.SummaryContainer>
    )
}

export default Summary