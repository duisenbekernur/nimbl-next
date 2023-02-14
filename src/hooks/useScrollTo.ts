import { RefObject, useEffect, useState } from 'react'

// Хука принимает в качестве параметра элемент который будет прокручиваться 
export const useScrollTo = <T extends Element>(elemRef: RefObject<T> ) => {
    const [shouldScrollTo, setShouldScrollTo] = useState<'bottom' | 'top' | null>(null)

    useEffect(() => {
        if (elemRef.current && shouldScrollTo === 'bottom') {
            setTimeout(() => {
                elemRef.current!.scrollTo({
                    top: elemRef.current!.scrollHeight,
                    behavior: 'smooth',
                })
            }, 0)
        } else if (elemRef.current && shouldScrollTo === 'top') {
            elemRef.current!.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
        setShouldScrollTo(null)
    }, [shouldScrollTo])

    return [ setShouldScrollTo ]
    // setShouldScrollTo функция принимает одни параметр из 'bottom' или 'top', соответственно 
    // после вызова проскролит до конца одного из направлении . 
}

