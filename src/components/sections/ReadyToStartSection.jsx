import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import Container from "../ui/Container"
import { Badge } from "../ui/badge"
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  Star,
  Zap,
} from "lucide-react"
import { Link } from "react-router-dom"

export function ReadyToStartSection() {
  const quickStats = [
    { icon: Users, label: "Students Enrolled", value: "15,000+", color: "text-blue-600" },
    { icon: GraduationCap, label: "Graduates", value: "50,000+", color: "text-emerald-600" },
    { icon: Award, label: "Placement Rate", value: "95%", color: "text-purple-600" },
    { icon: BookOpen, label: "Programs", value: "100+", color: "text-orange-600" },
  ]

  const quickActions = [
    {
      title: "Apply Now",
      description: "Start your admission process",
      icon: GraduationCap,
      href: "/apply-now",
      color: "bg-emerald-600 hover:bg-emerald-700",
    },
    {
      title: "Schedule Visit",
      description: "Tour our campus",
      icon: Calendar,
      href: "/contact",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Talk to Counselor",
      description: "Get personalized guidance",
      icon: Phone,
      href: "tel:+917881234567",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      title: "WhatsApp Chat",
      description: "Instant support",
      icon: MessageCircle,
      href: "https://wa.me/917881234567",
      color: "bg-green-600 hover:bg-green-700",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-600 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-600 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-600 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-orange-600 rounded-full animate-float-delayed"></div>
      </div>

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 text-lg px-4 py-2">
            <Zap className="mr-2 h-4 w-4" />
            Ready to Begin?
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Journey</span>{" "}
            Today
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Join thousands of successful graduates who started their career journey at Rungta College. Your future
            begins with a single step.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full ${action.color} flex items-center justify-center transition-transform group-hover:scale-110`}
                >
                  <action.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{action.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                >
                  <Link to={action.href}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join 15,000+ Students Who Chose Excellence</h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Don't wait for tomorrow. Your dream career starts today. Get personalized guidance from our admission
                counselors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-primary hover:text-primary" asChild>
                  <Link to="/apply-now">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Apply Now - Free
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  asChild
                >
                  <a href="tel:+917881234567">
                    <Phone className="mr-2 h-5 w-5" />
                    Call for Free Counseling
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}
