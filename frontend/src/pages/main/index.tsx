import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar";
import { CharityCard } from "../../components/charityCard";
import charitiesData from "../../assets/data/charities.json";
import {
    Button,
    Input,
  } from "@material-tailwind/react";


const Main = (): JSX.Element => {
    const navigate = useNavigate()

    return (
        <div className="flex bg-gray-50">
            <aside className="h-screen sticky top-0">
                <Sidebar />
            </aside>
            
            <div className="flex-grow overflow-y-auto flex flex-wrap justify-center" >

                <div className="my-6 w-4/12 mb-4">
                    <div className="relative">
                        <Input
                            type="search"
                            color="black"
                            label="Type here..."
                            className="pr-20"
                            containerProps={{
                            className: "min-w-[288px]",
                            }}
                        />
                        <Button
                            size="sm"
                            color="black"
                            className="!absolute right-1 top-1 rounded"
                        >
                            Search
                        </Button>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center">
                    {charitiesData.map(charity => (
                        <CharityCard 
                            title={charity.title} 
                            description={charity.description} 
                            imageSrc={charity.imageSrc} 
                        />
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Main;