import React from 'react'
import { MessageCircle } from 'lucide-react'
import './WhatsAppButton.css'

const WHATSAPP_NUMBER = '447936543448'

const WhatsAppButton = () => {
  const message = encodeURIComponent(
    `Hi Wood Worx MCR! I'm interested in your services.`
  )
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  )
}

export default WhatsAppButton
