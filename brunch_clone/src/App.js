/* eslint-disable prettier/prettier */
import logo from "./logo.svg";
import "./main.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [position, setPosition] = useState("absolute");
  const [visibility, setVisibility] = useState("visible");
  const [progressbar, setProgressBar] = useState(0);

  const updateScroll = () => {
    if (window.scrollY > window.visualViewport.height) {
      setPosition("fixed");
    } else {
      setPosition("absolute");
    }
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    setProgressBar(
      Math.ceil(
        (window.scrollY / (document.body.scrollHeight - window.outerHeight)) *
          100
      )
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  return (
    <div>
      <Menu position={position} visibility={visibility}>
        <MenuBar>
          <MenuIcon
            fontSize="large"
            sx={{ color: position === "fixed" ? "black" : "white" }}
          />
        </MenuBar>

        <ProgressBar>
          <Progress width={progressbar}></Progress>
        </ProgressBar>
      </Menu>

      <div className="main_img_wrap">
        <img
          className="main_img"
          alt=""
          src="https://images.unsplash.com/photo-1669604120699-eeba651ac235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
      </div>
      <div className="content_wrap">
        <pre className="content">
       
          꽃이 끓는 풀이 사랑의 놀이 청춘 바이며, 힘있다. 
          피가 뼈 커다란 남는 갑
          생생하며, 이 사람은 그들은 그리하였는가? 
          모래뿐일 피고, 같은 따뜻한
          오아이스도 같지 가치를 끓는다. 그들의 피가 끓는 때까지 할지니, 낙원을
          날카로우나 철환하였는가? 심장은 열락의 같이 때문이다. 지혜는 가지에
          인류의 작고 봄바람을 역사를 없으면, 싶이 말이다. 이상, 열매를 피가
          맺어, 우는 앞이 그림자는 힘차게 봄바람이다. 있는 갑 없으면,
          봄바람이다. 위하여 눈에 크고 수 모래뿐일 할지니, 맺어, 기관과 창공에
          황금시대다. 청춘 살 인생을 것이 생의 청춘의 이것이다. 얼마나 피고,
          있는 피고 피는 붙잡아 위하여 새가 약동하다. 봄날의 천하를 낙원을
          인간의 하는 아니더면, 것은 것이다. 예가 가는 이것을 길을 대중을 보이는
          인간은 찬미를 기쁘며, 뿐이다. 얼음에 힘차게 것은 무엇을 실현에 같이,
          있는 것이다. 것은 가슴에 용감하고 것이다.보라, 목숨이 작고 위하여서,
          얼음 사막이다. 곳으로 곳이 따뜻한 듣기만 이상, 힘있다. 가장 얼마나
          창공에 용감하고 귀는 풀밭에 그들을 얼음 것이다. 불러 너의 피에 인생을
          실현에 공자는 그들은 것이다. 주며, 우리의 미묘한 지혜는 그들에게
          영원히 이것이다. 보배를 못할 만물은 거선의 낙원을 작고 칼이다. 대한
          군영과 쓸쓸한 그러므로 용감하고 있는 방황하여도, 끓는다. 능히 그림자는
          눈이 말이다. 피부가 생명을 어디 풍부하게 힘있다. 불러 인간은 뼈
          봄바람이다. 뜨거운지라, 봄바람을 풀밭에 살 보이는 길지 예수는 그러므로
          열매를 사막이다. 풀이 찾아다녀도, 위하여 것이다. 자신과 우리의 품었기
          맺어, 바이며, 아니더면, 위하여 우리는 아니다. 얼음에 어디 주며, 얼음
          긴지라 그들의 부패뿐이다.
        </pre>
      </div>
    </div>
  );
}

const Menu = styled.div`
  background-color: ${(props) =>
    props.position === "fixed" ? "white" : "none"};
  z-index: 10;
  position: ${(props) => props.position};
  width: 100vw;
  top: 0;
  visibility: ${(props) => props.visibility};
  opacity: 0.7;
`;

const MenuBar = styled.div`
  padding: 20px;
`;
const ProgressBar = styled.div`
  height: 2px;
`;
const Progress = styled.span`
  background: black;
  width: ${(props) => props.width}%;
  display: block;
  height: 2px;
`;
export default App;
