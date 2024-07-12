import {
  Coffee,
  Database,
  AtSign,
  Archive,
  Menu as Hamburger,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { useState } from "react";


type MenuItem = {
  title: string;
  href: string;
  Icon: any;
};

const itens: Array<MenuItem> = [
  {
    title: "Home",
    href: "#home",
    Icon: Coffee,
  },
  {
    title: "About",
    href: "#about",
    Icon: AtSign,
  },
  {
    title: "Projects",
    href: "#projects",
    Icon: Database,
  },
  {
    title: "Contact",
    href: "#contact",
    Icon: Archive,
  },
];
export default function Menu() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <ul className="flex items-center text-white/90 gap-[16px]">
        {
          itens.map((item) => (
            <li key={item.title} className="xl:flex flex-row hidden items-center gap-[12px] px-[12px] py-[8px] hover:bg-foreground rounded-md transition">
              <item.Icon size={18} />
              <a href={item.href}>{item.title}</a>
            </li>
          ))
        }
      </ul>
      <Sheet open={isOpen} onOpenChange={toggleMenu} >
        <SheetTrigger aria-label="menu" id="menu" className="text-white/90 xl:hidden" onClick={toggleMenu}><Hamburger /></SheetTrigger>
        <SheetContent>
          <ul className="flex flex-col pt-6  text-white/90 gap-[16px]">
            {
              itens.map((item) => (
                <li onClick={toggleMenu} key={'mobile-' + item.title} className="flex flex-row  items-center gap-[12px] px-[12px] py-[8px] hover:bg-foreground rounded-md transition">
                  <item.Icon size={18} />
                  <a href={item.href}>{item.title}</a>
                </li>
              ))
            }
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

