import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar";
import charitiesData from "../../assets/data/charities.json";
import { useState } from "react";
import { BarChart, Card, BarList } from "@tremor/react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card as MCard,
  Typography,
} from "@material-tailwind/react";

const chartdata = [
  {
    date: "Jan",
    "2022": 167,
    "2023": 145,
  },
  {
    date: "Feb",
    "2022": 125,
    "2023": 110,
  },
  {
    date: "Mar",
    "2022": 156,
    "2023": 149,
  },
  {
    date: "Apr",
    "2022": 165,
    "2023": 112,
  },
  {
    date: "May",
    "2022": 153,
    "2023": 138,
  },
  {
    date: "Jun",
    "2022": 124,
    "2023": 145,
  },
  {
    date: "Jul",
    "2022": 134,
    "2023": 145,
  },
  {
    date: "Aug",
    "2022": 94,
    "2023": 145,
  },
  {
    date: "Sep",
    "2022": 154,
    "2023": 185,
  },
  {
    date: "Oct",
    "2022": 124,
    "2023": 95,
  },
  {
    date: "Nov",
    "2022": 174,
    "2023": 135,
  },
  {
    date: "Dec",
    "2022": 124,
    "2023": 205,
  },
];

const countryData = [
  {
    name: "USA",
    value: 44,
    icon: function USAIcon() {
      return (
        <img
          src="/flags/usa.png"
          alt="flag-image"
          className="object-cover h-5 w-8 mr-2"
        />
      );
    },
  },
  {
    name: "Canada",
    value: 23,
    icon: function CanadaIcon() {
      return (
        <img
          src="/flags/canada.png"
          alt="flag-image"
          className="object-cover h-5 w-8 mr-2"
        />
      );
    },
  },
  {
    name: "Pakistan",
    value: 19,
    icon: function PakistanIcon() {
      return (
        <img
          src="/flags/pakistan.svg"
          alt="flag-image"
          className="object-cover h-5 w-8 mr-2"
        />
      );
    },
  },
  {
    name: "Brazil",
    value: 14,
    icon: function BrazilIcon() {
      return (
        <img
          src="/flags/brazil.png"
          alt="flag-image"
          className="object-cover h-5 w-8 mr-2"
        />
      );
    },
  },
];

const CharityDashboard = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gray-50">
      <aside className="h-screen sticky top-0">
        <Sidebar />
      </aside>

      <div className="flex-grow overflow-y-auto flex flex-wrap flex-col">
        <div className="w-full max-w-screen-xl rounded-xl h-fit border-slate-200 mx-3 mt-4 bg-white p-8 border">
          <div className="text-2xl font-bold text-black mb-2 text-center">
            Historical Monthly Earnings
          </div>
          <BarChart
            className="h-72"
            data={chartdata}
            index="date"
            categories={["2022", "2023"]}
            colors={["gray-400", "green-100"]}
            yAxisWidth={30}
          />
        </div>

        <div className="flex">
          <Card className="mx-auto max-w-xl my-6 max-h-80">
            <div className="text-2xl font-bold text-black mb-2 text-center">
              Top Donor Locations
            </div>
            <p className="mt-4 mb-5 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
              <span>Country</span>
              <span>% of Donors</span>
            </p>
            <BarList data={countryData} className="mt-2" color="green-100" />
          </Card>

          <Card className="mx-auto max-w-lg my-6 max-h-80">
            <div className="text-2xl font-bold text-black mb-2 text-center">
              Active Donors
            </div>
            <List>
              <ListItem>
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="candice"
                    src="https://docs.material-tailwind.com/img/face-1.jpg"
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    tania.andrew@gmail.com
                  </Typography>
                </div>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="alexander"
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Alexander Jones
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    alexjones@gmail.com
                  </Typography>
                </div>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="emma"
                    src="https://docs.material-tailwind.com/img/face-3.jpg"
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Emma Willever
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    emma.willever@gmail.com
                  </Typography>
                </div>
              </ListItem>
            </List>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CharityDashboard;
