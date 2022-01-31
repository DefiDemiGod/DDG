import React, { useState } from "react";
import BattleWonModal from "./BattleWonModal/BattleWonModal";
import { Heading, Container, CardWrapper, Main, Divider } from "./Battle.style";
import ImgBattle from "../../assets/images/battle-white.png";
import DefaultBattle from "../../assets/images/battle1.png";

const Battle = () => {
  const [isModalOpen, setIsModalOpen] = useState("");

  const Planets = [
    {
      name: "Giants",
      successRate: 80,
      mp: 100,
    },
    {
      name: "Cyclops",
      successRate: 72,
      mp: 200,
    },
    {
      name: "Minotaur",
      successRate: 64,
      mp: 300,
    },
    {
      name: "Manticore",
      successRate: 56,
      mp: 400,
    },
    {
      name: "Talos",
      successRate: 48,
      mp: 500,
    },
    {
      name: "Medusa",
      successRate: 40,
      mp: 600,
    },
    {
      name: "Cerberus",
      successRate: 32,
      mp: 700,
    },
    {
      name: "Poseidon",
      successRate: 24,
      mp: 800,
    },
    {
      name: "Zeus",
      successRate: 16,
      mp: 900,
    },
  ];

  return (
    <>
      <Main>
        <Heading>Battle</Heading>
        <Container>
          <div className="battle-width">
            {Planets.map(({ name, mp, successRate }, inx) => (
              <CardWrapper bottom={inx % 2 ? true : false} key={inx}>
                <div className="box-wrapper">
                  <Divider>
                    <div className="circle">
                      <img src={ImgBattle} alt="icon" />
                    </div>
                    <hr className="divider" />
                  </Divider>
                  <h2 className="title">{name}</h2>
                  <h4 className="sub-title">({mp} MP Required)</h4>
                  <div className="details-wrapper">
                    <div className="leftside">
                      <div className="name">Aura</div>
                      <div className="description">Estimated Reward</div>
                    </div>
                    <div className="divider" />
                    <div className="rightside">
                      <div className="name">{successRate}%</div>
                      <div className="description">Total Success rate</div>
                    </div>
                  </div>
                  <div className="image-wrapper">
                    <img
                      src={
                        inx < 8
                          ? require(`../../assets/images/battle${inx + 1}.png`)
                              .default
                          : DefaultBattle
                      }
                      alt="Battle"
                    />
                  </div>
                  <div className="button-wrapper">
                    <button
                      onClick={() => setIsModalOpen(inx % 2 ? "WON" : "LOSS")}
                    >
                      Battle
                    </button>
                  </div>
                </div>
              </CardWrapper>
            ))}
            <Divider />
          </div>
        </Container>
      </Main>
      <BattleWonModal
        isOpen={isModalOpen ? true : false}
        onClose={() => setIsModalOpen("")}
        status={isModalOpen}
      />
    </>
  );
};

export default Battle;