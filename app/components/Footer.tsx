
"use client";

import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { SiImessage } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export const Footer = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<
    { sender: "You" | "AI"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const callGemini = async () => {
    if (!prompt.trim()) return;


    setMessages((prev) => [...prev, { sender: "You", text: prompt }]);
    setLoading(true);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const body = await res.json();

    
      setMessages((prev) => [...prev, { sender: "AI", text: body.text }]);
      setPrompt(""); 
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Menubar className="flex justify-end mb-10 mr-10">
      <MenubarMenu>
        <MenubarTrigger>
          <SiImessage size={32} />
        </MenubarTrigger>

        <MenubarContent className="p-4 w-[380px] mr-10 rounded-xl">
          <div className="text-2xl font-semibold mb-3">Chat assistant</div>


          <div className="h-[330px] w-full overflow-y-scroll border p-2 rounded-xl bg-gray-50 text-sm flex flex-col gap-2">
            {messages.length === 0 ? (
              <p className="text-gray-400">No messages yet...</p>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={msg.sender === "You" ? "text-right" : "text-left"}
                >
                  <span
                    className={
                      msg.sender === "You"
                        ? "bg-blue-200 p-2 rounded-lg"
                        : "bg-gray-200 p-2 rounded-lg"
                    }
                  >
                    <strong>{msg.sender}: </strong>
                    {msg.text}
                  </span>
                </div>
              ))
            )}
          </div>

         
          <div className="flex gap-2 mt-3">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="border p-2 w-full rounded-2xl"
              placeholder="Type here..."
            />

            <Button onClick={callGemini} >
              {loading ? 
              <div  className="flex gap-1">
                <Spinner/>
                 Sending...
              </div>
              : <FiSend />}
            </Button>
          </div>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
