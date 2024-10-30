import Link from "next/link"
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
    return (
        <div>
            <header className="flex justify-between max-w-screen-2xl mx-auto bg-blue-950 text-white py-5 px-5">

                <div>
                    <h1 >Madiha Rashid</h1>
                </div>
                <div className="flex">
                    <ul className="space-x-5 hidden md:block">
                        <li className="space-x-8">
                            <Link href={"./"}>Home</Link>
                            <Link href={"./about"}>About</Link>
                            <Link href={"./skills"}>Skills</Link>
                            <Link href={"./project"}>Project</Link>
                            <Link href={"./contact-us"}>Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div>

                    <Sheet>
                        <SheetTrigger className="md:hidden">  <Menu /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                <ul className="space-x-5 hidden md:block">
                        <li className="space-x-5">
                            <Link href={"./"}>Home</Link>
                            <Link href={"./about"}>About</Link>
                            <Link href={"./skills"}>Skills</Link>
                            <Link href={"./project"}>Project</Link>
                            <Link href={"./contact-us"}>Contact us</Link>
                        </li>
                    </ul>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>
            </header>
        </div>
    )
}
export default Header