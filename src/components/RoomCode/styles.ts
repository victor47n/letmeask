import styled from 'styled-components';

export const Container = styled.div`
.room-code {
    height: 40px;
    border-radius: 8px;
    overflow: hidden;

    background: ${props => props.theme.colors.button.outline.background};
    border: 1px solid ${props => props.theme.colors.button.outline.color};
    cursor: pointer;

    display: flex;

    transition: .5s;

    div {
        transition: .5s;
        background: ${props => props.theme.colors.button.outline.color};
        padding: 0 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    span {
        transition: .5s;
        color: ${props => props.theme.colors.text.primary};
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 16px 0 12px;
        width: 230px;
        font-size: 14px;
        font-weight: 500;
    }
}
`;