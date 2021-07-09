import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            background: string;
            details: string;

            text: {
                primary: string;
                secondary: string;
                tertiary: string;
                quaternary: string;
                quinary: string;
            };

            button: {
                background: string;
                color: string;
                outline: {
                    background: string;
                    color: string;
                };
            };

            question: {
                background: string;
                highlighted: {
                    background: string;
                    border: string;
                    color: string;
                };
                answered: {
                    background: string;
                    color: string;
                }
            };

            border: string;

            badge: {
                primary: string;
                secondary: string;
            };
        };
    }
}