import { IconAnchor } from '@tabler/icons-react'
import React from 'react'
import SignUp from '../SignUpLogin/SignUp'
import Login from '../SignUpLogin/Login'
import { useLocation } from 'react-router-dom'

const SignUpPage = () => {
    const location = useLocation()
    return (
        <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] overflow-hidden'>
            <div className={`w-full h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname==='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
                <Login/>
                <div className={`w-1/2 h-full bg-mine-shaft-900 transition-all duration-1000 ease-in-out ${location.pathname ==='/signup'?'rounded-r-[200px]':'rounded-l-[200px]'}  flex items-center gap-5 justify-center flex-col`}>
                    <div className="flex gap-1 items-center text-bright-sun-400">
                        <IconAnchor className="w-16 h-16" stroke={2.5} />
                        <div className="text-6xl font-semibold">
                            Job Finder
                        </div>
                    </div>
                    <div className='text-2xl text-mine-shaft-200 font-semibold'>Find the job made for you</div>
                </div>
                <SignUp/>
            </div>
        </div>

    )
}

export default SignUpPage