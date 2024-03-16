import {
  Button,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import donoDashLogo from "/donoDashLogo.png";
import donoBot from "/donoBot.png";
import { useNavigate, useLocation } from "react-router-dom";
import { FormEvent, useState } from "react";

interface MessageData {
  role: string;
  content: string;
}

export function Sidebar() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState<MessageData[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const location = useLocation();
  const currentType = location.pathname.split('/')[1];


  const chat = async (e: FormEvent<HTMLFormElement>, message: string) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);
    scrollTo(0, 1e10);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    setMessage("");
    fetch("http://localhost:3000/gpt-query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: chats[chats.length - 1].content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        msgs.push({ role: "assistant", content: data.output });
        setChats(msgs);
        console.log(msgs);
        setIsTyping(false);
        scrollTo(0, 1e10);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <img
          src={donoDashLogo}
          alt="DonoDash logo"
          className="mx-auto h-12 object-cover"
        />
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
        <ListItem >
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
        <ListItem onClick={() => navigate("/login")}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      <Card className="h-96 p-4 mt-8 overflow-y-auto">
        <img
          src={donoBot}
          alt="DonoBot logo"
          className="mx-auto h-8 object-cover mb-2"
        />
        <section>
          {chats && chats.length
            ? chats.map((chat, index) => (
                <p key={index} className="mb-2">
                  <span>
                    <b>{chat.role.toUpperCase()}</b>
                  </span>
                  <span>{": "}</span>
                  <span>{chat.content}</span>
                </p>
              ))
            : ""}
        </section>

        <div className={isTyping ? "" : "hide"}>
          <p>
            <i>{isTyping ? "Typing" : ""}</i>
          </p>
        </div>

        <form action="" onSubmit={(e) => chat(e, message)}>
          <input
            type="text"
            name="message"
            value={message}
            placeholder="Ask me about charities!"
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2"
          />
        </form>
      </Card>
    </Card>
  );
}
