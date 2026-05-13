import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { FaDownload, FaFileAlt } from 'react-icons/fa'
import { Image } from '@imagekit/react'
import scrollToTop from '../utils/ScrollToTop'
import logo from '../assets/InsusLogo.jpeg'
import founder from '../assets/Founder.jpeg'
import cofounder from '../assets/CO_Founder2.jpeg'

/* ──────────────── image helper ──────────────── */
const imgToBase64 = (src) =>
    new Promise((resolve) => {
        const img = new window.Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => {
            const c = document.createElement('canvas')
            c.width = img.naturalWidth
            c.height = img.naturalHeight
            c.getContext('2d').drawImage(img, 0, 0)
            resolve(c.toDataURL('image/jpeg', 0.92))
        }
        img.onerror = () => resolve(null)
        img.src = src
    })

/* ───────────────── color palette ───────────────── */
const NAVY = '#0b1120'
const NAVY2 = '#121d33'
const NAVY3 = '#1a2744'
const GOLD = '#d4a023'
const GOLD2 = '#f5c542'
const CREAM = '#fdf6e3'
const WHITE = '#ffffff'
const GRAY = '#a0aec0'
const LTGRAY = '#e2e8f0'

/* ──────────────── PDF generation ──────────────── */
const generatePDF = async (setLoading) => {
    setLoading(true)
    const { jsPDF } = await import('jspdf')
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
    const W = 297, H = 210

    /* pre-load images */
    const [logoB64, founderB64, cofounderB64] = await Promise.all([
        imgToBase64(logo), imgToBase64(founder), imgToBase64(cofounder),
    ])

    const urls = [
        'https://ik.imagekit.io/officialvriddhi/insus-infratech/Marriot1.jpeg',
        'https://ik.imagekit.io/officialvriddhi/insus-infratech/RamadaHotel1.jpeg',
        'https://ik.imagekit.io/officialvriddhi/insus-infratech/sterlingAyodhya.jpeg',
        'https://ik.imagekit.io/officialvriddhi/insus-infratech/Milleniaregencylucknow1.jpeg',
        'https://ik.imagekit.io/officialvriddhi/insus-infratech/DainikBhaskar1.jpeg',
        'https://ik.imagekit.io/officialvriddhi/insus-infratech/spintLucknow1.jpeg',
        'https://ik.imagekit.io/officialvriddhi/insus-infratech/Marriot2.jpeg',
        'https://ik.imagekit.io/officialvriddhi/insus-infratech/RamadaHotel2.jpeg',
    ]
    const pImgs = await Promise.all(urls.map(imgToBase64))

    /* ──── shared helpers ──── */
    const fullBg = (hex) => { pdf.setFillColor(hex); pdf.rect(0, 0, W, H, 'F') }
    const goldStrip = (y = H - 5) => { pdf.setFillColor(GOLD); pdf.rect(0, y, W, 5, 'F') }
    const topStrip = () => { pdf.setFillColor(GOLD); pdf.rect(0, 0, W, 5, 'F') }
    const addLogo = (x = W - 48, y = 8, s = 18) => { if (logoB64) pdf.addImage(logoB64, 'JPEG', x, y, s, s) }
    const sectionTitle = (text, x, y, color = WHITE) => {
        pdf.setFont('helvetica', 'bold'); pdf.setFontSize(26); pdf.setTextColor(color)
        pdf.text(text, x, y)
    }
    const leftPanel = (hex = NAVY3) => { pdf.setFillColor(hex); pdf.rect(0, 0, W * 0.45, H, 'F') }
    const rightPanel = (hex = NAVY3) => { pdf.setFillColor(hex); pdf.rect(W * 0.55, 0, W * 0.45, H, 'F') }
    const dividerLine = (x) => { pdf.setDrawColor(GOLD); pdf.setLineWidth(0.8); pdf.line(x, 25, x, H - 25) }


    /* ═══════════════════════════════════════════
       SLIDE 1 — COVER (Premium)
    ═══════════════════════════════════════════ */
    fullBg(NAVY)

    // layered geometric background panels
    pdf.setFillColor(NAVY2)
    pdf.triangle(0, 0, W * 0.55, 0, 0, H, 'F')
    pdf.setFillColor(NAVY3); pdf.setGState(new pdf.GState({ opacity: 0.5 }))
    pdf.triangle(W, 0, W, H, W * 0.4, H, 'F')
    pdf.setGState(new pdf.GState({ opacity: 1 }))

    // subtle radial-ish center glow (layered translucent rects)
    pdf.setFillColor('#1e3a5f'); pdf.setGState(new pdf.GState({ opacity: 0.25 }))
    pdf.roundedRect(W / 2 - 90, 15, 180, H - 30, 14, 14, 'F')
    pdf.setGState(new pdf.GState({ opacity: 0.15 }))
    pdf.roundedRect(W / 2 - 110, 10, 220, H - 20, 18, 18, 'F')
    pdf.setGState(new pdf.GState({ opacity: 1 }))

    // gold corner brackets (top-left & bottom-right)
    const bLen = 30, bThick = 2
    pdf.setFillColor(GOLD)
    pdf.rect(14, 14, bLen, bThick, 'F'); pdf.rect(14, 14, bThick, bLen, 'F') // TL
    pdf.rect(W - 14 - bLen, 14, bLen, bThick, 'F'); pdf.rect(W - 16, 14, bThick, bLen, 'F') // TR
    pdf.rect(14, H - 16, bLen, bThick, 'F'); pdf.rect(14, H - 14 - bLen, bThick, bLen, 'F') // BL
    pdf.rect(W - 14 - bLen, H - 16, bLen, bThick, 'F'); pdf.rect(W - 16, H - 14 - bLen, bThick, bLen, 'F') // BR

    // thick gold bottom strip
    pdf.setFillColor(GOLD); pdf.rect(0, H - 7, W, 7, 'F')
    // thin gold top accent
    pdf.setFillColor(GOLD2); pdf.rect(0, 0, W, 3, 'F')

    // logo — centred
    if (logoB64) pdf.addImage(logoB64, 'JPEG', W / 2 - 26, 20, 52, 52)

    // company name — big & refined
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(46); pdf.setTextColor(WHITE)
    pdf.text('INSUS INFRATECH', W / 2, 96, { align: 'center' })

    // ornamental divider (line — diamond — line)
    const divY = 110, divHalf = 55
    pdf.setDrawColor(GOLD); pdf.setLineWidth(0.6)
    pdf.line(W / 2 - divHalf, divY, W / 2 - 5, divY)
    pdf.line(W / 2 + 5, divY, W / 2 + divHalf, divY)
    // small diamond
    const dm = 3.5
    pdf.setFillColor(GOLD)
    pdf.triangle(W / 2, divY - dm, W / 2 + dm, divY, W / 2, divY + dm, 'F')
    pdf.triangle(W / 2, divY - dm, W / 2 - dm, divY, W / 2, divY + dm, 'F')

    // tagline
    pdf.setFont('helvetica', 'italic'); pdf.setFontSize(14); pdf.setTextColor(GOLD)
    pdf.text('" Building Foundations for a Better Tomorrow "', W / 2, 124, { align: 'center' })

    // info block — founder / address / phone
    pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10); pdf.setTextColor(LTGRAY)
    pdf.text('Founder  —  Mr. Ramvilash Yadav', W / 2, 142, { align: 'center' })
    pdf.setTextColor(GRAY)
    pdf.text('B41 Vinayak Tower, Vidhyadhar Nagar, Jaipur', W / 2, 151, { align: 'center' })
    pdf.text('+91 9929005173  •  +91 7340302074', W / 2, 159, { align: 'center' })

    // year badge — pill with gold gradient feel
    pdf.setFillColor(GOLD); pdf.roundedRect(W / 2 - 34, 168, 68, 18, 9, 9, 'F')
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(12); pdf.setTextColor(NAVY)
    pdf.text('Est. 2005  •  32 Years', W / 2, 179.5, { align: 'center' })


    /* ═══════════════════════════════════════════
       SLIDE 2 — FOUNDER  (Image Left, Text Right)
    ═══════════════════════════════════════════ */
    pdf.addPage()
    fullBg(NAVY)
    // left: founder image fills half
    if (founderB64) pdf.addImage(founderB64, 'JPEG', 0, 0, W * 0.42, H)
    // dark overlay on image bottom
    pdf.setFillColor(NAVY); pdf.setGState(new pdf.GState({ opacity: 0.55 }))
    pdf.rect(0, H * 0.7, W * 0.42, H * 0.3, 'F')
    pdf.setGState(new pdf.GState({ opacity: 1 }))
    // founder label on image
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(13); pdf.setTextColor(WHITE)
    pdf.text('Mr. Ramvilash Yadav', 10, H - 18)
    pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10); pdf.setTextColor(GOLD)
    pdf.text('Founder & CMD', 10, H - 10)
    // gold vertical divider
    pdf.setFillColor(GOLD); pdf.rect(W * 0.42, 0, 3, H, 'F')
    // right content
    topStrip()
    const rx = W * 0.42 + 18
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(11); pdf.setTextColor(GOLD)
    pdf.text('ABOUT THE COMPANY', rx, 22)
    sectionTitle('Who We Are', rx, 38)

    const aboutData = [
        { label: 'Year of Establishment', value: '2005' },
        { label: 'Legacy', value: '32 Years of industry excellence' },
        { label: 'Vision & Mission', value: 'To deliver high-quality construction and bespoke design solutions, blending traditional trust with modern engineering excellence.' },
        { label: 'Specialization', value: 'Premium End-to-End Interior Design and Bespoke Full Furnishing Work.' },
    ]
    let ay = 54
    aboutData.forEach((item) => {
        pdf.setFillColor(GOLD); pdf.rect(rx, ay - 1, 2, 12, 'F')
        pdf.setFont('helvetica', 'bold'); pdf.setFontSize(11); pdf.setTextColor(GOLD2)
        pdf.text(item.label, rx + 6, ay + 4)
        pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10); pdf.setTextColor(LTGRAY)
        const lines = pdf.splitTextToSize(item.value, W * 0.5)
        pdf.text(lines, rx + 6, ay + 12)
        ay += 12 + lines.length * 6 + 6
    })
    goldStrip()


    /* ═══════════════════════════════════════════
       SLIDE 3 — CO-FOUNDER  (Image Left, Text Right)
    ═══════════════════════════════════════════ */
    pdf.addPage()
    fullBg(NAVY)
    // left: co-founder image fills left half (same layout as founder)
    if (cofounderB64) pdf.addImage(cofounderB64, 'JPEG', 0, 0, W * 0.42, H)
    // dark overlay on image bottom
    pdf.setFillColor(NAVY); pdf.setGState(new pdf.GState({ opacity: 0.55 }))
    pdf.rect(0, H * 0.7, W * 0.42, H * 0.3, 'F')
    pdf.setGState(new pdf.GState({ opacity: 1 }))
    // co-founder label on image
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(13); pdf.setTextColor(WHITE)
    pdf.text('Mr. Biresh Yadav', 10, H - 18)
    pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10); pdf.setTextColor(GOLD)
    pdf.text('Co-Founder  •  Since 2023', 10, H - 10)
    // gold vertical divider
    pdf.setFillColor(GOLD); pdf.rect(W * 0.42, 0, 3, H, 'F')
    // right content
    topStrip()
    const cfx = W * 0.42 + 18
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(11); pdf.setTextColor(GOLD)
    pdf.text('LEADERSHIP', cfx, 22)
    sectionTitle('Co-Founder', cfx, 38)

    const coFounderInfo = [
        { label: 'Name', value: 'Mr. Biresh Yadav' },
        { label: 'Role', value: 'Co-Founder' },
        { label: 'Joined', value: '2023' },
        { label: 'Contribution', value: 'Bringing fresh vision and modern business strategies to drive growth and expand the company\'s portfolio across new sectors.' },
    ]
    let cfy = 54
    coFounderInfo.forEach((item) => {
        pdf.setFillColor(GOLD); pdf.rect(cfx, cfy - 1, 2, 12, 'F')
        pdf.setFont('helvetica', 'bold'); pdf.setFontSize(11); pdf.setTextColor(GOLD2)
        pdf.text(item.label, cfx + 6, cfy + 4)
        pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10); pdf.setTextColor(LTGRAY)
        const lines = pdf.splitTextToSize(item.value, W * 0.5)
        pdf.text(lines, cfx + 6, cfy + 12)
        cfy += 12 + lines.length * 6 + 6
    })
    goldStrip()


    /* ═══════════════════════════════════════════
       SLIDE 3 — SERVICES  (Full dark page, grid)
    ═══════════════════════════════════════════ */
    pdf.addPage()
    fullBg(NAVY)
    topStrip()
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(11); pdf.setTextColor(GOLD)
    pdf.text('OUR EXPERTISE', 20, 22)
    sectionTitle('Services Offered', 20, 38)
    // gold underline
    pdf.setFillColor(GOLD); pdf.rect(20, 41, 60, 2, 'F')

    const svcs = [
        { title: 'Residential Construction', desc: 'High-end homes and luxury villas with premium finishes and modern architectural design.' },
        { title: 'Commercial Construction', desc: 'Modern corporate offices, retail outlets, and commercial complexes delivered to international standards.' },
        { title: 'Renovation & Remodeling', desc: 'Transforming existing properties with contemporary designs and structural upgrades.' },
        { title: 'Architectural Planning', desc: 'Expert building layout, design consulting, and space optimization for every project.' },
        { title: 'Full Furnishing Solutions', desc: 'Complete interior and exterior furnishing — from concept to move-in ready.' },
        { title: 'Turnkey Projects', desc: 'Comprehensive project management from concept to completion — a single-window solution.' },
    ]
    const cW = 124, cH = 42, gX = 10, gY = 10
    svcs.forEach((s, i) => {
        const col = i % 2, row = Math.floor(i / 2)
        const x = 20 + col * (cW + gX)
        const y = 52 + row * (cH + gY)
        // card bg
        pdf.setFillColor(NAVY3); pdf.roundedRect(x, y, cW, cH, 3, 3, 'F')
        // left gold bar
        pdf.setFillColor(GOLD); pdf.rect(x, y, 3, cH, 'F')
        // number badge
        pdf.setFillColor(GOLD); pdf.circle(x + 14, y + 12, 5, 'F')
        pdf.setFont('helvetica', 'bold'); pdf.setFontSize(10); pdf.setTextColor(NAVY)
        pdf.text(String(i + 1), x + 14, y + 14, { align: 'center' })
        // title
        pdf.setFont('helvetica', 'bold'); pdf.setFontSize(11); pdf.setTextColor(WHITE)
        pdf.text(s.title, x + 24, y + 14)
        // desc
        pdf.setFont('helvetica', 'normal'); pdf.setFontSize(8.5); pdf.setTextColor(GRAY)
        const dl = pdf.splitTextToSize(s.desc, cW - 28)
        pdf.text(dl, x + 10, y + 24)
    })
    goldStrip()


    /* ═══════════════════════════════════════════
       SLIDE 4 — HOSPITALITY  (Image Right, List Left)
    ═══════════════════════════════════════════ */
    pdf.addPage()
    fullBg(NAVY)
    // right: big project image fills right half
    if (pImgs[0]) pdf.addImage(pImgs[0], 'JPEG', W * 0.48, 0, W * 0.52, H)
    // gradient overlay on image
    pdf.setFillColor(NAVY); pdf.setGState(new pdf.GState({ opacity: 0.35 }))
    pdf.rect(W * 0.48, 0, W * 0.52, H, 'F')
    pdf.setGState(new pdf.GState({ opacity: 1 }))
    // gold divider
    pdf.setFillColor(GOLD); pdf.rect(W * 0.48 - 2, 0, 3, H, 'F')

    topStrip()
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(11); pdf.setTextColor(GOLD)
    pdf.text('PROJECT PORTFOLIO', 20, 22)
    sectionTitle('Hospitality Sector', 20, 40)
    pdf.setFontSize(14); pdf.setTextColor(LTGRAY)
    pdf.text('Hotels', 20, 50)
    pdf.setFillColor(GOLD); pdf.rect(20, 53, 40, 2, 'F')

    const hotels = [
        'Marriott Hotel & Ramada Hotel\n(Dangaich Group), Jaipur',
        'Cygnett Style Ganga &\nCygnett Collection, Jaipur',
        'Sterling Ayodhya, Sterling Saryu\n& Cygnett Collection, Ayodhya',
        'Hotel Millenia Regency &\nMillenia Residence, Lucknow',
        'Maya International Hotel\n& Divij Inn',
    ]
    hotels.forEach((h, i) => {
        const y = 66 + i * 24
        pdf.setFillColor(GOLD); pdf.circle(26, y, 3, 'F')
        pdf.setFont('helvetica', 'bold'); pdf.setFontSize(8); pdf.setTextColor(NAVY)
        pdf.text(String(i + 1), 26, y + 2, { align: 'center' })
        pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10); pdf.setTextColor(LTGRAY)
        pdf.text(h, 33, y + 2)
    })

    // small image thumbnails on the right overlay
    const thumbW = 48, thumbH = 34
    if (pImgs[1]) { pdf.addImage(pImgs[1], 'JPEG', W * 0.52, H - thumbH - 12, thumbW, thumbH); pdf.setDrawColor(GOLD); pdf.setLineWidth(1); pdf.rect(W * 0.52, H - thumbH - 12, thumbW, thumbH, 'S') }
    if (pImgs[2]) { pdf.addImage(pImgs[2], 'JPEG', W * 0.52 + thumbW + 6, H - thumbH - 12, thumbW, thumbH); pdf.setDrawColor(GOLD); pdf.setLineWidth(1); pdf.rect(W * 0.52 + thumbW + 6, H - thumbH - 12, thumbW, thumbH, 'S') }
    if (pImgs[3]) { pdf.addImage(pImgs[3], 'JPEG', W * 0.52 + (thumbW + 6) * 2, H - thumbH - 12, thumbW, thumbH); pdf.setDrawColor(GOLD); pdf.setLineWidth(1); pdf.rect(W * 0.52 + (thumbW + 6) * 2, H - thumbH - 12, thumbW, thumbH, 'S') }
    goldStrip()


    /* ═══════════════════════════════════════════
       SLIDE 5 — CORPORATE  (Image Left, List Right)
    ═══════════════════════════════════════════ */
    pdf.addPage()
    fullBg(NAVY)
    // left: big project image fills left half
    if (pImgs[4]) pdf.addImage(pImgs[4], 'JPEG', 0, 0, W * 0.48, H)
    pdf.setFillColor(NAVY); pdf.setGState(new pdf.GState({ opacity: 0.3 }))
    pdf.rect(0, 0, W * 0.48, H, 'F')
    pdf.setGState(new pdf.GState({ opacity: 1 }))
    // gold divider
    pdf.setFillColor(GOLD); pdf.rect(W * 0.48, 0, 3, H, 'F')

    topStrip()
    const cx = W * 0.48 + 18
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(11); pdf.setTextColor(GOLD)
    pdf.text('PROJECT PORTFOLIO', cx, 22)
    sectionTitle('Corporate & Retail', cx, 40)
    pdf.setFontSize(14); pdf.setTextColor(LTGRAY)
    pdf.text('Sector', cx, 50)
    pdf.setFillColor(GOLD); pdf.rect(cx, 53, 40, 2, 'F')

    const corps = [
        'Dainik Bhaskar Offices:\nPatna, Muzaffarpur, Bhopal',
        'Wilo Regional Offices:\nBaroda, Jaipur, Indore',
        'Spinny Corporate Offices:\nGurgaon, Mumbai, Bangalore,\nJaipur, Lucknow',
        'True Value Showroom:\nLucknow',
        'Game Zone (DB Mall)',
    ]
    corps.forEach((c, i) => {
        const y = 66 + i * 24
        pdf.setFillColor('#3b82f6'); pdf.circle(cx + 6, y, 3, 'F')
        pdf.setFont('helvetica', 'bold'); pdf.setFontSize(8); pdf.setTextColor(WHITE)
        pdf.text(String(i + 1), cx + 6, y + 2, { align: 'center' })
        pdf.setFont('helvetica', 'normal'); pdf.setFontSize(10); pdf.setTextColor(LTGRAY)
        pdf.text(c, cx + 13, y + 2)
    })

    // thumbnails bottom-left over the big image
    if (pImgs[5]) { pdf.addImage(pImgs[5], 'JPEG', 8, H - thumbH - 12, thumbW, thumbH); pdf.setDrawColor(GOLD); pdf.setLineWidth(1); pdf.rect(8, H - thumbH - 12, thumbW, thumbH, 'S') }
    if (pImgs[6]) { pdf.addImage(pImgs[6], 'JPEG', 8 + thumbW + 6, H - thumbH - 12, thumbW, thumbH); pdf.setDrawColor(GOLD); pdf.setLineWidth(1); pdf.rect(8 + thumbW + 6, H - thumbH - 12, thumbW, thumbH, 'S') }
    if (pImgs[7]) { pdf.addImage(pImgs[7], 'JPEG', 8 + (thumbW + 6) * 2, H - thumbH - 12, thumbW, thumbH); pdf.setDrawColor(GOLD); pdf.setLineWidth(1); pdf.rect(8 + (thumbW + 6) * 2, H - thumbH - 12, thumbW, thumbH, 'S') }
    goldStrip()


    /* ═══════════════════════════════════════════
       SLIDE 6 — WHY CHOOSE US  (Full dark, 5 USP cards)
    ═══════════════════════════════════════════ */
    pdf.addPage()
    fullBg(NAVY)
    topStrip()
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(11); pdf.setTextColor(GOLD)
    pdf.text('UNIQUE SELLING POINTS', 20, 22)
    sectionTitle('Why Choose Insus Infra', 20, 40)
    pdf.setFillColor(GOLD); pdf.rect(20, 43, 60, 2, 'F')

    const usps = [
        { title: '32 Years of Trust', desc: 'A decades-long legacy of reliability and excellence in the construction industry.' },
        { title: 'Quality Standards', desc: 'Strict adherence to premium construction materials and international finishing standards.' },
        { title: 'Timely Project Delivery', desc: 'Proven track record of meeting strict deadlines even for the largest projects.' },
        { title: 'Cost Effectiveness', desc: 'Delivering luxury and uncompromising quality within optimized, transparent budgets.' },
        { title: 'Comprehensive Solutions', desc: 'A single-window service covering construction, interior design, and full furnishing.' },
    ]
    usps.forEach((u, i) => {
        const isLeft = i < 3
        const col = isLeft ? i : i - 3
        const x = isLeft ? 20 + col * 88 : 20 + col * 130
        const y = isLeft ? 55 : 130
        const cardW2 = isLeft ? 82 : 124
        const cardH2 = isLeft ? 60 : 55

        pdf.setFillColor(NAVY3); pdf.roundedRect(x, y, cardW2, cardH2, 4, 4, 'F')
        // gold top edge
        pdf.setFillColor(GOLD); pdf.rect(x, y, cardW2, 3, 'F')
        // number
        pdf.setFillColor(GOLD); pdf.circle(x + 12, y + 16, 6, 'F')
        pdf.setFont('helvetica', 'bold'); pdf.setFontSize(12); pdf.setTextColor(NAVY)
        pdf.text(String(i + 1), x + 12, y + 19, { align: 'center' })
        // title
        pdf.setFont('helvetica', 'bold'); pdf.setFontSize(11); pdf.setTextColor(GOLD2)
        pdf.text(u.title, x + 22, y + 18)
        // desc
        pdf.setFont('helvetica', 'normal'); pdf.setFontSize(8.5); pdf.setTextColor(GRAY)
        const dl = pdf.splitTextToSize(u.desc, cardW2 - 14)
        pdf.text(dl, x + 7, y + 30)
    })
    goldStrip()


    /* ═══════════════════════════════════════════
       SLIDE 7 — TESTIMONIALS  (Dark with quote cards)
    ═══════════════════════════════════════════ */
    pdf.addPage()
    fullBg(NAVY)
    topStrip()
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(11); pdf.setTextColor(GOLD)
    pdf.text('CLIENT VOICES', 20, 22)
    sectionTitle('What Our Clients Say', 20, 40)
    pdf.setFillColor(GOLD); pdf.rect(20, 43, 60, 2, 'F')

    const testimonials = [
        { quote: 'Insus Infra delivered our hotel projects with unmatched quality and a deep understanding of luxury hospitality standards.', author: 'Cygnett Group' },
        { quote: 'Their ability to execute large-scale corporate offices across multiple cities is highly commendable. Truly a professional team.', author: 'Dainik Bhaskar Group' },
        { quote: 'A 32-year legacy you can trust. Their work on our Marriott and Ramada projects was flawless and timely.', author: 'Dangaich Group' },
    ]
    testimonials.forEach((t, i) => {
        const tcW = 82, tcH = 95
        const x = 20 + i * (tcW + 12)
        const y = 55
        pdf.setFillColor(NAVY3); pdf.roundedRect(x, y, tcW, tcH, 4, 4, 'F')
        // gold left edge
        pdf.setFillColor(GOLD); pdf.rect(x, y, 3, tcH, 'F')
        // big quote mark
        pdf.setFont('helvetica', 'bold'); pdf.setFontSize(40); pdf.setTextColor(NAVY2)
        pdf.text('"', x + 8, y + 22)
        // stars
        pdf.setFontSize(10); pdf.setTextColor(GOLD)
        pdf.text('★ ★ ★ ★ ★', x + 10, y + 30)
        // quote text
        pdf.setFont('helvetica', 'italic'); pdf.setFontSize(9); pdf.setTextColor(LTGRAY)
        const ql = pdf.splitTextToSize(t.quote, tcW - 16)
        pdf.text(ql, x + 10, y + 40)
        // author
        pdf.setFont('helvetica', 'bold'); pdf.setFontSize(10); pdf.setTextColor(GOLD2)
        pdf.text(`— ${t.author}`, x + 10, y + tcH - 10)
    })

    // bottom decorative bar
    pdf.setFillColor(NAVY3); pdf.rect(0, H - 40, W, 40, 'F')
    pdf.setFillColor(GOLD); pdf.rect(0, H - 40, W, 2, 'F')
    pdf.setFont('helvetica', 'normal'); pdf.setFontSize(8); pdf.setTextColor(GRAY)
    pdf.text('Insus Infratech Pvt Ltd  •  Trusted since 2005', W / 2, H - 6, { align: 'center' })
    goldStrip()


    /* ═══════════════════════════════════════════
       SLIDE 8 — CONTACT / BACK COVER
    ═══════════════════════════════════════════ */
    pdf.addPage()
    fullBg(NAVY)
    // decorative corners
    pdf.setFillColor(NAVY2)
    pdf.triangle(0, 0, W * 0.3, 0, 0, H * 0.3, 'F')
    pdf.triangle(W, H, W * 0.7, H, W, H * 0.7, 'F')
    pdf.setFillColor(GOLD); pdf.rect(0, 0, W, 5, 'F'); pdf.rect(0, H - 5, W, 5, 'F')

    if (logoB64) pdf.addImage(logoB64, 'JPEG', W / 2 - 24, 22, 48, 48)

    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(36); pdf.setTextColor(WHITE)
    pdf.text("Let's Build Together", W / 2, 90, { align: 'center' })
    pdf.setFont('helvetica', 'normal'); pdf.setFontSize(13); pdf.setTextColor(GRAY)
    pdf.text('Planning a commercial, hospitality, or infrastructure project?', W / 2, 105, { align: 'center' })

    // contact card
    pdf.setFillColor(NAVY3); pdf.roundedRect(W / 2 - 80, 118, 160, 60, 6, 6, 'F')
    pdf.setFillColor(GOLD); pdf.rect(W / 2 - 80, 118, 160, 3, 'F')
    pdf.setFont('helvetica', 'bold'); pdf.setFontSize(16); pdf.setTextColor(GOLD2)
    pdf.text('CONTACT US', W / 2, 135, { align: 'center' })
    pdf.setFont('helvetica', 'normal'); pdf.setFontSize(11); pdf.setTextColor(WHITE)
    pdf.text('Mr. Ramvilash Yadav — Founder & CMD', W / 2, 147, { align: 'center' })
    pdf.setTextColor(LTGRAY); pdf.setFontSize(10)
    pdf.text('+91 9929005173  •  +91 7340302074', W / 2, 157, { align: 'center' })
    pdf.text('B41 Vinayak Tower, Vidhyadhar Nagar, Jaipur', W / 2, 165, { align: 'center' })

    pdf.setFont('helvetica', 'italic'); pdf.setFontSize(10); pdf.setTextColor(GOLD)
    pdf.text('" Building Foundations for a Better Tomorrow "', W / 2, 192, { align: 'center' })


    /* ─── save ─── */
    pdf.save('Insus_Infra_Brochure.pdf')
    setLoading(false)
}


/* ─────────────────── React Component ─────────────────── */

const Brochure = () => {
    const sectionRef = useRef(null)
    const inView = useInView(sectionRef, { once: true, amount: 0.3 })
    const [loading, setLoading] = useState(false)

    useEffect(() => { scrollToTop() }, [])

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white text-gray-800 overflow-hidden" id="brochure">
            <section
                ref={sectionRef}
                className="relative text-white py-24 md:py-36 mx-4 md:mx-6 lg:mx-10 mt-6 rounded-3xl overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <Image src="/AboutImg.jpg" alt="Brochure background" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-black/65 z-10" />
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-20 bg-gradient-to-r from-blue-600/15 via-transparent to-amber-600/15"
                />
                <div className="absolute top-6 right-6 z-30">
                    <img src={logo} alt="logo" className="h-10 md:h-14 rounded-lg object-contain shadow-lg" loading="lazy" />
                </div>

                <div className="relative z-30 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
                    >
                        <FaFileAlt className="text-amber-400 text-sm" />
                        <span className="text-sm font-medium text-gray-200">Company Brochure</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
                    >
                        Insus Infra Pvt Ltd
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4"
                    >
                        Download our company brochure — 32 years of construction excellence,
                        premium projects, and trusted partnerships across India.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        className="text-sm text-gray-400 mb-10"
                    >
                        8-page PDF  •  Company Profile  •  Services  •  Projects  •  Testimonials
                    </motion.p>

                    <motion.button
                        disabled={loading}
                        onClick={() => generatePDF(setLoading)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                        whileHover={!loading ? { scale: 1.06, boxShadow: '0 12px 35px rgba(234,179,8,0.45)' } : {}}
                        whileTap={!loading ? { scale: 0.95 } : {}}
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-black rounded-xl font-bold text-lg shadow-xl hover:from-yellow-400 hover:to-amber-400 transition-all disabled:opacity-60 disabled:cursor-wait"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Generating PDF…
                            </>
                        ) : (
                            <>
                                <FaDownload className="text-lg" />
                                Download Brochure
                            </>
                        )}
                    </motion.button>
                </div>
            </section>
        </section>
    )
}

export default Brochure
