import styled from 'styled-components';

export const Container = styled.div`
.question {
    background: ${props => props.theme.colors.question.background};
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, .04);
    padding: 24px;
    transition: .5s;

    &.highlighted {
        background: ${props => props.theme.colors.question.highlighted.background};
        border: 1px solid ${props => props.theme.colors.question.highlighted.border};

        footer .user-info span {
            color: ${props => props.theme.colors.question.highlighted.color};
        }
    }

    &.answered {
        background: ${props => props.theme.colors.question.answered.background};
        
        p {
            color: ${props => props.theme.colors.question.answered.color};            
        }

        footer .user-info {
             img {
                filter: grayscale(1)
             }

             span {
                 color: ${props => props.theme.colors.question.answered.color};
             }
        }
    }

    p {
        color: ${props => props.theme.colors.text.primary};
        transition: .5s;     
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;

        .user-info {
            display: flex;
            align-items: center;

            img {
                width: 32px;
                height: 32px;
                border-radius: 50%;
            }

            > span {
                margin-left: 8px;
                color: ${props => props.theme.colors.text.secondary};
                font-size: 14px;
                transition: .5s;
            }
        }

        > div {
            display: flex;
            gap: 16px
        }

        button {
            border: 0;
            background: transparent;
            cursor: pointer;

            &.like-button {
                display: flex;
                align-items: flex-end;
                color: ${props => props.theme.colors.text.secondary};
                gap: 8px;
                transition: filter .2s;

                &.liked {
                    color: ${props => props.theme.colors.button.background};

                    svg path {
                        stroke: ${props => props.theme.colors.button.background}
                    }
                }
            }

            &:hover {
                filter: brightness(0.7);
            }
        }
    }
}
`;