import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar";
import charitiesData from "../../assets/data/charities.json";
import { useState } from "react";
import { LineChart, Card, BarList } from "@tremor/react";
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
    "2024": 160,
  },
  {
    date: "Feb",
    "2022": 125,
    "2023": 110,
    "2024": 140,
  },
  {
    date: "Mar",
    "2022": 156,
    "2023": 149,
    "2024": 65,
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
    "2022": 174,
    "2023": 125,
  },
  {
    date: "Jul",
    "2022": 134,
    "2023": 115,
  },
  {
    date: "Aug",
    "2022": 114,
    "2023": 145,
  },
  {
    date: "Sep",
    "2022": 94,
    "2023": 145,
  },
  {
    date: "Oct",
    "2022": 154,
    "2023": 175,
  },
  {
    date: "Nov",
    "2022": 144,
    "2023": 125,
  },
  {
    date: "Dec",
    "2022": 174,
    "2023": 135,
  },
];

const charityData = [
  {
    name: "Books For All",
    value: 1015,
  },
  {
    name: "Green Earth Initiative",
    value: 620,
  },
  {
    name: "Save the Whales",
    value: 400,
  },
  {
    name: "Tech for Tomorrow",
    value: 320,
  },
];

const DonorDashboard = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gray-50">
      <aside className="h-screen sticky top-0">
        <Sidebar />
      </aside>

      <div className="flex-grow overflow-y-auto flex flex-wrap flex-col">
        <div className="w-full max-w-screen-xl rounded-xl h-fit border-slate-200 mx-3 mt-4 bg-white p-8 border">
          <div className="text-2xl font-bold text-black mb-2 text-center">
            Historical Monthly Donations
          </div>
          <LineChart
            className="h-72"
            data={chartdata}
            index="date"
            categories={["2022", "2023", "2024"]}
            colors={["blue-700", "green-100", "red-100"]}
            yAxisWidth={30}
          />
        </div>

        <div className="flex">
          <Card className="mx-auto max-w-xl my-6 max-h-80">
            <div className="text-2xl font-bold text-black mb-2 text-center">
              Lifetime Contributions
            </div>
            <p className="mt-4 mb-5 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
              <span>Organization</span>
              <span>Total Amount ($)</span>
            </p>
            <BarList data={charityData} className="mt-2" color="green-100" />
          </Card>

          <Card className="mx-auto max-w-lg my-6 max-h-80">
            <div className="text-2xl font-bold text-black mb-2 text-center">
              Recent Transactions
            </div>
            <List>
              <ListItem>
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="candice"
                    src="/charityImages/booksforall.jpeg"
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Books for All
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    $60 - March 11, 2024
                  </Typography>
                </div>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="alexander"
                    src="/charityImages/greenearth.jpeg"
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Green Earth Initiative
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    $25 - February 25, 2024
                  </Typography>
                </div>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="emma"
                    src="/charityImages/feedthefuture.jpeg"
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Feed the Future
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    $100 - February 6, 2024
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

export default DonorDashboard;
