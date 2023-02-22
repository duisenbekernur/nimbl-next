import { ThemeEnum } from '@/types';
import { useEffect, useState } from 'react';
import {useLocalStorage} from './useLocalStorage'

export default function useTheme() {
    const [value, setLocalStorageValue] = useLocalStorage<ThemeEnum>('theme', ThemeEnum.SYSTEM);
    const [theme, setTheme] = useState<ThemeEnum>(value || ThemeEnum.SYSTEM);

    

    // В 'data-theme' атрибут задается 'light' в тех случаях когда системная тема и выбранная тема на сайте - Светлая / else dark theme
    useEffect(() => {
        const isSystemDarkSchema = window.matchMedia('(prefers-color-scheme: dark)').matches
        if(theme === ThemeEnum.SYSTEM && !isSystemDarkSchema || theme === ThemeEnum.LIGHT) {
            document.body.setAttribute('data-theme', ThemeEnum.LIGHT)
        } else {
            document.body.removeAttribute('data-theme')
        }
        setLocalStorageValue(theme)
    }, [theme])

    return [ theme, setTheme] as const
}