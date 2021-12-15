import React from 'react';
import { variables } from '../assets/styles/variables';
import styled from "styled-components";

import BannerImg from './../assets/images/banner.png';
import archerLogo  from './../assets/images/archer.png';
import vanguardLogo  from './../assets/images/vanguard.png';
import footmanLogo from './../assets/images/footman.png';
import knightLogo from './../assets/images/knight.png';
import DropIcon from './../assets/images/drop.png';

const Heading = styled.main`
	color: ${variables.WHITE_COLOR};
    font-size: 3rem;
    margin-top: 4rem;
`;

const UserStatus = styled.div`
    span{
        background-color: ${variables.GREEN_COLOR};
        display: inline-block;
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        margin-right: 0.6rem;
    }

    small{
        color: ${variables.GREY_COLOR_ONE};
        font-size: 1.6rem;
    }
`;

const Banner = styled.div`
    position: relative;
    margin-top: 4rem;
    
    img{
        max-width: 100%;
        min-width: 100%;
    }

    ul{
        position: absolute;
        display: flex;
        justify-content: space-between;
        left: 0;
        bottom: 10rem;
        width: 100%;

        li{
            display: flex;
            justify-content: center;
            width: 25%;

            a{
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                justify-content: center;
                padding: 1rem;
                min-width: 8rem;
                transition: 0.2s all ease-in;
                border: 2px solid transparent;

                &:hover{
                    border: 2px solid ${variables.WHITE_COLOR};
                    border-radius: 0.3rem;
                }

                img{
                    min-width: auto;
                    width: 2.6rem;
                    // margin-bottom: 1.8rem;
                }

                span{
                    color: ${variables.WHITE_COLOR};
                    font-size: 2.6rem;
                    display: none;
                }
            }
        }
    }
`;

const DropArrow = styled.div`
    position: absolute;
    text-align: center;
    bottom: 3rem;
    width: 100%;

    a{
        cursor: pointer;

        img{
            width: 6rem;
            min-width: auto;
            max-width: auto;
        }
    }
`;

const DemiGod = () => (
    <>
        <Heading>Demi God</Heading>
        <UserStatus>
            <span></span>
            <small>Active</small>
        </UserStatus>

        <Banner>
            <img src={BannerImg}  />

            <div className="effect-character">
                <div className="hover-effect effect sub-b">
                    <span className="white-border"></span>
                </div>

                <div className="character-info">
                    <div>
                        <div>
                            <span>Class :</span>
                            <span>Standard</span>
                        </div>
                        <div>
                            <span>UID :</span>
                            <span>797748893</span>
                        </div>
                        <div>
                            <span>Name :</span>
                            <span>VANGUARD</span>
                        </div>
                        <div>
                            <span>Armor :</span>
                            <span>Yes</span>
                            </div>
                        <div>
                            <span>Hair :</span>
                            <span>Black</span>
                        </div>
                        <div>
                            <span>Warpaint :</span>
                            <span>Red</span>
                        </div>
                        <div>
                            <span>Eye color :</span>
                            <span>Brown</span>
                        </div>
                        <div>
                            <span>Element :</span>
                            <span>Ordinary</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="effect-character effect-character--second">
                <div className="hover-effect effect sub-b">
                    <span className="white-border"></span>
                </div>

                <div className="character-info">
                    <div>
                        <div>
                            <span>Class :</span>
                            <span>Standard</span>
                        </div>
                        <div>
                            <span>UID :</span>
                            <span>797748893</span>
                        </div>
                        <div>
                            <span>Name :</span>
                            <span>FOOTMAN</span>
                        </div>
                        <div>
                            <span>Armor :</span>
                            <span>Yes</span>
                            </div>
                        <div>
                            <span>Hair :</span>
                            <span>Black</span>
                        </div>
                        <div>
                            <span>Warpaint :</span>
                            <span>Red</span>
                        </div>
                        <div>
                            <span>Eye color :</span>
                            <span>Brown</span>
                        </div>
                        <div>
                            <span>Element :</span>
                            <span>Ordinary</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="effect-character effect-character--third">
                <div className="hover-effect effect sub-b">
                    <span className="white-border"></span>
                </div>

                <div className="character-info">
                    <div>    
                        <div>
                            <span>Class :</span>
                            <span>Standard</span>
                        </div>
                        <div>
                            <span>UID :</span>
                            <span>797748893</span>
                        </div>
                        <div>
                            <span>Name :</span>
                            <span>ARCHER</span>
                        </div>
                        <div>
                            <span>Armor :</span>
                            <span>Yes</span>
                            </div>
                        <div>
                            <span>Hair :</span>
                            <span>Black</span>
                        </div>
                        <div>
                            <span>Warpaint :</span>
                            <span>Red</span>
                        </div>
                        <div>
                            <span>Eye color :</span>
                            <span>Brown</span>
                        </div>
                        <div>
                            <span>Element :</span>
                            <span>Ordinary</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="effect-character effect-character--fourth">
                <div className="hover-effect effect sub-b">
                    <span className="white-border"></span>
                </div>

                <div className="character-info">
                    <div>    
                        <div>
                            <span>Class :</span>
                            <span>Standard</span>
                        </div>
                        <div>
                            <span>UID :</span>
                            <span>797748893</span>
                        </div>
                        <div>
                            <span>Name :</span>
                            <span>ARCHER</span>
                        </div>
                        <div>
                            <span>Armor :</span>
                            <span>Yes</span>
                            </div>
                        <div>
                            <span>Hair :</span>
                            <span>Black</span>
                        </div>
                        <div>
                            <span>Warpaint :</span>
                            <span>Red</span>
                        </div>
                        <div>
                            <span>Eye color :</span>
                            <span>Brown</span>
                        </div>
                        <div>
                            <span>Element :</span>
                            <span>Ordinary</span>
                        </div>
                    </div>
                </div>
            </div>

            <ul>
                <li>
                    <a>
                        <img src={archerLogo} />
                        <span>ARCHER</span>
                    </a>
                </li>

                <li>
                    <a>
                        <img src={vanguardLogo} />
                        <span>VANGUARD</span>
                    </a>
                </li>

                <li>
                    <a>
                        <img src={footmanLogo} />
                        <span>FOOTMAN</span>
                    </a>
                </li>

                <li>
                    <a>
                        <img src={knightLogo} />
                        <span>KNIGHT</span>
                    </a>
                </li>
            </ul>

            <DropArrow>
                <a>
                    <img src={DropIcon} />
                </a>
            </DropArrow>
        </Banner>
    </>
);

export default DemiGod;