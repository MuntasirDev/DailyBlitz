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
      Dr. Muhammad Yunus Calls for Social Business Initiatives to Combat Poverty &nbsp;&nbsp;|&nbsp;&nbsp;BNP Announces Mass Protests Against Government Policies &nbsp;&nbsp;|&nbsp;&nbsp;
      Bangladesh's Export Earnings Show Strong Growth in Q1 2025
      &nbsp;&nbsp;|&nbsp;&nbsp; Foreign Investment in Bangladesh Reaches Record
      High in Fiscal Year 2024-25 &nbsp;&nbsp;|&nbsp;&nbsp; Government Announces
      New Incentives for Small and Medium Enterprises (SMEs)
      &nbsp;&nbsp;|&nbsp;&nbsp; E-commerce Sector in Bangladesh Sees Rapid
      Expansion Amidst Digital Adoption &nbsp;&nbsp;|&nbsp;&nbsp; Renewable
      Energy Sector Attracts Growing Investor Interest in Bangladesh
      &nbsp;&nbsp;|&nbsp;&nbsp; BIDA and Tech Mahindra Partner to Attract
      Foreign Investment in Tech Sector &nbsp;&nbsp;|&nbsp;&nbsp; Elon Musk's
      Starlink Receives Operational License in Bangladesh, Trials Begin
      &nbsp;&nbsp;|&nbsp;&nbsp; Bangladesh Launches National AI Strategy
      Focusing on Ethical Development and Application. &nbsp;&nbsp;|&nbsp;&nbsp;
      Bangladesh Making Strides in 5G Network Rollout Across Major
      Cities.&nbsp;&nbsp;|&nbsp;&nbsp; Local Tech Startups Secure Funding for
      Innovative AI and IoT Solutions Messi’s Brilliance Secures Argentina’s
      Stunning Victory Over France in a Legendary World Cup Final
      &nbsp;&nbsp;|&nbsp;&nbsp; European Football Clubs Secures Major
      Sponsorship Deal for Upcoming Season! &nbsp;&nbsp;|&nbsp;&nbsp;
      Researchers Develop Innovative Biodegradable Packaging Material from Jute
      Fibers
    </marquee>
  </div>
);

export default LatestNews;
