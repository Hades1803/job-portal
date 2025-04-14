import { Avatar } from "@mantine/core"
import { IconAsset, IconBell, IconSettings } from "@tabler/icons-react"


const Header = () => {
  return (
    <div className="w-full bg-black text-white h-28 flex justify-between px-6 items-center">
        <div className="flex gap-2 items-center">
            <IconAsset className="w-10 h-10" stroke={1}/>
            <div className="text-2x font-semibold">
            Job Finder
            </div>
        </div>
        <div className="flex gap-3">
            <a href="">Find Jobs</a>
            <a href="">Find Talent</a>
            <a href="">Upload Job</a>
            <a href="">About Us</a>
        </div>
        <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
                <div className="">Tobias</div>
                <Avatar src="avatar.png" alt="it's me" />
            </div>
            <IconBell/>
            <IconSettings/>
        </div>
    </div>
  )
}

export default Header