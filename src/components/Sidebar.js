'use client'
import Image from "next/image";
import Link from "next/link";
import { FaHome , FaBook , FaProjectDiagram , FaUser , FaBlogger , FaArrowRight , FaArrowLeft} from "react-icons/fa"
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/navigation";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    name: "About",
    href: "/about",
    icon: FaUser,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FaProjectDiagram,
  },
  {
    name: "Blogs",
    href: "/blog",
    icon: FaBlogger,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: FaBook,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar_wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <FaArrowRight /> : <FaArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar_top">
          <Image
            width={80}
            height={80}
            className="sidebar_logo"
            src="/assets/sidemenu.jpg"
            alt="logo"
          />
        </div>
        <ul className="sidebar_list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar_item" key={name}>
                <Link
                  className={`sidebar_link ${
                    router.pathname === href ? "sidebar_linkactive" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar_icon">
                    <Icon />
                  </span>
                  <span className="sidebar_name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};



export default Sidebar;