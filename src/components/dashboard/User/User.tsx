"use client"

import Link from "next/link"
import { LayoutDashboard, Users } from "lucide-react"
import ReusableLayout from "../../shared/Layout/ReusableLayout"

import { ReactNode } from "react"

interface UserProps {
  children?: ReactNode
}

type MenuItem = {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  children?: MenuItem[];
};

const User = ({ children }: UserProps) => {
  const items: MenuItem[] = [
    {
      key: "1",
      label: <Link href="/user">Dashboard</Link>,
      icon: <LayoutDashboard size={20} />
    },
    {
      key: "2",
      icon: <Users size={20} />,
       label: <Link href="/user/editdetails">Edit your details</Link>,
    },
    {
      key: "3",
      icon: <Users size={20} />,
       label: <Link href="/user/booking">Your bookings</Link>,
    },
  ]

  return (
    <ReusableLayout items={items}>
      {/* In Next.js, you would typically pass children directly */}
      {/* <Outlet /> would be replaced with the page content */}
      {children}
    </ReusableLayout>
  )
}

export default User