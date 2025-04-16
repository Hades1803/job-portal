import { Avatar, Button, Divider, Text } from '@mantine/core'
import { IconHeart, IconMapPin } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const TalentCard = (props: any) => {
    return (
        <div className='bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-2 bg-mine-shaft-800 rounded-full'><Avatar src={`/${props.image}.png`} alt="" size='lg' /></div>
                    <div>
                        <div className='font-semibold text-lg'>{props.name}</div>
                        <div className='text-sm text-mine-shaft-50'>{props.role.position} at <span className='text-bright-sun-400'>{props.role.company}</span></div>
                    </div>
                </div>
                <IconHeart className='cursor-pointer text-mine-shaft-300' stroke={1.5} />
            </div>
            <div className='flex gap-2 text-xs [&>div]:py-2 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:overflow-hidden [&>div]:text-ellipsis [&>div]:whitespace-nowrap'>
                {
                    props.topSkills.map((skill: any, index: any) =>
                        <div key={index} className=''>{skill}</div>
                    )
                }
            </div>

            <Text className='!text-xs text-justify !text-mine-shaft-300' lineClamp={2}>{props.about}</Text>
            <Divider size="xs" color='mineShaft.7' />
            <div className='flex justify-between'>
                <div className='font-semibold text-mine-shaft-200'>&#36;{props.expectedCtc}</div>
                <div className='text-xs flex gap-1 items-center text-mine-shaft-400'>
                    <IconMapPin className='h-5 w-5' stroke={1.5} />{props.location}
                </div>
            </div>
            <Divider size="xs" color='mineShaft.7' />
            <div className='flex [&>*]:w-1/2 [&>*]:p-1 justify-between'>
                <Link to='/talent-profile'>
                    <Button color='brightSun.4' variant='outline' fullWidth>Profile</Button>
                </Link>
                <div>
                    <Button color='brightSun.4' variant='light' fullWidth>Message</Button>
                </div>
            </div>

        </div>
    )
}

export default TalentCard