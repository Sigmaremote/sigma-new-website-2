'use client';

import { Copy, Check } from 'lucide-react';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import { useState } from 'react';

interface ShareRowProps {
  title: string;
  url: string;
}

export default function ShareRow({ title, url }: ShareRowProps) {
  const [copied, setCopied] = useState(false);
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={copyToClipboard}
        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 shadow-sm"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white p-3 text-black hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 shadow-sm"
        aria-label="Share on X (Twitter)"
      >
        <FaXTwitter className="size-4" />
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white p-3 text-[#0A66C2] hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 shadow-sm"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin className="size-5" />
      </a>
    </div>
  );
}
