import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Progress,
  Input,
} from "@material-tailwind/react";

interface CharityDonationInfo {
  name: string;
  amount: number | undefined;
}

const OrgPage = (): JSX.Element => {
  interface CheckoutSessionResponse {
    url: string;
  }

  interface CheckoutItem {
    id: number;
    quantity: number;
  }

  const items: CheckoutItem[] = [{ id: 1, quantity: 1 }];

  const [donationAmount, setDonationAmount] = useState("");

  const makePayment = (value: string) => {
    const info: CharityDonationInfo = {
      name: "ORG NAME",
      amount: Number(value),
    };

    const paymentInfo: CharityDonationInfo = {
      name: info.name,
      amount: info.amount ? info.amount * 100 : 0,
    };

    fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: items,
        info: paymentInfo,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then((response: CheckoutSessionResponse) => {
        window.location.href = response.url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <div className="flex">
      <Sidebar/>
      <Card className="mt-14 mr-10 w-100 rounded-none">
        <CardHeader color="blue-gray" className="relative h-64 w-100">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h2" color="blue-gray" className="mt-2">
            ORG TITLE
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2 ml-1">
            Location
          </Typography>
          <Typography className="ml-1 mb-4">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
          <Typography className="lead ml-1 mb-4">Open Since: 1968</Typography>
          <div className="flex">
            <div style={{ width: "60%" }}>
              <Typography variant="h4" color="blue-gray" className="mb-2 ml-1">
                More Info
              </Typography>
              <Typography className="ml-1 mb-10">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona. The place is close to Barceloneta
                Beach and bus stop just 2 min by walk and near to
                &quot;Naviglio&quot; where you can enjoy the main night life in
                Barcelona. The place is close to Barceloneta Beach and bus stop
                just 2 min by walk and near to &quot;Naviglio&quot; where you
                can enjoy the main night life in Barcelona.
              </Typography>
              <Typography variant="h5" color="blue-gray" className="ml-1 mb-4">
                Donation Goal: $100,000
              </Typography>
              <Progress value={70} color="green" className="h-4" />
            </div>
            <Card className="ml-28 flex flex-col pl-10 pr-10 pt-16 pb-16">
              <Typography variant="h4" color="blue-gray" className="ml-10 mb-6">
                Donate Now
              </Typography>
              <Input
                label="Donation Amount ($)"
                icon={<i className="fas fa-heart" />}
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
              <button
                className="mt-3 mb-1 py-2 px-4 rounded-md text-white font-bold bg-green-100 hover:bg-green-900"
                onClick={() => makePayment(donationAmount)}
              >
                Donate
              </button>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default OrgPage;

//Image
//Name
//Location
//Since
//Extra Info
//Progress Bar
//Donate