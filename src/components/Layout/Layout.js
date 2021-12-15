import React from "react";
import styled from "styled-components";
import { layoutVariables } from "../../assets/styles/variables";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Main = styled.main`
	left: ${layoutVariables.SIDEBAR_WIDTH};
	width: calc(100% - ${layoutVariables.SIDEBAR_WIDTH});
	position: relative;
	overflow-y: auto;
	top: 0;
	height: 100vh;
	padding: 0 6rem 3.5rem 6rem;
	box-sizing: border-box;
`;

const Layout = ({ children }) => (
	<>
		<Header />
		<Sidebar />
		<Main>{children}</Main>
	</>
);

export default Layout;
