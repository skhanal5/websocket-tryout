interface PreviewProps {
    contact: string
    messageBlurb: string
    timestamp: string
    isRead: boolean
}

export default function ChatPreview({contact, messageBlurb, timestamp}: PreviewProps) {
    return (
        <div>
            <div>
                {contact}
            </div>
            <div>
                {messageBlurb}
            </div>
            <div>
                {timestamp}
            </div>
        </div>
    )
}