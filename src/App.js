import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./user/Landing";
import AdminLogin from "./admin/AdminLogin";
import PickUpAndDrop from "./user/car-pickup-and-drop/PickUpAndDrop";
import SignatureForm from "./user/car-pickup-and-drop/SignatureForm";
import AdvancePayment from "./user/payment-type/AdvancePayment";
import FinalPayment from "./user/payment-type/FinalPayment";
import PaymentMain from "./user/payment-type/PaymentMain";
import Cancellation from "./user/Cancellation";
import CarArraival from "./user/CarArraival";
import Confirmation from "./user/Confirmation";
import History from "./user/History";
import Search from "./user/Search";
import UserLogin from "./user/UserLogin";
import CarManagment from "./admin/CarManagment";
import Dashboards from "./admin/Dashboards";
import FindMyCar from "./admin/FindMyCar";
import Revenue from "./admin/Revenue";
import { Children, useState } from "react";
import MyContext from "./Context";

function App() {
  const [value, setValue] = useState("Nandan");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      <button onClick={() => setValue("Rahul")}>Change</button>

      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" Component={Landing}></Route>
            <Route
              path="/car-pickup-and-drop-main"
              Component={PickUpAndDrop}
            ></Route>
            {/*User Routes below */}
            <Route path="/signature-form" Component={SignatureForm}></Route>
            <Route path="/advance-payment" Component={AdvancePayment}></Route>
            <Route path="/final-payment" Component={FinalPayment}></Route>
            <Route path="/payment-main" Component={PaymentMain}></Route>
            <Route path="/cancellation" Component={Cancellation}></Route>
            <Route path="/car-arrival" Component={CarArraival}></Route>
            <Route path="/comfirmation" Component={Confirmation}></Route>
            <Route path="/history" Component={History}></Route>
            <Route path="/search" Component={Search}></Route>
            <Route path="/user-login" Component={UserLogin}></Route>
            {/*Admin Routes below */}
            <Route path="/admin-login" Component={AdminLogin}></Route>
            <Route path="/car-management" Component={CarManagment}></Route>
            <Route path="/dashnoards" Component={Dashboards}></Route>
            <Route path="/find-my-car" Component={FindMyCar}></Route>
            <Route path="/revenue" Component={Revenue}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
