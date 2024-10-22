import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import Header from './components/Header';
import Home from './components/Home';
import WhatWeDo from './components/WhatWeDo';
import ValuationTool from './components/ValuationTool';
import Careers from './components/Careers';
import JobApplication from './components/JobApplication';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/valuation" element={<ValuationTool />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/acquisition-officer" element={
              <JobApplication 
                title="Acquisition Officer" 
                description="Join our team as an Acquisition Officer and play a crucial role in identifying, evaluating, and acquiring high-potential SaaS companies to drive saasvest's portfolio growth."
                details={`
                  <h3 class="text-xl font-semibold mb-2">Responsibilities:</h3>
                  <ul class="list-disc pl-5 mb-4">
                    <li>Identify and evaluate potential SaaS acquisition targets</li>
                    <li>Conduct thorough due diligence on target companies</li>
                    <li>Develop financial models and valuation analyses</li>
                    <li>Negotiate deal terms and structure transactions</li>
                    <li>Collaborate with cross-functional teams to ensure smooth integration of acquired companies</li>
                  </ul>
                  <h3 class="text-xl font-semibold mb-2">Requirements:</h3>
                  <ul class="list-disc pl-5 mb-4">
                    <li>Bachelor's degree in Finance, Business, or related field</li>
                    <li>3+ years of experience in M&A, private equity, or investment banking</li>
                    <li>Strong financial modeling and valuation skills</li>
                    <li>Excellent analytical and problem-solving abilities</li>
                    <li>In-depth knowledge of the SaaS industry and market trends</li>
                  </ul>
                `}
              />
            } />
            <Route path="/careers/growth-marketeer" element={
              <JobApplication 
                title="Growth Marketeer" 
                description="Become our Growth Marketeer and lead the charge in developing and implementing innovative marketing strategies to drive user acquisition and retention for our portfolio of SaaS companies."
                details={`
                  <h3 class="text-xl font-semibold mb-2">Responsibilities:</h3>
                  <ul class="list-disc pl-5 mb-4">
                    <li>Develop and execute growth marketing strategies for SaaS products</li>
                    <li>Analyze user behavior and optimize conversion funnels</li>
                    <li>Manage and optimize paid acquisition channels (PPC, social media ads, etc.)</li>
                    <li>Implement and monitor A/B tests to improve marketing performance</li>
                    <li>Collaborate with product teams to enhance user onboarding and retention</li>
                  </ul>
                  <h3 class="text-xl font-semibold mb-2">Requirements:</h3>
                  <ul class="list-disc pl-5 mb-4">
                    <li>Bachelor's degree in Marketing, Business, or related field</li>
                    <li>3+ years of experience in growth marketing for SaaS or technology companies</li>
                    <li>Proficiency in marketing analytics tools and CRM systems</li>
                    <li>Strong data analysis and interpretation skills</li>
                    <li>Experience with SEO, content marketing, and email marketing</li>
                  </ul>
                `}
              />
            } />
            <Route path="/careers/administrative-assistant" element={
              <JobApplication 
                title="Administrative Assistant" 
                description="Join saasvest as an Administrative Assistant and play a vital role in supporting our team, ensuring smooth operations, and contributing to the success of our fast-paced private equity firm."
                details={`
                  <h3 class="text-xl font-semibold mb-2">Responsibilities:</h3>
                  <ul class="list-disc pl-5 mb-4">
                    <li>Manage calendars, schedule meetings, and coordinate travel arrangements</li>
                    <li>Prepare and edit correspondence, reports, and presentations</li>
                    <li>Handle incoming calls, emails, and visitors</li>
                    <li>Organize and maintain filing systems and databases</li>
                    <li>Assist with event planning and coordination</li>
                  </ul>
                  <h3 class="text-xl font-semibold mb-2">Requirements:</h3>
                  <ul class="list-disc pl-5 mb-4">
                    <li>Bachelor's degree in Business Administration or related field</li>
                    <li>2+ years of experience as an administrative assistant or similar role</li>
                    <li>Proficiency in Microsoft Office Suite and Google Workspace</li>
                    <li>Excellent organizational and time management skills</li>
                    <li>Strong written and verbal communication abilities</li>
                  </ul>
                `}
              />
            } />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="saasvest-cookie-consent"
          style={{ background: "#0043b3" }}
          buttonStyle={{ color: "#0043b3", background: "#ffffff", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    </Router>
  );
};

export default App;