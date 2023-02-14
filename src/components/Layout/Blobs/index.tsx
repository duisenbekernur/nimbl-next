import {FC} from 'react'
import style from './Blobs.module.scss'

const Blobs: FC = () => {
  return (
    <>
                <div className={style.blob}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="bones-gradient1">
                            <stop
                                offset="0%"
                                stopColor="rgba(182, 22, 166, 0.4)"
                            />
                            <stop
                                offset="100%"
                                stopColor="rgba(234, 0, 213, 0)"
                            />
                        </radialGradient>
                    </defs>
                    <path
                        fill="url(#bones-gradient1)"
                        transform="translate(100 100)"
                    >
                        <animate
                            attributeName="d"
                            dur="10000ms"
                            repeatCount="indefinite"
                            values="M48.6,-45.6C58.2,-39,58,-19.5,58,0C58,19.6,58.3,39.1,48.7,54.9C39.1,70.6,19.6,82.6,1.3,81.3C-17,80.1,-34.1,65.6,-47.6,49.8C-61.1,34.1,-71.2,17,-70.7,0.5C-70.3,-16.1,-59.3,-32.2,-45.8,-38.8C-32.2,-45.3,-16.1,-42.3,1.7,-44C19.5,-45.7,39,-52.1,48.6,-45.6Z;
                    
                    M56.2,-61.2C65.6,-46.9,60.9,-23.4,56.8,-4.1C52.7,15.2,49.1,30.4,39.8,46.9C30.4,63.4,15.2,81.3,0.5,80.7C-14.1,80.2,-28.3,61.3,-36.3,44.8C-44.3,28.3,-46.2,14.1,-48.7,-2.5C-51.3,-19.2,-54.4,-38.4,-46.4,-52.7C-38.4,-67,-19.2,-76.4,2.1,-78.5C23.4,-80.7,46.9,-75.5,56.2,-61.2Z;
                    
                    M43.3,-36.7C57.9,-28.7,72.7,-14.4,74.5,1.7C76.2,17.8,64.8,35.6,50.2,48.1C35.6,60.6,17.8,67.7,1.5,66.2C-14.8,64.7,-29.7,54.6,-36.8,42.1C-43.9,29.7,-43.3,14.8,-47.5,-4.3C-51.8,-23.4,-61,-46.8,-53.9,-54.7C-46.8,-62.7,-23.4,-55.2,-4.5,-50.7C14.4,-46.2,28.7,-44.6,43.3,-36.7Z;
                    
                    M51.2,-46.7C65.4,-36.9,75.5,-18.5,73.7,-1.8C71.9,14.9,58.3,29.8,44,42.9C29.8,56.1,14.9,67.5,0.6,66.9C-13.7,66.3,-27.4,53.7,-40.1,40.5C-52.8,27.4,-64.6,13.7,-62.4,2.1C-60.3,-9.4,-44.3,-18.9,-31.6,-28.6C-18.9,-38.4,-9.4,-48.5,4.5,-53C18.5,-57.5,36.9,-56.5,51.2,-46.7Z;

                    M59.9,-61.8C73.7,-46,78.4,-23,78.2,-0.3C77.9,22.5,72.6,44.9,58.8,52.9C44.9,61,22.5,54.6,1.3,53.4C-19.9,52.1,-39.8,55.9,-47.4,47.9C-55,39.8,-50.2,19.9,-47.3,3C-44.3,-14,-43.2,-28,-35.6,-43.8C-28,-59.5,-14,-77.1,4.5,-81.6C23,-86.1,46,-77.5,59.9,-61.8Z;

                    M48.6,-45.6C58.2,-39,58,-19.5,58,0C58,19.6,58.3,39.1,48.7,54.9C39.1,70.6,19.6,82.6,1.3,81.3C-17,80.1,-34.1,65.6,-47.6,49.8C-61.1,34.1,-71.2,17,-70.7,0.5C-70.3,-16.1,-59.3,-32.2,-45.8,-38.8C-32.2,-45.3,-16.1,-42.3,1.7,-44C19.5,-45.7,39,-52.1,48.6,-45.6Z"
                        ></animate>
                    </path>
                </svg>
            </div>
            <div className={style.blob}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="bones-gradient2">
                            <stop
                                offset="0%"
                                stopColor="rgba(112, 119, 229, 0.7)"
                            />
                            <stop
                                offset="100%"
                                stopColor="rgba(112, 119, 229, 0)"
                            />
                        </radialGradient>
                    </defs>
                    <path
                        fill="url(#bones-gradient2)"
                        transform="translate(100 100)"
                    >
                        <animate
                            attributeName="d"
                            dur="10000ms"
                            repeatCount="indefinite"
                            values="M49.7,-36.2C63.9,-21.7,74.7,-1.1,73.1,21C71.5,43,57.4,66.5,36.5,77.1C15.6,87.7,-12.2,85.3,-34.3,73.7C-56.5,62.1,-73.1,41.3,-78,18.2C-83,-4.9,-76.3,-30.2,-61.4,-44.9C-46.5,-59.5,-23.2,-63.4,-2.8,-61.2C17.7,-59,35.4,-50.7,49.7,-36.2Z;
                    
                            M61.3,-50.4C74.2,-32.7,75.8,-7.5,70.7,16.6C65.5,40.7,53.7,63.7,35.3,72.1C17,80.5,-7.9,74.1,-26.3,62.3C-44.7,50.5,-56.7,33.1,-60.6,14.3C-64.5,-4.4,-60.2,-24.5,-48.8,-41.9C-37.3,-59.2,-18.7,-73.8,2.8,-76C24.2,-78.3,48.4,-68,61.3,-50.4Z;
                    
                            M51,-39.2C64.9,-23.2,74.3,-2,71.6,19.1C69,40.3,54.4,61.5,33.3,73.1C12.3,84.8,-15.3,86.9,-33.1,75.6C-50.9,64.4,-58.9,39.8,-64.4,14.9C-70,-10.1,-73.2,-35.5,-62,-50.9C-50.9,-66.3,-25.4,-71.7,-3.5,-68.9C18.5,-66.2,37,-55.2,51,-39.2Z;
                    
                            M58.2,-43.9C71.8,-29.2,77,-5.3,70.8,13.9C64.6,33,47.1,47.2,27.6,56.2C8.1,65.1,-13.4,68.9,-34,62.2C-54.5,55.5,-74.1,38.5,-79.9,17.1C-85.7,-4.3,-77.7,-29.9,-62.1,-45C-46.5,-60.1,-23.2,-64.6,-0.5,-64.2C22.2,-63.8,44.5,-58.5,58.2,-43.9Z;

                            M65.8,-53.5C80.7,-33.8,84.9,-6.7,78.9,17.3C72.9,41.4,56.6,62.5,35.4,72.2C14.3,81.8,-11.6,79.9,-29.5,68.5C-47.3,57.1,-57,36.2,-60.7,15.2C-64.4,-5.7,-62,-26.6,-50.9,-45.4C-39.8,-64.2,-19.9,-80.8,2.8,-83C25.5,-85.3,51,-73.1,65.8,-53.5Z;

                            M49.7,-36.2C63.9,-21.7,74.7,-1.1,73.1,21C71.5,43,57.4,66.5,36.5,77.1C15.6,87.7,-12.2,85.3,-34.3,73.7C-56.5,62.1,-73.1,41.3,-78,18.2C-83,-4.9,-76.3,-30.2,-61.4,-44.9C-46.5,-59.5,-23.2,-63.4,-2.8,-61.2C17.7,-59,35.4,-50.7,49.7,-36.2Z"
                        ></animate>
                    </path>
                </svg>
            </div>
            <div className={style.blob}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="bones-gradient3">
                            <stop
                                offset="0%"
                                stopColor="rgba(209, 114, 200, 0.4)"
                            />
                            <stop
                                offset="100%"
                                stopColor="rgba(234, 0, 213, 0)"
                            />
                        </radialGradient>
                    </defs>
                    <path
                        fill="url(#bones-gradient3)"
                        transform="translate(100 100)"
                    >
                        <animate
                            attributeName="d"
                            dur="10000ms"
                            repeatCount="indefinite"
                            values="M49.7,-36.2C63.9,-21.7,74.7,-1.1,73.1,21C71.5,43,57.4,66.5,36.5,77.1C15.6,87.7,-12.2,85.3,-34.3,73.7C-56.5,62.1,-73.1,41.3,-78,18.2C-83,-4.9,-76.3,-30.2,-61.4,-44.9C-46.5,-59.5,-23.2,-63.4,-2.8,-61.2C17.7,-59,35.4,-50.7,49.7,-36.2Z;
                    
                            M61.3,-50.4C74.2,-32.7,75.8,-7.5,70.7,16.6C65.5,40.7,53.7,63.7,35.3,72.1C17,80.5,-7.9,74.1,-26.3,62.3C-44.7,50.5,-56.7,33.1,-60.6,14.3C-64.5,-4.4,-60.2,-24.5,-48.8,-41.9C-37.3,-59.2,-18.7,-73.8,2.8,-76C24.2,-78.3,48.4,-68,61.3,-50.4Z;
                    
                            M51,-39.2C64.9,-23.2,74.3,-2,71.6,19.1C69,40.3,54.4,61.5,33.3,73.1C12.3,84.8,-15.3,86.9,-33.1,75.6C-50.9,64.4,-58.9,39.8,-64.4,14.9C-70,-10.1,-73.2,-35.5,-62,-50.9C-50.9,-66.3,-25.4,-71.7,-3.5,-68.9C18.5,-66.2,37,-55.2,51,-39.2Z;
                    
                            M58.2,-43.9C71.8,-29.2,77,-5.3,70.8,13.9C64.6,33,47.1,47.2,27.6,56.2C8.1,65.1,-13.4,68.9,-34,62.2C-54.5,55.5,-74.1,38.5,-79.9,17.1C-85.7,-4.3,-77.7,-29.9,-62.1,-45C-46.5,-60.1,-23.2,-64.6,-0.5,-64.2C22.2,-63.8,44.5,-58.5,58.2,-43.9Z;

                            M65.8,-53.5C80.7,-33.8,84.9,-6.7,78.9,17.3C72.9,41.4,56.6,62.5,35.4,72.2C14.3,81.8,-11.6,79.9,-29.5,68.5C-47.3,57.1,-57,36.2,-60.7,15.2C-64.4,-5.7,-62,-26.6,-50.9,-45.4C-39.8,-64.2,-19.9,-80.8,2.8,-83C25.5,-85.3,51,-73.1,65.8,-53.5Z;

                            M49.7,-36.2C63.9,-21.7,74.7,-1.1,73.1,21C71.5,43,57.4,66.5,36.5,77.1C15.6,87.7,-12.2,85.3,-34.3,73.7C-56.5,62.1,-73.1,41.3,-78,18.2C-83,-4.9,-76.3,-30.2,-61.4,-44.9C-46.5,-59.5,-23.2,-63.4,-2.8,-61.2C17.7,-59,35.4,-50.7,49.7,-36.2Z"
                        ></animate>
                    </path>
                </svg>
            </div>
            <div className={style.blob}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="bones-gradient4">
                            <stop
                                offset="0%"
                                stopColor="rgba(69, 79, 228, 0.3)"
                            />
                            <stop
                                offset="100%"
                                stopColor="rgba(69, 78, 228, 0)"
                            />
                        </radialGradient>
                    </defs>
                    <path
                        fill="url(#bones-gradient4)"
                        transform="translate(100 100)"
                    >
                        <animate
                            attributeName="d"
                            dur="10000ms"
                            repeatCount="indefinite"
                            values="M27,-46.9C33.4,-32.6,35.8,-22.5,36.7,-13.4C37.5,-4.4,36.8,3.7,37.3,15.3C37.9,26.9,39.7,42.1,33.7,49.6C27.7,57.2,13.9,57.1,1.1,55.5C-11.6,53.9,-23.2,50.9,-33,44.6C-42.7,38.2,-50.7,28.7,-51,18.7C-51.2,8.8,-43.8,-1.5,-37.8,-10C-31.9,-18.5,-27.5,-25.1,-21.5,-39.5C-15.4,-53.9,-7.7,-76.1,1.3,-77.9C10.3,-79.7,20.7,-61.2,27,-46.9Z;
                    
                            M35.6,-42.8C49.7,-38.7,67.2,-33.1,71,-22.7C74.9,-12.4,65,2.8,56.4,14.9C47.7,27.1,40.4,36.2,31.2,47.6C22,58.9,11,72.4,0.7,71.4C-9.5,70.4,-19.1,54.9,-34.4,45.6C-49.6,36.2,-70.6,33,-73.3,24C-75.9,15.1,-60.1,0.3,-52.3,-14.9C-44.5,-30.2,-44.7,-46,-37.3,-52.2C-29.9,-58.5,-15,-55.2,-2.1,-52.3C10.7,-49.4,21.4,-46.8,35.6,-42.8Z;
                    
                            M29.6,-44.8C41.7,-32,57.1,-27.8,62.3,-18.6C67.5,-9.4,62.6,4.7,56.4,16.6C50.1,28.5,42.6,38.3,32.9,50.8C23.3,63.3,11.7,78.4,-0.7,79.3C-13.1,80.3,-26.1,67.1,-41.9,56.6C-57.7,46.2,-76.2,38.5,-79.6,26.3C-82.9,14.1,-71.1,-2.6,-60.3,-14.5C-49.5,-26.5,-39.6,-33.7,-29.7,-47.1C-19.8,-60.6,-9.9,-80.3,-0.6,-79.5C8.8,-78.7,17.6,-57.5,29.6,-44.8Z;
                    
                            M39.9,-55.7C52.8,-45.6,65,-35.3,69.7,-22.3C74.4,-9.3,71.6,6.6,65.7,20.3C59.8,34.1,50.8,45.8,39.3,48.4C27.9,51,13.9,44.5,-2.1,47.4C-18.2,50.4,-36.4,62.8,-51.7,61.4C-67,60.1,-79.3,44.9,-83.7,28C-88.1,11.1,-84.6,-7.6,-76,-21.8C-67.4,-36,-53.8,-45.7,-40.3,-55.6C-26.8,-65.5,-13.4,-75.6,0.1,-75.7C13.5,-75.8,27.1,-65.8,39.9,-55.7Z;

                            M50,-63.3C62,-60.2,67,-41.8,65.2,-26.2C63.5,-10.5,55,2.3,52.2,18.8C49.3,35.2,52,55.3,44.3,68.1C36.5,81,18.3,86.6,-0.2,86.8C-18.6,87,-37.1,81.8,-45.8,69.3C-54.5,56.8,-53.3,36.8,-51.6,21.6C-49.8,6.4,-47.6,-4.2,-47.6,-19C-47.7,-33.8,-50,-53,-42.5,-57.6C-34.9,-62.2,-17.5,-52.3,0.8,-53.4C19,-54.4,38.1,-66.5,50,-63.3Z;

                            M27,-46.9C33.4,-32.6,35.8,-22.5,36.7,-13.4C37.5,-4.4,36.8,3.7,37.3,15.3C37.9,26.9,39.7,42.1,33.7,49.6C27.7,57.2,13.9,57.1,1.1,55.5C-11.6,53.9,-23.2,50.9,-33,44.6C-42.7,38.2,-50.7,28.7,-51,18.7C-51.2,8.8,-43.8,-1.5,-37.8,-10C-31.9,-18.5,-27.5,-25.1,-21.5,-39.5C-15.4,-53.9,-7.7,-76.1,1.3,-77.9C10.3,-79.7,20.7,-61.2,27,-46.9Z"
                        ></animate>
                    </path>
                </svg>
            </div></>
  )
}

export default Blobs