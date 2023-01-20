import { FC } from 'react'
import styles from './Opportunity.module.scss'
import Image from 'next/image'
import imageCard1 from '@/assets/channel-content/card3.jpg'
import logo from '@/assets/user9.png'
import CardButton from '../NFTCard/CardButton'

const Opportunity: FC = () => {
    return (
        <div className={styles.container}>
            <svg
                width="610"
                height="469"
                viewBox="0 0 610 469"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M183.18 -169.488C229.027 -158.461 281.363 -138.765 300.854 -81.1375C319.388 -26.339 282.593 29.9922 270.249 87.9486C260.036 135.901 260.83 187.701 235.822 224.192C204.116 270.457 163.766 318.59 117.702 310.543C70.5899 302.313 35.9193 244.328 15.7112 185.74C-1.75232 135.109 12.8577 79.6607 18.9828 24.3336C25.4815 -34.3683 18.9598 -102.15 51.8855 -141.016C86.7133 -182.128 137.815 -180.399 183.18 -169.488Z"
                    fill="url(#paint0_linear_1_4)"
                    fill-opacity="0.7"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M-27.1299 593.516C-7.44843 656.104 46.9538 674.918 92.137 704.043C129.383 728.052 166.98 756.443 207.262 744.607C247.924 732.66 271.663 682.668 301.107 642.644C345.932 581.711 422.1 540.675 420.721 454.442C419.304 365.848 356.73 292.676 295.06 264.462C241.151 239.799 191.969 304.784 136.998 324.638C85.7987 343.129 22.5646 319.63 -11.3003 375.108C-46.998 433.589 -49.1123 523.612 -27.1299 593.516Z"
                    fill="url(#paint1_linear_1_4)"
                    fill-opacity="0.7"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M452.971 278.758C502.638 279.985 563.292 324.825 596.284 274.22C629.404 223.421 593.406 145.456 583.256 78.9263C576.15 32.3481 568.511 -11.7226 546.951 -49.1408C521.622 -93.0998 493.663 -140.19 452.971 -147.187C408.572 -154.822 357.432 -136.165 331.848 -86.1295C307.828 -39.154 340.116 21.7957 337.354 78.9263C334.163 144.913 284.716 215.335 314.762 267.266C344.469 318.612 404.997 277.573 452.971 278.758Z"
                    fill="url(#paint2_linear_1_4)"
                    fill-opacity="0.7"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M625.676 487.144C617.092 541.627 581.374 588.93 541.202 599.461C503.337 609.387 474.003 561.077 440.211 535.761C409.204 512.531 362.415 506.769 354.692 459.732C346.989 412.813 394.109 385.817 408.374 341.849C423.971 293.773 405.802 220.513 440.109 196.454C474.176 172.564 515.011 212.988 544.441 246.427C567.647 272.796 567.085 317.671 579.707 355.072C595.237 401.092 633.478 437.63 625.676 487.144Z"
                    fill="url(#paint3_linear_1_4)"
                    fill-opacity="0.7"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_1_4"
                        x1="579.629"
                        y1="358.366"
                        x2="-218.888"
                        y2="93.7379"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#EA00D5" />
                        <stop offset="0.537233" stop-color="#3D5EFF" />
                        <stop offset="1" stop-color="#00EAF2" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_1_4"
                        x1="443.392"
                        y1="184.047"
                        x2="-151.212"
                        y2="376.129"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#EA00D5" />
                        <stop offset="0.449872" stop-color="#3D5EFF" />
                        <stop offset="1" stop-color="#00EAF2" />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_1_4"
                        x1="666.531"
                        y1="-18.3993"
                        x2="-120.63"
                        y2="295.1"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#EA00D5" />
                        <stop offset="0.493252" stop-color="#3D5EFF" />
                        <stop offset="1" stop-color="#00EAF2" />
                    </linearGradient>
                    <linearGradient
                        id="paint3_linear_1_4"
                        x1="-15.7268"
                        y1="-12.1956"
                        x2="610.188"
                        y2="280.269"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#3D5EFF" />
                        <stop offset="0.501262" stop-color="#00EAF2" />
                        <stop offset="1" stop-color="#EA00D5" />
                    </linearGradient>
                </defs>
            </svg>

            <div className={styles.imgBlock}>
                <Image
                    className={styles.img}
                    src={imageCard1}
                    alt="imageCard"
                />
            </div>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src={logo} alt={'logo'} />
                </div>
                <div className={styles.name}>@JamesB</div>
                <div className={styles.size}>
                    <p>Community Size:</p>
                    <span className={styles.number}>4.2k</span>
                </div>
                <div className={styles.date}>
                    <p>Mint Date:</p>
                    <span className={styles.number}>Dec 24, 10:00 PM</span>
                </div>
            </div>
            <div className={styles.spots}>
                <div className={styles.progress}></div>
                <div className={styles.info}>
                    <p>Number of spots</p>
                    <div>
                        <p className={styles.percent}>20%</p>
                        <p className={styles.spotNumber}>(50/2000)</p>
                    </div>
                </div>
            </div>
            <div className={styles.btn}>
                <CardButton>Register</CardButton>
            </div>
        </div>
    )
}

export default Opportunity
