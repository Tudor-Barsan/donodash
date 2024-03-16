import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar";
import { CharityCard } from "../../components/charityCard";
import charitiesData from "../../assets/data/charities.json";
import { useState } from 'react';
import {
    Button,
    Input,
  } from "@material-tailwind/react";


const Main = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCharities, setFilteredCharities] = useState(charitiesData);
    const navigate = useNavigate()

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value); 
        filterCharities(event.target.value);
    };

    const filterCharities = (query: string) => {
        const filtered = charitiesData.filter(charity =>
            charity.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCharities(filtered);
    };

    return (
        <div className="flex bg-gray-50">
            <aside className="h-screen sticky top-0">
                <Sidebar />
            </aside>
            
            <div className="flex-grow overflow-y-auto flex flex-wrap flex-col items-center" >
                <div className="my-6 w-4/12 mb-4 items-center">
                    <Input 
                        color="gray" 
                        label="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className="flex flex-wrap justify-center">
                    {filteredCharities.map(charity => (
                        <CharityCard 
                            id={charity.id}
                            title={charity.title} 
                            description={charity.description} 
                            rating={charity.rating}
                            imageSrc={charity.imageSrc} 
                        />
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Main;