import styled from 'styled-components';

const TagStyled = styled.a`
	background: var(--blue);
	color: var(--primary);
	padding-block: 0.25rem;
	padding-inline: 0.75rem;
	border-radius: 1.5rem;
	text-decoration: none;
	font: var(--caption-medium);
	flex-shrink: 0;
`;

const Tag = ({ topic }: TagProps) => {
	return (
		<TagStyled href={`https://github.com/topics/${topic}`}>{topic}</TagStyled>
	);
};

type TagProps = {
	topic: string;
};

export default Tag;
