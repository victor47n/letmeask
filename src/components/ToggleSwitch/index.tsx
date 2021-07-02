import { ButtonHTMLAttributes, useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { useTheme } from "../../hooks/useTheme";

import './styles.scss';

type ToggleSwitchProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    class?: string;
};

export function ToggleSwitch(props: ToggleSwitchProps) {
    const { title } = useContext(ThemeContext);
    const { toggleTheme } = useTheme();

    return (
        <div className={props.class}>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={title === 'dark'}
                    onChange={toggleTheme}
                />
                <span className="slider round"></span>
            </label>
        </div>
    )
}