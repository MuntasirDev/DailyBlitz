import React from "react";

const LatestNews = () => (
  <div className="flex items-center gap-5 bg-base-200 p-3">
    <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

    <marquee
      className="text-lg text-accent"
      behavior="scroll"
      direction="left"
      scrollamount="10"
      onMouseEnter={(e) => e.currentTarget.stop()}
      onMouseLeave={(e) => e.currentTarget.start()}
    >
      Match Highlights: Argentina 3-3 France — thrilling final went to penalty
      shootout! Argentina won 4-2 on penalties to claim the 2022 FIFA World Cup
      and are crowned World Champions! &nbsp;&nbsp;|&nbsp;&nbsp; Israel resumes
      airstrikes in Gaza Strip after ceasefire breakdown, with over 855+
      Palestinians killed in november 2025 offensive. &nbsp;&nbsp;|&nbsp;&nbsp;
      Palestinian leaders call for global pressure on Israel to reopen Gaza
      crossings and ease the humanitarian crisis. &nbsp;&nbsp;|&nbsp;&nbsp; UAE
      accused of backing Sudan’s RSF militia — Sudan alleges weapons, financial
      support fueling brutal conflict. &nbsp;&nbsp;|&nbsp;&nbsp; Russian drone
      strike hits Chernobyl nuclear site as Ukraine-Russia war intensifies.
      &nbsp;&nbsp;|&nbsp;&nbsp; Ukraine launches major drone offensive deep
      inside Russia, targeting key airbases in “Operation Spider’s Web.”
      &nbsp;&nbsp;|&nbsp;&nbsp; UN warns of catastrophic hunger in Gaza — nearly
      one in three people “not eating for days” amid siege.
      &nbsp;&nbsp;|&nbsp;&nbsp; Samsung launches new AI‑powered S25 smartphone,
      betting on Google Gemini + Qualcomm to compete with Apple.
    </marquee>
  </div>
);

export default LatestNews;
