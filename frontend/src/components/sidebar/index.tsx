import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    PowerIcon,
    HomeIcon
} from "@heroicons/react/24/solid";
import donoDashLogo from '/donoDashLogo.png'
import { useNavigate, useLocation } from "react-router-dom";

export function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentType = location.pathname.split('/')[1];
    return (
        <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <img src={donoDashLogo} alt="DonoDash logo" className="mx-auto h-12 object-cover" />
            </div>
            <List>
                <ListItem onClick={() => navigate(`/${currentType}`)}>
                    <ListItemPrefix>
                        <HomeIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Home
                </ListItem>
                <ListItem onClick={() => navigate(`/${currentType}/dashboard`)}>
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Dashboard
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem onClick={() => navigate('/login')}>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}