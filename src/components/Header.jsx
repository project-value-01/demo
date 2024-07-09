import { SmartphoneIcon, MailIcon, MenuIcon, PlusIcon, UserIcon, Facebook, Twitter,RssIcon, Linkedin } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuShortcut } from "./ui/dropdown-menu"

export const Header = () => {

  return (
    <header className="bg-[#f8d227] md:bg-[url('/header-image.jpg')] md:bg-cover text-center pt-5">
        <div className="max-[767px]:hidden ps-40 mb-4 flex justify-between gap-2 items-center">
            <form className="flex flex-col min-[900px]:flex-row items-center gap-2">
                <input type="text" placeholder="Search Website..."
                className="px-2 py-1 rounded"
                />
                <input type="submit" value="Submit" 
                className="text-sm px-2 bg-blue-500 text-white py-1.5 rounded self-start"
                />
            </form>
            <div className="flex gap-4 flex-wrap">
                <button className="flex flex-wrap items-center gap-1 text-sm p-1.5 bg-blue-500 text-white rounded"><UserIcon size={'14'}/> User Profile</button>
                <button className="text-sm p-1.5 bg-red-500 text-white rounded">Cart</button>
                <div className="flex gap-2 flex-wrap">
                    <button className="bg-blue-700 p-1.5 rounded text-white">
                        <Facebook size={'20'} strokeWidth={'3'}/>
                    </button>
                    <button className="bg-blue-400 p-1.5 rounded text-white">
                        <Twitter size={'20'} strokeWidth={'3'}/>
                    </button>
                    <button className="p-1.5 rounded text-white bg-orange-400">
                        <RssIcon size={'20'} />
                    </button>
                    <button className="p-1.5 rounded text-white bg-blue-300">
                        <Linkedin size={'20'} strokeWidth={'3'} />
                    </button>
                    <img src="/comodo_secure.png" alt="comodo secure logo"
                    className="px-1.5 w-[6rem]"
                    />
                </div>
            </div>
        </div>
        <div className="px-4 md:grid md:grid-cols-[1fr,_1fr,_1fr] md:items-center md:gap-3 md:ps-20 lg:ps-40">
            <img src="/clickhubli_logo.png" alt="click hubli logo"
                className="w-[18rem] mx-auto py-3.5 md:w-[20rem]"
            />
            <h1 className="text-[#118C6F] text-lg leading-5 my-2.5 md:hidden">Send Flowers, Cakes, Roses, Birthday Gifts, Anniversary Gifts All over India</h1>
            <button className="bg-[#f0ad4e] border border-[#eea236] hover:bg-[#dc5e1f] px-3 py-1.5 text-white text-sm font-bold place-self-end self-baseline lg:self-center">Track Order</button>
            <div className='mt-6 pb-2.5 self-baseline lg:self-center place-self-end'>
                <p className="flex justify-center items-center gap-1 font-semibold text-sm"><SmartphoneIcon height={16}/>Call Us : +91-84978-08999</p>
                <p className="flex justify-center items-center gap-1 font-semibold text-sm"><MailIcon height={16}/>Email : clickhubli@gmail.com</p>
            </div>
        </div>
        <nav className="bg-[#1e7968] w-full px-4 py-2 flex gap-2 md:justify-center items-center text-white sticky">            
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <MenuIcon height={26} className='cursor-pointer active:scale-125 md:hidden'/>
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

            <span className="md:hidden">MENU</span>

            <ul className="flex text-[0.7rem] lg:text-[0.9rem] px-1 gap-3 h-full max-[767px]:hidden">
                <li className="uppercase pl-2 flex items-center">home</li>
                <li className="uppercase border-l border-blue-600 pl-2 ">about us</li>
                <li className="uppercase border-l border-blue-600 pl-2 ">valentines day</li>
                <li className="uppercase border-l border-blue-600 pl-2 ">shop by occasion</li>
                <li className="uppercase border-l border-blue-600 pl-2 flex items-center">products</li>
                <li className="uppercase border-l border-blue-600 pl-2 ">shop by relation</li>
                <li className="uppercase border-l border-blue-600 pl-2 ">design sarees</li>
                <li className="uppercase border-l border-blue-600 pl-2 ">delivery cities</li>
                <li className="uppercase border-x border-blue-600 px-2 flex items-center">contact</li>
            </ul>
        </nav>
    </header>
  )
}
