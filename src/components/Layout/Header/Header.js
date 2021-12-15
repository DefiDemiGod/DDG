import React from "react";
import styled from "styled-components";

import walletLogo from './../../../assets/images/wallet.png';
import diamondLogo from './../../../assets/images/diamond.png';
import { variables } from "../../../assets/styles/variables";

const HeaderContainer = styled.div`
	position: absolute;
    right: 6rem;
    top: 4rem;
    z-index: 1;

    ul{
        margin-top: 1rem;

        li{
            list-style: none;
            display: inline-flex;
            margin-left: 3rem;

            a{
                cursor: pointer;
                display: inline-flex;
                align-items: center;

                img{
                    width: 2.5rem;
                }

                strong{
                    color: ${variables.GREY_COLOR};
                    font-weight: 600;
                    font-size: 1.6rem;
                    margin-left: 1rem;
                }
            }
        }
    }
`;

const Header = () => (
	<HeaderContainer>
		<ul>
			<li>
                <a>
                    <img src={walletLogo} />
                    <strong>120 AURA</strong>
                </a>
			</li>

            <li>
                <a>
                    <img src={diamondLogo} />
                </a>
			</li>
		</ul>
	</HeaderContainer>
);

export default Header;
