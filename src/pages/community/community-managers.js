import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import CommunityManagers from "../../sections/Community/CommunityManagers";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";


const ManagersPage = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <CommunityManagers />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default ManagersPage;

export const Head = () => {
  return <SEO title="Community Managers"
    description="Layer5 Community Managers have an innate drive to contribute to the community's prosperity and that of our individual contributors' prosperity."
  />;
};