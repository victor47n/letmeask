import styled from 'styled-components';

export const Container = styled.div`
#page-room {
    header {
        padding: 24px;
        border-bottom: 1px solid #E2E2E2;

        .content {
            max-width: 1120px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > img {
                max-height: 45px;
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
                color: #29292E;
            }

            span {
                margin-left: 16px;
                background: #E559f9;
                border-radius: 9999px;
                padding: 8px 16px;
                color: #FFF;
                font-weight: 500;
                font-size: 14px;
            }
        }

        form {
            textarea {
                width: 100%;
                border: 0;
                padding: 16px;
                border-radius: 8px;
                background: #FEFEFE;
                box-shadow: 0 2px 12px rgba(0, 0, 0, .04);
                resize: vertical;
                min-height: 130px;
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
                        color: #29292E;
                        font-weight: 500;
                        font-size: 14px;
                    }
                }

                span {
                    font-size: 14px;
                    color: #737380;
                    font-weight: 500;

                    button {
                        background: transparent;
                        border: 0;
                        color: #835AFD;
                        text-decoration: underline;
                        font-weight: 500;
                        cursor: pointer;
                    }
                }
            }
        }

        .question-list {
            margin-top: 32px;
        }

        .empty-question {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 16px;

            > div {
                width: 284px;
                text-align: center;

                p {
                    font: 500 18px 'Poppins', sans-serif;
                    color: ${props => props.theme.colors.text.primary}
                }

                span {
                    margin-top: 8px;
                    font-size: 14px;
                    line-height: 21px;
                    color: ${props => props.theme.colors.text.tertiary}
                }
            }            
        }
    }
}`;