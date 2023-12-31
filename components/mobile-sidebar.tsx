"use client";

import { Menu } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden" >
                <Menu />
            </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );

}
export default MobileSidebar;