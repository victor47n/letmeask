import styled from 'styled-components';

export const Container = styled.div`
#page-room {
    header {
        display: flex;
        justify-content: space-between;
        padding: 24px;
        border-bottom: 1px solid ${props => props.theme.colors.border};

        .content {
            width: 100%;
            max-width: 1440px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            svg {
                max-height: 45px;

                path {
                    &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
                        fill: ${props => props.theme.colors.text.primary};
                        transition: .5s;             
                    }
                }
            }

            > div {
                display: flex;
                gap: 16px;

                button {
                    height: 40px;
                }
            }
        }
    }

    main {
        max-width: 800px;
        margin: 0 auto;

        .room-title {
            margin: 32px 24px;
            display: flex;
            align-items: center;

            h1 {
                font-family: 'Poppins', sans-serif;
                font-size: 24px;
                color: ${props => props.theme.colors.text.primary};
                transition: .5s;
            }

            span {
                margin-left: 16px;
                background: ${props => props.theme.colors.badge.primary};
                border-radius: 9999px;
                padding: 8px 16px;
                color: ${props => props.theme.colors.text.quaternary};
                font-weight: 500;
                font-size: 14px;
            }
        }

        form {
            textarea {
                color: ${props => props.theme.colors.text.secondary};
                width: 100%;
                border: 0;
                padding: 16px;
                border-radius: 8px;
                background: ${props => props.theme.colors.details};
                box-shadow: 0 2px 12px rgba(0, 0, 0, .04);
                resize: vertical;
                min-height: 130px;
                transition: .5s;
            }

            .form-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 16px;

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
                        color: ${props => props.theme.colors.text.primary};
                        font-weight: 500;
                        font-size: 14px;
                        transition: .5s;
                    }
                }

                span {
                    font-size: 14px;
                    color: ${props => props.theme.colors.text.secondary};
                    font-weight: 500;
                    transition: .5s;

                    button {
                        background: transparent;
                        border: 0;
                        color: ${props => props.theme.colors.primary};
                        text-decoration: underline;
                        font-weight: 500;
                        cursor: pointer;
                        transition: .5s;
                    }
                }
            }
        }

        .question-list {
            margin-top: 32px;

            > div:not(:first-child) {
                margin-top: 8px;
            }
        }

        .empty-question {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 16px;
            height: calc(100vh - 193px);

            > div {
                width: 284px;
                text-align: center;

                p {
                    font: 500 18px 'Poppins', sans-serif;
                    color: ${props => props.theme.colors.text.primary};
                    transition: .5s;
                }

                span {
                    transition: .5s;
                    margin-top: 8px;
                    font-size: 14px;
                    line-height: 21px;
                    color: ${props => props.theme.colors.text.tertiary};
                    transition: .5s;
                }
            }            
        }
    }
}`;