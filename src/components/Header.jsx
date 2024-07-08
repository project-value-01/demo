import { SmartphoneIcon, MailIcon, MenuIcon, PlusIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuShortcut} from "./ui/dropdown-menu"

export const Header = () => {

  return (
    <header className="bg-[#f8d227] text-center">
        <div className="px-4">
            <img src="/clickhubli_logo.png" alt="click hubli logo"
                className="w-[18rem] mx-auto py-3.5"
            />
            <h1 className="text-[#118C6F] text-lg leading-5 my-2.5">Send Flowers, Cakes, Roses, Birthday Gifts, Anniversary Gifts All over India</h1>
            <button className="bg-[#f0ad4e] border border-[#eea236] hover:bg-[#dc5e1f] px-3 py-1.5 text-white text-sm font-bold">Track Order</button>
            <div className='mt-6 pb-2.5'>
                <p className="flex justify-center items-center gap-1 font-semibold text-sm"><SmartphoneIcon height={16}/>Call Us : +91-84978-08999</p>
                <p className="flex justify-center items-center gap-1 font-semibold text-sm"><MailIcon height={16}/>Email : clickhubli@gmail.com</p>
            </div>
        </div>
        <nav className="bg-[#1e7968] w-full px-4 py-2 flex gap-2 items-center text-white sticky">            
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <MenuIcon height={26} className='cursor-pointer active:scale-125'/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[100svw] mt-1 border-b-4 rounded-none border-blue-600">
                <DropdownMenuGroup className="px-4">
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">home</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">about us</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">products</span>
                        <DropdownMenuShortcut>
                            <PlusIcon />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">shop by occasion</span>
                        <DropdownMenuShortcut>
                            <PlusIcon />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">valentines day</span>
                        <DropdownMenuShortcut>
                            <PlusIcon />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">shop by relation</span>
                        <DropdownMenuShortcut>
                            <PlusIcon />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">design sarees</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">delivery cities</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className="uppercase font-medium text-[#333] hover:text-black hover:font-semibold">contact</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
            </DropdownMenu>
            
            MENU

        </nav>
    </header>
  )
}
