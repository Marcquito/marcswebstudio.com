import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import Footer from "./footer/footer";
import List from "./list";
import Post from "./post";
import Page from "./pages/page";
import HomePage from "./pages/homepage";
import Jobs from "./pages/jobs";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import BootstrapCss from './styles/bootstrap.css';
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(BootstrapCss)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>
      
      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <HomePage when={data.isHome} />
          <Jobs when={data.isAwsmJobOpenings} />
          <Page when={data.isPage} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <FooterContainer>
        <Footer/>
      </FooterContainer>      
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Comfortaa:300,400,700|Roboto&display=swap');
  :root {
    --brand: #333333;
    --mwsblue: #667eea;
    --black: #000000;
    --white: #ffffff;
    --bodycolor: #343434;
  }
  body {
    margin: 0;
    color:var(--bodycolor);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-feature-settings: "kern";
    -webkit-font-smoothing: antialiased;
    min-height: -webkit-fill-available;
  }
  html {
    height: -webkit-fill-available;
  },
  p a{
    padding: 0 1px!important;
  }
  a,
  a:visited {  
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
    color:var(--mwsblue);
  }
  h1{
    font-size: 4em;
  }
  p {
    line-height:24px;
  }
  // #root {
  //   display:flex;
  //   flex-direction: column;
  //   height: auto;
  // }
  .container {
    max-width: 1200px;
    width:100%;
    margin: 0 auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
  }
  .section{
    padding: 34px 0;
    @media (min-width: 992px) {
      padding: 50px 0;
    }
  }
  .marcs-main-button-blue {
    border-radius: 50px!important;
    border: 2px solid #fff!important;
    color: #fff;
    background-color: #667eea;
    width: 100%;
    background-size: 120% 100%;
    transition: all .4s ease-in-out;
    margin: 3px 0;
    padding: 8px 8px;
}
/* Gravity Forms */
#gform_fields_1,{
  list-style-type: none;
}
#gform_1{
  box-shadow: 0px 10px 20px -10px #000;
  background-image: linear-gradient(to right,#667eea,#764ba2,#6B8DD6,#8E37D7);
  -webkit-background-size: 584% 100%;
  background-size: 584% 100%;
  padding: 10px 0;
  border-radius: 10px;
}
#gform_1 label{
  display: none;
}
#gform_1 li{
  padding: 10px 0;
}

// For any images in a li
li img{
  max-width: 400px!important;
  height: auto!important;
  position: relative!important;
  border-radius: 10px;
  box-shadow: 0px 0px 25px -2px #667eea;
  margin: 30px 0!important;
}
li span{
  padding-bottom: 0!important;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  h1{
    font-size: 3em!important;
  }
  h2{
    font-size: 1.5em!important;
  }
}
`;

const HeadContainer = styled.div`
  display: flex;
  width:100%;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 1rem;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom:1.5rem;

  position: fixed;
  z-index: 999;
  background: rgb(255 255 255 / 90%);

`;
const FooterContainer = styled.div`
  width:100%;
  //background:var(--brand);
  background-image: radial-gradient( circle farthest-corner at 10% 20%, rgba(10,10,10,1) 0%, rgba(51,51,51,1) 81.3% );
  //margin-top: auto;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background: #f9f9f9;
`;
