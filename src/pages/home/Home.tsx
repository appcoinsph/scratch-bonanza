// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import "./style.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGame from "../../stores/useGame";
import Modal from "../../components/modal/Modal";
import MainButton from "../../components/mainButton/MainButton";
import HelpButton from "../../components/helpButton/HelpButton";

export const Home = () => {
  const navigate = useNavigate();
  const { modal, resetRevealed, setPhase } = useGame();

  useEffect(() => {
    setPhase("ready");
    resetRevealed();
  }, []);

  const handlePlay = () => {
    navigate("/play");
  };

  return (
    <div className="home-page">
      <div className="home-page-logo" />
      <iframe src="https://roaring-dodol-d54c59.netlify.app/" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="400px" width="600px" allowfullscreen></iframe>
   
      <MainButton handleClick={handlePlay} text="PLAY" />
      <HelpButton />
      <div className="copyright">© 2024 Echozoneph.online
      </div>
      {modal && <Modal />}
    </div>
  );
};


 
