"use client";

import Image from "next/image";
import HeroImage from "@/assets/shodiq.jpg";
import { usePathname, useRouter } from "next/navigation";
import { convertPathnameToTitle } from "@/utils/helper";
import { BreadCrumb } from "primereact/breadcrumb";
import { MenuItem } from "primereact/menuitem";
import { Menubar } from "primereact/menubar";
import { Menu } from "primereact/menu";
import { useRef } from "react";

interface DashboardHeaderComponentProps {
  className?: string;
}

function DashboardHeaderComponent({className} : DashboardHeaderComponentProps) {
  const pathname = usePathname();
  const router = useRouter();
  const title = convertPathnameToTitle(pathname);

  const pathSegments = pathname.split("/").filter(Boolean);
  const items = pathSegments.map((_, index) => {
    const url = "/" + pathSegments.slice(0, index + 1).join("/");
    return {
      label: convertPathnameToTitle(url),
      command: () => router.push(url),
    };
  });

  // if (items[0]?.label !== "Dashboard") {
  //   items.unshift({
  //     label: "Home",
  //     command: () => router.push("/"),
  //   });
  // }

  const start = <h1 className="text-xl font-bold text-white">{title}</h1>;

  const menuLeft = useRef<Menu>(null);
  const menuItems: MenuItem[] = [
    {
      label: "Profile",
      items: [
        {
          label: "Manage Profile",
          icon: "pi pi-user-edit",
        },
        {
          label: "Logout",
          icon: "pi pi-sign-out",
        },
      ],
    },
    // {
    //   label: "Notifications",
    //   items: [
    //     {
    //       label: "New Messages",
    //       icon: "pi pi-envelope",
    //     },
    //   ],
    // },
  ];

  const home = {
    icon: "pi pi-home",
    command: () => router.push("/"),
  }

  const handleToggle = (e: React.MouseEvent) => {
    if (menuLeft.current) {
      menuLeft.current.toggle(e);
    }
  };

  const end = (
    <>
      <Image
        src={HeroImage}
        alt="Hero Image"
        width={0}
        height={0}
        className="h-[50px] w-[50px] cursor-pointer rounded-full object-cover transition-opacity duration-300 ease-in-out hover:opacity-80"
        priority
        onClick={(e: React.MouseEvent<HTMLImageElement>) => handleToggle(e)}
      />
      <Menu
        model={menuItems}
        popup
        ref={menuLeft}
        id="popup_menu_left"
        className="mt-1"
        pt={{
          root:{className: "rounded-xl border border-slate-700 bg-slate-800"},
          submenuHeader: {className: "bg-slate-800"},
          menuitem: {className: "hover:bg-slate-700"},
        }}
      />
    </>
  );

  return (
    <div className={`${className}`}>
      <Menubar
        start={start}
        end={end}
        className="mb-3 flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 px-4"
      />
      <BreadCrumb
        model={items}
        home={home}
        className="rounded-xl border border-slate-700 bg-slate-800"
      />
    </div>
  );
}

export default DashboardHeaderComponent;
