import styled from 'styled-components';

export const Container = styled.div`
.button {
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${props => props.theme.colors.button.background};
    color: ${props => props.theme.colors.button.color};
    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s, background .5s, color .5s;

    img {
        margin-right: 8px;
    }

    &.outlined {
        transition: .5s;
        background: ${props => props.theme.colors.button.outline.background};
        border: 1px solid ${props => props.theme.colors.button.outline.color};
        color: ${props => props.theme.colors.button.outline.color};
    }

    &:not(:disabled):hover {
        filter: brightness(0.9);
    }

    &:disabled {
        opacity: .6;
        cursor: not-allowed;
    }
}
`;