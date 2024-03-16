import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import Stripe from "stripe";
import { OpenAI } from "openai";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY as string);
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });

interface StoreItem {
  priceInCents: number;
  name: string;
}

const storeItems: Map<number, StoreItem> = new Map([
  [1, { priceInCents: 10000, name: "Test #1" }],
  [2, { priceInCents: 20000, name: "Test #2" }],
]);

app.post("/create-checkout-session", async (req: Request, res: Response) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(
        (item: { id: number; quantity: number }) => {
          const storeItem = storeItems.get(item.id);
          if (!storeItem) {
            throw new Error("Item not found.");
          }
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: req.body.info.name,
              },
              unit_amount: req.body.info.amount,
            },
            quantity: item.quantity,
          };
        }
      ),
      success_url: `http://localhost:5173/`,
      cancel_url: `http://localhost:5173/`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

app.post("/gpt-query", async (req: Request, res: Response) => {
  const prompt: string = req.body.prompt;
  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  res.json({
    output: result.choices[0].message.content,
  });
});

app.listen(3000, () => console.log("Server started on port 3000"));
