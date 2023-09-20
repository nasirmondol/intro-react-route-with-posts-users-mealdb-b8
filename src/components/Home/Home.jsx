import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    // const location = useLocation()
    // console.log(location);
    const navigation = useNavigation();
    console.log(navigation);
    return (
        <div>
            <h2>This is Home component</h2>
            <Header></Header>
            {
                navigation.state === 'loading' ? <p>Loading...</p> : <Outlet></Outlet>
            }
        </div>
    );
};

export default Home;