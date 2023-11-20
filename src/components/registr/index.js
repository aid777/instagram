`use client`

import instaRegistration from '../../app/images/buttonInsta.png'
import facebookReg from '../../app/images/facebookRegistration.png'
import Image from 'next/image'
export default function Registr(){
    return(
        <section className='login-page'>
            <div className='card'>
                <div className='card-inner'>
                    <Image src={instaRegistration}/>
                    <h1>Sign up to see photos and <br></br> videos from your friends.</h1>
                </div>
                <div className='second-in'>
                    <button className='button button-primary-bordered'>
                        <Image src={facebookReg}/>
                        <p>Log in with Facebook</p>
                    </button>
                    <div class="line">
                        <div class="bold_line">
                            <div class="text">OR</div>
                        </div>
                    </div>
                    <input className='input' placeholder='Mobile Number or Email'/>
                    <input className='input' placeholder='Full Name'/>
                    <input className='input' placeholder='Username'/>
                    <input className='input' placeholder='Password'/>
                    <p>People who use our service may have uploaded your contact information to Instagram. <a href=''>Learn More</a></p>
                    <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                    <button className='button button-primary'>
                        Sign up
                    </button>
                </div>
            </div>
            <div className='card'>
                <p>Have an account?Log in</p>
            </div>
        </section>
    )
}