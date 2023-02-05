import { ChangeEventHandler, FC, FormEvent, useState } from 'react'
import style from './CommunityChatInput.module.scss'
import Image from 'next/image'
import { attach, smileWhite, telegram } from '@/assets/icons'
import { emojiArr } from '../index'
import { Emoji } from '@/types'
import { useDispatch } from 'react-redux'
import { addMessageChat } from '@/store/features/communityChat/communityChatSlice'

type Props = {
    setShouldScrollTo: (to: string) => void
}

const CommunityChatInput: FC<Props> = ({ setShouldScrollTo }) => {
    const [text, setText] = useState<string>('')
    const [file, setFile] = useState<string | null>(null)
    const [imgAspect, setImgAspect] = useState<number>(1)

    const dispatch = useDispatch()

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault()
        if (event.target.files) {
            const file = event.target.files[0]

            const reader = new FileReader()
            reader.onload = async () => {
                const resizedImage = await resizeImage(
                    reader.result as string,
                    130
                )
                setFile(resizedImage)
            }

            if (file) reader.readAsDataURL(file)
            event.target.value = '' // clear FileList
        }
    }

    function resizeImage(base64: string, wantedHeight: number) {
        return new Promise<string>((resolve, reject) => {
            const inputImage = new window.Image()
            inputImage.addEventListener('load', () => {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')

                const aspect = inputImage.width / inputImage.height
                setImgAspect(aspect)

                canvas.height = wantedHeight
                canvas.width = wantedHeight * aspect

                ctx?.drawImage(inputImage, 0, 0, canvas.width, canvas.height)
                resolve(canvas.toDataURL())
            })
            inputImage.src = base64
        })
    }

    function setEmojiToText(emoji: Emoji) {
        setText((prev) => prev + `${emoji}`)
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (text.trim()) {
            dispatch(
                addMessageChat({
                    id: Math.random() * 100,
                    author: {
                        name: 'NotCrypto',
                        img: '/usersImg/user5.png',
                    },
                    text: text.trim(),
                    img: file || undefined,
                    react: [],
                    createdDate: new Date().getTime(),
                })
            )
        }
        // reset
        setFile(null)
        setText('')
        // scrollToBottom
        setShouldScrollTo('bottom')
    }
    return (
        <form className={style.form_wrap} onSubmit={handleSubmit}>
            {file && (
                <div className={style.attach_img}>
                    <Image
                        src={file}
                        width={imgAspect * 130}
                        height={130}
                        alt="file"
                    />
                    <button type="button" onClick={() => setFile(null)}>
                        х
                    </button>
                </div>
            )}
            <div className={style.buttons_wrap}>
                <label className={style.button_file}>
                    <input
                        accept="image/*"
                        type="file"
                        onChange={handleChange}
                    />
                    <Image height={23} width={23} src={attach} alt="attach" />
                </label>
                <button type="button" className={style.button_smile}>
                    <Image
                        width={23}
                        height={23}
                        src={smileWhite}
                        alt="emoji"
                    />
                    <ul className={style.input_emoji_popper}>
                        {emojiArr.map((emoji) => {
                            return (
                                <li
                                    key={emoji}
                                    onClick={() => setEmojiToText(emoji)}
                                >
                                    {emoji}
                                </li>
                            )
                        })}
                    </ul>
                </button>
            </div>
            <label className={style.input_wrap}>
                <input
                    type="text"
                    value={text}
                    placeholder="Enter text"
                    className={style.input}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>
            <div className={style.submit_wrap}>
                <button type="submit">
                    <Image
                        src={telegram}
                        alt="telegram"
                        className={style.telegram_icon}
                    />
                </button>
            </div>
        </form>
    )
}

export default CommunityChatInput
