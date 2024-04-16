import Feature1 from '../../public/assets/feature-1.svg';
import Feature2 from '../../public/assets/feature-2.svg';
import Feature3 from '../../public/assets/feature-3.svg';
import Image from 'next/image';
import Check from '../../public/assets/check.svg';
import Bluebutton from '../../public/assets/blue-button.svg';

function Features() {
  return (
    <div className='flex flex-col gap-y-56px py-[56px]'>
        <div className='flex flex-col'>
            <div>
                <h3 className='font-medium text-[#0085FF]'>Sales Monitoring</h3>
                <h1 className='pt-[]12px text-2xl font-medium text-[#172026]'>
                    Simplify your sales monitoring
                </h1>
                <Image src={Feature1} alt=" Feature 1 image" className='pt-[24px]' />
                <p className='py-[24px] text-[#36485C]'>
                    Stay on top of things and revamp your work process with our 
                    game-changing feature. Get a bird eye view with our customizable 
                    dashboard.
                </p>
                <ul className='flex flex-col gap-y-3'>
                    <li className='flex items-center gap-x-2 text-[#36485C]'>
                        <span>
                            <Image src={Check} alt="Checkmark" />
                        </span>
                        Lorem ipsum dolor sit amet
                    </li>
                    <li className='flex items-center gap-x-2 text-[#36485C]'>
                        <span>
                            <Image src={Check} alt="Checkmark" />
                        </span>
                        Lorem ipsum dolor sit amet
                    </li>
                    <li className='flex items-center gap-x-2 text-[#36485C]'>
                        <span>
                            <Image src={Check} alt="Checkmark" />
                        </span>
                        Lorem ipsum dolor sit amet
                    </li>
                </ul>
                <p>
                    Learn More <span><Image src={Bluebutton} alt="Learn more" /></span>
                </p>
            </div>
        </div>

    </div>
  )
}

export default Features