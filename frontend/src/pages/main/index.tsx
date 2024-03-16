import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar";

const Main = (): JSX.Element => {
    const navigate = useNavigate()

    return (
        <div>
            {/* Sidebar */}
            <Sidebar />
        </div>
    );
};

export default Main;