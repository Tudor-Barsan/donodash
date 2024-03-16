import { useNavigate } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
interface CharityCardProps {
    title: string;
    description: string;
    imageSrc: string;
}

export function CharityCard({ title, description, imageSrc }: CharityCardProps) {
const navigate = useNavigate();
return (
    <Card className="my-6 mx-8 w-72">
        <CardHeader floated={false} color="blue-gray" className="relative h-40">
            <img
            src={imageSrc}
            alt="charity-image"
            className="object-cover h-40 w-80"
            />
        </CardHeader>
        <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
            </Typography>
            <Typography>
                {description}
            </Typography>
        </CardBody>
        <CardFooter className="pt-0">
            <Button>Read More</Button>
        </CardFooter>
    </Card>
);
}