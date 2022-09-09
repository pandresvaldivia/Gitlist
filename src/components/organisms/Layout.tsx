import { ReactNode } from 'react';
import styled from 'styled-components';

const LayoutStyled = styled.div`
	box-sizing: border-box;
	padding-inline: 1rem;
	padding-block-start: 1.5rem;
	min-block-size: 100vh;
	max-inline-size: 80.375rem;
	margin: auto;
	@media screen and (min-width: 768px) {
		display: grid;
		border: 1px solid red;
		grid-template-columns: 17.375rem 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas: 'profile filters' 'profile repolist';
		column-gap: 2rem;
	}
`;

const Layout = ({ children }: LayoutProps) => {
	return <LayoutStyled>{children}</LayoutStyled>;
};

type LayoutProps = {
	children: ReactNode;
};

export default Layout;
