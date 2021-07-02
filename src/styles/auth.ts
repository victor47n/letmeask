import styled from 'styled-components';

export const Container = styled.div`
#page-auth {
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
        flex: 7;

        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text.quaternary};

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 120px 80px;

        transition: .5s;

        img {
            max-width: 320px;
        }

        strong {
            font: 700 36px "Poppins", sans-serif;
            line-height: 42px;
            margin-top: 16px;
        }

        p {
            font-size: 24px;
            line-height: 32px;
            margin-top: 16px;
            color: ${props => props.theme.colors.text.quinary};
        }
    }

    main {
        flex: 8;

        padding: 32px 32px 0;

        display: flex;
        flex-direction: column;        
    }

    .toggle-theme {
        display: flex;
        justify-content: flex-end;
    }

    .main-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;

        > div {
            flex: 1;
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            align-items: stretch;
            text-align: center;


            > svg {
                align-self: center;

                path {
                    &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
                        fill: ${props => props.theme.colors.text.primary};
                        transition: .5s;             
                    }
                }
            }

            h2 {
                font-size: 24px;
                margin: 64px 0 24px;
                font-family: "Poppins", sans-serif;
            }

            form {
                input {
                    height: 50px;
                    border-radius: 8px;
                    padding: 0 16px;
                    background: ${props => props.theme.colors.details};
                    border: 1px solid ${props => props.theme.colors.border};
                    transition: .5s;
                    color: ${props => props.theme.colors.text.secondary}
                }

                button {
                    margin-top: 16px;
                }

                button, input {
                    width: 100%;
                }
            }

            p {
                font-size: 14px;
                color: ${props => props.theme.colors.text.secondary};
                margin-top: 16px;

                a {
                    color: ${props => props.theme.colors.badge.primary};
                }
            }
        }
    }

    .create-room {
        margin-top: 64px;
        height: 50px;
        border-radius: 8px;
        font-weight: 500;
        background: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.text.quinary};

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        border: 0;

        transition: filter 0.2s;

        img {
            margin-right: 8px;
        }

        &:hover {
            filter: brightness(0.9);
        }
    }

    .separator {
        font-size: 14px;
        color: ${props => props.theme.colors.border};;

        margin: 32px 0;
        display: flex;
        align-items: center;

        &::before {
            content: "";
            flex: 1;
            height: 1px;
            background: ${props => props.theme.colors.border};
            margin-right: 16px;
        }

        &::after {
            content: "";
            flex: 1;
            height: 1px;
            background: ${props => props.theme.colors.border};
            margin-left: 16px;
        }
    }
}
`;