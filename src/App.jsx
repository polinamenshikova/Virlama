import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import RecipePage from "./components/RecipePages/RecipePage";
import AllRecipesPage from "./components/RecipePages/AllRecipesPage";

import BeautyPage from "./components/BeautyPages/BeautyPage";
import BeautyPage_1 from "./components/BeautyPages/BeautyPage_1";
import BeautyPage_2 from "./components/BeautyPages/BeautyPage_2";
import BeautyPage_3 from "./components/BeautyPages/BeautyPage_3";
import BeautyPage_4 from "./components/BeautyPages/BeautyPage_4";
import BeautyPage_5 from "./components/BeautyPages/BeautyPage_5";
import BeautyPage_6 from "./components/BeautyPages/BeautyPage_6";

import LifeStylePage from "./components/LifeStylePages/LifeStylePage";
import LifeStylePage_6 from "./components/LifeStylePages/LifeStylePage_6";
import LifeStylePage_5 from "./components/LifeStylePages/LifeStylePage_5";
import LifeStylePage_1 from "./components/LifeStylePages/LifeStylePage_1";
import LifeStylePage_2 from "./components/LifeStylePages/LifeStylePage_2";
import LifeStylePage_3 from "./components/LifeStylePages/LifeStylePage_3";
import LifeStylePage_4 from "./components/LifeStylePages/LifeStylePage_4";

import DecorPage from "./components/DecorPages/DecorPage";
import DecorPage_6 from "./components/DecorPages/DecorPage_6";
import DecorPage_1 from "./components/DecorPages/DecorPage_1";
import DecorPage_2 from "./components/DecorPages/DecorPage_2";
import DecorPage_3 from "./components/DecorPages/DecorPage_3";
import DecorPage_4 from "./components/DecorPages/DecorPage_4";
import DecorPage_5 from "./components/DecorPages/DecorPage_5";
import ChristmasDecorIdeas from "./components/DecorPages/ChristmasDecorIdeas";

import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/recipes" element={<RecipePage />} /> */}

        {/* Define dynamic routes for beauty pages */}
        <Route path="/beauty" element={<BeautyPage />} />
        <Route path="/beauty/1" element={<BeautyPage_6 />} />
        <Route path="/beauty/2" element={<BeautyPage_4 />} />
        <Route path="/beauty/3" element={<BeautyPage_5 />} />
        <Route path="/beauty/4" element={<BeautyPage_2 />} />
        <Route path="/beauty/5" element={<BeautyPage_1 />} />
        <Route path="/beauty/6" element={<BeautyPage_3 />} />
        {/* Add more BeautyPages if necessary */}

        {/* Define routes for lifestyle pages */}
        <Route path="/lifestyle" element={<LifeStylePage />} />
        <Route path="/lifestyle/1" element={<LifeStylePage_1 />} />
        <Route path="/lifestyle/2" element={<LifeStylePage_2 />} />
        <Route path="/lifestyle/3" element={<LifeStylePage_3 />} />
        <Route path="/lifestyle/4" element={<LifeStylePage_4 />} />
        <Route path="/lifestyle/5" element={<LifeStylePage_5 />} />
        <Route path="/lifestyle/6" element={<LifeStylePage_6 />} />

        {/* Define routes for decor pages */}
        <Route path="/decor" element={<DecorPage />} />
        <Route path="/decor/1" element={<DecorPage_6 />} />
        <Route path="/decor/2" element={<DecorPage_1 />} />
        <Route path="/decor/3" element={<DecorPage_2 />} />
        <Route path="/decor/4" element={<DecorPage_5 />} />
        <Route path="/decor/5" element={<DecorPage_4 />} />
        <Route path="/decor/6" element={<DecorPage_3 />} />
        <Route path="/decor/7" element={<ChristmasDecorIdeas />} />

        {/* Define routes for recipe pages */}
        <Route path="/recipes" element={<AllRecipesPage />} />
        <Route path="/recipes/:id" element={<RecipePage />} />

        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>

      <div className="mx-auto max-w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
