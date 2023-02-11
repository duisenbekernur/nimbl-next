import { RefObject, useEffect, useRef, useState } from 'react'

export const useScrollTo = <T extends Element>(scrollRef: RefObject<T> ) => {
    const ref = useRef<T>(null)
    const [shouldScrollTo, setShouldScrollTo] = useState<string>('')

    useEffect(() => {
        if (scrollRef.current && shouldScrollTo === 'bottom') {
            setTimeout(() => {
                scrollRef.current!.scrollTo({
                    top: scrollRef.current!.scrollHeight,
                    behavior: 'smooth',
                })
            }, 0)
        } else if (scrollRef.current && shouldScrollTo === 'top') {
            scrollRef.current!.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
        setShouldScrollTo('')
    }, [shouldScrollTo])

    return [ setShouldScrollTo ]
}

