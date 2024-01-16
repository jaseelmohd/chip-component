// App.js
import React from "react";
import TextBoxWithChips from "./components/TextBoxWithChips";
import "./App.css";

function App() {
  const data = [
    {
      id: 1,
      name: "John Smith",
      email: "johns@example.com",
      imageUrl: "avatar_1.png",
    },
    {
      id: 2,
      name: "Michael Johnson",
      email: "michaelj@example.com",
      imageUrl: "avatar_2.png",
    },
    {
      id: 3,
      name: "David Brown",
      email: "davidb@example.com",
      imageUrl: "avatar_3.png",
    },
    {
      id: 4,
      name: "Chris Davis",
      email: "chrisd@example.com",
      imageUrl: "avatar_4.png",
    },
    {
      id: 5,
      name: "Daniel Wilson",
      email: "danielw@example.com",
      imageUrl: "avatar_5.png",
    },
    {
      id: 6,
      name: "Emma Smith",
      email: "emmas@example.com",
      imageUrl: "avatar_6.png",
    },
    {
      id: 7,
      name: "Olivia Johnson",
      email: "oliviaj@example.com",
      imageUrl: "avatar_7.png",
    },
    {
      id: 8,
      name: "Ava Williams",
      email: "avaw@example.com",
      imageUrl: "avatar_8.png",
    },
    {
      id: 9,
      name: "Sophia Brown",
      email: "sophiab@example.com",
      imageUrl: "avatar_9.png",
    },
    {
      id: 10,
      name: "Isabella Miller",
      email: "isabellam@example.com",
      imageUrl: "avatar_10.png",
    }
  ];

  return (
    <div className="App">
      <h1>Pick Users</h1>
      <TextBoxWithChips data={data} />
    </div>
  );
}

export default App;
