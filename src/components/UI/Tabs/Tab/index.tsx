import { FC } from 'react'
import style from './UITab.module.scss'

type TabProps = {
    size?: "large" | "small";
    label: string;
    index: number;
    activeIndex?: number;
    onClickTab?: (idx: number) => void
}

const Tab: FC<TabProps> = (props) => {
    const { label, size, index, activeIndex, onClickTab} = props;

    return <div onClick={() => onClickTab!(index)} className={`${style.tab} ${style[size!]} ${index === activeIndex ? style.active : null}`}>{label}</div>
}

export default Tab
