import React from "react";

export default function MainContent(){
  return (
    <div className="main-content">
      <h1>My awesome website in React</h1>
      <h2>Reasons I ❤️ React</h2>
      <ol className="love-react-list">
        <li>It's composable</li>
        <li>It's declarative</li>
        <li>It's a hireable skill</li>
        <li>It's actively maintained by skilled people</li>
      </ol>
    </div>
  )
}