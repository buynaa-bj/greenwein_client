import {CartProvider} from "@/context/CartContext";

export default function CardProvider({children}) {
    return <CartProvider>{children}</CartProvider>;
}
