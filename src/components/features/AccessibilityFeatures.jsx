"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Accessibility, Volume2, VolumeX, ZoomIn, ZoomOut, Palette, Eye, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`
  }, [fontSize])

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }, [highContrast])

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          aria-label="Accessibility Options"
        >
          <Accessibility className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 ml-16"
          >
            <Card className="w-80 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Settings className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Accessibility Options</h3>
                </div>

                <div className="space-y-6">
                  {/* Font Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Font Size: {fontSize}px</label>
                    <div className="flex items-center space-x-3">
                      <Button variant="outline" size="sm" onClick={() => setFontSize(Math.max(12, fontSize - 2))}>
                        <ZoomOut className="w-4 h-4" />
                      </Button>
                      <Slider
                        value={[fontSize]}
                        onValueChange={(value) => setFontSize(value[0])}
                        min={12}
                        max={24}
                        step={2}
                        className="flex-1"
                      />
                      <Button variant="outline" size="sm" onClick={() => setFontSize(Math.min(24, fontSize + 2))}>
                        <ZoomIn className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* High Contrast */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">High Contrast</span>
                    </div>
                    <Button
                      variant={highContrast ? "default" : "outline"}
                      size="sm"
                      onClick={() => setHighContrast(!highContrast)}
                    >
                      <Palette className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Sound Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {soundEnabled ? (
                        <Volume2 className="w-4 h-4 text-gray-600" />
                      ) : (
                        <VolumeX className="w-4 h-4 text-gray-600" />
                      )}
                      <span className="text-sm font-medium text-gray-700">Sound Effects</span>
                    </div>
                    <Button
                      variant={soundEnabled ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSoundEnabled(!soundEnabled)}
                    >
                      {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </Button>
                  </div>

                  {/* Reset Button */}
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => {
                      setFontSize(16)
                      setHighContrast(false)
                      setSoundEnabled(true)
                    }}
                  >
                    Reset to Default
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
