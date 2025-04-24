import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

import { Mail, Paperclip, FileText, ShieldCheck } from "lucide-react"
import { Github } from "lucide-react"
import FeatureGrid from '@/components/portfolio-comps/feature-grid'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

const features = [
    {
        title: "Plain Text & HTML Support",
        description: "Send beautiful HTML emails or simple plain-text messages.",
        icon: <FileText />,
    },
    {
        title: "File Attachments",
        description: "Upload and send multiple files with supported MIME types.",
        icon: <Paperclip />,
    },
    {
        title: "SMTP Powered",
        description: "Secure delivery with authenticated SMTP transport.",
        icon: <Mail />,
    },
    {
        title: "Error Handling",
        description: "Graceful error messages and field validation included.",
        icon: <ShieldCheck />,
    },
]

export function MailServiceFeatures() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
            <FeatureGrid features={features} />
        </div>
    )
}

export function BuiltForDevelopers() {
    return (
        <div className="mt-16 max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Built for Developers</h2>
            <p className="text-lg sm:text-xl text-justify">
                This micro-SaaS email service is made to plug directly into your
                Next.js or Node.js projects — with zero hassle. It’s fully self-hosted,
                extensible, and designed to give developers full control of email
                workflows without relying on 3rd-party services.
            </p>
            <div className="mt-6 flex justify-center">
                <Button asChild>
                    <Link
                        href="https://github.com/ms-vishwanath/mail-service.git"
                        target="_blank"
                        className="flex items-center gap-"
                    >
                        <GitHubLogoIcon />   View source on Github
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default function Page() {
    return (
        <div>
            <div className="flex p-2 justify-end items-center">
                <ThemeSwitcher />
            </div>

            <section className="flex flex-col justify-center h-[90dvh] text-center space-y-6 px-4">
                <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">Mail Service</h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                    Mail Service is a self-hostable micro-SaaS built with developers in mind. It offers reliable email delivery with support for plain text, HTML content, and file attachments — all running on your own infrastructure.
                    Designed for seamless integration with modern stacks like Next.js and Node.js, this lightweight service removes dependency on third-party email platforms, giving you full control, privacy, and flexibility.                </p>
                <div>
                    <Button asChild size="lg">
                        <Link href="/api-docs">Visit Docs</Link>
                    </Button>
                </div>
            </section>

            <MailServiceFeatures />
            <div className='h-dvh flex flex-col justify-center'>
                <BuiltForDevelopers />
            </div>
        </div>
    )
}
