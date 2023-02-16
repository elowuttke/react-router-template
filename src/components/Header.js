import { StyledHeader, StyledButton } from "../style";
import { useNavigate } from "react-router-dom";
import {
  goToHomepage,
  goToLogin,
  goToProfile,
} from "../routes/coordinator";

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHomepage(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => goToProfile(navigate, "Conway")}>
        Ir para página de perfil
      </StyledButton>
      <StyledButton onClick={() => goToLogin(navigate)}>
        Ir para página de login
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
