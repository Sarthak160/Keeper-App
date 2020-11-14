import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function createNotes(noteItem) {
  return <Note
  key = {noteItem.key}
  title = {noteItem.title}
  content = {noteItem.content}
   />
}
function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
