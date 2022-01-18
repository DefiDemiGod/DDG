/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useState } from "react";
import cn from "classnames";
import BgPatternSmall1 from "./../../assets/images/bg-pattern-s-1.png";
import BgPatternLarge1 from "./../../assets/images/bg-pattern-l-1.jpeg";
import BgPatternSmall2 from "./../../assets/images/bg-pattern-s-2.png";
import BgPatternLarge2 from "./../../assets/images/bg-pattern-l-2.jpeg";
import DropIcon from "./../../assets/images/drop.png";
import addIcon from "./../../assets/images/add.png";
import characterOne from "./../../assets/images/character-2.png";
import characterTwo from "./../../assets/images/character-1.png";
import characterThree from "./../../assets/images/character-3.png";
import {
	Heading,
	UserStatus,
	Banner,
	DropArrow,
	HeaderDetails,
	ChooseBackground,
	CharacterInfo,
	SliderDiv
} from "./DemiGod.style";
import Slider from "react-slick";

import CharacterItem from "../../components/CharacterItem";
import { charterList } from "../../utils/seed.constants";

const backgroundTypeEnum = {
	One: 1,
	Two: 2,
};

const backgroundTypeList = [
	{
		id: 1,
		type: backgroundTypeEnum.One,
		small: BgPatternSmall1,
		large: BgPatternLarge1,
	},
	{
		id: 2,
		type: backgroundTypeEnum.Two,
		small: BgPatternSmall2,
		large: BgPatternLarge2,
	},
];

const DemiGod = () => {
	const [isSliderShow, setIsSliderShow] = useState(false);
	const [pageBackground, setPageBackground] = useState(backgroundTypeEnum.One);
	const toggleSlider = () => setIsSliderShow(!isSliderShow);
	const handleAddClick = () => setIsSliderShow(true);
	const characters = charterList;

	const pageBgImageLarge = useMemo(() => {
		return backgroundTypeList.find((e) => e.type === pageBackground)?.large;
	}, [pageBackground]);

	const sliderSettings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
	};

	return (
		<>
			<Heading>Demi God</Heading>
			<UserStatus>
				<span></span>
				<small>Active</small>
			</UserStatus>

			<HeaderDetails>
				<div className="nft-details">
					<span>Mine NFT</span>
					<small>Pay 4.28 BTC</small>
				</div>
				<div className="nft-details">
					<span>Current Battle Power</span>
					<small className="border-text">0/238 MP</small>
				</div>
			</HeaderDetails>

			<ChooseBackground>
				<ul>
					{backgroundTypeList.map((bg, i) => (
						<li key={bg.id}>
							<a
								className={cn("", {
									active: pageBackground === bg.type,
								})}
								onClick={() => setPageBackground(bg.type)}
							>
								<img src={bg.small} alt="background pattern" />
							</a>
						</li>
					))}
				</ul>
			</ChooseBackground>

			<CharacterInfo>
				{[characterOne, characterTwo, null, characterThree].map(
					(src, i) => (
						<div key={i}>
							{src && <img src={src} alt="background" />}
						</div>
					)
				)}
			</CharacterInfo>

			<Banner bgImg={pageBgImageLarge}>
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
					{[1, 2, 3, 4].map((e) => {
						return (
							<li key={e}>
								{e === 3 ? (
									<div>
										<a onClick={handleAddClick}>
											<img src={addIcon} />
											<span>ADD</span>
										</a>
									</div>
								) : (
									<div className="power">
										<span>
											PWR:
											<small> 550</small>
										</span>
									</div>
								)}
							</li>
						);
					})}
				</ul>

				{!isSliderShow && <DropArrow>
					<a onClick={toggleSlider}>
						<img src={DropIcon} />
					</a>
				</DropArrow>}
			</Banner>

			{isSliderShow && (
				<SliderDiv>
					<a className="close-slider" onClick={toggleSlider}>Close</a>
					<Slider {...sliderSettings}>
						{characters.map((character) => (
							<CharacterItem key={character.id} character={character} />
						))}
					</Slider>
				</SliderDiv>
			)}
		</>
	);
};

export default DemiGod;
