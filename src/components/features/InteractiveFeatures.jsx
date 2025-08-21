"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Bell,
  BookOpen,
  Calendar,
  Download,
  Heart,
  Mail,
  Phone,
  Share2,
  Star,
  Users,
  Zap,
  Gift,
  Award,
  Bookmark,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function QuickActions() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [email, setEmail] = useState("")

  const quickActions = [
    { icon: Calendar, label: "Book Campus Tour", color: "bg-blue-500", href: "/campus-tour" },
    { icon: Download, label: "Download Brochure", color: "bg-emerald-500", href: "/brochure" },
    { icon: Phone, label: "Call Admissions", color: "bg-orange-500", href: "tel:+917000000000" },
    { icon: Mail, label: "Email Inquiry", color: "bg-purple-500", href: "mailto:admissions@rungta.ac.in" },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {quickActions.map((action, index) => (
          <motion.a
            key={action.label}
            href={action.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="block"
          >
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-900">{action.label}</p>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </motion.div>

      {/* Newsletter Subscription */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <Card className="bg-gradient-to-r from-emerald-500 to-teal-600 border-0 text-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Stay Updated</h3>
                <p className="text-sm text-emerald-100">Get latest news and admission updates</p>
              </div>
            </div>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-emerald-100"
              />
              <Button type="submit" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
                {isSubscribed ? <Zap className="w-4 h-4" /> : "Subscribe"}
              </Button>
            </form>
            {isSubscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-emerald-100 mt-2"
              >
                ✨ Successfully subscribed! Welcome to Rungta family.
              </motion.p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export function SocialProof() {
  const stats = [
    { icon: Users, value: "15,000+", label: "Happy Students", color: "text-blue-600" },
    { icon: Award, value: "95%", label: "Placement Rate", color: "text-emerald-600" },
    { icon: Star, value: "4.8/5", label: "Google Rating", color: "text-yellow-600" },
    { icon: BookOpen, value: "50+", label: "Programs", color: "text-purple-600" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
        >
          <div
            className={`w-12 h-12 ${stat.color.replace("text-", "bg-").replace("-600", "-100")} rounded-full flex items-center justify-center mx-auto mb-3`}
          >
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function InteractiveButtons() {
  const [bookmarked, setBookmarked] = useState(false)
  const [liked, setLiked] = useState(false)

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setBookmarked(!bookmarked)}
        className={`transition-all duration-300 ${
          bookmarked ? "bg-yellow-50 border-yellow-300 text-yellow-700" : "hover:bg-yellow-50 hover:border-yellow-300"
        }`}
      >
        <Bookmark className={`w-4 h-4 mr-2 ${bookmarked ? "fill-current" : ""}`} />
        {bookmarked ? "Bookmarked" : "Bookmark"}
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => setLiked(!liked)}
        className={`transition-all duration-300 ${
          liked ? "bg-red-50 border-red-300 text-red-700" : "hover:bg-red-50 hover:border-red-300"
        }`}
      >
        <Heart className={`w-4 h-4 mr-2 ${liked ? "fill-current" : ""}`} />
        {liked ? "Liked" : "Like"}
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => navigator.share?.({ title: "Rungta College", url: window.location.href })}
        className="hover:bg-blue-50 hover:border-blue-300"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>

      <Button variant="outline" size="sm" className="hover:bg-emerald-50 hover:border-emerald-300 bg-transparent">
        <Gift className="w-4 h-4 mr-2" />
        Refer Friend
      </Button>
    </div>
  )
}
