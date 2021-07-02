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

            question: string;

            border: string;

            badge: {
                primary: string;
                secondary: string;
            }
        };
    }
}