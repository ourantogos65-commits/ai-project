import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export const POST = async (req: Request) => {
  const body =await req.json();
  const { prompt } =  body;
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(prompt, "prompt");
  return Response.json(result.text);
};
// const handleGenerate = async () => {
//   if (!title || !content) return alert("Please fill all fields");

//   try {
//     const res = await fetch("/api/articles", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title, content }),
//     });

//     if (!res.ok) throw new Error("Failed to save article");

//     const data = await res.json();
//     console.log("Article saved:", data);
//     alert("Article generated successfully!");
//     setTitle("");
//     setContent("");
//   } catch (err) {
//     console.error(err);
//     alert("Error generating article");
//   }
// };
  // const postArticles = async () => {
  //   const res = await fetch("/api/articles", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ title: "bil", content: "billi" }),
  //   });

  //   const data = await res.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   postArticles();
  // }, []);