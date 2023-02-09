import {FC, ReactNode, Children, cloneElement, ReactElement,} from 'react'
import style from './UITabs.module.scss'

type TabsProps = {
    size: "large" | "small";
    value: number;
    onChange: (idx: number) => void;
    children: ReactNode;
}

const Tabs:FC <TabsProps> = (props) => {
  const {children, onChange, value, size} = props;
  const handleClickTab = (idx: number) => {
    onChange(idx)
  }
  return (
    <div className={style.wrap_tabs}>{Children.map(children, child =>
      cloneElement(child as ReactElement<any>, {
        onClickTab: handleClickTab,
        activeIndex: value,
        size
      })
    )}</div>
  )
}

export default Tabs