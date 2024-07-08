import { SmartphoneIcon, MailIcon, MenuIcon } from "lucide-react"

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
            <MenuIcon height={26} className='cursor-pointer transition duration-200 active:scale-125'
            />
            MENU
            <ul id="menu" className='absolute top-[100%] bg-red-500 transition-all duration-300'>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </nav>
    </header>
  )
}
