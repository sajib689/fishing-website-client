"use client"

import ReusableLayout from "@/components/shared/Layout/ReusableLayout"
import { LayoutDashboard, Users, Anchor, Settings, BookOpen, Calendar } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"

interface MenuItem {
  key: string
  label: ReactNode
  icon?: ReactNode
  children?: MenuItem[]
}

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')
  const isCaptain = pathname.startsWith('/captain')
  const isUser = pathname.startsWith('/user')

  // Common menu items for all roles
  const commonItems: MenuItem[] = [
    {
      key: "dashboard",
      label: <Link href={
        isAdmin ? '/admin' : 
        isCaptain ? '/captain' : 
        '/user'
      }>Dashboard</Link>,
      icon: <LayoutDashboard size={20} />
    }
  ]

  // Admin specific menu
  const adminItems: MenuItem[] = [
    {
      key: "users",
      icon: <Users size={20} />,
      label: "User Management",
      children: [
        {
          key: "all-users",
          label: <Link href="/admin/users">All Users</Link>
        },
        {
          key: "roles",
          label: <Link href="/admin/roles">Roles & Permissions</Link>
        }
      ]
    },
    {
      key: "system",
      icon: <Settings size={20} />,
      label: <Link href="/admin/settings">System Settings</Link>
    }
  ]

  // Captain specific menu
  const captainItems: MenuItem[] = [
    {
      key: "boats",
      icon: <Anchor size={20} />,
      label: "Boats Management",
      children: [
        {
          key: "my-boats",
          label: <Link href="/captain/boats">My Boats</Link>
        },
        {
          key: "add-boat",
          label: <Link href="/captain/boats/add">Add New Boat</Link>
        }
      ]
    },
    {
      key: "schedule",
      icon: <Calendar size={20} />,
      label: <Link href="/captain/schedule">Fishing Schedule</Link>
    }
  ]

  // User specific menu
  const userItems: MenuItem[] = [
    {
      key: "profile",
      icon: <Users size={20} />,
      label: <Link href="/user/editdetails">Edit Your Details</Link>
    },
    {
      key: "bookings",
      icon: <BookOpen size={20} />,
      label: <Link href="/user/booking">Your Bookings</Link>
    }
  ]

  // Combine menu items based on role
  const items = [
    ...commonItems,
    ...(isAdmin ? adminItems : []),
    ...(isCaptain ? captainItems : []),
    ...(isUser ? userItems : [])
  ]

  return (
    <ReusableLayout items={items}>
      {children}
    </ReusableLayout>
  )
}