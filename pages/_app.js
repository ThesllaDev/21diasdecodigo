import MainContainer from "../components/MainContainer";
import "../styles/_base.scss";

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}

export default MyApp;
