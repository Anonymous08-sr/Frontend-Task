import "./styles.css";
import './fonts/DINPro/D-DIN-PRO-700-Bold.otf';
import './fonts/DINPro/D-DIN-PRO-500-Medium.otf';

import College from "./components/College";
import { useState } from "react";
import { collegeData } from "./data/collegeData";
import Loader from "react-loader-spinner";
import { resolveAfterFewSeconds } from "./components/utils";

export default function App() {
  const [count, setCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const increaseCount = async () => {
    if (count < collegeData.colleges.length) {
      setIsLoading(true);
      await resolveAfterFewSeconds(2000);
      setCount((c) => c + 5);
      setIsLoading(false);
    }
  };
  return (
    <div className="home">
      <span className="heading Text-Style-5">Colleges in North India</span>
      <div className="college-cards">
        {collegeData.colleges.slice(0, count).map((college, idx) => (
          <College
            key={college.college_name}
            college={college}
            count={count}
            isLast={count - 1 === idx}
            increaseCount={increaseCount}
          />
        ))}
      </div>
      {isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={80}
          width={80}
          visible={isLoading}
          className="loader"
        />
      )}
    </div>
  );
}
