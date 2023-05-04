import { SplashLogo, SplashContainer, SplashText } from "./styles";
import LogoSvg from "../../images/background/icon_E.png";
import { container, text } from "./animations";

export const SplashHeader = () => {
  return (
    <SplashContainer initial="initial" animate="animate" variants={container}>
      <SplashText variants={text}>
        <SplashLogo src={LogoSvg} alt="logo" />
      </SplashText>
    </SplashContainer>
  );
};
