import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutLink from "./components/AboutLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <FeedbackProvider>
        <Router>
          <Link to="/" className="headerlink"><Header /></Link>
          <Routes>
            <Route path="/" element={<>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
              <AboutLink />
            </>} />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      </FeedbackProvider>
    </>
  );
}

export default App;