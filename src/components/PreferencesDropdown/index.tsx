import {FC, useState} from 'react';
import style from './PreferencesDropdown.module.scss';
import { ThemeEnum } from '@/types';

type Props = {
    theme: ThemeEnum;
    setTheme: (a: ThemeEnum) => void;
}

const PreferencesDropdown: FC<Props> = ({theme, setTheme }) => {
    const [isOpenThemeList, setIsOpenThemeList] = useState<boolean>(false)

    const handleChangeTheme = (theme: ThemeEnum) => {
      setTheme(theme)
      // closeModal()
    }

    return (
        <div className={style.settings_window}>
            <p className={style.title}>Preferences</p>
            <ul className={style.settings_list}>
                <li onClick={() => setIsOpenThemeList(!isOpenThemeList)}>
                    <div className={style.setting_item}>
                        <span>Theme</span> <span>{theme}</span>
                    </div>
                    {isOpenThemeList && (
                        <ul className={style.theme_list}>
                            {(Object.keys(ThemeEnum) as Array<keyof typeof ThemeEnum>).map((item) => {
                                return <li onClick={() => handleChangeTheme(ThemeEnum[item])}>{ThemeEnum[item]}</li>
                            })}
                        </ul>
                    )}
                </li>
                <li className={style.setting_item}><span>Sounds</span> <span>icon</span></li>
                <li className={style.setting_item}><span>FullScreen</span> <span>icon</span></li>
                <li><span className={style.logout}>Logout</span></li>
            </ul>
        </div>
    )
}

export default PreferencesDropdown
