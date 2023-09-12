import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Payment from "../components/Payment/Payment";


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/payment" element={<Payment />} /> 
            <Route path="/" element={<Home />} />

        </Routes>
    )
}

export default AppRoutes;